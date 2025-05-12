"use client";
import React, { useEffect, useState } from "react";
import Cell from './component/Cell';

type CellValue = "" | "circle" | "cross"; // Define possible cell values

export default function Home() {
  const winningCombos =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 8, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const [cells, setCells] = useState<CellValue[]>([
    "", "", "",
    "", "", "",
    "", "", ""  
  ]);
  const [go, setGo] = useState<"circle" | "cross">("circle");
  const [winningMassage, setWinningMassage] =useState ("")
useEffect(()=>{
  winningCombos.forEach((combo)=>{
    const circlWins =combo.every((cell) => cells[cell] === "circle");
    const crossWins =combo.every((cell) => cells[cell] === "cross");
    if(circlWins){
      setWinningMassage(" circle Wins ")
    }else if(crossWins){
      setWinningMassage(" cross Wins ")
    }
  })
},[cells])

useEffect(()=>{
  if(cells.every((cell)=> cell !="") && !winningMassage){
    setWinningMassage("Draw!");
  }
  }, [cells, winningMassage])

  return (
    <div className="container">
      <div className="gameBorder">
        {cells.map((cell, index) => (
          <Cell 
            key={index} 
            go={go} 
            setGo={setGo} 
            id={index} 
            cell={cell} 
            cells={cells} 
            setCells={setCells}
            winningMassage={winningMassage}
          />
        ))}
      </div>
      <div> {winningMassage}</div>
      {!winningMassage&&(
         <div> {go} : play now </div>
      )}
  
    </div>
  );
}