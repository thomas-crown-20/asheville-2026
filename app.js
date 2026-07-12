/* ============================================================
   ASHEVILLE + GATLINBURG 2026 TRIP PWA
   Jul 18-25, 2026 · 8 travelers (6 adults + 2 teens)
   To reuse: edit TRIP_DATA below, swap hero, regen icons
   ============================================================ */

const TRIP_DATA = {
  trip: {
    name: "Smokies & Blue Ridge 2026",
    dates: "Jul 18 – 25, 2026",
    party: "8 travelers · 6 adults + 2 teens",
    origin: "West Chester, OH",
    destination: "Gatlinburg TN & Asheville NC"
  },

  // ===================== DRIVE =====================
  drive: {
    overview: "Two legs down: about 5 hours to Gatlinburg on Saturday, then a short 1.5-hour hop to Asheville on Sunday afternoon after church and lunch in town. One long haul home on the 25th.",
    legs: [
      {
        title: "Saturday · Home → Gatlinburg",
        distance: "310 miles",
        duration: "~5h 0min driving",
        routeName: "I-75 S → I-40 E → US-321",
        arrive: "~3:00 PM",
        steps: [
          { marker: "A", title: "West Chester, OH", meta: "10:00 AM · Departure", desc: "Fuel up before hitting I-75 S. Long drive today — snacks loaded, playlists queued." },
          { marker: "B", title: "Lexington KY", meta: "~11:45 AM · gas + restroom", desc: "Good midpoint stop. Buc-ee's-style options or a Chick-fil-A near the interstate. Quick 20 min." },
          { marker: "C", title: "Knoxville, TN", meta: "~1:30 PM · lunch stop", desc: "Halfway-ish. Grab lunch to save your appetite for Gatlinburg strolling. Calhoun's on the River is a solid Knoxville classic if there's time." },
          { marker: "D", title: "Gatlinburg, TN", meta: "~3:00 PM · Arrival", desc: "Check in, unload, hit the pool. Walk downtown for dinner and Mad Dog's Creamery for dessert." }
        ]
      },
      {
        title: "Sunday · Gatlinburg → Asheville",
        distance: "82 miles",
        duration: "~1h 45min driving",
        routeName: "US-321 → I-40 E → Airbnb",
        arrive: "~4:00 PM",
        steps: [
          { marker: "A", title: "Church in Gatlinburg", meta: "Sun AM · service", desc: "First Baptist Gatlinburg or Roaring Fork Baptist are both walkable/short-drive from downtown hotels." },
          { marker: "B", title: "Lunch in town", meta: "~12:30 PM", desc: "Pancake Pantry (a Gatlinburg tradition) or Crockett's Breakfast Camp — bring appetite. Alt: Mama's Farmhouse in Pigeon Forge for family-style Southern." },
          { marker: "C", title: "Roll toward Asheville", meta: "~2:00 PM · scenic route", desc: "Take I-40 E through the Pigeon River Gorge — one of the prettiest interstate stretches anywhere. About 90 minutes." },
          { marker: "D", title: "West Asheville · Airbnb check-in", meta: "~4:00 PM · Sun Jul 19", desc: "129 Climbing Aster Way. Check-in opens at 4 PM sharp — plenty of time. Unload, groceries run before dinner." }
        ]
      },
      {
        title: "Saturday · Asheville → Home",
        distance: "440 miles",
        duration: "~7h 0min driving",
        routeName: "I-26 W → I-40 W → I-75 N",
        arrive: "evening",
        steps: [
          { marker: "A", title: "Airbnb checkout", meta: "Sat Jul 25 · 10:00 AM sharp", desc: "Pack the night before. Coffee + last morning walk, then out." },
          { marker: "B", title: "Knoxville lunch stop", meta: "~1:00 PM", desc: "Halfway home. Pick something quick — J.C. Holdway or a reliable Southern spot." },
          { marker: "C", title: "Home, West Chester", meta: "~6:00–7:00 PM", desc: "Long day. Unpack tomorrow." }
        ]
      }
    ]
  },

  // ===================== LODGING =====================
  lodging: [
    {
      id: "airbnb-asheville",
      name: "Airbnb · West Asheville",
      tagline: "Whole house · 8 people · Sun 19 – Sat 25",
      tags: ["Booked", "West Asheville", "Whole house"],
      price: null,
      nights: 6,
      estTotal: "Booked · confirmation HMEQTT4FZM",
      desc: "Home base for the week. 129 Climbing Aster Way in West Asheville — about 10 min drive to downtown, 15 min to Biltmore, 5 min to great neighborhood spots (Hole Doughnuts, Sunny Point Café, Biscuit Head). Check-in strict 4:00 PM Sunday; checkout strict 10:00 AM Saturday.",
      amenities: ["Full kitchen", "Sleeps 8", "West Asheville location", "Close to Hole Doughnuts"],
      address: "129 Climbing Aster Way, Asheville, NC 28806",
      website: "https://www.airbnb.com/trips/shared/4851c359-aa14-4eee-a8e1-96fabdf0febd?confCode=HMEQTT4FZM&principal_token=51b501c0-eb64-47ca-8ca8-1d11c4e375e1&s=67&unique_share_id=89c69328-c097-4260-a724-a3b53277f642",
      why: "Confirmed booking. All 8 under one roof, kitchen for grill night and sandwich lunches.",
      featured: true
    },
    {
      id: "greystone-gatlinburg",
      name: "Greystone Lodge on the River (Gatlinburg)",
      tagline: "Sat Jul 18 · walking distance downtown",
      tags: ["Sat Jul 18", "Downtown Gatlinburg", "Pool"],
      price: 180,
      nights: 1,
      estTotal: "≈ $600–900 for 4 rooms × 1 night",
      desc: "Family favorite right in downtown Gatlinburg — across from Ripley's Aquarium, walkable to everything on the Parkway. Heated outdoor pool with waterslide, free hot breakfast, free parking. Family suites sleep up to 5. Book 4 standard rooms or 2 family suites for the group of 8.",
      amenities: ["Heated pool + waterslide", "Free breakfast", "Free parking", "Family suites available", "Walk to Ripley's, SkyPark, Parkway"],
      address: "559 Parkway, Gatlinburg, TN 37738",
      phone: "+1 865-436-5621",
      website: "https://greystonelodgetn.com",
      why: "Best value for the group — pool the kids will use, walking distance to everywhere, free breakfast Sunday morning, sensibly priced for a one-night stop.",
      featured: true
    },
    {
      id: "margaritaville-gatlinburg",
      name: "Margaritaville Resort Gatlinburg",
      tagline: "Sat Jul 18 · splurge · 9.8 rating",
      tags: ["Sat Jul 18", "Splurge", "Downtown Gatlinburg"],
      price: 320,
      nights: 1,
      estTotal: "≈ $1,000–1,300 for 4 rooms × 1 night",
      desc: "Right in the heart of downtown next to Anakeesta and Ripley's Aquarium. Indoor + outdoor pools, waterslide, 24-hr fitness, room service. Newer, higher-end. Splurge option for a one-night send-off. Sleeps up to 6 in suites.",
      amenities: ["Indoor + outdoor pools", "Waterslide", "Onsite restaurant", "Walk to Anakeesta + Ripley's"],
      address: "539 Historic Nature Trail, Gatlinburg, TN 37738",
      phone: "+1 865-430-4200",
      website: "https://www.margaritavilleresortgatlinburg.com",
      why: "Nicest option. Worth it if you want the whole crew's Saturday night to feel special."
    },
    {
      id: "hi-express-gatlinburg",
      name: "Holiday Inn Express Gatlinburg Downtown",
      tagline: "Sat Jul 18 · value + water park",
      tags: ["Sat Jul 18", "Value", "Water park"],
      price: 165,
      nights: 1,
      estTotal: "≈ $550–700 for 4 rooms × 1 night",
      desc: "Solid budget-conscious pick. Connected to Holiday Inn Vacations resort which means you get access to a real water park + kids splash zone. Free hot breakfast. Walking distance to the Space Needle and everything on the Parkway. Rooms sleep up to 6.",
      amenities: ["Access to water park", "Kids splash zone", "Free hot breakfast", "Walk to downtown"],
      address: "560 Parkway, Gatlinburg, TN 37738",
      phone: "+1 865-436-3220",
      website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/gatlinburg/gktdt/hoteldetail",
      why: "Water park access for the teens without paying resort prices."
    }
  ],

  // ===================== ITINERARY =====================
  itinerary: [
    {
      day: 1,
      date: "Sat · Jul 18",
      title: "Drive to <em>Gatlinburg</em>",
      items: [
        { time: "10:00 AM", title: "Depart West Chester", detail: "Load up, top off tank, hit I-75 South. About 5 hours of driving." },
        { time: "1:30 PM", title: "Lunch · Knoxville", detail: "Halfway. Grab something quick or Calhoun's on the River if there's time." },
        { time: "3:00 PM", title: "Arrive Gatlinburg · check in", detail: "Unload, change, hit the hotel pool. Everyone decompress." },
        { time: "5:30 PM", title: "Walk the Parkway", detail: "Head into downtown Gatlinburg. Space Needle for the view if the crew wants it. Wander the shops.", note: "Everything on the Parkway is walkable from the recommended hotels." },
        { time: "6:30 PM", title: "Dinner in town", detail: "Peddler Steakhouse (nice), Cherokee Grill (upscale casual), or Bennett's Pit BBQ (casual, family-friendly)." },
        { time: "8:30 PM", title: "Mad Dog's Creamery & Donuts", detail: "731 East Parkway — the reason to come. Ice cream, funnel cakes, donuts. Order one of everything.", note: "The bear statue out front is the landmark." },
        { time: "10:00 PM", title: "Back to hotel", detail: "Early night — church in the morning." }
      ]
    },
    {
      day: 2,
      date: "Sun · Jul 19",
      title: "Gatlinburg <em>to Asheville</em>",
      items: [
        { time: "8:00 AM", title: "Hotel breakfast", detail: "Free hot breakfast at Greystone or Holiday Inn Express. Fuel up." },
        { time: "10:00 AM", title: "Church service", detail: "First Baptist Gatlinburg (downtown, 10:45 AM service) or Roaring Fork Baptist. Both are close to downtown hotels." },
        { time: "12:00 PM", title: "Lunch in town", detail: "Pancake Pantry (Gatlinburg icon, expect a line), Crockett's Breakfast Camp (huge portions), or Mama's Farmhouse for family-style Southern in Pigeon Forge." },
        { time: "2:00 PM", title: "Drive to Asheville", detail: "I-40 East through the Pigeon River Gorge. 90 minutes of gorgeous scenery — bring the camera." },
        { time: "4:00 PM", title: "Check in at the Airbnb", detail: "129 Climbing Aster Way, West Asheville. Check-in opens at 4 PM sharp.", note: "Confirmation HMEQTT4FZM." },
        { time: "5:00 PM", title: "Grocery run", detail: "Ingles or Whole Foods (both close to the Airbnb) for the week — breakfast items, sandwich fixings, drinks, snacks, grill supplies." },
        { time: "7:00 PM", title: "Dinner: casual first night", detail: "Sunny Point Café (5 min from the house) or order in — everyone's tired from the road." }
      ]
    },
    {
      day: 3,
      date: "Mon · Jul 20",
      title: "First full day · <em>ease in</em>",
      items: [
        { time: "8:30 AM", title: "Breakfast at the house or Biscuit Head", detail: "If going out: Biscuit Head West Asheville (walkable-ish from the Airbnb, huge biscuits, jam bar)." },
        { time: "10:30 AM", title: "Downtown Asheville stroll", detail: "Park downtown and walk. Grove Arcade, the Chihuly-esque Basilica of St Lawrence, the drum circle (Fri only), independent shops." },
        { time: "12:30 PM", title: "Lunch · Pack's Tavern", detail: "20 S Spruce St, right on Pack Square Park. Historic 1907 building, great patio, brisket mac & cheese is famous. Big enough for the group, takes reservations.", note: "★ Confirmed on your list. Reserve for 8." },
        { time: "2:30 PM", title: "River Arts District", detail: "Working artist studios, murals, riverside walk. Casual and adult+teen friendly." },
        { time: "5:00 PM", title: "Back to the house · rest / pool", detail: "Recharge before dinner." },
        { time: "7:00 PM", title: "Dinner · The Corner Kitchen (Biltmore Village)", detail: "Farm-to-table, cozy, reservations required for 8. Alt: Chestnut downtown." },
        { time: "9:00 PM", title: "The Hop Ice Cream", detail: "Handmade since 1978. West Asheville location is close to the house." }
      ]
    },
    {
      day: 4,
      date: "Tue · Jul 21",
      title: "Biltmore <em>Estate Day</em>",
      items: [
        { time: "7:30 AM", title: "Breakfast at the house", detail: "Light — lots of walking today." },
        { time: "9:00 AM", title: "Arrive Biltmore · early entry", detail: "Pre-buy tickets online (saves $10/ticket). Tuesday means smaller crowds than the weekend. Group of 8 — book adjacent time slots.", note: "Note: the $18 senior discount is 65+ only on Tue/Wed — mention if anyone qualifies." },
        { time: "9:30 AM", title: "Biltmore House self-guided tour", detail: "Audio tour ~1.5–2 hours. Elevator to upper floors. Teens usually love the basement (bowling alley, kitchens, servants' halls)." },
        { time: "11:30 AM", title: "Gardens + Conservatory", detail: "Easy garden paths, orchids in the Conservatory, photo spots everywhere." },
        { time: "12:30 PM", title: "Lunch · Stable Café (on Biltmore)", detail: "Eat in the original horse stalls. Trout BLT or chicken salad. No reservation needed." },
        { time: "2:00 PM", title: "Antler Hill Village + Farm", detail: "Free shuttle from the House. Shops, the farm with animals, the outdoor adventure center. Dairy bar for ice cream." },
        { time: "5:00 PM", title: "Back to Asheville · rest", detail: "Regroup at the house." },
        { time: "7:00 PM", title: "Dinner · Rhubarb or Cúrate", detail: "Rhubarb (farm-to-table, downtown), or Cúrate for Spanish tapas — great for a group ordering to share. Reserve well in advance for 8." },
        { time: "9:00 PM", title: "Hole Doughnuts nightcap", detail: "168 Haywood Rd, West Asheville — literally minutes from the Airbnb. Made-to-order, fresh out of the fryer.", note: "★ Confirmed on your list." }
      ]
    },
    {
      day: 5,
      date: "Wed · Jul 22",
      title: "Blue Ridge <em>Parkway Day</em>",
      items: [
        { time: "8:00 AM", title: "Breakfast · Sunny Point Café", detail: "West Asheville brunch spot beloved by locals. 5 min from the Airbnb. Line moves." },
        { time: "10:00 AM", title: "Drive the Parkway south", detail: "Enter at the NC Arboretum entrance (MP 393.6). Drive south toward Mt Pisgah. Stop at overlooks — bring cameras." },
        { time: "12:00 PM", title: "Sliding Rock (Pisgah National Forest)", detail: "Natural 60-ft granite waterslide with a pool at the bottom. Life guards on duty summer. Bring swimsuits, water shoes, towels. About 45 min from downtown Asheville, but a legendary teen memory.", note: "$5/person parking. Cold water! Pack a change of clothes." },
        { time: "2:30 PM", title: "Looking Glass Falls", detail: "Roadside 60-ft waterfall on US-276 near Sliding Rock. Everyone can see it from the pull-off." },
        { time: "4:00 PM", title: "Pisgah Inn Restaurant · view break", detail: "Blue Ridge Parkway MP 408.6. 5,000-ft elevation. Grab a drink or snack for the view. Reserve ahead for a meal if you want dinner." },
        { time: "6:30 PM", title: "Grill night at the Airbnb", detail: "Burgers, dogs, sausages. Big salad, chips, watermelon. Casual family dinner after a long adventure day.", note: "Prep the shopping list Mon or Tue." },
        { time: "9:00 PM", title: "Movie night at the house", detail: "Pajamas, popcorn, whatever's on. Or continue the porch conversation." }
      ]
    },
    {
      day: 6,
      date: "Thu · Jul 23",
      title: "River day · <em>tubing & town</em>",
      items: [
        { time: "9:00 AM", title: "Slow breakfast at the house", detail: "Everyone at their own pace." },
        { time: "11:00 AM", title: "French Broad River tubing", detail: "Zen Tubing or Asheville Adventure Center. 2-3 hour lazy float. Kids and adults all love this. Book same-day or day-before.", note: "Bring sunscreen, sunglasses on a strap, cheap water shoes." },
        { time: "2:00 PM", title: "Sandwich lunch back at the house", detail: "Deli sandwiches, chips, cold drinks on the deck. Easy." },
        { time: "3:30 PM", title: "Downtime · pool / porch / naps", detail: "Some folks rest, some walk the neighborhood." },
        { time: "6:00 PM", title: "Dinner · Buxton Hall Barbecue", detail: "Whole-hog Eastern Carolina BBQ, South Slope. No reservations — go early or plan to wait. The pimento cheese starter is legendary. Great group order.", note: "Alt: 12 Bones Smokehouse (River Arts) for the famous ribs." },
        { time: "8:30 PM", title: "Ice cream · The Hop or Ultimate", detail: "Take the ice cream to McCormick Field for a Tourists game if there's one going." }
      ]
    },
    {
      day: 7,
      date: "Fri · Jul 24",
      title: "Last full day · <em>your pick</em>",
      items: [
        { time: "9:00 AM", title: "Breakfast at the house", detail: "Use up what's in the fridge." },
        { time: "10:30 AM", title: "Option A: Chimney Rock State Park", detail: "45 min drive east. 315-ft elevator to the top of Chimney Rock for panoramic views. Hickory Nut Falls trail is easy-moderate. Great for the teens.", note: "$17/adult, cheaper for kids. Pack water." },
        { time: "10:30 AM", title: "Option B: Antique + shopping day", detail: "Antique Tobacco Barn (huge), Black Mountain village (charming small town), Biltmore Village boutiques. Easier day, still fun." },
        { time: "12:30 PM", title: "Lunch on the go", detail: "12 Bones ribs, or Bear's Smokehouse burnt ends, or a farm stand along the way." },
        { time: "3:00 PM", title: "Back to Asheville · pack a bit", detail: "Start pulling things together for tomorrow's checkout." },
        { time: "5:30 PM", title: "Sandwiches / grazing dinner at the house", detail: "Use up what's left. Charcuterie, cold cuts, salad, dessert." },
        { time: "7:30 PM", title: "Sunset at the Grove Park Inn terrace", detail: "290 Macon Ave. Free to enter the lobby and Sunset Terrace. Order drinks/desserts to enjoy the view. A real Asheville moment.", note: "Or the Omni Grove Park Inn — same thing. Historic mountain hotel." }
      ]
    },
    {
      day: 8,
      date: "Sat · Jul 25",
      title: "Drive <em>home</em>",
      items: [
        { time: "8:00 AM", title: "Final breakfast", detail: "Clean out the fridge. Coffee, whatever's left." },
        { time: "9:30 AM", title: "Final pack + walk-through", detail: "Trash out, dishes done. Airbnb rules." },
        { time: "10:00 AM", title: "Checkout · roll home", detail: "Strict 10 AM checkout. Head north on I-26 W → I-40 W → I-75 N." },
        { time: "1:00 PM", title: "Knoxville lunch stop", detail: "Halfway. Something quick." },
        { time: "6:00 PM", title: "Home", detail: "Long drive done. Unpack tomorrow." }
      ]
    }
  ],

  // ===================== RESTAURANTS =====================
  restaurants: [
    {
      name: "Pack's Tavern",
      cat: "American · Historic pub",
      tags: ["★ Your pick", "Downtown", "Groups OK"],
      desc: "Local favorite in a beautifully restored 1907 building next to Pack Square Park. 35+ local drafts, comfort food, huge portions. Brisket mac & cheese is the #1 seller. Big patio. Reserves for large groups.",
      address: "20 S Spruce St, Asheville, NC 28801",
      phone: "+1 828-225-6944",
      website: "https://packstavern.com",
      meal: "Lunch · Dinner",
      price: "$$"
    },
    {
      name: "The Corner Kitchen",
      cat: "American · Farm-to-table",
      tags: ["Biltmore Village", "Date-night"],
      desc: "Best restaurant inside Biltmore Village. Famous Reuben and pepper-grilled ribeye. Reservations needed for a group of 8 — book at least a week ahead.",
      address: "3 Boston Way, Asheville, NC 28803",
      phone: "+1 828-274-2439",
      website: "https://www.thecornerkitchen.com",
      meal: "Dinner",
      price: "$$$"
    },
    {
      name: "Rhubarb",
      cat: "Farm-to-table · Fine dining",
      tags: ["Downtown", "Special occasion"],
      desc: "Chef John Fleer's seasonal Southern menu on Pack Square. Wood-fired flavors, mostly local sourcing. Reserve well ahead for 8.",
      address: "7 SW Pack Square, Asheville, NC 28801",
      phone: "+1 828-785-1503",
      website: "https://www.rhubarbasheville.com",
      meal: "Dinner",
      price: "$$$$"
    },
    {
      name: "Cúrate",
      cat: "Spanish tapas",
      tags: ["Downtown", "Great for groups"],
      desc: "James Beard–winner Katie Button's Spanish tapas. Shareable plates make it perfect for 8. Book far ahead. Bar seats without reservation.",
      address: "13 Biltmore Ave, Asheville, NC 28801",
      phone: "+1 828-239-2946",
      website: "https://curatetapasbar.com",
      meal: "Dinner",
      price: "$$$"
    },
    {
      name: "Buxton Hall Barbecue",
      cat: "BBQ · Whole-hog",
      tags: ["South Slope", "No reservations"],
      desc: "Wood-smoked, pasture-raised whole-hog Eastern Carolina BBQ. Smoky pimento cheese, whole-hog pulled pork, house fried chicken sandwich are famous. Go early with the group.",
      address: "32 Banks Ave, Asheville, NC 28801",
      phone: "+1 828-232-7216",
      website: "https://buxtonhall.com",
      meal: "Lunch · Dinner",
      price: "$$"
    },
    {
      name: "12 Bones Smokehouse",
      cat: "BBQ · Ribs",
      tags: ["River Arts District", "Local legend"],
      desc: "Famous brown-sugar and blueberry-chipotle ribs. Sells out — go by 1 PM. River Arts location has more character. No reservations.",
      address: "5 Riverside Dr, Asheville, NC 28801",
      phone: "+1 828-253-4499",
      website: "https://12bones.com",
      meal: "Lunch (closes early)",
      price: "$$"
    },
    {
      name: "Biscuit Head",
      cat: "Breakfast · Southern",
      tags: ["Breakfast", "West Asheville close"],
      desc: "Massive cathouse biscuits smothered in shiitake gravy or piled with fried chicken. Legendary jam bar. Line moves — arrive by 9 AM.",
      address: "733 Haywood Rd, Asheville, NC 28806",
      phone: "+1 828-333-5145",
      website: "https://biscuitheads.com",
      meal: "Breakfast · Lunch",
      price: "$$"
    },
    {
      name: "Sunny Point Café",
      cat: "Brunch · Southern",
      tags: ["West Asheville close", "Local favorite"],
      desc: "Beloved neighborhood brunch — shrimp & grits, Southern Benedict, huevos rancheros. 5 min from the Airbnb.",
      address: "626 Haywood Rd, Asheville, NC 28806",
      phone: "+1 828-252-0055",
      website: "https://sunnypointcafe.com",
      meal: "Breakfast · Lunch",
      price: "$$"
    },
    {
      name: "Stable Café (on Biltmore)",
      cat: "Casual · Southern",
      tags: ["Inside Biltmore"],
      desc: "Inside the original Biltmore stables — eat in horse stalls. Trout BLT, chicken salad, hamburger. Lunch only. No reservations.",
      address: "Biltmore Estate, Asheville",
      phone: "+1 800-411-3812",
      website: "https://www.biltmore.com/restaurants/stable-cafe/",
      meal: "Lunch",
      price: "$$"
    },
    {
      name: "Chestnut",
      cat: "American · Refined",
      tags: ["Downtown", "Something for everyone"],
      desc: "Sister to Corner Kitchen. Creative seasonal American — crowd-pleaser menu that works for a group with mixed preferences.",
      address: "48 Biltmore Ave, Asheville, NC 28801",
      phone: "+1 828-575-2667",
      website: "https://chestnutasheville.com",
      meal: "Dinner",
      price: "$$$"
    },
    {
      name: "Bear's Smokehouse",
      cat: "BBQ · Kansas City",
      tags: ["South Slope", "Burnt ends"],
      desc: "KC-style with serious burnt ends and brisket. Great patio. Smaller lines than Buxton Hall, equally good in a different lane.",
      address: "135 Coxe Ave, Asheville, NC 28801",
      phone: "+1 828-575-2462",
      website: "https://www.bearsbbq.com",
      meal: "Lunch · Dinner",
      price: "$$"
    },
    {
      name: "Pisgah Inn Restaurant",
      cat: "American · Mountain views",
      tags: ["Blue Ridge Parkway", "The View"],
      desc: "Only restaurant on the NC Blue Ridge Parkway. 5,000 ft elevation. Floor-to-ceiling mountain views. Open Apr–Oct. Reserve for window tables.",
      address: "Blue Ridge Pkwy MP 408.6",
      phone: "+1 828-235-8228",
      website: "https://www.pisgahinn.com/dine/",
      meal: "Breakfast · Lunch · Dinner",
      price: "$$$"
    },
    // Gatlinburg spots
    {
      name: "Peddler Steakhouse (Gatlinburg)",
      cat: "Steakhouse · Riverside",
      tags: ["Gatlinburg Sat", "Nicer dinner"],
      desc: "Classic Gatlinburg steakhouse on the Little Pigeon River. Fresh salad bar, tableside steak-cutting. Reserve for 8.",
      address: "820 River Rd, Gatlinburg, TN 37738",
      phone: "+1 865-436-5794",
      website: "https://peddlergatlinburg.com",
      meal: "Dinner",
      price: "$$$"
    },
    {
      name: "Pancake Pantry (Gatlinburg)",
      cat: "Breakfast · Iconic",
      tags: ["Gatlinburg Sun", "Expect a line"],
      desc: "Gatlinburg institution since 1960. 24+ kinds of pancakes. Sunday morning line is real — go early or plan the wait. Doesn't take reservations.",
      address: "628 Parkway, Gatlinburg, TN 37738",
      phone: "+1 865-436-4724",
      website: "http://pancakepantry.com",
      meal: "Breakfast · Lunch",
      price: "$$"
    },
    {
      name: "Crockett's Breakfast Camp (Gatlinburg)",
      cat: "Breakfast · Huge portions",
      tags: ["Gatlinburg Sun", "Family-style"],
      desc: "Rustic mountain-cabin feel, massive breakfasts, cinnamon rolls the size of your face. Alternative to Pancake Pantry with lighter lines.",
      address: "1103 Parkway, Gatlinburg, TN 37738",
      phone: "+1 865-325-1403",
      website: "https://crockettsbreakfastcamp.com",
      meal: "Breakfast",
      price: "$$"
    }
  ],

  // ===================== TREATS =====================
  treats: [
    {
      name: "Mad Dog's Creamery & Donuts (Gatlinburg)",
      cat: "Ice cream + donuts",
      tags: ["★ Your pick", "Sat night", "Gatlinburg"],
      desc: "The one-stop sweet shop in the Smokies since 2016. Hand-dipped ice cream, soft serve, donuts made fresh daily, funnel cakes, cotton candy burritos. Look for the black bear statue. Outdoor seating.",
      address: "731 East Parkway, Gatlinburg, TN 37738",
      phone: "+1 865-430-5757",
      website: "https://www.maddogscreamery.com",
      price: "$"
    },
    {
      name: "Hole Doughnuts",
      cat: "Donuts · Fried to order",
      tags: ["★ Your pick", "West Asheville", "Close to house"],
      desc: "Locals' pick for best in Asheville. Made-to-order, out of the fryer, into your hand. Sesame, grapefruit cardamom, glazed — nothing bad on the menu. Literally minutes from the Airbnb.",
      address: "168 Haywood Rd, Asheville, NC 28806",
      phone: "+1 828-505-3275",
      website: "https://holedoughnuts.com",
      price: "$"
    },
    {
      name: "The Hop Ice Cream Café",
      cat: "Ice cream · Since 1978",
      tags: ["West Asheville close"],
      desc: "Handmade ice cream, dairy + vegan options. Cozy vibe. West Asheville location is close to the Airbnb; also on Merrimon.",
      address: "721 Haywood Rd, Asheville · 640 Merrimon Ave",
      phone: "+1 828-254-2224",
      website: "https://thehopicecream.com",
      price: "$"
    },
    {
      name: "Ultimate Ice Cream",
      cat: "Ice cream · Locally made",
      tags: ["North Asheville"],
      desc: "Hand-crafted since the 80s. Rotating flavor of the month. Fresh strawberry, Belgian chocolate, salted caramel are standouts.",
      address: "1070 Tunnel Rd · 195 Charlotte St",
      phone: "+1 828-252-5650",
      website: "https://ultimateicecream.com",
      price: "$"
    },
    {
      name: "Vortex Doughnuts",
      cat: "Donuts · Creative",
      tags: ["South Slope", "Wed half-off"],
      desc: "Inventive flavors — honey caramel pistachio, beer-glazed pretzel, orange creamsicle. Wednesdays half off. Vegan + GF options.",
      address: "32 Banks Ave #106, Asheville, NC 28801",
      phone: "+1 828-552-3010",
      website: "https://vortexdoughnuts.com",
      price: "$"
    },
    {
      name: "French Broad Chocolate Lounge",
      cat: "Chocolate · Desserts",
      tags: ["Downtown", "Iconic"],
      desc: "Asheville's most famous dessert spot. Truffles, drinking chocolate, cake, ice cream. Always a line — worth it.",
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
      tags: ["Tue or Wed", "Pre-buy online"],
      desc: "America's largest home, 8,000-acre estate. Self-guided audio tour, gardens, Antler Hill Village with shuttle, farm animals, dairy bar. Plan a full day. Teens usually love the basement (bowling alley, kitchens).",
      address: "1 Lodge St, Asheville, NC 28803",
      phone: "+1 800-411-3812",
      website: "https://www.biltmore.com",
      tickets: "$78–132 adult (varies by season). Online saves $10/ticket. 65+ save $18 on Tue/Wed.",
      time: "Full day",
      best: "Tuesday — smaller crowd than weekend"
    },
    {
      name: "Sliding Rock (Pisgah National Forest)",
      cat: "Adventure · Natural waterslide",
      tags: ["Great for teens", "Cold water"],
      desc: "60-ft natural granite waterslide with a pool at the bottom. Lifeguards on duty in summer. Bring swimsuits, water shoes, towels. About 45 min from the Airbnb.",
      address: "Sliding Rock Rd, Pisgah Forest, NC 28768",
      tickets: "$5/person parking",
      time: "1.5–2 hours",
      best: "Wednesday's Parkway day"
    },
    {
      name: "French Broad River Tubing",
      cat: "Adventure · Lazy river",
      tags: ["Great for teens", "Great for group"],
      desc: "2–3 hour lazy float down the French Broad. Zen Tubing and Asheville Adventure Center both run trips. Book same-day or day-before. Bring sunscreen, water shoes, and dry bags for phones.",
      website: "https://zentubing.com",
      tickets: "~$20–25/person incl. shuttle",
      time: "3 hours w/ shuttle",
      best: "Warm afternoon (Thu)"
    },
    {
      name: "Chimney Rock State Park",
      cat: "Views · Easy hike",
      tags: ["Great for teens", "45 min drive"],
      desc: "315-ft elevator to Chimney Rock summit for panoramic views. Hickory Nut Falls trail (easy-moderate, 1.5 mi RT) leads to a 404-ft waterfall. Views of Lake Lure.",
      address: "431 Main St, Chimney Rock, NC 28720",
      phone: "+1 828-625-9611",
      website: "https://www.chimneyrockpark.com",
      tickets: "$17 adult, $8 youth (5-15)",
      time: "3–4 hours w/ drive"
    },
    {
      name: "Blue Ridge Parkway · Scenic Drive",
      cat: "Drive · Free",
      tags: ["Free", "Any day"],
      desc: "114 miles around Asheville are fully open after Helene repairs. From Asheville, drive south toward Mt Pisgah (MP 408) for the best overlooks and Pisgah Inn.",
      tickets: "Free",
      time: "1–3 hours"
    },
    {
      name: "Looking Glass Falls",
      cat: "Waterfall · Roadside",
      tags: ["Everyone can see", "Free"],
      desc: "60-ft roadside waterfall on US-276 near Sliding Rock. See it from the parking lot, or walk down for a close-up. No hike needed.",
      address: "US-276, Pisgah Forest, NC",
      tickets: "Free",
      time: "20 min"
    },
    {
      name: "River Arts District",
      cat: "Art · Walkable",
      tags: ["Downtown-ish", "Kid + adult friendly"],
      desc: "Working artist studios in old industrial buildings. Murals, glassblowing, pottery, printmaking demos. Wilma Dykeman Riverwalk connects the buildings. Grab coffee at Ultra.",
      address: "River Arts District, Asheville",
      tickets: "Free (individual studios vary)",
      time: "1.5 hours"
    },
    {
      name: "Grove Park Inn (drive-by + terrace)",
      cat: "Historic · Free lobby",
      tags: ["Sunset drinks", "Easy"],
      desc: "Historic mountain hotel. The lobby has massive stone fireplaces you can just walk into. Sunset Terrace is open to non-guests — order drinks/dessert for the view. A real Asheville moment.",
      address: "290 Macon Ave, Asheville, NC 28804",
      phone: "+1 828-252-2711",
      tickets: "Free lobby · drinks/food for purchase",
      time: "1 hour"
    },
    {
      name: "Black Mountain village",
      cat: "Small-town stroll",
      tags: ["15 min east", "Antiques"],
      desc: "Charming walkable downtown 15 miles east. Antique shops, galleries, coffee. Easy day-trip stop. Key City Antiques is a standout.",
      address: "Downtown Black Mountain, NC",
      website: "https://visitblackmountainnc.org",
      tickets: "Free",
      time: "1–2 hours"
    },
    {
      name: "Antique Tobacco Barn",
      cat: "Shopping · Antiques",
      tags: ["Huge", "Weather-proof"],
      desc: "77,000+ sq ft of antiques in a historic tobacco warehouse — Asheville's biggest. Easy to lose an hour or an afternoon.",
      address: "75 Swannanoa River Rd, Asheville, NC 28805",
      phone: "+1 828-252-7291",
      website: "https://atbarn.com",
      tickets: "Free",
      time: "1–2 hours"
    },
    {
      name: "WNC Nature Center",
      cat: "Wildlife · Easy paths",
      tags: ["Kids OK", "Local wildlife"],
      desc: "Wolves, cougars, otters, red wolves, farm animals. Paved easy paths. ~90 min. If any of the group has a Cincinnati Zoo membership, admission is 50% off.",
      address: "75 Gashes Creek Rd, Asheville, NC 28805",
      phone: "+1 828-259-8092",
      website: "https://wildwnc.org",
      tickets: "$18.95 adult / $17.95 senior · 50% off w/ Cincinnati Zoo card",
      time: "1.5 hours"
    },
    // Gatlinburg-side activities
    {
      name: "Ober Mountain (Gatlinburg)",
      cat: "Amusement · Chairlift",
      tags: ["Sat evening", "Great for teens"],
      desc: "Aerial tramway from downtown Gatlinburg up the mountain. Alpine coaster, ice skating (indoors, year-round), scenic chairlift, wildlife encounters. Perfect Saturday-evening activity.",
      address: "1339 Ski Mountain Rd, Gatlinburg, TN 37738",
      phone: "+1 865-436-5423",
      website: "https://obermountain.com",
      tickets: "Varies · buy per-activity or combo",
      time: "2–3 hours"
    },
    {
      name: "Gatlinburg SkyLift Park",
      cat: "Views · Suspension bridge",
      tags: ["Sat evening", "Iconic"],
      desc: "Chairlift up to a mountain-top park with SkyBridge — longest pedestrian suspension bridge in North America. Glass panels in the middle. Views for miles.",
      address: "765 Parkway, Gatlinburg, TN 37738",
      phone: "+1 865-436-4307",
      website: "https://gatlinburgskylift.com",
      tickets: "~$36 adult · $25 youth",
      time: "1.5 hours"
    },
    {
      name: "Ripley's Aquarium of the Smokies (Gatlinburg)",
      cat: "Aquarium · All-weather",
      tags: ["Sat rain plan", "Kid-friendly"],
      desc: "Well-reviewed aquarium in downtown Gatlinburg. Shark tunnel, penguins, touch tank, sting ray bay. Solid rainy-Saturday alternative. Buy timed tickets online to skip lines.",
      address: "88 River Rd, Gatlinburg, TN 37738",
      phone: "+1 865-430-8808",
      website: "https://www.ripleyaquariums.com/gatlinburg",
      tickets: "~$45 adult · $28 youth",
      time: "2 hours"
    }
  ],

  // ===================== BUDGET =====================
  budget: [
    { category: "Airbnb (Asheville, 6 nights)", note: "Already booked", amount: null, booked: true },
    { category: "Gatlinburg hotel (Sat)", note: "Est. 4 rooms × 1 night, mid-tier", amount: 700 },
    { category: "Biltmore tickets", note: "8 people × ~$95 avg (online)", amount: 760 },
    { category: "Sliding Rock + Chimney Rock", note: "Parking + admission", amount: 150 },
    { category: "French Broad tubing", note: "8 × ~$22", amount: 175 },
    { category: "Gatlinburg extras (Ober, SkyLift, aquarium)", note: "Pick 1-2 for Sat", amount: 250 },
    { category: "Dinners out (5-6 nights)", note: "Group of 8, mix of casual + nicer", amount: 2000 },
    { category: "Breakfasts / lunches", note: "Mix of house + spots", amount: 500 },
    { category: "Groceries + grill supplies", note: "Airbnb kitchen for the week", amount: 350 },
    { category: "Ice cream / donuts / coffee", note: "Trip essential", amount: 200 },
    { category: "Gas (round trip)", note: "~1,500 mi total, 2 vehicles est.", amount: 350 }
  ],

  // ===================== PACKING =====================
  packing: {
    "Essentials": [
      { item: "IDs (all 8)", note: "Required to check in at hotels" },
      { item: "Cash + credit cards", note: "Some BBQ spots are cash-friendly" },
      { item: "Phone chargers + car chargers", note: "Long drive days" },
      { item: "Medications", note: "Plus a 2-day backup for anyone on daily meds" },
      { item: "Insurance cards", note: "All 8" },
      { item: "Airbnb confirmation (HMEQTT4FZM)", note: "Screenshot for offline" },
      { item: "Gatlinburg hotel confirmation", note: "Once booked" },
      { item: "Biltmore tickets (pre-bought)", note: "Save to phone wallet" }
    ],
    "Clothes (warm summer)": [
      { item: "T-shirts (5-6)", note: "Light, breathable" },
      { item: "Shorts / comfortable pants (3-4)", note: "" },
      { item: "One nicer outfit each", note: "For Rhubarb, Cúrate, or Peddler Steakhouse" },
      { item: "Light jacket / hoodie", note: "Mornings can be 60°F in Asheville" },
      { item: "Swimsuits", note: "Hotel pool + Sliding Rock + tubing" },
      { item: "Pajamas", note: "" },
      { item: "Walking shoes (broken-in)", note: "Biltmore = a lot of steps" },
      { item: "Sandals or flip-flops", note: "" },
      { item: "Water shoes", note: "Sliding Rock is granite + cold water" }
    ],
    "Toiletries & health": [
      { item: "Sunscreen (SPF 30+)", note: "River tubing = full sun" },
      { item: "Bug spray", note: "Hiking + evenings on the porch" },
      { item: "Allergy meds", note: "Pollen season" },
      { item: "Ibuprofen / Tylenol", note: "" },
      { item: "Hand sanitizer", note: "" },
      { item: "Lip balm", note: "Drier in the mountains" }
    ],
    "For the group": [
      { item: "Reusable water bottles (8)", note: "Refill everywhere" },
      { item: "Sunglasses (+ straps for tubing)", note: "" },
      { item: "Cameras / phones", note: "The Parkway is a photo trip" },
      { item: "Board games or cards", note: "Airbnb evenings" },
      { item: "Cheap dry bag for tubing", note: "For phones on the river" },
      { item: "Cooler + snacks for the drive", note: "Trail mix, fruit, jerky" },
      { item: "Reusable bags", note: "Antique / grocery runs" }
    ]
  },

  // ===================== INFO =====================
  contacts: [
    { name: "Emergency", number: "911" },
    { name: "Mission Hospital (Asheville)", number: "+1 828-213-1111", note: "Major hospital + ER 24/7. About 15 min from West Asheville." },
    { name: "Asheville Urgent Care - Biltmore", number: "+1 828-274-2700", note: "MyCare AVL — Biltmore Park location." },
    { name: "LeConte Medical Center (Sevierville, TN)", number: "+1 865-446-7000", note: "Nearest ER to Gatlinburg — about 15 min north." },
    { name: "CVS Pharmacy (West Asheville)", number: "+1 828-252-8040", note: "" },
    { name: "Airbnb Support", number: "+1 855-424-7262", note: "24/7 if anything goes sideways with the booking." },
    { name: "Biltmore Estate", number: "+1 800-411-3812", note: "" }
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
      <p class="section-intro">Saturday: drive down to Gatlinburg, hotel pool, dinner on the Parkway, Mad Dog's for dessert. Sunday: church, lunch in town, then over to the Asheville Airbnb. Six full days of mountains, Biltmore, BBQ, and the river.</p>

      <div class="at-a-glance">
        <div class="glance-tile"><div class="label">Nights</div><div class="value"><em>7</em></div></div>
        <div class="glance-tile"><div class="label">Travelers</div><div class="value"><em>8</em></div></div>
        <div class="glance-tile"><div class="label">Biltmore</div><div class="value"><em>Tue</em></div></div>
        <div class="glance-tile"><div class="label">Return</div><div class="value"><em>Sat 25</em></div></div>
      </div>

      <h3 class="subhead"><span>Weather (estimated)</span><span class="count">late-July avg</span></h3>
      <div class="weather-strip">
        <div class="weather-day"><div class="day-abbr">Sat 18</div><div class="cond">⛅</div><div class="temp">87°<small>/68°</small></div></div>
        <div class="weather-day"><div class="day-abbr">Sun 19</div><div class="cond">🌦️</div><div class="temp">85°<small>/67°</small></div></div>
        <div class="weather-day"><div class="day-abbr">Wed 22</div><div class="cond">☀️</div><div class="temp">86°<small>/66°</small></div></div>
        <div class="weather-day"><div class="day-abbr">Sat 25</div><div class="cond">🌤️</div><div class="temp">87°<small>/67°</small></div></div>
      </div>
      <p style="font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;color:var(--ink-faint);text-align:center;margin-bottom:1.5rem;">Asheville sits at 2,100 ft · warmer in Gatlinburg (1,300 ft) · check forecast closer</p>

      <div class="callout tip">
        <div class="callout-label">Confirmed so far</div>
        <div class="callout-text"><strong>Airbnb</strong> in West Asheville (Sun 19 – Sat 25) &middot; <strong>Biltmore</strong> Tuesday for smaller crowds &middot; <strong>Pack's Tavern</strong>, <strong>Hole Doughnuts</strong>, and <strong>Mad Dog's Creamery</strong> in Gatlinburg all on the list. Everything else can flex.</div>
      </div>

      <div class="callout note">
        <div class="callout-label">Meal cadence</div>
        <div class="callout-text">Eat out most dinners, <strong>grill once</strong> (Wednesday after the Parkway looks good), <strong>sandwich lunches</strong> at the house 1–2 days. Ice cream every day is on the itinerary.</div>
      </div>

      <h3 class="subhead"><span>Quick Jump</span><span class="count">tap a section</span></h3>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:.6rem;">
        <button class="action-btn" data-jump="drive">🚗 Drive Days</button>
        <button class="action-btn" data-jump="stay">🏠 Where We Stay</button>
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
      <div class="section-eyebrow">The Way There & Back</div>
      <h2 class="section-title">Drive <em>days</em></h2>
      <p class="section-intro">${d.overview}</p>

      ${d.legs.map((leg, li) => `
        <h3 class="subhead"><span>${leg.title}</span><span class="count">${leg.distance}</span></h3>

        <div class="mini-map">
          <svg viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M50,40 Q140,70 200,100 T350,160" stroke="#fff" stroke-width="2" stroke-dasharray="6 4" fill="none" opacity="0.7"/>
            <circle cx="50" cy="40" r="6" fill="#fff"/>
            <circle cx="350" cy="160" r="6" fill="#f7d97a"/>
          </svg>
          <div class="mini-map-label">
            <div class="from-to">${leg.routeName}</div>
            <em>${leg.duration} · arrive ${leg.arrive}</em>
          </div>
        </div>

        <div class="card" style="padding:0 1.25rem;">
          ${leg.steps.map(step => `
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
      `).join('')}

      <div class="callout tip">
        <div class="callout-label">Two-vehicle logistics</div>
        <div class="callout-text">8 people usually means two vehicles. Keep the caravan loose — set a meeting point (gas station, exit number) every 90 min or so instead of trying to stay in visual contact. Group chat with live location works well.</div>
      </div>

      <a class="action-btn primary" style="margin-top:1rem;" href="${gmapsLink('West Chester OH to Gatlinburg TN')}" target="_blank" rel="noopener">🗺️ Route 1 in Google Maps</a>
      <a class="action-btn" style="margin-top:.5rem;" href="${gmapsLink('Gatlinburg TN to 129 Climbing Aster Way Asheville NC')}" target="_blank" rel="noopener">🗺️ Route 2: Gatlinburg → Airbnb</a>
    </section>
  `;
}

function renderStay() {
  const items = TRIP_DATA.lodging;
  return `
    <section class="section" data-section="stay">
      <div class="section-eyebrow">Lodging</div>
      <h2 class="section-title">Where we <em>stay</em></h2>
      <p class="section-intro">Asheville is <strong>confirmed</strong> — the Airbnb in West Asheville is booked for the six main nights. Gatlinburg (Sat Jul 18) still needs a hotel; three good options below.</p>

      <h3 class="subhead"><span>Asheville · Confirmed</span><span class="count">6 nights</span></h3>
      ${items.filter(h => h.id === 'airbnb-asheville').map(h => cardLodging(h)).join('')}

      <h3 class="subhead"><span>Gatlinburg · Pick One</span><span class="count">Sat Jul 18 only</span></h3>
      ${items.filter(h => h.id !== 'airbnb-asheville').map(h => cardLodging(h)).join('')}

      <div class="callout tip">
        <div class="callout-label">Booking tip · Gatlinburg</div>
        <div class="callout-text">Mid-July Saturday in Gatlinburg fills up fast — <strong>book at least 4-6 weeks out</strong>. All three picks are downtown and walkable to the Parkway. If pool/waterslide time is a big deal for the teens, <strong>Greystone or Holiday Inn Express</strong> both deliver at a fair price.</div>
      </div>
    </section>
  `;
}

function cardLodging(h) {
  return `
    <div class="card lodging-card ${h.featured ? 'recommended' : ''}" data-id="${h.id}">
      ${h.featured ? `<div class="recommended-badge">${h.id === 'airbnb-asheville' ? '★ Booked' : '★ Top pick'}</div>` : ''}
      <div class="card-head">
        <div>
          <div class="card-name">${h.name}</div>
          <div style="font-family:var(--font-serif);font-style:italic;color:var(--ink-faint);font-size:.92rem;margin-top:.2rem;">${h.tagline}</div>
          ${h.price ? `<div class="price-tag"><span class="currency">$</span>${h.price}<span class="nights">/ night · ${h.estTotal || ''}</span></div>` : `<div class="price-tag" style="color:var(--moss);"><em>${h.estTotal || ''}</em></div>`}
        </div>
        <button class="fav-btn" data-fav="lodging-${h.id}" aria-label="Save favorite"></button>
      </div>
      <div class="card-tags">${h.tags.map(t => `<span class="tag${t.startsWith('★') || t === 'Booked' ? ' accent' : ''}">${t}</span>`).join('')}</div>
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
        ${h.website ? `<a class="action-btn primary" href="${h.website}" target="_blank" rel="noopener">${h.id === 'airbnb-asheville' ? 'View booking →' : 'Book →'}</a>` : ''}
      </div>
    </div>
  `;
}

function renderPlan() {
  const days = TRIP_DATA.itinerary;
  return `
    <section class="section" data-section="plan">
      <div class="section-eyebrow">Day by day</div>
      <h2 class="section-title">The <em>itinerary</em></h2>
      <p class="section-intro">Full 8-day plan. Times are guides — everything flexes. Favorite spots you love (★), skip what you don't.</p>

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
      <div class="card-tags">${r.tags.map(t => `<span class="tag${t.startsWith('★') ? ' accent' : ''}">${t}</span>`).join('')}</div>
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
      <p class="section-intro">Your confirmed picks (★) plus lots of options — favorite the ones you want, we'll build the plan around them. All local, all independent.</p>

      <h3 class="subhead"><span>Restaurants</span><span class="count">${restaurants.length} picks</span></h3>
      ${restaurants.map(r => cardOf(r, 'rest')).join('')}

      <h3 class="subhead"><span>Ice cream &amp; Donuts</span><span class="count">${treats.length} sweet stops</span></h3>
      ${treats.map(t => cardOf(t, 'treat')).join('')}

      <div class="callout tip">
        <div class="callout-label">Booking strategy for 8</div>
        <div class="callout-text"><strong>Book a week+ ahead</strong> for dinner spots (Pack's Tavern, Rhubarb, Cúrate, Corner Kitchen, Peddler). Casual/BBQ places don't take reservations — go at 5:30 PM or 8 PM to skip the line. Pack's Tavern is your best group play for lunch.</div>
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
      <p class="section-intro">Biltmore is the big-ticket day. Add in a river float, natural waterslide, and a Parkway drive and you've got a great mix. Favorite what you want, we'll plan around it.</p>

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
        <div class="callout-label">Biltmore strategy for 8</div>
        <div class="callout-text"><strong>Buy tickets online</strong> at biltmore.com — saves $10/ticket × 8 = $80. Get the earliest entry slot Tuesday for smallest crowds. If anyone is 65+, they save an additional $18 on Tue/Wed. Plan 5–6 hours total on the estate.</div>
      </div>
    </section>
  `;
}

function renderInfo() {
  const budget = TRIP_DATA.budget;
  const total = budget.reduce((s, b) => s + (b.amount || 0), 0);
  const packing = TRIP_DATA.packing;
  const contacts = TRIP_DATA.contacts;

  return `
    <section class="section" data-section="info">
      <div class="section-eyebrow">The Practical</div>
      <h2 class="section-title">Info &amp; <em>lists</em></h2>
      <p class="section-intro">Budget estimate, packing checklist (your checks save automatically), and emergency contacts for both stops.</p>

      <h3 class="subhead"><span>Budget estimate</span><span class="count">excl. Airbnb</span></h3>
      <div class="budget-summary">
        <div class="budget-label">Estimated total (on top of Airbnb)</div>
        <div class="budget-total"><span class="currency">$</span>${total.toLocaleString()}</div>
        <div class="budget-bar"><div class="budget-fill" style="width: 100%;"></div></div>
        <div class="budget-breakdown">
          <span>8 people · 7 nights</span>
          <span>~$${Math.round(total/8).toLocaleString()}/person</span>
        </div>
      </div>

      <div class="card" style="padding: .5rem 1.25rem;">
        ${budget.map(b => `
          <div class="budget-line">
            <div class="label-text">${b.category}<small>${b.note}</small></div>
            <div class="amount">${b.booked ? '<em style="color:var(--moss);font-style:italic;">Booked</em>' : '$' + b.amount.toLocaleString()}</div>
          </div>
        `).join('')}
      </div>

      <div class="callout tip">
        <div class="callout-label">Budget note</div>
        <div class="callout-text">This is <strong>on top of the Airbnb</strong> (already paid). Total per person excluding the Airbnb: ~<strong>$${Math.round(total/8).toLocaleString()}</strong>. Biltmore and dinners are the biggest levers — swap in more house meals to trim it.</div>
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
  // Scroll past the hero to the content — critical for visible feedback
  const contentEl = $('#content');
  if (contentEl) {
    const headerH = $('#header')?.offsetHeight || 0;
    const y = contentEl.getBoundingClientRect().top + window.pageYOffset - headerH + 1;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', STATE.theme === 'dark' ? 'dark' : '');
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', STATE.theme === 'dark' ? '#14181a' : '#1a3a2e');
}

function bindEvents() {
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
