export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveles in exploration',
        icon: '✈',
        people: '1 People'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two traveles in tandem',
        icon: '🥂',
        people: '2 People',
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '⛵',
        people: '5 to 10 People'
    }
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰'
    },
    {
        id: 1,
        title: 'Luxury',
        desc: "Don't worry about cost",
        icon: '💸'
    },
]

export const AI_PROMPT = `
Generate travel plan for Location: {location}, for {totalDays} Days for 3 people with a moderate budget, give me a hotels options list with hotelName, hotelAddress, price, geo coordinates, rating, descriptions and suggest itinerary with placeName, placeDetails, geo coordinates, ticket pricing, time to travel each of the location with best time in the day in the time format to visit the location for {totalDays} days in JSON format and JSON format should be in the same manner as in the prompt like as first you will give me hotelOptions and after that you will give me day wise itineraries list that I have to visit and structure will be like this {
"hotelOptions": [
{
"hotelName": "The Venetian Resort Las Vegas",
"hotelAddress": "3355 Las Vegas Blvd S, Las Vegas, NV 89109",
"price": "$200-$350/night",
"geoCoordinates": "36.1004° N, 115.1724° W",
"rating": 4.5,
"description": "Luxurious resort with a replica of Venice, including canals, gondolas, and St. Mark's Square."
},
{
"hotelName": "The Wynn Las Vegas",
"hotelAddress": "3131 Las Vegas Blvd S, Las Vegas, NV 89109",
"price": "$250-$450/night",
"geoCoordinates": "36.1097° N, 115.1730° W",
"rating": 4.7,
"description": "Upscale resort known for its elegant rooms, world-class dining, and luxurious spa."
},
{
"hotelName": "The Bellagio",
"hotelAddress": "3600 Las Vegas Blvd S, Las Vegas, NV 89109",
"price": "$220-$400/night",
"geoCoordinates": "36.1007° N, 115.1732° W",
"rating": 4.6,
"description": "Iconic resort with a beautiful botanical garden, elegant fountains, and upscale shopping."
},
{
"hotelName": "The LINQ Hotel + Experience",
"hotelAddress": "3535 Las Vegas Blvd S, Las Vegas, NV 89109",
"price": "$150-$250/night",
"geoCoordinates": "36.0992° N, 115.1708° W",
"rating": 4.0,
"description": "Modern hotel with a vibrant atmosphere, offering entertainment, dining, and shopping options."
},
{
"hotelName": "The Cosmopolitan of Las Vegas",
"hotelAddress": "3708 Las Vegas Blvd S, Las Vegas, NV 89109",
"price": "$280-$500/night",
"geoCoordinates": "36.1027° N, 115.1706° W",
"rating": 4.8,
"description": "Stylish hotel with trendy restaurants, bars, and nightclubs, known for its rooftop pool."
}
],
"itinerary": [
{
"day": "Day 1",
"activities": [
{
"placeName": "The Strip",
"placeDetails": "Explore the iconic Las Vegas Strip, lined with world-class casinos, resorts, and entertainment venues. Stroll down the boulevard, admire the architecture, and experience the dazzling lights.",
"geoCoordinates": "36.1003° N, 115.1728° W",
"ticketPricing": "Free",
"timeToTravel": "10:00 AM - 12:00 PM"
},
{
"placeName": "Bellagio Fountains",
"placeDetails": "Witness the spectacular Bellagio Fountains show, featuring synchronized water, music, and lights. Enjoy the free performance every 15 minutes.",
"geoCoordinates": "36.1008° N, 115.1733° W",
"ticketPricing": "Free",
"timeToTravel": "1:00 PM - 3:00 PM"
},
{
"placeName": "High Roller Observation Wheel",
"placeDetails": "Experience breathtaking panoramic views of Las Vegas from the world's tallest observation wheel. Enjoy a 30-minute ride and soak in the cityscape.",
"geoCoordinates": "36.0996° N, 115.1711° W",
"ticketPricing": "$35-$50",
"timeToTravel": "4:00 PM - 8:00 PM"
}
]
},
{
"day": "Day 2",
"activities": [
{
"placeName": "Hoover Dam",
"placeDetails": "Take a day trip to the iconic Hoover Dam, a marvel of engineering located just a short drive from Las Vegas. Explore the dam, learn about its history, and enjoy stunning views of the Colorado River.",
"geoCoordinates": "36.0237° N, 114.9307° W",
"ticketPricing": "$30",
"timeToTravel": "9:00 AM - 12:00 PM"
},
{
"placeName": "Red Rock Canyon National Conservation Area",
"placeDetails": "Escape the city and explore the rugged beauty of Red Rock Canyon, featuring stunning red rock formations, hiking trails, and scenic drives.",
"geoCoordinates": "36.1457° N, 115.2008° W",
"ticketPricing": "$15",
"timeToTravel": "1:00 PM - 5:00 PM"
}
]
},
{
"day": "Day 3",
"activities": [
{
"placeName": "The Venetian and The Palazzo",
"placeDetails": "Visit the luxurious Venetian and Palazzo resorts, featuring a replica of Venice, canals, gondolas, and upscale shopping and dining options.",
"geoCoordinates": "36.1004° N, 115.1724° W",
"ticketPricing": "Free",
"timeToTravel": "10:00 AM - 2:00 PM"
},
{
"placeName": "The Neon Museum",
"placeDetails": "Explore the Neon Museum, a collection of historic neon signs from Las Vegas's past. Take a guided tour and learn about the city's neon history.",
"geoCoordinates": "36.1586° N, 115.1318° W",
"ticketPricing": "$25",
"timeToTravel": "3:00 PM - 5:00 PM"
},
{
"placeName": "Fremont Street Experience",
"placeDetails": "Experience the lively Fremont Street Experience, featuring a giant video screen canopy, live music, street performers, and a vibrant atmosphere.",
"geoCoordinates": "36.1676° N, 115.1424° W",
"ticketPricing": "Free",
"timeToTravel": "7:00 PM - 10:00 PM"
}
]
}
]
}.
`