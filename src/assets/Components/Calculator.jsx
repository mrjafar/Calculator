import { useState } from "react"

export const Calculator = () => {

    const [value, setValue] = useState("");

    const handleItems = (e) => {
        setValue(value + e.target.innerHTML)
    }

    const handleEqual = () => {
        setValue(eval(value))
    }

    const handleClrAll = () => {
        setValue("")
    }

    const handleDelete = () => {
        setValue(value.toString().slice(0,-1));
    }
    return (<>
        <h1>Calculator</h1>
        <div className="container">
            <div className="input">
                <input type="text" value={value} placeholder="0" onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="items-container">
            <button className="item" onClick={handleClrAll}>AC</button>
            <button className="item" onClick={handleDelete}>del</button>
            <button className="item" onClick={handleItems}>%</button>
            <button className="item" onClick={handleItems}>*</button>
            <button className="item" onClick={handleItems}>9</button>
            <button className="item" onClick={handleItems}>8</button>
            <button className="item" onClick={handleItems}>7</button>
            <button className="item" onClick={handleItems}>/</button>
            <button className="item" onClick={handleItems}>6</button>
            <button className="item" onClick={handleItems}>5</button>
            <button className="item" onClick={handleItems}>4</button>
            <button className="item" onClick={handleItems}>-</button>
            <button className="item" onClick={handleItems}>3</button>
            <button className="item" onClick={handleItems}>2</button>
            <button className="item" onClick={handleItems}>1</button>
            <button className="item" onClick={handleItems}>+</button>
            <button className="item" onClick={handleItems}>00</button>
            <button className="item" onClick={handleItems}>0</button>
            <button className="item" onClick={handleItems}>.</button>
            <button className="item" onClick={handleEqual}>=</button>
        </div>
</div>
    </>
    )
}