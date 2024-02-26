const form = document.querySelector(".feedback-form");
pasteData()

form.addEventListener("input", saveData);
form.addEventListener("submit", dataSubmit);

function saveData() {
    const data = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    }
    if (data.email === "" && data.message === "") {
        localStorage.removeItem('feedback-form-state');
    }
    else {
        localStorage.setItem('feedback-form-state', JSON.stringify(data));
    }
}

function pasteData() {
    try {
        const data = JSON.parse(localStorage.getItem('feedback-form-state'));
        form.elements.email.value = data.email;
        form.elements.message.value = data.message;
    }
    catch {return}
}

function dataSubmit(event) {
    event.preventDefault();
    if (form.elements.email.value.trim() === "" ||
        form.elements.message.value.trim() === "") {
        alert('Fill the form!')
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        localStorage.removeItem('feedback-form-state');
        event.currentTarget.reset();
    }
}