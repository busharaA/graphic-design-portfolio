const About = () => {
    return (
        <div className="about">
            <h2>ABOUT ME</h2>
            <p>Hello, I'm Aisha Bushara, a 27-year-old residing in Zagreb. I hold a Master's degree in Graphic Technology Engineering from the Faculty of Graphic Arts in Zagreb. My academic journey equipped me with a foundation in HTML, CSS, and JavaScript. Besides these skills, I gained knowledge of design tools such as Adobe Photoshop, Adobe Illustrator, and Figma. Recognizing my strong problem-solving and analytical skills, I further honed my expertise through a frontend developer training at Algebra University College.</p>
            <p>During this program, I enhanced my skills in SCSS, React, and delved into core principles, along with gaining proficiency in Git and npm. Outside of formal studies, I independently learned Redux and continually strengthen my abilities by tackling online exercises and undertaking personal frontend and design projects. Now, I'm eager to collaborate with talented professionals, seeking valuable work experience in the field.</p>
            <div className="socials">
                <a className="socials__icon LinkedIn" href="https://www.linkedin.com/in/aisha-bushara-885740227/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="socials__icon GitHub" href="https://github.com/busharaA">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default About;