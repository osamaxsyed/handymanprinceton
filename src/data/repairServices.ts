export interface RepairService {
  name: string;
  description: string;
  duration: string;
  price: string;
}

export const repairServices: RepairService[] = [
  {
    name: "Drywall dings and hole patches",
    description: "Drywall repair of up to 10 locations for small dings (under 1\") and nail hole patches. Up to 10 locations. Touch up paint included if customer provides. (Bid rate) Labor Only",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Drywall patch - SMALL",
    description: "Repair up to 3 damaged drywall sections up to 4\" in diameter using a combination of patching materials and quick set joint compound. Texture to match existing surface. Painting, if required, is a separate charge. Labor and materials",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Drywall patch - medium, no paint",
    description: "Medium drywall patch sized from 5\" x 5\" up to 16\" x 16\". Remove and replace a section of drywall up to from as small as 5\" x 5\" up to 16\" x 16\". Repair damaged drywall using a combination of patching materials and quick-set joint compound. Texture to match existing surface. Painting if required is available but a separate charge. Labor Only (bid rate)",
    duration: "3 hrs",
    price: "$450"
  },
  {
    name: "Drywall patch - Large, no paint",
    description: "Large drywall page sized from 17\" x 17\" up to 36\" x 36\" . Repair damaged drywall using a combination of patching materials and quick set joint compound. Texture to match existing surface. Painting if required is available but a separate charge. Labor Only (Bid Rate)",
    duration: "5 hrs",
    price: "$750"
  },
  {
    name: "TV Mount",
    description: "Installation of (1) TV mount in customer-indicated location using a customer-provided mount. Install using standard techniques and manufacturers' specifications.. (Bid rate) Labor only",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Ring Doorbell Installation",
    description: "Installation of new customer-supplied doorbell in previous doorbell location. Install using standard build techniques and processes. (Bid rate) Labor only",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Standard Switch/Outlet Install (up to 4)",
    description: "Installation of up to 4 new outlets or switches, replacing an existing electrical switch. Install using standard build techniques and processes. Modification of the junction box or electrical wiring is not expected and if required is a separate charge (bid rate), labor only",
    duration: "3 hrs",
    price: "$450"
  },
  {
    name: "Garbage Disposal Replacement",
    description: "Installation of a replacement garbage disposal in an existing sink with a customer-provided unit. Install using standard techniques and practices to existing plumbing and electrical connections. (Bid rate) Labor only",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Toilet Rebuild",
    description: "Rebuilt the tank internals of a leaky toilet. Includes removing and replacing the tank gasket, filling, and flushing the assemblies. Reconnect water, adjust fill rate and height, and verify leak-free operation. Labor and materials",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Toilet - Wax Ring Replacement",
    description: "Fixing a loose toilet due to a faulty wax ring. This includes the wax ring, but not replacement of water shut off valve if necessary. Full Job: $250 plus tax | $50 reservation fee Remove and reinstall the toilet using a new (EBHM-supplied) wax ring. Install using standard building techniques and processes. Verify \"rock free\" operation. It does not include modifications or repairs needed in case of a damaged toilet, floor, waste flange, or water valve replacement if defective. Labor and material",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Light Fixtures R&R (up to 2)",
    description: "Replace up to two light fixtures with a new (customer-supplied) unit using standard techniques. Drywall repair or paint is not expected and if required is a separate charge. Bid rate. Labor only",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Door Adjustment (up to 2 doors)",
    description: "Adjustment of up to 2 interior doors to ensure closing. Touching up door finish, if needed, is extra. (bid rate) Labor only",
    duration: "1 hr 30 mins",
    price: "$300"
  },
  {
    name: "Bathroom Fan Install (customer supplied)",
    description: "Remove and replace a modern-style ceiling-mount bathroom fan using standard techniques with a customer-supplied fan. (Wall mount bathroom fan excluded) Scope of work to include cutting out the ceiling location to adapt to slightly larger dimensions if required. Attaching to existing ducting and electrical at the location is included. Rerouting of ducting, running new electrical, drywall repair, or painting is not expected and, if required, is a separate charge. (bid rate) Labor only",
    duration: "3 hrs",
    price: "$450"
  },
  {
    name: "Bathroom Fan Replacement (EBHM provided)",
    description: "Installation of a replacement bathroom fan provided by EBHM (price of fan added to final bill) Removal and replacement of the ceiling mount modern style bathroom fan using standard techniques. (Wall mount fans excluded) Scope of work to include cutting out the ceiling location to adapt to slightly larger dimensions if required. Attaching to existing ducting and electrical at the location included. Rerouting of ducting, running new electrical, drywall repair, or painting is not expected and if required, is a separate charge. (bid rate) Labor only",
    duration: "3 hrs 30 mins",
    price: "$450"
  },
  {
    name: "Blinds/Curtains Installation (2 sets)",
    description: "Installation of customer-provided blinds. For up to 2 sets of blinds",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Storm Door Install",
    description: "Install a replacement storm door (customer-supplied door) at the customer-specified location.",
    duration: "3 hrs",
    price: "$390"
  },
  {
    name: "Grab Bar Installation",
    description: "New installation of one grab bar anywhere in your home in masonry, tile or existing structure. *Customer to provide grab bar",
    duration: "3 hrs",
    price: "$390"
  },
  {
    name: "Blinds/Curtains Installation (6 sets)",
    description: "Installation of up to 6 sets of new curtains or blinds in your home. Customer to provide the materials. Does not inlcude framing,drywall repair, painting or tile repair, and none is expected",
    duration: "4 hrs",
    price: "$500"
  },
  {
    name: "Door Handle R&R (up to 2 doors)",
    description: "Replacement of a lockset assembly per door with the customer-provided handle. Pricing is for up to two doors - Does not include costs for modifying backset, cutting new cylinder bore, or strike plate mortises. Replacement hardware cost is not included. All work to be completed on the door in the installed location. Labor only",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Ceiling Fan R&R",
    description: "Installation of a replacement ceiling fan in place of an existing light fixture or ceiling fan, disposal of old fan included customer to provide the ceiling fan. Running new electrical or modifying the existing J-box for support is not expected and, if required, is a separate charge (Bid rate) Labor only.",
    duration: "2 hrs",
    price: "$300"
  },
  {
    name: "Toilet Replacement",
    description: "Install a new customer-supplied toilet with stand techniques and processes. Ensure the supply line is connected and not leaking. Replacement of the supply line and water shut-off valve is not expected; if required, it is a separate charge. Disposal of the previous toilet is included. (Bid Rate)Labor only",
    duration: "4 hrs",
    price: "$600"
  },
  {
    name: "Blinds/Curtains Installation (12 sets)",
    description: "Installation of up to 12 sets of blinds. The customer will provide the new blinds.",
    duration: "6 hrs",
    price: "$900"
  },
  {
    name: "Hood Vent Replacement",
    description: "Install a replacement range hood with a customer-supplied replacement of the same size and fit. Includes removal and disposal of the old unit, as well as installation and attachment to the existing ducting. Routing new ducting to exterior, wall/tile repair, or painting is a separate charge if required (not expected). Labor only (bid rate). $600 - Pay $50 retainer to schedule. The rest is due after completion of your job.",
    duration: "4 hrs",
    price: "$600"
  },
  {
    name: "Interior Door R+R | Single Prehung",
    description: "Install a customer-supplied pre-hung paint-grade interior door. Assemble into the rough opening of the wall indicated location. Install at the level and plumb as the structure allows, using standard build techniques. Reinstallation of existing trim or new trim, if required, is included in scope. Door delivery, additional framing, or painting is not expected and, if required, is a separate charge. (bid rate) labor only",
    duration: "5 hrs",
    price: "$600"
  },
  {
    name: "Bathroom Fan with Light Install (EBHM provided fan)",
    description: "Remove and replace the modern-style ceiling mount bathroom fan (provided by EBHM) with a light using standard techniques. (Wall mount fan excluded) Scope of work to include cutting out the ceiling location to adapt to slightly larger dimensions if required. Attaching to existing ducting and electrical at the location is included. Rerouting of ducting, running new electrical, drywall repair, or painting is not expected and if required, is a separate charge. (bid rate) Labor only The cost of the fan is added to the invoice at the final stage.",
    duration: "4 hrs",
    price: "$600"
  },
  {
    name: "Interior Doors R&R | Double Prehung",
    description: "Full Job: $1000 plus tax | $50 reservation fee Install customer supplied pre-hung paint grade double door assembly into rough opening of wall indicated location. Install level and plumb as structure allows using standard build techniques. Reinstallation of existing trim or new trim if required is included in scope. Door delivery, additional framing, or painting is not expected and if required is a separate charge. (bid rate) labor only",
    duration: "6 hrs",
    price: "$1000"
  },
  {
    name: "Re-Caulk Shower/Tub Combo",
    description: "Remove and replace the caulking/siliconized grout commonly found on the shower and bathtub perimeter. Install using standard techniques and processes with locally available products of a similar color to match the original product. The scope of work includes two vertical shower corners, as well as the perimeter of the bathtub, up to 25 linear feet. Grout R&R, repair, and/or permanent marks from long-term mold are a separate charge to repair if required. Labor only (bid rate)",
    duration: "4 hrs",
    price: "$600"
  },
  {
    name: "Stairway Light Fixture R&R",
    description: "Remove and replace the existing over-stairway light, up to 14 feet in height, with a customer-supplied replacement. Replace with a standard high-height adjustable \"A\" frame ladder. Scaffolding, bracing, or additional safety systems, if required, are an additional cost and are not expected. Labor Only (Bid Rate)",
    duration: "2 hrs",
    price: "$450"
  },
  {
    name: "Over the Range Microwave Installation",
    description: "Installation of a replacement over-the-range microwave with a customer-supplied microwave. Includes removing the old microwave, laying out the mounting hardware, drilling new vertical mounting holes, installing the microwave, and verifying the operation. Does not include modification to house structure or venting. Includes disposal of old unit. (Bid rate) Labor Only",
    duration: "3 hrs",
    price: "$450"
  },
  {
    name: "Faucet Installation",
    description: "Installation of a replacement faucet for the kitchen or bathroom with customer-supplied materials. Includes turning off the water at the sink valves and verifying their operation. Remove the existing faucet fixture, install the new fixture per the manufacturer's specifications. Does not include the cost of the faucet or replacement water shut-off valve, if required. Labor only",
    duration: "2 hrs",
    price: "$300"
  }
];
