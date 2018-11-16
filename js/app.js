function convertUpperCase(){
  var text = document.getElementById('text').value;
  var textarea =document.getElementById('text');
  textarea.value = text.toUpperCase();
  event.preventDefault();
}

function convertLowerCase(){
  var text = document.getElementById('text').value;
  var textarea =document.getElementById('text');
  textarea.value = text.toLowerCase(); 
  event.preventDefault();
}
// 

function sentenceCase () {
     var text = document.getElementById('text').value;
    var textarea =document.getElementById('text');
    textarea.value = text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    event.preventDefault();
}

function alternateCase () {
  var text = document.getElementById('text').value;
  var textarea =document.getElementById('text');
 var newText = "";
  for(i=0; i<text.length; i++){
   
    var char = text.charAt(i);
    if(char == char.toUpperCase()){
      newText = newText + char.toLowerCase();
    }else{
     newText = newText + char.toUpperCase();
    }
   
  }

  textarea.value = newText; 
  event.preventDefault();
}






function copyText () {
    var text = document.getElementById('text');
    text.select();
    document.execCommand("copy");
    alert("Copied the text: " + text.value);
    event.preventDefault();
}

function clearText(){
  var textarea =document.getElementById('text');
  var text = document.getElementById('text').value;
  var paragrafo = document.getElementById('paragrafo');
  text = "";
  textarea.value = text;
  paragraph.textContent = text;
  event.preventDefault();
}