import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: 1,
    title: "reflective tape",
    path: "reflective-tape",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
  {
    id: 2,
    title: "tapes for wiring harness",
    path: "tapes-for-wiring-harness",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
  {
    id: 3,
    title: "die-cuts (single/double side)",
    path: "die-cuts",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
  {
    id: 4,
    title: "double side tapes for structure fixing/framing",
    path: "double-side-tapes-for-structure",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
  {
    id: 5,
    title: "various double side tapes",
    path: "various-double-side-tapes",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
  {
    id: 6,
    title: "d/s acrylic foam tape",
    path: "acrylic-foam-tape",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
  {
    id: 7,
    title: "auto body protection tapes(novacel)",
    path: "auto-body-protection-tapes",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
  {
    id: 8,
    title: "paint masking tapes",
    path: "paint-masking-tapes",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
  {
    id: 9,
    title: "mirror applications d/s tissue tapes",
    path: "mirror-applications-tissue-tapes",
    desc: "A premium and economical general purpose grade Crepe Paper Masking Tape provides excellent pressure-sensitive and quick qualities which are highly resistant to water solvent and oils. Our high-grade masking tape is used for painting on paper, drawing, on the wall, and several other personal and professional purposes. At our online store, you’ll find plenty of masking tape sizes.",
    descList: [
      "They are used in paint shop refrigeration, automotive & business machinery and many other places for general purpose application.",
      "Masking of painted metal, plastic & rubber surface where staining could be a problem.",
      "They are recommended for a wide variety of packing & light bundling operations.",
      "They are employed to temporarily attack",
    ],
    mainDetail:
      "<strong>The standard Lorem Ipsum passage, used since the 1500s</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<strong>Section 1.10.32 of 'de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    productSpecs: [
      {
        name: "Wood Fibre",
        detail: "1mm width Pine wood",
      },
      {
        name: "Binder",
        detail: "85 grade Magnesite 200 mesh",
      },
      {
        name: "Standard Size",
        detail:
          "2000 x 500mm for ≥ 25mm thickness, 1220 x 610mm for 10mm to 150mm",
      },
      {
        name: "Other Sizes",
        detail: "1200 x 600mm; 915 x 610mm, 600 x 600mm; 595 x 595mm",
      },
      {
        name: "Thickness (in mm)",
        detail: "10, 13, 15, 20, 25, 40, 50, 75, 100, 150",
      },
      {
        name: "Density in [kg/cuM]",
        detail: "400 to 800",
      },
      {
        name: "Edge",
        detail: "Square, Bevel",
      },
      {
        name: "Standard Range",
        detail: "unpainted, 'Natural Color of panel is Off white'",
      },
      {
        name: "Premium Range",
        detail: "Spray painted with any color",
      },
      {
        name: "Conforms to",
        detail: "15 3308; EN13168; B5 1105; DIN 1101",
      },
    ],
    technicalSpecs: [
      {
        name: "Fire",
        details: "tested by CBRI Roorkee, Uttrakhand.",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Ignitability Test",
        details: "P' as per BS 476 Part 5",
      },
      {
        name: "Fire Propagation Index",
        details:
          "4.11 as per BS 476 Part 6 •Surface Spread of Flame-Class 1 as per B5 476 Part 7",
      },
      {
        name: "Non-combustibility",
        details: "Non-combustibility-Mass Loss 52.27% as per ISO 1182",
      },
      {
        name: "Thermal Conductivity",
        details:
          "Thermal Conductivity, k=0.065 W/mK Weathering Test: Tested by SIIR, Delhi. 'NO delamination, and Damage observed after the Test as per IS 9307.",
      },
      {
        name: "Sound",
        details:
          "As per 15 8225-1987 equivalent to 150 354-1985 and ASTM 423 90 a tested by NPL, Delhi & Prasar Bharti, Aw Delhi.",
      },
    ],
  },
];

const initialState = {
  products: data,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
