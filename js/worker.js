function e() {
var base="https://raw.githubusercontent.com/terrinoculon/toys/master/frame";
  for (var i = 1; i < 2501; i++) {
    var url = base.concat(i.toString(),".jpg");
    var xhr = new XMLHttpRequest();
     xhr.responseType = 'blob';
    // xhr.onload = xhr.onerror = onload;
     xhr.open('GET', url, false);
     xhr.send();


  		 var ii=i/25;

       console.log('Posting message back to main script');
       postMessage(ii);
    }
}
e();
