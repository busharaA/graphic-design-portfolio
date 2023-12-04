import mockupProject from "../assets/images/adventure.jpg";

const CaseStudy = () => {
    return (
        <main className="case-study">
            <h2>Lorem ipsum</h2>
            <section className="problem-solution">
                <div className="content-text">
                    <h3>Problem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci nam numquam voluptatem delectus suscipit natus unde, illum, fugit voluptatum quos reiciendis veritatis labore amet voluptates, sunt ipsam maxime quasi.</p>
                    <h3>Solution</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio nesciunt magni, blanditiis consequatur et facilis dignissimos ducimus inventore, pariatur nostrum doloribus rem accusantium recusandae quidem laboriosam sunt velit repellat?</p>
                </div>
                <img className="single-image" src={mockupProject} alt="Mockup image" />
            </section>
            <section className="design-process">
                <img className="single-image" src={mockupProject} alt="Mockup image" />
                <div className="content-text">
                    <h3>Design process</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, animi accusamus, alias laborum dicta ab nulla earum voluptatibus explicabo illo facilis delectus placeat impedit. Obcaecati voluptatem culpa explicabo ab facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium repudiandae voluptatum quisquam quas ea minus debitis dolor dolorum accusamus magnam labore ad, fugit veniam cum praesentium quod. Aperiam, placeat numquam.</p>
                </div>
            </section>
            <section className="design-preview">
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
                <img src={mockupProject} alt="Mockup image" />
            </section>
            <section className="design-system">
                <h3>Colors</h3>
                <img src={mockupProject} alt="Mockup image" />
                <h3>Typography</h3>
                <img src={mockupProject} alt="Mockup image" />
            </section>
        </main>
    );
};

export default CaseStudy;