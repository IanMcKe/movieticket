describe('Ticket', function() {
    it("creates a new ticket with the given specifications", function() {
        var testTicket = new Ticket("testName", "7:00PM", 27, "09/15/2015");
        expect(testTicket.title).to.equal("testName");
        expect(testTicket.showTime).to.equal("7:00PM");
        expect(testTicket.age).to.equal(27);
        expect(testTicket.showDate).to.equal("09/15/2015");
    });
});

describe('calculatePrice', function() {
    it("returns base price with no adjustments/discounts", function() {
        var testTicket = new Ticket("testName", "7:00PM", 27, "09/15/2015");
        expect(testTicket.calculatePrice()).to.equal(12);
    });

    it("returns half of the base price for a matinee showing (2:00PM-5:00PM)", function() {
        var testTicket = new Ticket("testName", "3:00PM", 27, "09/15/2015");
        expect(testTicket.calculatePrice()).to.equal(6);
    });

    it("deducts price by 2 if the person is a senior", function() {
        var testTicket = new Ticket("testName", "5:00PM", 65, "09/15/2015");
        expect(testTicket.calculatePrice()).to.equal(10);
    });

    it("deducts price by 2 if the person is a child", function() {
        var testTicket = new Ticket("testName", "5:00PM", 10, "09/15/2015");
        expect(testTicket.calculatePrice()).to.equal(10);
    });

    it("calculates senior/child and matinee discounts together", function() {
        var testTicket = new Ticket("testName", "3:00PM", 10, "09/15/2015");
        expect(testTicket.calculatePrice()).to.equal(4);
    });
});
