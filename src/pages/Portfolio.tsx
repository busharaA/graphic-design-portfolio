import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
    return (
        <main className="portfolio">
            <h2>MY WORKS</h2>
            <div className="projects-container">
                <section className="frontend-projects">
                    <h3>Frontend</h3>
                    <div className="cards-container">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </section>
                <section className="design-projects">
                    <h3>Graphic design</h3>
                    <div className="cards-container">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Portfolio;