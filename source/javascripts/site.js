const techDisp = document.querySelector('.tech-disp');
console.log(techDisp);

const techCards = [
  '<i class="devicon-python-plain-wordmark"></i>',
  '<i class="devicon-ruby-plain-wordmark "></i>',
  '<i class="devicon-javascript-plain "></i>',
  '<i class="devicon-html5-plain-wordmark "></i>',
  '<i class="devicon-css3-plain-wordmark "></i>',
  '<i class="devicon-postgresql-plain-wordmark "></i>',
  '<i class="devicon-sqlite-plain-wordmark "></i>',
  '<i class="devicon-django-plain-wordmark "></i>',
  '<i class="devicon-rails-plain-wordmark "></i>',
  '<i class="devicon-docker-plain-wordmark"></i>',
  '<i class="devicon-github-original-wordmark"></i>',
  '<i class="devicon-heroku-original-wordmark"></i>'
];

techCards.forEach(techCard => {
  const column = document.createElement('div');
  column.classList.add('col-4', 'mb-4', 'tech-card', 'd-flex', 'justify-content-center', 'align-items-center');
  column.innerHTML = techCard;
  techDisp.appendChild(column);
});
