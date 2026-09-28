// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

const form = document.querySelector('#profile-form');
const profilesList = document.querySelector('#profiles-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const role = document.querySelector('#role').value;
  const department = document.querySelector('#department').value

  profilesList.innerHTML += `
    <article>
      <h3>${name}</h3>
      <p><strong>Functie:</strong> ${role}</p>
      <p><strong>Afdeling:</strong> ${department}</p>
    </article>
  `;

  form.reset();
});
