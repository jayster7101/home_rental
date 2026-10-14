export const property = {
  brand: 'Modesto Unit', headline: 'A place to call home.', location: 'Modesto, CA',
  rent: '$1,500', bedrooms: '1', bathrooms: '1', area: '500', availability: 'Available now',
  description: 'An open living area connects to a kitchen with white cabinetry, a stainless steel refrigerator, and a range with a hood. Wood-look flooring and recessed lighting continue throughout the interior.',
  secondary: 'The bathroom features a walk-in shower, a floating vanity, and stacked laundry appliances. The bedroom includes mirrored closet doors, a ceiling fan, and a wall-mounted air-conditioning unit.',
  termsIntro: 'Contact the owner to confirm rental terms, availability, and what is included in the lease.',
  contactIntro: 'Available month-to-month for $1,500 per month. Contact the owner to schedule a viewing.',
  neighborhood: '• Prime Shopping & Dining Access: The property sits just minutes away from the Vintage Faire Mall and the bustling Sisk Road commercial corridor, providing highly convenient access to major retailers, grocery stores, and diverse dining options.\n• Excellent Commuter Convenience: It offers exceptionally fast access to Highway 99, making it an ideal spot for professionals commuting north toward Manteca and Stockton, or south into central Modesto.\n• Quiet, Established Neighborhood: Located in a mature, low-traffic residential pocket, the immediate area features peaceful, tree-lined streets with a classic suburban feel.\n• Strong Medical Proximity: The home is positioned close to major healthcare facilities, including the Kaiser Permanente Modesto Medical Center on Dale Road, which is a major convenience and employment hub.',
  highlights: ['Open living area & kitchen', 'Stainless steel kitchen appliances', 'Walk-in shower', 'State-of-the-art bidet toilet', 'Stacked washer & dryer', 'Mirrored bedroom closet', 'Ceiling fans', 'Wall-mounted air-conditioning unit',],
  terms: ['Monthly rent', 'Security deposit', 'Lease duration', 'Move-in date', 'Pets', 'Utilities', 'Parking', 'Laundry'].map(label => ({label, value: ["$1,500 per month", "$1,500", "Month-to-month", "To be announced", "No Pets", "Utilities bundled into rent", "On-street parking available", "Stacked washer & dryer included"][['Monthly rent', 'Security deposit', 'Lease duration', 'Move-in date', 'Pets', 'Utilities', 'Parking', 'Laundry'].indexOf(label)]})),
  owner: 'Property owner', email: '', phone: '',
  // Asset names and room labels are mapped in PHOTO_INDEX.md.
  photos: [
    {
        "id": 0,
        "label": "Living area & kitchen",
        "group": "Living & kitchen",
        "src": "/photos/2966E92B-4DE8-48AC-86A2-57E91ECB1D17_1_102_o.jpeg",
        "alt": "Open living area connected to white kitchen cabinets, stainless steel refrigerator, range, and hood"
    },
    {
        "id": 2,
        "label": "Bathroom — vanity & entry",
        "group": "Bathroom & laundry",
        "src": "/photos/D558A262-918A-4C59-9571-6B05002C5EE0_1_102_o.jpeg",
        "alt": "Floating bathroom vanity and illuminated mirror beside the entry door"
    },
    {
        "id": 3,
        "label": "Kitchen — wide view",
        "group": "Living & kitchen",
        "src": "/photos/3DBD99ED-3E04-4669-80F0-25F541DD46A8_1_102_o.jpeg",
        "alt": "Wide view of kitchen cabinets, stainless steel refrigerator, range, and ceiling fan"
    },
    {
        "id": 4,
        "label": "Kitchen — cabinets & counter",
        "group": "Living & kitchen",
        "src": "/photos/D35D5670-2884-41C8-86D7-58C7482FD4C8_1_102_o.jpeg",
        "alt": "White kitchen cabinets and counter next to the stainless steel refrigerator"
    },
    {
        "id": 5,
        "label": "Kitchen — refrigerator & cabinetry",
        "group": "Living & kitchen",
        "src": "/photos/BA180623-FBDC-4843-BE8C-457EFA777117_1_102_o.jpeg",
        "alt": "Kitchen refrigerator, white cabinetry, counter, and adjacent living area"
    },
    {
        "id": 6,
        "label": "Living area — open floor space",
        "group": "Living & kitchen",
        "src": "/photos/E90D763F-EBA8-4F7C-AE02-E88C0611613C_1_102_o.jpeg",
        "alt": "Open wood-look floor space beside the kitchen with recessed lighting"
    },
    {
        "id": 7,
        "label": "Kitchen — range & hood",
        "group": "Living & kitchen",
        "src": "/photos/086578EB-D2B9-4067-A45A-9DFBA7B0D838_1_102_o.jpeg",
        "alt": "Kitchen range and stainless steel hood with tiled backsplash and refrigerator"
    },
    {
        "id": 8,
        "label": "Living area — toward bedroom",
        "group": "Living & kitchen",
        "src": "/photos/529F6046-6CCD-4876-8FA4-BF83C354C5F6_1_102_o.jpeg",
        "alt": "Living area looking toward the bedroom doorway beside the kitchen"
    },
    {
        "id": 9,
        "label": "Living area — doors & storage",
        "group": "Living & kitchen",
        "src": "/photos/35BC158A-4130-4077-B698-FF5BD9DC7A61_1_102_o.jpeg",
        "alt": "Long view of the living area with doors along the wall and an open closet"
    },
    {
        "id": 11,
        "label": "Bedroom — bed & cooling unit",
        "group": "Bedroom",
        "src": "/photos/E5282E0E-76FB-468D-B5ED-A25CC7F94DC8_1_102_o.jpeg",
        "alt": "Bedroom with a bed, ceiling fan, wood accent wall, and wall-mounted cooling unit"
    },
    {
        "id": 13,
        "label": "Bathroom — toilet & towel rack",
        "group": "Bathroom & laundry",
        "src": "/photos/341AF692-2DE7-44AD-8521-78E103AD1CAF_1_102_o.jpeg",
        "alt": "Bathroom toilet and wall-mounted towel rack next to the doorway"
    },
    {
        "id": 14,
        "label": "Bathroom — shower & laundry",
        "group": "Bathroom & laundry",
        "src": "/photos/4E5498D4-CD93-4BE9-A5A3-0982E6032827_1_102_o.jpeg",
        "alt": "Walk-in shower with gray curtain and stacked washer and dryer"
    },
    {
        "id": 15,
        "label": "Bathroom — shower close-up",
        "group": "Bathroom & laundry",
        "src": "/photos/BD0C7269-1B3A-4826-8AA7-3CCF692D22E2_1_102_o.jpeg",
        "alt": "Close-up of walk-in shower and stacked washer and dryer"
    },
    {
        "id": 16,
        "label": "Bathroom — doorway view",
        "group": "Bathroom & laundry",
        "src": "/photos/5970B7B2-26C1-405F-B0BA-2524F3C82F3A_1_102_o.jpeg",
        "alt": "Bathroom doorway looking toward the shower and laundry appliances"
    },
    {
        "id": 17,
        "label": "Bathroom — wider view",
        "group": "Bathroom & laundry",
        "src": "/photos/BA2D2BA8-799E-4F93-B968-843B83A53AAA_1_102_o.jpeg",
        "alt": "Wide bathroom view with vanity, illuminated mirror, toilet, and towel rack"
    },
    {
        "id": 18,
        "label": "Side entrance — gate",
        "group": "Outdoor areas",
        "src": "/photos/8496FA5D-7488-44B2-B1EA-87A394470EDA_1_102_o.jpeg",
        "alt": "Outdoor side entrance with a door, paved walkway, wood fence, and gate"
    },
    {
        "id": 19,
        "label": "Side walkway — utility area",
        "group": "Outdoor areas",
        "src": "/photos/D7C3D38A-2D1A-4F0B-A930-54DC635F9ECC_1_102_o.jpeg",
        "alt": "Fenced paved side walkway beside outdoor air-conditioning equipment"
    }
]
}
