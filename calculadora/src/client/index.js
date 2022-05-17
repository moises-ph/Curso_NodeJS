import React from "react";
import { render } from "react-dom";
import { useState } from "react";

import './style/main.css'

const App = () => {

    const [numeros, setNumeros] = useState('');
    const [resultado, setResultado] = useState('0');
    const [lastnum, setLastnum] = useState('');
    const [ans, setAns] = useState('0');

    const keyinput = e => {
        const tecla = e.key;
        console.log(tecla);
        if(tecla === 'Enter'){
        realizar();
        }
        else if(tecla === 'Backspace'){
        borrar();
        }
        else if(tecla === 'Escape'){
        reset();
        }
        else if(tecla === '+' || tecla === '-' || 
        tecla === '*' || tecla === '/' || tecla === '.' || 
        tecla === '1' || tecla === '2' || tecla === '3' || 
        tecla === '4' || tecla === '5' || tecla === '6' || 
        tecla === '7' || tecla === '8' || tecla === '9' || tecla === '0'){ 
        setNumeros(numeros + tecla); 
        if(resultado === '0'){
            setResultado(tecla);
        }
        else if(resultado !== '0'){
            setResultado(resultado + tecla); 
        }
        }
        else if(tecla === '!'){
        factorial();
        }
    }

    const borrar = () => {
        setNumeros(numeros.slice(0, -1));
        setResultado(numeros);
    }

    const reset = () => {
        setResultado('0');
        setNumeros('');
        setLastnum('');
    }

    const factorial = () => {
        let numero = parseInt(lastnum);
        let fact = '';
        for(let i = 1; i <= numero; i++){
        fact += i.toString() + '*';
        }
        console.log(numeros.slice(0, -(lastnum.length)) + fact.slice(0, -1))
        setNumeros(numeros.slice(0, -(lastnum.length)) + fact.slice(0, -1));
        setResultado(resultado + '!');
    }

    const guardar_num_porcentaje = () => {
        setNumeros(numeros + '/100');
        setResultado(resultado + '%');
    }
    

    const logaritmo_baseX = () => {
        let lastnum_l = lastnum.length;
        let logaritmo = 'Math.log10(' + lastnum + ')';
        console.log(logaritmo)
        setNumeros(numeros.slice(0, -(lastnum_l)) + logaritmo);
        setResultado(resultado.slice(0,-(lastnum_l)) + 'log'+ '(' +lastnum + ')');
    }

    const raiz_cuadrada = () => {
        let lastnum_l = lastnum.length;
        let raiz = 'Math.sqrt(' + lastnum + ')';
        setNumeros(numeros.slice(0, -(lastnum_l)) + raiz);
        setResultado(resultado.slice(0,-(lastnum_l)) + '√'+ '(' +lastnum + ')');
    }

    const logaritmo_nat = () => {
        let lastnum_l = lastnum.length;
        let logaritmo = 'Math.log(' + lastnum + ')';
        setNumeros(numeros.slice(0, -(lastnum_l)) + logaritmo);
        setResultado(resultado.slice(0,-(lastnum_l)) + 'ln'+ '(' +lastnum + ')');
    }

    const potencia = () => {
        setNumeros(numeros + '**');
        setResultado(resultado + '^');
    }

    const guardar_num = (e) => {
        if(e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === '/' || e.target.value === 'ln'){
        setLastnum('');
        }
        else{
        setLastnum(lastnum + e.target.value);
        }
        setNumeros(numeros + e.target.value); 
        if(resultado === '0'){
        setResultado(e.target.value);
        }
        else if(resultado !== '0'){
        setResultado(resultado + e.target.value); 
        }
        console.log(lastnum)
    };

    const seno_inverso = () => {
        let lastnum_l = lastnum.length;
        let seno = 'Math.asin(' + lastnum + ')';
        setNumeros(numeros.slice(0, -(lastnum_l)) + seno);
        setResultado(resultado.slice(0,-(lastnum_l)) + 'arcsen'+ '(' +lastnum + ')');
    }

    const coseno_inverso = () => {
        let lastnum_l = lastnum.length;
        let coseno = 'Math.acos(' + lastnum + ')';
        setNumeros(numeros.slice(0, -(lastnum_l)) + coseno);
        setResultado(resultado.slice(0,-(lastnum_l)) + 'arccos'+ '(' +lastnum + ')');
    }

    const tan_inverso = () => {
        let lastnum_l = lastnum.length;
        let tang = 'Math.atan(' + lastnum + ')';
        setNumeros(numeros.slice(0, -(lastnum_l)) + tang);
        setResultado(resultado.slice(0,-(lastnum_l)) + 'arctan'+ '(' +lastnum + ')');
    }

    const pi = () => {
        setNumeros(numeros + 'Math.PI');
        setResultado(resultado + 'π');
    }

    const exp = () => {
        setNumeros(numeros + '* 10 **');
        setResultado(resultado + 'EXP');
    }

    const sin = () => {
        let lastnum_l = lastnum.length;
        let seno = 'Math.sin(' + lastnum + ')';
        setNumeros(numeros.slice(0, -(lastnum_l)) + seno);
        setResultado(resultado.slice(0,-(lastnum_l)) + 'sin'+ '(' +lastnum + ')');
    }

    const tan = () => {
        let lastnum_l = lastnum.length;
        let tang = 'Math.tan(' + lastnum + ')';
        setNumeros(numeros.slice(0, -(lastnum_l)) + tang);
        setResultado(resultado.slice(0,-(lastnum_l)) + 'tan'+ '(' +lastnum + ')');
    }

    const cos = () => {
        let lastnum_l = lastnum.length;
        let coseno = 'Math.cos(' + lastnum + ')';
        setNumeros(numeros.slice(0, -(lastnum_l)) + coseno);
        setResultado(resultado.slice(0,-(lastnum_l)) + 'cos'+ '(' +lastnum + ')');
    }

    const euler = () => {
        setNumeros(numeros + 'Math.E');
        setResultado(resultado + 'e');
    }

    const answer = () => {
        let result = ans;
        reset();
        setResultado('ANS');
        setNumeros(result);
    }

    const realizar = () =>{
        setAns(eval(numeros));
        setResultado(eval(numeros));
        setNumeros(eval(numeros));
        console.log(eval(numeros));
    }

    return (<div className='main-div'>
                <div className='instrucciones'>
                <h2>Instrucciones</h2>
                <p>
                    <strong>1.</strong>
                    <span>Para realizar log,ln,sin,cos,tan y sus inversos, seleccione el número que desea operar, luego seleccione la operación que desea realizar, y luego presione el botón "=" para realizar la operación.</span>
                </p>
                </div>
                <div>
                    <div className='calculadora'>
                        <h1>Calculadora</h1>
                        <div className='caja'>
                                <div className='display'>
                                <div className='ANS'>Ans = {ans}</div>
                                <input readOnly onKeyDown={keyinput} type='text' value={resultado}></input>
                                </div>
                                <table>
                                <tr>
                                    <td><button className='operador' onClick={sin} value='sin'>sin</button></td>
                                    <td><button className='operador' onClick={seno_inverso} value='sin-1'>sin<sup>-1</sup></button></td>
                                    <td><button className='operador' onClick={factorial} value='!'>x!</button></td>
                                    <td><button className='operador' onClick={guardar_num} value='('>(</button></td>
                                    <td><button className='operador' onClick={guardar_num} value=')'>)</button></td>
                                    <td><button className='operador' onClick={guardar_num_porcentaje} value='%'>%</button></td>
                                    <td><button className='operador' onClick={reset}>AC</button></td>
                                </tr>
                                <tr>
                                    <td><button className='operador' onClick={cos} value='cos'>cos</button></td>
                                    <td><button className='operador' onClick={coseno_inverso} value='cos-1'>cos<sup>-1</sup></button></td>
                                    <td><button className='operador' onClick={logaritmo_nat} value='ln'>ln</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='7'>7</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='8'>8</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='9'>9</button></td>
                                    <td><button className='operador' onClick={guardar_num} value='/'>÷</button></td>
                                </tr>
                                <tr>
                                    <td><button className='operador' onClick={tan} value='tan'>tan</button></td>
                                    <td><button className='operador' onClick={tan_inverso} value='tan-1'>tan<sup>-1</sup></button></td>
                                    <td><button className='operador' onClick={logaritmo_baseX}>log</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='4'>4</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='5'>5</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='6'>6</button></td>
                                    <td><button className='operador' onClick={guardar_num} value='*'>*</button></td>
                                </tr>
                                <tr>
                                    <td><button className='operador' onClick={euler} value='e'>e</button></td>
                                    <td><button className='operador' onClick={pi} value = 'π'>π</button></td>
                                    <td><button className='operador' onClick={raiz_cuadrada} value='√'>√</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='1'>1</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='2'>2</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='3'>3</button></td>
                                    <td><button className='operador' onClick={guardar_num} value='-'>-</button></td>
                                </tr>
                                <tr>
                                    <td><button className='operador' onClick={answer} value='ans'>ANS</button></td>
                                    <td><button className='operador' onClick={exp} value='exp'>EXP</button></td>
                                    <td><button className='operador' onClick={potencia} value='^'>x<sup>y</sup></button></td>
                                    <td><button className='numero' onClick={guardar_num} value='0'>0</button></td>
                                    <td><button className='numero' onClick={guardar_num} value='.'>.</button></td>
                                    <td><button className='igual' onClick={realizar} value='='>=</button></td>
                                    <td><button className='operador' onClick={guardar_num} value='+'>+</button></td>
                                </tr>
                                </table>
                            </div>
                        </div>
                </div>
            </div>
    )
    
}

render(
    <div>
        <App />
    </div>,
    document.getElementById("app")
);