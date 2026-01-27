window.onload = () => {
    const role = localStorage.getItem("role");
    if(role !== "admin"){
        window.location.href = "../../login page/index.html";
    }

    if(localStorage.getItem("dark") === "true"){
        document.body.classList.add("dark");
    }

    loadAttendance();
};

function loadAttendance(){
    const insBox = document.getElementById("adminInstructors");
    const stuBox = document.getElementById("adminStudents");
    insBox.innerHTML = "";
    stuBox.innerHTML = "";
    attendance.instructors.forEach(i=>{
        insBox.innerHTML += `<div class="card">
            ${i.name}<br>
            Status: <b style="color:${i.absent?'red':'green'}">${i.absent?'Absent':'Present'}</b>
        </div>`;
    });
    attendance.students.forEach(s=>{
        stuBox.innerHTML += `<div class="card">
            ${s.name}<br>
            Status: <b style="color:${s.absent?'red':'green'}">${s.absent?'Absent':'Present'}</b>
        </div>`;
    });
}


