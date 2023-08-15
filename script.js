

document.addEventListener("DOMContentLoaded", function () {
    let Name = document.getElementById('name');
    let Btn = document.getElementById('button');
    let out = document.getElementById('output');
    let quot = document.getElementById('quotes');

    Btn.addEventListener("click", function () {
        out.innerHTML = `Happy 77th Independence Day ${Name.value}`;
        quot.innerHTML = "May the colours of freedom paint your life with happiness and prosperity!!";
        out.style.fontSize = "30px";
    });
});

