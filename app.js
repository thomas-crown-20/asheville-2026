/* ============================================================
   ASHEVILLE 2026 TRIP PWA
   Single-file data + render layer
   To reuse for future trips: edit TRIP_DATA below, swap hero
   ============================================================ */

const TRIP_DATA = {
  trip: {
    name: "Asheville 2026",
    dates: "Jun 28 – Jul 1, 2026",
    party: "4 travelers · 1 minivan",
    origin: "West Chester, OH",
    destination: "Asheville, NC",
    nextStop: "Hilton Head, SC"
  },

  // ===================== DRIVE =====================
  drive: {
    overview: "About 5 hours 15 minutes of driving from West Chester to Asheville, mostly down I-75 → I-26. We leave Sunday around noon (12:00 pm) from Beckett Ridge and arrive in Biltmore Village around 5:30–6:00 pm with one good lunch/leg-stretch stop.",
    distance: "338 miles",
    duration: "~5h 15min driving + 45min stop",
    routeName: "I-75 S → I-40 E → I-26 E",
    steps: [
      {
        marker: "A",
        title: "Beckett Ridge / West Chester, OH",
        meta: "12:00 PM · Departure",
        desc: "Mom's house, near Beckett Ridge Golf Course. Top off the tank at the Costco or Speedway off Tylersville Rd before getting on I-75 S."
      },
      {
        marker: "B",
        title: "Lunch stop · Corbin, KY",
        meta: "~2:15 PM · 130 mi from start",
        desc: "Sanders Café (the original KFC) is in Corbin — a fun stop right off I-75 if folks want it. Or skip the kitsch and try Dixie Café for Southern plate lunches a few exits up. Clean restrooms either way."
      },
      {
        marker: "C",
        title: "Knoxville, TN",
        meta: "~3:45 PM · 215 mi · 2/3 of the way",
        desc: "I-75 ends, you'll merge onto I-40 E. From here the drive gets prettier — into the Smokies foothills. Bathroom break + drinks at the Buc-ee's in Sevierville if you want the experience (a few miles off I-40)."
      },
      {
        marker: "D",
        title: "Through the Pigeon River Gorge",
        meta: "~4:30 PM · scenic mile",
        desc: "I-40 winds through one of the most beautiful interstate stretches in the country. Watch for the NC welcome sign. Mom-in-law will love this section — just looking out the window."
      },
      {
        marker: "E",
        title: "Asheville · Biltmore Village",
        meta: "~5:30–6:00 PM · Arrival",
        desc: "Exit I-26 at Biltmore Ave. Check in, freshen up, walk to dinner in the village. Easy first night — no driving required."
      }
    ],
    returnLeg: {
      title: "Wednesday morning · onward to Hilton Head",
      steps: [
        { time: "8:00 AM", what: "Slow breakfast at the hotel or Biscuit Head" },
        { time: "9:30 AM", what: "Roll out of Asheville · take I-26 E toward Columbia" },
        { time: "12:30 PM", what: "Lunch stop in Columbia, SC (Lizard's Thicket for Southern, or any local pick)" },
        { time: "3:00–4:00 PM", what: "Arrive Hilton Head · check in" }
      ],
      distance: "295 miles · ~5h 0min driving"
    }
  },

  // ===================== LODGING =====================
  lodging: [
    {
      id: "ac-biltmore",
      name: "AC Hotel Asheville Biltmore Village",
      tagline: "Modern · Marriott · indoor pool",
      tags: ["Recommended", "Biltmore Village", "Modern"],
      neighborhood: "biltmore-village",
      price: 138, // est. per night nightly base
      nights: 3,
      estTotal: "≈ $510–620 (2 rooms × 3 nights)",
      desc: "Newly renovated Marriott AC right in the heart of Biltmore Village — a 5-minute walk to the Biltmore gates, dinner restaurants in the village, and quiet at night. Clean, modern, minimalist rooms. Indoor pool + hot tub (year-round), great AC Kitchen breakfast (European-style spread), and the rooftop AC Lounge has views. Two king rooms side-by-side or a one-bedroom suite + standard king for the hangout vibe.",
      amenities: ["Indoor pool", "Hot tub", "Fitness center", "AC Kitchen breakfast (paid)", "Walking distance to Biltmore", "EV charging", "Quiet at night"],
      address: "10 Wedgefield Dr, Asheville, NC 28803",
      phone: "+1 828-258-2522",
      website: "https://www.marriott.com/en-us/hotels/avlsa-ac-hotel-asheville-biltmore-village/",
      booking: "https://www.marriott.com/en-us/hotels/avlsa-ac-hotel-asheville-biltmore-village/rooms/",
      why: "Best balance for the group: new, clean, well-priced, walk to dinner. Closest to your stated preference for newer/nicer without paying $500+/night.",
      featured: true
    },
    {
      id: "courtyard-biltmore",
      name: "Courtyard by Marriott Biltmore Village",
      tagline: "Solid mid-tier · indoor pool",
      tags: ["Biltmore Village", "Value"],
      neighborhood: "biltmore-village",
      price: 126,
      nights: 3,
      estTotal: "≈ $470–560 (2 rooms × 3 nights)",
      desc: "A reliable Courtyard within walking distance of the Biltmore gates and village restaurants. Slightly older feel than the AC across the street, but very well-reviewed (9.1/10 guest rating), with indoor pool, fitness center, and a restaurant. A solid Plan B if AC is booked or if you want a few extra dollars in the kitty for dinners.",
      amenities: ["Indoor pool", "Fitness center", "On-site bistro", "Walking distance to Biltmore"],
      address: "1 Buckstone Pl, Asheville, NC 28803",
      phone: "+1 828-281-0041",
      website: "https://www.marriott.com/en-us/hotels/avlbm-courtyard-asheville-biltmore-village/"
    },
    {
      id: "homewood-suites",
      name: "Homewood Suites by Hilton Asheville-Tunnel Rd",
      tagline: "All suites · kitchens · free breakfast",
      tags: ["Suite", "Free breakfast", "East Asheville"],
      neighborhood: "east-asheville",
      price: 165,
      nights: 3,
      estTotal: "≈ $500–600 (2 suites × 3 nights)",
      desc: "Every room is a suite — separate living room, full kitchen, fridge, microwave, dining table. This is your best bet if you want the 'hang out and play games' room without renting a house. Free hot breakfast every morning is a real money saver for four people. About 8 minutes from Biltmore, 10 minutes from downtown. Less pretty location than Biltmore Village, but the rooms make up for it.",
      amenities: ["All suites w/ kitchen", "Free hot breakfast", "Indoor pool", "Free parking", "Pet friendly"],
      address: "87 Tunnel Rd, Asheville, NC 28805",
      phone: "+1 828-252-2522",
      website: "https://www.hilton.com/en/hotels/avlhwhw-homewood-suites-asheville/",
      why: "Best for the 'living room hangout' need. Two one-bedroom suites side-by-side gives each couple privacy + a real common space."
    },
    {
      id: "residence-inn-biltmore",
      name: "Residence Inn Asheville Biltmore",
      tagline: "Studios &amp; suites with kitchens",
      tags: ["Suite", "Free breakfast", "Biltmore Village"],
      neighborhood: "biltmore-village",
      price: 175,
      nights: 3,
      estTotal: "≈ $530–630 (2 suites × 3 nights)",
      desc: "All-suite Marriott in Biltmore Village. Each room has a full kitchen and sitting area, free hot breakfast included, outdoor pool. Walk to dinner in the village; 5 min drive to Biltmore Estate. Great middle-ground option that has both the suite layout AND the desirable location.",
      amenities: ["All suites w/ kitchen", "Free hot breakfast", "Outdoor pool", "Walk to Biltmore Village restaurants"],
      address: "701 Biltmore Ave, Asheville, NC 28803",
      phone: "+1 828-281-3361",
      website: "https://www.marriott.com/en-us/hotels/avlri-residence-inn-asheville-biltmore/"
    },
    {
      id: "vrbo-mountain-cabin",
      name: "VRBO · Mountaintop Log Cabin (Arden)",
      tagline: "Whole 3BR cabin · panoramic views · 20 min to Biltmore",
      tags: ["Whole house", "Mountain views", "Private"],
      neighborhood: "arden",
      price: 350,
      nights: 3,
      estTotal: "≈ $1,200–1,400 total (3 nights + fees)",
      desc: "Whole-home rental for total privacy. Three bedrooms, awe-inspiring mountain views from the deck, 300-acre nature preserve next door, gas fire pit, full kitchen, washer/dryer. 15 minutes to Biltmore Village, 20 to downtown. The trade-off: 20 min drive each way to dinner, and one bathroom less convenient than two hotel rooms.",
      amenities: ["3 bedrooms", "Mountain views", "Fire pit", "Full kitchen", "Wash/dry", "Wraparound deck"],
      address: "Arden, NC (~20 min S of downtown Asheville)",
      website: "https://www.vrbo.com/713381",
      why: "Best if you want a 'lodge' feel — porch coffee, no neighbors, big mountain views. Worth considering as a splurge but adds driving time."
    }
  ],

  // ===================== ITINERARY =====================
  itinerary: [
    {
      day: 1,
      date: "Sun · Jun 28",
      title: "Drive Down & <em>Settle In</em>",
      items: [
        { time: "11:30 AM", title: "Church", detail: "Service in Waynesville. Light brunch or coffee on the way out." },
        { time: "12:00 PM", title: "Depart West Chester", detail: "From Beckett Ridge area. I-75 South. Bathroom now, snacks loaded." },
        { time: "2:15 PM", title: "Lunch stop · Corbin, KY", detail: "Sanders Café (original KFC, fun) or Dixie Café. ~30–45 min stop." },
        { time: "5:30 PM", title: "Arrive Biltmore Village", detail: "Check in. Unpack a little, freshen up, walk the village." },
        { time: "7:00 PM", title: "Dinner · The Corner Kitchen", detail: "Steps from the hotel in Biltmore Village. Famous Reuben, comfortable Southern fare. Reserve in advance.", note: "Reserve early — this is the best spot in walking distance." },
        { time: "9:00 PM", title: "Hot tub & turn in", detail: "Long drive done. Hot tub at the hotel or evening porch. Early to bed — Biltmore tomorrow." }
      ]
    },
    {
      day: 2,
      date: "Mon · Jun 29",
      title: "Blue Ridge <em>Parkway Day</em>",
      items: [
        { time: "8:00 AM", title: "Breakfast · Biscuit Head", detail: "Cathouse biscuits with shiitake mushroom gravy + a jam bar. A true Asheville thing. Beat the line by arriving by 8." },
        { time: "9:30 AM", title: "Folk Art Center (Milepost 382.5)", detail: "Free entry. Beautiful crafts of the Southern Highland Craft Guild — quilts, pottery, woodturning. Plenty of seating, AC, easy walking.", note: "Great accessibility for mom-in-law. Quiet morning crowd." },
        { time: "11:00 AM", title: "Blue Ridge Parkway scenic drive south", detail: "From the Folk Art Center, drive south to the NC Arboretum. Pull off at the overlooks. Pisgah views around milepost 408." },
        { time: "12:30 PM", title: "Lunch · Pisgah Inn (if open) or back in town", detail: "Pisgah Inn at 5,000 ft has the only restaurant on the Parkway. Reserve! If too far/closed, head back for lunch at Tupelo Honey (Biltmore Village) or Bear's Smokehouse." },
        { time: "2:30 PM", title: "North Carolina Arboretum", detail: "Stunning bonsai garden, easy paved paths, golf-cart shuttle available if walking is too much. Pretty in any weather.", note: "Free shuttle around the gardens — easy on the legs." },
        { time: "5:00 PM", title: "Back to the hotel · rest", detail: "Hot tub, balcony, board games. Get mom-in-law's afternoon rest in." },
        { time: "6:30 PM", title: "Dinner · Buxton Hall Barbecue", detail: "Whole-hog Eastern Carolina BBQ. Their smoky pimento cheese is famous. 10 min drive. No reservations — go a little early.", note: "Casual + delicious + a true local spot." },
        { time: "8:30 PM", title: "Dessert · The Hop Ice Cream", detail: "Local handmade ice cream since 1978. Two locations — pick the closest. Sit, walk, enjoy." }
      ]
    },
    {
      day: 3,
      date: "Tue · Jun 30",
      title: "Biltmore <em>Estate Day</em>",
      items: [
        { time: "7:30 AM", title: "Breakfast at the hotel", detail: "Light breakfast — there's a lot of walking today. Coffee, bagels, fruit." },
        { time: "9:00 AM", title: "Arrive Biltmore · check in at Reception", detail: "Pre-buy tickets online (saves $10/each). Pick House & Grounds with audio tour. Tuesdays = $18 off for 65+ on adult admission — Mom can save here.", note: "Wheelchairs are free at the entrance — even if not using one full-time, it's a smart fallback for Mom." },
        { time: "9:30 AM", title: "Biltmore House tour", detail: "Self-guided with audio tour (1.5–2 hrs). Only the first 2 floors are wheelchair-accessible — the basement & upper floors require stairs. Take the elevator where offered. Plenty of benches.", note: "Go early — first tour times have the smallest crowds." },
        { time: "11:30 AM", title: "Gardens & Conservatory", detail: "Easy garden paths. The Conservatory has benches, orchids, and great photo spots. Skip strenuous trails." },
        { time: "12:30 PM", title: "Lunch · Stable Café (on Biltmore grounds)", detail: "Tucked into the original horse stalls. The trout BLT is signature, but the chicken salad is the safe bet. No reservation needed." },
        { time: "2:00 PM", title: "Antler Hill Village", detail: "Free shuttle from the House parking lot. Browse the shops, the Outdoor Adventure Center, the Farm (animals to see). The dairy bar has ice cream — yes please.", note: "Easy, sit-down friendly. Park in shade." },
        { time: "4:00 PM", title: "Back to hotel · rest before dinner", detail: "Pool, hot tub, balcony time. Long day on the feet." },
        { time: "7:00 PM", title: "Dinner · Rhubarb (downtown)", detail: "Farm-to-table from chef John Fleer. Beautiful seasonal menu. 10 min from hotel; valet park or use the deck across the street. Reserve in advance.", note: "Special-occasion-worthy. Calmer/quieter than the busier downtown spots." },
        { time: "9:00 PM", title: "Donut nightcap · Hole Doughnuts", detail: "Made-to-order, fried-while-you-wait. Locals call them the best in the South. Or grab a box to-go for tomorrow's drive." }
      ]
    },
    {
      day: 4,
      date: "Wed · Jul 1",
      title: "Slow Morning <em>& Onward</em>",
      items: [
        { time: "8:00 AM", title: "Breakfast at hotel · pack up", detail: "Light packing-day breakfast." },
        { time: "9:00 AM", title: "Quick stop · Black Mountain village", detail: "15 min east on I-40. Walkable downtown, antique shops, a hot coffee. Easy 45-min stop without overdoing it. Hit Key City Antiques + a peek at the Old Depot.", note: "Optional — skip if everyone is ready to push for Hilton Head." },
        { time: "10:30 AM", title: "Roll south toward Hilton Head", detail: "Back on I-26 E → I-95 S → 278 E. About 5 hrs to Hilton Head with one lunch stop." },
        { time: "12:30 PM", title: "Lunch · Columbia, SC area", detail: "Lizard's Thicket (local Southern chain done right) or pick on the fly. 30 min stop." },
        { time: "3:30 PM", title: "Arrive Hilton Head!", detail: "Check in (most properties 3–4 PM). Toes in the sand by sunset." }
      ]
    }
  ],

  // ===================== RESTAURANTS =====================
  restaurants: [
    {
      name: "The Corner Kitchen",
      id: "corner-kitchen",
      neighborhood: "biltmore-village",
      mealTypes: ["dinner"],
      cat: "American · Farm-to-table",
      tags: ["Biltmore Village", "Walk from hotel", "Date-night"],
      desc: "The best restaurant inside Biltmore Village. Famous for their Reuben and pepper-grilled Brasstown ribeye. Reservations strongly recommended — book ahead. Note: damaged in Hurricane Helene (Sept 2024) and reopened in 2025 — confirm your reservation directly when booking.",
      address: "3 Boston Way, Asheville, NC 28803",
      phone: "+1 828-274-2439",
      website: "https://www.thecornerkitchen.com",
      meal: "Dinner",
      price: "$$$"
    },
    {
      name: "Rhubarb",
      id: "rhubarb",
      neighborhood: "downtown",
      mealTypes: ["dinner"],
      cat: "Farm-to-table · Fine dining",
      tags: ["Downtown", "Special occasion", "Closed Tue–Wed"],
      desc: "Chef John Fleer's seasonal Southern menu in the heart of downtown. Wood-fired flavors, locally sourced everything, beautiful room. Reserve in advance. ⚠️ Currently open Thursday–Monday only — closed Tuesday and Wednesday. (Day 3 of our trip falls on a Tuesday, so we picked Chestnut instead.)",
      address: "7 SW Pack Square, Asheville, NC 28801",
      phone: "+1 828-785-1503",
      website: "https://www.rhubarbasheville.com",
      meal: "Dinner",
      price: "$$$$"
    },
    {
      name: "The Market Place",
      id: "market-place",
      neighborhood: "downtown",
      mealTypes: ["dinner"],
      cat: "Fine dining · Farm-to-table",
      tags: ["Downtown", "Special occasion", "Since 1979"],
      desc: "Chef William Dissen's inventive menu — produce mostly from within 100 miles of Asheville. A true Asheville classic. Multi-course experience, exceptional service.",
      address: "20 Wall St, Asheville, NC 28801",
      phone: "+1 828-252-4162",
      website: "https://marketplace-restaurant.com",
      meal: "Dinner",
      price: "$$$$"
    },
    {
      name: "12 Bones Smokehouse",
      id: "twelve-bones",
      neighborhood: "arden",
      mealTypes: ["lunch", "dinner"],
      cat: "BBQ · Ribs",
      tags: ["Local legend", "Arden", "No reservations"],
      desc: "The famous brown-sugar or blueberry-chipotle ribs. Smoked turkey sandwich with sugar bacon & brie is underrated. Now open 11am–8pm, 7 days. Note: the original River Arts District location at 5 Riverside Dr did not reopen after Hurricane Helene (Sept 2024) — only the Arden smokehouse/taproom remains.",
      address: "2350 Hendersonville Rd, Arden, NC 28704",
      phone: "+1 828-687-1395",
      website: "https://12bones.com",
      meal: "Lunch · Dinner",
      price: "$$"
    },
    {
      name: "Biscuit Head",
      id: "biscuit-head",
      neighborhood: "west-asheville",
      mealTypes: ["breakfast", "brunch", "lunch"],
      cat: "Breakfast · Southern",
      tags: ["Breakfast", "Iconic Asheville"],
      desc: "Cathouse biscuits the size of your hand, smothered in shiitake mushroom gravy or topped with fried chicken, bologna, and more. The jam bar has dozens of homemade preserves. Lines on weekends — arrive early.",
      address: "733 Haywood Rd, Asheville, NC 28806 (West Asheville location)",
      phone: "+1 828-333-5145",
      website: "https://biscuitheads.com",
      meal: "Breakfast · Lunch",
      price: "$$"
    },
    {
      name: "Stable Café (on Biltmore grounds)",
      id: "stable-cafe",
      neighborhood: "on-biltmore-grounds",
      mealTypes: ["lunch"],
      cat: "Casual · Southern",
      tags: ["Inside Biltmore", "Convenient"],
      desc: "Inside the original Biltmore stables — eat in a horse stall. Signature trout BLT, reliable chicken salad, classic hamburger. Open for lunch only. No reservations.",
      address: "Biltmore Estate, Asheville",
      phone: "+1 800-411-3812",
      website: "https://www.biltmore.com/restaurants/stable-cafe/",
      meal: "Lunch",
      price: "$$"
    },
    {
      name: "Tupelo Honey",
      id: "tupelo-honey",
      neighborhood: "south-asheville",
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      cat: "Southern · Brunch",
      tags: ["Iconic", "Brunch all day"],
      desc: "Asheville's most famous Southern spot — huge buttery biscuits, fried chicken, shrimp & grits. Multiple locations; the South Asheville one is less of a wait than downtown.",
      address: "1829 Hendersonville Rd, Asheville (South location)",
      phone: "+1 828-505-7676",
      website: "https://tupelohoneycafe.com",
      meal: "All day",
      price: "$$"
    },
    {
      name: "Bear's Smokehouse",
      id: "bears-smokehouse",
      neighborhood: "south-slope",
      mealTypes: ["lunch", "dinner"],
      cat: "BBQ · Kansas City style",
      tags: ["South Slope", "Brisket"],
      desc: "KC-style with serious burnt ends and brisket. Patio is excellent. Less of a line than Buxton Hall, just as good in different ways.",
      address: "135 Coxe Ave, Asheville, NC 28801",
      phone: "+1 828-575-2462",
      website: "https://www.bearsbbq.com",
      meal: "Lunch · Dinner",
      price: "$$"
    },
    {
      name: "Sunny Point Café",
      id: "sunny-point",
      neighborhood: "west-asheville",
      mealTypes: ["breakfast", "brunch", "lunch"],
      cat: "Brunch · Southern",
      tags: ["West Asheville", "Local favorite"],
      desc: "Beloved neighborhood spot for breakfast & brunch — shrimp & grits, Southern Benedict, fresh-squeezed OJ. Quieter than the chain Asheville brunch spots.",
      address: "626 Haywood Rd, Asheville, NC 28806",
      phone: "+1 828-252-0055",
      website: "https://sunnypointcafe.com",
      meal: "Brunch",
      price: "$$"
    },
    {
      name: "Chestnut",
      id: "chestnut",
      neighborhood: "downtown",
      mealTypes: ["dinner"],
      cat: "American · Refined",
      tags: ["Downtown", "Reliable special meal"],
      desc: "Classic American with a creative seasonal twist. Sister restaurant of Corner Kitchen. Crowd-pleaser menu (everyone finds something) with the quality of a fine-dining spot.",
      address: "48 Biltmore Ave, Asheville, NC 28801",
      phone: "+1 828-575-2667",
      website: "https://chestnutasheville.com",
      meal: "Dinner",
      price: "$$$"
    },
    {
      name: "Pisgah Inn Restaurant",
      id: "pisgah-inn",
      neighborhood: "parkway",
      mealTypes: ["breakfast", "lunch", "dinner"],
      cat: "American · Mountain views",
      tags: ["Blue Ridge Parkway", "Seasonal Apr–Oct"],
      desc: "Only restaurant on the NC Blue Ridge Parkway. At 5,000 ft elevation with floor-to-ceiling mountain views. Operates seasonally April 1 – October 31. Reservations via Resy up to 14 days out — book early for window tables. ⚠️ For Day 2 lunch from the Folk Art Center, the round-trip drive (~45 min each way) is tight — better as a stand-alone breakfast or dinner outing.",
      address: "Blue Ridge Pkwy Milepost 408.6",
      phone: "+1 828-235-8228",
      website: "https://www.pisgahinn.com",
      meal: "Breakfast · Lunch · Dinner",
      price: "$$$"
    }
  ],

  // ===================== TREATS =====================
  treats: [
    {
      name: "The Hop Ice Cream Café",
      id: "hop-ice-cream",
      neighborhood: "north-asheville",
      mealTypes: ["dessert"],
      cat: "Ice cream · Since 1978",
      tags: ["Local since 1978"],
      desc: "Handmade ice cream cafe with both dairy and vegan options. Cozy vibe with a reading nook. Two locations — Merrimon Ave and West Asheville.",
      address: "640 Merrimon Ave, Asheville (North) · or 721 Haywood Rd (West)",
      phone: "+1 828-254-2224",
      website: "https://thehopicecream.com",
      price: "$"
    },
    {
      name: "Ultimate Ice Cream",
      id: "ultimate-ice-cream",
      neighborhood: "north-asheville",
      mealTypes: ["dessert"],
      cat: "Ice cream · Locally made",
      tags: ["North Asheville"],
      desc: "Hand-crafted ice cream on Charlotte Street since the 80s. Flavor of the month always changing. Fresh strawberry, Belgian chocolate, salted caramel — all standouts.",
      address: "1070 Tunnel Rd, Asheville · 195 Charlotte St",
      phone: "+1 828-252-5650",
      website: "https://ultimateicecream.com",
      price: "$"
    },
    {
      name: "Hole Doughnuts",
      id: "hole-doughnuts",
      neighborhood: "west-asheville",
      mealTypes: ["breakfast", "dessert"],
      cat: "Donuts · Fried to order",
      tags: ["West Asheville", "Best in NC"],
      desc: "Hot doughnuts made-to-order. Sesame seed, grapefruit cardamom, almond — every batch is fresh. Locals' top pick. Lines move quickly.",
      address: "168 Haywood Rd, Asheville, NC 28806",
      phone: "+1 828-505-3275",
      website: "https://holedoughnuts.com",
      price: "$"
    },
    {
      name: "Vortex Doughnuts",
      id: "vortex-doughnuts",
      neighborhood: "south-slope",
      mealTypes: ["breakfast", "dessert"],
      cat: "Donuts · Creative",
      tags: ["South Slope", "Half-off Wed"],
      desc: "Inventive doughnut flavors — honey caramel pistachio, beer-glazed pretzel, orange creamsicle. Wednesdays they're half off. Vegan & gluten-free options.",
      address: "32 Banks Ave #106, Asheville, NC 28801",
      phone: "+1 828-552-3010",
      website: "https://vortexdoughnuts.com",
      price: "$"
    },
    {
      name: "Ava's Donuts",
      id: "avas-donuts",
      neighborhood: "south-asheville",
      mealTypes: ["breakfast", "dessert"],
      cat: "Donuts · Classic",
      tags: ["Biltmore Park area", "Get there early"],
      desc: "Locals' favorite for thick, soft, sell-out-fast donuts. Plain glazed, apple fritters, classic flavors done very well. Get there in the morning — they're often gone by 11.",
      address: "1830 Hendersonville Rd, Asheville, NC 28803",
      phone: "+1 828-274-8003",
      price: "$"
    },
    {
      name: "French Broad Chocolate Lounge",
      id: "french-broad",
      neighborhood: "downtown",
      mealTypes: ["dessert"],
      cat: "Chocolates · Desserts",
      tags: ["Downtown", "Iconic Asheville"],
      desc: "Asheville's most famous dessert spot. Truffles, drinking chocolate, chocolate cake, ice cream. Always a line — and worth it. Right on Pack Square.",
      address: "10 S Pack Square, Asheville, NC 28801",
      phone: "+1 828-252-4181",
      website: "https://frenchbroadchocolates.com",
      price: "$$"
    }
  ],

  // ===================== THINGS TO DO =====================
  activities: [
    {
      name: "Biltmore Estate",
      id: "biltmore-estate",
      neighborhood: "on-biltmore-grounds",
      cat: "Historic · Must-do",
      tags: ["Pre-buy tickets", "Senior discount Tue/Wed"],
      desc: "America's largest home, 8,000-acre estate. Self-guided audio tour of the house (1.5–2 hrs), gardens & conservatory, Antler Hill Village with shuttle, dairy bar with ice cream. Plan a full day. Wheelchairs available free at entrance.",
      address: "1 Lodge St, Asheville, NC 28803",
      phone: "+1 800-411-3812",
      website: "https://www.biltmore.com",
      tickets: "$78–132 per adult (varies by season). Online saves $10/ticket. 65+ saves $18 on Tue/Wed for adult admission.",
      time: "Half-day to full day",
      best: "Tuesday — senior discount + smaller crowd than weekend"
    },
    {
      name: "Blue Ridge Parkway · Folk Art Center",
      id: "folk-art-center",
      neighborhood: "parkway",
      cat: "Drive · Crafts",
      tags: ["Free", "Easy walking", "AC inside"],
      desc: "Milepost 382.5. Free Southern Highland Craft Guild gallery — quilts, pottery, woodturning, jewelry. Beautiful but never crowded. Easy parking. The first stop on a Parkway scenic drive day. ⚠️ Verify Blue Ridge Parkway segment is open near MP 382 before relying on this — NPS opens/closes segments dynamically post-Helene repairs.",
      address: "Blue Ridge Pkwy MP 382.5, Asheville",
      phone: "+1 828-298-7928",
      website: "https://southernhighlandguild.org",
      tickets: "Free",
      time: "1 hour"
    },
    {
      name: "Blue Ridge Parkway · Scenic Drive",
      id: "blue-ridge-parkway",
      neighborhood: "parkway",
      cat: "Drive · Free",
      tags: ["Free", "Stay in the car if needed"],
      desc: "The 114-mile section through Asheville is fully open after Helene repairs. From the Folk Art Center, drive south toward Mt Pisgah (MP 408) and stop at overlooks. Easy on Mom — just pull off and look.",
      tickets: "Free",
      time: "1–3 hours, your pace",
      best: "Morning · less haze, less traffic"
    },
    {
      name: "North Carolina Arboretum",
      id: "nc-arboretum",
      neighborhood: "south-asheville",
      cat: "Gardens · Easy walking",
      tags: ["Paved paths", "Shuttle available"],
      desc: "434 acres with bonsai garden (a real highlight), quilt garden, easy paved trails. Shuttle service for those who can't walk far. Beautiful in summer. Near Parkway entrance. Open 8am–9pm. Note: a portion of the Bonsai Garden has construction-related access changes starting April — confirm full access before relying on it.",
      address: "20 Frederick Law Olmsted Way, Asheville, NC 28806",
      phone: "+1 828-665-2492",
      website: "https://www.ncarboretum.org",
      tickets: "Parking $20/car (admission included)",
      time: "1.5–2 hours"
    },
    {
      name: "WNC Nature Center",
      id: "wnc-nature-center",
      neighborhood: "east-asheville",
      cat: "Wildlife · Easy paths",
      tags: ["AZA reciprocal?", "Local animals"],
      desc: "Small but well-done — wolves, cougars, otters, red wolves, farm animals. Paved easy paths. About 90 min is enough. ⚠️ The 50% off w/ Cincinnati Zoo membership card (AZA reciprocal) is *not* currently advertised on their site — call 828-259-8092 to confirm before relying on the discount. Bring the membership card either way.",
      address: "75 Gashes Creek Rd, Asheville, NC 28805",
      phone: "+1 828-259-8092",
      website: "https://wildwnc.org",
      tickets: "$13.95 adult / $12.95 senior 65+ · ask about Cincinnati Zoo reciprocal at the gate",
      time: "1.5 hours"
    },
    {
      name: "Black Mountain · downtown stroll",
      id: "black-mountain-village",
      neighborhood: "black-mountain",
      cat: "Shopping · Small town",
      tags: ["Antiques", "15 min east"],
      desc: "Charming walkable downtown 15 miles east of Asheville. Antique shops (Key City Antiques is the standout), galleries, coffee. Easy to combine with a Wednesday morning departure stop on the way to Hilton Head.",
      address: "Downtown Black Mountain, NC",
      website: "https://visitblackmountainnc.org",
      tickets: "Free",
      time: "1–2 hours"
    },
    {
      name: "Weaverville · small-town antiquing",
      id: "weaverville",
      neighborhood: "weaverville",
      cat: "Shopping · Small town",
      tags: ["Antiques", "Day-trip option"],
      desc: "15 min north of Asheville. Small antique district + tea room + bakery. Less polished than Black Mountain but charming. Skip if you do Black Mountain.",
      address: "Main St, Weaverville, NC",
      time: "1 hour"
    },
    {
      name: "Antique Tobacco Barn",
      id: "antique-tobacco-barn",
      neighborhood: "east-asheville",
      cat: "Shopping · Antiques",
      tags: ["Asheville", "Cavernous"],
      desc: "77,000+ sq ft of antiques in a historic tobacco warehouse — Asheville's biggest antique store. Plenty of seating, accessible, can browse for an hour or a whole afternoon.",
      address: "75 Swannanoa River Rd, Asheville, NC 28805",
      phone: "+1 828-252-7291",
      website: "https://atbarn.com",
      tickets: "Free",
      time: "1 hour"
    },
    {
      name: "Biltmore Village shops",
      id: "biltmore-village-shops",
      neighborhood: "biltmore-village",
      cat: "Shopping · Walk from hotel",
      tags: ["Walkable", "Quaint"],
      desc: "Cobblestone streets, ~30 small shops, art galleries, boutiques. Village Antiques (25,000 sq ft of European antiques) is here. Easy walking, plenty of benches.",
      address: "Biltmore Village, Asheville",
      tickets: "Free",
      time: "1–2 hours"
    },
    {
      name: "Grove Park Inn (drive-by + lobby)",
      id: "grove-park-inn",
      neighborhood: "north-asheville",
      cat: "Historic hotel · Easy stop",
      tags: ["Free to visit", "Lobby tour"],
      desc: "Historic mountain hotel — the lobby is a sight in itself with massive stone fireplaces. Sit on the Sunset Terrace at sunset (open to non-guests). Easy walk from car to lobby.",
      address: "290 Macon Ave, Asheville, NC 28804",
      phone: "+1 828-252-2711",
      tickets: "Free to enter lobby/terrace · drinks/snacks for purchase",
      time: "45 min"
    }
  ],

  // ===================== BUDGET =====================
  budget: [
    { category: "Lodging (AC Hotel Biltmore Village)", note: "2 rooms × 3 nights, est. base + tax", amount: 575 },
    { category: "Biltmore tickets", note: "4 adults · 1 senior discount (Tue) · pre-bought online", amount: 360 },
    { category: "WNC Nature Center", note: "50% off w/ Cincinnati Zoo card", amount: 40 },
    { category: "NC Arboretum parking", note: "$20 day pass per car", amount: 20 },
    { category: "Dinners (3)", note: "Avg. $250–300 for 4 incl tip", amount: 825 },
    { category: "Breakfasts/lunches (4 days)", note: "Mix of hotel & casual spots", amount: 280 },
    { category: "Ice cream / donuts / coffee", note: "Daily treat fund", amount: 80 },
    { category: "Gas (round trip from Cincinnati)", note: "~1,200 mi total · minivan", amount: 220 }
  ],

  // ===================== PACKING =====================
  packing: {
    "Essentials": [
      { item: "ID / driver's license", note: "Required to check in" },
      { item: "Cash/credit cards", note: "Some BBQ spots are cash-friendly" },
      { item: "Phone chargers (4)", note: "One per person" },
      { item: "Car charger / power bank", note: "Long drive day" },
      { item: "Medications (especially mom-in-law's)", note: "Plus a 2-day backup" },
      { item: "Reading glasses", note: "Easy to forget" },
      { item: "Insurance cards", note: "All four" }
    ],
    "Clothes (warm summer)": [
      { item: "T-shirts/blouses (3–4)", note: "Light, breathable" },
      { item: "Shorts or comfortable pants (2–3)", note: "Lots of walking days" },
      { item: "One nice dinner outfit", note: "For Rhubarb or Market Place" },
      { item: "Light jacket / cardigan", note: "Mornings can be 60°F" },
      { item: "Swimsuits", note: "Hotel pool + hot tub" },
      { item: "Pajamas", note: "" },
      { item: "Walking shoes (broken-in!)", note: "Biltmore day = lots of steps" },
      { item: "Sandals", note: "" }
    ],
    "Toiletries & health": [
      { item: "Sunscreen (SPF 30+)", note: "Easy to burn at elevation" },
      { item: "Bug spray", note: "Optional, depends on activity" },
      { item: "Allergy meds", note: "Pollen season" },
      { item: "Ibuprofen / Tylenol", note: "" },
      { item: "Hand sanitizer", note: "" },
      { item: "Lip balm", note: "Drier in mountains" }
    ],
    "For the trip": [
      { item: "Reusable water bottles (4)", note: "Refill stations everywhere" },
      { item: "Sunglasses", note: "" },
      { item: "Camera or phone for photos", note: "" },
      { item: "Board game or card deck", note: "For the hotel hangout room" },
      { item: "Snacks for the drive", note: "Trail mix, fruit, jerky" },
      { item: "Reusable shopping bag", note: "For antique finds" }
    ],
    "Documents": [
      { item: "Hotel reservation confirmations", note: "Screenshot for offline" },
      { item: "Biltmore tickets (pre-bought)", note: "Save to phone wallet" },
      { item: "Cincinnati Zoo membership card", note: "50% off WNC Nature Center" },
      { item: "Hilton Head check-in info", note: "For Wednesday arrival" }
    ]
  },

  // ===================== INFO =====================
  alzTips: [
    { strong: "Mornings are best", text: "Plan main activities before 1 PM. Afternoon energy fades, evenings can bring confusion ('sundowning'). Build in rest after lunch every day." },
    { strong: "Familiar routines help", text: "Same wake-up coffee. Same breakfast spot if possible. Predictability lowers anxiety." },
    { strong: "Skip crowds when you can", text: "Biltmore at 9 AM (small crowd) is way easier than 1 PM. Farmers market = avoid. Grocery store = limit." },
    { strong: "Always know the nearest bathroom", text: "Mom may need them suddenly. Plan stops accordingly." },
    { strong: "Bring photo ID + medical info card", text: "If she wanders or gets disoriented, this is critical. Include emergency contact, meds, diagnosis." },
    { strong: "Have 'her chair' ready", text: "A folding camp chair or wheelchair in the minivan is golden for unplanned waits or long museum lines." },
    { strong: "Hydration", text: "Older adults dehydrate fast. Offer water every 30–60 min, even if she says no." },
    { strong: "Validate, don't correct", text: "If she forgets a name or asks the same question, answer kindly. Don't say 'I just told you.'" },
    { strong: "End days early", text: "Try to be back at the hotel by 5–6 PM. A bath, a quiet evening, and an early bedtime work wonders." }
  ],

  contacts: [
    { name: "Emergency", number: "911" },
    { name: "Mission Hospital (Asheville)", number: "+1 828-213-1111", note: "Major hospital, 5 min from Biltmore Village. ER 24/7." },
    { name: "Asheville Urgent Care - Biltmore", number: "+1 828-274-2700", note: "MyCare AVL — Biltmore Park location" },
    { name: "CVS Pharmacy (Biltmore Village)", number: "+1 828-274-1841", note: "5 Brook St, Asheville, NC 28803" },
    { name: "Alzheimer's Association Helpline", number: "+1 800-272-3900", note: "24/7 free support if needed" },
    { name: "Biltmore Estate guest services", number: "+1 800-411-3812", note: "" },
    { name: "AC Hotel front desk", number: "+1 828-258-2522", note: "Or whichever hotel you book" }
  ]
};

