const user = {
  name: 'alan',
  address: {
    office: {
      city: 'delhi',
      state: 'newdelhi',
    },
    home: {
      city: 'kochi',
      state: 'kerala',
    },
  },
  scores: [2, 345, 64, 21, 63],
  education: null,
  experience: undefined,
};

// recursive approach to destructure the object

function destructureRecursively(obj, result = {}, parentKey = '') {
  Object.entries(obj).forEach(([key, value]) => {
    const keyVal = parentKey?.length > 0 ? parentKey + '_' + key : key;
    if (
      typeof value === 'object' &&
      !Array.isArray(value) &&
      ![undefined, null].includes(value)
    ) {
      return destructureRecursively(value, result, keyVal);
    }

    result[keyVal] = value;
  });
  return result;
}

// iterative approach - recursive approach is not the best when going into production
// because it can lead to stack overflow and can stop the program from running if there is something unexpected
// iterative approach with limit on max depth is the possible best approach

// stack approach

function destructureIteratively(obj) {
  const result = {};
  const stack = [{ parent: '', value: obj }];

  let objectToProcess;

  while (stack.length > 0) {
    const popped = stack.pop();

    objectToProcess = popped.value;
    parent = popped.parent;

    for ([key, value] of Object.entries(objectToProcess)) {
      const parentKey = parent?.length > 0 ? parent + '_' + key : key;

      if (
        typeof value === 'object' &&
        !Array.isArray(value) &&
        ![undefined, null].includes(value)
      ) {
        stack.push({ parent: parentKey, value });
      } else {
        result[parentKey] = value;
      }
    }
  }

  return result;
}

console.log('result', destructureIteratively(user));
