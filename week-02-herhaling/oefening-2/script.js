// ============================================================
//  Week 2 — Oefening 2: Basis DOM-manipulatie
// ============================================================

// 1. Selecteer #title met querySelector en verander de tekst
//    naar iets anders met textContent

document.querySelector('#title').textContent = 'De title is veranderd';

// 2. Voeg een click event listener toe aan #toggle-btn.
//    Bij klik wisselt de tekstkleur van #message tussen rood en zwart.
//    Gebruik een variabele om bij te houden of de tekst nu rood is.

let isRed = true;

document.querySelector('#toggle-btn').addEventListener('click', function () {
  console.log('ik heb geklikt');
  //haal nu met queryselector de #message op
  let message = document.querySelector('#message');
    

  if (isRed) {
    message.style.color = 'black';
  } else {
    message.style.color = 'red';
  }
  isRed = !isRed

  //maak een if statement als het rood is wordt de text black ELSE wordt de tekst rood
});

// 3. Voeg een click event listener toe aan #greet-btn.
//    Lees de waarde van #name-input uit en toon 'Hallo, <naam>!' in #greeting.
document.querySelector('#greet-btn').addEventListener("click", function(){
  const name = document.querySelector('#name-input').value;

  document.querySelector('#greeting').textContent = "Hallo mijn naam is "+ name;

})