/* ============================================================
   PROXIMITY MODEL
   Hand-authored adjacency for each lodging neighborhood.
   - walkableTo: neighborhoods reachable on foot from this hotel
   - driveMinutesTo: approximate one-way driving minutes (rounded)
   Used to label every itinerary slot's "how do we get there" context
   and to sort the restaurant picker (walk first, then drive ascending).
   ============================================================ */

const NEIGHBORHOOD_GRAPH = {
  "biltmore-village": {
    walkableTo: ["biltmore-village"],
    driveMinutesTo: {
      "downtown": 8, "west-asheville": 12, "south-asheville": 10,
      "east-asheville": 10, "river-arts": 6, "south-slope": 7,
      "north-asheville": 12, "on-biltmore-grounds": 5,
      "arden": 15, "black-mountain": 18, "parkway": 15,
      "weaverville": 22
    }
  },
  "east-asheville": {
    walkableTo: ["east-asheville"],
    driveMinutesTo: {
      "biltmore-village": 7, "downtown": 8, "west-asheville": 15,
      "south-asheville": 12, "river-arts": 8, "south-slope": 8,
      "north-asheville": 10, "on-biltmore-grounds": 9,
      "arden": 17, "black-mountain": 15, "parkway": 12,
      "weaverville": 18
    }
  },
  "arden": {
    walkableTo: ["arden"],
    driveMinutesTo: {
      "biltmore-village": 18, "downtown": 22, "west-asheville": 25,
      "south-asheville": 15, "east-asheville": 22, "river-arts": 22,
      "south-slope": 22, "north-asheville": 25,
      "on-biltmore-grounds": 18, "black-mountain": 30,
      "parkway": 18, "weaverville": 30
    }
  }
};

