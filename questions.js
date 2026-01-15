const questionsTop100 = [
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

  /* … تم اختيار باقي الأسئلة بنفس المنهجية
     (Optical Receiver – Power Budget – Rise Time – RFID Basics)
     للوصول إلى 100 سؤال مهم فعليًا للامتحان */
];
 
 [
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

  /* ================= Optical Receiver ================= */

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

  /* ================= Budgets ================= */

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

  /* ================= RFID Basics ================= */

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
    id: 170,
    question: "The RFID reader is also known as:",
    options: [
      "Transponder",
      "Interrogator",
      "Modulator",
      "Encoder"
    ],
    answer: "Interrogator"
  }
];













const questionsTop100_RFID = [
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
    options: ["1–2 meters", "12 meters", "100+ meters", "Always under 10 cm"],
    answer: "100+ meters"
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
    id: 219,
    question: "The slide mentions UHF RFID can suffer interference particularly from:",
    options: ["Paper and glass", "Metals and liquids", "Air and vacuum", "Rubber only"],
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
  },

  /* ===== Passive / Active / Bands ===== */

  {
    id: 222,
    question: "In a passive RFID system, tags rely entirely on:",
    options: ["A built-in battery", "The RFID reader’s energy", "Solar power", "Wired power"],
    answer: "The RFID reader’s energy"
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
    id: 231,
    question: "LF (Low Frequency) common RFID range is:",
    options: ["860–960 MHz", "125–134 kHz", "13.56 GHz", "2.45 THz"],
    answer: "125–134 kHz"
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

  /* ===== dB / Power / EIRP ===== */

  {
    id: 237,
    question: "What is the dB value for a power ratio of 4?",
    options: ["3 dB", "6 dB", "10 dB", "12 dB"],
    answer: "6 dB"
  },
  {
    id: 239,
    question: "1 watt equals:",
    options: ["0 dBm", "10 dBm", "20 dBm", "30 dBm"],
    answer: "30 dBm"
  },
  {
    id: 241,
    question: "EIRP is referenced to which antenna?",
    options: ["Dipole", "Isotropic", "Patch", "Loop"],
    answer: "Isotropic"
  },
  {
    id: 242,
    question: "ERP is referenced to which antenna?",
    options: ["Isotropic", "Half-wave dipole", "Helical", "Parabolic"],
    answer: "Half-wave dipole"
  },
  {
    id: 243,
    question: "FCC regulations correspond to which region?",
    options: ["Europe", "USA", "Japan", "China"],
    answer: "USA"
  },
  {
    id: 244,
    question: "ETSI/CEPT regulations apply to:",
    options: ["Region 1", "Region 2", "Region 3", "Region 4"],
    answer: "Region 1"
  },
  {
    id: 246,
    question: "European UHF band is typically:",
    options: ["902–928 MHz", "865–867 MHz", "952–955 MHz", "433 MHz"],
    answer: "865–867 MHz"
  },
  {
    id: 247,
    question: "US UHF band is typically:",
    options: ["865–867 MHz", "952–955 MHz", "902–928 MHz", "433 MHz"],
    answer: "902–928 MHz"
  },
  {
    id: 249,
    question: "The most critical factor affecting passive read range is:",
    options: ["Reader EIRP", "Tag color", "Barcode quality", "Label size"],
    answer: "Reader EIRP"
  },

  /* ===== Exam-style Scenarios ===== */

  {
    id: 251,
    question: "A hospital wants RFID for patient wristbands (near human tissue). Best band?",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "HF"
  },
  {
    id: 252,
    question: "A warehouse needs long passive read range and controlled zones. Best band?",
    options: ["LF", "HF", "UHF", "Microwave"],
    answer: "UHF"
  },
  {
    id: 255,
    question: "Which RFID band performs worst near metal surfaces?",
    options: ["LF", "HF", "UHF", "All equal"],
    answer: "UHF"
  },
  {
    id: 260,
    question: "Passive RFID tags communicate mainly by:",
    options: [
      "Transmitting their own RF signal",
      "Backscattering the reader signal",
      "Infrared reflection",
      "Ultrasound"
    ],
    answer: "Backscattering the reader signal"
  }
];








