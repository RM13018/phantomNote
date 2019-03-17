document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elemsCollaps = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elemsCollaps);
});