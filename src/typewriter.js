/* BulagaJS - v1.0.0 - 2017-02-23
 * https://github.com/juvarabrera/typewriterjs
 *
 * Copyright (c) 2017 Juvar Abrera;
 * Licensed under the MIT license 
*/
 
"use strict";

function TypeWriter(element, options) {
	this.element = element;
	this.options = options;
	if(!this.options.hasOwnProperty("data")) {
		this.options["data"] = ["Lorem ipsum"]
	} else {
		if(this.options.data.length == 0)
			this.options.data.push("Lorem ipsum");
	}
	this.currentMessage = -1;
	this.deletedCharacters = 0;
	this.deleting = true;
	this.delta = 0;
	this.isPaused = false;
	this.type();
}
TypeWriter.prototype.type = function() {
	var elText = this.element.text();
	if(this.delta == 0 || this.isPaused) {
		this.delta = 200;
		this.isPaused = false;
	}
	if(!this.deleting) {
		elText = this.element.text();
		for(var i = 0; i < this.actions.length; i++) {
			if(this.actions[i][0] == elText.length) {
				if(this.actions[i][1] == "pause") {
					this.delta = 1500;
					this.isPaused = true;
					this.actions.splice(i,1);
					break;
				} else if(this.actions[i][1] == "slow") {
					this.delta += 50;
				} else if(this.actions[i][1] == "fast") {
					this.delta -= 50;
				}
				this.actions.splice(i,1);
				i--;
			}
		}
		if(!this.isPaused)
			this.element.text(this.messageToDisplay.substring(0, elText.length + 1));
		if(elText == this.messageToDisplay) {
			this.delta = 2500;
			this.deleting = true;
		}
	} else {
		elText = this.element.text();
		if(elText.length == 0) {
			this.deletedCharacters = 0;
			this.currentMessage++;
			if(this.currentMessage == this.options.data.length)
				this.currentMessage = 0;
			this.deleting = false;
			this.delta = 200;
			this.messageToDisplay = this.options.data[this.currentMessage];
			this.actions = [];
			for(var i = 0; i < this.messageToDisplay.length; i++) {
				var action = "";
				if(this.messageToDisplay.substring(i,i+1) == "|")
					action = "pause";
				else if(this.messageToDisplay.substring(i,i+1) == "<")
					action = "slow";
				else if(this.messageToDisplay.substring(i,i+1) == ">")
					action = "fast";
				if(action != "") {
					this.actions.push([i,action]);
					this.messageToDisplay = this.messageToDisplay.substring(0,i) + this.messageToDisplay.substring(i+1);
					i = 0;
				}
			}
		} else {
			this.delta = 200;
			this.element.text(this.messageToDisplay.substring(0, elText.length - 1));
			this.deletedCharacters++;
			if(this.deletedCharacters >= 10) {
				this.delta = 25;
			} else if(this.deletedCharacters >= 5) {
				this.delta = 50;
			} 
		}
	}
	var thiss = this;
	setTimeout(function() {
		thiss.type()
	}, this.delta);

}