import React,{useState,useEffect} from 'react';
import './App.css'
import FlashcardList from './components/FlashcardList';
import axios from 'axios';


function App() {
  const [flashcards,setFlashcards] = useState(Sample_flashcards)

  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=10').then(res=>{
      setFlashcards(res.data.results.map((qItem,index)=>{
        const answer = decodeString(qItem.correct_answer) 
        const options = [...qItem.incorrect_answers.map(a=>{
          return decodeString(a)
        }), answer]
        return {
          id:`${index}-${Date.now()}`,
          question:decodeString(qItem.question),
          answer:answer,
          option: options.sort(()=>Math.random()-.5)
        }
      }))

    })
  },[])

  function decodeString(str){
    const textArea =document.createElement('textarea');
    textArea.innerHTML =str;
    return textArea.value
  }

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
  )
}

const Sample_flashcards =[
  {
    id:1,
    question:'What is 2+2?',
    answer:'4',
    option: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id:2,
    question:'Question 2?',
    answer:'5',
    option: [
      '22',
      '2452',
      '2542',
      '52'
    ]
  },
  {
    id:3,
    question:'What is 252?',
    answer:'252',
    option: [
      '100',
      '252',
      '0',
      '5'
    ]
  }
]

export default App;