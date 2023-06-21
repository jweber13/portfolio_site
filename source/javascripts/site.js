
const techDisp = document.querySelector('.tech-disp');
console.log(techDisp);

const techCards = [
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />',
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" /> '
];

// const techCards = [
//   '<i class="devicon-python-plain-wordmark colored"></i>',
//   '<i class="devicon-ruby-plain-wordmark colored"></i>',
//   '<i class="devicon-javascript-plain colored"></i>',
//   '<i class="devicon-html5-plain-wordmark colored"></i>',
//   '<i class="devicon-css3-plain-wordmark colored"></i>',
//   '<i class="devicon-postgresql-plain-wordmark colored"></i>',
//   '<i class="devicon-sqlite-plain-wordmark colored"></i>',
//   '<i class="devicon-django-plain-wordmark colored"></i>',
//   '<i class="devicon-rails-plain-wordmark colored"></i>',
//   '<i class="devicon-docker-plain-wordmark colored"></i>',
//   '<i class="devicon-github-original-wordmark colored"></i>',
//   '<i class="devicon-heroku-original-wordmark colored"></i>'
// ];

techCards.forEach(techCard => {
  const column = document.createElement('div');
  column.classList.add('col-4', 'mb-4', 'tech-card', 'd-flex', 'justify-content-center', 'align-items-center');
  column.innerHTML = techCard;
  techDisp.appendChild(column);
});


const LeafScene = function(el) {
  this.viewport = el;
  this.world = document.createElement('div');
  this.leaves = [];

  this.options = {
    numLeaves: 20,
    wind: {
      magnitude: 1.2,
      maxSpeed: 12,
      duration: 300,
      start: 0,
      speed: 0
    },
  };

  this.width = this.viewport.offsetWidth;
  this.height = this.viewport.offsetHeight;

  // animation helper
  this.timer = 0;

  this._resetLeaf = function(leaf) {

    // place leaf towards the top left
    leaf.x = this.width * 2 - Math.random()*this.width*1.75;
    leaf.y = -10;
    leaf.z = Math.random()*200;
    if (leaf.x > this.width) {
      leaf.x = this.width + 10;
      leaf.y = Math.random()*this.height/2;
    }
    // at the start, the leaf can be anywhere
    if (this.timer == 0) {
      leaf.y = Math.random()*this.height;
    }

    // Choose axis of rotation.
    // If axis is not X, chose a random static x-rotation for greater variability
    leaf.rotation.speed = Math.random()*10;
    var randomAxis = Math.random();
    if (randomAxis > 0.5) {
      leaf.rotation.axis = 'X';
    } else if (randomAxis > 0.25) {
      leaf.rotation.axis = 'Y';
      leaf.rotation.x = Math.random()*180 + 90;
    } else {
      leaf.rotation.axis = 'Z';
      leaf.rotation.x = Math.random()*360 - 180;
      // looks weird if the rotation is too fast around this axis
      leaf.rotation.speed = Math.random()*3;
    }

    // random speed
    leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
    leaf.ySpeed = Math.random() + 1.5;

    return leaf;
  }

  this._updateLeaf = function(leaf) {
    var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

    var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
    leaf.x -= xSpeed;
    leaf.y += leaf.ySpeed;
    leaf.rotation.value += leaf.rotation.speed;

    var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
    if (leaf.rotation.axis !== 'X') {
      t += ' rotateX(' + leaf.rotation.x + 'deg)';
    }
    leaf.el.style.webkitTransform = t;
    leaf.el.style.MozTransform = t;
    leaf.el.style.oTransform = t;
    leaf.el.style.transform = t;

    // reset if out of view
    if (leaf.x < -10 || leaf.y > this.height + 10) {
      this._resetLeaf(leaf);
    }
  }

  this._updateWind = function() {
    // wind follows a sine curve: asin(b*time + c) + a
    // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
    // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

    if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

      this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
      this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
      this.options.wind.start = this.timer;

      var screenHeight = this.height;

      this.options.wind.speed = function(t, y) {
        // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
        var a = this.magnitude/2 * (screenHeight - 2*y/3)/screenHeight;
        return a * Math.sin(2*Math.PI/this.duration * t + (3 * Math.PI/2)) + a;
      }
    }
  }
}

LeafScene.prototype.init = function() {

  for (var i = 0; i < this.options.numLeaves; i++) {
    var leaf = {
      el: document.createElement('div'),
      x: 0,
      y: 0,
      z: 0,
      rotation: {
        axis: 'X',
        value: 0,
        speed: 0,
        x: 0
      },
      xSpeedVariation: 0,
      ySpeed: 0,
      path: {
        type: 1,
        start: 0,

      },
      image: 1
    };
    this._resetLeaf(leaf);
    this.leaves.push(leaf);
    this.world.appendChild(leaf.el);
  }

  this.world.className = 'leaf-scene';
  this.viewport.appendChild(this.world);

  // set perspective
  this.world.style.webkitPerspective = "400px";
  this.world.style.MozPerspective = "400px";
  this.world.style.oPerspective = "400px";
  this.world.style.perspective = "400px";

  // reset window height/width on resize
  var self = this;
  window.onresize = function(event) {
    self.width = self.viewport.offsetWidth;
    self.height = self.viewport.offsetHeight;
  };
}

LeafScene.prototype.render = function() {
  this._updateWind();
  for (var i = 0; i < this.leaves.length; i++) {
    this._updateLeaf(this.leaves[i]);
  }

  this.timer++;

  requestAnimationFrame(this.render.bind(this));
}

// start up leaf scene
const leafContainer = document.querySelector('.falling-leaves'),
    leaves = new LeafScene(leafContainer);

leaves.init();
leaves.render();