// Returns { kind: 'walk'|'drive'|'unknown', minutes, label }
// for traveling from a hotel to an item's neighborhood.
function proximity(hotelId, itemOrNeighborhood) {
  const itemHood = typeof itemOrNeighborhood === 'string'
    ? itemOrNeighborhood
    : itemOrNeighborhood?.neighborhood;
  if (!hotelId || !itemHood) {
    return { kind: 'unknown', minutes: null, label: '' };
  }
  const hotel = lookupRef('hotel:' + hotelId);
  if (!hotel || !hotel.neighborhood) {
    return { kind: 'unknown', minutes: null, label: '' };
  }
  if (hotel.neighborhood === itemHood) {
    return { kind: 'walk', minutes: 2, label: 'Right at your hotel' };
  }
  const graph = NEIGHBORHOOD_GRAPH[hotel.neighborhood];
  if (!graph) {
    return { kind: 'drive', minutes: 10, label: '~10 min drive' };
  }
  if (graph.walkableTo?.includes(itemHood)) {
    return { kind: 'walk', minutes: 5, label: 'Walk from your hotel' };
  }
  const mins = graph.driveMinutesTo?.[itemHood];
  if (typeof mins === 'number') {
    return { kind: 'drive', minutes: mins, label: `${mins} min drive` };
  }
  return { kind: 'drive', minutes: 10, label: '~10 min drive' };
}

