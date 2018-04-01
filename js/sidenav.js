var sidenav = $("#sidenav");

function openNav(name) 
{
    setHeader(name);
    setWidth("100%");
}

function closeNav() 
{
    setWidth(0);
}

function setWidth(value)
{
    sidenav.width(value);
}

function setHeader(name)
{
    sidenav.find('h1').text(name);
}