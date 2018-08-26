/**
 * @desc svg generator function
 */
var svg = (function (tag) {
    var iKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // tslint:disable no-http-string
    var dom = document.createElementNS('http://www.w3.org/2000/svg', tag);
    // tslint:enable no-http-string
    var keys = Object.keys(iKey);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            dom.setAttribute(i, iKey[i]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return dom;
});

export default svg;
//# sourceMappingURL=triangle.esm.js.map
