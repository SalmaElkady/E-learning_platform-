window.onload = () => {
    const role = localStorage.getItem("role");
    if(role !== "instructor"){
        window.location.href = "../../login page/index.html";
    }

    if(localStorage.getItem("dark") === "true"){
        document.body.classList.add("dark");
    }
};

// يمكن إضافة دوال مستقبلية للمدرس هنا
