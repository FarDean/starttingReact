import React,{useState,useEffect} from 'react';
import './App.css'
import FlashcardList from './components/FlashcardList';

function App() {
  const [flashcards,setFlashcards] = useState(Sample_flashcards)
  return (
    <>
      <FlashcardList flashcards={flashcards} />
    </>
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