/* ============================================================
   ASHEVILLE 2026 TRIP PWA
   Single-file data + render layer
   To reuse for future trips: edit TRIP_DATA below, swap hero
   ============================================================ */

const TRIP_DATA = {
  trip: {
    name: "Asheville 2026",
    dates: "Jun 28 – Jul 1, 2026",
    party: "4 travelers · 1 SUV",
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
      cat: "American · Farm-to-table",
      tags: ["Biltmore Village", "Walk from hotel", "Date-night"],
      desc: "The best restaurant inside Biltmore Village. Famous for their Reuben and pepper-grilled Brasstown ribeye. Reservations strongly recommended — book ahead.",
      address: "3 Boston Way, Asheville, NC 28803",
      phone: "+1 828-274-2439",
      website: "https://www.thecornerkitchen.com",
      meal: "Dinner",
      price: "$$$"
    },
    {
      name: "Rhubarb",
      cat: "Farm-to-table · Fine dining",
      tags: ["Downtown", "Special occasion", "James Beard nominated"],
      desc: "Chef John Fleer's seasonal Southern menu in the heart of downtown. Wood-fired flavors, locally sourced everything, beautiful room. Quieter than some downtown spots. Reserve in advance.",
      address: "7 SW Pack Square, Asheville, NC 28801",
      phone: "+1 828-785-1503",
      website: "https://www.rhubarbasheville.com",
      meal: "Dinner",
      price: "$$$$"
    },
    {
      name: "The Market Place",
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
      name: "Buxton Hall Barbecue",
      cat: "BBQ · Whole-hog",
      tags: ["Local favorite", "South Slope", "Casual"],
      desc: "Wood-smoked, pasture-raised whole-hog Eastern Carolina BBQ. The smoky pimento cheese & crackers, the whole-hog pulled pork plate, and their house fried chicken sandwich are all legendary. No reservations — go early.",
      address: "32 Banks Ave, Asheville, NC 28801",
      phone: "+1 828-232-7216",
      website: "https://buxtonhall.com",
      meal: "Lunch · Dinner",
      price: "$$"
    },
    {
      name: "12 Bones Smokehouse",
      cat: "BBQ · Ribs",
      tags: ["Local legend", "River Arts District", "No reservations"],
      desc: "The famous brown-sugar or blueberry-chipotle ribs. Smoked turkey sandwich with sugar bacon & brie is underrated. Lines on weekends — go at off-times. The River Arts location has more character.",
      address: "5 Riverside Dr, Asheville, NC 28801",
      phone: "+1 828-253-4499",
      website: "https://12bones.com",
      meal: "Lunch (closes early)",
      price: "$$"
    },
    {
      name: "Biscuit Head",
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
      cat: "American · Mountain views",
      tags: ["Blue Ridge Parkway", "The Views"],
      desc: "Only restaurant on the NC Blue Ridge Parkway. At 5,000 ft elevation with floor-to-ceiling mountain views. Open April–Oct. Reserve ahead for window tables.",
      address: "Blue Ridge Pkwy Milepost 408.6",
      phone: "+1 828-235-8228",
      website: "https://www.pisgahinn.com/dine/",
      meal: "Breakfast · Lunch · Dinner",
      price: "$$$"
    }
  ],

  // ===================== TREATS =====================
  treats: [
    {
      name: "The Hop Ice Cream Café",
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
      cat: "Donuts · Classic",
      tags: ["Biltmore Park area", "Get there early"],
      desc: "Locals' favorite for thick, soft, sell-out-fast donuts. Plain glazed, apple fritters, classic flavors done very well. Get there in the morning — they're often gone by 11.",
      address: "1830 Hendersonville Rd, Asheville, NC 28803",
      phone: "+1 828-274-8003",
      price: "$"
    },
    {
      name: "French Broad Chocolate Lounge",
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
      cat: "Drive · Crafts",
      tags: ["Free", "Easy walking", "AC inside"],
      desc: "Milepost 382.5. Free Southern Highland Craft Guild gallery — quilts, pottery, woodturning, jewelry. Beautiful but never crowded. Easy parking. The first stop on a Parkway scenic drive day.",
      address: "Blue Ridge Pkwy MP 382.5, Asheville",
      phone: "+1 828-298-7928",
      website: "https://www.craftguild.org",
      tickets: "Free",
      time: "1 hour"
    },
    {
      name: "Blue Ridge Parkway · Scenic Drive",
      cat: "Drive · Free",
      tags: ["Free", "Stay in the car if needed"],
      desc: "The 114-mile section through Asheville is fully open after Helene repairs. From the Folk Art Center, drive south toward Mt Pisgah (MP 408) and stop at overlooks. Easy on Mom — just pull off and look.",
      tickets: "Free",
      time: "1–3 hours, your pace",
      best: "Morning · less haze, less traffic"
    },
    {
      name: "North Carolina Arboretum",
      cat: "Gardens · Easy walking",
      tags: ["Paved paths", "Shuttle available"],
      desc: "434 acres with bonsai garden (a real highlight), quilt garden, easy paved trails. Shuttle service for those who can't walk far. Beautiful in summer. Near Parkway entrance.",
      address: "100 Frederick Law Olmsted Way, Asheville, NC 28806",
      phone: "+1 828-665-2492",
      website: "https://www.ncarboretum.org",
      tickets: "Parking $20/car (admission included)",
      time: "1.5–2 hours"
    },
    {
      name: "WNC Nature Center",
      cat: "Wildlife · Easy paths",
      tags: ["Cincinnati Zoo: 50% off!", "Local animals"],
      desc: "Small but well-done — wolves, cougars, otters, red wolves, farm animals. Paved easy paths. About 90 min is enough. The big bonus: Cincinnati Zoo members get 50% off admission with their card.",
      address: "75 Gashes Creek Rd, Asheville, NC 28805",
      phone: "+1 828-259-8092",
      website: "https://wildwnc.org",
      tickets: "$18.95 adult / $17.95 senior · 50% off w/ Cincinnati Zoo membership card",
      time: "1.5 hours"
    },
    {
      name: "Black Mountain · downtown stroll",
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
      cat: "Shopping · Small town",
      tags: ["Antiques", "Day-trip option"],
      desc: "15 min north of Asheville. Small antique district + tea room + bakery. Less polished than Black Mountain but charming. Skip if you do Black Mountain.",
      address: "Main St, Weaverville, NC",
      time: "1 hour"
    },
    {
      name: "Antique Tobacco Barn",
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
      cat: "Shopping · Walk from hotel",
      tags: ["Walkable", "Quaint"],
      desc: "Cobblestone streets, ~30 small shops, art galleries, boutiques. Village Antiques (25,000 sq ft of European antiques) is here. Easy walking, plenty of benches.",
      address: "Biltmore Village, Asheville",
      tickets: "Free",
      time: "1–2 hours"
    },
    {
      name: "Grove Park Inn (drive-by + lobby)",
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
    { category: "Gas (round trip from Cincinnati)", note: "~1,200 mi total · SUV", amount: 220 }
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
    { strong: "Have 'her chair' ready", text: "A folding camp chair or wheelchair in the SUV is golden for unplanned waits or long museum lines." },
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
      <p class="section-intro">Sunday after church we point the SUV south. Three nights tucked into Biltmore Village. A day at Vanderbilt's astonishing house, a slow morning along the Parkway, an afternoon antiquing in Black Mountain — then on to Hilton Head.</p>

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

function renderStay() {
  const items = TRIP_DATA.lodging;
  return `
    <section class="section" data-section="stay">
      <div class="section-eyebrow">Lodging</div>
      <h2 class="section-title">Where we <em>stay</em></h2>
      <p class="section-intro">Two rooms at the AC Biltmore Village is our top pick — newer, walking distance to dinner, indoor pool &amp; hot tub. Three backup options below for different priorities.</p>

      <h3 class="subhead"><span>Recommended &amp; alternatives</span><span class="count">${items.length} options</span></h3>

      ${items.map(h => `
        <div class="card lodging-card ${h.featured ? 'recommended' : ''}" data-id="${h.id}">
          ${h.featured ? '<div class="recommended-badge">★ Top pick</div>' : ''}
          <div class="card-head">
            <div>
              <div class="card-name">${h.name}</div>
              <div style="font-family:var(--font-serif);font-style:italic;color:var(--ink-faint);font-size:.92rem;margin-top:.2rem;">${h.tagline}</div>
              <div class="price-tag"><span class="currency">$</span>${h.price}<span class="nights">/ night · ${h.estTotal || ''}</span></div>
            </div>
            <button class="fav-btn" data-fav="lodging-${h.id}" aria-label="Save favorite"></button>
          </div>
          <div class="card-tags">${h.tags.map(t => `<span class="tag${t === 'Recommended' ? ' accent' : ''}">${t}</span>`).join('')}</div>
          <div class="card-desc">${h.desc}</div>
          ${h.why ? `<div class="timeline-note"><strong style="color:var(--accent);">Why it fits:</strong> ${h.why}</div>` : ''}
          <div class="amenities">${h.amenities.map(a => `<span class="amenity">${a}</span>`).join('')}</div>
          <div class="card-meta">
            ${h.address ? `<div>📍 <strong>${h.address}</strong></div>` : ''}
            ${h.phone ? `<div>📞 <strong>${h.phone}</strong></div>` : ''}
          </div>
          <div class="card-actions">
            ${h.address ? `<a class="action-btn" href="${gmapsLink(h.address)}" target="_blank" rel="noopener">🗺 Map</a>` : ''}
            ${h.phone ? `<a class="action-btn" href="${telLink(h.phone)}">📞 Call</a>` : ''}
            ${h.website ? `<a class="action-btn primary" href="${h.website}" target="_blank" rel="noopener">Book →</a>` : ''}
          </div>
        </div>
      `).join('')}

      <div class="callout tip">
        <div class="callout-label">Booking tip</div>
        <div class="callout-text">Late June is high-demand (4th of July week starts that weekend). <strong>Book at least 6 weeks ahead</strong> for best rates and room selection. Marriott/Hilton members: book direct for free WiFi and points. Always check the hotel's own website vs. Expedia — prices often match but the direct booking adds perks.</div>
      </div>
    </section>
  `;
}

function renderPlan() {
  const days = TRIP_DATA.itinerary;
  return `
    <section class="section" data-section="plan">
      <div class="section-eyebrow">Day by day</div>
      <h2 class="section-title">The <em>itinerary</em></h2>
      <p class="section-intro">Built around Mom's best hours — mornings for main events, afternoons gentler, evenings short. Times are guidelines, not commands.</p>

      ${days.map(d => `
        <div class="day-card">
          <div class="day-header">
            <div>
              <div class="day-number">Day ${d.day}</div>
              <div class="day-title">${d.title}</div>
            </div>
            <div class="day-date">${d.date}</div>
          </div>
          <div class="timeline">
            ${d.items.map(it => `
              <div class="timeline-item">
                <div class="timeline-time">${it.time}</div>
                <div class="timeline-title">${it.title}</div>
                <div class="timeline-detail">${it.detail}</div>
                ${it.note ? `<div class="timeline-note">${it.note}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </section>
  `;
}

function renderEat() {
  const restaurants = TRIP_DATA.restaurants;
  const treats = TRIP_DATA.treats;

  const cardOf = (r, prefix) => `
    <div class="card" data-id="${prefix}-${r.name}">
      <div class="card-head">
        <div>
          <div class="card-name">${r.name}</div>
          <div style="font-family:var(--font-serif);font-style:italic;color:var(--ink-faint);font-size:.9rem;margin-top:.2rem;">${r.cat} · ${r.price || ''}</div>
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
        ${r.address ? `<a class="action-btn" href="${gmapsLink(r.address)}" target="_blank" rel="noopener">🗺 Map</a>` : ''}
        ${r.phone ? `<a class="action-btn" href="${telLink(r.phone)}">📞 Call</a>` : ''}
        ${r.website ? `<a class="action-btn primary" href="${r.website}" target="_blank" rel="noopener">Site →</a>` : ''}
      </div>
    </div>
  `;

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

      ${items.map(a => `
        <div class="card">
          <div class="card-head">
            <div>
              <div class="card-name">${a.name}</div>
              <div style="font-family:var(--font-serif);font-style:italic;color:var(--ink-faint);font-size:.9rem;margin-top:.2rem;">${a.cat}</div>
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
            ${a.address ? `<a class="action-btn" href="${gmapsLink(a.address)}" target="_blank" rel="noopener">🗺 Map</a>` : ''}
            ${a.phone ? `<a class="action-btn" href="${telLink(a.phone)}">📞 Call</a>` : ''}
            ${a.website ? `<a class="action-btn primary" href="${a.website}" target="_blank" rel="noopener">Site →</a>` : ''}
          </div>
        </div>
      `).join('')}

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
  const contacts = TRIP_DATA.contacts;

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
   APP STATE + INTERACTIONS
   ============================================================ */

const STATE = {
  current: 'overview',
  favs: JSON.parse(localStorage.getItem('avl_favs') || '{}'),
  checks: JSON.parse(localStorage.getItem('avl_checks') || '{}'),
  theme: localStorage.getItem('avl_theme') || 'light'
};

function persistFavs() { localStorage.setItem('avl_favs', JSON.stringify(STATE.favs)); }
function persistChecks() { localStorage.setItem('avl_checks', JSON.stringify(STATE.checks)); }

function mountSections() {
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

function applyFavs() {
  $$('.fav-btn').forEach(btn => {
    const id = btn.dataset.fav;
    if (STATE.favs[id]) btn.classList.add('active');
  });
}
function applyChecks() {
  $$('.checklist-item').forEach(item => {
    const id = item.dataset.check;
    if (STATE.checks[id]) item.classList.add('checked');
  });
}

function updatePackCount() {
  const items = $$('.checklist-item');
  const checked = $$('.checklist-item.checked').length;
  const el = $('#packCount');
  if (el) el.textContent = `${checked} / ${items.length}`;
}

function switchTab(name) {
  STATE.current = name;
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  $$('.section').forEach(s => s.classList.toggle('active', s.dataset.section === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', STATE.theme === 'dark' ? 'dark' : '');
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', STATE.theme === 'dark' ? '#14181a' : '#1a3a2e');
}

function bindEvents() {
  // Tab switching
  document.addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (tab) { switchTab(tab.dataset.tab); return; }

    const jump = e.target.closest('[data-jump]');
    if (jump) { switchTab(jump.dataset.jump); return; }

    const fav = e.target.closest('.fav-btn');
    if (fav) {
      e.preventDefault(); e.stopPropagation();
      const id = fav.dataset.fav;
      STATE.favs[id] = !STATE.favs[id];
      fav.classList.toggle('active', STATE.favs[id]);
      persistFavs();
      return;
    }

    const chk = e.target.closest('.checklist-item');
    if (chk) {
      const id = chk.dataset.check;
      STATE.checks[id] = !STATE.checks[id];
      chk.classList.toggle('checked', STATE.checks[id]);
      persistChecks();
      updatePackCount();
      return;
    }
  });

  // Theme toggle
  $('#themeToggle').addEventListener('click', () => {
    STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('avl_theme', STATE.theme);
    applyTheme();
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
mountSections();
bindEvents();