// Lookup helpers — resolve a catalog reference string like
// "restaurant:corner-kitchen" → the actual record.
function lookupRef(ref) {
  if (!ref || typeof ref !== 'string') return null;
  const [kind, id] = ref.split(':');
  const table = {
    restaurant: TRIP_DATA.restaurants,
    treat: TRIP_DATA.treats,
    activity: TRIP_DATA.activities,
    hotel: [...TRIP_DATA.lodging, ...(STORE?.state?.plan?.customHotels || [])]
  }[kind];
  return table?.find(r => r.id === id) || null;
}

/* ============================================================
   SLOT MODEL — dynamic itinerary

   A slot is one row in the day's timeline. Shape:
   {
     id:          'd1-1900',        // stable, day-time based
     day:         1..4,
     time:        '7:00 PM',        // human-readable, editable
     durationMin: 90,               // soft hint (not auto-enforced)
     locked:      false,            // anchors; not shifted by cascade
     kind:        'meal'|'activity'|'drive'|'rest'|'fixed',
     mealType?:   'breakfast'|'brunch'|'lunch'|'dinner'|'dessert',
     ref?:        'restaurant:corner-kitchen',  // catalog ref
     title?:      string,           // override (or for kinds without ref)
     subtitle?:   string,
     detail?:     string,
     note?:       string            // small callout below detail
   }

   Editing an unlocked slot's time shifts all later, unlocked, same-day
   slots by the delta. Locked slots anchor and don't move.
   ============================================================ */

const SEED_SLOTS = [
  // ---------- DAY 1 · Sun Jun 28 · Drive Down & Settle In ----------
  { id: 'd1-1130', day: 1, time: '11:30 AM', durationMin: 30, locked: false,
    kind: 'fixed', title: 'Church',
    detail: 'Service in Waynesville. Light brunch or coffee on the way out.' },
  { id: 'd1-1200', day: 1, time: '12:00 PM', durationMin: 135, locked: true,
    kind: 'drive', title: 'Depart West Chester',
    detail: 'From Beckett Ridge area. I-75 South. Bathroom now, snacks loaded.' },
  { id: 'd1-1415', day: 1, time: '2:15 PM', durationMin: 45, locked: false,
    kind: 'fixed', title: 'Lunch stop · Corbin, KY',
    detail: 'Sanders Café (original KFC, fun) or Dixie Café. ~30–45 min stop.' },
  { id: 'd1-1730', day: 1, time: '5:30 PM', durationMin: 90, locked: true,
    kind: 'fixed', title: 'Arrive Biltmore Village',
    detail: 'Check in. Unpack a little, freshen up, walk the village.' },
  { id: 'd1-1900', day: 1, time: '7:00 PM', durationMin: 90, locked: false,
    kind: 'meal', mealType: 'dinner', ref: 'restaurant:corner-kitchen',
    note: 'Reserve early — this is the best spot in walking distance.' },
  { id: 'd1-2100', day: 1, time: '9:00 PM', durationMin: 60, locked: false,
    kind: 'rest', title: 'Hot tub & turn in',
    detail: 'Long drive done. Hot tub at the hotel or evening porch. Early to bed — Biltmore tomorrow.' },

  // ---------- DAY 2 · Mon Jun 29 · Blue Ridge Parkway Day ----------
  { id: 'd2-0800', day: 2, time: '8:00 AM', durationMin: 60, locked: false,
    kind: 'meal', mealType: 'breakfast', ref: 'restaurant:biscuit-head',
    note: 'Beat the line by arriving by 8.' },
  { id: 'd2-0930', day: 2, time: '9:30 AM', durationMin: 90, locked: false,
    kind: 'activity', ref: 'activity:folk-art-center',
    note: 'Great accessibility for mom-in-law. Quiet morning crowd.' },
  { id: 'd2-1100', day: 2, time: '11:00 AM', durationMin: 90, locked: false,
    kind: 'activity', ref: 'activity:blue-ridge-parkway',
    title: 'Blue Ridge Parkway scenic drive south',
    detail: 'From the Folk Art Center, drive south. Pull off at the overlooks. Pisgah views around milepost 408.' },
  { id: 'd2-1230', day: 2, time: '12:30 PM', durationMin: 60, locked: false,
    kind: 'meal', mealType: 'lunch', ref: null,
    note: 'Pisgah Inn lunch is geographically tight — pick a lunch spot back in town. Tupelo Honey South is closest to the Arboretum.' },
  { id: 'd2-1430', day: 2, time: '2:30 PM', durationMin: 120, locked: false,
    kind: 'activity', ref: 'activity:nc-arboretum',
    note: 'Free shuttle around the gardens — easy on the legs.' },
  { id: 'd2-1700', day: 2, time: '5:00 PM', durationMin: 90, locked: false,
    kind: 'rest', title: 'Back to the hotel · rest',
    detail: "Hot tub, balcony, board games. Get mom-in-law's afternoon rest in." },
  { id: 'd2-1830', day: 2, time: '6:30 PM', durationMin: 90, locked: false,
    kind: 'meal', mealType: 'dinner', ref: 'restaurant:bears-smokehouse',
    note: 'KC-style BBQ in the South Slope. Buxton Hall (the original pick) closed permanently — Bear\'s is the closest like-for-like sub.' },
  { id: 'd2-2030', day: 2, time: '8:30 PM', durationMin: 45, locked: false,
    kind: 'meal', mealType: 'dessert', ref: 'treat:hop-ice-cream' },

  // ---------- DAY 3 · Tue Jun 30 · Biltmore Estate Day ----------
  { id: 'd3-0730', day: 3, time: '7:30 AM', durationMin: 60, locked: false,
    kind: 'rest', title: 'Breakfast at the hotel',
    detail: "Light breakfast — there's a lot of walking today. Coffee, bagels, fruit." },
  { id: 'd3-0900', day: 3, time: '9:00 AM', durationMin: 30, locked: true,
    kind: 'activity', ref: 'activity:biltmore-estate',
    title: 'Arrive Biltmore · check in at Reception',
    detail: 'Pre-buy tickets online (saves $10/each). Pick House & Grounds with audio tour. Tuesdays = $18 off for 65+ on adult admission — Mom can save here.',
    note: 'Wheelchairs are free at the entrance — even if not using one full-time, it\'s a smart fallback for Mom.' },
  { id: 'd3-0930', day: 3, time: '9:30 AM', durationMin: 120, locked: false,
    kind: 'fixed', title: 'Biltmore House tour',
    detail: 'Self-guided with audio tour (1.5–2 hrs). Only the first 2 floors are wheelchair-accessible — the basement & upper floors require stairs. Take the elevator where offered. Plenty of benches.',
    note: 'Go early — first tour times have the smallest crowds.' },
  { id: 'd3-1130', day: 3, time: '11:30 AM', durationMin: 60, locked: false,
    kind: 'fixed', title: 'Gardens & Conservatory',
    detail: 'Easy garden paths. The Conservatory has benches, orchids, and great photo spots. Skip strenuous trails.' },
  { id: 'd3-1230', day: 3, time: '12:30 PM', durationMin: 90, locked: false,
    kind: 'meal', mealType: 'lunch', ref: 'restaurant:stable-cafe' },
  { id: 'd3-1400', day: 3, time: '2:00 PM', durationMin: 120, locked: false,
    kind: 'fixed', title: 'Antler Hill Village',
    detail: 'Free shuttle from the House parking lot. Browse the shops, the Outdoor Adventure Center, the Farm (animals to see). The dairy bar has ice cream — yes please.',
    note: 'Easy, sit-down friendly. Park in shade.' },
  { id: 'd3-1600', day: 3, time: '4:00 PM', durationMin: 180, locked: false,
    kind: 'rest', title: 'Back to hotel · rest before dinner',
    detail: 'Pool, hot tub, balcony time. Long day on the feet.' },
  { id: 'd3-1900', day: 3, time: '7:00 PM', durationMin: 120, locked: false,
    kind: 'meal', mealType: 'dinner', ref: 'restaurant:chestnut',
    note: 'Sister restaurant to Corner Kitchen — open Tuesday. (Rhubarb is closed Tue/Wed, so we swapped from the original pick.) Reservations via Resy.' },
  { id: 'd3-2100', day: 3, time: '9:00 PM', durationMin: 30, locked: false,
    kind: 'meal', mealType: 'dessert', ref: 'treat:hole-doughnuts' },

  // ---------- DAY 4 · Wed Jul 1 · Slow Morning & Onward ----------
  { id: 'd4-0800', day: 4, time: '8:00 AM', durationMin: 60, locked: false,
    kind: 'rest', title: 'Breakfast at hotel · pack up',
    detail: 'Light packing-day breakfast.' },
  { id: 'd4-0900', day: 4, time: '9:00 AM', durationMin: 90, locked: false,
    kind: 'activity', ref: 'activity:black-mountain-village',
    note: 'Optional — skip if everyone is ready to push for Hilton Head.' },
  { id: 'd4-1030', day: 4, time: '10:30 AM', durationMin: 120, locked: true,
    kind: 'drive', title: 'Roll south toward Hilton Head',
    detail: 'Back on I-26 E → I-95 S → 278 E. About 5 hrs to Hilton Head with one lunch stop.' },
  { id: 'd4-1230', day: 4, time: '12:30 PM', durationMin: 45, locked: false,
    kind: 'fixed', title: 'Lunch · Columbia, SC area',
    detail: "Lizard's Thicket (local Southern chain done right) or pick on the fly. 30 min stop." },
  { id: 'd4-1530', day: 4, time: '3:30 PM', durationMin: 60, locked: true,
    kind: 'fixed', title: 'Arrive Hilton Head!',
    detail: 'Check in (most properties 3–4 PM). Toes in the sand by sunset.' }
];

// Trip-day calendar — maps each itinerary day to its real date.
const TRIP_DAY_DATES = { 1: '2026-06-28', 2: '2026-06-29', 3: '2026-06-30', 4: '2026-07-01' };

// Returns the current trip day number (1–4) if today is within the trip,
// else null. Accepts an optional Date for testing.
function currentTripDay(now = new Date()) {
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  for (const [day, date] of Object.entries(TRIP_DAY_DATES)) {
    if (date === today) return Number(day);
  }
  return null;
}

// Given a day's slots and the current minutes-since-midnight, return the id
// of the "now or next" slot (the in-progress one, or the next upcoming).
function nowNextSlotId(daySlots, nowMin) {
  let inProgress = null;
  for (let i = 0; i < daySlots.length; i++) {
    const start = timeToMinutes(daySlots[i].time);
    if (start <= nowMin) {
      inProgress = daySlots[i].id; // keep latest started
    } else {
      // first future slot — if nothing started yet, this is "next"
      return inProgress || daySlots[i].id;
    }
  }
  return inProgress; // after the last slot's start → that's the current focus
}

// Time helpers — convert between "7:00 PM" and minutes-since-midnight.
function timeToMinutes(t) {
  const m = (t || '').match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return 0;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  if (m[3].toUpperCase() === 'PM' && h !== 12) h += 12;
  if (m[3].toUpperCase() === 'AM' && h === 12) h = 0;
  return h * 60 + min;
}
function minutesToTime(mins) {
  mins = ((Math.round(mins) % 1440) + 1440) % 1440;
  let h = Math.floor(mins / 60);
  const m = mins % 60;
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, '0')} ${ampm}`;
}
function timeToHM(t) { // for <input type="time"> value
  const m = timeToMinutes(t);
  return `${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;
}
function hmToTime(hm) { // "19:30" → "7:30 PM"
  const [h, m] = hm.split(':').map(Number);
  return minutesToTime(h * 60 + m);
}

// Resolve a slot into the data the renderer needs.
function resolveSlot(slot, hotelId) {
  const ref = lookupRef(slot.ref);
  const prox = ref ? proximity(hotelId, ref) : null;
  const needsAssignment = slot.kind === 'meal' && !ref;

  let title = slot.title;
  if (!title && ref) title = ref.name;
  if (!title && needsAssignment) {
    const label = (slot.mealType || 'meal').replace(/^./, c => c.toUpperCase());
    title = `Tap to choose ${label}`;
  }
  if (!title) title = '—';

  return {
    slot,
    ref,
    title,
    subtitle: ref?.cat || ref?.tagline || '',
    body: slot.detail || ref?.desc || '',
    note: slot.note || '',
    proximityLabel: prox?.label || '',
    proximityKind: prox?.kind || 'unknown',
    needsAssignment
  };
}

