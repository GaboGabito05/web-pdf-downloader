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
                target="_blank">{button}</a
            >
        </div>
    )
}

export default AboutCard