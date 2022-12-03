import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    //This use effect fires every time there is a change
    // useEffect(() => {
    //   document.title = count;
    // });

    //These useEffects have limitations that regulate when it is updated
    //the [count] tells useEffect to only run when count changes...  and the same for count 2
    //It's always good to specify when and what should change. Otherwise everything refreshes for no reason.
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log('count 1 effect')
      document.title = count;
    }, [count]);

    const [count2, setCount2] = useState(0);

    useEffect(() => {
      console.log('count 2 effect')
      document.title = count2;
    }, [count2]);

  return (
    <div>
        <button onClick={
            () => setCount(count => count +1)
        }>
            Increment Count ({count})
        </button>
        <button onClick={
            () => setCount2(count2 => count2 +1)
        }>
            Increment Count2 ({count2})
        </button>
        <p>The count is: {count2}</p>
    </div>

  )
}

export default UseEffectCounter