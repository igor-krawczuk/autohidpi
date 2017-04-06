var geometry = document.getElementById('geometry');
var pixelRatioInput = document.getElementById('pixelRatio');
var pixelRatioDisplay = document.getElementById('pixelRatioDisplay');
var defaultRatioInput = document.getElementById('defaultRatio');
var defaulRatioDisplay = document.getElementById('DefaultDisplay');

pixelRatioInput.addEventListener('input', function (event) {
  pixelRatioDisplay.textContent = event.target.value + 'x';
}, false);

pixelRatioInput.addEventListener('change', function (event) {
  self.port.emit('pixelRatioChanged', parseFloat(event.target.value));
}, false);

defaultRatioInput.addEventListener('input', function (event) {
  defaulRatioDisplay.textContent = event.target.value + 'x';
}, false);

defaultRatioInput.addEventListener('change', function (event) {
  self.port.emit('defaultRatioChanged', parseFloat(event.target.value));
}, false);

self.port.on('update', function (event) {
  geometry.textContent = 'width=' + event.screen.width +
                       ' height=' + event.screen.height +
                       ' left=' + event.screen.left +
                       ' top=' + event.screen.top;
  pixelRatioInput.value = event.pixelRatio;
  pixelRatioDisplay.textContent = event.pixelRatio + 'x';
});
