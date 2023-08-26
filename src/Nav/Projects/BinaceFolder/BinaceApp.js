import "./binace.css";
import { useState, useEffect } from "react";
// Use this API
// https://api2.binance.com/api/v3/ticker/24hr
//'https://binance.us/api/v3/ticker/24hr'

// symbols we want...
// BTCUSDT (Bitcoin)
// ETHUSDT (Ethereum)
// SOLUSDT (Solana)
// ADAUSDT (Cardano)
// DOGEUSDT (DogeCoin)
const COIN_LABELS = {
    BTCUSDT: "Bitcoin",
    ETHUSDT: "Ethereum",
    SOLUSDT: "Solana",
    ADAUSDT: "Cardano",
    DOGEUSDT: "DogeCoin",
};
const COINS = Object.keys(COIN_LABELS);
export default function Binace() {
    const [coinData, setCoinData] = useState([]);
    // 1. STATE AND USEEFFECT HERE
    useEffect(() => {
        fetch("https://binance.us/api/v3/ticker/24hr")
            .then((res) => res.json())
            .then((data) => {
                const filtedData = data.filter((ticker) => {
                    if (COINS.includes(ticker.symbol)) return true;
                });
                setCoinData(filtedData);
            });
    }, []);

    // 2. How will you "Pull out" the symbols we need?

    // 3. ...and then store them in state?

    return (
        <div className="App-b">
            <nav className="binaceNav">
                <img
                    alt="logo"
                    src="https://assets.codepen.io/6060109/crypto-logo-secondary.png"
                />
                <input type="text" placeholder="Search" />
            </nav>
            <div className="main-content">
                <h2>Today's cryptocurrency prices</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h %</th>
                        </tr>
                    </thead>
                    {/* 3. Display data here... */}
                    {/* HINT: Map to JSX */}

                    {/* Up? Green + ▲ */}
                    {/* Down? Red + ▼ */}
                    <tbody>
                        {coinData.map((coin, idx) => {
                            return (
                                <tr key={coin.symbol}>
                                    <td>{idx + 1}</td>
                                    <td>{COIN_LABELS[coin.symbol]}</td>
                                    <td>
                                        $
                                        {Number(
                                            coin.lastPrice
                                        ).toLocaleString()}
                                    </td>
                                    <td
                                        style={
                                            Number(coin.priceChangePercent) > 0
                                                ? { color: "green" }
                                                : { color: "red" }
                                        }
                                    >
                                        {Number(coin.priceChangePercent) > 0
                                            ? "▲"
                                            : "▼"}
                                        {Number(
                                            coin.priceChangePercent
                                        ).toFixed(2)}
                                        %
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="bottom-logo-ctr">
                    <img
                        className="bottom-logo"
                        alt="logo"
                        src="https://assets.codepen.io/6060109/crypto-logo-primary.png"
                    />
                </div>
            </div>
        </div>
    );
}
