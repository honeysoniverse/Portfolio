
const btn = document.getElementById('m-menu');

btn.addEventListener('click',toggleMenu);
document.body.addEventListener('click', function(e){if(e.target.classList == 'menu-item')
{
    document.body.classList.toggle('no-scroll');

btn.classList.toggle('open');
dropDown.classList.toggle('hidden');}});


function toggleMenu(){
    const dropDown = document.getElementById('dropDown');
    btn.classList.toggle('open');
    dropDown.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

function moveCss(){
    const css = document.getElementById('css_id');
    css.style.width = "80%";
    css.innerHTML= "80%"
    }

    function moveHtml(){
        const html = document.getElementById('html_id');
        html.style.width = "90%";
        html.innerHTML= "90%"}

        function moveJs(){
            const html = document.getElementById('js_id');
            html.style.width = "65%";
            html.innerHTML= "65%"}





function flipCard1(){
document.getElementById('box-1').classList.toggle('flip-box-anime')
}
function flipCard2(){
    document.getElementById('box-2').classList.toggle('flip-box-anime')
    }
    function flipCard3(){
        document.getElementById('box-3').classList.toggle('flip-box-anime')
        }

       
// var i = 0;
// function moveSkill() {
    
//   if (i == 0) {
//     i = 1;
//     let elem = document.getElementById('css_id');
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
        
//             if (width >= 100) {
//                 clearInterval(id);
//                 i = 0;
//               } else {
//                 width++;
//                 elem.style.width = width + "%";
//                 elem.innerHTML = width + "%";

//               }
//         }
     
//     }
//   }

//   function remSkill(){
//       let elem = document.getElementById('css_id');
//       console.log('op')
//       console.log(elem)
//           elem.style.width = "0%";
//       }
  


    