import React from "react";
import { useState, useEffect } from "react";

const Calculator=()=>{
    const [currentSum,setCurrentSum]=useState(0);
    const [clear,setClear]=useState(false);
    const Add=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum==='')
        return;
        let sum= currentSum+parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
    
    }
    const Sub=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum==='')
        return;
        let sum= currentSum-parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
    
    }
    const Mul=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum==='')
        return;
        let sum= currentSum*parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
    
    }
    const Div=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum==='')
        return;
        let sum= currentSum/parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
    
    }
    const Clear=(e)=>{
        e.preventDefault();
        console.log('sum:', currentSum);
        document.querySelector('form').reset();
        setClear(true);
        setCurrentSum(0);
      }
      useEffect(()=>{
        document.querySelector('#result').value="";
      },[])
    
      useEffect(()=>{
        if(clear)
        document.querySelector('#result').value="";
      })
    return(
        <div>
            <div className="app-title">
                <h1> Basic Form Calculator</h1>
            </div>
        <form className="ui form">
            <input type="text" id="result" value={currentSum} style={{border:'2px solid black'}}  readOnly />
            <input type="text" className="field" id="num" placeholder="enter a number" style={{border:'2px solid aqua'}} />
            <button onClick={Add}>Add(+)</button>
            <button onClick={Sub}>Sub(-)</button>
            <button onClick={Mul}>Mul(*)</button>
            <button onClick={Div}>Div(/)</button>
            <button onClick={Clear}>Clear</button>
        </form>
        </div>
    )
}
export default Calculator;