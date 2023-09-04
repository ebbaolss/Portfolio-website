import React from 'react';

const About = () => {
    
    const profilePictureURL = 'https://avatars.githubusercontent.com/u/105009252?v=4'

    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <div className='picture-container'>
                    <img src={profilePictureURL} alt='Profilbilde' className='profilePicture' />
                    <p>
                    Hei! <br /> <br />
                    Mitt navn er Ebba og dette er min portefølje nettside. <br /> <br />
                    Jeg studerer en master i Informatikk: Programmering og Systemarkitektur ved UiO <br /> <br />
                    </p>    
                </div>
          </div>
        </section>
    );
};

export default About;