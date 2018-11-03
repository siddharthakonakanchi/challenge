var fs=require('fs');

const flag = process.argv[2]
const input = process.argv[3]

const isConvertHex = flag.indexOf('x') >= 0
const isFile = flag.indexOf('f') >= 0

const digitRegex = /\d$/

const mapping = (a) => {
  var parsed = 0
  if (isConvertHex) {
	parsed = parseInt(a,16)
	if ( isNaN(parsed) ) {
      throw "Invalid Parameter"
	}
  }
  else{
	  const matched = a.match(digitRegex)
	  parsed = matched === null ? 0: parseInt(a)
  }
  return parsed; 
}

const sum = (input) => {
  var output = 0
  try{
    var inputSequence = input.split("").map(mapping)
    output = inputSequence.reduce((acc,val) => acc+val)
  }
  catch(e) {
    output = 0
  }
  finally {
    return output
  }
}

if(isFile)
{
	var contents=fs.readFileSync(input, 'utf8')
	console.log(sum(contents))
}
else{
	console.log(sum(input))	
}
