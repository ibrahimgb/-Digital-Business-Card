import "../App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Heder";

function Card() {
    return (
        <div className="card">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Card;
