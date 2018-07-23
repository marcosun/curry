/**
 * Curry wrapper function.
 * @param {function} fn - Function that will be wrapped within curry.
 * @return {function}
 */
export default function curry(fn) {
  return (...params) => {
    if (params.length === 0) {
      throw Error('EMPTY INVOCATION');
    }

    if (params.length >= fn.length) {
      return fn(...params);
    }

    return curry(fn.bind(null, ...params));
  };
}
