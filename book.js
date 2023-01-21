function loadData(){

    const searchField=document.getElementById("search-field");
    const searchText=searchField.value;
    searchField.value="";
    
    
    const url=`https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data))
}

function showDetails(details){

    console.log(details)
    const resultContainer=document.getElementById("result-container");
    const totalSearchResult=document.getElementById("total-search-result");
    totalSearchResult.innerText=details.numFound;

   
   const results=details.docs;
   for(const result of results){
     const div=document.createElement('div');
     div.innerHTML=`
      <h3> Author name: ${result.author_name}</h3>
      <h3> Book Title: ${result.title}</h3>
    `;
    resultContainer.appendChild(div);
    div.classList.add('design');
   }
}


   
