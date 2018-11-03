const mapping = (a) => parseInt(a,16)
const sum = (input) => {
    var inputSequence = input.split("").map(mapping)
    return inputSequence.reduce((acc,val) => acc+val)
}


console.log(sum("123"))