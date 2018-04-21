window.addEventListener('DOMContentLoaded', function() {

 // Modal

 let overlay        = document.getElementsByClassName('overlay')[0],
     popup          = document.getElementsByClassName('popup')[0],
     main           = document.getElementsByClassName('main')[0],
     custom         = document.getElementsByClassName('custom')[0],
     customInfo     = document.getElementsByClassName('custom-info')[0],
     customChar     = document.getElementsByClassName('custom-char')[0],
     customStyle    = document.getElementsByClassName('custom-style')[0],
     popupBtn       = document.getElementById('popup-btn');

     popupBtn.addEventListener('click', function() {
      overlay.style.display     = "none";
      main.style.display        = "none";
      custom.style.display      = "flex";
      customInfo.style.display  = "block";
      customChar.style.display  = "block";
      customStyle.style.display = "block";
     });



// info candidate

  let candidate_name   = document.getElementById('name'),
      candidate_age    = document.getElementById('age'),
      candidate_gender = document.getElementsByClassName('radio')[0],
      political_side   = document.getElementById('select'),
      candidate_bio    = document.getElementById('bio'),
      readyBtn         = document.getElementById('ready')



        let mainCards = document.querySelector('.main-cards')

      
        

        let original = document.getElementsByClassName('main-cards-item')[0];
        let clone = original.cloneNode(true);
        clone.id = "new-card";
        clone.setAttribute('class', 'main-cards-item');
        mainCards.append(clone);
        clone.style.display = "none";
   
        let newName  = document.querySelectorAll('.name')[2];
        let newAge   = document.querySelectorAll('.age')[2];
        let newBio   = document.querySelectorAll('.bio')[2];
        let newViews = document.querySelectorAll('.views')[2];


        let male   = document.getElementById('male');
        let female = document.getElementById('female');
        let sex    = document.querySelectorAll('.sex')[2];

    


      readyBtn.addEventListener('click', function() {
        main.style.display   = "block";
        custom.style.display = "none";
        clone.style.display  = "block";
        // if (candidate_name.value =="") {
        //   alert("Введите пожалуйста ваши ФИО")
        // } else {
        //   newName.innerHTML = candidate_name.value;
        //   main.style.display = "block";
        //   custom.style.display = "none";
        //   clone.style.display = "block";
        // };
        // if (candidate_age.value =="") {
        //   alert("Введите ваш возвраст")
        // } else {
        //   newAge.innerHTML = candidate_age.value;
        //   ain.style.display = "block";
        //   custom.style.display = "none";
        //   clone.style.display = "block";
        // };
        newName.innerHTML = candidate_name.value;
        newAge.innerHTML  = candidate_age.value;

        // let personEasy = document.querySelector('.person-easy');

        // male.addEventListener('change', function() {
        //   if (event.target.value === 'Мужской') {
        //     personEasy.style.background = 'url(img/construct-5.png) center no-repeat';
        //     personEasy.style.backgroundSize = 'cover';
        //   }
        // });
        // female.addEventListener('change', function() {
        //   if (event.target.value === 'Женский') {
        //     personEasy.style.background = 'url(img/construct-1.png) center no-repeat';
        //     personEasy.style.backgroundSize = 'cover';
        //   }
        // });

        // let radioBlock = document.querySelector('.radio');

        // radioBlock.addEventListener('change', function() {
        //   if (event.target.value === 'Женский') {
        //     personEasy.style.backgroundImage = 'url(img/construct-5.png) center no-repeat';
        //     personEasy.style.backgroundSize = 'cover';
        //     check = 'false';
        //   } else {
        //     personEasy.style.backgroundImage = 'url(img/construct-1.png) center no-repeat';
        //     personEasy.style.backgroundSize = 'cover';
        //     check = 'true';
        //   }
        // });


        if (male.checked) {
          sex.innerHTML = 'Мужской';
        } else {
          sex.innerHTML = 'Женский';
        };
        
          newViews.innerHTML = political_side.value;
          newBio.innerHTML   = candidate_bio.value;
      });


      // Сбросить результаты

      let reset = document.getElementById('reset');

      reset.addEventListener('click', function() {
        main.style.display   = "none";
        custom.style.display = "flex";
        clone.style.display  = "block";
      });

      // Меняем картинку в custom главную

      let personEasy = document.querySelector('.person-easy');
      // let radioBlock = document.querySelector('.radio');

      male.addEventListener('change', function() {
        personEasy.style.background = 'url(img/construct-5.png) center no-repeat';
        personEasy.style.backgroundSize = '70%';
        if (event.target.value === 'Мужской') {
            let preview          = document.querySelector('.preview'),
                prev             = document.querySelector('.prev'),
                next             = document.querySelector('.next'),
                backgroundSlides = [
                    "url(img/construct-5.png)",
                    "url(img/construct-6.png)",
                    "url(img/construct-7.png)",
                    "url(img/construct-8.png)",
                    ],
                    slideIndex = 1;

            showSlides(slideIndex);

            function showSlides(n) {
            if (n > backgroundSlides.length) {
              slideIndex = 1;
            };
            if (n < 1) {
              slideIndex = backgroundSlides.length;
            };

            preview.style.backgroundImage = backgroundSlides[slideIndex - 1],
            personEasy.style.backgroundImage = backgroundSlides[slideIndex - 1]
            
          }

          function plusSlides (n) {
            showSlides(slideIndex += n)
          }

          prev.addEventListener('click', function() {
            plusSlides(-1);
          });
          next.addEventListener('click', function() {
            plusSlides(1);
          });
          // personEasy.style.background = 'url(img/construct-5.png) center no-repeat';
          // personEasy.style.backgroundSize = '70%';
        }

      });
      female.addEventListener('change', function() {
        if (event.target.value === 'Женский') {
          personEasy.style.background = 'url(img/construct-1.png) center no-repeat';
          personEasy.style.backgroundSize = '70%';
          let preview          = document.querySelector('.preview'),
                    prev             = document.querySelector('.prev'),
                    next             = document.querySelector('.next'),
                    backgroundSlides = [
                        "url(img/construct-1.png)", 
                        "url(img/construct-2.png)",
                        "url(img/construct-3.png)",
                        "url(img/construct-4.png)",
                        ],
                        slideIndex = 1;

                showSlides(slideIndex);

                function showSlides(n) {
                if (n > backgroundSlides.length) {
                  slideIndex = 1;
                };
                if (n < 1) {
                  slideIndex = backgroundSlides.length;
                };

                preview.style.backgroundImage = backgroundSlides[slideIndex - 1],
                personEasy.style.backgroundImage = backgroundSlides[slideIndex - 1]
                
              }

              function plusSlides (n) {
                showSlides(slideIndex += n)
              }

              prev.addEventListener('click', function() {
                plusSlides(-1);
              });
              next.addEventListener('click', function() {
                plusSlides(1);
              });
        }
      });


      //Slider
    //   let preview          = document.querySelector('.preview'),
    //       prev             = document.querySelector('.prev'),
    //       next             = document.querySelector('.next'),
    //       backgroundSlides = [
    //           "url(img/construct-1.png)", 
    //           "url(img/construct-2.png)",
    //           "url(img/construct-3.png)",
    //           "url(img/construct-4.png)",
    //           "url(img/construct-5.png)",
    //           "url(img/construct-6.png)",
    //           "url(img/construct-7.png)",
    //           "url(img/construct-8.png)",
    //           ],
    //           slideIndex = 1;

    //   showSlides(slideIndex);

    //   function showSlides(n) {
    //   if (n > backgroundSlides.length) {
    //     slideIndex = 1;
    //   };
    //   if (n < 1) {
    //     slideIndex = backgroundSlides.length;
    //   };

    //   preview.style.backgroundImage = backgroundSlides[slideIndex - 1],
    //   personEasy.style.backgroundImage = backgroundSlides[slideIndex - 1]
      
    // }

    // function plusSlides (n) {
    //   showSlides(slideIndex += n)
    // }

    // prev.addEventListener('click', function() {
    //   plusSlides(-1);
    // });
    // next.addEventListener('click', function() {
    //   plusSlides(1);
    // });

      

});