export default function Todotask({task,isDone}){        
    if(isDone ==='true'){
   return <li>completed:{task}</li>;

}
else{
    return <li>working on:{task}</li>;
}

}
