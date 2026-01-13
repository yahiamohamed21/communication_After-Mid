const questionsPart1 = [
  {
    id: 1,
    question: "In a PON, “OLT” stands for:",
    options: [
      "Optical Link Transmission",
      "Optical Line Terminal",
      "Optical Loop Transmitter",
      "Optical Line Topology"
    ],
    answer: "Optical Line Terminal"
  },
  {
    id: 2,
    question: "In a PON, “ONU” stands for:",
    options: [
      "Optical Network Unit",
      "Optical Node Utility",
      "Online Network User",
      "Optical Numbering Unit"
    ],
    answer: "Optical Network Unit"
  },
  {
    id: 6,
    question: "The “near-far problem” in a PON occurs mainly because:",
    options: [
      "All ONUs are at the same distance from the OLT",
      "ONUs transmit at different wavelengths only",
      "Distances between CO and ONUs are unequal causing different received power",
      "The splitter amplifies signals unevenly"
    ],
    answer: "Distances between CO and ONUs are unequal causing different received power"
  },
  {
    id: 7,
    question: "In the near-far problem, the OLT may receive:",
    options: [
      "Identical power levels from all ONUs always",
      "Different power levels from different ONUs",
      "No signal at all from any ONU",
      "Only downstream signals"
    ],
    answer: "Different power levels from different ONUs"
  },
  {
    id: 8,
    question: "If the OLT receiver is adjusted for a strong signal from a close ONU, a weak signal from a distant ONU may be decoded as:",
    options: [
      "Ones as zeros",
      "Zeros as ones",
      "No change at all",
      "Random noise only"
    ],
    answer: "Ones as zeros"
  },
  {
    id: 9,
    question: "If the OLT receiver is trained on a weak signal, a strong signal may be decoded as:",
    options: [
      "Ones as zeros",
      "Zeros as ones",
      "Always correct",
      "Always dropped"
    ],
    answer: "Zeros as ones"
  },
  {
    id: 10,
    question: "“Burst mode” at the OLT receiver is needed mainly to:",
    options: [
      "Increase fiber length",
      "Quickly adjust the zero-one threshold at each timeslot start",
      "Encrypt downstream frames",
      "Eliminate splitters"
    ],
    answer: "Quickly adjust the zero-one threshold at each timeslot start"
  },
  {
    id: 11,
    question: "A burst-mode receiver is necessary only in the:",
    options: [
      "ONU",
      "OLT",
      "Splitter",
      "User PC"
    ],
    answer: "OLT"
  },
  {
    id: 12,
    question: "ONUs do not need burst-mode reception because they receive:",
    options: [
      "Only short pulses",
      "A continuous bit stream (data or idle bits) from the OLT",
      "Only upstream traffic",
      "Only WDM wavelengths"
    ],
    answer: "A continuous bit stream (data or idle bits) from the OLT"
  },
  {
    id: 13,
    question: "An alternative solution to burst-mode reception is to make ONUs:",
    options: [
      "Use copper wires",
      "Adjust transmitter power so received power at OLT becomes the same",
      "Disable upstream",
      "Remove the combiner"
    ],
    answer: "Adjust transmitter power so received power at OLT becomes the same"
  },
  {
    id: 14,
    question: "The “power-adjustment” alternative makes ONU hardware:",
    options: [
      "Simpler",
      "More complex",
      "Unchanged",
      "Removed entirely"
    ],
    answer: "More complex"
  },
  {
    id: 15,
    question: "The “power-adjustment” alternative requires:",
    options: [
      "No signaling at all",
      "A special feedback signaling protocol from OLT to each ONU",
      "Only passive splitters",
      "Only LLID encryption"
    ],
    answer: "A special feedback signaling protocol from OLT to each ONU"
  }
];

const questionsPart2 = [
  {
    id: 16,
    question: "EPON stands for:",
    options: [
      "Electrical Passive Optical Network",
      "Ethernet Passive Optical Network",
      "Enhanced PON",
      "Enterprise PON"
    ],
    answer: "Ethernet Passive Optical Network"
  },
  {
    id: 17,
    question: "EPON carries traffic encapsulated in:",
    options: [
      "IP packets only",
      "Ethernet frames",
      "ATM cells only",
      "SONET frames"
    ],
    answer: "Ethernet frames"
  },
  {
    id: 18,
    question: "Ethernet frames in EPON are defined in:",
    options: [
      "IEEE 802.11",
      "IEEE 802.3",
      "IEEE 802.15",
      "IEEE 802.1Q"
    ],
    answer: "IEEE 802.3"
  },
  {
    id: 19,
    question: "EPON operates at:",
    options: [
      "Proprietary data rates only",
      "Standard Ethernet data rates",
      "Only 56 kbps",
      "Only 2.5 Gbps fixed"
    ],
    answer: "Standard Ethernet data rates"
  },
  {
    id: 20,
    question: "In downstream EPON (OLT → ONUs), frames pass through:",
    options: [
      "An active amplifier array",
      "A 1:N passive splitter",
      "A copper hub",
      "A wireless base station"
    ],
    answer: "A 1:N passive splitter"
  },
  {
    id: 21,
    question: "In downstream EPON, the OLT behavior is best described as:",
    options: [
      "Unicast to one ONU only",
      "Broadcast frames that reach each ONU",
      "Random access from ONUs",
      "Token passing"
    ],
    answer: "Broadcast frames that reach each ONU"
  },
  {
    id: 22,
    question: "Typical values of N (split ratio) are between:",
    options: [
      "2 and 4",
      "8 and 32",
      "64 and 128",
      "128 and 256"
    ],
    answer: "8 and 32"
  },
  {
    id: 23,
    question: "In downstream, each ONU extracts its frames based on:",
    options: [
      "MAC address only (no other fields)",
      "Logical Link Identifier (LLID)",
      "IP TTL value",
      "VLAN priority only"
    ],
    answer: "Logical Link Identifier (LLID)"
  },
  {
    id: 24,
    question: "The LLID is assigned to an ONU when it:",
    options: [
      "Boots its operating system",
      "Registers with the network",
      "Connects to Wi-Fi",
      "Changes its wavelength"
    ],
    answer: "Registers with the network"
  },
  {
    id: 25,
    question: "In upstream EPON, data frames from any ONU will:",
    options: [
      "Reach all other ONUs",
      "Reach only the OLT (not other ONUs)",
      "Be blocked by the OLT",
      "Be broadcast to users"
    ],
    answer: "Reach only the OLT (not other ONUs)"
  },
  {
    id: 26,
    question: "The reason upstream frames do not reach other ONUs is due to:",
    options: [
      "Encryption",
      "Directional properties of a passive optical combiner",
      "ONU MAC filtering",
      "IP routing"
    ],
    answer: "Directional properties of a passive optical combiner"
  },
  {
    id: 27,
    question: "Upstream EPON behavior is similar to:",
    options: [
      "Point-to-point architecture",
      "Ring network",
      "Wi-Fi broadcast",
      "Token ring only"
    ],
    answer: "Point-to-point architecture"
  },
  {
    id: 28,
    question: "In EPON upstream, if multiple ONUs transmit simultaneously, the frames may:",
    options: [
      "Always be queued perfectly",
      "Collide",
      "Automatically change wavelength",
      "Be amplified and separated"
    ],
    answer: "Collide"
  },
  {
    id: 29,
    question: "To avoid upstream collisions, ONUs need:",
    options: [
      "A passive splitter upgrade",
      "An arbitration mechanism",
      "A barcode label",
      "A ring token"
    ],
    answer: "An arbitration mechanism"
  },
  {
    id: 30,
    question: "The arbitration mechanism is needed to:",
    options: [
      "Increase OLT size",
      "Avoid collisions and fairly share channel capacity",
      "Reduce fiber length",
      "Remove Ethernet framing"
    ],
    answer: "Avoid collisions and fairly share channel capacity"
  }
];
const questionsPart3 = [
  {
    id: 31,
    question: "Basic (traditional) PON uses:",
    options: [
      "Many wavelengths for each ONU automatically",
      "Only a single optical channel (limited bandwidth)",
      "Only copper cables",
      "Only microwave links"
    ],
    answer: "Only a single optical channel (limited bandwidth)"
  },
  {
    id: 32,
    question: "A PON can employ WDM so that:",
    options: [
      "Only one wavelength is used",
      "Multiple wavelengths are used for upstream and/or downstream",
      "Only RF signals are used",
      "No fiber is needed"
    ],
    answer: "Multiple wavelengths are used for upstream and/or downstream"
  },
  {
    id: 33,
    question: "WDM-PON is described as:",
    options: [
      "Point-to-multipoint access network only",
      "Point-to-point access network with separate wavelength between OLT and each ONU",
      "Wireless access network",
      "Copper-based access network"
    ],
    answer: "Point-to-point access network with separate wavelength between OLT and each ONU"
  },
  {
    id: 34,
    question: "In WDM-PON, each ONU typically has:",
    options: [
      "No wavelength assigned",
      "A separate wavelength channel (especially in downstream)",
      "The same wavelength always in both directions",
      "Only time slots, no wavelengths"
    ],
    answer: "A separate wavelength channel (especially in downstream)"
  },
  {
    id: 35,
    question: "A key advantage of WDM-PON over basic PON is:",
    options: [
      "It always has lower data rates",
      "It does not suffer power-splitting losses",
      "It requires more splitting loss",
      "It removes the OLT"
    ],
    answer: "It does not suffer power-splitting losses"
  },
  {
    id: 36,
    question: "WDM-PON can support different ONUs at different:",
    options: [
      "Colors of cable jackets",
      "Bit rates",
      "Battery voltages",
      "Wi-Fi channels"
    ],
    answer: "Bit rates"
  },
  {
    id: 37,
    question: "WDM-PON architectures typically employ in downstream:",
    options: [
      "One shared wavelength for all ONUs",
      "A separate wavelength for each ONU",
      "No wavelengths at all",
      "Only copper distribution"
    ],
    answer: "A separate wavelength for each ONU"
  },
  {
    id: 38,
    question: "WDM-PON architectures mainly differ in:",
    options: [
      "The amount of resources used in upstream direction",
      "The number of keyboards at ONU",
      "The type of Ethernet frames used",
      "The Wi-Fi standard"
    ],
    answer: "The amount of resources used in upstream direction"
  },
  {
    id: 39,
    question: "Upstream communication differs from downstream mainly because:",
    options: [
      "OLT must be inexpensive",
      "ONU transmitters must be inexpensive",
      "Splitters amplify upstream only",
      "LLID is not used"
    ],
    answer: "ONU transmitters must be inexpensive"
  },
  {
    id: 40,
    question: "Another business reason for upstream design is:",
    options: [
      "Prefer wavelength-specific equipment at ONU",
      "Prefer NOT having wavelength-specific equipment at ONU",
      "Prefer copper ONU only",
      "Prefer no ONU equipment"
    ],
    answer: "Prefer NOT having wavelength-specific equipment at ONU"
  },
  {
    id: 41,
    question: "Most WDM-PON designs make use of:",
    options: [
      "Routers only",
      "AWGs",
      "Wi-Fi APs",
      "DSL splitters"
    ],
    answer: "AWGs"
  },
  {
    id: 42,
    question: "AWG stands for:",
    options: [
      "Advanced Wave Generator",
      "Arrayed Waveguide Grating",
      "Automatic Wavelength Gateway",
      "Analog Wave Guard"
    ],
    answer: "Arrayed Waveguide Grating"
  },
  {
    id: 43,
    question: "C-PON stands for:",
    options: [
      "Central PON",
      "Composite PON",
      "Connected PON",
      "Common PON"
    ],
    answer: "Composite PON"
  },
  {
    id: 44,
    question: "In C-PON, downstream uses WDM in the:",
    options: [
      "850 nm band",
      "1550 nm band",
      "1300 nm band",
      "980 nm band"
    ],
    answer: "1550 nm band"
  },
  {
    id: 45,
    question: "In C-PON, upstream uses:",
    options: [
      "Many wavelengths, one per ONU",
      "A single upstream wavelength shared via TDMA",
      "No upstream wavelength at all",
      "Microwave radio"
    ],
    answer: "A single upstream wavelength shared via TDMA"
  },
  {
    id: 46,
    question: "In C-PON, the upstream wavelength band is:",
    options: [
      "1550 nm",
      "1300 nm",
      "850 nm",
      "1625 nm"
    ],
    answer: "1300 nm"
  },
  {
    id: 47,
    question: "In C-PON, sharing the upstream is done through:",
    options: [
      "FDMA",
      "TDMA",
      "CDMA",
      "CSMA/CD over copper"
    ],
    answer: "TDMA"
  },
  {
    id: 48,
    question: "In C-PON, upstream and downstream can be supported on a single fiber through:",
    options: [
      "DWDM only",
      "CWDM (coarse WDM)",
      "VLAN tagging",
      "Wi-Fi multiplexing"
    ],
    answer: "CWDM (coarse WDM)"
  },
  {
    id: 49,
    question: "CPON uses a single-wavelength burst-mode receiver mainly to:",
    options: [
      "Increase ONU price",
      "Synchronize to clock signals of different ONUs at different distances",
      "Replace Ethernet frames",
      "Eliminate LLIDs"
    ],
    answer: "Synchronize to clock signals of different ONUs at different distances"
  },
  {
    id: 50,
    question: "The clock-synchronization problem in CPON is related to:",
    options: [
      "Different ONU distances from OLT",
      "Different keyboard layouts",
      "Different IP addresses",
      "Different Wi-Fi channels"
    ],
    answer: "Different ONU distances from OLT"
  }
];

const questionsPart4 = [
  {
    id: 51,
    question: "In downstream EPON, frames are best described as:",
    options: [
      "Only sent to one ONU",
      "Broadcast by the OLT",
      "Sent only to the splitter",
      "Sent only if ONU requests"
    ],
    answer: "Broadcast by the OLT"
  },
  {
    id: 52,
    question: "In upstream EPON, the ONUs must share capacity fairly because:",
    options: [
      "Only OLT transmits",
      "Multiple ONUs share the same upstream channel",
      "Downstream is wireless",
      "Each ONU has its own fiber always"
    ],
    answer: "Multiple ONUs share the same upstream channel"
  },
  {
    id: 53,
    question: "Near-far problem is mainly observed at:",
    options: [
      "ONU receivers in downstream",
      "OLT receiver in upstream (different received power bursts)",
      "User devices",
      "The passive splitter output only"
    ],
    answer: "OLT receiver in upstream (different received power bursts)"
  },
  {
    id: 54,
    question: "Burst-mode operation is important at the beginning of each:",
    options: [
      "Ethernet frame payload only",
      "Received timeslot",
      "Downstream broadcast",
      "ONU registration period only"
    ],
    answer: "Received timeslot"
  },
  {
    id: 55,
    question: "A burst-mode receiver must adjust its:",
    options: [
      "VLAN tag",
      "Zero-one decision threshold quickly",
      "IP routing table",
      "Fiber wavelength physically"
    ],
    answer: "Zero-one decision threshold quickly"
  },
  {
    id: 56,
    question: "The “split ratio” (1:N) refers to:",
    options: [
      "One ONU splitting to N OLTs",
      "One OLT optical feed split to reach N ONUs",
      "N ONUs split downstream to one user",
      "One fiber split into copper pairs"
    ],
    answer: "One OLT optical feed split to reach N ONUs"
  },
  {
    id: 57,
    question: "In EPON, an ONU gets an LLID when it:",
    options: [
      "Unplugs the fiber",
      "Registers with the network",
      "Changes its MAC address",
      "Turns off burst-mode"
    ],
    answer: "Registers with the network"
  },
  {
    id: 58,
    question: "In WDM-PON, each ONU having its own wavelength makes the network more:",
    options: [
      "Point-to-multipoint",
      "Point-to-point",
      "Wireless",
      "Copper-based"
    ],
    answer: "Point-to-point"
  },
  {
    id: 59,
    question: "A WDM-PON avoids power-splitting losses primarily because it:",
    options: [
      "Uses active splitters",
      "Uses wavelength routing rather than splitting one power among many users",
      "Disables downstream",
      "Uses only copper"
    ],
    answer: "Uses wavelength routing rather than splitting one power among many users"
  },
  {
    id: 60,
    question: "A major practical constraint in upstream WDM-PON design is to keep ONU equipment:",
    options: [
      "Very expensive",
      "Inexpensive",
      "Always wavelength-specific",
      "Without any transmitter"
    ],
    answer: "Inexpensive"
  },
  {
    id: 61,
    question: "In LARNET, the name expands to:",
    options: [
      "Local Access Remote Network",
      "Long Area Routed Network",
      "Local ATM Ring Network",
      "Layered Access Router Network"
    ],
    answer: "Local Access Remote Network"
  },
  {
    id: 62,
    question: "LARNET architecture diagram includes an:",
    options: [
      "Electrical combiner only",
      "AWG-based router (1*N)",
      "Wireless repeater",
      "Copper hub"
    ],
    answer: "AWG-based router (1*N)"
  },
  {
    id: 63,
    question: "In the LARNET figure, ONUs include blocks labeled:",
    options: [
      "CPU and RAM",
      "Receiver and LED",
      "Keyboard and mouse",
      "Router and firewall"
    ],
    answer: "Receiver and LED"
  },
  {
    id: 64,
    question: "WDM-PON “resources in upstream” can mean:",
    options: [
      "Only VLAN IDs",
      "How wavelengths/time are allocated for ONU→OLT transmission",
      "Only MAC addresses",
      "Only IP subnets"
    ],
    answer: "How wavelengths/time are allocated for ONU→OLT transmission"
  },
  {
    id: 65,
    question: "In EPON upstream, collisions happen because:",
    options: [
      "Splitter forces collisions",
      "Different ONUs may transmit at the same time on shared upstream",
      "LLID prevents extraction",
      "OLT broadcasts upstream"
    ],
    answer: "Different ONUs may transmit at the same time on shared upstream"
  },
  {
    id: 66,
    question: "The downstream EPON direction is:",
    options: [
      "ONU → OLT",
      "OLT → ONUs",
      "ONU → ONU",
      "User → splitter"
    ],
    answer: "OLT → ONUs"
  },
  {
    id: 67,
    question: "The upstream EPON direction is:",
    options: [
      "OLT → ONUs",
      "ONUs → OLT",
      "Splitter → user",
      "ONU → ONU"
    ],
    answer: "ONUs → OLT"
  },
  {
    id: 68,
    question: "In the downstream, the splitter is described as:",
    options: [
      "Active splitter with amplification",
      "Passive splitter",
      "Wireless access point",
      "Copper switch"
    ],
    answer: "Passive splitter"
  },
  {
    id: 69,
    question: "In CPON, the upstream is a:",
    options: [
      "Separate wavelength for each ONU upstream",
      "Single wavelength shared by TDMA",
      "Downstream-only system",
      "Microwave-only uplink"
    ],
    answer: "Single wavelength shared by TDMA"
  },
  {
    id: 70,
    question: "The biggest reason burst-mode reception appears repeatedly in this topic is that:",
    options: [
      "All ONUs are equal distance",
      "Received upstream power/clock conditions change from one ONU burst to another",
      "Downstream is continuous",
      "Splitter encrypts traffic"
    ],
    answer: "Received upstream power/clock conditions change from one ONU burst to another"
  }
];

