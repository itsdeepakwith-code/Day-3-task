function areJSONEqual(obj1, obj2) {
  const sortedStringifiedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
  const sortedStringifiedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  return sortedStringifiedObj1 === sortedStringifiedObj2;
}


const obj1 = { name: "Person 1", age: 5 };
const obj2 = { age: 5, name: "Person 1" };

const isEqual = areJSONEqual(obj1, obj2);
console.log(isEqual); 
