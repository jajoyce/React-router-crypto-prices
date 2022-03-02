import React from "react";
import { useParams } from "react-router";

const Price = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const symbol = params.symbol;
  console.log(symbol);
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = React.useState("null");

  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCoin(data);
  }

  React.useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    console.log("loaded")
    return (
      <div>
        <h1>Current {coin.asset_id_base} Price:</h1>
        <h1>{coin.rate}</h1>
        <h2>
          {coin.asset_id_quote} / {coin.asset_id_base}
        </h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin ? loaded() : loading();
};

export default Price;