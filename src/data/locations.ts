export interface Location {
  name: string;
  slug: string;
  region: "central-belt" | "ayrshire";
  /** Short for schema/areaServed */
  regionLabel: string;
  /** Local areas/neighborhoods for content and SEO */
  neighborhoods: string[];
  /** Hero intro - conversational, local refs */
  heroIntro: string;
  /** Service intro paragraph */
  serviceIntro: string;
  /** Content section opening - local problems/story */
  contentOpening: string;
  /** Why services matter here - local knowledge */
  localKnowledge: string;
  /** Optional geo for schema (lat/lng as strings) */
  geo?: { latitude: string; longitude: string };
}

const baseCentralBelt: Omit<Location, "name" | "slug" | "neighborhoods" | "heroIntro" | "serviceIntro" | "contentOpening" | "localKnowledge"> = {
  region: "central-belt",
  regionLabel: "Scotland Central Belt",
};

const baseAyrshire: Omit<Location, "name" | "slug" | "neighborhoods" | "heroIntro" | "serviceIntro" | "contentOpening" | "localKnowledge"> = {
  region: "ayrshire",
  regionLabel: "Ayrshire",
};

function loc(
  name: string,
  slug: string,
  region: "central-belt" | "ayrshire",
  regionLabel: string,
  neighborhoods: string[],
  heroIntro: string,
  serviceIntro: string,
  contentOpening: string,
  localKnowledge: string,
  geo?: { latitude: string; longitude: string }
): Location {
  return {
    name,
    slug,
    region,
    regionLabel,
    neighborhoods,
    heroIntro,
    serviceIntro,
    contentOpening,
    localKnowledge,
    geo,
  };
}

