
import React, {useState} from 'react';
import './FruitCounter.css';
import { GiAppleCore, GiBananaBunch, GiOrangeSlice, GiPear } from 'react-icons/gi';
function FruitCounter({fruit}) {
    const [counters, setCounters] = useState({   Appel: 0,   Banaan: 0,   Sinasappel: 0,   Peer: 0 });
    const fruitIcons = {
        "Appel": [<GiAppleCore size={50} color="green" />, "\u{1F34E}"],
        "Banaan": [<GiBananaBunch size={50} color="#CCCC00" />, "\u{1F34C}"],
        "Sinasappel": [<GiOrangeSlice size={50} color="orange" />, "\u{1F34A}"],
        "Peer": [<GiPear size={50} color="green" />, "\u{1F350}"]
    };
    const handleIncrement = () => {
        setCounters(prevState => ({
            ...prevState,
            [fruit]: prevState[fruit] + 1
        }));
    };
    const handleDecrement = () => {
        setCounters(prevState => ({
            ...prevState,
            [fruit]: prevState[fruit] > 0 ? prevState[fruit] - 1 : 0
        }));
    };
    const handleReset = () => {
        setCounters({
            Appel: 0,
            Banaan: 0,
            Sinasappel: 0,
            Peer: 0
        });
    };

    const getRandomIcon = (fruit) => {
        const icons = fruitIcons[fruit];
        return icons[Math.floor(Math.random() * icons.length)];
    };

    return (
        <div className="fruit-component-outer">
        <div className="fruit-component">
           <icon> {getRandomIcon(fruit)}</icon> {fruit}

            <button onClick={handleDecrement}>-</button>
            {counters[fruit]}
        <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
        </div>
            </div>
    );
}
export default FruitCounter;
