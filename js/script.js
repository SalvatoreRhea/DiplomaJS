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

        let newPhoto = document.querySelectorAll('.photo')[2];

    


      readyBtn.addEventListener('click', function() {
        main.style.display   = "block";
        custom.style.display = "none";
        clone.style.display  = "block";


        // Переменные для обнуления
        let resultCount    = document.querySelectorAll('.result-count'),
            progressBar1_3 = document.querySelectorAll('.progress-bar-1'),
            progressBar2   = document.querySelector('.progress-bar-2');

        //Обнуление
            resultCount[0].innerHTML = 0 + '%';
            resultCount[1].innerHTML = 0 + '%';
            resultCount[2].innerHTML = 0 + '%';
            progressBar1_3[0].style.height = 0;
            progressBar1_3[1].style.height = 0;
            progressBar2.style.height = 0;

        // Распределение голосов
        let voting = document.getElementById('voting');

        voting.addEventListener('click', function() {
          resultCount[0].innerHTML = 25 + '%';
          resultCount[1].innerHTML = 49 + '%';
          resultCount[2].innerHTML = 26 + '%';
          progressBar1_3[0].style.height = 25 + '%';
          progressBar1_3[1].style.height = 26 + '%';
          progressBar2.style.height = 49 + '%';
        });

        // Вмешаться в выборы
        let crime = document.getElementById('crime');

        crime.addEventListener('click', function() {
          resultCount[2].innerHTML = 51 + '%';
          progressBar1_3[1].style.height = 51 + '%';
        })

            
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
        // Добавляем картинку из custom в карточку
        newPhoto.style.background = personEasy.style.background;

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

        // Добавляем пол в карточку
        if (male.checked) {
          sex.innerHTML = 'Мужской';
        } else {
          sex.innerHTML = 'Женский';
        };
        
          newViews.innerHTML = political_side.value;
          newBio.innerHTML   = candidate_bio.value;
      });


      // Сбросить результаты(возвразаемся в custom)

      let reset = document.getElementById('reset');

      reset.addEventListener('click', function() {
        main.style.display   = "none";
        custom.style.display = "flex";
        clone.style.display  = "block";
      });

      // Меняем картинку в custom главную

      let personEasy = document.querySelector('.person-easy');

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

            preview.style.backgroundImage    = backgroundSlides[slideIndex - 1],
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
      female.addEventListener('change', function() {
        showSlides(slideIndex);
          personEasy.style.background = 'url(img/construct-1.png) center no-repeat';
          personEasy.style.backgroundSize = '70%';
          preview.style.backgroundImage = 'url(img/construct-1.png)';
 
              prev.addEventListener('click', function() {
                plusSlides(-1);
              });
              next.addEventListener('click', function() {
                plusSlides(1);
              });
      });
      // female.addEventListener('change', function() {
      //   if (event.target.value === 'Женский') {
      //     personEasy.style.background = 'url(img/construct-1.png) center no-repeat';
      //     personEasy.style.backgroundSize = '70%';
      //     let preview          = document.querySelector('.preview'),
      //               prev             = document.querySelector('.prev'),
      //               next             = document.querySelector('.next'),
      //               backgroundSlides = [
      //                   "url(img/construct-1.png)", 
      //                   "url(img/construct-2.png)",
      //                   "url(img/construct-3.png)",
      //                   "url(img/construct-4.png)",
      //                   ],
      //                   slideIndex = 1;

      //           showSlides(slideIndex);

      //           function showSlides(n) {
      //           if (n > backgroundSlides.length) {
      //             slideIndex = 1;
      //           };
      //           if (n < 1) {
      //             slideIndex = backgroundSlides.length;
      //           };

      //           preview.style.backgroundImage = backgroundSlides[slideIndex - 1],
      //           personEasy.style.backgroundImage = backgroundSlides[slideIndex - 1]
                
      //         }

      //         function plusSlides (n) {
      //           showSlides(slideIndex += n)
      //         }

      //         prev.addEventListener('click', function() {
      //           plusSlides(-1);
      //         });
      //         next.addEventListener('click', function() {
      //           plusSlides(1);
      //         });
      //   }
      // });

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

                preview.style.backgroundImage    = backgroundSlides[slideIndex - 1],
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
              // Вызываем функцию сразу
              showSlides();


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