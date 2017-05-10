var cachebuster = Math.round(new Date().getTime() / 1000);
var image = document.createElement('img');
var image_src = "https://storage.googleapis.com/sharethis-dev-abinsights/absuccess.gif?cb=" + cachebuster;
document.write('<div id="ST-Tester" style="display:none">an advert</div>');
image.setAttribute("src", image_src);
image.setAttribute("height","1");
image.setAttribute("width","1");
image.setAttribute("style","display:none");
document.getElementById("ST-Tester").appendChild(image);