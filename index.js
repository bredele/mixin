
/**
 * Expose 'mixin'
 */

module.exports = mixin;


/**
 * mixin constructor.
 * @api public
 */

function mixin(to, from) {
  for (var key in from) {
    if (from.hasOwnProperty(key)) {
      child[key] = from[key];
    }
  }

  return obj;
}

