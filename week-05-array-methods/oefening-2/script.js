const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

const searchFind = document.getElementById('search-find');
const searchOutput = document.getElementById('output-find');
const searchIncludes = document.getElementById('search-includes');
const outputIncludes = document.getElementById('output-includes')

searchFind.addEventListener('change', () => {
 let searchInput = searchFind.value.toLowerCase();
 let found = names.find(name => name.toLowerCase().startsWith(searchInput));
  searchOutput.textContent = found
  searchFind.value = ""
})

let lowerNames = names.map(name => name.toLowerCase());

searchIncludes.addEventListener('change', () => {
  //maak een variabel lowerNames en zorg dat de INPUT waarde in kleine letters wordt gezet
  let lowerInput = searchIncludes.value.toLowerCase();

  let exists = lowerNames.includes(lowerInput);

  outputIncludes.textContent = exists;
  searchIncludes.value = ''
})

 