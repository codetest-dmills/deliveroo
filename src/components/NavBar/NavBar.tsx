// Assets
import LogoDesktop from "assets/svgs/logo-horizontal.svg";
import LogoMobile from "assets/svgs/logo-mobile.svg";
import UserIcon from "assets/svgs/user-icon.svg";

// Styles
import "./NavBar.scss";

function Header() {
  const goToMyAccount = () => {
    alert("This would use Router to navigate you to a account page");
  };
  
  return (
    <nav className="site-nav">
      <div className="container">
        <img className="site-logo mobile" src={LogoMobile} alt="Deliveroo" />
        <img className="site-logo desktop" src={LogoDesktop} alt="Deliveroo" />
        <div className="account">
          <button className="account-btn" onClick={goToMyAccount}>
            <img src={UserIcon} alt="My account" />
          </button>
          <p className="account-user">David Mills</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
