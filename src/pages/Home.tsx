import profileImg from "../assets/images/ab-profile.jpg";

const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <h1><span>FRONTEND DEVELOPER</span> (AND GRAPHIC DESIGNER)</h1>
                <h3>Based in Zagreb, Croatia</h3>
            </div>
            <div className="home__profile">
                <img src={profileImg} alt="Blurred portrait of Aisha" />
            </div>
            <div className="purple-cube"></div>
        </div>
    );
};

export default Home;