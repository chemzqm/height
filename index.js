var computedStyle = require('computed-style')

/**
 * Find last visible element
 *
 * @param  {Element}  el
 * @return {Element}
 */
function lastVisible(el) {
  var nodes = el.childNodes
  for(var i = nodes.length - 1; i >=0; i --) {
    var node = nodes[i]
    if (node.nodeType === 1 && computedStyle(node, 'display') !== 'none') {
      return node
    }
  }
}

function height(node) {
  var child = lastVisible(node)
  var pb = parseInt(computedStyle(node, 'paddingBottom'), 10)
  var pt = parseInt(computedStyle(node, 'paddingTop'), 10)
  if (!child) return pb + pt
  var r = node.getBoundingClientRect()
  var mb = pb ? parseInt(computedStyle(child, 'marginBottom'), 10) : 0
  var cb = child.getBoundingClientRect().bottom
  return cb - r.top + mb + pb
}

module.exports = height
