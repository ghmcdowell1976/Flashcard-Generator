"use strict";
function GetCloze(text, cloze){
	this.cloze = cloze;
	this.text = text;
	this.partial = text.replace(cloze, "...");

};
			
module.exports = GetCloze;