const activBtn = document.querySelectorAll('.menu-btn');
const navActive = document.querySelector('.nav-active');
const backToSection = document.querySelectorAll('.list-menu');

activBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    navActive.classList.toggle('display-active-menu');
  });
});
backToSection.forEach((link) => {
  link.addEventListener('click', () => {
    navActive.classList.remove('display-active-menu');
  });
});

const recent = [
  {
    id: 1,
    name: 'Golden Event Website',
    description:
      'It is a website that helps different people around the world to make public their events on the web.',
    featuredImage: './assets/images/event.jpg',
    technologies: ['html', 'css', 'JavaScript'],
    projecDetails: 'see-project',
    linkToLive_version: 'https://aubinleyoung.github.io/Event-Website/',
    linkToSource: 'https://github.com/aubinleyoung/Event-Website',
  },
];
const table = [
  {
    id: 2,
    name: 'Awesome Books',
    description:
      'Is a basic website that allows users to add/remove books from a list.',
    featuredImage: 'assets/images/awesome-books.jpg',
    technologies: ['html', 'css', 'JavaScript'],

    projecDetails: 'see-project',
    linkToLive_version: 'https://aubinleyoung.github.io/Awesome-Books',
    linkToSource: 'https://github.com/aubinleyoung/Awesome-Books',
  },
  {
    id: 3,
    name: 'Leaderboard-App',
    description:'The leaderboard website displays scores submitted by different players. It also allows you to submit your score.',
    featuredImage: 'assets/images/allscreen.jpg',
    technologies: ['html', 'css', 'JavaScript'],
    projecDetails: 'see-project',
    linkToLive_version: 'https://aubinleyoung.github.io/Leaderboard-App/dist/',
    linkToSource: 'https://github.com/aubinleyoung/Leaderboard-App',
  },
  {
    id: 4,
    name: 'Todo list',
    description:
      'is an app that  helps you organize your daily activities , with a feature of adding, removing, and marking tasks as completed.',
    featuredImage: 'assets/images/view.jpg',
    technologies: ['React.js','Jsx','css'],
    projecDetails: 'see-project',
    linkToLive_version: 'https://react-todo-list-ds5z.onrender.com/',
    linkToSource: 'https://github.com/aubinleyoung/todo-list',
  },
  {
    id: 5,
    name: 'Proffesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-upsrequired. has been the industry s standard dummy text ever since the 1500s, when an unknown printer tooka standard dummy text.',
    featuredImage: 'assets/images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'bootstrap', 'React', 'Ruby', 'JavaScript'],
    projecDetails: 'see-project',
    linkToLive_version: 'See Live',
    linkToSource: 'See Source',
  },
  {
    id: 6,
    name: 'Proffesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-upsrequired. has been the industry s standard dummy text ever since the 1500s, when an unknown printer tooka standard dummy text.',
    featuredImage: 'assets/images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'bootstrap', 'React', 'Ruby', 'JavaScript'],
    projecDetails: 'see-project',
    linkToLive_version: 'See Live',
    linkToSource: 'See Source',
  },
  {
    id: 7,
    name: 'Proffesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-upsrequired. has been the industry s standard dummy text ever since the 1500s, when an unknown printer tooka standard dummy text.',
    featuredImage: 'assets/images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'bootstrap', 'React', 'Ruby', 'JavaScript'],
    projecDetails: 'see-project',
    linkToLive_version: 'See Live',
    linkToSource: 'See Source',
  },
];

const firstCard = document.querySelector('.recent-works');

// First project
recent.map((element) => {
  firstCard.innerHTML = `
  <div class="work-img-container">
  <img src="${element.featuredImage}" alt="Multi post story" class="work-img" />
  </div>
   <div class="recent-work-second-block">
     <h3 class="works-title blue-1">${element.name}</h3>
     <p class="font-montesori blue-2">
     ${element.description}
     </p>
     <ul class="tools-container">
       <li class="tools">${element.technologies[0]}</li>
       <li class="tools">${element.technologies[1]}</li>
       <li class="tools">${element.technologies[2]}</li>
   

   
     </ul>
     <button class="see-project-btn" type="button">${element.projecDetails}</button>
   </div>`;
  return firstCard;
});

const cards = document.querySelector('.pjt');