// Central Belt locations with unique local content
export const centralBeltLocations: Location[] = [
  loc(
    "Glasgow",
    "glasgow",
    "central-belt",
    "Scotland Central Belt",
    ["West End", "Southside", "East End", "North Glasgow", "City Centre"],
    "From the West End to the Southside, Glasgow homeowners know Scottish weather can be tough on outdoor spaces. We help you get a garden room or deck that stands up to the rain and looks great year-round.",
    "Across Glasgow we install garden rooms and decking that suit local properties and the climate. Whether you're after a home office in the West End or a deck in the Southside, we deliver quality you can rely on.",
    "Glasgow's mix of Victorian tenements and modern homes means every project is different. We've worked across the city and know what works for local gardens and planning.",
    "Good transport links and a range of property types make Glasgow a great place for garden rooms and decking. We factor in access, drainage, and Scottish weather so your project lasts.",
    { latitude: "55.8642", longitude: "-4.2518" }
  ),
  loc(
    "Edinburgh",
    "edinburgh",
    "central-belt",
    "Scotland Central Belt",
    ["Newington", "Morningside", "Leith", "Corstorphine", "Stockbridge"],
    "Edinburgh's weather and varied property types mean outdoor spaces need to be built right. We bring garden room and decking solutions that fit your area and the local climate.",
    "From Newington to Leith, we provide garden rooms and decking designed for Edinburgh's conditions. Our installations are built to last and to suit your property.",
    "Whether you're in a New Town garden or a modern development, we tailor each project to your space and local requirements. Edinburgh's mix of old and new is something we know well.",
    "Transport links and conservation areas can affect design and access. We work with you to get the best result within local constraints and weather considerations.",
    { latitude: "55.9533", longitude: "-3.1883" }
  ),
  loc(
    "Stirling",
    "stirling",
    "central-belt",
    "Scotland Central Belt",
    ["Bridge of Allan", "Bannockburn", "St Ninians", "Raploch"],
    "Stirling and the surrounding areas deserve outdoor spaces that handle wind and rain. We install garden rooms and decking built for Central Scotland's climate.",
    "Across Stirling we offer garden rooms and decking that suit local homes and gardens. Quality materials and careful installation mean your investment lasts.",
    "Stirling's blend of historic and new build properties gives us plenty of experience with different garden types. We focus on solutions that work for your location.",
    "Good road links and a mix of property types make Stirling a key area for us. We consider access, exposure, and drainage so your project performs in all seasons.",
    { latitude: "56.1165", longitude: "-3.9369" }
  ),
  loc(
    "Falkirk",
    "falkirk",
    "central-belt",
    "Scotland Central Belt",
    ["Grangemouth", "Larbert", "Stenhousemuir", "Bo'ness"],
    "Falkirk and the surrounding towns need outdoor structures that cope with Central Belt weather. We deliver garden rooms and decking that are built to last.",
    "We serve Falkirk, Grangemouth, Larbert and nearby areas with garden room and decking installations. Local knowledge and quality materials are at the heart of what we do.",
    "From Grangemouth to Bo'ness, we've worked on a wide range of properties. We understand local gardens and what it takes to get a great result.",
    "The area's mix of industry and residential means we're used to different site conditions. We plan for drainage, access, and long-term durability.",
    { latitude: "56.0019", longitude: "-3.7843" }
  ),
  loc(
    "Paisley",
    "paisley",
    "central-belt",
    "Scotland Central Belt",
    ["Renfrew", "Johnstone", "Elderslie", "Brookfield"],
    "Paisley and the wider Renfrewshire area get their share of rain and wind. We build garden rooms and decking that stand up to the weather and look great.",
    "Across Paisley and nearby towns we install garden rooms and decking tailored to local properties. You get a professional finish and advice that fits your area.",
    "Renfrewshire's mix of tenements and family homes means we're used to different garden sizes and access. We work with you to get the best outcome.",
    "Good links to Glasgow and local transport help us serve the area efficiently. We consider your property type and exposure when designing your project.",
    { latitude: "55.8473", longitude: "-4.4321" }
  ),
  loc(
    "East Kilbride",
    "east-kilbride",
    "central-belt",
    "Scotland Central Belt",
    ["St Leonards", "Greenhills", "The Village", "Stuartfield"],
    "East Kilbride's mix of green spaces and housing makes it ideal for garden rooms and decking. We help you make the most of your outdoor space in all weathers.",
    "We provide garden room and decking services across East Kilbride. Our installations are designed for Scottish conditions and local property types.",
    "From new builds to established gardens, we've worked across East Kilbride. We tailor each project to your plot and how you want to use the space.",
    "The town's layout and transport links make scheduling straightforward. We focus on quality and durability so your garden room or deck performs for years.",
    { latitude: "55.7644", longitude: "-4.1770" }
  ),
  loc(
    "Hamilton",
    "hamilton",
    "central-belt",
    "Scotland Central Belt",
    ["Fairhill", "Blantyre", "Bothwell", "Uddingston"],
    "Hamilton and South Lanarkshire homeowners need outdoor solutions that cope with the climate. We install garden rooms and decking built for the long term.",
    "Across Hamilton and nearby areas we deliver garden rooms and decking that suit local homes. Quality materials and careful installation are standard.",
    "We've worked across Hamilton and the surrounding towns. We understand local property types and what works in Scottish gardens.",
    "Good road links help us serve the area reliably. We plan for drainage, exposure, and access so your project runs smoothly.",
    { latitude: "55.7770", longitude: "-4.0390" }
  ),
  loc(
    "Motherwell",
    "motherwell",
    "central-belt",
    "Scotland Central Belt",
    ["Belhaven", "Dalziel", "Carfin", "Ravenscraig"],
    "Motherwell and North Lanarkshire deserve outdoor spaces that last. We bring garden room and decking installations that handle the weather and add real value.",
    "We serve Motherwell and the surrounding area with garden rooms and decking. Each project is tailored to your property and how you want to use the space.",
    "From traditional homes to new developments, we've worked across the area. We focus on build quality and design that fits your garden.",
    "Local access and property types are something we know well. We consider drainage, exposure, and materials so your investment pays off.",
    { latitude: "55.7890", longitude: "-3.9920" }
  ),
  loc(
    "Coatbridge",
    "coatbridge",
    "central-belt",
    "Scotland Central Belt",
    ["Townhead", "Kirkwood", "Whifflet", "Dunbeth"],
    "Coatbridge and the Monklands area need outdoor structures that stand up to Central Scotland's weather. We deliver garden rooms and decking built to last.",
    "Across Coatbridge we install garden rooms and decking for local homeowners. You get a professional finish and materials chosen for durability.",
    "We've worked across Coatbridge and nearby towns. We understand local gardens and what it takes to get a great result in all seasons.",
    "The area's mix of property types means we're used to different site conditions. We plan for access, drainage, and long-term performance.",
    { latitude: "55.8622", longitude: "-4.0193" }
  ),
  loc(
    "Airdrie",
    "airdrie",
    "central-belt",
    "Scotland Central Belt",
    ["Chapelhall", "Caldwell", "Rawyards", "Rochsolloch"],
    "Airdrie homeowners know that outdoor spaces need to handle the elements. We install garden rooms and decking that look good and perform in the Scottish climate.",
    "We provide garden room and decking services across Airdrie and the surrounding area. Quality and local knowledge are at the heart of every project.",
    "From Chapelhall to the town centre, we've worked on a range of properties. We tailor each installation to your garden and your needs.",
    "Good links to the M8 help us serve Airdrie efficiently. We consider your property type and exposure when designing your project.",
    { latitude: "55.8661", longitude: "-3.9803" }
  ),
  loc(
    "Cumbernauld",
    "cumbernauld",
    "central-belt",
    "Scotland Central Belt",
    ["Condorrat", "Kildrum", "Abronhill", "Seafar"],
    "Cumbernauld's mix of green space and housing is ideal for garden rooms and decking. We help you create outdoor spaces that work in all weathers.",
    "Across Cumbernauld we deliver garden rooms and decking tailored to local properties. Our installations are built for Scottish conditions.",
    "We've worked across Cumbernauld's neighbourhoods. We understand local gardens and how to get the best from your outdoor space.",
    "The town's layout and access make scheduling straightforward. We focus on quality materials and installation so your project lasts.",
    { latitude: "55.9460", longitude: "-3.9905" }
  ),
  loc(
    "Livingston",
    "livingston",
    "central-belt",
    "Scotland Central Belt",
    ["Livingston Village", "Craigshill", "Dedridge", "Murieston"],
    "Livingston and West Lothian homeowners need outdoor solutions that cope with the climate. We install garden rooms and decking built for the long term.",
    "We serve Livingston and the surrounding area with garden rooms and decking. Each project is tailored to your property and local conditions.",
    "From new towns to established areas, we've worked across Livingston. We focus on build quality and design that fits your garden.",
    "Good transport links help us serve the area reliably. We plan for drainage, exposure, and materials so your investment pays off.",
    { latitude: "55.8867", longitude: "-3.5228" }
  ),
  loc(
    "Bathgate",
    "bathgate",
    "central-belt",
    "Scotland Central Belt",
    ["Boghall", "Linton", "Armadale", "Blackburn"],
    "Bathgate and West Lothian deserve outdoor spaces that last. We bring garden room and decking installations that handle the weather and add value.",
    "Across Bathgate and nearby towns we install garden rooms and decking. Quality materials and careful installation are standard for every job.",
    "We've worked across Bathgate and the surrounding area. We understand local property types and what works in Scottish gardens.",
    "Local access and weather conditions are something we plan for. We consider drainage, exposure, and durability so your project performs.",
    { latitude: "55.9020", longitude: "-3.6430" }
  ),
  loc(
    "Linlithgow",
    "linlithgow",
    "central-belt",
    "Scotland Central Belt",
    ["Bridgend", "Blackness", "Philpstoun"],
    "Linlithgow's historic character and green spaces suit garden rooms and decking. We help you create outdoor spaces that complement your property.",
    "We provide garden room and decking services across Linlithgow and the surrounding area. Our installations are designed for local conditions and property types.",
    "From period homes to modern builds, we've worked in and around Linlithgow. We tailor each project to your garden and local requirements.",
    "The area's mix of conservation and new development means we're used to different constraints. We focus on quality and design that fits.",
    { latitude: "55.9763", longitude: "-3.6033" }
  ),
  loc(
    "Kirkintilloch",
    "kirkintilloch",
    "central-belt",
    "Scotland Central Belt",
    ["Lenzie", "Bishopbriggs", "Milton of Campsie", "Twechar"],
    "Kirkintilloch and East Dunbartonshire need outdoor structures that stand up to the weather. We deliver garden rooms and decking built to last.",
    "Across Kirkintilloch we install garden rooms and decking for local homeowners. You get a professional finish and materials chosen for Scottish conditions.",
    "We've worked across Kirkintilloch and nearby areas. We understand local gardens and what it takes to get a great result.",
    "Good links to Glasgow and the M80 help us serve the area. We plan for access, drainage, and long-term durability.",
    { latitude: "55.9396", longitude: "-4.1526" }
  ),
  loc(
    "Bishopbriggs",
    "bishopbriggs",
    "central-belt",
    "Scotland Central Belt",
    ["Kenmure", "Springburn", "Cadder", "Torrance"],
    "Bishopbriggs homeowners know that outdoor spaces need to handle rain and wind. We install garden rooms and decking that look good and perform year-round.",
    "We serve Bishopbriggs and East Dunbartonshire with garden rooms and decking. Each project is tailored to your property and how you want to use the space.",
    "From Kenmure to the north of the town, we've worked across Bishopbriggs. We focus on quality and design that fits your garden.",
    "Proximity to Glasgow and local transport helps us serve the area. We consider your property type and exposure when designing your project.",
    { latitude: "55.9062", longitude: "-4.2186" }
  ),
  loc(
    "Bearsden",
    "bearsden",
    "central-belt",
    "Scotland Central Belt",
    ["Bearsden Cross", "Drymen Road", "Roman Road", "Kessington"],
    "Bearsden's gardens and property types suit garden rooms and decking. We help you create outdoor spaces that stand up to Scottish weather.",
    "Across Bearsden we deliver garden rooms and decking tailored to local properties. Our installations are built for durability and style.",
    "We've worked across Bearsden and the surrounding area. We understand local gardens and planning considerations.",
    "The area's mix of period and modern homes means we're used to different requirements. We focus on quality and long-term performance.",
    { latitude: "55.9152", longitude: "-4.3328" }
  ),
  loc(
    "Newton Mearns",
    "newton-mearns",
    "central-belt",
    "Scotland Central Belt",
    ["Greenlaw", "Mearns Cross", "Broom", "Capelrig"],
    "Newton Mearns and East Renfrewshire deserve outdoor spaces that last. We bring garden room and decking installations that add value and handle the climate.",
    "We serve Newton Mearns and the surrounding area with garden rooms and decking. Quality materials and careful installation are standard.",
    "We've worked across Newton Mearns and nearby neighbourhoods. We understand local property types and what works in Scottish gardens.",
    "Good road links and a range of property types make the area well served. We plan for drainage, exposure, and durability.",
    { latitude: "55.7714", longitude: "-4.3350" }
  ),
  loc(
    "Dunfermline",
    "dunfermline",
    "central-belt",
    "Scotland Central Belt",
    ["Town Centre", "Rosyth", "Inverkeithing", "Dalgety Bay"],
    "Dunfermline and West Fife need outdoor solutions that cope with the weather. We install garden rooms and decking built for the long term.",
    "Across Dunfermline we install garden rooms and decking for local homeowners. You get a professional finish and advice that fits your area.",
    "From Rosyth to Dalgety Bay, we've worked across the area. We tailor each project to your garden and local conditions.",
    "Good transport links and a mix of property types mean we're used to different sites. We focus on quality and durability.",
    { latitude: "56.0720", longitude: "-3.4523" }
  ),
  loc(
    "Kirkcaldy",
    "kirkcaldy",
    "central-belt",
    "Scotland Central Belt",
    ["Dysart", "Linktown", "Gallatown", "Sinnamon"],
    "Kirkcaldy and the Fife coast get their share of wind and rain. We build garden rooms and decking that stand up to the elements and look great.",
    "We provide garden room and decking services across Kirkcaldy and the surrounding area. Our installations are designed for local conditions.",
    "We've worked across Kirkcaldy and nearby towns. We understand local property types and what it takes to get a great result.",
    "Coastal exposure and local access are factors we plan for. We consider materials and drainage so your project performs in all seasons.",
    { latitude: "56.1115", longitude: "-3.1594" }
  ),
];

