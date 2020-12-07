import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

//old fashion
// function createNotes(noteItem) {
//   // return note that contains props
//   return <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />;
// }

function App() {
  return (
    <div>
      <Header />
      {/* <Note title="This is the note title" content="This is the note content"/> */}
      {/* along with old fashion */}
      {/* {notes.map(createNotes(noteItem) */}

      {/* new
      arrow func */}
      {notes.map((noteItem) => 
  // return note that contains props
  <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
)}
      <Footer />
    </div>
  );
}

export default App;
