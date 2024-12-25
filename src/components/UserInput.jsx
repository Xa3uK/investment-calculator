function UserInput(props) {
    const {
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
        setInitialInvestment,
        setAnnualInvestment,
        setExpectedReturn,
        setDuration,
    } = props;

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input
                        id="initial-investment"
                        type="number"
                        value={initialInvestment}
                        step="any"
                        min="0"
                        onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input
                        id="annual-investment"
                        type="number"
                        value={annualInvestment}
                        step="any"
                        min="0"
                        onChange={(e) => setAnnualInvestment(Number(e.target.value))}
                    />
                </p>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input
                        id="expected-return"
                        type="number"
                        value={expectedReturn}
                        step="0.5"
                        min="0"
                        onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        type="number"
                        value={duration}
                        step="1"
                        min="0"
                        onChange={(e) => setDuration(Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserInput;
