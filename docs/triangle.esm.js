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

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @desc interface collection
 */
var Config = function Config(config) {
    _classCallCheck$1(this, Config);

    this.width = 10;
    this.height = 10;
    this.direction = dirEnum.down;
    this.radius = 5;
    this.color = 'black';
    this.shadow = {};
    Object.assign(this, config);
    this.shadow = {
        offsetX: this.shadow.offsetX || 0,
        offsetY: this.shadow.offsetY || 2,
        blur: this.shadow.blur || 4,
        opacity: this.shadow.opacity || 0.2
    };
};
var dirEnum;
(function (dirEnum) {
    dirEnum["down"] = "down";
    dirEnum["up"] = "up";
    dirEnum["left"] = "left";
    dirEnum["right"] = "right";
})(dirEnum || (dirEnum = {}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @desc triangle module
 */
var id = 0;

var Triangle = function () {
    function Triangle(config) {
        _classCallCheck(this, Triangle);

        // this.config = new Config(config);
        this.filterId = 'data-filter-id' + new Date().getTime() + '-' + id;
        id = id + 1;
        this.update(config);
    }

    _createClass(Triangle, [{
        key: 'update',
        value: function update(config) {
            if (config) {
                this.config = new Config(config);
            }
            this.getPoint();
            this.getSVG();
        }
    }, {
        key: 'getPoint',
        value: function getPoint() {
            var start = {
                x: 0,
                y: 0
            };
            var end = {
                x: this.config.width,
                y: 0
            };
            var between = void 0;
            var b1 = void 0;
            var b2 = void 0;
            var margin = this.config.radius / Math.sqrt(2);
            between = {
                x: this.config.width / 2,
                y: this.config.height
            };
            b1 = {
                x: this.config.width / 2 - margin,
                y: this.config.height - margin
            };
            b2 = {
                x: this.config.width / 2 + margin,
                y: this.config.height - margin
            };
            this.start = start;
            this.b1 = b1;
            this.b2 = b2;
            this.between = between;
            this.end = end;
        }
    }, {
        key: 'getSVG',
        value: function getSVG() {
            var path = 'M ' + this.start.x + ' ' + this.start.y + ' L ' + this.b1.x + ' ' + this.b1.y + ' A ' + this.config.radius + ' ' + this.config.radius + ' 0 0 0 ' + this.b2.x + ' ' + this.b2.y + ' L ' + this.end.x + ' ' + this.end.y;
            // tslint:disable no-http-string
            var pathDom = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            var svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var filterDom = void 0;
            // tslint:enable no-http-string
            pathDom.setAttribute('d', path);
            pathDom.setAttribute('fill', this.config.color);
            svgDom.setAttribute('height', (this.between.y > 0 ? this.between.y : -this.between.y) + 'px');
            svgDom.setAttribute('width', this.end.x + 'px');
            svgDom.setAttribute('fill', 'transparent');
            svgDom.setAttribute('version', '1.1');
            if (this.config.border) {
                pathDom.setAttribute('stroke-width', '1');
                pathDom.setAttribute('stroke', this.config.border);
            }
            if (this.config.shadow) {
                filterDom = this.getFilter();
                svgDom.appendChild(filterDom);
                svgDom.setAttribute('filter', 'url(#' + this.filterId + ')');
            }
            if (this.config.direction === 'up') {
                svgDom.setAttribute('transform', 'rotate(180)');
            } else if (this.config.direction === 'right') {
                svgDom.setAttribute('transform', 'rotate(270)');
            } else if (this.config.direction === 'left') {
                svgDom.setAttribute('transform', 'rotate(90)');
            }
            if (this.config.className) {
                svgDom.setAttribute('class', this.config.className);
            }
            svgDom.appendChild(pathDom);
            this.triangle = svgDom;
        }
    }, {
        key: 'getFilter',
        value: function getFilter() {
            var defs = svg('defs');
            var filter = svg('filter', {
                id: this.filterId,
                x: '0',
                y: '0',
                width: '200%',
                height: '200%'
            });
            var feOffset = svg('feOffset', {
                result: 'offOut',
                in: 'SourceAlpha',
                dx: '' + this.config.shadow.offsetX,
                dy: '' + this.config.shadow.offsetY
            });
            var feColorMatric = svg('feColorMatrix', {
                in: 'offOut',
                result: 'matrixOut',
                values: '0 0 0 0 0 ' + '0 0 0 0 0 ' + '0 0 0 0 0 ' + ('0 0 0 ' + this.config.shadow.opacity + ' 0')
            });
            var feGaussianBlur = svg('feGaussianBlur', {
                result: 'blurOUt',
                in: 'matrixOut',
                stdDeviation: '' + this.config.shadow.blur
            });
            var feBlend = svg('feBlend', {
                in: 'SourceGraphic',
                in2: 'blurOut',
                mode: 'normal'
            });
            filter.appendChild(feOffset);
            filter.appendChild(feColorMatric);
            filter.appendChild(feGaussianBlur);
            filter.appendChild(feBlend);
            defs.appendChild(filter);
            return defs;
        }
    }]);

    return Triangle;
}();

export default Triangle;
//# sourceMappingURL=triangle.esm.js.map
