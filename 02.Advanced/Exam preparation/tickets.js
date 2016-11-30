function Tickets(description, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(tickets, criteria) {
            switch (criteria) {
                case 'destination':
                    return tickets.sort((t1, t2) => t1.destination.localeCompare(t2.destination));
                case 'price':
                    return tickets.sort((t1, t2) => t1.price - t2.price);
                default:
                    return tickets.sort((t1, t2) => t1.status.localeCompare(t2.status));
            }
        }


    }
    let data = description.map(description => {
        description = description.split('|');
        return new Ticket(description[0], Number(description[1]), description[2])
    });
    return Ticket.sort(data, criteria);
}
console.log(Tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));





