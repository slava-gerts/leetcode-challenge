import {isPlainObject} from './isPlainObject.js'

export function cloneDeep(val) {
  switch (typeof val) {
    case 'object':
      return cloneObjectDeep(val)
    case 'array':
      return cloneArrayDeep(val)
    default: {
      return val
    }
  }
}

function cloneObjectDeep(val) {
  if (isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key]);
    }
    return res;
  }
  return val;
}

function cloneArrayDeep(val) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i]);
  }
  return res;
}