// All projects
table.map((card) => {
  cards.innerHTML += `<div class="works 'work'+${card.id}">
    <h3 class="works-title hide">${card.name}</h3>
    <p class="font-montesori hide">
       ${card.description}
    </p>

    <ul class="tools-container hide">
    <li class="tools">${card.technologies[0]}</li>
         <li class="tools">${card.technologies[1]}</li>
        <li class="tools">${card.technologies[2]}</li>
     
    
    </ul>
 

    <button class="see-project pop" type="button"> ${card.projecDetails}</button>
  </div>`;
  return card;
});

const popupProject = document.querySelector('.pop-up-project-section');
const projects = document.querySelectorAll('.pop');

// Pop-up all projects
projects.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popupProject.classList.toggle('popup');
    popupProject.innerHTML = `<div class="pop-up-project-block">
      <div class="desk-pop-b-one">
        <div class="pop-title-block">
          <h2  class="popup-title contact-title font-montesori">${table[index].name}</h2>
          <button  class="close-pop-up" type="button">
            <img src="assets/icons/Icon - Cancel.png" alt="" class="cancel-popup">
          </button>
        </div>
        <ul class="pop-up-tools tools-container">
          <li class="tools">${table[index].technologies[0]}</li>
          <li class="tools">${table[index].technologies[1]}</li>
          <li class="tools">${table[index].technologies[2]}</li>
        </ul>
      </div>
      <div class="desk-pop-b-one-x">

      <div class="desk-pop-b-two work-img-container">
        <img src="${table[index].featuredImage}" alt=""  class="project-popup-image">
      </div>
  
     <div class="desk-pop-b-three">
      <p class="pop-up-text font-montesori blue-2"  >${table[index].description}</p>
      <div class="pop-up-btn">
        <button class="see-live-btn see-project-btn"><a href="${table[index].linkToLive_version}">See Live</a><img src="assets/icons/Icon.png" alt=""></button>
        <button class="see-source-btn see-project-btn"><a href="${table[index].linkToSource}">See Source</a><img src="assets/icons/1.png" alt=""></button>
      </div>
     </div>
     </div>

    </div>`;

    document.querySelector('.close-pop-up').addEventListener('click', () => {
      popupProject.classList.remove('popup');
    });
  });
});

const recentProjectPopup = document.querySelector('.see-project-btn');

// First project pop-up

recentProjectPopup.addEventListener('click', () => {
  popupProject.classList.toggle('popup');
  popupProject.innerHTML = `<div class="pop-up-project-block">
   <div class="desk-pop-b-one">
     <div class="pop-title-block">
       <h2  class="popup-title contact-title font-montesori">${recent[0].name}</h2>
       <button  class="close-pop-up" type="button">
         <img src="assets/icons/Icon - Cancel.png" alt="" class="cancel-popup">
       </button>
     </div>
     <ul class="pop-up-tools tools-container">
       <li class="tools">${recent[0].technologies[0]}</li>
       <li class="tools">${recent[0].technologies[1]}</li>
       <li class="tools">${recent[0].technologies[2]}</li>
     </ul>
   </div>
<div class="desk-pop-b-one-x">
   <div class="desk-pop-b-two work-img-container">
     <img src="${recent[0].featuredImage}" alt="" class="project-popup-image">
   </div>

  <div class="desk-pop-b-three">
   <p class="pop-up-text font-montesori blue-2"  >${recent[0].description}</p>
   <div class="pop-up-btn">
     <button class="see-live-btn see-project-btn"><a href="${recent[0].linkToLive_version}">See Live<img</a> <img src="assets/icons/Icon.png" alt=""></button>
     <button class="see-source-btn see-project-btn"><a href="${recent[0].linkToSource}">See Source</a> <img src="assets/icons/1.png" alt=""></button>
   </div>
  </div>

  </div>
 </div>`;

  document.querySelector('.close-pop-up').addEventListener('click', () => {
    popupProject.classList.remove('popup');
  });
});

// Form validation

const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const name = document.getElementById('name');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.style.color = 'red';
    error.innerText = 'Error: lowercase is required to the email';
  }
});

// Local storage

window.addEventListener('beforeunload', () => {
  const storeDatas = {
    name: form.name.value,
    email: form.email.value,

  };
  window.localStorage.setItem('DataForm', JSON.stringify(storeDatas));
});

// Get data to store
window.addEventListener('load', () => {
  const saveDatas = JSON.parse(window.localStorage.getItem('DataForm'));
  form.name.value = saveDatas.name;
  form.email.value = saveDatas.email;
});