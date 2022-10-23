import './App.css';
import { useState } from 'react';

function App() {
  const [chars, setChars] = useState("");
  const [words, setWords] = useState("");
  const [lines, setLines] = useState("");
  return (
    <div className='App'>
      <h1>Text-Tool</h1>
      <h4>Total Characters : {chars.length}</h4>
      <h4>Total Words : {words.length}</h4>
      <h4>Total Lines : {lines.length}</h4>

      <textarea className='ibox' placeholder='Start entering the text' value={chars} onChange={(e) => {
        e.preventDefault();
        setChars(e.target.value);
        setWords(e.target.value.split(/\s+/).filter((element) => { return element.length !== 0 }))
        // count();
        setLines(e.target.value.split("\n"));
      }} /><br />

      <button className="btn" onClick={(e) => {
        e.preventDefault();
        setChars(chars.replace(/\s{2,}/g, ' ').trim())
      }}>Remove extra spaces</button>
      <br /><br />

      <button className="btn" onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(chars);
        alert("Copied to Clipboard!");
      }}>Copy text</button>
      <br /><br />

      <button  className="btn" onClick={(e) => {
        e.preventDefault();
        setChars(chars.toLowerCase());
      }}>lower case</button>

      <button className="btn" onClick={(e) => {
        e.preventDefault();
        setChars(chars.toUpperCase());
      }}>Upper case</button>
    </div>
  );
}

export default App;
