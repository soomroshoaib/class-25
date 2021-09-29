import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [books, setbook] = useState([])
  useEffect(() => {
    setInterval(()=>{
      fetch("/api/books")
      .then(res => res.json())
      .then(data => {
       
        setbook(data)
      })
    }, 3000)
  }, [])

  if(!books.length)
    return <h1>loading...!</h1>


    const Addbook = ()=>{
      const title = prompt("Enter your book title")
      const Author = prompt("Enter your book Author")
      if(!title || !Author)
      return false
      console.log(title, Author)

      fetch("/api/add",{
        method: "POST",
        body: JSON.stringify( { title, Author})
      }).then(res => res.json)
      .then(data => console.log(data))
    }
  return (
    <div className="App">
      <h2>Available Books</h2>
      <table border={1} style={{width:'300px',height:'200px', margin:"0 auto"}}>
        <thead>
          <th>Title</th>
          <th> Author</th>
        </thead>
        <tbody>
        {books.map((bookObj, ind) => {
          return(
          <tr key={ind} >
            <td>{bookObj.title}</td>
            <td>{bookObj.Author}</td>
          </tr>
          )

        })}
        </tbody>
      </table>
      <button onClick={Addbook}>Book ADD</button>
    </div>
  );
}

export default App;
