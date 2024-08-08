//export default function Task({ name, isDone }) {
    // return (
    //     // <div><h3>Here is the Task Name: {name}</h3></div>


    // )

    // if(isDone){
    //   return  <div><h3>Finished Task Name: {name}</h3></div>   
    // }

    // return  <div><h3>Ongoing Task Name: {name}</h3></div> 

    // Ternary Operator
    // return (
    //     <div><h3>{isDone ? 'Finished Task Name' : 'Ongoing Task Name'} : {name}</h3></div> 
    // )

    // AND && Operator
    // return (
    //     <div><h3> {isDone && 'Finished Task Name: '} {name}</h3></div>
    // )

     // OR || Operator
    //  return (
    //     <div><h3> {isDone || 'Finished Task Name: '} {name}</h3></div>
    // )

     
//}

//Conditional Rendering Option 6
// export default function Task({task, isDone}){
//     let divItem;

//     if(isDone){
//         divItem=<div><h3> {isDone || 'Finished Task Name: '} {name}</h3></div>
//     }

//     else{
//         divItem=<div><h3> {isDone || 'Finished Task Name: '} {name}</h3></div>
//     }
//     return(
// divItem
//     )
// }