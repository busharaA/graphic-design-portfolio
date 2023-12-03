import mockupProject from "../assets/images/adventure.jpg";

const CaseStudy = () => {
    return (
        <main className="case-study">
            <h2>Lorem ipsum</h2>
            <section className="problem-solution">
                <h3>Problem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci nam numquam voluptatem delectus suscipit natus unde, illum, fugit voluptatum quos reiciendis veritatis labore amet voluptates, sunt ipsam maxime quasi.</p>
                <h3>Solution</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio nesciunt magni, blanditiis consequatur et facilis dignissimos ducimus inventore, pariatur nostrum doloribus rem accusantium recusandae quidem laboriosam sunt velit repellat?</p>
                <img src={mockupProject} alt="Mockup image" />
            </section>
            <section className="design-process">
                <h3>Design process</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, animi accusamus, alias laborum dicta ab nulla earum voluptatibus explicabo illo facilis delectus placeat impedit. Obcaecati voluptatem culpa explicabo ab facilis!</p>
                <img src={mockupProject} alt="Mockup image" />
            </section>
            <section className="design-preview">
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
            </section>
            <section className="design-system">
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
            </section>
        </main>
    );
};

export default CaseStudy;