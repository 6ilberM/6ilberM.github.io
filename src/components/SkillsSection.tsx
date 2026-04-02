// src/components/SkillsSection.tsx
export default () => {
  const skills = [
    "Unity3D Game Development",
    "C# Programming",
    "C++ Programming",
    "Game Design",
    "UI/UX Implementation",
    "Performance Optimization",
    "Cross-platform Development",
  ];
  return (
    <section class="skills">
      <h3>Key Skills</h3>
      <ul>{skills.map((skill) => <li>{skill}</li>)}</ul>
    </section>
  );
};
