export default function Index() {
    return (
        <>  
        <head>
            <title>Matthew Kurniawan</title>
            <meta name="description" content="Welcome to my portfolio"/>
        </head>
            <div id="Navbar">
                <span>Matthew Kurniawan</span>
            </div>
            <div id="container"> 
                <div id="top-section"> 
                    <img src="/profile.jpg" id="prof-pic" alt="profile"/>
                    <h1>Hey, nice to see you around!<br/> I'm Matthew</h1>
                </div>
                <p></p>
                <p></p>
                <p></p>
                <hr/>
                <p>Some projects I've built</p>
                <a href="" className="proj-wrapper">
                <div className="project-box">
                    <img src=""/>
                    <h2>Web3 Messaging Platform</h2>
                    <p>Send GIFs and crypto to friends</p>
                
                </div>
                </a>
                <a href="" className="proj-wrapper">
                <div className="project-box">
                    <img src=""/>
                    <h2>ASOSHI</h2>
                    <p>Gen-Z Networking Platform to connect with driven founders</p>
                
                </div>
                </a>
            </div>
        </>
    );
}
