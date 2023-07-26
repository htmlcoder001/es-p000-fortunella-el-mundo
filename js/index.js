    const isInViewport = function (elem) {
      const bounding = elem.getBoundingClientRect();
      return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function countDown(elem){
      let num = parseInt(elem.textContent);
      if(num > 6) {
        let speed = getRandom(5,30);
        const timerId = setTimeout(function(){
          elem.textContent = num - 1;
          clearTimeout(timerId);
          countDown(elem);
        }, speed*1000);
      } else {
        elem.parentNode.classList.add('prod-left__pad--low');
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      const prod = document.querySelector('.js-prod-left b');
      let flagProd = 0;

      window.addEventListener('scroll', () => {
        if(isInViewport(prod) && !flagProd) {
          flagProd = 1;
          countDown(prod);
        }
      });

      startPopup(document.getElementById('custom-social-proof'), 6, 14, 24);

    });


    (function (document) {
      const markers = [...document.querySelectorAll('mark')];

      const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 1,
        rootMargin: "0px 0px -10% 0px",
      });

      markers.forEach(mark => {
        observer.observe(mark);
      });
    })(document);


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const recentPur2 = {
  names: ["Nuria","Aya","Mariam","Gema","Noa","Valentina","Almudena","Ainoa","Isabel","Elsa","Isabella","Mara","Lia","Maria","Sheila","Sheila","Silvia","Mariam","Jimena","Manuela"],
  surnames: ["Alameda","Notario","Alguacil","Villalba","Hoyo","Moreno","Álvarez","Ruiz","Santolaria","Blázquez","Montilla","Aragonés","Obrero","Gallego","Páez","Alférez","Bailén","Fraile","Sahagún"],
  states: ["Badalona", "Barcelona", "Cornellà", "Granollers", "L’Hospitalet de Llobregat", "Manresa", "Mataró", "Reus", "Sabadell", "Santa Coloma de Gramenet", "Terrassa", "Vic", "Vilanova i la Geltrú", "Girona", "Llívia", "Caravaca", "Cartagena", "Cieza", "Jumilla", "Lorca", "Murcia", "Yecla", "Alcoy", "Alicante", "Elche", "Elda", "Orihuela", "Villena", "Alzira", "Gandía", "Requena", "Sagunto", "Sueca", "Torrent", "Valencia"],
  quantity: ["6", "5", "3", "4"],
};

function newOrder(data) {
  function getRandomValue(property) {
    if (property.length) return property[Math.floor(Math.random() * property.length)];
  }

  const name = getRandomValue(data.names);
  const surname = getRandomValue(data.surnames);
  const from = getRandomValue(data.states);
  const quantity = getRandomValue(data.quantity);

  return { name, surname, from, quantity };
}

function startPopup(popupContainer, autoCloseSec = 4, randStartSec = 8,randEndsec = 30) {
  const nameField = document.getElementById('notify-1');
  const fromField = document.getElementById('notify-2');
  const timeField = document.getElementById('notify-3');
  const quantityField = document.getElementById('notify-4');
  const closeBtn = document.getElementById('notify-close');
  let randomCreationTime = randStartSec;
  closeBtn.addEventListener('click', () => {
    fadeOut(popupContainer, 300, 'bottom');
  });

  function initCustomPopup() {
    const recId = setTimeout(() => {
      randomCreationTime = getRandom(randStartSec, randEndsec);

      const data = newOrder(recentPur2);
      nameField.textContent = `${data.name} ${data.surname}`; //data.name
      fromField.textContent = data.from;
      timeField.textContent = "Hace " + getRandom(8, 59) + " segundos";
      quantityField.textContent = data.quantity;
      fadeIn(popupContainer, 300, 1, 'block', 'bottom');
      let hideID = setTimeout(() => {
        fadeOut(popupContainer, 300, 'bottom');
        clearTimeout(hideID);
      }, autoCloseSec * 1000);
      initCustomPopup();
      clearTimeout(recId);
    }, randomCreationTime*1000);
  }

  initCustomPopup();
}

const fadeOut = (el, timeout, direction = 'top') => {
  el.style.transformOrigin = direction;
  el.style.transform = "scaley(1)";
  el.style.transition = `transform ${timeout}ms`;
  el.style.transform = "scaley(0)";

  setTimeout(() => {
    el.style.display = "none";
  }, timeout);
};

const fadeIn = (el, timeout, delay, display, direction = 'top') => {
  setTimeout(() => {
    el.style.transformOrigin = direction;
    el.style.transform = "scaley(0)";
    el.style.display = display || "block";
    el.style.transition = `transform ${timeout}ms`;
    setTimeout(() => {
      el.style.transform = "scaley(1)";
    }, timeout);
  }, delay);
};
// startPopup параметры 2, 3, 3 можно опустить
