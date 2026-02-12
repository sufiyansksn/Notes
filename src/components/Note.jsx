import dustbin from "../icons/dustbin.png";

export function Note({id, text, date, handleDeleteNote }) {
    return (
        <div className="note">
        <span>{text}</span>

        <div className="note-footer">
            <small>{date}</small>
            <img
            onClick={()=> handleDeleteNote(id)}
            src={dustbin}
            alt="delete note"
            className="delete-icon"
            />
        </div>
        </div>
    );
}