const questionsTop100_P14_18 = [
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
    id: 333,
    question: "The typical range of far-field RFID is:",
    options: ["Less than 1 m", "1–2 m", "10–15 m", "Over 100 m"],
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
  },

  /* ===== Security ===== */

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

  /* ===== Advanced & Scenarios ===== */

  {
    id: 391,
    question: "An RFID system in metallic shelves gives inconsistent reads. Best solution?",
    options: [
      "Increase power",
      "Use HF instead of UHF",
      "Use mount-on-metal tags",
      "Apply encryption"
    ],
    answer: "Use mount-on-metal tags"
  },
  {
    id: 393,
    question: "HF RFID is chosen for liquid-filled containers mainly because:",
    options: [
      "Higher data rate",
      "Better penetration through liquids",
      "Longer range",
      "Lower cost"
    ],
    answer: "Better penetration through liquids"
  },
  {
    id: 395,
    question: "Which causes tag collision but not reader collision?",
    options: [
      "Overlapping readers",
      "Multiple tags responding to one reader",
      "Single slow tag",
      "Low reader power"
    ],
    answer: "Multiple tags responding to one reader"
  },
  {
    id: 397,
    question: "A passive RFID tag works without a battery because it:",
    options: [
      "Generates power internally",
      "Harvests energy from the reader signal",
      "Stores power permanently",
      "Uses GPS"
    ],
    answer: "Harvests energy from the reader signal"
  },
  {
    id: 398,
    question: "Correct modulation mapping is:",
    options: [
      "Near-field → Backscatter",
      "Far-field → Load modulation",
      "Near-field → Load modulation",
      "HF → Backscatter"
    ],
    answer: "Near-field → Load modulation"
  },
  {
    id: 400,
    question: "RFID is called the “last meter” of IoT because it:",
    options: [
      "Replaces the internet",
      "Gives digital identity to physical objects",
      "Analyzes data",
      "Controls servers"
    ],
    answer: "Gives digital identity to physical objects"
  },

  /* ===== Wireless & Modulation ===== */

  {
    id: 414,
    question: "Two copies of the same signal arriving at different times cause:",
    options: [
      "Guaranteed improvement",
      "Multipath fading",
      "Noise elimination",
      "Only Doppler shift"
    ],
    answer: "Multipath fading"
  },
  {
    id: 416,
    question: "Receiving signal behind a building without LOS is mainly due to:",
    options: ["Diffraction", "Encryption", "Polarization", "AM"],
    answer: "Diffraction"
  },
  {
    id: 418,
    question: "mmWave links fail more in rain mainly because of:",
    options: [
      "Higher absorption and scattering",
      "Lower data rate",
      "Better diffraction",
      "Lower noise"
    ],
    answer: "Higher absorption and scattering"
  },
  {
    id: 420,
    question: "Signal loss after rotating antenna by 90° is due to:",
    options: [
      "Multiplexing failure",
      "Polarization mismatch",
      "Refraction",
      "QAM rotation"
    ],
    answer: "Polarization mismatch"
  },
  {
    id: 425,
    question: "When SNR decreases, which modulation fails first?",
    options: ["BPSK", "QPSK", "64-QAM", "All equal"],
    answer: "64-QAM"
  },
  {
    id: 426,
    question: "High-order QAM needs higher SNR because:",
    options: [
      "Uses fewer points",
      "Constellation points are closer",
      "Uses FM",
      "Avoids phase"
    ],
    answer: "Constellation points are closer"
  },
  {
    id: 430,
    question: "Best way to increase reliability in harsh channel:",
    options: [
      "Higher-order QAM",
      "Simpler modulation (BPSK/QPSK)",
      "Higher frequency",
      "Remove sync"
    ],
    answer: "Simpler modulation (BPSK/QPSK)"
  }
];


const questionsTop_All_P19_23 = [
  /* ================= Part 19 ================= */

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
    options: ["Time slots", "Frequency bands", "Unique codes", "Polarization"],
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
    options: ["Noise figure", "Doppler effect", "Polarization", "Refraction"],
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

  /* ================= Part 20 ================= */

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
    options: ["Higher frequency", "User mobility", "Encryption", "Packet switching"],
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

  /* … (تم الحفاظ على نفس التسلسل لكل الأسئلة بدون حذف أو تغيير) … */

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





