import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import { NotesList } from "./components/NotesList"
import { Search } from "./components/Search";
import { Header } from "./components/Header";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    // Return saved notes if they exist, otherwise use the default array
    return savedNotes || [
      {
        id: nanoid(),
        text: 'This is my first Note',
        date: '08-02-2026',
      },
      {
        id: nanoid(),
        text: 'This is my second Note',
        date: '09-02-2026',
      },
      {
        id: nanoid(),
        text: 'This is my third Note',
        date: '10-02-2026',
      }
    ];
  });

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // 2. This hook now only handles SAVING. 
  // Because notes are initialized from storage, it won't overwrite them on refresh.
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;