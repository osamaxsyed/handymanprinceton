export interface ServiceCategory {
  title: string;
  icon: string;
  weDo: string[];
  weDontDo: string[];
}

export const handymanServices: ServiceCategory[] = [
  {
    title: "Kitchen",
    icon: "🍳",
    weDo: [
      "Hood Vent Replacement",
      "Cabinet adjustments & installations",
      "Pull adjustments",
      "Furnace filter replacement",
      "Faucet replacement",
      "Leak investigation",
      "Water filter installations",
      "Garbage disposal replacement",
      "Backsplash",
      "Caulking/grout repair",
      "Appliance installation",
      "Undersink plumbing and p-traps"
    ],
    weDontDo: [
      "Custom cabinet modifications",
      "Countertop installation",
      "Gas appliance installation or troubleshooting",
      "Appliance service or repair"
    ]
  },
  {
    title: "Bathroom",
    icon: "🚿",
    weDo: [
      "Bathroom upgrades",
      "Vanity installation",
      "Toilet seals and total replacements",
      "Updating wall fixtures",
      "Tiling",
      "Grout",
      "Shower door installation",
      "Bathroom fans",
      "Undersink plumbing and p-traps",
      "Shower diverter valve"
    ],
    weDontDo: [
      "Shower or tub refinishing or replacements",
      "Shower temperature valve replacement"
    ]
  },
  {
    title: "Walls",
    icon: "🖼️",
    weDo: [
      "Drywall repair services from things as significant as a plumbing access hole to minor things like dents, dings, and scrapes",
      "Spot paint to make the repairs blend right in",
      "Trim replacement or repair",
      "Hang pictures and mirrors",
      "TV mounting"
    ],
    weDontDo: [
      "Paint full rooms",
      "Crown molding installation or repair",
      "Hang full rooms of drywall"
    ]
  },
  {
    title: "Floors",
    icon: "🏠",
    weDo: [
      "LVT (luxury vinyl tile) installation for full rooms",
      "Baseboard replacement & repair",
      "Single room wood floor refinishing"
    ],
    weDontDo: [
      "LVT spot repairs"
    ]
  },
  {
    title: "Garage",
    icon: "🚗",
    weDo: [
      "Water heater strap installation",
      "Concrete crack repairs",
      "Minor garage door repairs",
      "HVAC filter replacements",
      "Window AC units"
    ],
    weDontDo: [
      "Water heater replacement",
      "Non window air conditioning installs"
    ]
  },
  {
    title: "Windows & Doors",
    icon: "🚪",
    weDo: [
      "Exterior door replacement",
      "Interior door replacement",
      "Door alignment and adjustments",
      "Window replacement",
      "Window sill repair",
      "Weatherstripping"
    ],
    weDontDo: [
      "Fix or replace glass panels in old doors"
    ]
  },
  {
    title: "Fixtures & Upgrades",
    icon: "💡",
    weDo: [
      "Lighting fixture replacements",
      "Outlet upgrades",
      "Sink Faucet Installations",
      "Light switches",
      "Ceiling fan installation",
      "Smart home upgrades",
      "Smoke detectors",
      "Water Heater Replacement"
    ],
    weDontDo: [
      "Any in-wall electrical work",
      "Moving/adding wires, outlets, or switches that require in-wall electrical",
      "Fuse box or panel changes",
      "In-wall plumbing"
    ]
  },
  {
    title: "Exterior",
    icon: "🏡",
    weDo: [
      "Wood Rot / Dry rot investigation and repair",
      "Fence repair",
      "Spot painting",
      "Deck repair",
      "Mailbox replacements",
      "Exterior trim"
    ],
    weDontDo: [
      "Full fence installation",
      "Pressure washing",
      "Clean / fix gutters",
      "Eaves",
      "Work on any exterior space over two stories high"
    ]
  }
];
