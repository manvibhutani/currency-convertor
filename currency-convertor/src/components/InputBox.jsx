import React from "react";

function InputBox(
    {
        className='',
        amount,
        label,
        onAmountChange,
        onCurrencyChange,
        currencyOption=[],
        selectCurrency="usd",
        amountDisable=false,
        currencyDisable=false,
    }
)
{
    return(
        <div>
            <div>
                <label>{label}</label>
                <input
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange = {(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div>
                <p>Currency Type</p>
                <select value={selectCurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                disable={currencyDisable}

                >
                    {currencyOption.map(
                        (currency)=>(
                            <option key={currency}
                            value={currency}>{currency.toUpperCase()}</option>
                        )
                    )}
                </select>
            </div>
        </div>

    );
}

export default InputBox;