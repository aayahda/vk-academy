import React from "react";


function Numbers(){
    return(<div className="numbers">
        <div>
        <h1> WELCOME TO VK FOOTBALL ACADEMY</h1>
        <h2>Here we develop lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <div className="statistics">
            <div>
                <div className="plus">
                    <h1>5</h1>
                    <h3>+</h3>
                </div >
                <h3 className="feature">Coaching centers</h3>
            </div>
            <div>
            <div className="plus">
                <h1>10</h1>
                <h3>+</h3>
            </div>
                <h3 className="feature">Experienced coaches</h3>
            </div>
            <div>
            <div className="plus"><h1>200</h1><h3>+</h3></div>
                <h3 className="feature">Community Members</h3>
            </div>
            <div>
                <div className="plus"><h1>600</h1><h3>+</h3></div>
                <h3 className="feature">Academy Graduates</h3>
            </div>
        </div>
        
    </div>);
}

export default Numbers;