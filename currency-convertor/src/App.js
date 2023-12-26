import React from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";
import './index.css';
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div>
        <div>
          <div className="container gradient-background">
            <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
              <div>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)} />
              </div>
              <div>
                <button type="button" onClick={swap}>Swap</button>
              </div>
              <div>
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  onAmountChange={(amount) => setConvertedAmount(amount)} />
              </div>
              <div>
                <button type="Submit">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
