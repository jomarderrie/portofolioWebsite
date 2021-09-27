import "./App.css";
import homeImage from './assets/homepageimage.svg'

function App() {
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
                        <div style={{padding: '20px 0px', fontSize: '18px'}}>
                            <button><i className="fa fa-file" style={{marginRight: '.25rem'}}></i>See my resume</button>
                        </div>
                    </div>

                </div>
                <div className={'main-project'}>
                    <div style={{fontSize: '22px'}}>
                        <h3>A few projects</h3></div>
                    <div style={{fontSize: '16px'}}>
                        Here is a list of projects i have done on my personal time or for
                        studies
                    </div>
                </div>
                <div className={'project-items'}>

                    <div className={'categories'}>

                    </div>
                    <div>
                        
                    </div>
                </div>

            </main>
        </div>
    );
}

export default App;
