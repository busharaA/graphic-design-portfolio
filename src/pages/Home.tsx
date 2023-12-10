import profileImg from "../assets/images/ab-profile.jpg";

const Home = () => {
    return (
        <main className="home">
            <h1><span>FRONTEND DEVELOPER</span> (AND GRAPHIC DESIGNER)</h1>
            <img src={profileImg} alt="Blurred portrait of Aisha" />
            <h3>Based in Zagreb, Croatia</h3>
        </main>
    );
};

export default Home;