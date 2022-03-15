import {useState, useEffect} from 'react'
const Counter = (props)=>{
    // [] makes this run only on mount
    useEffect(()=>{
        console.log('USEEFFECT: Counter Func mounted')
    },[])
    // const [state, setState]= useState(initialState)
    // when you call the 'setState'  method it update state
   // and, it trigger a rerender
    const [count, setCount]= useState(0)
    const doStuffWithUpdatedCount =(count)=>{
        // we need log updateCount (correct state)
        console.log('count in doStuffWithUpdatedCount:',count)
    }

    const add = ()=>{
      console.log('about to update count state')
      let newCount = count + 1
      
      // this is async, you can't assume it will be update here
      // it will by the time your component renders
      setCount(newCount)
      
      // pass newCount (right value)
      doStuffWithUpdatedCount(newCount)
      console.log('count state update')
      // WHAT ???? count is not updated (but is in the UI)
      console.log(`count: ${count}`)
    }

    console.log('rendering Counter (Function)')
    // once we get count will be updated
    // console.log(`count  before render: ${count}`)
    return(
        <div className="border">
            <h1>Counter: {props.header}</h1>
            <p>count: {count}</p>
            <button onClick={add}>add</button>
        </div>
    )
}

export default Counter