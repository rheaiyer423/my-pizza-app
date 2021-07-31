import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgBg from './images/pizza-1.jpg';
import Bg from './images/pizzaa.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${ImgBg});
    height: 110vh;
    background-position: center;
    background-size: cover;
    font-weight: 500;
`;
export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
`;
export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh;
    max-height: 100%;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
`;
export const HeroH1 = styled.h1`
    font-size: 3rem;
    font-weight: 10;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 4px;
`;
export const HeroBtn = styled(Link)`
    href: #;
    text-decoration: none;
    font-size: 2rem;
    font-weight:10;
    padding: 1.5rem 4.5rem;
    border: none;
    background: #E31837;
    color: #fff;
    transition: 0.2s ease-out;
    &:hover {
        background: black;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;

export const SectionTwo = styled.div`
    //background: black;
    background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url(${Bg});
    height: 110vh;
    background-position: center;
    background-size: cover;
    font-weight: 500;

`;

export const Customh2 = styled.h3`
    display: flex;
    font-size: 2.5rem;
    flex-direction: column;
    font-weight: 20;
    padding-left: 150px;
    justify-content: space-around;
    align-items: left;
    height: 30vh;
    max-height: 100%;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;


`;