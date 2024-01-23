const express = require("express");
const app_booking = express();
app_booking.use(express.json())
const PORT = 3000;
const room_booking = [
    {
        id: 0,
        No_0f_Seats: 10,
        Amenities: "Ac,Television ,wifi",
        Price_per_hr: 1400
    },
    {
        id: 1,
        No_0f_Seats: 1,
        Amenities: "wifi",
        Price_per_hr: 800
    },
    {
        id: 2,
        No_0f_Seats: 8,
        Amenities: "Ac",
        Price_per_hr: 1000
    },
    {
        id: 3,
        No_0f_Seats: 20,
        Amenities: "Ac,stage,projector,Speakers and mics",
        Price_per_hr: 3400
    },
    {
        id: 4,
        No_0f_Seats: 10,
        Amenities: "Ac,Television ,wifi",
        Price_per_hr: 1400
    },
    {
        id: 5,
        No_0f_Seats: 12,
        Amenities: "Ac,Television ,wifi",
        Price_per_hr: 1400
    },
    {
        id: 6,
        No_0f_Seats: 40,
        Amenities: "Ac,Television ,wifi",
        Price_per_hr: 1000
    },
    {
        id: 7,
        No_0f_Seats: 30,
        Amenities: "Ac,Television ,wifi",
        Price_per_hr: 1900
    },
    {
        id: 8,
        No_0f_Seats: 26,
        Amenities: "Ac,wifi",
        Price_per_hr: 1400
    },
    {
        id: 9,
        No_0f_Seats: 60,
        Amenities: "Ac,Television ,wifi,stage,projector,Speakers and mics",
        Price_per_hr: 8900
    }
]
var customer = [
    {

        Name: "John Kevin",
        Date: "17/01/2024",
        StartTime: "12:00pm",
        EndTime: "11:00am",
        Roomid: [0, 1]
    },
    {

        Name: "Rathan",
        Date: "17/01/2024",
        StartTime: "12:00pm",
        EndTime: "11:00am",
        Roomid: [2, 3]

    },
    {

        Name: "Bill",
        Date: "17/01/2024",
        StartTime: "12:00pm",
        EndTime: "11:00am",
        Roomid: [5, 6, 7, 9]
    }
]

// Hall Booking codes starts here

// The below codes is to Get all data
app_booking.get("/", (req, res) => {
    try {
        res.status(200).send({
            Feedback: "Data connecting successfully",
            room_booking
        })
    } catch (error) {
        res.status(500).send({
            Feedback: "Connection Failed"
        })
    }
})
// The below mentioned codes are used to add a New Room to room_booking
app_booking.post("/createrooms", (req, res) => {
    try {
        var data = req.body
        room_booking.push(data)
        res.status(200).send({
            Feedback: "Data connecting successfully",
            data
        })
    } catch (error) {
        res.status(500).send({
            Feedback: "Connection Failed"
        })
    }

})
// The below mentioned code is used to get a particular data using params
app_booking.get("/api/:id", (req, res) => {

    try {
        let id = Number(req.params.id)


        res.status(200).send({
            Feedback: "Data connecting successfully",
            room_booking: room_booking[id]
        })
    } catch (error) {
        res.status(500).send({
            Feedback: "Connection Failed"
        })
    }

})
// Hall Booking codes ends here






// Booked customer Logic below.

app_booking.get("/booked_rooms", (req, res) => {

    try {
        var Name = req.query.Name;
        let users = customer.filter(function (acc) {
            return acc.Name == Name
        })


        let rooms = users[0].Roomid

        let roomdetails = room_booking.filter((booking, index) => {
            console.log(index);
            return rooms.includes(index)
        })


        res.status(200).send({
            Feedback: "Data connecting successfully",
            roomdetails, Name
        })


    } catch (error) {
        res.status(500).send({
            Feedback: "Connection Failed"
        })
    }

})


app_booking.listen(PORT, () => console.log(`server connected successfully to ${PORT}`))