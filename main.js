function dropdowncontent() {
    if(document.getElementById("dropdown-content").style.display === "none"){
        document.getElementById("dropdown-content").style.display = "block";
        document.getElementById("dropdown-arrow").innerHTML = "<i class='fa-solid fa-caret-up fa-sm'></i>";
    }
    else {
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("dropdown-arrow").innerHTML = "<i class='fa-solid fa-caret-down fa-sm'></i>";
    }
};

let sidebaropen = 0;

function sidebar_btn() {
    if(sidebaropen === 1){
        document.getElementById("sidebar").style.animation = "closesidebar-sidebar .5s ease-in-out forwards";
        document.getElementById("content").style.animation = "closesidebar-content .5s ease-in-out forwards";
        document.getElementById("sidebarbtn").innerHTML = "<i class='fa-solid fa-bars'></i>";
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("dropdown-arrow").innerHTML = "<i class='fa-solid fa-caret-down fa-sm'></i>";
        sidebaropen = 0;
    }
    else {
        document.getElementById("sidebar").style.animation = "opensidebar-sidebar .5s ease-in-out forwards";
        document.getElementById("content").style.animation = "opensidebar-content .5s ease-in-out forwards";
        document.getElementById("sidebarbtn").innerHTML = "<i class='fa-solid fa-xmark'></i>";
        sidebaropen = 1;
    }
}

function darkmodetoggle() {
    document.body.classList.toggle("dark-mode");
}