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
    name: 'Proffesional Art Printing Data',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typtype and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: './assets/images/bgi1.png',
    technologies: ['html', 'css', 'bootstrap', 'React', 'Ruby', 'JavaScript'],
    projecDetails: 'see-project',
    linkToLive_version: 'See Live',
    linkToSource: 'https://github.com/aubinleyoung',
  },
];
const table = [
  {
    id: 2,
    name: 'Multimedia post stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-upsrequired. has been the industry s standard dummy text ever since the 1500s, when an unknown printer tooka standard dummy text.',
    featuredImage: 'assets/images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'bootstrap', 'React', 'Ruby', 'JavaScript'],
    projecDetails: 'see-project',
    linkToLive_version: 'See Live',
    linkToSource: 'See Source',
  },
  {
    id: 3,
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
    id: 4,
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
recent.map((element) => {
  firstCard.innerHTML = `
   <img src="${element.featuredImage}" alt="Multi post story" class="work-img" />
   <div class="recent-work-second-block">
     <h3 class="works-title blue-1">${element.name}</h3>
     <p class="font-montesori blue-2">
     ${element.description}
     </p>
     <ul class="tools-container">
       <li class="tools">${element.technologies[0]}</li>
       <li class="tools">${element.technologies[1]}</li>
       <li class="tools">${element.technologies[2]}</li>
       <li class="tools">${element.technologies[3]}</li>

   
     </ul>
     <button class="see-project-btn" type="button">${element.projecDetails}</button>
   </div>`;
  return firstCard;
});

const cards = document.querySelector('.pjt');

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
        <li class="tools">${card.technologies[3]}</li>
    
    </ul>
 

    <button class="see-project pop" type="button"> ${card.projecDetails}</button>
  </div>`;
  return card;
});

const popupProject = document.querySelector('.pop-up-project-section');
const projects = document.querySelectorAll('.pop');
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

      <div class="desk-pop-b-two">
        <img src="${table[index].featuredImage}" alt=""  class="project-popup-image">
      </div>
  
     <div class="desk-pop-b-three">
      <p class="pop-up-text font-montesori blue-2"  >${table[index].description}</p>
      <div class="pop-up-btn">
        <button class="see-live-btn see-project-btn"><a href="${recent[0].linkToLive_version}"></a>See Live<img src="assets/icons/Icon.png" alt=""></button>
        <button class="see-source-btn see-project-btn"><a href="${recent[0].linkToSource}"></a>See Source<img src="assets/icons/1.png" alt=""></button>
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
   <div class="desk-pop-b-two">
     <img src="${recent[0].featuredImage}" alt="" class="project-popup-image">
   </div>

  <div class="desk-pop-b-three">
   <p class="pop-up-text font-montesori blue-2"  >${recent[0].description}</p>
   <div class="pop-up-btn">
     <button class="see-live-btn see-project-btn"><a href="${recent[0].linkToLive_version}"></a>See Live<img src="assets/icons/Icon.png" alt=""></button>
     <button class="see-source-btn see-project-btn"><a href="${recent[0].linkToSource}"></a>See Source <img src="assets/icons/1.png" alt=""></button>
   </div>
  </div>

  </div>
 </div>`;

  document.querySelector('.close-pop-up').addEventListener('click', () => {
    popupProject.classList.remove('popup');
  });
});

//Form validation

const form=document.getElementById('form');
const email=document.getElementById('email');
const error=document.getElementById('error');

form.addEventListener('submit',(e)=>{
if(email.value != email.value.toLowerCase()){
  e.preventDefault();
  error.style.color="red"
  error.innerText="Error: lowercase is required to the email"
}
})