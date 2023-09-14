// All click handling using jQuery

$(function(){
  $("#links > a").on("click",(e) => {
    $("#content > div").hide()
    const clickedId = $(e.target).attr("id")
    const genId = "#content-" + clickedId
    $(genId).css("display", "grid");
  })

  // social button clicks
  $("footer i").on("click",(e) => {
    switch($(e.target).attr("class")) {
      case "fa-brands fa-instagram":
        window.open('https://www.instagram.com/olledejong/')
        break;
      case "fa-brands fa-github":
        window.open('https://github.com/olledejong')
        break;
      case "fa-brands fa-linkedin-in":
        window.open('https://nl.linkedin.com/in/olledejong')
        break;
    }
  })
});

// Vanilla JS floating atoms on background

function RandomObjectMover(obj, container) {
  this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.pixels_per_second = 180;
  this.current_position = { x: 0, y: 0};
  this.is_running = false;
}

RandomObjectMover.prototype._getContainerDimensions = function() {
  if (this.$container === window) {
    return { 'height' : this.$container.innerHeight, 'width' : this.$container.innerWidth };
  } else {
    return { 'height' : this.$container.clientHeight, 'width' : this.$container.clientWidth };
  }
}

RandomObjectMover.prototype._generateNewPosition = function() {

  // Get container dimensions minus div size
  let containerSize = this._getContainerDimensions();
  let availableHeight = containerSize.height - this.$object.clientHeight;
  let availableWidth = containerSize.width - this.$object.clientHeight;
  // Pick a random place in the space
  let y = Math.floor(Math.random() * availableHeight);
  let x = Math.floor(Math.random() * availableWidth);

  return { x: x, y: y };
}

RandomObjectMover.prototype._calcDelta = function(a, b) {
  let dx   = a.x - b.x;
  let dy   = a.y - b.y;
  let dist = Math.sqrt( dx*dx + dy*dy );
  return dist;
}

RandomObjectMover.prototype._moveOnce = function() {
  // Pick a new spot on the page
  let next = this._generateNewPosition();

  // How far do we have to move?
  let delta = this._calcDelta(this.current_position, next);

  // Speed of this transition, rounded to 2DP
  let speed = Math.round((delta / this.pixels_per_second) * 100) / 100;

  this.$object.style.transition='transform '+speed+'s linear';
  this.$object.style.transform='translate3d('+next.x+'px, '+next.y+'px, 0)';

  // Save this new position ready for the next call.
  this.current_position = next;

};

RandomObjectMover.prototype.start = function() {

  if (this.is_running) {
    return;
  }

  // Make sure our object has the right css set
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';

  this.boundEvent = this._moveOnce.bind(this)

  // Bind callback to keep things moving
  this.$object.addEventListener('transitionend', this.boundEvent);

  // Start it moving
  this._moveOnce();

  this.is_running = true;
}

RandomObjectMover.prototype.stop = function() {
  if (!this.is_running) {
    return;
  }
  this.$object.removeEventListener('transitionend', this.boundEvent);

  this.is_running = false;
}


// Init it
let x = new RandomObjectMover(document.getElementById('a'), window);
let y = new RandomObjectMover(document.getElementById('b'), window);
let z = new RandomObjectMover(document.getElementById('c'), window);

x.start();
y.start();
z.start();