/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/display.ts":
/*!************************!*\
  !*** ./src/display.ts ***!
  \************************/
/*! exports provided: colors, Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return Display; });
/*
declare module "*.json" {
    const value: any;
    export default value;
}
// @ts-ignore
import result from "../results/result.json";*/
const colors = [
    "#F4F5EA",
    "#04BE04",
    "#3C4B3C",
    "#9A1212",
    "#000000",
];
class Display extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.innerHTML = `
          <style media="screen">
            :host {
              cursor: pointer;
              display: block;
            }
          </style>
          <canvas></canvas>
        `;
    }
    connectedCallback() {
        this.setup();
        let loop = () => {
            setTimeout(() => {
                if (this.points.length > this.index + 1) {
                    requestAnimationFrame(loop);
                }
                else {
                    this.index = 0;
                    requestAnimationFrame(loop);
                    //this.doAnimate();
                }
                this.doAnimate();
            }, 1000);
        };
        loop();
    }
    setup() {
        // @ts-ignore
        let json = JSON.parse(result);
        this.canvas = this.shadow.querySelector('canvas');
        this.context = this.canvas.getContext("2d");
        this.map = json.Map;
        let canvasSize = this.getCanvasSize();
        this.canvas.height = canvasSize.height;
        this.canvas.width = canvasSize.width;
        /*this.points = (() => {
            let points = [];
            for(let i = 100; 540>i; i+=1) {
                points.push({x: 175, y: i})
            }
            return points;
        })();*/
        this.points = json.Points;
        this.index = 0;
    }
    doAnimate() {
        this.reset();
        this.update();
        this.draw();
    }
    reset() { this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); }
    update() { this.index++; }
}


/***/ }),

/***/ "./src/fullmap.ts":
/*!************************!*\
  !*** ./src/fullmap.ts ***!
  \************************/
/*! exports provided: FullmapDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullmapDisplay", function() { return FullmapDisplay; });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.ts");


class FullmapDisplay extends _display__WEBPACK_IMPORTED_MODULE_0__["Display"] {
    draw() {
        this.drawMap();
        this.drawCharacter();
    }
    drawMap() {
        this.map.forEach((array, y) => {
            array.forEach((color, x) => {
                this.context.fillStyle = _display__WEBPACK_IMPORTED_MODULE_0__["colors"][color];
                this.context.fillRect(x * 10, y * 10, 10, 10);
            });
        });
    }
    drawCharacter() {
        let point = this.points[this.index];
        console.log(point);
        this.context.fillStyle = "#d400dd";
        // @ts-ignore
        this.context.fillRect(point.X * 10, point.Y * 10, 10, 10);
    }
    getCanvasSize() {
        return {
            height: this.map.length * 10,
            width: this.map[0].length * 10
        };
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullmap */ "./src/fullmap.ts");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport */ "./src/viewport.ts");


window.customElements.define("view-display", _viewport__WEBPACK_IMPORTED_MODULE_1__["ViewportDisplay"]);
window.customElements.define("full-display", _fullmap__WEBPACK_IMPORTED_MODULE_0__["FullmapDisplay"]);


/***/ }),

/***/ "./src/viewport.ts":
/*!*************************!*\
  !*** ./src/viewport.ts ***!
  \*************************/
