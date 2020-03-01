/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var Gas1 = (function () {
    function Gas1(totalMiles, mpg, gasAtOnce, startingGal) {
        if (this.gallonsForTotal === undefined)
            this.gallonsForTotal = 0;
        if (this.totalMiles === undefined)
            this.totalMiles = 0;
        if (this.mpg === undefined)
            this.mpg = 0;
        if (this.gasAtOnce === undefined)
            this.gasAtOnce = 0;
        if (this.startingGal === undefined)
            this.startingGal = 0;
        if (this.__distanceTill1 === undefined)
            this.__distanceTill1 = 0;
        if (this.milesAtOnce === undefined)
            this.milesAtOnce = 0;
        this.totalMiles = totalMiles;
        this.mpg = mpg;
        this.gasAtOnce = gasAtOnce;
        this.startingGal = startingGal;
        this.milesAtOnce = gasAtOnce * mpg;
    }
    Gas1.prototype.findGallons = function () {
        this.gallonsForTotal = (this.totalMiles) / (this.mpg);
        return this.gallonsForTotal;
    };
    Gas1.prototype.distanceTill1 = function () {
        this.__distanceTill1 = this.startingGal * this.mpg;
        return this.__distanceTill1;
    };
    Gas1.prototype.numAtGasStations = function () {
        if (this.__distanceTill1 > this.totalMiles) {
            return 0;
        }
        var distanceLeft = this.totalMiles - this.__distanceTill1;
        if (distanceLeft > this.milesAtOnce) {
            var numAtGasStations = (distanceLeft / this.milesAtOnce) + 1;
            return (numAtGasStations | 0);
        }
        return 1;
    };
    Gas1.prototype.totalMoneySpentGas = function (avgMoneyPerGasStation) {
        return this.numAtGasStations() * avgMoneyPerGasStation;
    };
    Gas1.main = function (args) {
        var car = new Gas1(1000, 32, 15, 10); //hardcoded here
        print("Distance till first gas station " + car.distanceTill1());
        print("Total Money Spent on Gas " + car.totalMoneySpentGas(40.0));
        print("Total Miles " + car.totalMiles);
    };
    return Gas1;
}());
Gas1["__class"] = "Gas1";
Gas1.main(null);
