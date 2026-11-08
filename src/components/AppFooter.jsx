const footerLinks = [
    { id: 1, text: "Terms Of Use", url: "#" },
    { id: 2, text: "Privacy policy (New)", url: "#" },
    { id: 3, text: "Ad Choices", url: "#" },
    { id: 4, text: "Advertising", url: "#" },
    { id: 5, text: "Jobs", url: "#" },
    { id: 6, text: "Subscriptions", url: "#" },
    { id: 7, text: "Talent Workshops", url: "#" },
    { id: 8, text: "CPSC Certificates", url: "#" },
    { id: 9, text: "Ratings", url: "#" },
    { id: 10, text: "Shop Help", url: "#" },
    { id: 11, text: "Contact Us", url: "#" },
];

function AppFooter() {
    return (
        <footer>
            <nav>
                <ul>
                    {footerLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    );
}

export default AppFooter;