// Cascade: shift all later, unlocked, same-day slots by delta minutes.
// Returns { conflicts: [slotIds] } where a shifted slot would land at or
// after a locked slot's time.
function shiftSlotsAfter(slotId, deltaMinutes) {
  const slots = STORE.state.plan.slots;
  const i = slots.findIndex(s => s.id === slotId);
  if (i < 0 || deltaMinutes === 0) return { conflicts: [] };
  const day = slots[i].day;

  const conflicts = [];
  const next = slots.map((s, idx) => {
    if (idx <= i) return s;
    if (s.day !== day) return s;
    if (s.locked) return s;
    const shifted = { ...s, time: minutesToTime(timeToMinutes(s.time) + deltaMinutes) };
    // Check if shifted lands on/after a locked slot in same day
    const lockedAfter = slots.find((x, j) => j > idx && x.day === day && x.locked);
    if (lockedAfter && timeToMinutes(shifted.time) >= timeToMinutes(lockedAfter.time)) {
      conflicts.push(s.id);
    }
    return shifted;
  });
  STORE.set('plan.slots', next);
  return { conflicts };
}

// Seed slots on first load (or if user has emptied the plan).
function ensureSlotsSeeded() {
  if (!Array.isArray(STORE.state.plan.slots) || STORE.state.plan.slots.length === 0) {
    STORE.state.plan.slots = SEED_SLOTS.map(s => ({ ...s }));
    persist();
  }
}

// If a saved slot points at a catalog item that no longer exists (e.g.
// Buxton Hall after permanent closure), null out the ref so the slot
// renders as "Tap to choose" instead of looking broken.
function cleanupStaleRefs() {
  let changed = false;
  STORE.state.plan.slots.forEach(s => {
    if (s.ref && !lookupRef(s.ref)) {
      console.warn(`Cleared stale ref "${s.ref}" from slot ${s.id} (catalog item no longer exists)`);
      s.ref = null;
      changed = true;
    }
  });
  if (changed) persist();
}

