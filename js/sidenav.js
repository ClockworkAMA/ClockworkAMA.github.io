/* Open the sidenav */
function openNav(name) 
{
    document.getElementById("sidenav").style.width = "100%";
    document.getElementById("sidenav").lastChild.nodeValue = name;
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}