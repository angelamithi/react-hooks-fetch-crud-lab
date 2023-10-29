import React, { useEffect,useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({allQuestions}) {
   const[currentData,setCurrentData]=useState(allQuestions);
  
  function deleteTransaction(deleteItem){
    const updatedItems=currentData.filter((question)=>question.id !== deleteItem.id)
    setCurrentData(updatedItems);
    
   }
   function updatedQuestion(updatedItem){
    const updatedAnswers=allQuestions.map((item)=>{
    if(item.id===updatedItem.id){
      return updatedItem;
    }else{
      return item;
    }
    })
    setCurrentData(updatedAnswers);

   }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{allQuestions.map((singleQuestion,index)=>(
        <QuestionItem  key={index}  question={singleQuestion} onDelete={deleteTransaction} onUpdateItem={updatedQuestion}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
