import React, { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);
  const currencyInfo = useCurrencyInfo(from)
  const options=Object.keys(currencyInfo);
  return (
    <div>
      <InputBox
                          label="To"
                          amount={1000}
                          currencyOption={options}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          amountDisable
                          selectCurrency={from}
                          
                      />
    </div>
  )
}

export default App
