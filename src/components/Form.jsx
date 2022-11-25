import React from 'react'
import styled from '@emotion/styled'
import useSelectCurrencies from '../hooks/useSelectCurrencies'

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

    &:hover {
       background-color: #7A7DFE;
       cursor: pointer;
    }
`

const Form = () => {

    const [ SelectCurrencies ] = useSelectCurrencies('Choose your Currency')
    const [ SelectCryptoCurrencies ] = useSelectCurrencies('Choose your Cryptocurrency')
  return (
    <form>
        <SelectCurrencies/>
        <SelectCryptoCurrencies/>
        <InputSubmit type="submit" value='Calculate' />
    </form>
  )
}

export default Form