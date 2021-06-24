const logoutBtn = document.querySelector("#logout-link");

logoutBtn && logoutBtn.addEventListener("click", function(){
    fetch("http://localhost:3001/logout", {
        method:"delete"
    }).then(() => window.location.replace('/'))
})