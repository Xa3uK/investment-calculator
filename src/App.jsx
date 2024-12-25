import React, { useState } from "react";
import './index.css';
import Header from './components/Header.jsx';
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
    const [initialInvestment, setInitialInvestment] = useState(10000);
    const [annualInvestment, setAnnualInvestment] = useState(1200);
    const [expectedReturn, setExpectedReturn] = useState(6);
    const [duration, setDuration] = useState(10);

    return (
        <>
            <Header />
            <UserInput
                annualInvestment={annualInvestment}
                initialInvestment={initialInvestment}
                expectedReturn={expectedReturn}
                duration={duration}
                setInitialInvestment={setInitialInvestment}
                setAnnualInvestment={setAnnualInvestment}
                setExpectedReturn={setExpectedReturn}
                setDuration={setDuration}
            />
            <Result
                initialInvestment={initialInvestment}
                annualInvestment={annualInvestment}
                expectedReturn={expectedReturn}
                duration={duration}
            />
        </>
    );
}

export default App;
