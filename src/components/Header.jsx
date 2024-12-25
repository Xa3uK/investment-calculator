import Logo from '../../public/investment-calculator-logo.png';

function Header() {
  return (
      <header id="header">
          <img src={Logo} alt="Logo"/>
          <h1>Investment calculator</h1>
      </header>
  );
}

export default Header;