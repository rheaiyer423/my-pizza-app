
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Dropdownh1 = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:3.5rem;
    height: 15vh;
    max-height: 100%;
    color: #fff;
    line-height: 1;
    font-weight: 750;
    color: #E31837;
`;

export const Customh2 = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:7vh;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    font-size: 2.5rem;
    font-weight: 10;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 4px;
    padding-top: 5px;
    padding-bottom: 5px;

    // display: flex;
    // font-size: 2.5rem;
    // flex-direction: column;
    // font-weight: 20;
    // padding-left: 150px;
    // justify-content: space-around;
    // align-items: left;
    // height: 30vh;
    // max-height: 100%;
    // color: #fff;
    // text-transform: uppercase;
    // line-height: 1;


`;


export const DropdownStyle = styled.div`
    display: flex;
    font-size: 1.75rem;
    flex-direction: column;
    font-weight: 20;
    padding-left: 900px;
    padding-right: 900px;
    justify-content: space-around;
    align-items: left;
    height: 7vh;
    max-height: 100%;
    color: black;
    font-family: Arial;


`;



export const DropdownBtn = styled(Link)`
    href: #;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    margin: 2.4em auto;
    width: 400px;
    text-decoration: none;
    text-align: center;
    font-size: 2rem;
    font-weight: 10;
    padding: 1.5rem 4.5rem;
    border: none;
    background: #E31837;
    color: #fff;
    transition: 0.2s ease-out;
    &:hover {
        background: #FFC300;
        transition: 0.2s ease-out;
        cursor: pointer;
    }

`