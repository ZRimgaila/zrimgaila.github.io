
const Home = () => {

    return (  
        <div className="home">
            {/* Mokinuosi */}
            {/* <button onClick={clickToChangeName}>Change name</button>
            <p>My name is { name } </p>
            <button onClick={(e) => handleClickAgain('Zygis', e)}>Click me again</button> paclickinus button issikvies funkcija kurioje bus paduota Zygis reiksme */}
        
            {/* ------------ */}

            <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div className="row align-items-center">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-4 fst-italic">I’m a Java developer from <span className="flag-text">Lithuania</span></h1>
                        <p className="lead my-3">with 2 years of professional experience, 
                        passionate about writing clean, efficient code and building robust software solutions. 
                        I'm currently seeking my next challenge where I can continue growing and contribute to impactful projects.</p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src="./me.jpg" alt="My portrait" className="my-image"/>
                    </div>
                </div></div>
            
        
        </div>
    );
}
 
export default Home;