window.onload = () => {
    const role = localStorage.getItem("role");
    if(role !== "student"){
        window.location.href = "../../login page/index.html";
    }

    if(localStorage.getItem("dark") === "true"){
        document.body.classList.add("dark");
    }

    // عرض اسم الطالب فوق الكورسات
    document.getElementById("studentTitle").innerText = "Welcome, " + localStorage.getItem("name");

    loadCourses();
};

function loadCourses(){
    const box = document.getElementById("studentCourses");
    box.innerHTML = "";
    courses.forEach(c=>{
        box.innerHTML += `<div class="card">
            <h3>${c.title}</h3>
            <div class="progress"><div style="width:${c.progress}%"></div></div>
            <p>${c.progress}% completed</p>
            <button>Continue</button>
        </div>`;
    });
}


