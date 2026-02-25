/**
 * Local demo dataset of hotels used across the app.
 * Each hotel object fields:
 * - id: numeric identifier
 * - name: display name
 * - location: city/country label
 * - summary: short description shown in cards
 * - fullDescription: detailed description for the detail page
 * - price: nightly price in USD
 * - rating: 0-5 rating value
 * - category: grouping label (e.g., Luxury, Boutique)
 * - image: image URL for hero/card
 * - coordinates: { lat, lng } used for map links
 * - mapUrl: prebuilt Google Maps link
 */
export const hotels = [
    {
        id: 1,
        name: "The Azure Vault",
        location: "Santorini, Greece",
        summary: "Experience cliffside luxury with infinity pools overlooking the Aegean Sea.",
        fullDescription: `Perched on the iconic cliffs of Oia, The Azure Vault is a masterpiece of Cycladic architecture. This hotel offers guests private heated infinity pools, 24-hour personalized butler service, and an underground spa carved into volcanic rock.`,
        price: 450,
        rating: 4.9,
        category: "Luxury",
        image: "https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3Ds",
        coordinates: { lat: 36.4618, lng: 25.3753 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=36.4618,25.3753"
    },
    {
        id: 2,
        name: "Urban Nest",
        location: "Tokyo, Japan",
        summary: "Minimalist design meets high-tech comfort in the heart of Shibuya.",
        fullDescription: `Urban Nest redefines the city hotel experience. Located just minutes from the famous Shibuya Crossing, this boutique hotel features smart-glass windows, voice-controlled room settings, and a rooftop bar.`,
        price: 180,
        rating: 4.7,
        category: "Boutique",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&h=800&auto=format&fit=crop",
        coordinates: { lat: 35.6581, lng: 139.7017 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=35.6581,139.7017"
    },
    {
        id: 3,
        name: "Cedar Ridge Lodge",
        location: "Aspen, USA",
        summary: "A cozy ski-in/ski-out retreat with roaring fireplaces and mountain views.",
        fullDescription: `Nestled at the base of the Silver Queen Gondola, Cedar Ridge Lodge is a sanctuary for winter sports enthusiasts. The lodge features hand-carved cedar beams and a massive floor-to-ceiling stone fireplace.`,
        price: 320,
        rating: 4.8,
        category: "Mountain",
        image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
        coordinates: { lat: 39.1911, lng: -106.8175 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=39.1911,-106.8175"
    },
    {
        id: 4,
        name: "Marigold Manor",
        location: "London, UK",
        summary: "Classic Victorian elegance with modern amenities and a private garden.",
        fullDescription: `A restored Victorian townhouse in Kensington, Marigold Manor blends 19th-century charm with 21st-century luxury. Guests can enjoy traditional afternoon tea in the private walled garden.`,
        price: 290,
        rating: 4.5,
        category: "Classic",
        image: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
        coordinates: { lat: 51.5014, lng: -0.1905 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=51.5014,-0.1905"
    },
    {
        id: 5,
        name: "The Neon Palms",
        location: "Miami, USA",
        summary: "Vibrant Art Deco vibes just steps away from the South Beach sand.",
        fullDescription: `Located in the heart of the Art Deco District, The Neon Palms captures the electric spirit of Miami Beach. With pastel-hued interiors and a retro-styled poolside lounge.`,
        price: 210,
        rating: 4.3,
        category: "Beach",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
        coordinates: { lat: 25.7825, lng: -80.1301 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=25.7825,-80.1301"
    },
    {
        id: 6,
        name: "Sahara Sands Resort",
        location: "Marrakech, Morocco",
        summary: "A desert oasis featuring traditional riad architecture and a luxury spa.",
        fullDescription: `Just outside the bustling Medina, Sahara Sands Resort is a sprawling oasis set amidst lush olive groves. The resort features a massive turquoise central pool and intricately tiled courtyards.`,
        price: 250,
        rating: 4.6,
        category: "Resort",
        image: "https://images.unsplash.com/photo-1729717949780-46e511489c3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcmVzb3J0fGVufDB8fDB8fHww",
        coordinates: { lat: 31.6295, lng: -7.9811 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=31.6295,-7.9811"
    },
    {
        id: 7,
        name: "Emerald Bay Lodge",
        location: "Lake Tahoe, USA",
        summary: "Rustic luxury with direct access to the crystal-clear waters of Lake Tahoe.",
        fullDescription: `Experience the grandeur of the Sierras at Emerald Bay Lodge. Featuring floor-to-ceiling windows, private boat docks, and locally sourced pine interior, this lodge offers a seamless blend of outdoor adventure and refined comfort.`,
        price: 380,
        rating: 4.8,
        category: "Lakeside",
        image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcmVzb3J0fGVufDB8fDB8fHww",
        coordinates: { lat: 38.9542, lng: -120.1105 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=38.9542,-120.1105"
    },
    {
        id: 8,
        name: "The Velvet Rose",
        location: "Paris, France",
        summary: "Intimate Parisian charm in the heart of Saint-Germain-des-Prés.",
        fullDescription: `The Velvet Rose is a romantic sanctuary steps away from the Seine. With silk wall coverings, antique furnishings, and a hidden courtyard garden, it captures the timeless elegance of the City of Light.`,
        price: 410,
        rating: 4.6,
        category: "Classic",
        image: "https://images.unsplash.com/photo-1660839638332-93ea03e0f865?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcmVzb3J0fGVufDB8fDB8fHww",
        coordinates: { lat: 48.8546, lng: 2.3353 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=48.8546,2.3353"
    },
    {
        id: 9,
        name: "Nordic Silence",
        location: "Reykjavik, Iceland",
        summary: "Sleek Scandinavian design perfectly positioned for viewing the Northern Lights.",
        fullDescription: `Set against the dramatic Icelandic landscape, Nordic Silence offers glass-roofed cabins and geothermal hot tubs. Its minimalist aesthetic allows the natural beauty of the aurora borealis to take center stage.`,
        price: 340,
        rating: 4.9,
        category: "Modern",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&h=800&auto=format&fit=crop",
        coordinates: { lat: 64.1265, lng: -21.8174 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=64.1265,-21.8174"
    },
    {
        id: 10,
        name: "Banyan Grove Resort",
        location: "Bali, Indonesia",
        summary: "A tropical sanctuary of private villas nestled within lush jungle canopies.",
        fullDescription: `Surround yourself with the sounds of nature at Banyan Grove. Each villa features a private plunge pool, open-air rain showers, and traditional Balinese craftsmanship, offering an unparalleled spiritual retreat.`,
        price: 280,
        rating: 4.7,
        category: "Tropical",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&h=800&auto=format&fit=crop",
        coordinates: { lat: -8.3405, lng: 115.092 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=-8.3405,115.092"
    },
    {
        id: 11,
        name: "The Iron Gate",
        location: "Berlin, Germany",
        summary: "Industrial chic meets modern luxury in this converted historical warehouse.",
        fullDescription: `Located in the vibrant Mitte district, The Iron Gate features exposed brickwork, 20-foot ceilings, and contemporary art installations. It's the perfect base for exploring the city's creative heart.`,
        price: 195,
        rating: 4.4,
        category: "Boutique",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&h=800&auto=format&fit=crop",
        coordinates: { lat: 52.5200, lng: 13.4050 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=52.5200,13.4050"
    },
    {
        id: 12,
        name: "Cape Serenity",
        location: "Cape Town, South Africa",
        summary: "Breathtaking views of Table Mountain and the Atlantic Ocean.",
        fullDescription: `Cape Serenity is perched above the Atlantic seaboard, offering world-class dining and a panoramic infinity pool. Experience the best of Cape Town's hospitality and natural beauty in one place.`,
        price: 310,
        rating: 4.8,
        category: "Coastal",
        image: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcmVzb3J0fGVufDB8fDB8fHww",
        coordinates: { lat: -33.9249, lng: 18.4241 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=-33.9249,18.4241"
    }
];