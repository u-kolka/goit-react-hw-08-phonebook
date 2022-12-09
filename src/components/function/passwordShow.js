export function passwordShow() {
    const inputEl = document.getElementById("input-password");
    if (inputEl.type === "password") {
        inputEl.type = "text";
    } else {
        inputEl.type = "password";
    }
};