import React from 'react';

const Twitter = () => {
    return (
        <div className="sidebar-widget twitter-widget">
            <div className="sidebar-title"><h3>Twitter Feeds</h3></div>
            <div className="widget-content">
                <div className="post">
                    <div className="icon"><span className="fab fa-twitter"></span></div>
                    <div className="text">A wise man becomes silent. Not because he has nothing to say, but because he knows the futility of talking to fools.</div>
                    <div className="date">Apr 3, 2021</div>
                </div>
                <div className="post">
                    <div className="icon"><span className="fab fa-twitter"></span></div>
                    <div className="text">Teach your children to question everything, including you, that way they are comfortable questioning any authority.</div>
                    <div className="date">Feb 12, 2021</div>
                </div>
                <div className="post">
                    <div className="icon"><span className="fab fa-twitter"></span></div>
                    <div className="text">"The house always wins"
                    Make your company 'The House' 
                    Or else you're still just gambling</div>
                    <div className="date">Sept 29, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default Twitter;