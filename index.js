
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
      to[key] = from[key];
    }
  }

  return to;
}

