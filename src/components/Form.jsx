import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectCurrencies from '../hooks/useSelectCurrencies'
import Error from './Error'
import { currencies } from '../data/currencies'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
       background-color: #7A7DFE;
       cursor: pointer;
    }
`

const Form = ({setCurrencies}) => {

    const [ cryptos, setCryptos ] = useState([]); 
    const [ error, setError ] = useState(false); 
    const [ currency, SelectCurrencies ] = useSelectCurrencies('Choose your Currency', currencies)
    const [ cryptoCurrency, SelectCryptoCurrencies ] = useSelectCurrencies('Choose your Cryptocurrency', cryptos);

    useEffect(() => {

      const consultAPI = async() => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

        const response = await fetch(url)
        const result = await response.json()

        const arrayCryptos = result.Data.map(crypto => {
          
          return {
            id: crypto.CoinInfo.Name,
            name: crypto.CoinInfo.FullName
          }

        });
        setCryptos(arrayCryptos);
      }

      consultAPI()
    }, [])

    const handleSubmit = e => {
      e.preventDefault();

      if([cryptoCurrency, currency].includes('')){
        setError(true)

        return
      }
      setError(false);
      setCurrencies({
        currency,
        cryptoCurrency
      })
    }
    
  return (
    <>
      {error && <Error>All fields are required</Error>}
      <form
        onSubmit={handleSubmit}
      >
          <SelectCurrencies/>
          <SelectCryptoCurrencies/>
          <InputSubmit type="submit" value='Calculate' />
      </form>
    </>
  )
}

export default Form