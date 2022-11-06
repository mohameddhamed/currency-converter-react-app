import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurr,
    quantity,
    onChangeAmount
  } = props
  return (
    <>
    <input type="number" value={quantity} onChange={onChangeAmount}/>
    <select value={selectedCurrency} onChange={onChangeCurr}>
        {currencyOptions.map(e=>{
            return (<option key={uuidv4()} value={e}>{e}</option>)
        })}
    </select>
    </>
  )
}
