import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
//import GuessList from '../GuessList';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';

import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [valueList, setValueList] = React.useState([]);

  // upperKeys
  const [topKeys, setTopKeys] = React.useState([
    {letter: "Q", status: ""}, {letter: "W", status: ""}, {letter: "E", status: ""},
    {letter: "R", status: ""}, {letter: "T", status: ""}, {letter: "Y", status: ""},
    {letter: "U", status: ""}, {letter: "I", status: ""}, {letter: "O", status: ""},
    {letter: "P", status: ""}
  ]);

  //midKeys
  const [midKeys, setMidKeys] = React.useState([
      {letter: "A", status: ""}, {letter: "S", status: ""}, {letter: "D", status: ""},
      {letter: "F", status: ""}, {letter: "G", status: ""}, {letter: "H", status: ""},
      {letter: "J", status: ""}, {letter: "K", status: ""}, {letter: "L", status: ""}
  ]);

  // bottomKeys
  const [bottomKeys, setBottomKeys] = React.useState([
      {letter: "Z", status: ""}, {letter: "X", status: ""}, {letter: "C", status: ""},
      {letter: "V", status: ""}, {letter: "B", status: ""}, {letter: "N", status: ""},
      {letter: "M", status: ""}
  ]);

  const keyArr = [topKeys, midKeys, bottomKeys];

  //
  const toggleStatus = item => {
    
    const arrChecked = checkGuess(item, answer);

    const topClone = [...topKeys];
    const midClone = [...midKeys];
    const bottomClone = [...bottomKeys];

    for (const elem of arrChecked) {
      console.log('elem looks like ', elem);
      if (topClone.find(item => item.letter === elem.letter)) {
          const theIndex = topClone.findIndex(item => item.letter === elem.letter);
          if (topClone[theIndex].status === "" || topClone[theIndex].status === "misplaced"){
            topClone[theIndex] = elem;
          }
      } else if (midClone.find(item => item.letter === elem.letter)) {
          const theIndex = midClone.findIndex(item => item.letter === elem.letter);
          if (midClone[theIndex].status === "" || midClone[theIndex].status === "misplaced"){
            midClone[theIndex] = elem;
          }
      } else {
          const theIndex = bottomClone.findIndex(item => item.letter === elem.letter);
          if (bottomClone[theIndex].status === "" || bottomClone[theIndex].status === "misplaced"){
            bottomClone[theIndex] = elem;
          }
      }
    }
    setTopKeys(topClone);
    setMidKeys(midClone);
    setBottomKeys(bottomClone);
  }


  return (
    <>
      < Guess rows={NUM_OF_GUESSES_ALLOWED} valueList={valueList} 
              checkGuess={checkGuess} answer={answer}
               />
      < GuessInput valueList={ valueList } setValueList={ setValueList } 
                   answer={ answer } limit={ NUM_OF_GUESSES_ALLOWED }
                   checkGuess={checkGuess} toggleStatus={toggleStatus} />
      < Banner answer={ answer } valueList={ valueList } limit={ NUM_OF_GUESSES_ALLOWED } />
      < Keyboard keyArr={ keyArr } />
    </>
  )
}

export default Game;
