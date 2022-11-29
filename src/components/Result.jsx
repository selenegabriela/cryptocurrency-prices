import React from 'react'
import styled from '@emotion/styled'

const ResultDiv = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Image = styled.img`
    display: block;
    width: 120px;
`
const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`


const Result = ({quotation}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = quotation;
  return (
    <ResultDiv>
        <Image 
            src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto image" 
        />
        <div>
            <Price>Price: <span>{PRICE}</span></Price>
            <Text>Highest price of the day: <span>{HIGHDAY}</span></Text>
            <Text>Lowest price of the day: <span>{LOWDAY}</span></Text>
            <Text>Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Last update: <span>{LASTUPDATE}</span></Text>
        </div>
    </ResultDiv>
  )
}

export default Result