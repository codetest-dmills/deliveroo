// Styles
import "./Header.scss";

interface HeaderProps {
  location: string;
}

function Header({ location = "", ...rest }: HeaderProps) {
  const changeLocation = () => {
    alert("This would allow you to change location!");
  };
  
  return (
    <header className="site-header" {...rest}>
      <div className="container">
        <div>
          <p>Location</p>
          <h1 className="location">{location}</h1>
        </div>
        <button className="location-btn" onClick={changeLocation}>
          Change location
        </button>
      </div>
    </header>
  );
}

export default Header;
