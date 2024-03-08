import "./Button.scss";

function Button({ iconSrc, text }) {
    return (
        <div className="button">
            <img className="button__icon" src={iconSrc} alt={text + " Icon"} />
            <button>{text}</button>
        </div>
    );
}

export default Button;
