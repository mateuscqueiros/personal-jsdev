var formContainers = document.querySelectorAll("form .field-radio");

if (formContainers) {

    formContainers.forEach(container => {

        container.addEventListener("click", () => {

            let radio = container.querySelector("input[type='radio']");
            let checkbox = container.querySelector("input[type='checkbox']");

            if (checkbox) {
                checkbox.checked = !checkbox.checked
            }

            if (radio) {
                radio.checked = true
            }
        })

    })

}