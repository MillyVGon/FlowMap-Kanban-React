import { FaFacebookSquare, FaTwitterSquare, FaGithub } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <p>&copy; 2025 FlowMap. Todos os direitos reservados.</p>
            
            <div className="social-icons">
                <a href="https://facebook.com" >
                    <FaFacebookSquare />
                </a>
                <a href="https://twitter.com" >
                    <FaTwitterSquare />
                </a>
                <a href="https://github.com" >
                    <FaGithub />
                </a>

            </div>
        </footer>
    );
}

