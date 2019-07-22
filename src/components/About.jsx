import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;
​
const AboutAvatar = styled.div`
    padding: 2em 0 0;
`;
​
const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3F51B5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rbga(0,0,0,0.6);
`;
​
const AboutName = styled.div`
    text-align: center;
`;
​
const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #448AFF;
`;
​
const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;
​
const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;
​
const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF
`;

const About = () => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="Mi Avatar" />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>Jonathan Isaza</AboutH2>
            </AboutName>
            <div className="About__profession">
                <AboutProfession>Soy estudiante de la Academia Geek</AboutProfession>
            </div>
            <div className="About__description">
                <AboutBio>Me gusta aprender React</AboutBio>
            </div>
            <div className="About__location">
                <AboutLocation>Me encuentro en Medellín-Antioquia-Colombia</AboutLocation>
            </div>
            <div className="About__social">Social</div>
        </div>
    </AboutStyle>
);
export default About;