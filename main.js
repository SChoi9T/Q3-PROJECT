    // Regular Fare
    function regular(){
        let stationValues = {
            "North Avenue": 4.4,
            "Quezon Avenue": 3.5,
            "Kamuning": 4.3,
            "Araneta Center-Cubao": 3.9,
            "Santolan-Annapolis": 3.2,
            "Ortigas": 4.0,
            "Shaw Boulevard": 4.6,
            "Boni": 3.4,
            "Guadalupe": 2.9,
            "Buendia": 3.8,
            "Ayala": 4.1,
            "Magallanes": 2.7,
            "Taft Avenue": 4.2,
        };

        var fromStation = document.getElementById("from").value;
        var toStation = document.getElementById("to").value;

        var baseFare = 13;
        var perKmRate = 2;

        let distance = Math.abs(stationValues[fromStation] - stationValues[toStation]);
        let totalFare = baseFare + (distance * perKmRate);

        document.getElementById("price").innerHTML = "TICKET PRICE: " + totalFare.toFixed(2) + " PHP";
    }

    // Discounted Fare
    function discounted(){
        let stationValues = {
            "North Avenue": 4.4,
            "Quezon Avenue": 3.5,
            "Kamuning": 4.3,
            "Araneta Center-Cubao": 3.9,
            "Santolan-Annapolis": 3.2,
            "Ortigas": 4.0,
            "Shaw Boulevard": 4.6,
            "Boni": 3.4,
            "Guadalupe": 2.9,
            "Buendia": 3.8,
            "Ayala": 4.1,
            "Magallanes": 2.7,
            "Taft Avenue": 4.2,
        };

        var fromStation = document.getElementById("from").value;
        var toStation = document.getElementById("to").value;

        var baseFare = 13;
        var perKmRate = 2;

        let distance = Math.abs(stationValues[fromStation] - stationValues[toStation]);
        let totalFare = baseFare + (distance * perKmRate);

        let discountedFare = totalFare * 0.80;

        document.getElementById("price").innerHTML = "TICKET PRICE (20% off): " + discountedFare.toFixed(2) + " PHP";
    }

    // Buy Ticket
    function buy(){
        window.alert("Your ticket has been sent to your email!");
        location.reload();
    }

    // Send Message
    function contact(){
        window.alert("Your message has been sent successfully!");
    }
