import "./App.css";
import homeImage from './assets/homepageimage.svg'
import items from "./assets/projects";
import {useEffect, useState} from "react";


function App() {
    const [categories, setCategories] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items)

    const filterItems = () => {
        let filteredItems2 = []
        items.map((item) => {
            categories.map((categoryItem) => {
                if (item.categories.indexOf(categoryItem) !== -1) {
                    filteredItems2.push(item);
                }
            })
        })
        console.log(filteredItems, "filteredItem")
        console.log(filteredItems2)
        if (filteredItems.length === 0 || filteredItems2.length === 0) {
            setFilteredItems(items);
        } else {
            console.log(categories, "categories")
            console.log(filteredItems2)
            setFilteredItems(filteredItems2);
        }
    }


    const categoryOnclick = (inputCategory) => {
        //if you cant find it in the array of categories we should add it else remove it
        if (categories.indexOf(inputCategory) !== -1) {
            setCategories(prevCategories => {
                return prevCategories.filter((category) => {
                    return category !== inputCategory;
                })
            },)
        } else {
            setCategories(prevCategories => {
                return [...prevCategories, inputCategory]
            })
        }
    }
    useEffect(() => {
        let filteredItems2 = [];
        items.map((item) => {
            categories.map((categoryItem) => {
                if (item.categories.indexOf(categoryItem) !== -1) {
                    if (filteredItems2.indexOf(item) === -1) {
                        filteredItems2.push(item);
                    }
                }
            })
        })

        setFilteredItems(filteredItems2);
        console.log(filteredItems2)
    }, [categories])

    let colours = [
        {Java: "red"},
        {Angular: "#FF7F7F"},
        {Reactjs: "#6290C8"},
        {Node: "#006400"},
        {Redux: "purple"},
    ]


    const showCategories = () => {
        return colours.map((item) => {
            let keyValue = Object.entries(item);
            return <a className={"project-button"} onClick={() => categoryOnclick(keyValue[0][0])}
                      style={{backgroundColor: keyValue[0][1]}}>{keyValue[0][0]}</a>
        })
    }

    function Footer() {
        const year = new Date().getFullYear();
        return (
            <footer>
                <p>Copyright ⓒ {year}</p>
            </footer>
        );
    }

    return (
        <div className="App">
            <nav className="main-nav">
                <div>

                </div>
                <div className="socials">
                    <a href="https://github.com/NathanGanesh" title="Github">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto: nathangemieee@gmail.com" title="Mail">
                        <i className="far fa-envelope"></i>
                    </a>
                    <a
                        href="https://nl.linkedin.com/in/nathan-ganesh-606969168"
                        title="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" title="Resume">
                        <i className="far fa-id-card"></i>
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
                                style={{color: '#FF7F7F'}}> Angular</span>,
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
                <div className={'main-project'} style={{backgroundColor: "#1F487E"}}>
                    <div style={{fontSize: '48px', paddingTop: '68px'}}>
                        <h3>A few projects</h3></div>
                    <div style={{fontSize: '24px'}}>
                        Here is a list of projects i have done in my personal time or for
                        studies
                    </div>
                    <div className={'categories'}>
                        {showCategories()}
                    </div>
                    <div className={'project-items'}>

                        <div className={"project-items"}>
                            {filteredItems.map((item) => {
                                return <article className={"project"}>
                                    <div className={"img-container"}>
                                        <img src={item.image} alt="single room"/>
                                    </div>
                                    <div className={"project-description"}>
                                        <h6>{item.name}</h6>
                                        <p style={{color: 'white'}}>{item.description}</p>
                                        <div className={"project-links"}>
                                            {/*<button className={"resume-button"}><i className="fa fa-file"*/}
                                            {/*                                       style={{marginRight: '.25rem'}}></i>See my resume*/}
                                            {/*</button>   */}

                                            <a target="_blank" href={item.github}
                                               className={"project-button"}>Github</a>
                                            {item.link !== "" && <a className={"project-button"} target="_blank"
                                                                    href={item.link}>Website</a>}
                                        </div>
                                    </div>
                                </article>
                            })}
                        </div>
                    </div>
                </div>
            </main>
            {Footer()}
        </div>
    );
}

export default App;
