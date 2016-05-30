'use strict';

module.exports = Console;

var Excerpt = require('./excerpt');
var Wrapper = require('./wrapper');

function Console(writer) {
    this.wrapper = new Wrapper(writer);
    this.excerpt = new Excerpt();
}

Console.prototype.write = function write(lift, text, drop) {
    this.excerpt.digest(lift, text, drop);
};

Console.prototype.break = function _break() {
    this.excerpt.break();
};

Console.prototype.paragraph = function paragraph() {
    this.excerpt.paragraph();
};

Console.prototype.option = function option(number, label) {
        var lead = (number + '.    ').slice(0, 4);
        this.wrapper.word(lead);
        this.wrapper.flush = true;
        this.wrapper.push('    ', '   ');
        this.wrapper.words(label);
        this.wrapper.pop();
        this.wrapper.break();
};

Console.prototype.display = function display() {
    this.excerpt.write(this.wrapper);
};

Console.prototype.clear = function clear() {
    this.excerpt = new Excerpt();
};