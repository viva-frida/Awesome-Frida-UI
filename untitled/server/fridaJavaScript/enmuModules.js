Process.enumerateModules({
  onMatch: function (module) {
    send('Module name: ' + module.name + " - " + "Base Address: " + module.base.toString());
  },
  onComplete: function () {

  }
});