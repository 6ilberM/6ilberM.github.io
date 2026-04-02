import NavigationBar from "../../components/NavigationBar.tsx";
import Footer from "../../components/Footer.tsx";

export default ({ children, title }: Lume.Data) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || "6ilberM"}</title>
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="stylesheet" href="/styles/footer.css" />
        <link rel="stylesheet" href="/styles/portfolio.css" />
      </head>
      <body>
        <div class="site">
          <header>
            <NavigationBar />
          </header>

          <main>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
};
