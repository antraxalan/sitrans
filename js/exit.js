document.addEventListener("deviceready", deviceisready, false);

function deviceisready(){
    alert("Device Ready is called");
    document.addEventListener("backbutton", function(e){
        if ( $('.paginaprincipal').attr('id') == 'mainpage') {
            //window.location = "#exitDialog";
            exitAppPopup();
        }else{
            history.back();
        };
    });
};

function exitAppPopup() {
    navigator.notification.confirm(
        "Do you really want to close this app?", 
        function(buttonIndex){
            ConfirmExit(buttonIndex);
        }, 
        "Confirmation", 
        "Yes,No"
    ); 
    alert("Outside Notification"); 
    //return false;
};

function ConfirmExit(stat){
    alert("Inside ConfirmExit");
    if(stat == "1"){
        navigator.app.exitApp();
    }else{
        return;
    };
};