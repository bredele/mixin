
/**
 * Expose 'mixin'
 */

module.exports = mixin;


/**
 * mixin constructor.
 * @api public
 */

function mixin(parent, child) {
  for (var key in parent) {
    child[key] = parent[key];
  }

  return obj;
}