const questionsPart5 = [
  {
    id: 71,
    question: "The biggest reason burst-mode reception appears repeatedly in this topic is that:",
    options: [
      "All ONUs are equal distance",
      "Received upstream power/clock conditions change from one ONU burst to another",
      "Downstream is continuous",
      "Splitter encrypts traffic"
    ],
    answer: "Received upstream power/clock conditions change from one ONU burst to another"
  },
  {
    id: 72,
    question: "What is the primary cause of the ‘near-far problem’ in a Passive Optical Network (PON)?",
    options: [
      "Simultaneous upstream data transmission from multiple ONUs.",
      "Varying physical distances between the Optical Line Terminal (OLT) and each Optical Network Unit (ONU).",
      "The use of different data encapsulation standards by various ONUs.",
      "Insufficient bandwidth in the downstream channel from the OLT."
    ],
    answer: "Varying physical distances between the Optical Line Terminal (OLT) and each Optical Network Unit (ONU)."
  },
  {
    id: 73,
    question: "In a Time-Division Multiplexing PON (TDM-PON), which component specifically requires a burst-mode receiver and for what reason?",
    options: [
      "The passive splitter, in order to amplify the varying signals before they reach their destination.",
      "Both the OLT and the ONUs, to ensure fair and synchronized communication in both directions.",
      "The Optical Line Terminal (OLT), to quickly adjust its detection threshold for signals of varying power arriving from different ONUs.",
      "The Optical Network Units (ONUs), because they need to handle a high-speed continuous data stream from the OLT."
    ],
    answer: "The Optical Line Terminal (OLT), to quickly adjust its detection threshold for signals of varying power arriving from different ONUs."
  },
  {
    id: 74,
    question: "What is a significant advantage of WDM-PON that is not present in basic TDM-PON?",
    options: [
      "It uses less expensive, non-wavelength-specific hardware at the ONU.",
      "It eliminates the need for burst-mode receivers at the OLT.",
      "It requires less fiber infrastructure because it uses a bus topology.",
      "It ensures all ONUs transmit and receive at the same standardized bit rate."
    ],
    answer: "It eliminates the need for burst-mode receivers at the OLT."
  },
  {
    id: 75,
    question: "Why is it preferable from a business perspective to avoid wavelength-specific equipment at the ONU in WDM-PONs?",
    options: [
      "Wavelength-specific components have higher power consumption.",
      "Wavelength-specific transmitters are not compatible with Arrayed Waveguide Gratings (AWGs).",
      "Generic hardware provides better signal quality over long distances.",
      "It allows for easier network upgrades without replacing ONU hardware."
    ],
    answer: "It allows for easier network upgrades without replacing ONU hardware."
  },
  {
    id: 76,
    question: "According to the provided material, which component is commonly used in WDM PON designs to route different wavelengths?",
    options: [
      "An Arrayed Waveguide Grating (AWG).",
      "A passive optical combiner.",
      "A burst-mode receiver.",
      "A 1:N passive splitter."
    ],
    answer: "An Arrayed Waveguide Grating (AWG)."
  },
  {
    id: 77,
    question: "If an OLT’s receiver is trained to detect a weak signal from a distant ONU, what error is likely to occur when it receives a strong signal from a nearby ONU?",
    options: [
      "The signal will be correctly interpreted but with a significant delay.",
      "It may misinterpret ‘ones’ (high power) as ‘zeros’ (low power).",
      "It may misinterpret ‘zeros’ (low power) as ‘ones’ (high power).",
      "The receiver will fail to synchronize with the incoming bit stream."
    ],
    answer: "It may misinterpret ‘zeros’ (low power) as ‘ones’ (high power)."
  },
  {
    id: 78,
    question: "What is the primary reason an arbitration mechanism is required for the upstream channel in an EPON?",
    options: [
      "To ensure each ONU receives downstream data based on its assigned LLID.",
      "To direct upstream traffic from an ONU to other ONUs in the network.",
      "To prevent data frames from different ONUs, which share the channel, from colliding.",
      "To compensate for the near-far problem by adjusting ONU transmit power."
    ],
    answer: "To prevent data frames from different ONUs, which share the channel, from colliding."
  },
  {
    id: 79,
    question: "Which of the following describes a key architectural difference between a basic PON and a WDM-PON?",
    options: [
      "WDM-PON creates a virtual point-to-point link for each ONU using a dedicated wavelength.",
      "Basic PONs are limited to 8 ONUs, while WDM-PONs can support up to 32.",
      "Basic PONs use a ring topology, while WDM-PONs exclusively use a tree topology.",
      "WDM-PONs do not require an OLT, as ONUs communicate directly with each other."
    ],
    answer: "WDM-PON creates a virtual point-to-point link for each ONU using a dedicated wavelength."
  },
  {
    id: 80,
    question: "According to the diagrams provided, which of the following is NOT a PON topology shown in the presentation?",
    options: [
      "Tree topology",
      "Mesh topology",
      "Ring topology",
      "Bus topology"
    ],
    answer: "Mesh topology"
  },
  {
    id: 81,
    question: "The presentation discusses an alternative solution to using a burst-mode receiver at the OLT. What is a primary drawback of this alternative?",
    options: [
      "It requires all ONUs to be placed at the same physical distance from the OLT.",
      "It can only be implemented in a ring topology, not a tree or bus topology.",
      "It significantly reduces the maximum data rate of the upstream channel.",
      "It makes the ONU hardware more complex and requires a special signaling protocol."
    ],
    answer: "It makes the ONU hardware more complex and requires a special signaling protocol."
  },
  {
    id: 82,
    question: "In a Passive Optical Network (PON), what is the primary cause of the \"near-far problem\"?",
    options: [
      "Varying distances between the OLT and each ONU, leading to different levels of signal attenuation.",
      "The passive splitter introducing non-uniform signal degradation for each output path.",
      "The OLT broadcasting data at inconsistent power levels to the ONUs.",
      "Simultaneous upstream transmissions from different ONUs causing data collisions."
    ],
    answer: "Varying distances between the OLT and each ONU, leading to different levels of signal attenuation."
  },
  {
    id: 83,
    question: "Why is a burst-mode receiver a necessary component in the OLT of a TDM PON?",
    options: [
      "To allow the OLT to transmit data to multiple ONUs simultaneously using different wavelengths.",
      "To filter out noise and interference caused by the passive optical splitter.",
      "To ensure the continuous bit stream sent to the ONUs is properly synchronized.",
      "To rapidly adjust its detection threshold for incoming signals of varying power levels from different ONUs."
    ],
    answer: "To rapidly adjust its detection threshold for incoming signals of varying power levels from different ONUs."
  },
  {
    id: 84,
    question: "In an Ethernet PON (EPON), how is downstream traffic from the OLT directed to the correct ONU?",
    options: [
      "Each ONU is assigned a unique optical wavelength for receiving its data.",
      "The passive splitter intelligently routes packets to the correct ONU based on the destination address.",
      "The OLT sends frames in specific time slots that are pre-assigned to each ONU.",
      "The OLT broadcasts frames to all ONUs, and each ONU filters for packets with its assigned Logical Link Identifier (LLID)."
    ],
    answer: "The OLT broadcasts frames to all ONUs, and each ONU filters for packets with its assigned Logical Link Identifier (LLID)."
  },
  {
    id: 85,
    question: "How is downstream traffic managed in an Ethernet PON (EPON)?",
    options: [
      "The OLT broadcasts Ethernet frames to all ONUs, and each ONU selects the frames intended for it based on a Logical Link Identifier (LLID).",
      "The OLT uses a Time-Division Multiple Access (TDMA) protocol to send data to each ONU in a designated time slot.",
      "The OLT assigns a unique wavelength to each ONU for dedicated, point-to-point data delivery.",
      "Each ONU sends a request to the OLT, which then establishes a temporary point-to-point link to transmit the required data."
    ],
    answer: "The OLT broadcasts Ethernet frames to all ONUs, and each ONU selects the frames intended for it based on a Logical Link Identifier (LLID)."
  },
  {
    id: 86,
    question: "What is the key challenge that must be addressed for upstream communication in an EPON?",
    options: [
      "Preventing data frames from multiple ONUs from colliding when they are transmitted simultaneously.",
      "Compensating for the power-splitting loss at the passive combiner.",
      "Ensuring the signal from the OLT is strong enough to reach the most distant ONU.",
      "Filtering out the broadcast traffic that is intended for other ONUs."
    ],
    answer: "Preventing data frames from multiple ONUs from colliding when they are transmitted simultaneously."
  },
  {
    id: 87,
    question: "Which of the following is a significant advantage of a Wavelength Division Multiplexing PON (WDM-PON) when compared to a basic TDM-PON?",
    options: [
      "It eliminates the need for an arbitration mechanism for upstream traffic.",
      "It does not suffer from the power-splitting losses found in a TDM-PON’s broadcast architecture.",
      "It requires only a single wavelength for both upstream and downstream communication.",
      "It uses simpler and less expensive hardware at the Optical Network Units (ONUs)."
    ],
    answer: "It does not suffer from the power-splitting losses found in a TDM-PON’s broadcast architecture."
  },
  {
    id: 88,
    question: "How does the Composite PON (C-PON) architecture handle its upstream and downstream channels?",
    options: [
      "It relies on TDMA for downstream broadcast to the ONUs and WDM for dedicated upstream channels.",
      "It employs WDM for both upstream and downstream, assigning a unique wavelength pair to each ONU.",
      "It uses multiple WDM channels for downstream traffic and a single upstream channel shared via TDMA.",
      "It utilizes a single shared TDMA channel for both upstream and downstream traffic."
    ],
    answer: "It uses multiple WDM channels for downstream traffic and a single upstream channel shared via TDMA."
  },
  {
    id: 89,
    question: "Which statement accurately describes the flow of upstream data in an EPON architecture?",
    options: [
      "ONUs send data upstream on unique wavelengths to avoid collisions.",
      "Data is sent from an ONU to a passive splitter, which then forwards it to the OLT.",
      "Data from an ONU is broadcast to the OLT and all other ONUs.",
      "Data from all ONUs travels to the OLT, resembling a point-to-point architecture for each ONU."
    ],
    answer: "Data from all ONUs travels to the OLT, resembling a point-to-point architecture for each ONU."
  },
  {
    id: 90,
    question: "What is an alternative solution to using a burst-mode receiver in the OLT to handle the near-far problem, and what is its main drawback?",
    options: [
      "Solution: Install optical amplifiers for each ONU. Drawback: High power consumption.",
      "Solution: Require all ONUs to be the same distance from the OLT. Drawback: Impractical for real-world deployments.",
      "Solution: Use a separate fiber for each ONU. Drawback: Prohibitively high cost of fiber installation.",
      "Solution: Have ONUs adjust their transmitter power. Drawback: Increased complexity and cost of ONU hardware."
    ],
    answer: "Solution: Have ONUs adjust their transmitter power. Drawback: Increased complexity and cost of ONU hardware."
  }
];
 const questionsPart6 = [
  {
    id: 91,
    question: "What is the primary function of an optical receiver?",
    options: [
      "Amplify optical power",
      "Convert optical signals into electrical signals",
      "Generate optical pulses",
      "Route wavelengths"
    ],
    answer: "Convert optical signals into electrical signals"
  },
  {
    id: 92,
    question: "The two main blocks of an optical receiver are:",
    options: [
      "Laser and modulator",
      "Photodetector and TIA",
      "EDFA and VOA",
      "Fiber and connector"
    ],
    answer: "Photodetector and TIA"
  },
  {
    id: 93,
    question: "The photodetector converts optical power into:",
    options: [
      "Voltage directly",
      "Digital bits",
      "Electrical current",
      "Optical pulses"
    ],
    answer: "Electrical current"
  },
  {
    id: 94,
    question: "Which effect is responsible for current generation in a photodetector?",
    options: [
      "Thermal effect",
      "Photoelectric (photoconductive) effect",
      "Magnetic induction",
      "Piezoelectric effect"
    ],
    answer: "Photoelectric (photoconductive) effect"
  },
  {
    id: 95,
    question: "Receiver sensitivity is defined as:",
    options: [
      "Maximum transmitted power",
      "Minimum detectable optical power for acceptable BER",
      "Fiber attenuation per km",
      "Noise figure only"
    ],
    answer: "Minimum detectable optical power for acceptable BER"
  },
  {
    id: 96,
    question: "Typical acceptable BER values are in the range of:",
    options: [
      "10⁻² to 10⁻³",
      "10⁻⁵ to 10⁻⁶",
      "10⁻⁹ to 10⁻¹²",
      "10⁻¹⁵ to 10⁻¹⁸"
    ],
    answer: "10⁻⁹ to 10⁻¹²"
  },
  {
    id: 97,
    question: "Which noise is caused by random photon arrival?",
    options: [
      "Thermal noise",
      "Shot noise",
      "Crosstalk noise",
      "Amplifier noise"
    ],
    answer: "Shot noise"
  },
  {
    id: 98,
    question: "Thermal noise is mainly caused by:",
    options: [
      "Optical dispersion",
      "Random electron motion in resistive components",
      "Fiber attenuation",
      "Laser linewidth"
    ],
    answer: "Random electron motion in resistive components"
  },
  {
    id: 99,
    question: "Which noise dominates in PIN receivers?",
    options: [
      "Shot noise",
      "Thermal noise",
      "Modal noise",
      "Phase noise"
    ],
    answer: "Thermal noise"
  },
  {
    id: 100,
    question: "The Transimpedance Amplifier (TIA) is critical because it:",
    options: [
      "Generates optical pulses",
      "Converts current to voltage",
      "Reduces fiber loss",
      "Performs wavelength routing"
    ],
    answer: "Converts current to voltage"
  },
  {
    id: 101,
    question: "What is the purpose of a link power budget?",
    options: [
      "Determine fiber type",
      "Verify if signal power is sufficient at receiver",
      "Select modulation format",
      "Reduce dispersion"
    ],
    answer: "Verify if signal power is sufficient at receiver"
  },
  {
    id: 102,
    question: "The power budget equation is:",
    options: [
      "PRx − PTx ≤ Loss",
      "PTx − PRx,min ≥ ΣLosses",
      "ΣLosses ≥ Margin",
      "Gain = Loss × Distance"
    ],
    answer: "PTx − PRx,min ≥ ΣLosses"
  },
  {
    id: 103,
    question: "Which of the following is NOT part of total losses?",
    options: [
      "Fiber loss",
      "Splice loss",
      "Connector loss",
      "Receiver bandwidth"
    ],
    answer: "Receiver bandwidth"
  },
  {
    id: 104,
    question: "System margin is included to account for:",
    options: [
      "Only fiber attenuation",
      "Component aging and uncertainty",
      "Dispersion only",
      "Wavelength drift only"
    ],
    answer: "Component aging and uncertainty"
  },
  {
    id: 105,
    question: "Typical system margin values are:",
    options: [
      "0–1 dB",
      "1–2 dB",
      "3–6 dB",
      "10–15 dB"
    ],
    answer: "3–6 dB"
  },
  {
    id: 106,
    question: "System margin is best described as:",
    options: [
      "A loss",
      "A safety factor",
      "An amplifier gain",
      "A noise term"
    ],
    answer: "A safety factor"
  },
  {
    id: 107,
    question: "Fiber attenuation is usually expressed in:",
    options: [
      "Watts",
      "dB",
      "dB/km",
      "Hz"
    ],
    answer: "dB/km"
  },
  {
    id: 108,
    question: "Increasing fiber length mainly affects the:",
    options: [
      "Transmitter wavelength",
      "Power budget",
      "Receiver electronics",
      "Modulation format"
    ],
    answer: "Power budget"
  },
  {
    id: 109,
    question: "Power budget determines the maximum:",
    options: [
      "Data rate",
      "Fiber distance",
      "BER",
      "Noise figure"
    ],
    answer: "Fiber distance"
  },
  {
    id: 110,
    question: "Which loss is caused by fiber joints?",
    options: [
      "Connector loss",
      "Splice loss",
      "Component loss",
      "Margin loss"
    ],
    answer: "Splice loss"
  },
  {
    id: 111,
    question: "The rise time budget focuses on the:",
    options: [
      "Frequency domain only",
      "Time domain",
      "Optical wavelength",
      "Power margin"
    ],
    answer: "Time domain"
  },
  {
    id: 112,
    question: "Rise time limitation is mainly caused by:",
    options: [
      "Attenuation",
      "Dispersion",
      "Noise",
      "Reflection"
    ],
    answer: "Dispersion"
  },
  {
    id: 113,
    question: "Dispersion causes:",
    options: [
      "Power loss",
      "Pulse spreading",
      "Wavelength shift",
      "Amplifier saturation"
    ],
    answer: "Pulse spreading"
  },
  {
    id: 114,
    question: "For NRZ modulation, the maximum allowable system rise time is approximately:",
    options: [
      "1 / Bit Rate",
      "0.7 / Bit Rate",
      "2 / Bit Rate",
      "Bit Rate / 2"
    ],
    answer: "0.7 / Bit Rate"
  },
  {
    id: 115,
    question: "If rise time exceeds its limit, what occurs?",
    options: [
      "Attenuation",
      "Shot noise",
      "Inter-symbol interference (ISI)",
      "Reflection loss"
    ],
    answer: "Inter-symbol interference (ISI)"
  },
  {
    id: 116,
    question: "Total system rise time is calculated using:",
    options: [
      "Arithmetic sum",
      "Maximum value",
      "Root Sum of Squares (RSS)",
      "Average value"
    ],
    answer: "Root Sum of Squares (RSS)"
  },
  {
    id: 117,
    question: "The rise time budget includes contributions from:",
    options: [
      "Fiber only",
      "Transmitter only",
      "Transmitter, dispersion, and receiver",
      "Noise only"
    ],
    answer: "Transmitter, dispersion, and receiver"
  },
  {
    id: 118,
    question: "Which parameter links dispersion to spectral width?",
    options: [
      "Fiber attenuation",
      "Dispersion parameter (D)",
      "BER",
      "Margin"
    ],
    answer: "Dispersion parameter (D)"
  },
  {
    id: 119,
    question: "The rise time budget limits the maximum:",
    options: [
      "Optical power",
      "Number of ONUs",
      "Data rate or distance",
      "Connector count"
    ],
    answer: "Data rate or distance"
  },
  {
    id: 120,
    question: "Which budget is usually more restrictive at high bit rates?",
    options: [
      "Power budget",
      "Rise time budget",
      "Noise budget",
      "Connector budget"
    ],
    answer: "Rise time budget"
  },
  {
    id: 121,
    question: "Nonlinear effects become significant in:",
    options: [
      "Low-power short links",
      "High-power long-haul systems",
      "Copper networks",
      "Wireless systems"
    ],
    answer: "High-power long-haul systems"
  },
  {
    id: 122,
    question: "Four-Wave Mixing (FWM) causes:",
    options: [
      "Power attenuation",
      "New unwanted frequencies",
      "Thermal noise",
      "Connector loss"
    ],
    answer: "New unwanted frequencies"
  },
  {
    id: 123,
    question: "Stimulated Raman Scattering (SRS) results in:",
    options: [
      "Pulse broadening",
      "Power transfer between wavelengths",
      "Connector reflection",
      "Phase noise"
    ],
    answer: "Power transfer between wavelengths"
  },
  {
    id: 124,
    question: "Stimulated Brillouin Scattering (SBS) mainly causes:",
    options: [
      "BER reduction",
      "Backward power scattering",
      "Wavelength routing",
      "Clock recovery failure"
    ],
    answer: "Backward power scattering"
  },
  {
    id: 125,
    question: "Nonlinear effects are more common in:",
    options: [
      "Single-channel systems",
      "WDM systems",
      "Short links",
      "Low data rates"
    ],
    answer: "WDM systems"
  },
  {
    id: 126,
    question: "The link budget must satisfy:",
    options: [
      "Power test only",
      "Rise time test only",
      "Both power and rise time tests",
      "Neither test"
    ],
    answer: "Both power and rise time tests"
  },
  {
    id: 127,
    question: "Which factor degrades system performance with distance?",
    options: [
      "Attenuation",
      "Dispersion",
      "Both attenuation and dispersion",
      "Noise only"
    ],
    answer: "Both attenuation and dispersion"
  },
  {
    id: 128,
    question: "Receiver sensitivity directly affects:",
    options: [
      "Modulation type",
      "Maximum distance",
      "Fiber type",
      "Wavelength"
    ],
    answer: "Maximum distance"
  },
  {
    id: 129,
    question: "Increasing data rate mainly stresses the:",
    options: [
      "Power budget",
      "Rise time budget",
      "Margin",
      "Connector loss"
    ],
    answer: "Rise time budget"
  },
  {
    id: 130,
    question: "Which component defines the noise floor of the receiver?",
    options: [
      "Photodetector",
      "TIA",
      "Filter",
      "Decision circuit"
    ],
    answer: "TIA"
  },
  {
    id: 131,
    question: "Which parameter is measured in dB?",
    options: [
      "Rise time",
      "Loss",
      "Bit rate",
      "BER"
    ],
    answer: "Loss"
  },
  {
    id: 132,
    question: "Which phenomenon limits bandwidth?",
    options: [
      "Attenuation",
      "Dispersion",
      "Margin",
      "Shot noise"
    ],
    answer: "Dispersion"
  },
  {
    id: 133,
    question: "Optical system design always balances:",
    options: [
      "Cost and wavelength",
      "Power and bandwidth",
      "Noise and temperature",
      "Distance and connectors"
    ],
    answer: "Power and bandwidth"
  },
  {
    id: 134,
    question: "Which element converts current to voltage?",
    options: [
      "Photodiode",
      "Laser",
      "TIA",
      "Filter"
    ],
    answer: "TIA"
  },
  {
    id: 135,
    question: "Decision circuits determine:",
    options: [
      "Wavelength",
      "Bit value (0 or 1)",
      "Attenuation",
      "Noise level"
    ],
    answer: "Bit value (0 or 1)"
  },
  {
    id: 136,
    question: "Higher dispersion results in:",
    options: [
      "Narrower pulses",
      "Broader pulses",
      "Higher power",
      "Lower noise"
    ],
    answer: "Broader pulses"
  },
  {
    id: 137,
    question: "Optical margin improves system:",
    options: [
      "Speed",
      "Safety and reliability",
      "Bandwidth",
      "Noise performance only"
    ],
    answer: "Safety and reliability"
  },
  {
    id: 138,
    question: "Which budget determines maximum link distance?",
    options: [
      "Only power budget",
      "Only rise time budget",
      "The more restrictive of the two",
      "Noise budget"
    ],
    answer: "The more restrictive of the two"
  },
  {
    id: 139,
    question: "Which effect transfers power between WDM channels?",
    options: [
      "FWM",
      "SBS",
      "SRS",
      "Dispersion"
    ],
    answer: "SRS"
  },
  {
    id: 140,
    question: "Which unit is used for receiver sensitivity?",
    options: [
      "dB",
      "dBm",
      "Hz",
      "Seconds"
    ],
    answer: "dBm"
  }
];


