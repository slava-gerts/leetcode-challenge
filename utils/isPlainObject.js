export function isPlainObject(val) {
  if (isObject(val) === false) return false

  const ctor = val.constructor
  if (typeof ctor !== 'function') return false

  const prot = ctor.prototype
  if (isObject(prot) === false) return false

  if (Object.hasOwn(prot, 'isPrototypeOf') === false) return false

  return true
}

export function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false && Object.prototype.toString.call(val) === '[object Object]';
}