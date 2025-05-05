function ageCalculate() {
    const birthDate = document.getElementById("birthDate").value;
    const dateCur = document.getElementById("dateCur").value;

    if (!birthDate || !dateCur) {
        alert("Please enter dates in both fields.");
        return;
    }

    const birth = new Date(birthDate);
    const current = new Date(dateCur);

    let age = current.getFullYear() - birth.getFullYear();
    const diffMonth = current.getMonth() - birth.getMonth();
    const diffDay = current.getDate() - birth.getDate();

    if (diffMonth && diffDay < 0 || (diffMonth === 0 && current.getDate() < birth.getDate())) {
        age--;
    }
    
    document.getElementById("endResult").textContent = 'Your are'  +  age + 'years old.';
}