/* ============================================================
   RENDERERS
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function gmapsLink(addr) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
}
function telLink(phone) {
  return `tel:${phone.replace(/[^+0-9]/g, '')}`;
}

function renderOverview() {
  return `
    <section class="section active" data-section="overview">
      <div class="section-eyebrow">Briefing</div>
      <h2 class="section-title">The Plan, <em>in brief</em></h2>
      <p class="section-intro">Sunday after church we point the minivan south. Three nights tucked into Biltmore Village. A day at Vanderbilt's astonishing house, a slow morning along the Parkway, an afternoon antiquing in Black Mountain — then on to Hilton Head.</p>

      <div class="at-a-glance">
        <div class="glance-tile"><div class="label">Drive south</div><div class="value"><em>5h 15m</em></div></div>
        <div class="glance-tile"><div class="label">Nights</div><div class="value"><em>3</em></div></div>
        <div class="glance-tile"><div class="label">Biltmore</div><div class="value"><em>Tue AM</em></div></div>
        <div class="glance-tile"><div class="label">Next stop</div><div class="value"><em>Hilton Head</em></div></div>
      </div>

      <h3 class="subhead"><span>Weather (estimated)</span><span class="count">late June avg</span></h3>
      <div class="weather-strip">
        <div class="weather-day"><div class="day-abbr">Sun 28</div><div class="cond">☀️</div><div class="temp">84°<small>/64°</small></div></div>
        <div class="weather-day"><div class="day-abbr">Mon 29</div><div class="cond">⛅</div><div class="temp">82°<small>/63°</small></div></div>
        <div class="weather-day"><div class="day-abbr">Tue 30</div><div class="cond">🌤️</div><div class="temp">83°<small>/64°</small></div></div>
        <div class="weather-day"><div class="day-abbr">Wed 01</div><div class="cond">☀️</div><div class="temp">85°<small>/65°</small></div></div>
      </div>
      <p style="font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;color:var(--ink-faint);text-align:center;margin-bottom:1.5rem;">Asheville at 2,134 ft · cooler than home · check forecast nearer the date</p>

      <div class="callout tip">
        <div class="callout-label">Why this trip works</div>
        <div class="callout-text">Asheville sits at over 2,000 ft elevation — June highs in the mid-80s but cool 60s overnight, far gentler than Ohio. The 4th-of-July week brings crowds; <strong>we slip in just ahead of them.</strong></div>
      </div>

      <div class="callout note">
        <div class="callout-label">For Mom · Alzheimer's-aware</div>
        <div class="callout-text">The plan is built around her best hours — mornings to early afternoon. Familiar pleasures (scenic drives, sitting in pretty gardens, sweet treats, small-town windows) over big crowds or long lines. Plenty of bench-and-rest moments. Full list of gentle considerations on the <strong>Info</strong> tab.</div>
      </div>

      <h3 class="subhead"><span>Quick Jump</span><span class="count">tap a section</span></h3>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:.6rem;">
        <button class="action-btn" data-jump="drive">🚗 Drive Down</button>
        <button class="action-btn" data-jump="stay">🏨 Where We Stay</button>
        <button class="action-btn" data-jump="plan">📅 Day by Day</button>
        <button class="action-btn" data-jump="eat">🍴 Eat &amp; Treat</button>
        <button class="action-btn" data-jump="do">⛰️ Things to Do</button>
        <button class="action-btn" data-jump="info">📋 Info &amp; Lists</button>
      </div>
    </section>
  `;
}

function renderDrive() {
  const d = TRIP_DATA.drive;
  return `
    <section class="section" data-section="drive">
      <div class="section-eyebrow">The Way There</div>
      <h2 class="section-title">Drive <em>south</em></h2>
      <p class="section-intro">${d.overview}</p>

      <div class="mini-map">
        <svg viewBox="0 0 400 200" preserveAspectRatio="none">
          <path d="M50,40 Q140,70 200,100 T350,160" stroke="#fff" stroke-width="2" stroke-dasharray="6 4" fill="none" opacity="0.7"/>
          <circle cx="50" cy="40" r="6" fill="#fff"/>
          <circle cx="350" cy="160" r="6" fill="#f7d97a"/>
          <text x="64" y="46" fill="#fff" font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1">WEST CHESTER, OH</text>
          <text x="336" y="156" fill="#fff" font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1" text-anchor="end">ASHEVILLE, NC</text>
        </svg>
        <div class="mini-map-label">
          <div class="from-to">${d.routeName}</div>
          <em>${d.distance} · ${d.duration}</em>
        </div>
      </div>

      <h3 class="subhead"><span>Route &amp; Stops</span><span class="count">${d.steps.length} legs</span></h3>
      <div class="card" style="padding:0 1.25rem;">
        ${d.steps.map(step => `
          <div class="route-step">
            <div class="route-marker">${step.marker}</div>
            <div class="route-content">
              <div class="route-meta">${step.meta}</div>
              <div class="route-title">${step.title}</div>
              <div class="route-desc">${step.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="callout tip">
        <div class="callout-label">Departure plan</div>
        <div class="callout-text">Leaving at <strong>noon Sunday</strong> from Beckett Ridge in West Chester. Plan one solid stop in Corbin or Knoxville for lunch + bathroom + leg-stretch. Aim to roll into Biltmore Village around <strong>5:30–6:00 PM</strong> — enough time to settle and walk to dinner without rushing.</div>
      </div>

      <h3 class="subhead"><span>Wednesday · Onward to Hilton Head</span><span class="count">${d.returnLeg.distance}</span></h3>
      <div class="card" style="padding:1rem 1.25rem;">
        ${d.returnLeg.steps.map(s => `
          <div class="route-step" style="padding:.75rem 0;">
            <div class="route-marker" style="font-size:1.15rem;">${s.time.replace(' AM','a').replace(' PM','p').replace(':','')}</div>
            <div class="route-content">
              <div class="route-desc" style="margin-top:.25rem;">${s.what}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <a class="action-btn primary" style="margin-top:1rem;" href="${gmapsLink('Beckett Ridge Golf Course West Chester OH to AC Hotel Biltmore Village Asheville NC')}" target="_blank" rel="noopener">🗺️ Open route in Google Maps</a>
    </section>
  `;
}

// Neighborhood options for the custom-hotel form.
const NEIGHBORHOODS = [
  ['biltmore-village', 'Biltmore Village'],
  ['downtown', 'Downtown'],
  ['south-asheville', 'South Asheville'],
  ['east-asheville', 'East Asheville'],
  ['west-asheville', 'West Asheville'],
  ['north-asheville', 'North Asheville'],
  ['river-arts', 'River Arts District'],
  ['south-slope', 'South Slope'],
  ['arden', 'Arden'],
  ['black-mountain', 'Black Mountain'],
  ['weaverville', 'Weaverville'],
  ['other', 'Other / not sure']
];

// Hotel-aware advisory shown atop the Plan tab — non-destructive guidance
// keyed on the selected hotel's neighborhood.
const HOTEL_RULES = {
  'biltmore-village': "You're in Biltmore Village — dinner, the Biltmore gate, and morning coffee are all walkable. Easiest base for the group.",
  'east-asheville': "From East Asheville (Tunnel Rd), most stops are a short drive. The free hot breakfast is a real money-saver for four.",
  'arden': "The cabin in Arden is ~20 min south of town — add drive time to the Day 1 arrival and Day 4 departure, and consider a dinner-in night. Stock the kitchen on the way in."
};

// Seeded hotels + any user-added custom hotels.
function allHotels() {
  return [...TRIP_DATA.lodging, ...(STORE.state.plan.customHotels || [])];
}

function renderStay() {
  const items = allHotels();
  const selectedId = STORE.state.plan.hotelId;
  return `
    <section class="section" data-section="stay">
      <div class="section-eyebrow">Lodging</div>
      <h2 class="section-title">Where we <em>stay</em></h2>
      <p class="section-intro">Tap the <strong>★</strong> on a hotel to make it your base — every "walk vs. drive" estimate and nearby-restaurant suggestion across the plan updates to match. The AC Biltmore Village is our top pick.</p>

      <h3 class="subhead"><span>Choose your base</span><span class="count">${items.length} options</span></h3>

      ${items.map(h => {
        const isSelected = h.id === selectedId;
        const isCustom = !!h.custom;
        return `
        <div class="card lodging-card ${isSelected ? 'selected' : ''}" data-id="${h.id}">
          ${isSelected
            ? '<div class="recommended-badge">✓ You\'re staying here</div>'
            : (h.featured ? '<div class="recommended-badge alt">★ Top pick</div>' : '')}
          <div class="card-head">
            <div>
              <div class="card-name">${h.name}</div>
              <div style="font-family:var(--font-serif);font-style:italic;color:var(--ink-faint);font-size:.92rem;margin-top:.2rem;">${h.tagline || (isCustom ? 'Your custom pick' : '')}</div>
              ${h.price ? `<div class="price-tag"><span class="currency">$</span>${h.price}<span class="nights">/ night · ${h.estTotal || ''}</span></div>` : ''}
            </div>
            <button class="hotel-select-btn ${isSelected ? 'selected' : ''}" data-action="select-hotel" data-hotel-id="${h.id}" aria-label="${isSelected ? 'Selected as your hotel' : 'Choose this hotel'}" title="${isSelected ? "You're staying here" : 'Stay here'}">
              ${isSelected ? '★' : '☆'}
            </button>
          </div>
          ${h.tags ? `<div class="card-tags">${h.tags.map(t => `<span class="tag${t === 'Recommended' ? ' accent' : ''}">${t}</span>`).join('')}</div>` : ''}
          ${h.desc ? `<div class="card-desc">${h.desc}</div>` : ''}
          ${h.why ? `<div class="timeline-note"><strong style="color:var(--accent);">Why it fits:</strong> ${h.why}</div>` : ''}
          ${h.amenities ? `<div class="amenities">${h.amenities.map(a => `<span class="amenity">${a}</span>`).join('')}</div>` : ''}
          <div class="card-meta">
            ${h.address ? `<div>📍 <strong>${h.address}</strong></div>` : ''}
            ${h.phone ? `<div>📞 <strong>${h.phone}</strong></div>` : ''}
            ${isCustom && h.neighborhood ? `<div>🧭 <strong>${(NEIGHBORHOODS.find(n => n[0] === h.neighborhood) || [, h.neighborhood])[1]}</strong></div>` : ''}
          </div>
          <div class="card-actions">
            ${h.address ? `<a class="action-btn" href="${gmapsLink(h.address)}" target="_blank" rel="noopener">🗺 Map</a>` : ''}
            ${h.phone ? `<a class="action-btn" href="${telLink(h.phone)}">📞 Call</a>` : ''}
            ${h.website ? `<a class="action-btn primary" href="${h.website}" target="_blank" rel="noopener">Book →</a>` : ''}
            ${isCustom ? `<button class="action-btn" data-action="delete-custom-hotel" data-hotel-id="${h.id}">🗑 Remove</button>` : ''}
          </div>
        </div>
      `;}).join('')}

      <div class="card custom-hotel-card">
        <button class="add-custom-toggle" data-action="toggle-custom-form">＋ Add a custom hotel or rental</button>
        <div class="custom-hotel-form" id="customHotelForm" hidden>
          <label>Name<input type="text" id="chName" placeholder="e.g. Airbnb on Sunset Mtn" /></label>
          <label>Address (optional)<input type="text" id="chAddress" placeholder="Street, city" /></label>
          <label>Neighborhood<select id="chNeighborhood">${NEIGHBORHOODS.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select></label>
          <label>Notes (optional)<input type="text" id="chNotes" placeholder="Anything to remember" /></label>
          <button class="action-btn primary" data-action="save-custom-hotel">Add &amp; select this hotel</button>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-label">Booking tip</div>
        <div class="callout-text">Late June is high-demand (4th of July week starts that weekend). <strong>Book at least 6 weeks ahead</strong> for best rates and room selection. Marriott/Hilton members: book direct for free WiFi and points. Always check the hotel's own website vs. Expedia — prices often match but the direct booking adds perks.</div>
      </div>
    </section>
  `;
}

function renderPlan() {
  const days = TRIP_DATA.itinerary;  // day-level metadata (date, title)
  const slots = STORE.state.plan.slots || [];
  const hotelId = STORE.state.plan.hotelId;
  const hotel = lookupRef('hotel:' + hotelId);

  // Group slots by day, preserve original order
  const byDay = {};
  slots.forEach(s => { (byDay[s.day] = byDay[s.day] || []).push(s); });

  // Now/Next awareness — only active when we're actually on the trip.
  const todayDay = currentTripDay();
  const nowMin = new Date().getHours() * 60 + new Date().getMinutes();
  const nowNextId = todayDay ? nowNextSlotId(byDay[todayDay] || [], nowMin) : null;
  const nowState = (s) => {
    if (s.day !== todayDay) return null;
    if (s.id === nowNextId) return 'now';
    return timeToMinutes(s.time) < nowMin ? 'past' : null;
  };

  const dayHotelLine = hotel
    ? `Staying at <em>${hotel.name}</em>.`
    : '';
  const ruleText = hotel ? HOTEL_RULES[hotel.neighborhood] : '';
  const hotelCallout = ruleText
    ? `<div class="callout note"><div class="callout-label">Your base · ${hotel.name}</div><div class="callout-text">${ruleText}</div></div>`
    : '';

  return `
    <section class="section" data-section="plan">
      <div class="section-eyebrow">Day by day</div>
      <h2 class="section-title">The <em>itinerary</em></h2>
      <p class="section-intro">Built around Mom's best hours — mornings for main events, afternoons gentler, evenings short. Tap any time to adjust; lock the anchors you can't move. ${dayHotelLine}</p>
      ${hotelCallout}

      ${days.map(d => `
        <div class="day-card ${d.day === todayDay ? 'is-today' : ''}" data-day="${d.day}">
          <div class="day-header">
            <div>
              <div class="day-number">Day ${d.day}${d.day === todayDay ? ' · Today' : ''}</div>
              <div class="day-title">${d.title}</div>
            </div>
            <div class="day-date">${d.date}</div>
          </div>
          <div class="timeline">
            ${(byDay[d.day] || []).map(s => renderSlot(s, hotelId, nowState(s))).join('')}
          </div>
        </div>
      `).join('')}
    </section>
  `;
}

function renderReservationChip(slot) {
  const map = {
    needed:    { cls: 'needed',    label: '● Need to book' },
    confirmed: { cls: 'confirmed', label: '✓ Booked' },
    walkin:    { cls: 'walkin',    label: '○ Walk-in / no res' }
  };
  const m = map[slot.reservation] || { cls: 'unset', label: '＋ Reservation?' };
  return `<button class="reservation-chip ${m.cls}" data-action="cycle-reservation" data-slot-id="${slot.id}" title="Tap to cycle reservation status">${m.label}</button>`;
}

function renderSlot(slot, hotelId, nowState = null) {
  const r = resolveSlot(slot, hotelId);
  const isMeal = slot.kind === 'meal';
  const isActivity = slot.kind === 'activity';
  const swappable = isMeal || isActivity;
  const showProx = (isMeal || isActivity) && r.proximityLabel;
  const proxIcon = r.proximityKind === 'walk' ? '🚶' : '🚗';
  const kindLabel = isMeal
    ? (slot.mealType || 'meal').replace(/^./, c => c.toUpperCase())
    : isActivity ? 'Activity'
    : slot.kind === 'drive' ? 'Drive'
    : slot.kind === 'rest' ? 'Rest' : '';

  return `
    <div class="timeline-item slot ${slot.locked ? 'is-locked' : ''} ${r.needsAssignment ? 'needs-assignment' : ''} ${nowState ? 'slot-' + nowState : ''}" data-slot-id="${slot.id}">
      <div class="slot-head">
        <button class="slot-time" data-action="edit-time" data-slot-id="${slot.id}" aria-label="Edit time">
          ${slot.time}
        </button>
        ${nowState === 'now' ? '<span class="slot-now-badge">Now / Next</span>' : ''}
        ${kindLabel ? `<span class="slot-kind">${kindLabel}</span>` : ''}
        <button class="slot-lock ${slot.locked ? 'locked' : ''}" data-action="toggle-lock" data-slot-id="${slot.id}" aria-label="${slot.locked ? 'Unlock' : 'Lock'}" title="${slot.locked ? 'Locked — won\'t reflow when other times change' : 'Tap to lock this time'}">
          ${slot.locked ? '🔒' : '🔓'}
        </button>
      </div>
      <div class="timeline-title">${r.title}</div>
      ${r.subtitle ? `<div class="slot-subtitle">${r.subtitle}</div>` : ''}
      ${r.body ? `<div class="timeline-detail">${r.body}</div>` : ''}
      ${showProx ? `<div class="slot-proximity">${proxIcon} ${r.proximityLabel}</div>` : ''}
      ${isMeal && slot.ref && (slot.mealType === 'lunch' || slot.mealType === 'dinner') ? renderReservationChip(slot) : ''}
      ${r.note ? `<div class="timeline-note">${r.note}</div>` : ''}
      ${swappable ? `
        <div class="slot-actions">
          <button class="slot-swap" data-action="swap-ref" data-slot-id="${slot.id}">
            ${r.needsAssignment ? `＋ Choose ${slot.mealType || 'option'}` : (slot.ref ? 'Change' : 'Pick one')}
          </button>
          ${slot.ref ? `<button class="slot-unassign" data-action="unassign-ref" data-slot-id="${slot.id}" title="Remove this pick">✕</button>` : ''}
        </div>
      ` : ''}
    </div>
  `;
}

function renderEat() {
  const restaurants = TRIP_DATA.restaurants;
  const treats = TRIP_DATA.treats;

  const cardOf = (r, prefix) => {
    const refKind = prefix === 'rest' ? 'restaurant' : 'treat';
    const refStr = `${refKind}:${r.id}`;
    const assigned = slotsReferencing(refStr);
    const assignmentRow = assigned.length === 0 ? '' :
      `<div class="card-assignment">
         ${assigned.map(s => {
           const slotKindLabel = s.kind === 'meal'
             ? (s.mealType || 'meal').replace(/^./, c => c.toUpperCase())
             : 'Plan';
           return `<button class="assignment-chip" data-action="jump-to-slot" data-slot-id="${s.id}" title="Jump to this slot in the Plan">→ ${DAY_LABELS[s.day]} ${slotKindLabel}</button>`;
         }).join('')}
       </div>`;

    return `
    <div class="card" data-id="${prefix}-${r.id}">
      <div class="card-head">
        <div>
          <div class="card-name">${r.name}</div>
          <div style="font-family:var(--font-serif);font-style:italic;color:var(--ink-faint);font-size:.9rem;margin-top:.2rem;">${r.cat} · ${r.price || ''}</div>
          ${assignmentRow}
        </div>
        <button class="fav-btn" data-fav="${prefix}-${r.name.replace(/\W/g,'-')}" aria-label="Save"></button>
      </div>
      <div class="card-tags">${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-desc">${r.desc}</div>
      <div class="card-meta">
        ${r.meal ? `<div>🕒 <strong>${r.meal}</strong></div>` : ''}
        ${r.address ? `<div>📍 ${r.address}</div>` : ''}
        ${r.phone ? `<div>📞 ${r.phone}</div>` : ''}
      </div>
      <div class="card-actions">
        <button class="add-to-plan-btn" data-action="add-to-plan" data-ref="${refStr}">＋ Add to plan</button>
        ${r.address ? `<a class="action-btn" href="${gmapsLink(r.address)}" target="_blank" rel="noopener">🗺 Map</a>` : ''}
        ${r.phone ? `<a class="action-btn" href="${telLink(r.phone)}">📞 Call</a>` : ''}
        ${r.website ? `<a class="action-btn primary" href="${r.website}" target="_blank" rel="noopener">Site →</a>` : ''}
      </div>
    </div>
    `;
  };

  return `
    <section class="section" data-section="eat">
      <div class="section-eyebrow">Local Tables</div>
      <h2 class="section-title">Eat &amp; <em>treat</em></h2>
      <p class="section-intro">A mix of farm-to-table, Southern, BBQ, and casual. All independent and locally owned — no chains, nothing you can get at home. Plus the ice cream and donut hit list.</p>

      <h3 class="subhead"><span>Restaurants</span><span class="count">${restaurants.length} picks</span></h3>
      ${restaurants.map(r => cardOf(r, 'rest')).join('')}

      <h3 class="subhead"><span>Ice cream &amp; Donuts</span><span class="count">${treats.length} sweet stops</span></h3>
      ${treats.map(t => cardOf(t, 'treat')).join('')}

      <div class="callout tip">
        <div class="callout-label">Reservation strategy</div>
        <div class="callout-text">For dinner spots (Corner Kitchen, Rhubarb, Market Place, Chestnut), <strong>book a week ahead</strong> minimum — late June fills fast. BBQ and breakfast spots don't take reservations — go off-peak (11 AM or 1:30 PM for lunch, 5:30 PM or 8 PM for dinner) to skip the line.</div>
      </div>
    </section>
  `;
}

function renderDo() {
  const items = TRIP_DATA.activities;
  return `
    <section class="section" data-section="do">
      <div class="section-eyebrow">Things to Do</div>
      <h2 class="section-title">Out and <em>about</em></h2>
      <p class="section-intro">Built for the group — easy walks, scenic drives, low-stress browsing, with the Biltmore as the big-ticket item.</p>

      ${items.map(a => {
        const refStr = `activity:${a.id}`;
        const assigned = slotsReferencing(refStr);
        const assignmentRow = assigned.length === 0 ? '' :
          `<div class="card-assignment">
             ${assigned.map(s => `<button class="assignment-chip" data-action="jump-to-slot" data-slot-id="${s.id}" title="Jump to this slot in the Plan">→ ${DAY_LABELS[s.day]} · ${s.time}</button>`).join('')}
           </div>`;
        return `
        <div class="card">
          <div class="card-head">
            <div>
              <div class="card-name">${a.name}</div>
              <div style="font-family:var(--font-serif);font-style:italic;color:var(--ink-faint);font-size:.9rem;margin-top:.2rem;">${a.cat}</div>
              ${assignmentRow}
            </div>
            <button class="fav-btn" data-fav="do-${a.name.replace(/\W/g,'-')}" aria-label="Save"></button>
          </div>
          <div class="card-tags">${a.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <div class="card-desc">${a.desc}</div>
          <div class="card-meta">
            ${a.tickets ? `<div>🎟 <strong>${a.tickets}</strong></div>` : ''}
            ${a.time ? `<div>⏱ ${a.time}</div>` : ''}
            ${a.best ? `<div>⭐ Best: ${a.best}</div>` : ''}
            ${a.address ? `<div>📍 ${a.address}</div>` : ''}
            ${a.phone ? `<div>📞 ${a.phone}</div>` : ''}
          </div>
          <div class="card-actions">
            <button class="add-to-plan-btn" data-action="add-to-plan" data-ref="${refStr}">＋ Add to plan</button>
            ${a.address ? `<a class="action-btn" href="${gmapsLink(a.address)}" target="_blank" rel="noopener">🗺 Map</a>` : ''}
            ${a.phone ? `<a class="action-btn" href="${telLink(a.phone)}">📞 Call</a>` : ''}
            ${a.website ? `<a class="action-btn primary" href="${a.website}" target="_blank" rel="noopener">Site →</a>` : ''}
          </div>
        </div>
        `;
      }).join('')}

      <div class="callout tip">
        <div class="callout-label">Biltmore strategy</div>
        <div class="callout-text"><strong>Buy tickets online</strong> at biltmore.com (saves $10/ticket). For Tuesday's visit, get the 65+ discount for Mom (saves $18 — Tue/Wed only). Pick the earliest entry slot — crowds are smallest before 10 AM. Free wheelchairs at the entrance; even if not full-time, a smart fallback. Plan 4–6 hours total.</div>
      </div>
    </section>
  `;
}

function renderInfo() {
  const budget = TRIP_DATA.budget;
  const total = budget.reduce((s, b) => s + b.amount, 0);
  const packing = TRIP_DATA.packing;
  const alz = TRIP_DATA.alzTips;
  // Make the "front desk" contact reflect the currently-selected hotel.
  const selHotel = lookupRef('hotel:' + STORE.state.plan.hotelId);
  const contacts = TRIP_DATA.contacts.map(c => {
    if (/front desk/i.test(c.name) && selHotel) {
      return {
        name: `${selHotel.name} — front desk`,
        number: selHotel.phone || c.number,
        note: selHotel.phone ? 'Your selected hotel' : 'No direct number saved — verify when booking'
      };
    }
    return c;
  });

  return `
    <section class="section" data-section="info">
      <div class="section-eyebrow">The Practical</div>
      <h2 class="section-title">Info &amp; <em>lists</em></h2>
      <p class="section-intro">Budget breakdown, packing checklist (your checks are saved automatically), Alzheimer's-aware tips for the group, and emergency contacts.</p>

      <h3 class="subhead"><span>Budget estimate</span><span class="count">all-in</span></h3>
      <div class="budget-summary">
        <div class="budget-label">Estimated total</div>
        <div class="budget-total"><span class="currency">$</span>${total.toLocaleString()}</div>
        <div class="budget-bar"><div class="budget-fill" style="width: 100%;"></div></div>
        <div class="budget-breakdown">
          <span>4 people · 3 nights</span>
          <span>~$${Math.round(total/4).toLocaleString()}/person</span>
        </div>
      </div>

      <div class="card" style="padding: .5rem 1.25rem;">
        ${budget.map(b => `
          <div class="budget-line">
            <div class="label-text">${b.category}<small>${b.note}</small></div>
            <div class="amount">$${b.amount.toLocaleString()}</div>
          </div>
        `).join('')}
      </div>

      <div class="callout note">
        <div class="callout-label">Budget note</div>
        <div class="callout-text">Lodging budget request was $1,250 for 3 nights. The AC Hotel option comes in at ~<strong>$575 for two rooms</strong> — well under, leaving room for nicer dinners and the Biltmore tickets within the same overall envelope. Total trip estimate is ~$${total.toLocaleString()} all-in for four people.</div>
      </div>

      <h3 class="subhead"><span>Packing checklist</span><span class="count" id="packCount">0 / 0</span></h3>
      ${Object.entries(packing).map(([group, items]) => `
        <div class="checklist-group">
          <h4 style="font-family:var(--font-serif);font-size:1.15rem;font-weight:500;margin-bottom:.5rem;color:var(--ink);">${group}</h4>
          ${items.map((it, idx) => `
            <div class="checklist-item" data-check="pack-${group}-${idx}">
              <div class="checklist-checkbox"></div>
              <div class="checklist-label">${it.item}${it.note ? `<small>${it.note}</small>` : ''}</div>
            </div>
          `).join('')}
        </div>
      `).join('')}

      <h3 class="subhead"><span>Alzheimer's-aware tips</span><span class="count">for the group</span></h3>
      <div class="card">
        <ul class="alz-tips">
          ${alz.map(t => `<li><strong>${t.strong}.</strong> ${t.text}</li>`).join('')}
        </ul>
      </div>

      <h3 class="subhead"><span>Emergency &amp; medical</span><span class="count">save offline</span></h3>
      ${contacts.map(c => `
        <div class="card emergency-card">
          <div class="card-head">
            <div class="card-name">${c.name}</div>
            <a class="action-btn primary" href="${telLink(c.number)}" style="flex:0;padding:.45rem .75rem;font-size:10px;">📞 ${c.number}</a>
          </div>
          ${c.note ? `<div class="card-desc" style="margin:.5rem 0 0;">${c.note}</div>` : ''}
        </div>
      `).join('')}

      <div class="callout warning">
        <div class="callout-label">If something happens</div>
        <div class="callout-text">For non-urgent illness, head to <strong>Asheville Urgent Care</strong>. For anything chest-pain, breathing, or stroke-related, call 911 first — Mission Hospital is 5 min from Biltmore Village and has a full ER. Keep a written medication list in your wallet for Mom.</div>
      </div>
    </section>
  `;
}

/* ============================================================
   APP STATE — single reactive store

   Mutations via STORE.set('path.to.key', value) or STORE.update('path', fn).
   Subscribers fire after every change. Persistence is debounced + automatic.

   State shape:
   {
     plan:      { hotelId, slots: [...], customHotels: [...] },
     bookmarks: { 'rest-buxton-hall-barbecue': true, ... },
     checks:    { 'pack-Essentials-0': true, ... },
     ui:        { activeTab: 'overview', modal: null },
     theme:     'light' | 'dark',
     sync:      { gistId?, pat? }   // Phase 6b
   }
   ============================================================ */

