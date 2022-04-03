import React, {useState, useEffect, useReducer} from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const getAverage = (numbers) => {
    console.log("평균 계산");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum/numbers.length;
};

function Counter() {
    const[counter, setCounter] = useState(0);
    const onIncrease = () => {
        setCounter(counter + 1);
    }
    const onDecrease = () => {
        setCounter(counter - 1);
    }

    const [text, setText] = useState('');
    const onChangeText = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        console.log('처음에만');
    }, [])

    useEffect(() => {
        console.log("카운터");
    }, [counter]);

    useEffect(() => {
        console.log("입력");
    }, [text]);

    //

    const [visible, setVisible] = useState(false);

    //
    
    const [state, dispatch] = useReducer(reducer, {value: 0});

    //

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onNumberChange = (e) => {
        setNumber(e.target.value);
    }
    const onListInsert = (e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    return (
        <>
            <div>
                <h1>{counter}</h1>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
            <hr />
            <div>
               <label>
                   입력 :
                   <input type="text" value={text} onChange={onChangeText} /> 
                </label>
               <p>출력 :{text}</p>
            </div>
            <hr />
            <div>
                <button onClick={() => {
                    setVisible(!visible);
                }}>
                    {visible ? ':(' : ':)'}
                </button>
                {visible && <span>Hello</span>}
            </div>
            <hr />
            <div>
                <p>{state.value}</p>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            </div>
            <hr />
            <div>
                <input type="number" value={number} onChange={onNumberChange} />
                <button onClick={onListInsert}>등록</button>
                <ul>
                    {list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
                <p>평균 : {getAverage(list)}</p>
            </div>
        </>
    );
}

export default Counter;