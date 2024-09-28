"use client"

import styled from "styled-components";

const HeroSectionStyle = styled.section`
flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  
  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }
  `;

const Hero = () => {
    const one  = <h1>Hi, my name is</h1>
    const two = <h2>Vansh Parate</h2>
    const three = <h3 className="big-heading">I build things for the web.</h3>;
    const four = (
        <>
          <p>
            I’m a software engineer specializing in building (and occasionally designing) exceptional
            digital experiences. Currently, I’m focused on building accessible, human-centered products
            at{' '}
            <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
              Upstatement
            </a>
            .
          </p>
        </>
      );

      const items = [one, two, three, four];

    return(
        <div>
        {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
          </div>
    )
}

export default Hero;