const $ADD_EVENT = $('[data-type="open-event-popup"]');
const $FORM_CONTAINER = $('[data-popup="form-container"]');
const $CLOSE_POPUP = $('[data-popup="close-event-popup"]');

// event listeners for adding events and closing event popup
const plusSignButton = () => {
    $ADD_EVENT.click((event) => {
        event.preventDefault();
        openEventAddForm();
        console.log("listening");
    });
};
const closePopupButton = () => {
    $CLOSE_POPUP.click((event) => {
        event.preventDefault();
        closeEventAddForm();
        console.log("closing");
    });
};
const openEventAddForm = () => {
    $FORM_CONTAINER.show('slow');
};
const closeEventAddForm = () => {
    $FORM_CONTAINER.hide('slow');
};



$('#myDropdown').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});


////Initialization
// $FORM_CONTAINER.hide();
closePopupButton();
plusSignButton();

