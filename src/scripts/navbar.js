// json file contains data for links & contents
import context from "./context.json" with {"type": 'json'};



let navbar = document.getElementById("options");
let navList = document.getElementsByClassName('navLink');
let bgSection = document.getElementsByClassName("option_bg")[0];





// animation for mobile view navbar
function animeNavbar() {

    let navStyle = window.getComputedStyle(navbar);



    if (navStyle.top == "60px") {
        navbar.style.top = "-" + navStyle.height;

    } else {
        navbar.style.top = "60px";
    }

}



// burger button click functions
function openNavbarBurger() {
    let burgButt = document.getElementById("openButton");


    burgButt.addEventListener("click", () => {
        animeNavbar();
    });


}



// animation for desktop view 
function navUlAnime(value, animeadd, ulanime) {
    for (const element of navList) {
        let ul = element.children[1];


        ul.style.display = value;

        if (animeadd) {
            bgSection.classList.add("animate-[var(--animate-section)]");



            ul.classList.add("listAnime");
            if (ulanime) {
                ul.classList.add("listAnime")
            }


        }
        else {
            bgSection.classList.remove("animate-[var(--animate-section)]");
            ul.classList.remove("listAnime");
        }



    }

}



// hover event of navbar link
function navOption() {
    let screen = window.matchMedia("(min-width:768px)")
    let ulenter = true

    for (const element of navList) {
        element.addEventListener('mouseenter', () => {



            if (screen.matches) {
                navUlAnime("flex", true, ulenter)




            }
            ulenter = false
        })

    }
    bgSection.addEventListener("mouseleave", () => {
        ulenter = true
        navUlAnime("none", false);


    })





}





// adds name of the navbar links & there sublink
function navbarLinkIntrator() {
    let linkList = document.querySelectorAll(".navLink");




    let contexts = context.navbar.navbarList;

    let linkName = Object.keys(contexts);


    for (let x = 0; x < linkList.length; x++) {


        const element = linkList[x];
        let subLinkUl = element.children[1];
        let linkText = element.children[0];


        linkText.innerText = linkName[x]

        let subLinkName = Object.keys(contexts[linkName[x]]);


        for (let y = 0; y < subLinkName.length; y++) {

            const element = subLinkName[y];
            let subLinkElem = document.createElement("li");
            let subLinkElemAtag = document.createElement("a");
            subLinkElemAtag.href = "";
            subLinkElemAtag.innerText = element[0].toUpperCase() + element.substring(1);
            subLinkElem.appendChild(subLinkElemAtag);
            subLinkUl.appendChild(subLinkElem);
        }







    }


}


window.addEventListener("load",()=>{


// adds name of the navbar links & there sublink
navbarLinkIntrator()

// burger button navbar for mobile view
openNavbarBurger()

// animation for navbar for destop view
navOption()

})
