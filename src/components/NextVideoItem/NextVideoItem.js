import "./NextVideoItem.scss";

function NextVideoItem({ video, updateActiveVideo}) {
    let className = "next-video-item";
    const handleClick = () => {
        updateActiveVideo(video.id);
    }

    return (
        <li onClick={handleClick} className={className}>
            <img className="next-video-item__image" src={video.image} alt={video.name} />
            <div className="next-video-item__info">
                <div className="next-video-item__title">{video.title}</div>
                <div className="next-video-item__channel">{video.channel}</div>
            </div> 
        </li>
    );
}

export default NextVideoItem;