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
