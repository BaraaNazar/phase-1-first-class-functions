let callBack =  function (){
  return "Im a callBack Function"
}
//  function ANmed (){
//   return callBack()
// }

function receivesAFunction(callBack){
return callBack()
}

function returnsANamedFunction()
{
  return function ANmed (){"im a named function"}
}

function returnsAnAnonymousFunction(){
  return function(){"im an Anonymous Function "}
}
