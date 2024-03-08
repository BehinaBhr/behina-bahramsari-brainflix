import "./FormattedDate.scss"

function timestampToDate(timestamp) {
    let date = new Date(timestamp);
    // console.log(date);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return `${m}/${d}/${y}`;
}

function FormattedDate({ timestamp }) {
    return (
        <div className="date">{timestampToDate(timestamp)}</div>
    );
}

export default FormattedDate;
