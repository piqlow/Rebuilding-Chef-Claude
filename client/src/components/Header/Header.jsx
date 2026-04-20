import "./Header.css";
import ClaudeIcon from "../../assets/chef-claude-icon.png";

function Header() {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="brand">
          <img src={ClaudeIcon} alt="" />
          <h1>Chef Claude</h1>
        </div>
        <button>Go to Github</button>
      </div>
    </header>
  );
}

export default Header;
