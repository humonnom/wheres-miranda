(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./game");

require("./music");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2E5MWI3ZDYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vZ2FtZVwiO1xuaW1wb3J0IFwiLi9tdXNpY1wiO1xuIl19
},{"./game":2,"./music":3}],2:[function(require,module,exports){
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbXX0=
},{}],3:[function(require,module,exports){
"use strict";

var music = document.getElementsById("jsMusic");
var iframe = document.getElementsById("jsIframe");

function musicHandleClick() {
  if (iframe.style.display == "none") {
    iframe.style.display = "block";
  } else {
    iframe.style.display = "none";
  }
}

music.addEventListener("click", musicHandleClick, false);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLmpzIl0sIm5hbWVzIjpbIm11c2ljIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5SWQiLCJpZnJhbWUiLCJtdXNpY0hhbmRsZUNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QixTQUF6QixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGVBQVQsQ0FBeUIsVUFBekIsQ0FBZjs7QUFFQSxTQUFTRSxnQkFBVCxHQUE0QjtBQUMxQixNQUFJRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsT0FBYixJQUF3QixNQUE1QixFQUFvQztBQUNsQ0gsSUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFDLE9BQWIsR0FBdUIsT0FBdkI7QUFDRCxHQUZELE1BRU87QUFDTEgsSUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFDLE9BQWIsR0FBdUIsTUFBdkI7QUFDRDtBQUNGOztBQUVETixLQUFLLENBQUNPLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDSCxnQkFBaEMsRUFBa0QsS0FBbEQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlJZChcImpzTXVzaWNcIik7XG5jb25zdCBpZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5SWQoXCJqc0lmcmFtZVwiKTtcblxuZnVuY3Rpb24gbXVzaWNIYW5kbGVDbGljaygpIHtcbiAgaWYgKGlmcmFtZS5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKSB7XG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0gZWxzZSB7XG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5tdXNpYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXVzaWNIYW5kbGVDbGljaywgZmFsc2UpO1xuIl19
},{}]},{},[1])