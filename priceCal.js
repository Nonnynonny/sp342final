function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  var tp;
	if (eventId == 1){
		tp = ticknum * 91.25;
	}else if (eventId == 2){
		tp = ticknum * 79.88;
	}else if (eventId == 3){
		tp = ticknum * 83.12;
	}else if (eventId == 4){
		tp = ticknum * 100;
	}
  
  return tp;
}


