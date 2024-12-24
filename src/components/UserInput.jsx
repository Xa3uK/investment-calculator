function UserInput() {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input
                        id="initial-investment"
                        type="number"
                        defaultValue="10000"
                        step="any"
                        min="0"
                    />
                </div>
                <div>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input
                        id="annual-investment"
                        type="number"
                        defaultValue="300"
                        step="any"
                        min="0"
                    />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input
                        id="expected-return"
                        type="number"
                        defaultValue="5.5"
                        step="0.5"
                        min="0"
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        type="number"
                        defaultValue="12"
                        step="1"
                        min="0"
                    />
                </div>
            </div>
        </div>
    );
}

export default UserInput;
