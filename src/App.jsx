import React, {useState} from "react";
import Header from './components/Header.jsx';
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(keyIdentifier, newValue) {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [keyIdentifier]: newValue,
            }
        });
    }

    return (
        <>
            <Header/>
            <UserInput
                userInput={userInput}
                handleChange={handleChange}
            />
            <Result userInput={userInput}/>
        </>
    );
}

export default App;
