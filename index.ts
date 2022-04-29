// get all button option :
const btn_to_blob = document.getElementById('bold') as HTMLButtonElement;

const font_color_box = document.getElementById('foreColor') as HTMLInputElement;
const back_color_box = document.getElementById('backColor') as HTMLInputElement;



// get text input object : 
const my_data_entry = document.getElementById('text-input') as HTMLDivElement;

function sho_input_data(){
    // add style active btn :
    btn_to_blob.classList.toggle('active');
    // get text aria input data : 
    console.log(my_data_entry);
}


btn_to_blob.addEventListener("click",sho_input_data,false);