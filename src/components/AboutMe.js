import React, { Component  } from 'react';

class AboutMe extends Component{

    render(){
        return (
            <div className="about-me">
                    Hey, I'm a software developer. 
                    <p className="about-description">
                    I make software for myself and it makes my life easier.
                    </p>
                    <p>
                    Getting my first job was a lot tougher for me. 
                    I'm not easy talking guy that's why I write my thoughts.
                    </p>
                    <div class="project-section">
                        <div class="project">
                            <article className="image-section">
                                <img src="../../img/aboutme/app_icon.png" />
                            </article>
                            It's an grocery apps. 
                            Only one app, I developed which has 2k+ downloads.
                            Apart from this, I'm super lazy!
                        </div>

                        <div class="project">
                            <article className="image-section">
                                <img src="../../img/aboutme/rust.png" />
                            </article>
                            Currently, 
                            I'm learning and exploring Rust language. I thought I'd have mastered it within a month
                            but I'm still lazy!
                        </div>
                    </div>
            </div>
        );
    }
}

export default AboutMe;
