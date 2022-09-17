
const h1 = document.getElementsByTagName("h1")[0]
const parentDiv = h1.parentNode
const textNode = document.createTextNode("WELCOME");
parentDiv.insertBefore(textNode, h1)

