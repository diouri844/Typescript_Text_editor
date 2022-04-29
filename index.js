// get all button option :
var btn_to_blob = document.getElementById('bold');
var font_color_box = document.getElementById('foreColor');
var back_color_box = document.getElementById('backColor');
// get text input object : 
var my_data_entry = document.getElementById('text-input');
function sho_input_data() {
    // add style active btn :
    btn_to_blob.classList.toggle('active');
    // get text aria input data : 
    console.log(my_data_entry);
}
btn_to_blob.addEventListener("click", sho_input_data, false);
