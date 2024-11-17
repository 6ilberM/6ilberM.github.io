const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about/">About</a> {/* Note the trailing slash */}
                </li>
                <li>
                    <a href="./portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="./contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
