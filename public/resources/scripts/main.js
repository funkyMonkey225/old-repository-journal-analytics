const $ADD_EVENT = $('[data-type="add-event"]');



function plusSignListener() {
    $ADD_EVENT.click(function (){
        console.log("listening");
    });
};



// //Initialization
plusSignListener();

