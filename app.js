
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = "نبراس محمود";
    welcome.innerHTML = "مرحبا بكم في صفحه المبرمجه نبراس";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = "انا مبرمجه وادرس تطوير المواقع";
    contact.innerHTML = "اتصل بنا";
}else if(getLanuage ==="english"){
    title.innerHTML = "nebras mahmoud";
    welcome.innerHTML = "Welcome to the nebras programmer 's page";
    about.innerHTML = "  About US";
    aboutText.innerHTML = " Iam a programmer,studying web development ";
    contact.innerHTML = "Contact us";

}


}