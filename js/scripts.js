function Ticket(title, showTime, age, showDate){
    this.title = title;
    this.showTime = showTime;
    this.age = age;
    this.showDate = showDate;
}

Ticket.prototype.calculatePrice = function() {
    var price = 12;
    var hour = parseInt(this.showTime[0])
    if((hour >= 2) && (hour < 5)){
        price *= 0.5;
    }

    if((this.age >= 65) || (this.age <= 10)){
        price -= 2;
    }

    return price;
};

$(document).ready(function() {
    $("form#new-ticket").submit(function(event) {
        event.preventDefault();

        var inputtedTitle = $("select#new-title").val();
        var inputtedShowTime = $("select#new-show-time").val();
        var inputtedAge = parseInt($("input#new-age").val());
        var inputtedShowDate = $("input#new-show-date").val();

        var newTicket = new Ticket(inputtedTitle, inputtedShowTime, inputtedAge, inputtedShowDate);

        var price = newTicket.calculatePrice();

        $("h4#price-header").show();
        $("span#price").text(price);
    });
});
