const $ADD_EVENT = $('[data-type="open-event-popup"]');
const $FORM_CONTAINER = $('[data-popup="form-container"]');
const $CLOSE_POPUP = $('[data-popup="close-event-popup"]');

// create class and export to main.js


const saveForm = () => {
    $('#submit-event').on('click', () => {
        event.preventDefault();
        getSize();
        getFormDescription();
        getDate();
        console.log("saved form")
    })
}

var theDataz = {};

const getSize = () => {
    var size = 'size';
    var $sizeValue = $('[name="size"]').val();
    setLocalStorageValues(size, $sizeValue);
}
const getFormDescription = () => {
    var description = 'description';
    var $descrptionValue = $('[data-type="form-description"]').val();
    setLocalStorageValues(description, $descrptionValue);
}
const getDate = () => {
    var date = 'date';
    var $date = new Date($('input[type="date"]').val());
    // var valueOfDate = $date.valueOf()
    var $dataValue;
    if (isNaN($date) === true){
        $dataValue = getCurrentDate();
    } else {
        console.log("doing it")
        var $dateValue = $date;
        console.log($dateValue);
    }
    setLocalStorageValues(date, $dateValue);
    console.log(date, $dataValue)
;}



const getCurrentDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd < 10){
        dd = '0' + dd
    }
    if(mm < 10){
        mm = '0'+ mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

const setLocalStorageValues = (key, keyValue) => {
    localStorage.setItem(key, keyValue);
    theDataz[key] = keyValue;
    console.log(theDataz)
};


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

// drop down icon menu
$('#myDropdown').ddslick({
    width: "200px",
    height: "200px",
    imagePosition: "right",
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});


////Initialization
// $FORM_CONTAINER.hide();
closePopupButton();
plusSignButton();
saveForm();


