import { useEffect, useState } from "react";

function useCurrencyInfo(currency){ // custom hook to fetch currency info
  const [data, setData] = useState({}); // state to store the data.
  useEffect(() => { // useEffect to fetch the data.
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) // fetching the data from the api.
    .then((res) => res.json()) // the data in string format initially, so we need to convert it to json format.
    .then((res) => setData(res[currency])) // the data is in the form of object, so we need to extract the data of the currency we need.
    console.log(data);
  }, [currency]) // the useEffect will run whenever the currency changes.
  console.log(data);
  return data; // returning the data.
  
}

export default useCurrencyInfo; // exporting the custom hook.