import { Dispatch, SetStateAction } from 'react';

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string>>;
    cell: string;
    winningMassage:string;
}

const Cell = ({ go, setGo, id, cells, setCells, cell, winningMassage }: CellProps) => {
    const handleCellChange = (celltoChange: string) =>{
        let copyCells = [...cells]
        copyCells[id] = celltoChange
        setCells(copyCells);
    }
    const handleClick =(e)=> {
        if(winningMassage){
            return;
        }
        const notTaken = !cells[id]
        if(notTaken){
        if (go === "circle"){
            handleCellChange("circle")
            setGo("cross")
        }
        else if( go === "cross"){
            handleCellChange("cross")
            setGo("circle")

        }
    }
    }
    return <div className="square" onClick={handleClick}>
        <div className={cell}>
            {cell? (cell==="circle" ? "O" : "X"):""}
        </div>
    </div>;
};

export default Cell;