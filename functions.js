const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  var result = -1;

  each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const filter = function (collection, test) {
  let result = [];

  each(collection, function (element) {
    if (test(element)){
      result.push(element);
    }
  })
  return result;


  // for (let i = 0; i < collection.length; i++) {
  //     if (test(collection[i]) % 2 === 1){
  //         result.push(collection[i]);
  //     }else(collection[i] % 2 === 0)
  //   }
  //     return result;
}


const map = (collection, iterator) => {
  let result = [];
  //  loop through the collection and perform the iterator on each index
  for (let i = 0; i < collection.length; i++) {
    // push the result of that into the result array
    result.push(iterator(collection[i]))
  }
  return result
};

// the reject function is performing the same task as filter but the opposite.  
const reject = function (collection, test) {
  let result = [];
  filter(collection, function (element) {
    // adding the ! before test is doing the opposite of the test/filter function
    if (!test(element)){
      result.push(element);
    }
  })
  return result;
};


const uniq = function (array) {
  let result = [];
  


};
const reduce = function (collection, iterator, accumulator) {};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
