import Logo from '../../assets/images/logo.svg';
import './style.scss';
export const Header = () => {
  return (
    <header className="headerContainer">
      <div className="container">
        <img className="logo" src={Logo} alt="Logo The Movies DB" />
      </div>
    </header>
  );
};
