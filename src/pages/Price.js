import React from "react";
import { useParams } from "react-router";
import env from "react-dotenv";

const Price = (props) => {
    const apiKey = env.API_KEY;
    const params = useParams();
    const symbol= params.symbol;
    console.log(symbol);
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    const [coin, setCoin] = React.useState("null");

    const getCoin = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCoin(data);
    }
    
    React.useEffect( () => {
        getCoin();
    }, []);

    const loaded = () => {
        console.log("loaded")
        return (
          <div>
            <h1>
              {coin.asset_id_base} / {coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
          </div>
        );
      };
    
    const loading = () => {
    return <h1>Loading...</h1>;
    };

    return coin ? loaded() : loading();
};

export default Price;