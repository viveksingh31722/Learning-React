import  React, {useId} from "react";
function InputBox({ // InpuBox component to take input from the user.
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "", // props for the InputBox component
}) {
  const amountInputId = useId(); // using useId hook to generate unique id for the input field.
  return (
    <div className={`bg-gradient-to-r from-teal-50 to-blue-50 p-5 rounded-lg shadow-xl text-sm flex ${className} transition-all duration-300 hover:scale-105`}>
      <div className="w-1/2 pr-4">
        <label htmlFor={amountInputId} className="text-gray-700 mb-2 inline-block font-semibold">{label}</label>
        <input
          id="amountInputId"
          className="outline-none w-full bg-white bg-opacity-70 py-2 px-3 border-2 border-gray-400 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right pl-4">
        <p className="text-gray-700 mb-2 w-full font-semibold">Currency Type</p>
        <select
          className="rounded-lg px-3 py-2 bg-white bg-opacity-70 cursor-pointer outline-none border-2 border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
  
  
}

export default InputBox;
