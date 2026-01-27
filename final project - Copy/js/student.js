document.addEventListener("DOMContentLoaded", () => {

    const role = localStorage.getItem("role");
    if(role !== "student"){
        window.location.href = "../../login page/index.html";
        return;
    }

    if(localStorage.getItem("dark") === "true"){
        document.body.classList.add("dark");
    }

    const studentTitle = document.getElementById("studentTitle");
    studentTitle.innerHTML = `
    <div class="welcome-box">
        👋 Welcome aboard!
        <br>
        Your learning journey starts here — keep going and make every step stronger than the last
        
    </div>
    `;

    loadCourses();
});

function loadCourses(){
    const box = document.getElementById("studentCourses");
    box.innerHTML = "";

    courses.forEach(c=>{
        box.innerHTML += `
        <div class="card">
            <h3>${c.title}</h3>
            <div class="progress">
                <div style="width:${c.progress}%"></div>
            </div>
            <p>${c.progress}% completed</p>
            <button>Continue</button>
        </div>
        `;
    });
}

function toggleDark(){
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
}



