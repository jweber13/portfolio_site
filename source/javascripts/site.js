const techDisp = document.querySelector('.tech-disp');
console.log(techDisp);

const techCards = [
  '<i class="devicon-python-plain colored"></i>',
  '<i class="devicon-ruby-plain colored"></i>',
  '<i class="devicon-javascript-plain colored"></i>',
  '<i class="devicon-html5-plain colored"></i>',
  '<i class="devicon-css3-plain colored"></i>',
  '<i class="devicon-postgresql-plain colored"></i>',
  '<i class="devicon-sqlite-plain colored"></i>',
  '<i class="devicon-django-plain colored"></i>',
  '<i class="devicon-rails-plain colored"></i>',
];

techCards.forEach(techCard => {
  const column = document.createElement('div');
  column.classList.add('col-4', 'mb-4', 'tech-card', 'd-flex', 'justify-content-center', 'align-items-center');
  column.innerHTML = techCard;
  techDisp.appendChild(column);
});
