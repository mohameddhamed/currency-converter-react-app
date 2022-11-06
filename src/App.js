import React, {useEffect,useState} from 'react'
import './App.css';
import CurrencyRow from './currencyrow' 

const BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/tnd.json'

function App() {

  const [currencyOptions,setCurrencyOptions] = useState([]);
  const [fromCurrency,setFromCurrency] = useState();
  const [toCurrency,setToCurrency] = useState();
  const [amount,setAmount]=useState(1);
  const [amountInFromCurrency,setAmountInFromCurrency]=useState(true);
  const [rate,setRate]=useState();

  useEffect(() => {
    fetch(BASE_URL)
    .then(res=>res.json())
    .then(data=> {
      
      setCurrencyOptions(['tnd',...Object.keys(data.tnd)])
      setFromCurrency('tnd')
      setToCurrency('eur')
      setRate(data.tnd.eur)

    })
    
  }, [])

  useEffect(() => {
    if (fromCurrency && toCurrency){
      
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`)
      .then(res=>res.json())
      .then(data=>{
        setRate(data[fromCurrency][toCurrency])//this sets the rate's state
      })

    }
  }, [fromCurrency,toCurrency])
  

  let fromAmount,toAmount
  if (amountInFromCurrency){//this the code that controls what goes in the input value
    fromAmount=amount
    toAmount=amount*rate//this is what uses the rate
  }
  else{
    toAmount=amount
    fromAmount=amount/rate
  }
  
  function handleFromAmountchange(e){
    setAmount(e.target.value);//this changes the state but the value is handled up
    setAmountInFromCurrency(true);
  }

  function handleToAmountchange(e){
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
   <>
    <h1>Currency</h1>
    <CurrencyRow 
    currencyOptions={currencyOptions}
    selectedCurrency={fromCurrency}
    onChangeCurr={e=>setFromCurrency(e.target.value)}
    quantity={fromAmount}//this is finally fed the amount
    onChangeAmount={handleFromAmountchange}//when this amount changes it calls this function (look up) 
    />
    <div>=</div>
    <CurrencyRow currencyOptions={currencyOptions}
    selectedCurrency={toCurrency}
    onChangeCurr={e=>setToCurrency(e.target.value)}
    quantity={toAmount}
    onChangeAmount={handleToAmountchange}
    />
   </>
  );
}

export default App;
