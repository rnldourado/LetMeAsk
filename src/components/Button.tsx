// type ButtonProps = {
//     text?: String;
//     //* "?:" tranforma a propriedade em opcional
// }


// export function Button(props: ButtonProps){
    //     return(
        //         <button>{props.text || 'Clique aqui'}</button>
        //     )
        // }
        
import { useState } from "react";

export function Button(){
    //let counter = 0;

    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}