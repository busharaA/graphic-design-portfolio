import mockupProject from "../assets/images/adventure.jpg";

const ProjectCard = () => {
    return (
        <div className="card">
            <div className="project-img">
                <img src={mockupProject} alt="Mockup image" />
            </div>
            <div className="project-content">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default ProjectCard;