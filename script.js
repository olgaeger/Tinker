const body = document.getElementsByTagName("body")[0];

body.addEventListener("click",(event)=>{
    console.log("body=", event);
    console.log(event.target.getAttribute("id"));
});

