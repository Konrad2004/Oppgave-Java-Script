let globalScope = "hei jeg er i global scope"

function ytreFunksjon(){
  let ytreVar = "jeg er i ytreFunksjon"
  //console.log(ytreVar)
  function indreFunksjon(){
    let indreVar = "jeg er i indreFunksjon"
    //console.log(indreVar)
  }
  indreFunksjon();
  console.log(globalScope)
  console.log(ytreVar)
  console.log(indrevar)
}
console.log(ytreFunksjon())