import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'


function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-w-full min-h-screen flex items-center justify-center bg- bg-opacity-70 fixed top-0 left-0 z-50" >
  {/* Left Section for the Image */}
  <div
    className="w-1/2 min-h-screen relative group overflow-hidden"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 group-hover:opacity-50 transition-opacity duration-500"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h1 className="text-4xl font-bold text-white">Welcome</h1>
        <p className="text-white mt-2 max-w-xs mx-auto">
          Start your currency conversion journey now!
        </p>
      </div>
    </div>
  </div>

  {/* Right Section for the Form */}

  
  
  <div className="relative w-1/2 min-h-screen flex items-center justify-center bg-cover bg-left" 
     style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/circuit-technology-background-with-hitech-digital-data-connection-system-computer-electronic-design_29971-1092.jpg?w=1380)' }}>
  
  {/* Apply blur to the background using backdrop-filter */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent backdrop-blur-lg"></div>

  <div className="absolute top-15 left-1/2 transform -translate-x-1/2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 shadow-2xl z-20">
    Currency Conversion
  </div>

  <div className="w-full max-w-md mx-auto rounded-xl p-8 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 shadow-2xl transform transition-all duration-500 hover:scale-105 z-10 relative">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}
      className="space-y-6"
    >
      <div className="w-full mb-4">
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          selectCurrency={from}
        />
      </div>

      <div className="relative w-full h-12 flex justify-center items-center mb-6">
        <button
          type="button"
          className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:rotate-180"
          onClick={swap}
        >
          ⇅
        </button>
      </div>

      <div className="w-full mb-6">
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisabled={true}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-4 py-3 rounded-lg font-bold shadow-xl transform transition-all duration-300 hover:scale-105"
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </form>
  </div>
</div>




</div>

  );
}

export default App;


