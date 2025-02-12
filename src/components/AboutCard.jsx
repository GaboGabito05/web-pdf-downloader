import PropTypes from 'prop-types';
import '../styles/About.css';

function AboutCard({ icon, title, description, link, button }) {
    return (
        <div className="about-card">
            <div className="card-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a
                href={link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                {button}
            </a>
        </div>
    )
}

AboutCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
};

export default AboutCard;