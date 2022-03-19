import './footer.css';

const Footer = () => {
    return(
        <div>
            <footer className="footer">

                <ul className="footer-address footer-ul">
                    <li className="footer-item footer-item-header">
                        <i className="fa-solid fa-location-pin footer-location-icn"></i> We are here:
                    </li>
                    <li className="footer-item">
                        TI Gear Shop
                    </li>
                    <li className="footer-item">
                        Street Name, City
                    </li>
                    <li className="footer-item">
                        Pincode
                    </li>
                </ul>

                <ul className="footer-about footer-ul">
                    <li className="footer-item footer-item-header">
                        About Us
                    </li>
                    <li className="footer-item">
                        About
                    </li>
                    <li className="footer-item">
                        Payments
                    </li>
                    <li className="footer-item">
                        Shipping and Handling
                    </li>
                </ul>

                <ul className="footer-ul">
                    <li className="footer-item footer-item-header">
                        Find us on:
                    </li>
                    <li className="footer-item">
                        <i className="fab fa-github fa-lg social-icn"></i>Github
                    </li>
                    <li className="footer-item">
                        <i className="fab fa-twitter fa-lg social-icn"></i>Twitter
                    </li>
                    <li className="footer-item">
                        <i className="fab fa-linkedin fa-lg social-icn"></i>LinkedIn
                    </li>
                </ul>

                <ul className="footer-socials-list">
                    <li className="footer-item footer-item-header">
                        <i className="fa-solid fa-code"></i> Tanveer Hazarika
                    </li>
                    <div>
                        <li className="footer-item">
                            <i className="fab fa-github fa-lg social-icn"></i>
                        </li>
                        <li className="footer-item">
                            <i className="fab fa-linkedin fa-lg social-icn"></i>
                        </li>
                        <li className="footer-item">
                            <i className="fab fa-twitter fa-lg social-icn"></i>
                        </li>

                        <li className="footer-item">
                            <i className="fas fa-globe fa-lg social-icn"></i>
                        </li>
                    </div>
                </ul>

                </footer>
        </div>
    );
}

export {Footer}