import  React, {useId} from "react";
function InputBox({ // InputBox component to take input from the user.
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
  <div className={`bg-white p-5 rounded-lg shadow-lg text-sm flex ${className} transition-all duration-300 hover:scale-105`}>
    <div className="w-1/2 pr-4">
      <label htmlFor={amountInputId} className="text-gray-600 mb-2 inline-block font-semibold">{label}</label>
      <input
        id="amountInputId"
        className="outline-none w-full bg-transparent py-2 px-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
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
      <p className="text-gray-600 mb-2 w-full font-semibold">Currency Type</p>
      <select
        className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>{currency}</option> // providing the key in loop is good practice to avoid the warning.
        ))}
      </select>
    </div>
  </div>
);

}

export default InputBox;
