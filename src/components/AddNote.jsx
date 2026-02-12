import { useState } from "react"

export function AddNote({ handleAddNote }){
    const [noteText, setNoteText] = useState('');
    // for charecter limit
    const characterLimit = 200;

    function handleChange(event){
        // console.log(event.target.value);
        //character limit logic2
        if (characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        };  
    };

    function handleSaveClick(){
        if (noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }  
    };

    return (
        <div className="note new">
            <textarea
                rows = '8'
                cols = '10'
                placeholder = 'Type to add a note...'
                value = {noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                {/* character limit logic 1 */}
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}
