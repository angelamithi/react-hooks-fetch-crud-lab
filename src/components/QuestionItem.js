import React from "react";

function QuestionItem({question,onDelete,onUpdateItem}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

function handleDelete(){
  fetch(`http://localhost:3000/questions/${question.id}`,{
    method:"DELETE",
  })
  .then((resp)=>resp.json())
  .then(()=>onDelete(question));

}
function handleChange(){
  fetch(`http://localhost:3000/questions/${question.id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({correctIndex})
    .then(resp=>resp.json())
    .then((updatedItem)=>onUpdateItem(updatedItem))

  
  })
}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={question.correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
