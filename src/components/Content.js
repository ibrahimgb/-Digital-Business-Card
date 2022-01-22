//import "./App.css";

function Content() {
    return (
        <div className="content">
            <h1>Ibrahim GB</h1>
            <h2>Frontend Developer</h2>
            <h3>ibrahimgb.website</h3>

            <div className="contact">
                <button className="mail">
                    {" "}
                    <i class="fas fa-envelope"></i> Email
                </button>
                <button className="linkedin">
                    {" "}
                    <i class="fab fa-linkedin"></i> Likedin
                </button>
            </div>

            <h4>About</h4>
            <p>
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
            </p>

            <h4>Interests</h4>
            <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
            </p>
        </div>
    );
}

export default Content;
