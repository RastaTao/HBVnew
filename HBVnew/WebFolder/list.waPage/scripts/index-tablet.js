
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var addTest = {};	// @button
	var search = {};	// @textField
	var select1 = {};	// @select
	var saveButton = {};	// @button
	var row3 = {};	// @container
	var documentEvent = {};	// @document
	var backButton2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	addTest.click = function addTest_click (event)// @startlock
	{// @endlock
		$$("saveButton").enable();
		$$("addTest").disable();
	};// @lock

	search.keyup = function search_keyup (event)// @startlock
	{// @endlock
		var value = $$("search").getValue();
		WAF.sources.student.query("firstName =:1 OR lastName =:1",{ params: ["*" +value + "*"]});
		
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

	saveButton.click = function saveButton_click (event)// @startlock
	{// @endlock
		WAF.sources.test0.save();
		WAF.sources.student.serverRefresh();
		$$("addTest").enable();
		//$$("saveButton").disable();
	};// @lock

	row3.click = function row3_click (event)// @startlock
	{// @endlock
		$$("navigation").goToNextView();
		$$("addTest").enable();
		$$("saveButton").enable();
		//WAF.sources.test0.orderBy("desc");
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$("addTest").disable();
		$$("saveButton").disable();
		//WAF.sources.test0.orderBy("date asc");
	};// @lock

	backButton2.click = function backButton2_click (event)// @startlock
	{// @endlock
		$$("addTest").disable();
		$$("saveButton").disable();
		//$$("navigation").goToLastView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("addTest", "click", addTest.click, "WAF");
	WAF.addListener("search", "keyup", search.keyup, "WAF");
	WAF.addListener("select1", "change", select1.change, "WAF");
	WAF.addListener("saveButton", "click", saveButton.click, "WAF");
	WAF.addListener("row3", "click", row3.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("backButton2", "click", backButton2.click, "WAF");
// @endregion
};// @endlock
