const $ADD_EVENT = $('[data-type="open-event-popup"]');
const $FORM_CONTAINER = $('[data-popup="form-container"]');
const $CLOSE_POPUP = $('[data-popup="close-event-popup"]');

// create class and export to main.js


const saveForm = () => {
    $('[data-role="submit"]').on('click', () => {
        event.preventDefault();
        getFormDescription();
        getDate();
        console.log("saved form")
    })
}

var theDataz = {};


const getFormDescription = () => {
    var description = 'description';
    var $descrptionValue = $('[data-type="form-description"]').val();
    setLocalStorageValues(description, $descrptionValue);
}
const getDate = () => {
    console.log('ok!');
    var date = 'date';
    var $date = new Date($('input[type="date"]').val());
    var $dateValue;
    if (isNaN($date) === true){
        $dateValue = getCurrentDate();
    } else {
        $dateValue = $date;
    }
    setLocalStorageValues(date, $dateValue);
    console.log(date, $dateValue)
;}

const getCurrentDate = () => {
    console.log('yah');
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
    });
};
const closePopupButton = () => {
    $CLOSE_POPUP.click((event) => {
        event.preventDefault();
        closeEventAddForm();
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
$FORM_CONTAINER.hide();
closePopupButton();
plusSignButton();
saveForm();


const hamburgerMenu = () => {
    $(".hamburger-icon").on('click', (event) => {
        event.preventDefault();
        if ($('.nav-menu-mobile').is(':visible')) {
            $('.nav-menu-mobile').hide('slow');
        } else {
            $('.nav-menu-mobile').show('slow');
        }
    })
}


$('.nav-menu-mobile').hide();
hamburgerMenu();