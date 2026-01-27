function login(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value;

    if(!name || !email || !role){
        alert("Please enter name, email and role");
        return;
    }
    if(!email.includes("@")){
        alert("Invalid email");
        return;
    }

    if(role === "student"){
        const allowed = students.find(s => s.name===name && s.email===email);
        if(!allowed){ 
            alert("Access denied: student not registered"); 
            return; 
        }
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        window.location.replace("../pages/student/index.html");
    } else if(role === "instructor"){
        const allowed = instructors.find(i => i.name===name && i.email===email);
        if(!allowed){ 
            alert("Access denied: instructor not registered"); 
            return; 
        }
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        window.location.replace("../pages/instructor/index.html");
    } else if(role === "admin"){
        const allowed = Admins.find(a => a.name===name && a.email===email);
        if(!allowed){ 
            alert("Access denied: admin not registered"); 
            return; 
        }
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        window.location.replace("../pages/admin/index.html");
    }
}

function toggleDark(){
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
}

function logout(){
    localStorage.clear();
    window.location.replace("../../html/login page/index.html");
}

function goToLanding(){
    window.location.href = "../../index.html";
}