const questionsPart7 = [
  {
    id: 141,
    question: "What does Radio Frequency (RF) refer to?",
    options: [
      "Mechanical waves used in wired communication",
      "Optical waves used in fiber optics",
      "Electromagnetic waves used for communication and broadcasting",
      "Acoustic waves used in audio systems"
    ],
    answer: "Electromagnetic waves used for communication and broadcasting"
  },
  {
    id: 142,
    question: "The RF spectrum typically ranges between:",
    options: [
      "3 Hz and 3 MHz",
      "3 kHz and 300 GHz",
      "30 MHz and 3 THz",
      "300 Hz and 30 GHz"
    ],
    answer: "3 kHz and 300 GHz"
  },
  {
    id: 143,
    question: "RF waves travel at approximately:",
    options: [
      "150,000 km/s",
      "200,000 km/s",
      "300,000 km/s",
      "30,000 km/s"
    ],
    answer: "300,000 km/s"
  },
  {
    id: 144,
    question: "Which frequency range corresponds to Very Low Frequency (VLF)?",
    options: [
      "30 kHz – 300 kHz",
      "300 kHz – 30 MHz",
      "3 kHz – 30 kHz",
      "30 MHz – 300 MHz"
    ],
    answer: "3 kHz – 30 kHz"
  },
  {
    id: 145,
    question: "Which of the following is an application of RF technology?",
    options: [
      "Fiber optic transmission",
      "Mechanical sensors",
      "GPS navigation systems",
      "Infrared thermal cameras only"
    ],
    answer: "GPS navigation systems"
  },
  {
    id: 146,
    question: "Which technology uses RF for short-range data transmission?",
    options: [
      "Ethernet",
      "Optical fiber",
      "Bluetooth",
      "DSL"
    ],
    answer: "Bluetooth"
  },
  {
    id: 147,
    question: "How is an RF signal generated?",
    options: [
      "By chemical reactions",
      "By oscillating an electric current in a circuit",
      "By optical amplification",
      "By thermal excitation"
    ],
    answer: "By oscillating an electric current in a circuit"
  },
  {
    id: 148,
    question: "Which component is used to transmit RF signals into space?",
    options: [
      "Modem",
      "Filter",
      "Antenna",
      "Amplifier"
    ],
    answer: "Antenna"
  },
  {
    id: 149,
    question: "What is the role of a receiver in RF communication?",
    options: [
      "Generate RF waves",
      "Store RF signals",
      "Detect RF waves and convert them into usable data",
      "Amplify optical signals"
    ],
    answer: "Detect RF waves and convert them into usable data"
  },
  {
    id: 150,
    question: "AIDC stands for:",
    options: [
      "Automatic Internet Data Control",
      "Advanced Identification Data Code",
      "Automatic Identification and Data Capture",
      "Automated Integrated Digital Communication"
    ],
    answer: "Automatic Identification and Data Capture"
  },
  {
    id: 151,
    question: "The main goal of AIDC systems is to:",
    options: [
      "Reduce network bandwidth",
      "Eliminate manual data entry",
      "Increase RF power",
      "Improve fiber transmission"
    ],
    answer: "Eliminate manual data entry"
  },
  {
    id: 152,
    question: "Which of the following is considered a data carrier in AIDC?",
    options: [
      "RFID reader",
      "Barcode",
      "Database",
      "Router"
    ],
    answer: "Barcode"
  },
  {
    id: 153,
    question: "RFID readers are classified as:",
    options: [
      "Data carriers",
      "Data processors",
      "Data capture devices",
      "Communication channels"
    ],
    answer: "Data capture devices"
  },
  {
    id: 154,
    question: "Which communication channel can be used in AIDC systems?",
    options: [
      "Wi-Fi",
      "Bluetooth",
      "Wired connections",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    id: 155,
    question: "Which of the following is NOT a common AIDC technology?",
    options: [
      "RFID",
      "Biometrics",
      "OCR",
      "Satellite communication"
    ],
    answer: "Satellite communication"
  },
  {
    id: 156,
    question: "RFID stands for:",
    options: [
      "Radio Field Integrated Device",
      "Remote Frequency Information Device",
      "Radio Frequency Identification",
      "Radio Fiber Interface Device"
    ],
    answer: "Radio Frequency Identification"
  },
  {
    id: 157,
    question: "RFID enables identification without:",
    options: [
      "Power supply",
      "Antenna",
      "Line-of-sight",
      "Middleware"
    ],
    answer: "Line-of-sight"
  },
  {
    id: 158,
    question: "The earliest concepts of RFID originated during:",
    options: [
      "1930s",
      "World War II",
      "1960s",
      "1980s"
    ],
    answer: "World War II"
  },
  {
    id: 159,
    question: "IFF systems were developed primarily for:",
    options: [
      "Inventory management",
      "Retail tracking",
      "Military identification (friend or foe)",
      "Healthcare"
    ],
    answer: "Military identification (friend or foe)"
  },
  {
    id: 160,
    question: "When was the first active RFID tag with memory patented?",
    options: [
      "1953",
      "1960",
      "1969",
      "1979"
    ],
    answer: "1969"
  },
  {
    id: 161,
    question: "Passive RFID transponder patents appeared in:",
    options: [
      "1950s",
      "1960s",
      "1970s",
      "1990s"
    ],
    answer: "1970s"
  },
  {
    id: 162,
    question: "Which company significantly accelerated RFID adoption in retail?",
    options: [
      "Amazon",
      "Apple",
      "IBM",
      "Walmart"
    ],
    answer: "Walmart"
  },
  {
    id: 163,
    question: "EPCglobal is mainly associated with:",
    options: [
      "RFID hardware manufacturing",
      "RFID standardization",
      "Antenna design",
      "RFID encryption"
    ],
    answer: "RFID standardization"
  },
  {
    id: 164,
    question: "RFID integration with IoT mainly occurred during:",
    options: [
      "1990s",
      "2000s",
      "2010s to present",
      "1980s"
    ],
    answer: "2010s to present"
  },
  {
    id: 165,
    question: "Which is NOT a core component of an RFID system?",
    options: [
      "RFID tag",
      "RFID reader",
      "Antenna",
      "Optical amplifier"
    ],
    answer: "Optical amplifier"
  },
  {
    id: 166,
    question: "An RFID tag primarily consists of:",
    options: [
      "Battery and processor",
      "Microchip and antenna",
      "Transceiver and controller",
      "Filter and amplifier"
    ],
    answer: "Microchip and antenna"
  },
  {
    id: 167,
    question: "Which RFID tag type has no internal power source?",
    options: [
      "Active",
      "Semi-passive",
      "Passive",
      "Hybrid"
    ],
    answer: "Passive"
  },
  {
    id: 168,
    question: "Active RFID tags are powered by:",
    options: [
      "Reader signal only",
      "External power lines",
      "Solar cells",
      "Internal batteries"
    ],
    answer: "Internal batteries"
  },
  {
    id: 169,
    question: "Semi-passive RFID tags use batteries to:",
    options: [
      "Transmit signals",
      "Power the chip only",
      "Amplify RF waves",
      "Replace antennas"
    ],
    answer: "Power the chip only"
  },
  {
    id: 170,
    question: "The RFID reader is also known as:",
    options: [
      "Transponder",
      "Interrogator",
      "Modulator",
      "Encoder"
    ],
    answer: "Interrogator"
  },
  {
    id: 171,
    question: "Which RFID reader component sends RF signals?",
    options: [
      "Controller",
      "Processor",
      "Antenna",
      "Middleware"
    ],
    answer: "Antenna"
  },
  {
    id: 172,
    question: "The RFID transceiver performs which function?",
    options: [
      "Data storage",
      "Transmission and reception of RF signals",
      "Filtering noise",
      "Power regulation"
    ],
    answer: "Transmission and reception of RF signals"
  },
  {
    id: 173,
    question: "The controller in an RFID reader is responsible for:",
    options: [
      "Generating RF waves",
      "Processing tag data and interfacing with systems",
      "Powering passive tags",
      "Encrypting antenna signals"
    ],
    answer: "Processing tag data and interfacing with systems"
  },
  {
    id: 174,
    question: "RFID middleware is mainly used for:",
    options: [
      "Antenna tuning",
      "Signal amplification",
      "Data filtering and system integration",
      "Power management"
    ],
    answer: "Data filtering and system integration"
  },
  {
    id: 175,
    question: "Which task is handled by RFID middleware?",
    options: [
      "Tag manufacturing",
      "Signal transmission",
      "Eliminating duplicate data",
      "RF generation"
    ],
    answer: "Eliminating duplicate data"
  },
  {
    id: 176,
    question: "Communication interfaces in RFID systems may include:",
    options: [
      "Ethernet",
      "USB",
      "Wireless links",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    id: 177,
    question: "Passive RFID tags get their power from:",
    options: [
      "Batteries",
      "Solar energy",
      "Electromagnetic field of the reader",
      "Wired connections"
    ],
    answer: "Electromagnetic field of the reader"
  },
  {
    id: 178,
    question: "Which component is required to operate an RFID reader?",
    options: [
      "Antenna only",
      "External power supply",
      "Battery-less design",
      "Passive coupling"
    ],
    answer: "External power supply"
  },
  {
    id: 179,
    question: "RFID is most suitable for which scenario?",
    options: [
      "High-speed optical networks",
      "Object identification and tracking",
      "Long-distance voice communication",
      "Video streaming"
    ],
    answer: "Object identification and tracking"
  },
  {
    id: 180,
    question: "A major advantage of RFID over barcodes is:",
    options: [
      "Lower cost",
      "Higher power efficiency",
      "No line-of-sight requirement",
      "Optical compatibility"
    ],
    answer: "No line-of-sight requirement"
  }
];

const questionsPart8 = [
  {
    id: 181,
    question: "AIDC stands for:",
    options: [
      "Automated Internet Data Control",
      "Advanced Identification Data Code",
      "Automatic Integrated Digital Communication",
      "Automatic Identification and Data Capture"
    ],
    answer: "Automatic Identification and Data Capture"
  },
  {
    id: 182,
    question: "The main objective of AIDC systems is to:",
    options: [
      "Increase manual data entry accuracy",
      "Eliminate manual data entry and automate identification",
      "Improve fiber attenuation",
      "Reduce RF spectrum range"
    ],
    answer: "Eliminate manual data entry and automate identification"
  },
  {
    id: 183,
    question: "In an AIDC system, “Data Carriers” are best described as:",
    options: [
      "Devices that scan and interpret IDs",
      "Network cables connecting devices",
      "Items that store identification information (e.g., barcode/RFID tag)",
      "Enterprise software that processes data"
    ],
    answer: "Items that store identification information (e.g., barcode/RFID tag)"
  },
  {
    id: 184,
    question: "Which of the following is a Data Capture Device in AIDC?",
    options: [
      "RFID tag",
      "Barcode scanner",
      "Database server",
      "ERP software"
    ],
    answer: "Barcode scanner"
  },
  {
    id: 185,
    question: "Which of the following is considered a “Data Processing System” in AIDC?",
    options: [
      "Barcode label",
      "RFID antenna",
      "Database or ERP software",
      "RF signal generator"
    ],
    answer: "Database or ERP software"
  },
  {
    id: 186,
    question: "Which list contains only common AIDC technologies?",
    options: [
      "RFID, Optical amplifier, Radar",
      "Barcodes, QR Codes, RFID, Biometrics, OCR",
      "GPS, RFID, DSL, ATM",
      "Microwave oven, RFID, MRI"
    ],
    answer: "Barcodes, QR Codes, RFID, Biometrics, OCR"
  },
  {
    id: 187,
    question: "Which is an application area of AIDC mentioned in the lecture?",
    options: [
      "Satellite launch systems",
      "Aviation",
      "Underwater acoustic communication",
      "Nuclear fusion control"
    ],
    answer: "Aviation"
  },
  {
    id: 188,
    question: "RFID enables automated data collection without:",
    options: [
      "Any antenna",
      "Any reader",
      "Physical contact or line-of-sight",
      "Any communication interface"
    ],
    answer: "Physical contact or line-of-sight"
  },
  {
    id: 189,
    question: "The term “Transponder” in RFID refers to the:",
    options: [
      "RFID reader",
      "RFID tag",
      "Middleware",
      "Communication interface"
    ],
    answer: "RFID tag"
  },
  {
    id: 190,
    question: "The term “Interrogator” in RFID refers to the:",
    options: [
      "RFID reader",
      "RFID tag",
      "Host system",
      "Barcode printer"
    ],
    answer: "RFID reader"
  },
  {
    id: 191,
    question: "RFID systems use electromagnetic fields primarily to:",
    options: [
      "Heat industrial materials",
      "Identify and track objects",
      "Convert optical waves into electrical waves",
      "Provide wired internet access"
    ],
    answer: "Identify and track objects"
  },
  {
    id: 192,
    question: "During World War II, the earliest practical RFID-like application was:",
    options: [
      "NFC payment systems",
      "QR code scanning",
      "IFF (Identification Friend or Foe)",
      "Ethernet switching"
    ],
    answer: "IFF (Identification Friend or Foe)"
  },
  {
    id: 193,
    question: "The 1950s RFID development period is mainly associated with:",
    options: [
      "Contactless payments",
      "Passive radio transmitter experiments and early theoretical work",
      "Walmart supplier mandates",
      "EPCglobal creation"
    ],
    answer: "Passive radio transmitter experiments and early theoretical work"
  },
  {
    id: 194,
    question: "In the 1960s, RFID progress included:",
    options: [
      "First smartphone NFC",
      "First optical amplifier",
      "Early RFID systems and theory on electromagnetic wave scattering",
      "IoT integration"
    ],
    answer: "Early RFID systems and theory on electromagnetic wave scattering"
  },
  {
    id: 195,
    question: "The 1990s RFID era is best described as:",
    options: [
      "No standards existed",
      "Standardization and wider adoption began",
      "RFID stopped being researched",
      "Only military use remained"
    ],
    answer: "Standardization and wider adoption began"
  },
  {
    id: 196,
    question: "EPCglobal is associated mainly with:",
    options: [
      "Fiber manufacturing",
      "Promoting RFID standards for supply chain management",
      "Wi-Fi encryption",
      "Barcode printing"
    ],
    answer: "Promoting RFID standards for supply chain management"
  },
  {
    id: 197,
    question: "A major retail event accelerating RFID adoption was:",
    options: [
      "Apple creating RFID tags",
      "Walmart adopting RFID for inventory tracking",
      "IBM banning RFID",
      "NASA requiring RFID for satellites"
    ],
    answer: "Walmart adopting RFID for inventory tracking"
  },
  {
    id: 198,
    question: "The lecture states Walmart accelerated adoption globally by:",
    options: [
      "Banning barcodes",
      "Mandating suppliers to use RFID (2003)",
      "Inventing EPCglobal (1999)",
      "Replacing fiber networks with RFID"
    ],
    answer: "Mandating suppliers to use RFID (2003)"
  },
  {
    id: 199,
    question: "The “2010s to Present” RFID era includes:",
    options: [
      "Only radar systems",
      "Integration with IoT and wider affordability/miniaturization",
      "Elimination of RFID standards",
      "Exclusive use in aviation"
    ],
    answer: "Integration with IoT and wider affordability/miniaturization"
  },
  {
    id: 200,
    question: "Which is NOT listed as a core component of an RFID system?",
    options: [
      "RFID Tag",
      "RFID Reader",
      "Middleware",
      "Optical fiber amplifier"
    ],
    answer: "Optical fiber amplifier"
  }
];

const questionsPart9 = [
  {
    id: 201,
    question: "RFID stands for:",
    options: [
      "Radio Frequency Interface Device",
      "Radio Frequency Identification",
      "Rapid Frequency Identification",
      "Radio Field Identification"
    ],
    answer: "Radio Frequency Identification"
  },
  {
    id: 202,
    question: "In the lecture’s comparison, RFID communication is based on:",
    options: [
      "Optical scanning",
      "Radio waves between a tag and reader",
      "Infrared light",
      "Wired Ethernet"
    ],
    answer: "Radio waves between a tag and reader"
  },
  {
    id: 203,
    question: "Barcode technology uses:",
    options: [
      "Optical scanning of printed patterns",
      "Backscatter RF",
      "Magnetic induction",
      "Ultrasound"
    ],
    answer: "Optical scanning of printed patterns"
  },
  {
    id: 204,
    question: "RFID Tag Structure is mentioned as a lecture slide title:",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 205,
    question: "RFID components include:",
    options: [
      "Barcode label + barcode scanner",
      "RFID tag (chip+antenna) + RFID reader",
      "Printer + ink cartridge",
      "Camera + image sensor"
    ],
    answer: "RFID tag (chip+antenna) + RFID reader"
  },
  {
    id: 206,
    question: "Barcode components include:",
    options: [
      "RFID tag + RFID reader",
      "Barcode label + barcode scanner",
      "NFC tag + Wi-Fi router",
      "Antenna + middleware"
    ],
    answer: "Barcode label + barcode scanner"
  },
  {
    id: 207,
    question: "RFID (passive) range in the comparison table is approximately:",
    options: [
      "Up to 12 meters (UHF)",
      "Up to 120 meters",
      "Up to 1 meter only",
      "Up to 10 centimeters only"
    ],
    answer: "Up to 12 meters (UHF)"
  },
  {
    id: 208,
    question: "RFID (active) range in the comparison table is:",
    options: [
      "1–2 meters",
      "12 meters",
      "100+ meters",
      "Always under 10 cm"
    ],
    answer: "100+ meters"
  },
  {
    id: 209,
    question: "Barcode range is described as:",
    options: [
      "Hundreds of meters",
      "A few cm to a few meters, line-of-sight required",
      "Up to 12 meters through walls",
      "Unlimited range"
    ],
    answer: "A few cm to a few meters, line-of-sight required"
  },
  {
    id: 210,
    question: "RFID data storage (per the table) is:",
    options: [
      "Fixed, unchangeable, few bytes",
      "Kilobytes, and can be updated",
      "Always terabytes",
      "Stored only in the reader"
    ],
    answer: "Kilobytes, and can be updated"
  },
  {
    id: 211,
    question: "Barcode data storage (per the table) is:",
    options: [
      "Kilobytes, updateable",
      "Fixed, unchangeable, few bytes",
      "Unlimited, cloud-based",
      "Stored in an antenna"
    ],
    answer: "Fixed, unchangeable, few bytes"
  },
  {
    id: 212,
    question: "RFID read speed supports:",
    options: [
      "Only one tag at a time",
      "Multiple tags simultaneously (bulk reading)",
      "Only manual entry",
      "Only QR codes"
    ],
    answer: "Multiple tags simultaneously (bulk reading)"
  },
  {
    id: 213,
    question: "Barcode reading is typically:",
    options: [
      "Multiple items at once",
      "Bulk reading",
      "One barcode at a time",
      "Reading through objects"
    ],
    answer: "One barcode at a time"
  },
  {
    id: 214,
    question: "Line-of-sight for RFID is:",
    options: [
      "Always required",
      "Not required (can read without direct visibility in many cases)",
      "Required only at night",
      "Required only for active tags"
    ],
    answer: "Not required (can read without direct visibility in many cases)"
  },
  {
    id: 215,
    question: "Line-of-sight for barcodes is:",
    options: [
      "Not required",
      "Required (direct visibility is necessary)",
      "Required only for QR codes",
      "Required only for RFID"
    ],
    answer: "Required (direct visibility is necessary)"
  },
  {
    id: 216,
    question: "Cost comparison states:",
    options: [
      "RFID is always cheaper than barcode",
      "Barcode has higher initial cost",
      "RFID has higher initial cost for tags/readers",
      "Both are identical cost"
    ],
    answer: "RFID has higher initial cost for tags/readers"
  },
  {
    id: 217,
    question: "One listed RFID advantage is:",
    options: [
      "Needs line-of-sight always",
      "Long range and automated bulk reading",
      "Data cannot be updated",
      "Only works in dry environments"
    ],
    answer: "Long range and automated bulk reading"
  },
  {
    id: 218,
    question: "One listed RFID disadvantage is:",
    options: [
      "Higher cost",
      "Requires optical scanning",
      "Must be printed on paper",
      "Cannot track assets"
    ],
    answer: "Higher cost"
  },
  {
    id: 219,
    question: "The slide mentions UHF RFID can suffer interference particularly from:",
    options: [
      "Paper and glass",
      "Metals and liquids",
      "Air and vacuum",
      "Rubber only"
    ],
    answer: "Metals and liquids"
  },
  {
    id: 220,
    question: "RFID is ideal when you need:",
    options: [
      "Manual one-by-one scanning only",
      "Automated, bulk, non-line-of-sight scanning",
      "Only printed labels",
      "Visual decoding only"
    ],
    answer: "Automated, bulk, non-line-of-sight scanning"
  }
];

const questionsPart10 = [
  {
    id: 221,
    question: "Barcodes are ideal when you need:",
    options: [
      "Very low-cost simple identification",
      "100+ meter tracking",
      "Battery-powered tags",
      "Kilobytes of updateable data"
    ],
    answer: "Very low-cost simple identification"
  },
  {
    id: 222,
    question: "In a passive RFID system, tags rely entirely on:",
    options: [
      "A built-in battery",
      "The RFID reader’s energy",
      "Solar power",
      "Wired power"
    ],
    answer: "The RFID reader’s energy"
  },
  {
    id: 223,
    question: "In passive workflow, the reader first:",
    options: [
      "Receives the tag’s response",
      "Emits an electromagnetic field through its antenna",
      "Updates the barcode label",
      "Prints the tag ID"
    ],
    answer: "Emits an electromagnetic field through its antenna"
  },
  {
    id: 224,
    question: "In passive workflow, the tag is powered when:",
    options: [
      "The tag antenna captures energy from the reader’s signal",
      "The barcode scanner flashes light",
      "Middleware sends electricity",
      "The tag detects GPS"
    ],
    answer: "The tag antenna captures energy from the reader’s signal"
  },
  {
    id: 225,
    question: "In passive workflow, “Signal Processing” means:",
    options: [
      "The reader prints a label",
      "The microchip encodes stored data (e.g., unique ID)",
      "The antenna melts metal",
      "The tag uploads video"
    ],
    answer: "The microchip encodes stored data (e.g., unique ID)"
  },
  {
    id: 226,
    question: "In passive workflow, “Data Transmission” happens by:",
    options: [
      "A wired cable from tag to reader",
      "The tag reflecting a modulated signal (backscatter)",
      "Bluetooth pairing",
      "Optical scanning"
    ],
    answer: "The tag reflecting a modulated signal (backscatter)"
  },
  {
    id: 227,
    question: "“Backscatter communication” refers to:",
    options: [
      "Reader sends optical pulses",
      "Tag reflects a modulated signal back to the reader",
      "Tag uses Wi-Fi",
      "Middleware scans ink"
    ],
    answer: "Tag reflects a modulated signal back to the reader"
  },
  {
    id: 228,
    question: "Active tags are described as:",
    options: [
      "Reader-powered only",
      "Battery-powered and can actively transmit",
      "Optical-only labels",
      "Always passive"
    ],
    answer: "Battery-powered and can actively transmit"
  },
  {
    id: 229,
    question: "Semi-passive tags combine elements of:",
    options: [
      "Barcode and QR codes",
      "Passive and active tags",
      "Microwave and TV signals",
      "RFID and Wi-Fi"
    ],
    answer: "Passive and active tags"
  },
  {
    id: 230,
    question: "Semi-passive tags have a battery mainly for:",
    options: [
      "Powering the microchip",
      "Powering the barcode scanner",
      "Heating the antenna",
      "Printing labels"
    ],
    answer: "Powering the microchip"
  },
  {
    id: 231,
    question: "LF (Low Frequency) common RFID range is:",
    options: [
      "860–960 MHz",
      "125–134 kHz",
      "13.56 GHz",
      "2.45 THz"
    ],
    answer: "125–134 kHz"
  },
  {
    id: 232,
    question: "LF was first used (and still used) for:",
    options: [
      "Animal tagging",
      "Video streaming",
      "Wi-Fi access points",
      "GPS navigation"
    ],
    answer: "Animal tagging"
  },
  {
    id: 233,
    question: "UHF RFID band in the lecture is approximately:",
    options: [
      "125–134 kHz",
      "13.56 MHz",
      "890–960 MHz (often 860–960 MHz region)",
      "30–300 GHz"
    ],
    answer: "890–960 MHz (often 860–960 MHz region)"
  },
  {
    id: 234,
    question: "The lecture names the main UHF application as:",
    options: [
      "Supply Chain Management",
      "FM radio broadcasting",
      "Television remotes",
      "Keyboard manufacturing"
    ],
    answer: "Supply Chain Management"
  },
  {
    id: 235,
    question: "HF is commonly associated with applications like:",
    options: [
      "Smart cards / NFC / payments / libraries",
      "Long-range wildlife tracking (100+ m)",
      "Satellite communication",
      "Printed product labels only"
    ],
    answer: "Smart cards / NFC / payments / libraries"
  },
  {
    id: 236,
    question: "Passive RFID tags communicate mainly by:",
    options: [
      "Transmitting their own RF signal",
      "Backscattering the reader signal",
      "Infrared reflection",
      "Ultrasound"
    ],
    answer: "Backscattering the reader signal"
  },
  {
    id: 237,
    question: "What is the dB value for a power ratio of 4?",
    options: [
      "3 dB",
      "6 dB",
      "10 dB",
      "12 dB"
    ],
    answer: "6 dB"
  },
  {
    id: 238,
    question: "A 10 dB gain increases power by about:",
    options: [
      "2×",
      "5×",
      "10×",
      "100×"
    ],
    answer: "10×"
  },
  {
    id: 239,
    question: "1 watt equals:",
    options: [
      "0 dBm",
      "10 dBm",
      "20 dBm",
      "30 dBm"
    ],
    answer: "30 dBm"
  },
  {
    id: 240,
    question: "100 mW equals:",
    options: [
      "0 dBm",
      "10 dBm",
      "20 dBm",
      "30 dBm"
    ],
    answer: "10 dBm"
  },
  {
    id: 241,
    question: "EIRP is referenced to which antenna?",
    options: [
      "Dipole",
      "Isotropic",
      "Patch",
      "Loop"
    ],
    answer: "Isotropic"
  },
  {
    id: 242,
    question: "ERP is referenced to which antenna?",
    options: [
      "Isotropic",
      "Half-wave dipole",
      "Helical",
      "Parabolic"
    ],
    answer: "Half-wave dipole"
  },
  {
    id: 243,
    question: "FCC regulations correspond to which region?",
    options: [
      "Europe",
      "USA",
      "Japan",
      "China"
    ],
    answer: "USA"
  },
  {
    id: 244,
    question: "ETSI/CEPT regulations apply to:",
    options: [
      "Region 1",
      "Region 2",
      "Region 3",
      "Region 4"
    ],
    answer: "Region 1"
  },
  {
    id: 245,
    question: "Biggest challenge for a single UHF product worldwide is:",
    options: [
      "Water absorption",
      "Different regional frequency regulations",
      "Antenna size",
      "Tag memory"
    ],
    answer: "Different regional frequency regulations"
  },
  {
    id: 246,
    question: "European UHF band is typically:",
    options: [
      "902–928 MHz",
      "865–867 MHz",
      "952–955 MHz",
      "433 MHz"
    ],
    answer: "865–867 MHz"
  },
  {
    id: 247,
    question: "US UHF band is typically:",
    options: [
      "865–867 MHz",
      "952–955 MHz",
      "902–928 MHz",
      "433 MHz"
    ],
    answer: "902–928 MHz"
  },
  {
    id: 248,
    question: "Using a US UHF reader in Europe without modification mainly causes:",
    options: [
      "Better performance",
      "Regulatory violation",
      "Lower absorption",
      "No issue"
    ],
    answer: "Regulatory violation"
  },
  {
    id: 249,
    question: "The most critical factor affecting passive read range is:",
    options: [
      "Reader EIRP",
      "Tag color",
      "Barcode quality",
      "Label size"
    ],
    answer: "Reader EIRP"
  },
  {
    id: 250,
    question: "Passive RFID tags rely on the reader because they:",
    options: [
      "Have no antenna",
      "Have no transmitter",
      "Have no memory",
      "Have no ID"
    ],
    answer: "Have no transmitter"
  }
];

const questionsPart11 = [
  {
    id: 251,
    question: "Q1 A hospital wants RFID for patient wristbands (near human tissue), short range, low-cost readers. Best band?",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "HF"
  },
  {
    id: 252,
    question: "Q2 A warehouse needs long passive read range and controlled (directional) read zones. Best band?",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "UHF"
  },
  {
    id: 253,
    question: "Q3 Tagging objects with high water content at short range requires reliable reading. Best choice?",
    options: ["UHF", "HF", "Microwave", "None"],
    answer: "HF"
  },
  {
    id: 254,
    question: "Q4 Animal tagging with small data size and slow read speed is best served by:",
    options: ["UHF", "HF", "LF", "Microwave"],
    answer: "LF"
  },
  {
    id: 255,
    question: "Q5 Which RFID band performs worst near metal surfaces?",
    options: ["LF", "HF", "UHF", "All equal"],
    answer: "UHF"
  },
  {
    id: 256,
    question: "Q6 Which statement about antenna directionality is correct?",
    options: [
      "HF readers are directional",
      "UHF readers can be directional",
      "LF readers are always directional",
      "Microwave readers are non-directional"
    ],
    answer: "UHF readers can be directional"
  },
  {
    id: 257,
    question: "Q7 LF tags are thicker and more expensive mainly because:",
    options: [
      "Many coil turns are required",
      "They use microwaves",
      "They require batteries",
      "They need GPS"
    ],
    answer: "Many coil turns are required"
  },
  {
    id: 258,
    question: "Q8 Higher data rate than LF and good performance near water/tissue suggests:",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "HF"
  },
  {
    id: 259,
    question: "Q9 Which comparison is correct?",
    options: [
      "LF has highest data rate",
      "HF has shortest range",
      "UHF has longer range and higher data rate",
      "Microwave has lowest sensitivity"
    ],
    answer: "UHF has longer range and higher data rate"
  },
  {
    id: 260,
    question: "Q10 Passive RFID tags communicate mainly by:",
    options: [
      "Transmitting their own RF signal",
      "Backscattering the reader signal",
      "Infrared reflection",
      "Ultrasound"
    ],
    answer: "Backscattering the reader signal"
  },
  {
    id: 261,
    question: "Q11 What is the dB value for a power ratio of 4?",
    options: ["3 dB", "6 dB", "10 dB", "12 dB"],
    answer: "6 dB"
  },
  {
    id: 262,
    question: "Q12 A 3 dB cable loss with 2 W input gives approximately:",
    options: ["1 W", "0.5 W", "1.5 W", "2 W"],
    answer: "1 W"
  },
  {
    id: 263,
    question: "Q13 A 10 dB gain increases power by about:",
    options: ["2×", "5×", "10×", "100×"],
    answer: "10×"
  },
  {
    id: 264,
    question: "Q14 A 20 dB loss reduces power to:",
    options: ["1/2", "1/10", "1/100", "1/1000"],
    answer: "1/100"
  },
  {
    id: 265,
    question: "Q15 1 watt equals:",
    options: ["0 dBm", "10 dBm", "20 dBm", "30 dBm"],
    answer: "30 dBm"
  },
  {
    id: 266,
    question: "Q16 100 mW equals:",
    options: ["0 dBm", "10 dBm", "20 dBm", "30 dBm"],
    answer: "10 dBm"
  },
  {
    id: 267,
    question: "Q17 10 W equals:",
    options: ["30 dBm", "40 dBm", "20 dBm", "10 dBm"],
    answer: "40 dBm"
  },
  {
    id: 268,
    question: "Q18 33 dBm is approximately:",
    options: ["0.5 W", "1 W", "2 W", "4 W"],
    answer: "2 W"
  },
  {
    id: 269,
    question: "Q19 36 dBm is approximately:",
    options: ["1 W", "2 W", "4 W", "8 W"],
    answer: "4 W"
  },
  {
    id: 270,
    question: "Q20 40 dBm equals:",
    options: ["10 dBW", "40 dBW", "70 dBW", "−10 dBW"],
    answer: "10 dBW"
  }
];


const questionsPart12 = [
  {
    id: 271,
    question: "Q21 EIRP is referenced to which antenna?",
    options: ["Dipole", "Isotropic", "Patch", "Loop"],
    answer: "Isotropic"
  },
  {
    id: 272,
    question: "Q22 ERP is referenced to which antenna?",
    options: ["Isotropic", "Half-wave dipole", "Helical", "Parabolic"],
    answer: "Half-wave dipole"
  },
  {
    id: 273,
    question: "Q23 ERP = EIRP − ____ dB",
    options: ["1", "2.15", "3", "10"],
    answer: "2.15"
  },
  {
    id: 274,
    question: "Q24 If EIRP = 36 dBm, ERP ≈",
    options: ["38.15", "36", "33.85", "30"],
    answer: "33.85"
  },
  {
    id: 275,
    question: "Q25 Tx = 30 dBm, Gain = 6 dBi, Loss = 2 dB. EIRP =",
    options: ["34", "38", "30", "26"],
    answer: "38"
  },
  {
    id: 276,
    question: "Q26 Tx = 30 dBm, Gain = 6 dBd, Loss = 2 dB. ERP =",
    options: ["34", "38", "30", "26"],
    answer: "34"
  },
  {
    id: 277,
    question: "Q27 Tx = 27 dBm, Gain = 9 dBi, Loss = 3 dB. EIRP =",
    options: ["33", "36", "39", "30"],
    answer: "36"
  },
  {
    id: 278,
    question: "Q28 Reducing cable loss by 3 dB changes EIRP by:",
    options: ["−3 dB", "+3 dB", "+10 dB", "0"],
    answer: "+3 dB"
  },
  {
    id: 279,
    question: "Q29 To keep EIRP constant, increasing antenna gain by 4 dB requires Tx power to:",
    options: [
      "Decrease 4 dB",
      "Increase 4 dB",
      "Stay the same",
      "Decrease 2 dB"
    ],
    answer: "Decrease 4 dB"
  },
  {
    id: 280,
    question: "Q30 13 dBW equals:",
    options: ["−17 dBm", "13 dBm", "43 dBm", "30 dBm"],
    answer: "43 dBm"
  },
  {
    id: 281,
    question: "Q31 FCC regulations correspond to which region?",
    options: ["Europe", "USA", "Japan", "China"],
    answer: "USA"
  },
  {
    id: 282,
    question: "Q32 ETSI/CEPT regulations apply to:",
    options: ["Region 1", "Region 2", "Region 3", "Region 4"],
    answer: "Region 1"
  },
  {
    id: 283,
    question: "Q33 Biggest challenge for a single UHF product worldwide is:",
    options: [
      "Water absorption",
      "Different regional frequency regulations",
      "Antenna size",
      "Tag memory"
    ],
    answer: "Different regional frequency regulations"
  },
  {
    id: 284,
    question: "Q34 European UHF band is typically:",
    options: ["902–928 MHz", "865–867 MHz", "952–955 MHz", "433 MHz"],
    answer: "865–867 MHz"
  },
  {
    id: 285,
    question: "Q35 US UHF band is typically:",
    options: ["865–867 MHz", "952–955 MHz", "902–928 MHz", "433 MHz"],
    answer: "902–928 MHz"
  },
  {
    id: 286,
    question: "Q36 Using a US UHF reader in Europe without modification mainly causes:",
    options: [
      "Better performance",
      "Regulatory violation",
      "Lower absorption",
      "No issue"
    ],
    answer: "Regulatory violation"
  },
  {
    id: 287,
    question: "Q37 Backscatter modulation is needed to:",
    options: [
      "Create RF energy",
      "Encode data on reflected signal",
      "Increase frequency",
      "Power the reader"
    ],
    answer: "Encode data on reflected signal"
  },
  {
    id: 288,
    question: "Q38 The most critical factor affecting passive read range is:",
    options: ["Reader EIRP", "Tag color", "Barcode quality", "Label size"],
    answer: "Reader EIRP"
  },
  {
    id: 289,
    question: "Q39 2 W ERP equals approximately:",
    options: ["30 dBm", "33 dBm", "36 dBm", "40 dBm"],
    answer: "33 dBm"
  },
  {
    id: 290,
    question: "Q40 4 W EIRP equals approximately:",
    options: ["33 dBm", "36 dBm", "40 dBm", "43 dBm"],
    answer: "36 dBm"
  },
  {
    id: 291,
    question: "Q41 HF coils need fewer turns than LF, resulting mainly in:",
    options: [
      "Thicker tags",
      "Thinner and cheaper tags",
      "Higher absorption",
      "Worse data rate"
    ],
    answer: "Thinner and cheaper tags"
  },
  {
    id: 292,
    question: "Q42 Compared to UHF, HF generally has:",
    options: [
      "Longer range",
      "Lower data rate",
      "Smaller antennas",
      "Directional readers"
    ],
    answer: "Lower data rate"
  },
  {
    id: 293,
    question: "Q43 Item-level retail tracking at several meters is best with:",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "UHF"
  },
  {
    id: 294,
    question: "Q44 Passive tags rely on the reader because they:",
    options: [
      "Have no antenna",
      "Have no transmitter",
      "Have no memory",
      "Have no ID"
    ],
    answer: "Have no transmitter"
  },
  {
    id: 295,
    question: "Q45 Which environment is most problematic for UHF?",
    options: ["Near water/tissue", "Dry air", "Plastic", "Paper"],
    answer: "Near water/tissue"
  },
  {
    id: 296,
    question: "Q46 Moving a UHF tag from cardboard to water-filled packaging will:",
    options: ["Improve range", "Reduce range", "Have no effect", "Change frequency"],
    answer: "Reduce range"
  },
  {
    id: 297,
    question: "Q47 Minimal regulatory hassle and short-range niche use suggests:",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "LF"
  },
  {
    id: 298,
    question: "Q48 Why is UHF preferred in warehouses?",
    options: [
      "Works best through water",
      "Directional antennas and long range",
      "No regulations",
      "Lowest cost"
    ],
    answer: "Directional antennas and long range"
  },
  {
    id: 299,
    question: "Q49 An EIRP increase of 6 dB means power increases by:",
    options: ["2×", "4×", "6×", "10×"],
    answer: "4×"
  },
  {
    id: 300,
    question: "Q50 Power multiplied by 8 corresponds to about:",
    options: ["3 dB", "6 dB", "9 dB", "10 dB"],
    answer: "9 dB"
  }
];

const questionsPart13 = [
  {
    id: 301,
    question: "Q51 Tx = 24 dBm, Gain = 12 dBi, Loss = 6 dB. EIRP =",
    options: ["30", "36", "42", "18"],
    answer: "30"
  },
  {
    id: 302,
    question: "Q52 If loss increases from 6 dB to 9 dB, EIRP changes by:",
    options: ["+3", "−3", "+9", "0"],
    answer: "−3"
  },
  {
    id: 303,
    question: "Q53 EIRP = 36 dBm, Gain = 8 dBi, Loss = 4 dB. Tx =",
    options: ["24", "32", "40", "28"],
    answer: "28"
  },
  {
    id: 304,
    question: "Q54 ERP = 33 dBm, Gain = 6 dBd, Loss = 1 dB. Tx =",
    options: ["28", "30", "34", "26"],
    answer: "28"
  },
  {
    id: 305,
    question: "Q55 If EIRP = 30 dBm, ERP ≈",
    options: ["27.85", "30", "32.15", "25"],
    answer: "27.85"
  },
  {
    id: 306,
    question: "Q56 Increasing antenna gain by 3 dB at legal limit requires Tx to:",
    options: ["Increase 3 dB", "Decrease 3 dB", "Increase 10 dB", "Stay same"],
    answer: "Decrease 3 dB"
  },
  {
    id: 307,
    question: "Q57 Main advantage of using dB in RF calculations:",
    options: [
      "Direct power addition",
      "Easy gain/loss addition",
      "Measuring distance",
      "Counting bits"
    ],
    answer: "Easy gain/loss addition"
  },
  {
    id: 308,
    question: "Q58 Correct relation between dBm and dBW:",
    options: [
      "dBW = dBm + 30",
      "dBm = dBW + 30",
      "dBm = dBW − 30",
      "No relation"
    ],
    answer: "dBm = dBW + 30"
  },
  {
    id: 309,
    question: "Q59 2 W is closest to:",
    options: ["30 dBm", "33 dBm", "36 dBm", "40 dBm"],
    answer: "33 dBm"
  },
  {
    id: 310,
    question: "Q60 4 W is closest to:",
    options: ["33 dBm", "36 dBm", "39 dBm", "40 dBm"],
    answer: "36 dBm"
  },
  {
    id: 311,
    question: "Q61 To avoid reading adjacent shelves, prioritize:",
    options: [
      "HF non-directional antenna",
      "UHF directional antenna",
      "LF thick coil",
      "Microwave absorption"
    ],
    answer: "UHF directional antenna"
  },
  {
    id: 312,
    question: "Q62 Best scenario where HF outperforms UHF:",
    options: ["Near water/tissue", "Dry air", "Vacuum", "Paper"],
    answer: "Near water/tissue"
  },
  {
    id: 313,
    question: "Q63 Fast bulk reading of metal tools suggests:",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "UHF"
  },
  {
    id: 314,
    question: "Q64 In backscatter RFID, RF energy is provided by:",
    options: ["The tag", "The reader", "The server", "The antenna cable"],
    answer: "The reader"
  },
  {
    id: 315,
    question: "Q65 HF is preferred near tissue mainly because:",
    options: [
      "HF is optical",
      "UHF is absorbed more by water",
      "HF uses batteries",
      "HF is unregulated"
    ],
    answer: "UHF is absorbed more by water"
  },
  {
    id: 316,
    question: "Q66 Lowest reader cost near human tissue is usually:",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "HF"
  },
  {
    id: 317,
    question: "+9 dB gain and −9 dB loss results in:",
    options: ["+18 dB", "0 dB", "−18 dB", "+9 dB"],
    answer: "0 dB"
  },
  {
    id: 318,
    question: "Reducing Tx from 30 dBm to 27 dBm reduces power to about:",
    options: ["1/2", "1/4", "1/10", "1/8"],
    answer: "1/2"
  },
  {
    id: 319,
    question: "“dB is logarithmic” mainly means:",
    options: [
      "Powers add directly",
      "Power ratios become additive",
      "Frequencies add",
      "Distances add"
    ],
    answer: "Power ratios become additive"
  },
  {
    id: 320,
    question: "Maximum legal power form highlighted for Europe (ETSI):",
    options: ["4 W EIRP", "2 W ERP", "10 W EIRP", "Unlimited"],
    answer: "2 W ERP"
  }
];

const questionsPart14 = [
  {
    id: 321,
    question: "RFID stands for:",
    options: [
      "Radio Fast Identification",
      "Radio Frequency Identification",
      "Random Frequency Identification",
      "Radio Fiber Identification"
    ],
    answer: "Radio Frequency Identification"
  },
  {
    id: 322,
    question: "RFID is considered a:",
    options: [
      "Wired technology",
      "Optical system",
      "Wireless identification technology",
      "Magnetic storage system"
    ],
    answer: "Wireless identification technology"
  },
  {
    id: 323,
    question: "The unique ID is stored in the:",
    options: ["Reader", "Host computer", "Antenna", "Tag"],
    answer: "Tag"
  },
  {
    id: 324,
    question: "Communication from reader to tag is called:",
    options: ["Uplink", "Downlink", "Backscatter", "Modulation"],
    answer: "Downlink"
  },
  {
    id: 325,
    question: "Near-field RFID relies on:",
    options: [
      "Electromagnetic wave propagation",
      "Magnetic fields",
      "Optical signals",
      "Electric cables"
    ],
    answer: "Magnetic fields"
  },
  {
    id: 326,
    question: "Inductive coupling is used in:",
    options: [
      "Far-field RFID",
      "Barcode",
      "Near-field RFID",
      "Microwave systems"
    ],
    answer: "Near-field RFID"
  },
  {
    id: 327,
    question: "Load modulation means the tag:",
    options: [
      "Sends its own RF signal",
      "Changes its impedance",
      "Uses a battery",
      "Changes frequency"
    ],
    answer: "Changes its impedance"
  },
  {
    id: 328,
    question: "Near-field RFID typically operates at:",
    options: ["UHF", "Microwave", "LF and HF", "Optical range"],
    answer: "LF and HF"
  },
  {
    id: 329,
    question: "The range of near-field RFID is usually:",
    options: [
      "Up to 20 m",
      "10–15 m",
      "Few cm to ~1 m",
      "More than 50 m"
    ],
    answer: "Few cm to ~1 m"
  },
  {
    id: 330,
    question: "Far-field RFID uses:",
    options: [
      "Magnetic fields",
      "Inductive coupling",
      "Electromagnetic waves",
      "Wired signals"
    ],
    answer: "Electromagnetic waves"
  },
  {
    id: 331,
    question: "Backscatter modulation means the tag:",
    options: [
      "Generates a new signal",
      "Reflects and modulates reader signal",
      "Stops transmitting",
      "Uses infrared"
    ],
    answer: "Reflects and modulates reader signal"
  },
  {
    id: 332,
    question: "Far-field RFID usually operates at:",
    options: ["LF", "HF", "UHF and Microwave", "Optical frequencies"],
    answer: "UHF and Microwave"
  },
  {
    id: 333,
    question: "The typical range of far-field RFID is:",
    options: [
      "Less than 1 m",
      "1–2 m",
      "10–15 m",
      "Over 100 m"
    ],
    answer: "10–15 m"
  },
  {
    id: 334,
    question: "Far-field RFID is suitable for moving objects because of:",
    options: ["Short range", "Magnetic fields", "Faster data rates", "Lower cost"],
    answer: "Faster data rates"
  },
  {
    id: 335,
    question: "Inventory tracking using RFID allows:",
    options: [
      "Manual counting",
      "Line-of-sight scanning",
      "Simultaneous reading of tags",
      "Wired communication"
    ],
    answer: "Simultaneous reading of tags"
  },
  {
    id: 336,
    question: "RFID improves traceability by:",
    options: [
      "Encrypting data",
      "Recording data at each supply chain stage",
      "Increasing tag size",
      "Reducing memory"
    ],
    answer: "Recording data at each supply chain stage"
  },
  {
    id: 337,
    question: "RFID traceability is critical in food and pharma due to:",
    options: ["Cost", "Marketing", "Safety and regulations", "Speed"],
    answer: "Safety and regulations"
  },
  {
    id: 338,
    question: "Logistics RFID systems help reduce:",
    options: ["Profits", "Theft and loss", "Reader power", "Data size"],
    answer: "Theft and loss"
  },
  {
    id: 339,
    question: "Reverse logistics deals with:",
    options: [
      "Manufacturing",
      "Shipping to customers",
      "Returned goods",
      "Inventory creation"
    ],
    answer: "Returned goods"
  },
  {
    id: 340,
    question: "Warehouse automation with RFID helps:",
    options: [
      "Increase manual work",
      "Slow operations",
      "Integrate with robots",
      "Remove storage"
    ],
    answer: "Integrate with robots"
  },
  {
    id: 341,
    question: "Collision in RFID occurs when:",
    options: [
      "One tag responds",
      "Multiple signals overlap",
      "Battery dies",
      "Reader stops"
    ],
    answer: "Multiple signals overlap"
  },
  {
    id: 342,
    question: "Reader collision occurs when:",
    options: [
      "Tags respond together",
      "Readers’ coverage areas overlap",
      "Tag memory is full",
      "Frequency changes"
    ],
    answer: "Readers’ coverage areas overlap"
  },
  {
    id: 343,
    question: "Tag collision occurs when:",
    options: [
      "Multiple tags respond simultaneously",
      "One tag responds",
      "Reader is far",
      "Antenna is broken"
    ],
    answer: "Multiple tags respond simultaneously"
  },
  {
    id: 344,
    question: "ALOHA algorithm is:",
    options: ["Deterministic", "Probabilistic", "Security protocol", "Encryption method"],
    answer: "Probabilistic"
  },
  {
    id: 345,
    question: "ALOHA becomes inefficient when:",
    options: ["Few tags exist", "Many tags exist", "Reader is near", "Frequency is low"],
    answer: "Many tags exist"
  },
  {
    id: 346,
    question: "Tree Walking algorithm is:",
    options: ["Random", "Deterministic", "Optical", "Passive"],
    answer: "Deterministic"
  },
  {
    id: 347,
    question: "Tree Walking works by:",
    options: [
      "Random delay",
      "Binary prefix splitting",
      "Frequency hopping",
      "Encryption"
    ],
    answer: "Binary prefix splitting"
  },
  {
    id: 348,
    question: "Deterministic algorithms are mainly used in:",
    options: ["HF systems", "LF systems", "UHF RFID", "NFC cards"],
    answer: "UHF RFID"
  },
  {
    id: 349,
    question: "RFID security risk due to wireless communication is:",
    options: ["Encryption", "Eavesdropping", "Authentication", "Kill command"],
    answer: "Eavesdropping"
  },
  {
    id: 350,
    question: "Skimming means:",
    options: [
      "Blocking RF signal",
      "Unauthorized reading of a tag",
      "Killing the tag",
      "Encrypting data"
    ],
    answer: "Unauthorized reading of a tag"
  }
];



const questionsPart15 = [
  {
    id: 351,
    question: "Cloning refers to:",
    options: [
      "Encrypting data",
      "Copying tag data",
      "Destroying tag",
      "Shielding tag"
    ],
    answer: "Copying tag data"
  },
  {
    id: 352,
    question: "Replay attacks involve:",
    options: [
      "Frequency hopping",
      "Recording and replaying valid signals",
      "Killing the tag",
      "Blocking reader"
    ],
    answer: "Recording and replaying valid signals"
  },
  {
    id: 353,
    question: "Encryption protects RFID data by:",
    options: [
      "Blocking communication",
      "Making data unreadable without key",
      "Increasing power",
      "Reducing range"
    ],
    answer: "Making data unreadable without key"
  },
  {
    id: 354,
    question: "Mutual authentication means:",
    options: [
      "Only tag is verified",
      "Only reader is verified",
      "Both verify each other",
      "Data is public"
    ],
    answer: "Both verify each other"
  },
  {
    id: 355,
    question: "Faraday cages are used to:",
    options: [
      "Encrypt data",
      "Block electromagnetic fields",
      "Power tags",
      "Increase range"
    ],
    answer: "Block electromagnetic fields"
  },
  {
    id: 356,
    question: "Kill command is used to:",
    options: [
      "Track customers",
      "Disable tag permanently",
      "Recharge tag",
      "Increase security temporarily"
    ],
    answer: "Disable tag permanently"
  },
  {
    id: 357,
    question: "RFID sensor tags can measure:",
    options: [
      "IP address",
      "Environmental conditions",
      "Network speed",
      "Encryption keys"
    ],
    answer: "Environmental conditions"
  },
  {
    id: 358,
    question: "Active sensor tags use battery to:",
    options: [
      "Communicate only",
      "Continuously log sensor data",
      "Encrypt data",
      "Reduce cost"
    ],
    answer: "Continuously log sensor data"
  },
  {
    id: 359,
    question: "BAP tags use battery mainly to:",
    options: [
      "Transmit signal",
      "Power the sensor",
      "Increase range",
      "Replace reader"
    ],
    answer: "Power the sensor"
  },
  {
    id: 360,
    question: "Cold chain logistics focuses on:",
    options: [
      "Price tracking",
      "Temperature-sensitive products",
      "Customer behavior",
      "Inventory cost"
    ],
    answer: "Temperature-sensitive products"
  },
  {
    id: 361,
    question: "A product is marked spoiled when:",
    options: [
      "Reader is far",
      "Temperature exceeds threshold",
      "Tag battery dies",
      "ID unreadable"
    ],
    answer: "Temperature exceeds threshold"
  },
  {
    id: 362,
    question: "RFID is called the “last meter” of IoT because it:",
    options: [
      "Replaces the internet",
      "Connects physical objects digitally",
      "Encrypts data",
      "Controls servers"
    ],
    answer: "Connects physical objects digitally"
  },
  {
    id: 363,
    question: "Smart shelves provide:",
    options: [
      "Manual inventory",
      "Periodic updates",
      "Real-time inventory visibility",
      "Barcode scanning"
    ],
    answer: "Real-time inventory visibility"
  },
  {
    id: 364,
    question: "Smart mirrors are mainly used in:",
    options: [
      "Factories",
      "Warehouses",
      "Retail fitting rooms",
      "Hospitals"
    ],
    answer: "Retail fitting rooms"
  },
  {
    id: 365,
    question: "Metal interference occurs because metal:",
    options: [
      "Absorbs RF",
      "Reflects RF",
      "Encrypts RF",
      "Amplifies RF"
    ],
    answer: "Reflects RF"
  },
  {
    id: 366,
    question: "Mount-on-metal tags are used to:",
    options: [
      "Increase memory",
      "Separate antenna from metal",
      "Replace readers",
      "Encrypt data"
    ],
    answer: "Separate antenna from metal"
  },
  {
    id: 367,
    question: "Liquid absorption mainly affects:",
    options: ["LF", "HF", "UHF", "Optical"],
    answer: "UHF"
  },
  {
    id: 368,
    question: "One solution to liquid absorption is:",
    options: [
      "Using LF/HF frequencies",
      "Removing antenna",
      "Increasing data rate",
      "Using encryption"
    ],
    answer: "Using LF/HF frequencies"
  },
  {
    id: 369,
    question: "Tag orientation problems occur mainly with:",
    options: [
      "Circular antennas",
      "Linear antennas",
      "Active tags",
      "Sensors"
    ],
    answer: "Linear antennas"
  },
  {
    id: 370,
    question: "Circular polarized antennas are used to:",
    options: [
      "Increase cost",
      "Read tags in any orientation",
      "Encrypt data",
      "Reduce security"
    ],
    answer: "Read tags in any orientation"
  },
  {
    id: 371,
    question: "RFID requires line of sight to read tags.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 372,
    question: "Near-field RFID uses magnetic fields.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 373,
    question: "Far-field RFID uses load modulation.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 374,
    question: "Backscatter modulation is used in far-field RFID.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 375,
    question: "ALOHA is a deterministic algorithm.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 376,
    question: "Tree Walking algorithm uses binary splitting.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 377,
    question: "RFID collisions occur due to shared wireless medium.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 378,
    question: "Skimming requires user permission.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 379,
    question: "Cloning copies tag data to another tag.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 380,
    question: "Replay attacks involve encryption.",
    options: ["True", "False"],
    answer: "False"
  }
];


const questionsPart16 = [
  {
    id: 381,
    question: "Encryption makes RFID data unreadable without a key.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 382,
    question: "Mutual authentication verifies both reader and tag.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 383,
    question: "Kill command temporarily disables a tag.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 384,
    question: "RFID sensor tags can measure temperature.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 385,
    question: "BAP tags communicate actively.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 386,
    question: "Cold chain logistics is used for books.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 387,
    question: "Smart shelves eliminate manual scanning.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 388,
    question: "Metal causes blind spots in RFID.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 389,
    question: "Liquid improves UHF RFID performance.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 390,
    question: "Circular antennas help with tag orientation.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 391,
    question: "An RFID system is deployed in a warehouse with many metallic shelves. Reads are inconsistent even though the reader power is high. What is the MOST effective solution?",
    options: [
      "Increase reader transmission power",
      "Use HF instead of UHF",
      "Use mount-on-metal tags",
      "Apply encryption"
    ],
    answer: "Use mount-on-metal tags"
  },
  {
    id: 392,
    question: "Why does near-field RFID remain reliable in environments with high RF interference compared to far-field RFID?",
    options: [
      "It uses higher frequencies",
      "It relies on electromagnetic wave propagation",
      "It depends on magnetic field coupling",
      "It uses encryption"
    ],
    answer: "It depends on magnetic field coupling"
  },
  {
    id: 393,
    question: "A system designer chooses HF RFID instead of UHF for tagging liquid-filled containers. What is the PRIMARY reason?",
    options: [
      "Higher data rate",
      "Better penetration through liquids",
      "Longer range",
      "Lower cost"
    ],
    answer: "Better penetration through liquids"
  },
  {
    id: 394,
    question: "In a dense RFID environment, Tree Walking outperforms ALOHA mainly because Tree Walking:",
    options: [
      "Uses encryption",
      "Eliminates randomness",
      "Increases reader power",
      "Uses higher frequencies"
    ],
    answer: "Eliminates randomness"
  },
  {
    id: 395,
    question: "Which scenario would MOST likely cause tag collision but NOT reader collision?",
    options: [
      "Two readers with overlapping coverage",
      "Multiple tags responding to one reader",
      "A single tag responding slowly",
      "A reader operating at low power"
    ],
    answer: "Multiple tags responding to one reader"
  },
  {
    id: 396,
    question: "Why is far-field RFID more vulnerable to eavesdropping than near-field RFID?",
    options: [
      "Far-field tags have more memory",
      "Near-field uses encryption by default",
      "Far-field signals propagate over longer distances",
      "Near-field tags are active"
    ],
    answer: "Far-field signals propagate over longer distances"
  },
  {
    id: 397,
    question: "A passive RFID tag is able to communicate without a battery because it:",
    options: [
      "Generates power internally",
      "Uses inductive storage",
      "Harvests energy from the reader signal",
      "Stores power permanently"
    ],
    answer: "Harvests energy from the reader signal"
  },
  {
    id: 398,
    question: "Which combination correctly matches RFID type with modulation method?",
    options: [
      "Near-field → Backscatter",
      "Far-field → Load modulation",
      "Near-field → Load modulation",
      "HF RFID → Backscatter"
    ],
    answer: "Near-field → Load modulation"
  },
  {
    id: 399,
    question: "In cold chain logistics, a vaccine shipment is rejected even though its current temperature is within limits. Why?",
    options: [
      "The reader failed",
      "The tag battery is low",
      "The temperature exceeded the threshold earlier",
      "The ID was unreadable"
    ],
    answer: "The temperature exceeded the threshold earlier"
  },
  {
    id: 400,
    question: "Why is RFID considered the “last meter” of IoT rather than a full IoT technology?",
    options: [
      "It connects directly to the internet",
      "It replaces cloud systems",
      "It gives digital identity to non-digital objects",
      "It performs data analytics"
    ],
    answer: "It gives digital identity to non-digital objects"
  }
];




const questionsPart17 = [
  {
    id: 401,
    question: "Which design choice BEST solves orientation issues without requiring precise tag alignment?",
    options: [
      "Linear polarized antennas",
      "Circular polarized antennas",
      "Higher reader power",
      "Encryption"
    ],
    answer: "Circular polarized antennas"
  },
  {
    id: 402,
    question: "A replay attack succeeds mainly because the system:",
    options: [
      "Uses low frequency",
      "Lacks freshness or challenge–response",
      "Uses backscatter modulation",
      "Uses passive tags"
    ],
    answer: "Lacks freshness or challenge–response"
  },
  {
    id: 403,
    question: "Why does increasing reader power NOT fully solve collision problems?",
    options: [
      "Power increases encryption overhead",
      "Collision is a protocol-level issue",
      "Tags have limited memory",
      "Antennas become directional"
    ],
    answer: "Collision is a protocol-level issue"
  },
  {
    id: 404,
    question: "Which factor MOST limits near-field RFID range?",
    options: [
      "Reader processing speed",
      "Magnetic field decay with distance",
      "Tag memory size",
      "Antenna polarization"
    ],
    answer: "Magnetic field decay with distance"
  },
  {
    id: 405,
    question: "Why are deterministic anti-collision algorithms preferred in supply chains?",
    options: [
      "Supply chains use HF systems",
      "They are simpler to implement",
      "They scale efficiently with many tags",
      "They require less memory"
    ],
    answer: "They scale efficiently with many tags"
  },
  {
    id: 406,
    question: "Which security measure PREVENTS reading the tag at all, rather than protecting the data?",
    options: [
      "Encryption",
      "Mutual authentication",
      "Kill command",
      "Physical shielding"
    ],
    answer: "Physical shielding"
  },
  {
    id: 407,
    question: "Why is UHF unsuitable for some pharmaceutical products despite its long range?",
    options: [
      "High cost",
      "Low data rate",
      "Susceptibility to liquid absorption",
      "Incompatibility with encryption"
    ],
    answer: "Susceptibility to liquid absorption"
  },
  {
    id: 408,
    question: "Smart shelves eliminate manual scanning mainly because they:",
    options: [
      "Use optical sensors",
      "Continuously read tags automatically",
      "Use active tags only",
      "Store inventory locally"
    ],
    answer: "Continuously read tags automatically"
  },
  {
    id: 409,
    question: "Which problem is solved by mutual authentication but NOT by encryption alone?",
    options: [
      "Eavesdropping",
      "Data confidentiality",
      "Tag impersonation",
      "Data corruption"
    ],
    answer: "Tag impersonation"
  },
  {
    id: 410,
    question: "Why does far-field RFID require higher reader power than near-field RFID?",
    options: [
      "Tags have batteries",
      "EM waves spread over larger distances",
      "Magnetic fields are stronger",
      "Encryption overhead is higher"
    ],
    answer: "EM waves spread over larger distances"
  },
  {
    id: 411,
    question: "A system is upgraded from 900 MHz to 28 GHz. The MOST expected change is:",
    options: [
      "Wavelength increases and diffraction improves",
      "Wavelength decreases and blockage sensitivity increases",
      "Wavelength stays constant but power increases",
      "Refraction becomes impossible"
    ],
    answer: "Wavelength decreases and blockage sensitivity increases"
  },
  {
    id: 412,
    question: "Two wireless links have the same transmit power and distance. Link X uses 2.4 GHz and Link Y uses 60 GHz. The main reason Y is harder to maintain is:",
    options: [
      "Lower noise floor",
      "Greater scattering/absorption and blockage sensitivity",
      "Better diffraction around obstacles",
      "Lower bandwidth availability"
    ],
    answer: "Greater scattering/absorption and blockage sensitivity"
  },
  {
    id: 413,
    question: "If you need communication beyond the horizon using radio waves (without satellite), the MOST relevant phenomenon is:",
    options: [
      "Reflection from buildings",
      "Diffraction only",
      "Refraction in the ionosphere",
      "Polarization mismatch"
    ],
    answer: "Refraction in the ionosphere"
  },
  {
    id: 414,
    question: "A receiver gets two strong copies of the same signal: one direct and one reflected, arriving slightly later. The MOST likely effect is:",
    options: [
      "Guaranteed improvement always",
      "Multipath interference that may cause fading",
      "Complete elimination of noise",
      "Only Doppler shift"
    ],
    answer: "Multipath interference that may cause fading"
  },
  {
    id: 415,
    question: "Why is LOS generally better for high data rate links?",
    options: [
      "It increases scattering",
      "It reduces multipath distortions and deep fades",
      "It forces refraction",
      "It increases absorption"
    ],
    answer: "It reduces multipath distortions and deep fades"
  },
  {
    id: 416,
    question: "A user behind a large building still receives some signal despite no direct path. The MAIN phenomenon enabling this is:",
    options: [
      "Diffraction",
      "Only polarization",
      "Only encryption",
      "AM modulation"
    ],
    answer: "Diffraction"
  },
  {
    id: 417,
    question: "A radar system relies on which phenomenon for detection?",
    options: [
      "Absorption",
      "Reflection",
      "Refraction",
      "Doppler cancellation"
    ],
    answer: "Reflection"
  },
  {
    id: 418,
    question: "A link at mmWave collapses during heavy rain more than a sub-6 GHz link. The MOST direct reason is:",
    options: [
      "Higher reflection from rain drops",
      "Higher absorption/scattering at higher frequencies",
      "Lower data rate",
      "Stronger diffraction"
    ],
    answer: "Higher absorption/scattering at higher frequencies"
  },
  {
    id: 419,
    question: "Which scenario produces the strongest Doppler effect?",
    options: [
      "Stationary base station & stationary user",
      "Fast-moving user at high carrier frequency",
      "Slow-moving user at low carrier frequency",
      "Wired Ethernet"
    ],
    answer: "Fast-moving user at high carrier frequency"
  },
  {
    id: 420,
    question: "A link suddenly loses significant signal power after rotating the receiving antenna by 90°. The best explanation is:",
    options: [
      "Multiplexing failure",
      "Polarization mismatch",
      "Refraction in the ionosphere",
      "QAM constellation rotation"
    ],
    answer: "Polarization mismatch"
  }
];


const questionsPart18 = [
  {
    id: 421,
    question: "Why is circular polarization often preferred in satellite links?",
    options: [
      "It removes rain fade",
      "It reduces sensitivity to orientation mismatch",
      "It increases bandwidth automatically",
      "It eliminates multipath"
    ],
    answer: "It reduces sensitivity to orientation mismatch"
  },
  {
    id: 422,
    question: "AM is more affected by noise mainly because:",
    options: [
      "Noise mostly changes frequency not amplitude",
      "AM encodes info in amplitude and noise disturbs amplitude",
      "AM uses phase modulation",
      "AM is digital"
    ],
    answer: "AM encodes info in amplitude and noise disturbs amplitude"
  },
  {
    id: 423,
    question: "FM often provides better audio quality than AM because:",
    options: [
      "FM uses smaller bandwidth always",
      "FM encodes info in frequency which is less sensitive to amplitude noise",
      "FM removes multipath completely",
      "FM requires no synchronization"
    ],
    answer: "FM encodes info in frequency which is less sensitive to amplitude noise"
  },
  {
    id: 424,
    question: "Why is QPSK more spectrally efficient than BPSK?",
    options: [
      "It transmits at twice the frequency",
      "It carries 2 bits per symbol instead of 1",
      "It uses amplitude changes only",
      "It requires more bandwidth"
    ],
    answer: "It carries 2 bits per symbol instead of 1"
  },
  {
    id: 425,
    question: "If channel conditions worsen (lower SNR), which modulation fails first?",
    options: ["BPSK", "QPSK", "64-QAM", "All equal"],
    answer: "64-QAM"
  },
  {
    id: 426,
    question: "High-order QAM requires higher SNR because:",
    options: [
      "It uses fewer constellation points",
      "Constellation points are closer together",
      "It uses FM internally",
      "It avoids phase shifts"
    ],
    answer: "Constellation points are closer together"
  },
  {
    id: 427,
    question: "Switching from 16-QAM to QPSK when SNR drops is done because:",
    options: [
      "QPSK needs higher SNR",
      "QPSK is more robust",
      "QPSK uses more bandwidth always",
      "16-QAM is analog"
    ],
    answer: "QPSK is more robust"
  },
  {
    id: 428,
    question: "Higher-order modulation generally:",
    options: [
      "Increases robustness",
      "Increases bits per symbol but reduces noise margin",
      "Never changes amplitude",
      "Always improves reliability"
    ],
    answer: "Increases bits per symbol but reduces noise margin"
  },
  {
    id: 429,
    question: "Digital modulation outperforms analog mainly because digital systems can:",
    options: [
      "Eliminate noise physically",
      "Apply error detection/correction",
      "Avoid antennas",
      "Operate only at low frequency"
    ],
    answer: "Apply error detection/correction"
  },
  {
    id: 430,
    question: "To maximize reliability in a harsh channel, the BEST move is:",
    options: [
      "Use higher-order QAM",
      "Use simpler modulation (BPSK/QPSK)",
      "Remove synchronization",
      "Increase bits per symbol"
    ],
    answer: "Use simpler modulation (BPSK/QPSK)"
  },
  {
    id: 431,
    question: "In NLOS with strong multipath, reducing errors without more power is best achieved by:",
    options: [
      "Upgrading to 64-QAM",
      "Downgrading to QPSK",
      "Switching FM to AM",
      "Increasing carrier frequency"
    ],
    answer: "Downgrading to QPSK"
  },
  {
    id: 432,
    question: "AM suffers more than FM in noise because:",
    options: [
      "FM uses frequency",
      "AM carries info in amplitude",
      "FM removes noise",
      "AM is digital"
    ],
    answer: "AM carries info in amplitude"
  },
  {
    id: 433,
    question: "Fast-moving users at high frequency mainly suffer from:",
    options: [
      "Diffraction",
      "Doppler shift",
      "Refraction",
      "Polarization only"
    ],
    answer: "Doppler shift"
  },
  {
    id: 434,
    question: "Rotating a phone causing sudden signal drop is mainly due to:",
    options: [
      "Diffraction loss",
      "Polarization mismatch",
      "Ionospheric change",
      "AM failure"
    ],
    answer: "Polarization mismatch"
  },
  {
    id: 435,
    question: "Higher frequency always means better diffraction.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 436,
    question: "Multipath always improves reception.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 437,
    question: "LOS reduces multipath-related fading compared to NLOS.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 438,
    question: "Diffraction helps signals reach shadowed regions.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 439,
    question: "Rain fade mainly affects higher frequencies.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 440,
    question: "Higher-order QAM is more robust to noise than QPSK.",
    options: ["True", "False"],
    answer: "False"
  }
];



const questionsPart19 = [
  {
    id: 441,
    question: "The core purpose of multiplexing is to:",
    options: [
      "Increase transmission power",
      "Allow multiple users to share the same medium efficiently",
      "Eliminate noise",
      "Increase wavelength"
    ],
    answer: "Allow multiple users to share the same medium efficiently"
  },
  {
    id: 442,
    question: "Multiplexing separates users mainly in which domains?",
    options: [
      "Voltage only",
      "Frequency, time, code, space, polarization",
      "Temperature",
      "Encryption"
    ],
    answer: "Frequency, time, code, space, polarization"
  },
  {
    id: 443,
    question: "Multiplexing allows multiple users to use the same medium without interference if separation is done correctly.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 444,
    question: "All multiplexing techniques rely on time separation.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 445,
    question: "Why does FDM require guard bands?",
    options: [
      "To increase data rate",
      "To prevent overlap between adjacent frequency bands",
      "To improve synchronization",
      "To reduce noise figure"
    ],
    answer: "To prevent overlap between adjacent frequency bands"
  },
  {
    id: 446,
    question: "FDM becomes inefficient when:",
    options: [
      "Users are continuously active",
      "Users are inactive but bands remain allocated",
      "Signals are digital",
      "Time slots overlap"
    ],
    answer: "Users are inactive but bands remain allocated"
  },
  {
    id: 447,
    question: "In FDM, all users transmit at the same time but on different frequencies.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 448,
    question: "Guard bands increase spectral efficiency.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 449,
    question: "The main limitation of TDM when users increase is:",
    options: [
      "Noise",
      "Increased delay",
      "Frequency overlap",
      "Polarization drift"
    ],
    answer: "Increased delay"
  },
  {
    id: 450,
    question: "TDM is more suitable for:",
    options: [
      "Analog radio",
      "Digital telephony systems",
      "Satellite polarization",
      "Optical WDM"
    ],
    answer: "Digital telephony systems"
  },
  {
    id: 451,
    question: "In TDM, each user gets the full bandwidth for a short time.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 452,
    question: "TDM does not require synchronization.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 453,
    question: "CDMA distinguishes users mainly by:",
    options: [
      "Time slots",
      "Frequency bands",
      "Unique codes",
      "Polarization"
    ],
    answer: "Unique codes"
  },
  {
    id: 454,
    question: "Why doesn’t CDMA need guard bands?",
    options: [
      "Because it uses time separation",
      "Because separation is done by codes",
      "Because power is zero",
      "Because it is analog"
    ],
    answer: "Because separation is done by codes"
  },
  {
    id: 455,
    question: "All CDMA users share the same frequency spectrum simultaneously.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 456,
    question: "CDMA implementation is simpler than FDM.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 457,
    question: "OFDM achieves high spectral efficiency mainly because:",
    options: [
      "It uses guard bands",
      "Subcarriers are orthogonal and closely spaced",
      "It increases power",
      "It reduces bandwidth"
    ],
    answer: "Subcarriers are orthogonal and closely spaced"
  },
  {
    id: 458,
    question: "Which factor most degrades OFDM performance in high-speed scenarios?",
    options: [
      "Noise figure",
      "Doppler effect",
      "Polarization",
      "Refraction"
    ],
    answer: "Doppler effect"
  },
  {
    id: 459,
    question: "OFDM is resilient to multipath interference.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 460,
    question: "OFDM receivers are simple to design.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 461,
    question: "MIMO increases data rate without extra bandwidth by:",
    options: [
      "Increasing frequency",
      "Sending independent spatial streams",
      "Using guard bands",
      "Reducing modulation order"
    ],
    answer: "Sending independent spatial streams"
  },
  {
    id: 462,
    question: "The performance of spatial multiplexing mainly depends on:",
    options: [
      "Cable length",
      "Channel conditions",
      "Encryption",
      "Temperature"
    ],
    answer: "Channel conditions"
  },
  {
    id: 463,
    question: "Spatial multiplexing uses multiple antennas at both transmitter and receiver.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 464,
    question: "Spatial multiplexing always works regardless of channel conditions.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 465,
    question: "PDM increases capacity by separating signals using:",
    options: [
      "Frequency",
      "Time",
      "Polarization",
      "Codes"
    ],
    answer: "Polarization"
  },
  {
    id: 466,
    question: "The main weakness of PDM is:",
    options: [
      "High noise",
      "Polarization drift",
      "Guard bands",
      "Low data rate"
    ],
    answer: "Polarization drift"
  },
  {
    id: 467,
    question: "PDM transmits two signals on the same frequency and time.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 468,
    question: "PDM eliminates the need for antenna alignment.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 469,
    question: "According to Friis, received power decreases mainly due to:",
    options: [
      "Encryption",
      "Power spreading over distance",
      "Noise figure",
      "Time delay"
    ],
    answer: "Power spreading over distance"
  },
  {
    id: 470,
    question: "If distance is doubled, received power approximately:",
    options: [
      "Doubles",
      "Halves",
      "Reduces to one-quarter",
      "Remains unchanged"
    ],
    answer: "Reduces to one-quarter"
  },
  {
    id: 471,
    question: "Friis equation assumes ideal free-space LOS conditions.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 472,
    question: "Friis equation includes cable and connector losses.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 473,
    question: "FSPL increases when:",
    options: [
      "Frequency decreases",
      "Distance decreases",
      "Frequency or distance increases",
      "Noise figure decreases"
    ],
    answer: "Frequency or distance increases"
  },
  {
    id: 474,
    question: "FSPL model assumes:",
    options: [
      "System losses",
      "Environmental losses",
      "No losses except spreading",
      "Polarization mismatch"
    ],
    answer: "No losses except spreading"
  },
  {
    id: 475,
    question: "Doubling frequency increases FSPL by about 6 dB.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 476,
    question: "FSPL accounts for fading and rain effects.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 477,
    question: "Why is link budget more practical than Friis?",
    options: [
      "It ignores losses",
      "It includes real-world losses and gains",
      "It works only in free space",
      "It excludes antennas"
    ],
    answer: "It includes real-world losses and gains"
  },
  {
    id: 478,
    question: "Which loss is NOT included in Friis but included in link budget?",
    options: [
      "Free-space loss",
      "System losses (cables/connectors)",
      "Distance",
      "Frequency"
    ],
    answer: "System losses (cables/connectors)"
  },
  {
    id: 479,
    question: "Link budget is mainly used for system design and troubleshooting.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 480,
    question: "Link budget ignores antenna gains.",
    options: ["True", "False"],
    answer: "False"
  }
];

const questionsPart20 = [
  {
    id: 481,
    question: "Why is mobile communication considered a subset of wireless communication?",
    options: [
      "Because it uses cables for backbone",
      "Because it enables communication while users are moving",
      "Because it supports voice only",
      "Because it works only indoors"
    ],
    answer: "Because it enables communication while users are moving"
  },
  {
    id: 482,
    question: "The key feature that differentiates mobile communication from fixed wireless is:",
    options: [
      "Higher frequency",
      "User mobility",
      "Encryption",
      "Packet switching"
    ],
    answer: "User mobility"
  },
  {
    id: 483,
    question: "Mobile communication allows users to access services while on the move.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 484,
    question: "Mobile communication is independent of wireless communication.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 485,
    question: "The main driving force behind the evolution from 1G to later generations was:",
    options: [
      "Lower device size only",
      "Demand for faster and more reliable connectivity",
      "Removal of antennas",
      "Elimination of voice services"
    ],
    answer: "Demand for faster and more reliable connectivity"
  },
  {
    id: 486,
    question: "Which trend best describes mobile evolution across generations?",
    options: [
      "Analog → Digital → Data-centric",
      "Digital → Analog → Voice",
      "Wired → Optical → Wireless",
      "Satellite → Cable → Fiber"
    ],
    answer: "Analog → Digital → Data-centric"
  },
  {
    id: 487,
    question: "Each new mobile generation mainly aimed to improve speed, reliability, and supported services.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 488,
    question: "Mobile evolution focused only on hardware, not services.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 489,
    question: "Why was 1G communication considered insecure?",
    options: [
      "Because it used digital encryption",
      "Because analog signals were easy to intercept",
      "Because it used packet switching",
      "Because it operated at low frequencies"
    ],
    answer: "Because analog signals were easy to intercept"
  },
  {
    id: 490,
    question: "Which limitation is directly caused by circuit-switched operation in 1G?",
    options: [
      "High latency for data",
      "Inefficient resource utilization",
      "Encryption overhead",
      "Packet loss"
    ],
    answer: "Inefficient resource utilization"
  },
  {
    id: 491,
    question: "1G systems supported voice, SMS, and data services.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 492,
    question: "1G relied on analog FM for voice transmission.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 493,
    question: "Why did limited frequency reuse reduce the capacity of 1G systems?",
    options: [
      "Because frequencies were encrypted",
      "Because fewer users could share the spectrum efficiently",
      "Because digital compression was used",
      "Because antennas were directional"
    ],
    answer: "Because fewer users could share the spectrum efficiently"
  },
  {
    id: 494,
    question: "Which factor MOST contributed to poor call quality in 1G?",
    options: [
      "Packet switching",
      "Noise and interference",
      "High bandwidth",
      "Strong encryption"
    ],
    answer: "Noise and interference"
  },
  {
    id: 495,
    question: "FDMA was used in 1G to allocate channels to users.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 496,
    question: "Short battery life in 1G was mainly due to advanced digital processing.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 497,
    question: "The most fundamental improvement of 2G over 1G was:",
    options: [
      "Higher transmit power",
      "Transition from analog to digital communication",
      "Introduction of satellites",
      "Removal of modulation"
    ],
    answer: "Transition from analog to digital communication"
  },
  {
    id: 498,
    question: "Why did encryption become feasible in 2G systems?",
    options: [
      "Because of analog signaling",
      "Because digital transmission enables encryption algorithms",
      "Because frequency increased",
      "Because circuits were removed"
    ],
    answer: "Because digital transmission enables encryption algorithms"
  },
  {
    id: 499,
    question: "2G introduced SMS and MMS services.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 500,
    question: "2G systems eliminated the need for multiple access techniques.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 501,
    question: "Why did digital technology increase user capacity in 2G?",
    options: [
      "It eliminated noise",
      "It enabled better spectrum reuse and allocation",
      "It removed antennas",
      "It increased cell size"
    ],
    answer: "It enabled better spectrum reuse and allocation"
  },
  {
    id: 502,
    question: "Which feature enabled international roaming in 2G systems?",
    options: [
      "Analog signaling",
      "Unified international standards",
      "High battery power",
      "Circuit switching only"
    ],
    answer: "Unified international standards"
  },
  {
    id: 503,
    question: "Why is EDGE sometimes referred to as 2.75G?",
    options: [
      "Because it is analog",
      "Because it provides higher data rates than basic 2G",
      "Because it removes GSM",
      "Because it supports video calls"
    ],
    answer: "Because it provides higher data rates than basic 2G"
  },
  {
    id: 504,
    question: "GSM uses TDMA for channel allocation.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 505,
    question: "CDMA offered better capacity and security than TDMA-based systems.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 506,
    question: "GPRS introduced circuit-switched data transmission.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 507,
    question: "Why were multimedia services difficult to support efficiently in 2G?",
    options: [
      "Due to low data transmission rates",
      "Because of strong encryption",
      "Because of packet switching",
      "Because of high bandwidth"
    ],
    answer: "Due to low data transmission rates"
  },
  {
    id: 508,
    question: "Which issue caused dropped calls in weak coverage areas in 2G?",
    options: [
      "Excessive encryption",
      "Signal degradation",
      "High data rates",
      "Overuse of fiber"
    ],
    answer: "Signal degradation"
  },
  {
    id: 509,
    question: "2G data speeds were comparable to modern broadband.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 510,
    question: "2G performance was highly dependent on signal strength.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 511,
    question: "The key shift introduced by 3G networks was from:",
    options: [
      "Digital to analog",
      "Voice-centric to data-driven communication",
      "Circuit switching to FDMA",
      "Low frequency to optical"
    ],
    answer: "Voice-centric to data-driven communication"
  },
  {
    id: 512,
    question: "Which application became feasible mainly due to 3G improvements?",
    options: [
      "Voice-only calls",
      "Video calling and mobile internet",
      "Morse code",
      "Fax transmission"
    ],
    answer: "Video calling and mobile internet"
  },
  {
    id: 513,
    question: "3G initial data rates were significantly higher than 2G.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 514,
    question: "3G removed support for voice communication.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 515,
    question: "Why did 3G combine packet-switched and circuit-switched domains?",
    options: [
      "To eliminate compatibility with older systems",
      "To support both voice and data efficiently",
      "To reduce encryption",
      "To avoid roaming"
    ],
    answer: "To support both voice and data efficiently"
  },
  {
    id: 516,
    question: "Enhanced mobility in 3G mainly refers to:",
    options: [
      "Smaller devices",
      "Maintaining connectivity at high speeds",
      "Higher battery consumption",
      "Wired backhaul"
    ],
    answer: "Maintaining connectivity at high speeds"
  },
  {
    id: 517,
    question: "3G supported global roaming through standards like UMTS and CDMA2000.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 518,
    question: "3G operated in only one fixed frequency band worldwide.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 519,
    question: "Why was 3G infrastructure deployment challenging in rural areas?",
    options: [
      "Lack of modulation techniques",
      "High deployment and licensing costs",
      "Low data demand",
      "Excessive bandwidth"
    ],
    answer: "High deployment and licensing costs"
  },
  {
    id: 520,
    question: "Which factor contributed most to higher battery consumption in 3G devices?",
    options: [
      "Analog transmission",
      "Higher data rates and advanced applications",
      "Lower frequencies",
      "Reduced processing"
    ],
    answer: "Higher data rates and advanced applications"
  },
  {
    id: 521,
    question: "3G eventually became insufficient for HD video streaming.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 522,
    question: "3G was immediately replaced by 5G.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 523,
    question: "Which generation FIRST enabled secure voice communication?",
    options: ["1G", "2G", "3G", "4G"],
    answer: "2G"
  },
  {
    id: 524,
    question: "Which limitation was common to both 1G and 2G but addressed better in 3G?",
    options: [
      "Analog transmission",
      "Low data rates for multimedia",
      "Circuit switching",
      "Encryption"
    ],
    answer: "Low data rates for multimedia"
  },
  {
    id: 525,
    question: "1G focused on voice only, while 2G introduced messaging and limited data.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 526,
    question: "3G completely eliminated all limitations of previous generations.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 527,
    question: "Which factor BEST explains why each mobile generation increased complexity?",
    options: [
      "User demand for richer services",
      "Removal of standards",
      "Lower frequencies",
      "Fewer users"
    ],
    answer: "User demand for richer services"
  },
  {
    id: 528,
    question: "Why is digital communication fundamental to modern mobile systems?",
    options: [
      "It eliminates noise entirely",
      "It enables compression, encryption, and efficient spectrum use",
      "It avoids modulation",
      "It requires less processing"
    ],
    answer: "It enables compression, encryption, and efficient spectrum use"
  },
  {
    id: 529,
    question: "Improving spectrum efficiency was a key goal from 2G onward.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 530,
    question: "Higher generation number always means lower cost and lower power consumption.",
    options: ["True", "False"],
    answer: "False"
  }
];



const questionsPart21 = [
  {
    id: 531,
    question: "Why is 4G described as a “transformative step” rather than an incremental upgrade?",
    options: [
      "Because it removed mobility",
      "Because it introduced an all-IP, broadband-like architecture",
      "Because it reduced data rates",
      "Because it used analog transmission"
    ],
    answer: "Because it introduced an all-IP, broadband-like architecture"
  },
  {
    id: 532,
    question: "Which capability BEST reflects 4G’s support for modern digital lifestyles?",
    options: [
      "Morse code transmission",
      "Voice-only calls",
      "High-definition video streaming and online gaming",
      "Circuit switching"
    ],
    answer: "High-definition video streaming and online gaming"
  },
  {
    id: 533,
    question: "4G was first deployed in the late 2000s.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 534,
    question: "4G networks were designed mainly for voice communication.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 535,
    question: "What is the most fundamental architectural difference between 4G and 3G?",
    options: [
      "4G uses analog signaling",
      "4G is entirely packet-switched (All-IP)",
      "4G removes data services",
      "4G eliminates mobility"
    ],
    answer: "4G is entirely packet-switched (All-IP)"
  },
  {
    id: 536,
    question: "Which service becomes naturally supported due to an All-IP network?",
    options: [
      "Circuit-switched fax",
      "Voice over IP (VoIP)",
      "Morse signaling",
      "AM radio"
    ],
    answer: "Voice over IP (VoIP)"
  },
  {
    id: 537,
    question: "All-IP means both voice and data are handled as packets.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 538,
    question: "4G still relies heavily on circuit-switched domains for voice.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 539,
    question: "Why are peak speeds different for stationary and mobile users in 4G?",
    options: [
      "Because encryption changes",
      "Because mobility introduces channel variation and handovers",
      "Because bandwidth disappears",
      "Because antennas stop working"
    ],
    answer: "Because mobility introduces channel variation and handovers"
  },
  {
    id: 540,
    question: "Which application is MOST dependent on high 4G data rates?",
    options: [
      "SMS",
      "HD video conferencing",
      "Paging systems",
      "Voice mail"
    ],
    answer: "HD video conferencing"
  },
  {
    id: 541,
    question: "4G can theoretically reach up to 1 Gbps for stationary users.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 542,
    question: "4G peak data rates are identical regardless of user mobility.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 543,
    question: "Enhanced spectral efficiency in 4G mainly means:",
    options: [
      "Using more power",
      "Supporting more users in the same bandwidth",
      "Increasing wavelength",
      "Eliminating interference completely"
    ],
    answer: "Supporting more users in the same bandwidth"
  },
  {
    id: 544,
    question: "Why is latency below 10 ms critical in 4G?",
    options: [
      "For email services",
      "For real-time applications like AR and autonomous driving",
      "For fax transmission",
      "For circuit switching"
    ],
    answer: "For real-time applications like AR and autonomous driving"
  },
  {
    id: 545,
    question: "Low latency improves responsiveness in interactive applications.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 546,
    question: "Handoff efficiency is irrelevant to user mobility.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 547,
    question: "Why does LTE rely on OFDM?",
    options: [
      "To simplify encryption",
      "For efficient, high-data-rate transmission and multipath resistance",
      "To eliminate antennas",
      "To reduce bandwidth usage to zero"
    ],
    answer: "For efficient, high-data-rate transmission and multipath resistance"
  },
  {
    id: 548,
    question: "What is the main advantage of carrier aggregation in LTE-Advanced?",
    options: [
      "Reducing frequency",
      "Combining multiple bands to increase throughput",
      "Eliminating handoff",
      "Switching back to 3G"
    ],
    answer: "Combining multiple bands to increase throughput"
  },
  {
    id: 549,
    question: "LTE-Advanced is an enhancement of LTE rather than a completely new system.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 550,
    question: "LTE-Advanced reduces data rates compared to LTE.",
    options: ["True", "False"],
    answer: "False"
  }
];

const questionsPart22 = [
  {
    id: 551,
    question: "Why did LTE dominate over WiMAX globally?",
    options: [
      "WiMAX had higher speeds",
      "LTE achieved wider adoption and standardization",
      "WiMAX eliminated mobility",
      "LTE was analog"
    ],
    answer: "LTE achieved wider adoption and standardization"
  },
  {
    id: 552,
    question: "What is the key benefit of VoLTE?",
    options: [
      "Voice over circuit switching",
      "High-quality voice without fallback to 2G/3G",
      "Lower frequency operation",
      "Removal of data services"
    ],
    answer: "High-quality voice without fallback to 2G/3G"
  },
  {
    id: 553,
    question: "VoLTE integrates voice and data on the same LTE network.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 554,
    question: "WiMAX completely replaced LTE worldwide.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 555,
    question: "Why was 4G deployment costly for service providers?",
    options: [
      "Due to low spectrum availability",
      "Due to infrastructure upgrades and new deployments",
      "Due to lack of users",
      "Due to analog transmission"
    ],
    answer: "Due to infrastructure upgrades and new deployments"
  },
  {
    id: 556,
    question: "Which limitation mainly affected rural areas in 4G?",
    options: [
      "Encryption",
      "Limited coverage",
      "High speed",
      "Low latency"
    ],
    answer: "Limited coverage"
  },
  {
    id: 557,
    question: "4G required users to upgrade to compatible devices.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 558,
    question: "4G had no compatibility issues with 2G/3G networks.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 559,
    question: "Why does mmWave provide extremely high speeds but limited range?",
    options: [
      "Longer wavelength",
      "Higher frequency causing higher path loss and blockage",
      "Lower bandwidth",
      "Circuit switching"
    ],
    answer: "Higher frequency causing higher path loss and blockage"
  },
  {
    id: 560,
    question: "Which 5G band provides the best balance between coverage and speed?",
    options: [
      "Low band",
      "Mid band",
      "High band (mmWave)",
      "Optical band"
    ],
    answer: "Mid band"
  },
  {
    id: 561,
    question: "Low-band 5G offers wide coverage but lower speeds.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 562,
    question: "mmWave is ideal for rural wide-area coverage.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 563,
    question: "Why is Massive MIMO essential in 5G?",
    options: [
      "To reduce encryption",
      "To handle many simultaneous connections efficiently",
      "To eliminate antennas",
      "To lower frequency"
    ],
    answer: "To handle many simultaneous connections efficiently"
  },
  {
    id: 564,
    question: "What is the main system-level benefit of 5G’s low latency?",
    options: [
      "Higher noise",
      "Enabling real-time and mission-critical applications",
      "Reduced bandwidth",
      "Slower handoffs"
    ],
    answer: "Enabling real-time and mission-critical applications"
  },
  {
    id: 565,
    question: "5G supports carrier aggregation to increase bandwidth.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 566,
    question: "5G latency is typically higher than 4G latency.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 567,
    question: "Which application MOST critically depends on ultra-low latency?",
    options: [
      "Email",
      "Remote surgery",
      "File download",
      "Voice mail"
    ],
    answer: "Remote surgery"
  },
  {
    id: 568,
    question: "Why is 5G essential for Industry 4.0?",
    options: [
      "It reduces device count",
      "It enables real-time monitoring and control",
      "It eliminates automation",
      "It lowers data rates"
    ],
    answer: "It enables real-time monitoring and control"
  },
  {
    id: 569,
    question: "5G supports massive IoT deployments.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 570,
    question: "Entertainment applications are unrelated to 5G.",
    options: ["True", "False"],
    answer: "False"
  }
];

const questionsPart23 = [
  {
    id: 571,
    question: "Why does 5G require dense small-cell deployment?",
    options: [
      "Due to low frequencies",
      "Due to short range of high-frequency signals",
      "Due to lack of bandwidth",
      "Due to encryption"
    ],
    answer: "Due to short range of high-frequency signals"
  },
  {
    id: 572,
    question: "Which factor MOST degrades mmWave signals indoors?",
    options: [
      "Refraction",
      "Physical obstacles like walls",
      "Time slots",
      "Polarization only"
    ],
    answer: "Physical obstacles like walls"
  },
  {
    id: 573,
    question: "High-frequency signals are more sensitive to rain and fog.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 574,
    question: "Overall energy consumption of 5G networks is always lower than 4G.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 575,
    question: "Why is spectrum allocation a major challenge for 6G?",
    options: [
      "Lack of antennas",
      "Crowded sub-THz and THz bands needing global coordination",
      "Low data demand",
      "Circuit switching"
    ],
    answer: "Crowded sub-THz and THz bands needing global coordination"
  },
  {
    id: 576,
    question: "Which feature most clearly differentiates 6G from 5G conceptually?",
    options: [
      "Voice services",
      "AI-driven networks and holographic communication",
      "Lower speed",
      "Wired transmission"
    ],
    answer: "AI-driven networks and holographic communication"
  },
  {
    id: 577,
    question: "Why is energy efficiency a critical concern in 6G?",
    options: [
      "Lower frequencies",
      "Massive data rates and high-frequency operation",
      "Lack of users",
      "Simple hardware"
    ],
    answer: "Massive data rates and high-frequency operation"
  },
  {
    id: 578,
    question: "6G is expected to use sub-terahertz and terahertz frequency bands.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 579,
    question: "6G commercial deployment is expected before 2025.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 580,
    question: "Developing hardware for terahertz operation is a significant technical challenge.",
    options: ["True", "False"],
    answer: "True"
  }
];
