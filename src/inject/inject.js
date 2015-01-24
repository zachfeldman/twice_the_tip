chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.command && (msg.command == "double_tip")) {

    var $tipper = $("#tipAmount")
    var tipVal = (parseFloat($tipper.val())*2).toFixed(2);
    
    if($tipper.val() == "0.00"){
      tipVal = "4.00"
    } else if($("#tipAmount").find("option[value='"+tipVal+"']").length == 0){
      tipVal = $("#tipAmount option:last-child").val();
    }

    $tipper.val(tipVal);

    var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("change", true, true);
    $tipper[0].dispatchEvent(changeEvent);

  }

});