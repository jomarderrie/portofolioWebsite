import "./App.css";
import homeImage from './assets/homepageimage.svg'
import items from "./assets/projects";


function App() {

    const loadAllProducts = () => {
        return <div>

        </div>
    };

    return (
        <div className="App">
            <nav className="main-nav">
                <div>

                </div>
                <div className="socials">
                    <a href="https://github.com/NathanGanesh" title="Github">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="mailto: nathangemieee@gmail.com" title="Mail">
                        <i class="far fa-envelope"></i>
                    </a>
                    <a
                        href="https://nl.linkedin.com/in/nathan-ganesh-606969168"
                        title="LinkedIn"
                    >
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" title="Resume">
                        <i class="far fa-id-card"></i>
                    </a>
                </div>
                <div className="header-sections">
                    <p>Home</p>
                    <p>Projects</p>
                    <p>Resume</p>
                </div>
            </nav>


            <main className="main">
                <div className="main-home">
                    <div className="home-image">
                        <img src={homeImage}/>
                    </div>
                    <div className={"main-info"} style={{margin: '20px'}}>
                        <div style={{fontSize: '50px'}}>Hi i'm <span style={{color: '#1D3461',}}>Nathan</span></div>
                        <div>
                            <p style={{fontSize: '20px'}}>
                                Third year student software engineering at Saxion. Web developer having an experience of
                                building web applications with <span style={{color: 'orange'}}>Javascript</span>,<span
                                style={{color: '#1F487E'}}> Reactjs</span>, <span
                                style={{color: '#FF7F7F'}}> Angularjs</span>,
                                <span style={{color: '#006400'}}> Nodejs</span> and <span
                                style={{color: 'red'}}>Java</span>.
                            </p>
                        </div>
                        <div style={{padding: '20px 0px', fontSize: '22px'}}>
                            <button className={"resume-button"}><i className="fa fa-file"
                                                                   style={{marginRight: '.25rem'}}></i>See my resume
                            </button>
                        </div>
                    </div>

                </div>
                <div className={'main-project'} style={{backgroundColor: "rgb(98, 144, 200"}}>
                    <div style={{fontSize: '48px'}}>
                        <h3>A few projects</h3></div>
                    <div style={{fontSize: '24px'}}>
                        Here is a list of projects i have done in my personal time or for
                        studies
                    </div>
                    <div className={'categories'}>

                    </div>
                    <div className={'project-items'}>

                        <div className={"project-items"}>
                            {items.map((item) => {
                                return <article className={"project"}>
                                    <div className={"img-container"}>
                                        <img src={item.image} alt="single room"/>
                                    </div>
                                    <div className={"project-description"}>
                                        <h6>{item.name}</h6>
                                        <p>{item.description}</p>
                                        <div className={"project-links"}>
                                            <a target="_blank" href={item.github}>github</a>
                                            <a target="_blank" href={item.link}>Website</a>
                                        </div>
                                    </div>
                                </article>
                            })}
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                Copyright by me
            </footer>

        </div>
    );
}

export default App;
