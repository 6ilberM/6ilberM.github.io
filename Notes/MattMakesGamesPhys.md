[TowerFall Physics](https://mattmakesgames.tumblr.com/post/127890619821/towerfall-physics)
------------------------------------------------------------------------------------------

I get a lot of questions about how the physics work in TowerFall. It's a very simple system I arrived at after about a decade of experimenting with tile-based platformers. I wrote an engine ages ago for Game Maker games that uses the same basic concepts, and since then I've simplified and improved it a bit. Also, TowerFall's engine is written in C# so we have fancy features like delegates and structs that make everything nicer. It's nothing ground-breaking, but I decided to write it down in case it helps anyone!

All of TowerFall's physics are handled by two classes: Solids and Actors. Solids are, of course, the collidable level geometry. Actors are physics objects, such as players, arrows, monsters, treasure chests, etc. Anything that has to move and interact with the level geometry is an Actor.The system has a few simple constraints:

-   All colliders are axis-aligned bounding boxes (AABBs)

-   All collider positions and sizes are integer numbers

-   Except for special circumstances, Actors and Solids will never overlap

-   Solids do not interact with other Solids

Actor Basics
------------

Let's start off assuming that Solids will never move - how can Actors move and ensure they never overlap Solids? Actors have a very simple core API with two functions:

```
public void MoveX(float, Action);
public void MoveY(float, Action);

```

Both of these functions take a movement amount as a float, and a collision Action callback as a C# delegate. Actors don't have any concept of their own velocity, acceleration, or gravity. Every class that extends Actor takes care of that, keeping track of its speed and passing it to these functions when appropriate.

Let's look inside the MoveX function:

```
public void MoveX(float amount, Action onCollide)
{
  xRemainder += amount;
  int move = Round(xRemainder);

  if (move != 0)
  {
    xRemainder -= move;
    int sign = Sign(move);

    while (move != 0)
    {
      if (!collideAt(solids, Position + new Vector2(sign, 0))
      {
        //No solid immediately beside us
        Position.X += sign;
        move -= sign;
      }
      else
      {
        //Hit a solid!
        if (onCollide != null)
          onCollide();
        break;
      }
    }
  }
}

```

First of all, we add the movement amount to our "remainder" counter. Since positions are represented as integers we can't move in fractions of pixels, so we only move when the rounded remainder is non-zero.

Now that we know how far we want to move, we simply do it one pixel at a time. For each pixel we check ahead for obstructions, and if the coast is clear we move. If we do hit a wall, we halt movement and call the collision delegate that was passed in.

Why do we pass in a collision delegate? More on this later, but basically it lets us use the same MoveX and MoveY functions to perform lots of different kinds of movement. It also means that classes that extend Actor can easily swap out behaviors for solid collisions.

At this point, we have Actors that move and never intersect Solids - assuming the Solids never move.

Moving Solids Prep
------------------

This is where things can get a bit tricky. I've seen and written many, many flawed implementations of moving solids throughout the years. Some games from my teenage years have truly atrocious moving platform physics, but I eventually arrived at this solution.

```
public void Move(float, float);

```

Solids just need one movement function, and they don't need collision delegates because Solids can't actually collide with other geometry. If you tell a Solid to move 30 pixels to the right, it is guaranteed to get there, regardless of whether other Solids are in the way. Any Actors we meet along the way will need to be dealt with though, to uphold our law of no Solid-Actor overlap.

Before we dive into the Solid Move function, we have to add a few things to our Actor API:

```
public virtual bool IsRiding(Solid solid);
public virtual void Squish();

```

Actors have IsRiding, a function that allows Solids to check whether that Actor is riding it. Typically, an Actor is riding a Solid if that Actor is immediately above the Solid. But some Actors might want to override this function to change how it behaves - for example players will also ride Solids that they are ledge grabbing, and flying monsters never ride Solids.

The second addition, Squish, will define behavior when an Actor is squeezed between two Solids. By default, this simply destroys the Actor.

The Heavy Lifting
-----------------

When a Solid interacts with an Actor, it can do so in two different ways: carrying or pushing. An actor is carried if it is riding that Solid, but it is pushed if the Solid's movement results in them overlapping. It's important to note that pushing overrides carrying - if a Solid simultaneously pushes and carries an Actor, it counts as a push.

Here's Solid.Move:

```
public void Move(float x, float y)
{
  xRemainder += x;
  yRemainder += y;
  int moveX = Round(xRemainder);
  int moveY = Round(yRemainder);

  if (moveX != 0 || moveY != 0)
  {
    //Loop through every Actor in the Level, add it to
    //a list if actor.IsRiding(this) is true
    List riding = GetAllRidingActors();

    //Make this Solid non-collidable for Actors,
    //so that Actors moved by it do not get stuck on it
    Collidable = false;

    if (moveX != 0)
    {
      xRemainder -= moveX;
      Position.X += moveX;

      if (moveX > 0)
      {
        foreach (Actor actor in Level.AllActors)
        {
          if (overlapCheck(actor))
          {
            //Push right
            actor.MoveX(this.Right - actor.Left, actor.Squish);
          }
          else if (riding.Contains(actor))
          {
            //Carry right
            actor.MoveX(moveX, null);
          }
        }
      }
      else
      {
        foreach (Actor actor in Level.AllActors)
        {
          if (overlapCheck(actor))
          {
            //Push left
            actor.MoveX(this.Left - actor.Right, actor.Squish);
          }
          else if (riding.Contains(actor))
          {
            //Carry left
            actor.MoveX(moveX, null);
          }
        }
      }
    }

    if (moveY != 0)
    {
      //Do y-axis movement
      ...
    }

    //Re-enable collisions for this Solid
    Collidable = true;
  }
}

```

That's a lot of code all at once, so here's a few notes.

First, add the movement amount to our remainders. Solids share the Actor constraint of integer-locked positions, so they have to use the same system to know when to move.

Second, we build a list of every Actor that is riding on this Solid, AKA a list of every Actor we should carry. This is done by simply looping over every Actor in the stage and checking actor.IsRiding(this). It's important we do this before we actually move, because the movement could put us out of range for the IsRiding checks.

Third, we temporarily make this Solid non-collidable. When we push or carry Actors, we resolve it by calling the Actor.Move functions. We want that Actor to not take into account the Solid that is affecting it when it moves.

Next we move one axis at a time, and begin resolving Actor interactions. We do overlap checks to see if we need to push any Actors. An important note here is that we do our carry checks before moving, and our push checks after.

If we find ourselves overlapping any Actors, we need to push them. These Actors are pushed regardless of whether we're also carrying them, because pushing overrides carrying. If we aren't pushing a given Actor, then we can check if it was placed in our list of Actors we should carry. If it fails that check too, the Actor has nothing to do with us and we should leave it alone.

Now let's look at the differences in how we treat pushed vs carried Actors.

Pushed Actors don't receive our full movement amount - they are only pushed the difference in pixels between our leading edge and their closest edge. This is to make sure the Actor stays flush with the side of our block that is doing the pushing.

Pushes also use the Actor.Squish callback. Recall that by default, this destroys the Actor. If a Solid pushes an Actor into another Solid, something drastic has to be done. Because we are not allowed overlaps and there is nowhere else left to go, we default to destroying the Actor. Depending on the context you might want to try something else, like wiggling the Actor out of the way. TowerFall handles this case in a lot of different ways, depending on the gameplay context.

Carried Actors get the full platform movement speed with no collision callback. There's no danger of squishing here - nothing happens if the Actor hits a wall.

And that's it! Hopefully this has been helpful to you :)