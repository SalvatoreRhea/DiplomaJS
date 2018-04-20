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

      // let arr = {
      //   candidateName: [],
      //   candidateAge: [],
      //   candidateGender: [],
      //   politicalSide: [],
      //   candidateBio: []
      // };
      // console.log(arr);

      

      // Получаем имя в массив



      // candidate_name.addEventListener('change', ()=> {
      //   let name = candidate_name.value;
      //   for (let i = 0; i < 1; i++) {
      //     if (isNaN(name) && name !=="") {
      //       console.log('Все круто! Все на месте!');
      //       arr.candidateName[i] = name;
      //       i++;
      //     } else {
      //       alert('Не, так не пойдет, еще раз!');
      //     }
      //   }
      // });

      // Получаем возраст в массив

      // candidate_age.addEventListener('change', ()=> {
      //   let age = candidate_age.value;
      //   for (let i = 0; i < 1; i++) {
      //     if (age.length < 4 && age !=="" && age !==" " && typeof(age.value) !=='string') {
      //       console.log('Все круто! Все на месте!');
      //       arr.candidateAge[i] = age;
      //       i++;
      //     } else {
      //       alert('Не, так не пойдет, еще раз!');
      //     }
      //   }
      // });

      // checkbox 
      



      // let genderChange = function genderChange() {
      //   let input = candidate_gender.getElementsByTagName('input');
      //   for (let i = 0; i < input.length; i++) {
      //     if (input[i].type == "radio" && input[i].checked) {
      //       arr.candidateGender[i] = input;
      //       i++;
      //     }
      //   }
      // };
      // genderChange();

      // Получаем полит.взгляды

      



      // Получаем биографию

      // candidate_bio.addEventListener('change', ()=> {
      //   let bio = candidate_bio.value;
      //   for (let i = 0; i < 1; i++) {
      //     if (isNaN(bio) && bio !=="") {
      //       console.log('Все круто! Все на месте!');
      //       arr.candidateBio[i] = bio;
      //       i++;
      //     } else {
      //       alert('Не, так не пойдет, еще раз!');
      //     }
      //   }
      // });

      // Новая карточка

        let mainCards = document.querySelector('.main-cards')

      
        

        let original = document.getElementsByClassName('main-cards-item')[0];
        let clone = original.cloneNode(true);
        clone.id = "new-card";
        clone.setAttribute('class', 'main-cards-item');
        mainCards.append(clone);
        clone.style.display = "none";
   
        let newName = document.querySelectorAll('.name')[2];
        let newAge = document.querySelectorAll('.age')[2];
        let newBio = document.querySelectorAll('.bio')[2];
        let newViews = document.querySelectorAll('.views')[2];


        let male = document.getElementById('male');
        let sex = document.querySelectorAll('.sex')[2];

    


      readyBtn.addEventListener('click', function() {
        main.style.display = "block";
        custom.style.display = "none";
        clone.style.display = "block";
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
        newAge.innerHTML = candidate_age.value;
        if (male.checked) {
          sex.innerHTML = 'Мужской';
        } else {
          sex.innerHTML = 'Женский';
        };
        let options = political_side.options;
        for (let i = 0; i < options.length; i++) {
          newViews.innerHTML = political_side.value;
        };
        newBio.innerHTML = candidate_bio.value;
      });


      // Сбросить результаты

      let reset = document.getElementById('reset');

      reset.addEventListener('click', function() {
        main.style.display = "none";
        custom.style.display = "flex";
        clone.style.display = "block";
      });




});