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
        <a href="https://github.com/piqlow/Rebuilding-Chef-Claude">
          Go to Github
        </a>
      </div>
    </header>
  );
}

export default Header;
