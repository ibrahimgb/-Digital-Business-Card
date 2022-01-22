import profilePic from "../images/ibrahimgb.jpeg";
//import "./App.css";

function Header() {
    return (
        <header className="header">
            <img src={profilePic} width="317px" alt="" className="profilePic" />
        </header>
    );
}

export default Header;