/*! exports provided: ViewportDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportDisplay", function() { return ViewportDisplay; });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.ts");

class ViewportDisplay extends _display__WEBPACK_IMPORTED_MODULE_0__["Display"] {
    draw() {
        this.drawMap();
        this.drawCharacter();
    }
    getCanvasSize() {
        return { height: 200, width: 200 };
    }
    drawCharacter() {
        this.context.fillStyle = "red";
        this.context.fillRect(90, 10, 20, 20);
    }
    drawMap() {
        let currentPoint = this.getLeftTopPoint(this.points[this.index]);
        for (let canvasY = 0; 100 > canvasY; canvasY++) {
            for (let canvasX = 0; 100 > canvasX; canvasX++) {
                let mapX = Math.floor(currentPoint.x / 10);
                let mapY = Math.floor(currentPoint.y / 10);
                let color = this.map[mapY][mapX];
                this.context.fillStyle = _display__WEBPACK_IMPORTED_MODULE_0__["colors"][color];
                this.context.fillRect(canvasX * 2, canvasY * 2, 2, 2);
                currentPoint.x++;
            }
            currentPoint.x = this.getLeftTopPoint(this.points[this.index]).x;
            currentPoint.y++;
        }
    }
    getLeftTopPoint(point) {
        return {
            x: point.x - 50,
            y: point.y - 10
        };
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bGxtYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OENBTThDO0FBQ3ZDLE1BQU0sTUFBTSxHQUFHO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1osQ0FBQztBQUVLLE1BQWUsT0FBUSxTQUFRLFdBQVc7SUFTN0M7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxF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QyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQTRCO1FBQ3hDLE9BQU87WUFDSCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBQyxFQUFFO1lBQ2IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUMsRUFBRTtTQUNoQjtJQUNMLENBQUM7Q0FFSiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qXHJcbmRlY2xhcmUgbW9kdWxlIFwiKi5qc29uXCIge1xyXG4gICAgY29uc3QgdmFsdWU6IGFueTtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHZhbHVlO1xyXG59XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHJlc3VsdCBmcm9tIFwiLi4vcmVzdWx0cy9yZXN1bHQuanNvblwiOyovXHJcbmV4cG9ydCBjb25zdCBjb2xvcnMgPSBbXHJcbiAgICBcIiNGNEY1RUFcIixcclxuICAgIFwiIzA0QkUwNFwiLFxyXG4gICAgXCIjM0M0QjNDXCIsXHJcbiAgICBcIiM5QTEyMTJcIixcclxuICAgIFwiIzAwMDAwMFwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpc3BsYXkgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgc2hhZG93OiBTaGFkb3dSb290O1xyXG5cclxuICAgIG1hcDogbnVtYmVyW11bXTtcclxuICAgIHBvaW50czogYW55O1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogXCJvcGVuXCJ9KTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8c3R5bGUgbWVkaWE9XCJzY3JlZW5cIj5cclxuICAgICAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDxjYW52YXM+PC9jYW52YXM+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldHVwKCk7XHJcblxyXG4gICAgICAgIGxldCBsb29wID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucG9pbnRzLmxlbmd0aCA+IHRoaXMuaW5kZXgrMSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZG9BbmltYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvQW5pbWF0ZSgpO1xyXG4gICAgICAgICAgICB9LDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuXHRcdGxldCBqc29uID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5zaGFkb3cucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMubWFwID0ganNvbi5NYXA7XHJcbiAgICAgICAgbGV0IGNhbnZhc1NpemUgPSB0aGlzLmdldENhbnZhc1NpemUoKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBjYW52YXNTaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGNhbnZhc1NpemUud2lkdGg7XHJcblxyXG4gICAgICAgIC8qdGhpcy5wb2ludHMgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDEwMDsgNTQwPmk7IGkrPTEpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHt4OiAxNzUsIHk6IGl9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICAgICAgfSkoKTsqL1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0ganNvbi5Qb2ludHM7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQW5pbWF0ZSgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHt0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCl9XHJcblxyXG4gICAgdXBkYXRlKCkge3RoaXMuaW5kZXgrK31cclxuXHJcbiAgICBhYnN0cmFjdCBkcmF3KCk6IHZvaWQ7XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0Q2FudmFzU2l6ZSgpOiB7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9O1xyXG59XHJcblxyXG4iLCJpbXBvcnQgXCIuL2Rpc3BsYXlcIlxyXG5pbXBvcnQge2NvbG9ycywgRGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZ1bGxtYXBEaXNwbGF5IGV4dGVuZHMgRGlzcGxheXtcclxuICAgIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3TWFwKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3Q2hhcmFjdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd01hcCgpIHtcclxuICAgICAgICB0aGlzLm1hcC5mb3JFYWNoKChhcnJheSwgeSkgPT4ge1xyXG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChjb2xvciwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yc1tjb2xvcl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCoxMCwgeSoxMCwgMTAsIDEwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0NoYXJhY3RlcigpIHtcclxuICAgICAgICBsZXQgcG9pbnQ6T2JqZWN0ID0gdGhpcy5wb2ludHNbdGhpcy5pbmRleF07XHJcbiAgICAgICAgY29uc29sZS5sb2cocG9pbnQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIiNkNDAwZGRcIjtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHBvaW50LlgqMTAgLCBwb2ludC5ZKjEwICwgMTAsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYW52YXNTaXplKCk6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn0ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5tYXAubGVuZ3RoICogMTAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLm1hcFswXS5sZW5ndGggKiAxMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0Z1bGxtYXBEaXNwbGF5fSBmcm9tIFwiLi9mdWxsbWFwXCI7XHJcbmltcG9ydCB7Vmlld3BvcnREaXNwbGF5fSBmcm9tIFwiLi92aWV3cG9ydFwiO1xyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInZpZXctZGlzcGxheVwiLCBWaWV3cG9ydERpc3BsYXkpO1xyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZnVsbC1kaXNwbGF5XCIsIEZ1bGxtYXBEaXNwbGF5KTtcclxuIiwiaW1wb3J0IHtjb2xvcnMsIERpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydERpc3BsYXkgZXh0ZW5kcyBEaXNwbGF5IHtcclxuXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhd01hcCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd0NoYXJhY3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhbnZhc1NpemUoKTogeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4ge2hlaWdodDogMjAwLCB3aWR0aDogMjAwfTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3Q2hhcmFjdGVyKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCg5MCwgMTAsIDIwLCAyMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd01hcCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gdGhpcy5nZXRMZWZ0VG9wUG9pbnQodGhpcy5wb2ludHNbdGhpcy5pbmRleF0pO1xyXG4gICAgICAgIGZvcihsZXQgY2FudmFzWSA9IDA7IDEwMD5jYW52YXNZOyBjYW52YXNZKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2FudmFzWCA9IDA7IDEwMCA+IGNhbnZhc1g7IGNhbnZhc1grKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcFggPSBNYXRoLmZsb29yKGN1cnJlbnRQb2ludC54LzEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXBZID0gTWF0aC5mbG9vcihjdXJyZW50UG9pbnQueS8xMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm1hcFttYXBZXVttYXBYXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcnNbY29sb3JdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KGNhbnZhc1gqMiwgY2FudmFzWSoyLCAyLCAyKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb2ludC54Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFBvaW50LnggPSB0aGlzLmdldExlZnRUb3BQb2ludCh0aGlzLnBvaW50c1t0aGlzLmluZGV4XSkueDtcclxuICAgICAgICAgICAgY3VycmVudFBvaW50LnkrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVmdFRvcFBvaW50KHBvaW50Ont4OiBudW1iZXIsIHk6IG51bWJlcn0pOnt4OiBudW1iZXIsIHk6IG51bWJlcn0ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHBvaW50LngtNTAsXHJcbiAgICAgICAgICAgIHk6IHBvaW50LnktMTBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==