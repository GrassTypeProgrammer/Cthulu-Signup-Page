/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.getElementById('password').addEventListener('change', onChangePassword);\ndocument.getElementById('passwordConfirm').addEventListener('change', onChangePassword);\ndocument.getElementById('firstName').addEventListener('change', onChangeFirstName);\ndocument.getElementById('form').addEventListener('submit', onSubmit);\n\nconst password = document.getElementById('password');\nconst passwordConfirm = document.getElementById('passwordConfirm');\nconst passwordRequiredLabel = document.getElementById('passwordRequired');\nconst passwordConfirmRequiredLabel = document.getElementById('passwordConfirmRequired');\nconst firstName = document.getElementById('firstName');\nconst firstNameRequiredLabel = document.getElementById('firstNameRequired');\n\n\nfunction onChangePassword(){\n    if(password.value == '' && passwordConfirm.value == ''){\n       passwordRequiredLabel.innerText = \"* Required\";\n       passwordConfirmRequiredLabel.innerText = \"* Required\";\n   }\n    else if(password.value.length < 6){\n        passwordRequiredLabel.innerText = \"* Password must be at least 6 characters long!\";\n    }\n    else if(password.value != passwordConfirm.value){\n        passwordRequiredLabel.innerText = \"* Passwords don't match!\";\n    }\n    else if(password.value == passwordConfirm.value){\n        passwordRequiredLabel.innerText = '';\n        passwordConfirmRequiredLabel.innerText = '';\n    }\n}\n\nfunction onChangeFirstName(){\n    if(firstName.value == ''){\n        firstNameRequiredLabel.innerText = '* Required';\n    }\n    else{\n        firstNameRequiredLabel.innerText = '';\n    }\n}\n\nfunction onSubmit(event){\n    if(password.value !== passwordConfirm.value){\n        event.preventDefault();\n        alert(\"Your passwords don't match!\");\n    }\n    else if (firstName.value == ''){\n        event.preventDefault();\n        alert(\"Please enter your first name\");\n    }\n\n\n}\n\n//# sourceURL=webpack://cthulu-signup-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;