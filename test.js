const adjustedValue = (dimensions=[], values=[]) => {
  let value = values[0]
  let dim = dimensions.find((dimension)=>widthScreen<=dimension)
  value = values[dimensions.findIndex(item=>item=dim)]
  return value==undefined? values[values.length-1]:value;
}

const widthScreen = 1000
let dimensions = [360,500,800], values= [0,1,2]


console.log(value, dim)