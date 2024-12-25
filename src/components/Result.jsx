import {calculateInvestmentResults, formatter} from "../util/investment";

function Result({initialInvestment, annualInvestment, expectedReturn, duration}) {

    const investmentData = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    });
    {

        return (
            <div id="result" className="center">
                <table>
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                    </thead>
                    <tbody>
                    {investmentData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(data.totalInterest)}</td>
                            <td>{formatter.format(initialInvestment + data.annualInvestment * data.year)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Result;
