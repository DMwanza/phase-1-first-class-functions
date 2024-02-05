function receivesAFunction(porepore){
    console.log("Nimesema")
    porepore()
}
receivesAFunction(()=>console.log("iza mzing"))

const returnsANamedFunction=()=>{
    return function named(){
        console.log("ni kutuff")
    }
}
returnsANamedFunction()

const returnsAnAnonymousFunction=()=>{
    return function (){
        console.log("ni kutuff")
    }
}
returnsAnAnonymousFunction()