import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[data,setData]=useState([]);

  useEffect(()=>{
    fetch(" http://localhost:3000/questions")
    .then(resp=>resp.json())
    .then(questions=>{
      setData(questions)
    })
  },[])

  function addNewQuestion(newQuestion){
   setData([...data,newQuestion])
  }
 
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={addNewQuestion}/> : <QuestionList  allQuestions={data}  />}
    </main>
  );
}

export default App;
