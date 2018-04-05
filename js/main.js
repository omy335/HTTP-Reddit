// Main.js

// Initial Load
loadXMLDoc();

// Event Listeners
document.getElementById('btn-load').addEventListener('click', loadXMLDoc);

// Call to get JSON file
function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    var url = "https://www.reddit.com/r/worldnews.json"; 
    // var url = "https://www.reddit.com/r/news.json";
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
  
// Formats how information will be displayed
function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.data.children.length; i++) {
        var currArr = arr.data.children[i].data;

        //Formatted Article Display
        out += '<div class="article">' + 
        currArr.title + 
        '<br>' +
        '<a href="' + currArr.url + '"; target=_;>Article</a>' + 
        ' ' + 
        '<a href="https://reddit.com' + currArr.permalink + '" target="_">Comments</a>' +
        '</div>' +
        '<br>';
    }
    document.getElementById('content').innerHTML = out;
}