// Ayrshire locations (high-value for garden rooms)
export const ayrshireLocations: Location[] = [
  loc(
    "Kilmarnock",
    "kilmarnock",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Shortlees", "Onthank", "Riccarton"],
    "Kilmarnock and East Ayrshire homeowners need outdoor spaces that handle the weather. We install garden rooms and decking built for Ayrshire's climate.",
    "Across Kilmarnock we deliver garden rooms and decking tailored to local properties. Quality and local knowledge are at the heart of every project.",
    "We've worked across Kilmarnock and the surrounding area. We understand local gardens and what works for Ayrshire properties.",
    "Good road links and a mix of property types make Kilmarnock well served. We plan for drainage, exposure, and long-term durability.",
    { latitude: "55.6117", longitude: "-4.4958" }
  ),
  loc(
    "Kilwinning",
    "kilwinning",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Pennyburn", "Corsehill", "Bourtreehill"],
    "Kilwinning and North Ayrshire deserve outdoor spaces that last. We bring garden room and decking installations that add value and stand up to the climate.",
    "We serve Kilwinning and the surrounding area with garden rooms and decking. Each project is tailored to your property and local conditions.",
    "From Pennyburn to Bourtreehill, we've worked across Kilwinning. We focus on quality and design that fits your garden.",
    "Proximity to the coast and local transport helps us serve the area. We consider your property type and exposure when designing your project.",
    { latitude: "55.6564", longitude: "-4.7046" }
  ),
  loc(
    "Irvine",
    "irvine",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Bourtreehill", "Kilwinning", "Dreghorn"],
    "Irvine and North Ayrshire need outdoor structures that cope with coastal weather. We deliver garden rooms and decking built to last.",
    "Across Irvine we install garden rooms and decking for local homeowners. You get a professional finish and materials chosen for Ayrshire conditions.",
    "We've worked across Irvine and the Three Towns area. We understand local gardens and what it takes to get a great result.",
    "Coastal exposure and a mix of property types mean we plan for durability. We focus on materials and drainage so your project performs.",
    { latitude: "55.6194", longitude: "-4.6551" }
  ),
  loc(
    "Prestwick",
    "prestwick",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Prestwick Airport", "Links", "Meikle Earnock"],
    "Prestwick's coastal location means outdoor spaces need to be built right. We install garden rooms and decking that stand up to the wind and rain.",
    "We provide garden room and decking services across Prestwick and the surrounding area. Our installations are designed for Ayrshire's coastal climate.",
    "We've worked in and around Prestwick. We understand local property types and how to get the best from your outdoor space.",
    "Coastal conditions and good transport links are factors we consider. We focus on quality materials and installation so your project lasts.",
    { latitude: "55.4833", longitude: "-4.6167" }
  ),
  loc(
    "Ayr",
    "ayr",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Alloway", "Heads of Ayr", "Prestwick"],
    "Ayr and South Ayrshire homeowners know that coastal weather can be tough. We build garden rooms and decking that look good and perform year-round.",
    "Across Ayr we deliver garden rooms and decking tailored to local properties. Quality materials and careful installation are standard.",
    "From Alloway to the town centre, we've worked across Ayr. We tailor each project to your garden and local requirements.",
    "Coastal exposure and a range of property types mean we're used to different conditions. We plan for durability and long-term performance.",
    { latitude: "55.4580", longitude: "-4.6292" }
  ),
];

export const LOCATION_SERVICES = ["garden-rooms", "decking"] as const;
export type LocationServiceSlug = (typeof LOCATION_SERVICES)[number];

export const SERVICE_NAMES: Record<LocationServiceSlug, string> = {
  "garden-rooms": "Garden Rooms",
  decking: "Decking",
};

/** All locations in one array for iteration and sitemap */
export function getAllLocations(): Location[] {
  return [...centralBeltLocations, ...ayrshireLocations];
}

export function getLocationBySlug(slug: string): Location | undefined {
  return getAllLocations().find((loc) => loc.slug === slug);
}

export function getLocationsByRegion(region: "central-belt" | "ayrshire"): Location[] {
  return region === "central-belt" ? centralBeltLocations : ayrshireLocations;
}
