function countProps(object) {
  let propCount = 0;
  console.log(propCount);

  const values = Object.values(object);
  console.log(values);

  propCount = values.length;
  console.log(propCount);

  return propCount;
}

countProps({ name: 'Mango', age: 2 });