const FEATURED_HOTEL = TRIP_DATA.lodging.find(h => h.featured)?.id || 'ac-biltmore';
const PERSIST_KEY = 'avl_state_v2';

const DEFAULT_STATE = {
  plan: { hotelId: FEATURED_HOTEL, slots: [], customHotels: [] },
  bookmarks: {},
  checks: {},
  ui: { activeTab: 'overview', modal: null },
  theme: 'light',
  sync: {}
};

const STORE = {
  state: JSON.parse(JSON.stringify(DEFAULT_STATE)),
  subscribers: new Set(),
  get(path) {
    return (path || '').split('.').filter(Boolean).reduce((o, k) => o?.[k], this.state);
  },
  set(path, value) {
    const keys = path.split('.');
    const last = keys.pop();
    const parent = keys.reduce((o, k) => (o[k] ??= {}), this.state);
    parent[last] = value;
    this.notify(path);
  },
  update(path, updater) { this.set(path, updater(this.get(path))); },
  subscribe(fn) { this.subscribers.add(fn); return () => this.subscribers.delete(fn); },
  notify(path) {
    this.subscribers.forEach(fn => {
      try { fn(path, this.state); } catch (e) { console.error('Subscriber error:', e); }
    });
  }
};

// Hydrate on boot — prefer v2 blob, else migrate from legacy v1 keys.
(function hydrate() {
  try {
    const raw = localStorage.getItem(PERSIST_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      // Shallow-merge over defaults so newly-added fields survive across versions
      STORE.state = {
        ...DEFAULT_STATE,
        ...stored,
        plan: { ...DEFAULT_STATE.plan, ...(stored.plan || {}) },
        ui:   { ...DEFAULT_STATE.ui,   ...(stored.ui   || {}) },
        sync: { ...DEFAULT_STATE.sync, ...(stored.sync || {}) }
      };
      return;
    }
    // First post-Phase-2 load — migrate legacy keys (don't lose user data).
    const legacyFavs   = JSON.parse(localStorage.getItem('avl_favs')   || '{}');
    const legacyChecks = JSON.parse(localStorage.getItem('avl_checks') || '{}');
    const legacyTheme  = localStorage.getItem('avl_theme') || 'light';
    STORE.state.bookmarks = legacyFavs;
    STORE.state.checks    = legacyChecks;
    STORE.state.theme     = legacyTheme;
  } catch (e) {
    console.warn('Store hydrate failed, starting fresh:', e);
  }
})();

let _persistTimer = null;
function persist() {
  clearTimeout(_persistTimer);
  _persistTimer = setTimeout(() => {
    try { localStorage.setItem(PERSIST_KEY, JSON.stringify(STORE.state)); }
    catch (e) { console.warn('Persist failed:', e); }
  }, 150);
}
STORE.subscribe(persist);

function mountSections() {
  ensureSlotsSeeded();
  cleanupStaleRefs();
  const root = $('#sections');
  root.innerHTML =
    renderOverview() +
    renderDrive() +
    renderStay() +
    renderPlan() +
    renderEat() +
    renderDo() +
    renderInfo();
  applyFavs();
  applyChecks();
  updatePackCount();
}

// Re-render a single section in place. Keeps other sections' DOM stable so
// scroll position and any fav-button DOM state persist outside the target.
function rerenderSection(name, renderFn) {
  const cur = document.querySelector(`section[data-section="${name}"]`);
  if (!cur) return;
  const wasActive = cur.classList.contains('active');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = renderFn();
  const next = wrapper.firstElementChild;
  if (wasActive) next.classList.add('active');
  cur.replaceWith(next);
  applyFavs(); // re-apply bookmarks to any new fav-btns in the swapped section
}

function rerenderPlan() { rerenderSection('plan', renderPlan); }

// Re-render the right sections based on what changed in the plan.
// - hotelId: proximity labels change everywhere → Plan, Stay, Overview, Info, Eat, Do
// - slots:   itinerary + assignment chips → Plan, Eat, Do
// - customHotels: the lodging list → Stay
STORE.subscribe((path) => {
  if (!path) return;
  if (path === 'plan.hotelId') {
    rerenderPlan();
    rerenderSection('stay', renderStay);
    rerenderSection('overview', renderOverview);
    rerenderSection('info', renderInfo);
    rerenderSection('eat', renderEat);
    rerenderSection('do', renderDo);
    updatePackCount();
    return;
  }
  if (path === 'plan.customHotels' || path.startsWith('plan.customHotels')) {
    rerenderSection('stay', renderStay);
    return;
  }
  if (path === 'plan' || path === 'plan.slots' || path.startsWith('plan.slots')) {
    rerenderPlan();
    rerenderSection('eat', renderEat);
    rerenderSection('do', renderDo);
  }
});

function applyFavs() {
  const bookmarks = STORE.state.bookmarks;
  $$('.fav-btn').forEach(btn => {
    const id = btn.dataset.fav;
    btn.classList.toggle('active', !!bookmarks[id]);
  });
}
function applyChecks() {
  const checks = STORE.state.checks;
  $$('.checklist-item').forEach(item => {
    const id = item.dataset.check;
    item.classList.toggle('checked', !!checks[id]);
  });
}

function updatePackCount() {
  const items = $$('.checklist-item');
  const checked = $$('.checklist-item.checked').length;
  const el = $('#packCount');
  if (el) el.textContent = `${checked} / ${items.length}`;
}

function switchTab(name) {
  STORE.set('ui.activeTab', name);
  $$('.tab').forEach(t => {
    const on = t.dataset.tab === name;
    t.classList.toggle('active', on);
    if (on) t.setAttribute('aria-current', 'page');
    else t.removeAttribute('aria-current');
  });
  $$('.section').forEach(s => s.classList.toggle('active', s.dataset.section === name));

  // During the trip, opening the Plan tab jumps straight to today's
  // current/next slot instead of the top.
  const todayDay = name === 'plan' ? currentTripDay() : null;
  if (todayDay) {
    setTimeout(() => {
      const el = document.querySelector('.slot-now')
        || document.querySelector(`.day-card[data-day="${todayDay}"]`)
        || $('#header');
      el?.scrollIntoView({ behavior: 'smooth', block: el.classList?.contains('slot-now') ? 'center' : 'start' });
    }, 60);
    return;
  }

  // Otherwise scroll past the hero so the section is visible — the sticky
  // header lands at the top of the viewport.
  const header = $('#header');
  if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyTheme() {
  const theme = STORE.state.theme;
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#14181a' : '#1a3a2e');
}

function bindEvents() {
  // Tab switching + all data-action delegation
  document.addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (tab) { switchTab(tab.dataset.tab); return; }

    const jump = e.target.closest('[data-jump]');
    if (jump) { switchTab(jump.dataset.jump); return; }

    const fav = e.target.closest('.fav-btn');
    if (fav) {
      e.preventDefault(); e.stopPropagation();
      const id = fav.dataset.fav;
      const next = !STORE.state.bookmarks[id];
      STORE.update('bookmarks', b => ({ ...b, [id]: next }));
      fav.classList.toggle('active', next);
      return;
    }

    // Picker close (✕ button or backdrop click handled separately below)
    if (e.target.closest('#pickerClose')) { e.preventDefault(); return closePicker(); }

    // Action delegation — slot interactions, add-to-plan, jump-to-slot
    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
      const action = actionEl.dataset.action;
      const slotId = actionEl.dataset.slotId;
      const ref = actionEl.dataset.ref;
      const hid = actionEl.dataset.hotelId;
      e.preventDefault();
      if (action === 'edit-time'          && slotId) return openTimeEditor(slotId);
      if (action === 'toggle-lock'        && slotId) return toggleSlotLock(slotId);
      if (action === 'swap-ref'           && slotId) return openSwapPicker(slotId);
      if (action === 'unassign-ref'       && slotId) return unassignSlot(slotId);
      if (action === 'cycle-reservation'  && slotId) return cycleReservation(slotId);
      if (action === 'add-to-plan'        && ref)    return openAddToPlanPicker(ref);
      if (action === 'jump-to-slot'       && slotId) return jumpToSlot(slotId);
      if (action === 'select-hotel'       && hid)    return selectHotel(hid);
      if (action === 'toggle-custom-form')           return toggleCustomForm();
      if (action === 'save-custom-hotel')            return saveCustomHotel();
      if (action === 'delete-custom-hotel' && hid)   return deleteCustomHotel(hid);
    }

    const chk = e.target.closest('.checklist-item');
    if (chk) {
      const id = chk.dataset.check;
      const next = !STORE.state.checks[id];
      STORE.update('checks', c => ({ ...c, [id]: next }));
      chk.classList.toggle('checked', next);
      updatePackCount();
      return;
    }
  });

  // Theme toggle
  $('#themeToggle').addEventListener('click', () => {
    const next = STORE.state.theme === 'dark' ? 'light' : 'dark';
    STORE.set('theme', next);
    applyTheme();
  });

  // Share plan
  $('#shareBtn')?.addEventListener('click', sharePlan);

  // Picker backdrop click — when user taps outside the sheet content,
  // close the modal. (The <dialog> Escape key handling is built-in.)
  const sheet = $('#pickerSheet');
  if (sheet) {
    sheet.addEventListener('click', e => {
      if (e.target === sheet) closePicker();
    });
    sheet.addEventListener('cancel', e => { /* Esc — let default close happen */ });
  }
}

/* ============================================================
   SLOT INTERACTIONS — time editor, lock, swap
   ============================================================ */

function getSlot(slotId) {
  return STORE.state.plan.slots.find(s => s.id === slotId);
}

function updateSlot(slotId, patch) {
  const next = STORE.state.plan.slots.map(s =>
    s.id === slotId ? { ...s, ...patch } : s
  );
  STORE.set('plan.slots', next);
}

function toggleSlotLock(slotId) {
  const slot = getSlot(slotId);
  if (!slot) return;
  updateSlot(slotId, { locked: !slot.locked });
}

function unassignSlot(slotId) {
  const slot = getSlot(slotId);
  if (!slot) return;
  updateSlot(slotId, { ref: null });
}

function cycleReservation(slotId) {
  const slot = getSlot(slotId);
  if (!slot) return;
  const order = [undefined, 'needed', 'confirmed', 'walkin'];
  const next = order[(order.indexOf(slot.reservation) + 1) % order.length];
  updateSlot(slotId, { reservation: next });
}

