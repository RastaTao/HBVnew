
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var row3 = {};	// @container
	var backButton2 = {};	// @button
	var search = {};	// @textField
	var select1 = {};	// @select
// @endregion// @endlock

// eventHandlers// @lock

	row3.click = function row3_click (event)// @startlock
	{// @endlock
		$$("navigation").goToNextView();
	};// @lock

	backButton2.click = function backButton2_click (event)// @startlock
	{// @endlock
		//$$("addTest").hide();
		$$("navigation").goToLastView();
	};// @lock

	search.keyup = function search_keyup (event)// @startlock
	{// @endlock
		var value = $$("search").getValue();
		WAF.sources.student.query("firstName =:1 OR lastName =:1",{ params: ["*" + value + "*"]});
		
	};// @lock

	select1.change = function select1_change (event)// @startlock
	{// @endlock
		var value = $$("select1").getValue();
		
		if(value === "all"){
		WAF.sources.student.all();
						  }
		else{
		
		WAF.sources.student.query("sport =:1",value);
			}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("row3", "click", row3.click, "WAF");
	WAF.addListener("backButton2", "click", backButton2.click, "WAF");
	WAF.addListener("search", "keyup", search.keyup, "WAF");
	WAF.addListener("select1", "change", select1.change, "WAF");
// @endregion
};// @endlock
