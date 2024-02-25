import "./Avatar.scss";

function Avatar({ avatarSrc }) {
    return (
        <div className="avatar">
            <img src={avatarSrc} alt="User Avatar" className="avatar__image" />
        </div>
    )
}

export default Avatar;
