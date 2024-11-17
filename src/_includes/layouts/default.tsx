import React, { ReactNode } from "react";
import NavigationBar from "../../components/NavigationBar.tsx";
import Footer from "../../components/Footer.tsx";

export default ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>6ilberM's Website</title>
                <link rel="stylesheet" href="/Styles/main.css" />
                <link rel="stylesheet" href="/Styles/footer.css" />
            </head>
            <body>
                <div className="site">
                    <NavigationBar />
                    <main>
                        {children}
                    </main>
                </div>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
};
