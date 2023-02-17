import React from 'react';
import Loves from '../component/images/loves.jpg'


const homeContent = () => {

    return (
        <section className="section">
            <div>
                <div className="row">
                    <div className="col-md-12 text-center" style={{ marginBottom: "50px" }}>
                        <h1 className="main-heading" style={{ color: "white", marginBottom: "50px" }}>Will you be my Valentine?</h1>
                        <div className="underline mx-auto"></div>
                        <h5 style={{ width: "90%", margin: "auto", color: "white" }}>If Yes, text me "Yes".. <br></br><br></br> If no, text me "No."
                        </h5>
                    </div>
                </div>
                <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Loves} alt="loves" style={{ width: "250px", border: "5px solid white" }} />
                        <a class="btn" href="https://youtu.be/A-S1ICN0smU" target="_blank" rel="noreferrer">Click me!</a>
                </div>
            </div>
        </section>
    )
}

export default homeContent