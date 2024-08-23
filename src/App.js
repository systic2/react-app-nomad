import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState([]);
  const onChange = (event) => {
    setSelected(JSON.parse(event.target.value));
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  console.log(selected.name);
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin, index) => (
            <option key={index} id={coin.name} value={JSON.stringify(coin)}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {selected === 0 ? (
        ""
      ) : (
        <ul>
          {coins.map((coin, index) => (
            <li key={index}>
              {coin.name} ({coin.symbol}) :{" "}
              {coin.quotes.USD.price / selected.quotes.USD.price}{" "}
              {selected.symbol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
