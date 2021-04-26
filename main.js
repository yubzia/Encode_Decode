let textarea = document.getElementById("textarea");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener("input" , ()=>{
    run_Result();
});

textarea.addEventListener("change" , ()=>{
    run_Result();
});

function run_Result() {
    if (select.value == "decode") {
        result.value = atob(textarea.value);
    } else{
        result.value = btoa(textarea.value);
    }
}