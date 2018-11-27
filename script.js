(function () {
   let originalConsole = window.console
   let console = window.console = {};
   let methods = ['error', 'log', 'warn'];

   localStorage.clear();

   for (let i = 0; i < methods.length; i++) {
      let methodName = methods[i];
      console[methodName] = function () {
         localStorage.setItem("randomValue", Math.random());
         originalConsole[methodName].apply(originalConsole[methodName], arguments);
      }
   }
})();

console.error("test");
console.log("test");
console.warn("test");
