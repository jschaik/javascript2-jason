const products = [
  'Laptop Pro',
  'Draadloze muis',
  'USB-C hub',
  'Bureaulamp',
  'Notitieboek',
  'Pennenset',
  'Koptelefoon',
  'Bluetooth speaker',
  'Webcam HD',
  'Muismat XL',
  'Monitor 27"',
  'Desk organizer',
];

let container = document.getElementById('products');
let counter = document.getElementById('counter')
let searchBar = document.getElementById('search-bar')

let searchTerm = '';
let sorting = '';

const showProducts = (filtered) => {

  for (let product of filtered){
    container.innerHTML += `<article>
    <h3>${product}</h3>
    </article>`
  }
  
  counter.textContent = `${products.length} producten gevonden`
};


const filterProducts = (searchResult) => {
  // Maak een variabele 'filtered' aan door de products array te filteren op searchTerm
  // Gebruik hiervoor filter() en includes() en toLowerCase()


  const filtered = products.includes(searchResult)

  // Sorteer hier op sorting:
  // als sorting 'az' is, sorteer van A naar Z
  // als sorting 'za' is, sorteer van Z naar A

  showProducts(filtered);
};

// Maak een eventlistener voor de #search-bar input
// Sla de waarde op in de searchTerm variabele en roep filterProducts() aan

searchBar.addEventListener('change', () => {

  let searchResult = searchBar.value.toLowerCase()
  filterProducts(searchResult)
})

// Maak een eventlistener voor de #sort-az button
// Zet sorting op 'az' en roep filterProducts() aan

// Maak een eventlistener voor de #sort-za button
// Zet sorting op 'za' en roep filterProducts() aan

filterProducts();
