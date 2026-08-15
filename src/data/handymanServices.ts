// Princeton service catalog. Same scope as the EBH catalog but re-phrased per
// the factory duplicate-content rule (data-level overlap across brands must
// stay under 1%). Exclusions mirror EBH's legal/scope boundaries exactly even
// where the wording differs. Note: water heater replacement is excluded
// consistently here (the EBH file listed it both ways; gas work belongs to a
// licensed plumber).
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
      "Range hood swap-outs",
      "Cabinet doors realigned, hardware installed",
      "Drawer pulls and knobs set straight",
      "Kitchen faucet swaps",
      "Tracking down slow leaks under the sink",
      "Under-sink water filter hookups",
      "Garbage disposal replacements",
      "Backsplash tile",
      "Re-caulking and grout touch-ups",
      "Dishwasher and appliance hookups",
      "P-traps and under-sink drain fittings",
      "Furnace filter swaps"
    ],
    weDontDo: [
      "Modifying or rebuilding cabinets",
      "Setting countertops",
      "Anything involving a gas line or gas appliance",
      "Repairing appliances themselves"
    ]
  },
  {
    title: "Bathroom",
    icon: "🚿",
    weDo: [
      "Bathroom refresh work",
      "Vanities set and plumbed",
      "Toilets re-sealed or replaced outright",
      "Towel bars, hooks, and wall fixtures",
      "Tile setting",
      "Grout renewal",
      "Glass shower doors hung",
      "Exhaust fan swaps",
      "P-traps and under-sink fittings",
      "Shower diverter swaps"
    ],
    weDontDo: [
      "Refinishing or swapping tubs and shower shells",
      "Shower mixing-valve replacement"
    ]
  },
  {
    title: "Walls",
    icon: "🖼️",
    weDo: [
      "Drywall and plaster repairs, from access holes down to dings and scuffs",
      "Blending spot paint over the repair",
      "Trim swapped or mended",
      "Mirrors and picture walls hung level",
      "TVs mounted on studs"
    ],
    weDontDo: [
      "Whole-room painting",
      "Crown molding",
      "Boarding entire rooms"
    ]
  },
  {
    title: "Floors",
    icon: "🏠",
    weDo: [
      "Full-room luxury vinyl plank installs",
      "Baseboard runs replaced or patched",
      "Refinishing a single room of hardwood"
    ],
    weDontDo: [
      "Patch repairs in existing LVT"
    ]
  },
  {
    title: "Garage",
    icon: "🚗",
    weDo: [
      "Seismic strapping on water heaters",
      "Filling and sealing concrete cracks",
      "Small garage door fixes",
      "HVAC filter changes",
      "Window AC units in and out"
    ],
    weDontDo: [
      "Swapping the water heater itself",
      "Split systems or any non-window AC install"
    ]
  },
  {
    title: "Windows & Doors",
    icon: "🚪",
    weDo: [
      "Entry doors replaced",
      "Interior doors replaced",
      "Doors planed and adjusted to close right",
      "Window replacements",
      "Rotted sill repairs",
      "Weatherseal and draft fixes"
    ],
    weDontDo: [
      "Re-glazing glass panes in old doors"
    ]
  },
  {
    title: "Fixtures & Upgrades",
    icon: "💡",
    weDo: [
      "Light fixtures swapped",
      "Outlet and receptacle swap-outs",
      "Faucet installs",
      "Switch and dimmer swaps",
      "Ceiling fans hung on rated boxes",
      "Smart thermostats, doorbells, and locks",
      "Smoke and CO detectors"
    ],
    weDontDo: [
      "In-wall wiring of any kind",
      "Running new circuits, outlets, or switch locations",
      "Panel or breaker-box work",
      "Plumbing inside walls",
      "Water heater replacement"
    ]
  },
  {
    title: "Exterior",
    icon: "🏡",
    weDo: [
      "Chasing down and rebuilding rotted wood",
      "Fence sections mended",
      "Touch-up exterior painting",
      "Deck board and rail fixes",
      "New mailboxes and posts",
      "Exterior trim repairs"
    ],
    weDontDo: [
      "Building fences from scratch",
      "Pressure washing",
      "Gutter cleaning or repair",
      "Eave work",
      "Anything above the second story"
    ]
  }
];
