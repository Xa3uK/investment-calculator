function UserInput({userInput, handleChange}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input
                        id="initial-investment"
                        type="number"
                        value={userInput.initialInvestment}
                        step="any"
                        min="0"
                        onChange={(e) => handleChange('initialInvestment', Number(e.target.value))}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input
                        id="annual-investment"
                        type="number"
                        value={userInput.annualInvestment}
                        step="any"
                        min="0"
                        onChange={(e) => handleChange('annualInvestment', Number(e.target.value))}
                    />
                </p>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input
                        id="expected-return"
                        type="number"
                        value={userInput.expectedReturn}
                        step="0.5"
                        min="0"
                        onChange={(e) => handleChange('expectedReturn', Number(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        type="number"
                        value={userInput.duration}
                        step="1"
                        min="0"
                        onChange={(e) => handleChange('duration', Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserInput;