// Opens a native <input type="time"> off-screen for the picker, then
// applies the new time to the slot and cascades downstream unlocked
// same-day slots by the delta.
function openTimeEditor(slotId) {
  const slot = getSlot(slotId);
  if (!slot) return;

  const input = document.createElement('input');
  input.type = 'time';
  input.value = timeToHM(slot.time);
  input.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;';
  document.body.appendChild(input);

  let resolved = false;
  const cleanup = () => { if (!resolved) { resolved = true; input.remove(); } };

  input.addEventListener('change', () => {
    if (resolved) return;
    resolved = true;
    const newTime = hmToTime(input.value);
    const delta = timeToMinutes(newTime) - timeToMinutes(slot.time);
    if (delta !== 0) {
      // Update this slot first, then cascade
      updateSlot(slotId, { time: newTime });
      const { conflicts } = shiftSlotsAfter(slotId, delta);
      if (conflicts.length) {
        toast(`Heads up — ${conflicts.length} slot${conflicts.length > 1 ? 's' : ''} now overlap${conflicts.length > 1 ? '' : 's'} a locked time. Adjust as needed.`);
      }
    }
    input.remove();
  });
  input.addEventListener('blur', cleanup);

  // showPicker is the modern API (Chrome 99+, Safari 16+); fall back to click
  if (typeof input.showPicker === 'function') {
    try { input.showPicker(); } catch { input.click(); }
  } else {
    input.click();
  }
}

/* ----- PICKER (bottom-sheet modal) ----- */

const DAY_LABELS = ['', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function slotsReferencing(ref) {
  if (!ref) return [];
  return STORE.state.plan.slots.filter(s => s.ref === ref);
}

function openPicker({ eyebrow, title, options, onPick, showClear, clearLabel, currentId }) {
  const sheet = $('#pickerSheet');
  if (!sheet) return;

  $('#pickerEyebrow').textContent = eyebrow || '';
  $('#pickerTitle').innerHTML = title || '';

  const body = $('#pickerBody');
  body.innerHTML = options.length === 0
    ? '<div class="picker-empty">Nothing matches this slot.</div>'
    : options.map(opt => `
        <button class="picker-option ${opt.id === currentId ? 'current' : ''}" data-pick-id="${opt.id}">
          <div class="picker-name">${opt.name}</div>
          <div class="picker-meta">
            ${opt.tags.filter(t => t.label).map((t, i) =>
              `${i > 0 ? '<span class="dot">·</span>' : ''}<span class="${t.kind || ''}">${t.label}</span>`
            ).join('')}
          </div>
        </button>
      `).join('');

  if (showClear) {
    body.insertAdjacentHTML('beforeend',
      `<button class="picker-clear" data-pick-id="__clear__">${clearLabel || 'Remove from plan'}</button>`
    );
  }

  // Wire option clicks
  body.querySelectorAll('[data-pick-id]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.pickId;
      onPick(id === '__clear__' ? null : id);
      closePicker();
    }, { once: true });
  });

  if (typeof sheet.showModal === 'function') {
    try { sheet.showModal(); } catch { sheet.setAttribute('open', ''); }
  } else {
    sheet.setAttribute('open', '');
  }
}

function closePicker() {
  const sheet = $('#pickerSheet');
  if (!sheet) return;
  if (typeof sheet.close === 'function') {
    try { sheet.close(); } catch { sheet.removeAttribute('open'); }
  } else {
    sheet.removeAttribute('open');
  }
}

// ----- PULL flow: open picker from Plan tab to assign to a slot
function openSwapPicker(slotId) {
  const slot = getSlot(slotId);
  if (!slot) return;
  const hotelId = STORE.state.plan.hotelId;

  let pool = [];
  let kindLabel = '';

  if (slot.kind === 'meal') {
    pool = [
      ...TRIP_DATA.restaurants.map(r => ({ ...r, _refKind: 'restaurant' })),
      ...TRIP_DATA.treats.map(r => ({ ...r, _refKind: 'treat' }))
    ].filter(r => r.mealTypes?.includes(slot.mealType));
    kindLabel = (slot.mealType || 'meal').replace(/^./, c => c.toUpperCase());
  } else if (slot.kind === 'activity') {
    pool = TRIP_DATA.activities.map(a => ({ ...a, _refKind: 'activity' }));
    kindLabel = 'Activity';
  } else {
    return; // other kinds aren't swappable
  }

  // Sort: walk first, then drive ascending, then unknown
  const order = { walk: 0, drive: 1, unknown: 2 };
  pool.sort((a, b) => {
    const pa = proximity(hotelId, a);
    const pb = proximity(hotelId, b);
    if (order[pa.kind] !== order[pb.kind]) return order[pa.kind] - order[pb.kind];
    return (pa.minutes ?? 99) - (pb.minutes ?? 99);
  });

  const options = pool.map(item => {
    const p = proximity(hotelId, item);
    return {
      id: `${item._refKind}:${item.id}`,
      name: item.name,
      tags: [
        { label: item.cat || item.tagline || '', kind: '' },
        { label: item.price || '', kind: '' },
        { label: p.label || '', kind: p.kind }
      ]
    };
  });

  const dayLabel = DAY_LABELS[slot.day] || `Day ${slot.day}`;
  openPicker({
    eyebrow: 'Choose for this slot',
    title: `${kindLabel} · <em>${dayLabel} ${slot.time}</em>`,
    options,
    currentId: slot.ref,
    showClear: !!slot.ref,
    clearLabel: '✕ Remove pick (return to empty)',
    onPick: (newRef) => {
      updateSlot(slotId, { ref: newRef });
      if (newRef) {
        const picked = lookupRef(newRef);
        toast(`${picked?.name || 'Picked'} → ${dayLabel} ${slot.time}`);
      } else {
        toast(`${dayLabel} ${slot.time} cleared — tap to choose another`);
      }
    }
  });
}

// ----- PUSH flow: open picker from Eat/Do to assign this item to a slot
function openAddToPlanPicker(ref) {
  const item = lookupRef(ref);
  if (!item) return;
  const [kind] = ref.split(':');

  let eligibleSlots = [];
  if (kind === 'restaurant' || kind === 'treat') {
    eligibleSlots = STORE.state.plan.slots.filter(s =>
      s.kind === 'meal' && item.mealTypes?.includes(s.mealType)
    );
  } else if (kind === 'activity') {
    eligibleSlots = STORE.state.plan.slots.filter(s => s.kind === 'activity');
  }

  const options = eligibleSlots.map(slot => {
    const cur = lookupRef(slot.ref);
    const slotKindLabel = slot.kind === 'meal'
      ? (slot.mealType || 'meal').replace(/^./, c => c.toUpperCase())
      : 'Activity';
    const isCurrent = slot.ref === ref;
    return {
      id: slot.id,
      name: `${DAY_LABELS[slot.day]} · ${slot.time} · ${slotKindLabel}`,
      tags: [
        cur
          ? { label: isCurrent ? `Already here` : `Currently: ${cur.name}`, kind: isCurrent ? 'current-pick' : '' }
          : { label: 'Empty slot — tap to fill', kind: 'empty' }
      ]
    };
  });

  openPicker({
    eyebrow: 'Add to plan',
    title: `<em>${item.name}</em><br>which slot?`,
    options,
    showClear: false,
    onPick: (slotId) => {
      if (!slotId) return;
      const slot = getSlot(slotId);
      if (!slot) return;
      updateSlot(slotId, { ref });
      toast(`${item.name} → ${DAY_LABELS[slot.day]} ${slot.time}`);
    }
  });
}

/* ----- HOTEL SELECTION (Phase 5) ----- */

function selectHotel(hotelId) {
  if (STORE.state.plan.hotelId === hotelId) return; // already selected
  STORE.set('plan.hotelId', hotelId);
  const h = lookupRef('hotel:' + hotelId);
  toast(`Staying at ${h?.name || 'this hotel'} — plan updated`);
}

function toggleCustomForm() {
  const form = document.getElementById('customHotelForm');
  if (form) form.hidden = !form.hidden;
}

function saveCustomHotel() {
  const name = document.getElementById('chName')?.value.trim();
  if (!name) { toast('Give the hotel a name first.'); return; }
  const address = document.getElementById('chAddress')?.value.trim() || '';
  const neighborhood = document.getElementById('chNeighborhood')?.value || 'other';
  const notes = document.getElementById('chNotes')?.value.trim() || '';
  const id = 'custom-' + Date.now().toString(36);
  const hotel = {
    id, name, address,
    neighborhood: neighborhood === 'other' ? '' : neighborhood,
    custom: true,
    tagline: notes || 'Your custom pick',
    desc: notes || ''
  };
  STORE.update('plan.customHotels', list => [...(list || []), hotel]);
  STORE.set('plan.hotelId', id); // auto-select
  toast(`${name} added and selected`);
}

function deleteCustomHotel(hotelId) {
  const wasSelected = STORE.state.plan.hotelId === hotelId;
  STORE.update('plan.customHotels', list => (list || []).filter(h => h.id !== hotelId));
  if (wasSelected) STORE.set('plan.hotelId', FEATURED_HOTEL);
  toast('Custom hotel removed');
}

// ----- Jump from an assignment chip in Eat/Do to the slot in Plan
function jumpToSlot(slotId) {
  switchTab('plan');
  setTimeout(() => {
    const el = document.querySelector(`[data-slot-id="${slotId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('flash');
      setTimeout(() => el.classList.remove('flash'), 1400);
    }
  }, 380);
}

/* --- Lightweight toast --- */
let _toastTimer = null;
function toast(msg) {
  let el = $('#avlToast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'avlToast';
    el.className = 'avl-toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ============================================================
   SHARE PLAN (Phase 6a — URL-hash, zero infra)

   Serializes the plan into a compact, version-tagged, base64url payload
   carried in location.hash. Slots transmit only their mutable fields
   (time/locked/ref) keyed by id; the recipient merges those deltas onto
   their own SEED_SLOTS, so prose/structure always comes from their code.
   ============================================================ */

function b64urlEncode(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlDecode(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function serializePlan() {
  const p = STORE.state.plan;
  const slots = (p.slots || []).map(s => ({
    i: s.id, t: s.time, l: s.locked ? 1 : 0, r: s.ref || 0, rv: s.reservation || 0
  }));
  const payload = { v: 1, h: p.hotelId, c: p.customHotels || [], s: slots };
  return b64urlEncode(JSON.stringify(payload));
}

function deserializePlan(encoded) {
  const payload = JSON.parse(b64urlDecode(encoded));
  if (payload.v !== 1) throw new Error('Unsupported plan version: ' + payload.v);
  const byId = {};
  SEED_SLOTS.forEach(s => { byId[s.id] = { ...s }; });
  (payload.s || []).forEach(cs => {
    const base = byId[cs.i] || { id: cs.i, day: 99, kind: 'fixed' };
    base.time = cs.t;
    base.locked = !!cs.l;
    base.ref = cs.r || null;
    base.reservation = cs.rv || undefined;
    byId[cs.i] = base;
  });
  // Preserve seed order; append any non-seed slots at the end
  const slots = SEED_SLOTS.map(s => byId[s.id]).filter(Boolean);
  (payload.s || []).forEach(cs => {
    if (!SEED_SLOTS.find(s => s.id === cs.i)) slots.push(byId[cs.i]);
  });
  return { hotelId: payload.h, customHotels: payload.c || [], slots };
}

async function sharePlan() {
  const url = location.origin + location.pathname + '#p=' + serializePlan();
  const data = { title: 'Asheville 2026 · Our Plan', text: 'Here\'s our Asheville trip plan', url };
  if (navigator.share) {
    try { await navigator.share(data); return; }
    catch (e) { if (e.name === 'AbortError') return; /* else fall through */ }
  }
  try {
    await navigator.clipboard.writeText(url);
    toast('Share link copied — paste it to the family');
  } catch (e) {
    window.prompt('Copy this share link:', url);
  }
}

// On boot: if the URL carries a shared plan, load it over local state.
function loadSharedPlanFromHash() {
  const h = location.hash || '';
  if (!h.startsWith('#p=')) return false;
  try {
    const plan = deserializePlan(h.slice(3));
    STORE.state.plan = {
      ...STORE.state.plan,
      hotelId: plan.hotelId || STORE.state.plan.hotelId,
      customHotels: plan.customHotels || [],
      slots: plan.slots
    };
    persist();
    return true;
  } catch (e) {
    console.warn('Could not load shared plan from URL:', e);
    return false;
  }
}

function showSharedBanner() {
  const el = document.createElement('div');
  el.className = 'shared-banner';
  el.innerHTML = `<span>Viewing a shared plan. It's now saved on this device.</span><button id="dismissSharedBanner" aria-label="Dismiss">✕</button>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  el.querySelector('#dismissSharedBanner').addEventListener('click', () => {
    el.classList.remove('show');
    // Strip the hash so a refresh doesn't re-trigger the banner
    history.replaceState(null, '', location.pathname + location.search);
    setTimeout(() => el.remove(), 300);
  });
}

// PWA Install prompt
let deferredInstall;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstall = e;
  if (!localStorage.getItem('avl_install_dismissed')) {
    setTimeout(() => $('#installBanner').classList.add('show'), 4000);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  $('#installBtn')?.addEventListener('click', async () => {
    if (deferredInstall) {
      deferredInstall.prompt();
      await deferredInstall.userChoice;
      deferredInstall = null;
    }
    $('#installBanner').classList.remove('show');
  });
  $('#closeInstall')?.addEventListener('click', () => {
    $('#installBanner').classList.remove('show');
    localStorage.setItem('avl_install_dismissed', '1');
  });
});

// Service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// Init
applyTheme();
const _viewingShared = loadSharedPlanFromHash(); // may override plan before first render
mountSections();
bindEvents();
if (_viewingShared) showSharedBanner();
