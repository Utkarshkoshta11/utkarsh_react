// import React, { useState, useTransition } from "react";
// export default function App() {
//     const [inputValue, setInputValue] =useState('');
//     const [list, setList]=useState(Array.from({ length:1000}, (_, i)=> `Item ${i + 1}`));

//     //Transition state
//     const [isPending, startTransition]= useTransition();

//     const handleOnChange = (e) => {
//         const newValue = e.target.value;
//         setInputValue(newValue);

//         startTransition(() => {
//             const filteredList = list.filter((item) => item.toLowerCase().includes(newValue.toLowerCase()));
//             setList(filteredList);
//         })
//     }

//     return (
//         <div>
//             <input type="text" value={inputValue} onChange={handleOnChange} placeholder="Filter list"/>
//             {isPending ? <p>Updating list...</p> : null}

//             <ul>
//                 {list.map((item, index) => (
//                 <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
