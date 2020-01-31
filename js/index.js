document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    var elems1 = document.querySelectorAll('.modal');
    var kek = M.Modal.init(elems1, {});
    var header = document.getElementById("header");
    var scrolledHeader = document.getElementById("scrolled_header");
    if (pageYOffset > 700 && window.screen.width > 450) {
        header.style.display = "none";
        scrolledHeader.style.display = "flex";
    } else {
        scrolledHeader.style.display = "none";
        header.style.display = "flex";
    }

    window.addEventListener('scroll', function() {
        if (pageYOffset > 700 && window.screen.width > 450) {
            header.style.display = "none";
            scrolledHeader.style.display = "flex";
        } else {
            scrolledHeader.style.display = "none";
            header.style.display = "flex";
        }
    })
    
});
