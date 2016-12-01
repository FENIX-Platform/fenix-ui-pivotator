/*global describe, it, require*/
var expect = require("chai").expect,
    Pivotator = require("../src/js/index"),
    model = require("./models/model"),
    config = require("./models/config");

var pivotator = new Pivotator();

describe("Pivotator", function () {

    it("should be not null", function () {
        expect(Pivotator).to.be.not.null;
    });

    it("should be i18n", function () {
        var pivoted = pivotator.pivot(model, config);
        expect(pivoted).to.be.not.null;
    });


});