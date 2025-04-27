
document.getElementById("addField").addEventListener("click", function () {
    const inpArea = document.getElementById("inpArea");
    const fieldPreview = document.getElementById("fieldPreview");

    const fieldDiv = document.createElement("div");
    fieldDiv.classList.add("field-sect");

    const fieldName = document.createElement("input");
    fieldName.setAttribute("type", "text");
    fieldName.setAttribute("placeholder", "Enter Field Name");
    fieldName.style.width = "100%";
    fieldName.addEventListener("input", updatePreview);

    const dataField = document.createElement("textarea");
    dataField.setAttribute("placeholder", "Enter Field Details");
    dataField.style.width = "100%";
    dataField.addEventListener("input", updatePreview);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("dlt-btn");
    deleteBtn.addEventListener("click", function () {
        inpArea.removeChild(fieldDiv);
        updatePreview();
    });

    fieldDiv.appendChild(fieldName);
    fieldDiv.appendChild(document.createElement("br"));
    fieldDiv.appendChild(dataField);
    fieldDiv.appendChild(document.createElement("br"));
    fieldDiv.appendChild(deleteBtn);

    inpArea.appendChild(fieldDiv);

    function updatePreview() {
        fieldPreview.innerHTML = "";
        document.querySelectorAll(".field-sect").forEach(section => {
            const fldName = section.querySelector("input").value;
            const fldData = section.querySelector("textarea").value;

            if (fldName || fldData) {
                const sectionPreview = document.createElement("div");
                sectionPreview.innerHTML = `<h3>${fldName}</h3><p>${fldData}</p>`;
                fieldPreview.appendChild(sectionPreview);
            }
        });
    }
});