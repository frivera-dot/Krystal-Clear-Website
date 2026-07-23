import type { City } from "../types";

export const cities: City[] = [
  // ─────────────────────────────────────────────
  // SACRAMENTO AREA
  // ─────────────────────────────────────────────
  {
    name: "Sacramento",
    slug: "sacramento",
    county: "Sacramento County",
    region: "sacramento-area",
    zip: "95814",
    intro:
      "State government runs on early mornings, and so do the cleaning crews that keep Capitol Mall presentable. Sacramento's commercial core stretches from the high-rise towers downtown through Midtown's converted Victorians-turned-offices, out to the sprawling office parks of Natomas and the medical campuses around UC Davis Medical Center in Oak Park. KCS serves this entire footprint with commercial janitorial programs built for the buildings that define California's capital: Class A towers near the Capitol, agency and association offices, medical suites along J Street and Stockton Boulevard, and the churches and private schools tucked into East Sacramento's neighborhoods. Whether your building hosts lobbyists, patients, or parishioners, we keep it inspection-ready every day.",
    businessLandscape:
      "Sacramento's property mix is anchored by government and healthcare: state office towers downtown, association and law offices on Capitol Mall, and major hospital campuses run by Sutter Health, UC Davis Health, Kaiser Permanente, and Dignity Health. Around them sit Midtown's boutique creative offices, Natomas business parks, Power Inn Road light industrial, and the retail and entertainment district surrounding Golden 1 Center.",
    districts: [
      "Downtown / Capitol Mall",
      "Midtown",
      "Natomas office parks",
      "R Street Corridor",
      "Power Inn Road industrial area",
    ],
    landmarks: [
      "California State Capitol",
      "Golden 1 Center & Downtown Commons (DOCO)",
      "UC Davis Medical Center",
      "Sutter Medical Center",
    ],
    clientTypes: ["offices", "medical facilities", "churches", "private schools", "property managers", "retail"],
    nearby: ["west-sacramento", "elk-grove", "rancho-cordova", "citrus-heights", "davis"],
    lat: 38.5816,
    lng: -121.4944,
  },
  {
    name: "Elk Grove",
    slug: "elk-grove",
    county: "Sacramento County",
    region: "sacramento-area",
    zip: "95758",
    intro:
      "Few Sacramento-area suburbs have grown as fast as Elk Grove, and its commercial base has grown right along with it. The Laguna area along Interstate 5 hosts corporate offices and Apple's long-running Elk Grove campus, while Elk Grove Boulevard and Laguna Boulevard carry mile after mile of retail centers, medical suites, banks, and restaurants. Old Town Elk Grove keeps a walkable strip of small storefronts and offices with its own character. KCS provides nightly janitorial and recurring commercial cleaning across all of it — from professional offices in Laguna Springs to dental and medical practices, churches, private schools, and the HOA clubhouses that serve Elk Grove's master-planned neighborhoods.",
    businessLandscape:
      "Elk Grove skews suburban-commercial: corporate and back-office space near Laguna Springs, big-box and neighborhood retail along Elk Grove and Laguna Boulevards, a dense concentration of medical and dental suites, and one of the region's largest school systems. Master-planned communities mean active HOAs with clubhouses and common facilities, and Kaiser Permanente's medical offices anchor the healthcare presence.",
    districts: [
      "Laguna Springs corporate area",
      "Elk Grove Boulevard corridor",
      "Laguna Boulevard retail corridor",
      "Old Town Elk Grove",
    ],
    landmarks: [
      "Apple Elk Grove campus",
      "Kaiser Permanente medical offices",
      "District56 civic center",
      "Old Town Elk Grove",
    ],
    clientTypes: ["offices", "medical facilities", "HOAs", "private schools", "retail", "churches"],
    nearby: ["sacramento", "rancho-cordova", "west-sacramento", "lodi"],
    lat: 38.4088,
    lng: -121.3716,
  },
  {
    name: "Rancho Cordova",
    slug: "rancho-cordova",
    county: "Sacramento County",
    region: "sacramento-area",
    zip: "95670",
    intro:
      "Drive the Highway 50 corridor through Rancho Cordova and you pass one of the largest suburban office markets in the Sacramento region — corporate campuses, insurance and healthcare back offices, and business parks stacked along Sunrise Boulevard, Zinfandel Drive, and White Rock Road. VSP Vision is headquartered here, and thousands of employees commute into the city's office parks daily. That workforce density is exactly why building managers in Rancho Cordova take janitorial service seriously: high-traffic lobbies, large break rooms, and multi-tenant suites demand consistent nightly attention. KCS delivers detailed, reliable commercial cleaning for offices, medical facilities, gyms, and industrial flex space throughout the corridor, with programs sized for everything from single suites to full campuses.",
    businessLandscape:
      "Rancho Cordova is an office-park city: large corporate campuses and multi-tenant mid-rises along the Highway 50 corridor, insurance and healthcare administrative operations, and substantial flex and light-industrial space toward Mather and White Rock Road. VSP Vision's headquarters anchors the employer base, while Sunrise Boulevard adds retail, auto dealers, and service businesses to the mix.",
    districts: [
      "Highway 50 office corridor",
      "Sunrise Boulevard",
      "Zinfandel Drive business parks",
      "White Rock Road corridor",
    ],
    landmarks: [
      "VSP Vision headquarters",
      "Mather Airport business area",
      "Capital Village",
    ],
    clientTypes: ["offices", "medical facilities", "property managers", "warehouses", "gyms"],
    nearby: ["sacramento", "folsom", "citrus-heights", "elk-grove"],
    lat: 38.5891,
    lng: -121.3027,
  },
  {
    name: "Folsom",
    slug: "folsom",
    county: "Sacramento County",
    region: "sacramento-area",
    zip: "95630",
    intro:
      "Folsom pairs a historic gold-rush downtown with one of Northern California's most significant tech campuses. Intel's Folsom site has anchored the city's white-collar economy for decades, joined by the California ISO grid-operations headquarters and a cluster of software and professional firms along Iron Point Road. Meanwhile, the Palladio at Broadstone and the Sutter Street Historic District keep retail, dining, and boutique office space busy seven days a week. KCS supports this range with commercial janitorial programs tuned to each environment — tech offices that expect polished, secure nightly service, medical suites near Mercy Hospital of Folsom, upscale retail centers, and the private schools and churches serving Folsom's family-oriented neighborhoods.",
    businessLandscape:
      "Folsom's commercial inventory runs from Intel's campus and Iron Point Road tech offices to lifestyle retail at the Palladio and East Bidwell Street's shopping corridors. Historic Sutter Street adds boutique storefronts and small offices, while medical space clusters near Mercy Hospital of Folsom. Well-kept business parks and an affluent customer base set a high bar for building presentation.",
    districts: [
      "Iron Point Road corridor",
      "East Bidwell Street",
      "Historic Sutter Street district",
      "Broadstone / Palladio area",
    ],
    landmarks: [
      "Intel Folsom campus",
      "Palladio at Broadstone",
      "California ISO headquarters",
      "Mercy Hospital of Folsom",
    ],
    clientTypes: ["offices", "medical facilities", "retail", "private schools", "churches", "gyms"],
    nearby: ["rancho-cordova", "roseville", "citrus-heights", "rocklin"],
    lat: 38.678,
    lng: -121.1761,
  },
  {
    name: "Citrus Heights",
    slug: "citrus-heights",
    county: "Sacramento County",
    region: "sacramento-area",
    zip: "95610",
    intro:
      "Retail built Citrus Heights, and retail still drives it. The Sunrise MarketPlace district surrounding Sunrise Mall remains one of the Sacramento region's busiest shopping destinations, and the long commercial strips of Greenback Lane and Auburn Boulevard carry hundreds of storefronts, restaurants, auto shops, medical offices, and service businesses. For property managers and franchise operators here, the daily grind of foot traffic makes dependable janitorial service a necessity rather than a luxury. KCS cleans retail centers, professional suites, gyms, churches, and dental and medical offices across Citrus Heights on schedules that work around business hours — nightly, early-morning, or weekend service — so storefronts open spotless and tenants stay satisfied.",
    businessLandscape:
      "Citrus Heights is dominated by retail and neighborhood commercial: the Sunrise MarketPlace district around Sunrise Mall, the Stock Ranch shopping area, and dense strip-center corridors along Greenback Lane, Auburn Boulevard, and Antelope Road. Between the shopping centers sit medical and dental suites, fitness clubs, churches, and small professional offices — mostly single-story, high-traffic properties managed by regional landlords.",
    districts: [
      "Sunrise MarketPlace",
      "Greenback Lane corridor",
      "Auburn Boulevard corridor",
      "Stock Ranch area",
    ],
    landmarks: [
      "Sunrise Mall",
      "Stock Ranch shopping center",
      "Rusch Park",
    ],
    clientTypes: ["retail", "medical facilities", "gyms", "churches", "offices", "property managers"],
    nearby: ["roseville", "folsom", "rancho-cordova", "sacramento"],
    lat: 38.7071,
    lng: -121.2811,
  },
  {
    name: "West Sacramento",
    slug: "west-sacramento",
    county: "Yolo County",
    region: "sacramento-area",
    zip: "95691",
    intro:
      "Across the river from the Capitol, West Sacramento has quietly become one of the region's most interesting commercial markets. The Bridge District's riverfront development sits alongside Sutter Health Park, home of the River Cats, while CalSTRS' headquarters tower anchors the waterfront skyline. Head south and west and the picture changes completely: the Port of West Sacramento, Harbor Boulevard's industrial corridor, and Southport's distribution and manufacturing facilities employ thousands. Raley's runs its corporate headquarters here too. KCS serves both faces of the city — polished office and headquarters space near the river, and the warehouses, food-production facilities, and industrial offices that keep the port economy moving — with janitorial programs matched to each building type.",
    businessLandscape:
      "West Sacramento splits between riverfront office and institutional space — CalSTRS headquarters, the Bridge District, civic buildings — and a deep industrial base around the Port of West Sacramento, Harbor Boulevard, and Southport. Food processing, distribution, and manufacturing dominate the industrial side, while Raley's corporate headquarters and growing mixed-use development add professional office demand.",
    districts: [
      "Bridge District",
      "Harbor Boulevard industrial corridor",
      "Port of West Sacramento area",
      "Southport",
    ],
    landmarks: [
      "CalSTRS headquarters",
      "Sutter Health Park",
      "Port of West Sacramento",
      "Raley's corporate headquarters",
    ],
    clientTypes: ["offices", "warehouses", "property managers", "gyms", "retail"],
    nearby: ["sacramento", "davis", "elk-grove", "vacaville"],
    lat: 38.5805,
    lng: -121.5302,
  },
  {
    name: "Davis",
    slug: "davis",
    county: "Yolo County",
    region: "sacramento-area",
    zip: "95616",
    intro:
      "A university town with a research economy, Davis supports a distinctive mix of commercial space that rewards a careful cleaning partner. Downtown Davis packs professional offices, clinics, and storefronts into a compact, walkable core, while the Second Street corridor and University Research Park host biotech labs, engineering firms, and technology companies that spun out of UC Davis. Sutter Davis Hospital anchors healthcare on the west side, and manufacturers like DMG MORI operate significant facilities near Interstate 80. KCS provides commercial janitorial service across this spectrum — office suites, research and lab-adjacent spaces, medical practices, private schools, and fitness facilities — with the consistency and attention to detail that Davis' educated, discerning tenant base expects.",
    businessLandscape:
      "Davis blends a dense downtown of small offices, clinics, and retail with research-driven commercial space along Second Street and in University Research Park. UC Davis shapes the entire market, feeding demand for lab, engineering, and startup office space. Sutter Davis Hospital and scattered medical suites round out healthcare, while South Davis adds neighborhood retail centers along Mace Boulevard.",
    districts: [
      "Downtown Davis",
      "Second Street corridor",
      "University Research Park",
      "South Davis / Mace Boulevard",
    ],
    landmarks: [
      "UC Davis campus",
      "Sutter Davis Hospital",
      "University Research Park",
      "DMG MORI manufacturing facility",
    ],
    clientTypes: ["offices", "medical facilities", "private schools", "gyms", "retail"],
    nearby: ["west-sacramento", "sacramento", "vacaville", "fairfield"],
    lat: 38.5449,
    lng: -121.7405,
  },
  {
    name: "Roseville",
    slug: "roseville",
    county: "Placer County",
    region: "sacramento-area",
    zip: "95661",
    intro:
      "Roseville is Placer County's commercial engine. The Westfield Galleria and the surrounding Roseville Parkway retail ring draw shoppers from across the region, while the Douglas Boulevard corridor functions as the area's financial district — miles of Class A office buildings housing banks, brokerages, law firms, and corporate offices, including Adventist Health's headquarters. Healthcare is a heavyweight here too, with Sutter Roseville and Kaiser Permanente Roseville operating major medical campuses. Between them, historic downtown on Vernon Street and the industrial legacy of the Union Pacific rail yard fill out a remarkably diverse commercial base. KCS cleans Roseville's offices, medical suites, retail centers, gyms, and churches with the professionalism this competitive market demands.",
    businessLandscape:
      "Roseville offers the most complete commercial mix in Placer County: Class A offices along Douglas Boulevard, regional retail centered on the Westfield Galleria and Fairway Drive, two major hospital campuses with surrounding medical office buildings, auto dealerships along the Highway 65 auto mall, and business parks in Stanford Ranch. Corporate tenants and healthcare systems set high standards for facility upkeep.",
    districts: [
      "Douglas Boulevard financial corridor",
      "Galleria / Roseville Parkway retail district",
      "Historic downtown (Vernon Street)",
      "Stanford Ranch business parks",
      "Highway 65 auto mall area",
    ],
    landmarks: [
      "Westfield Galleria at Roseville",
      "Sutter Roseville Medical Center",
      "Kaiser Permanente Roseville Medical Center",
      "Adventist Health headquarters",
    ],
    clientTypes: ["offices", "medical facilities", "retail", "auto dealerships", "gyms", "churches"],
    nearby: ["rocklin", "citrus-heights", "folsom", "lincoln"],
    lat: 38.7521,
    lng: -121.288,
  },
  {
    name: "Rocklin",
    slug: "rocklin",
    county: "Placer County",
    region: "sacramento-area",
    zip: "95765",
    intro:
      "Education and clean, modern business parks give Rocklin its commercial personality. Sierra College's main campus and William Jessup University bring thousands of students and staff into the city daily, while the Stanford Ranch and Blue Oaks areas host professional offices, medical suites, and light-industrial flex buildings in well-landscaped parks off Highway 65. Retail thrives at Rocklin Crossings and along the Granite Drive and Sunset Boulevard corridors. Because so much of Rocklin's commercial stock is newer construction, owners and property managers expect it to stay looking new — which is where KCS comes in. We deliver meticulous recurring janitorial service for offices, medical practices, private schools, churches, and fitness centers throughout Rocklin.",
    businessLandscape:
      "Rocklin's commercial base is newer and suburban: business parks in Stanford Ranch and along Blue Oaks Boulevard, retail power centers like Rocklin Crossings off Interstate 80, medical and dental suites, and two college campuses. Flex-industrial space serves contractors and light manufacturers, while churches, private schools, and fitness clubs serve the city's fast-growing residential base.",
    districts: [
      "Stanford Ranch",
      "Blue Oaks Boulevard corridor",
      "Granite Drive corridor",
      "Sunset Boulevard commercial area",
    ],
    landmarks: [
      "Sierra College",
      "William Jessup University",
      "Rocklin Crossings",
    ],
    clientTypes: ["offices", "private schools", "medical facilities", "churches", "gyms", "retail"],
    nearby: ["roseville", "lincoln", "folsom", "citrus-heights"],
    lat: 38.7907,
    lng: -121.2358,
  },
  {
    name: "Lincoln",
    slug: "lincoln",
    county: "Placer County",
    region: "sacramento-area",
    zip: "95648",
    intro:
      "Once a small clay-manufacturing town — Gladding McBean's historic terra cotta works still operates downtown — Lincoln has become one of Placer County's fastest-growing communities, and its commercial services are racing to keep up. The Highway 65 and Lincoln Boulevard corridors carry new retail centers and medical offices, Twelve Bridges has emerged as a hub for professional suites and neighborhood commercial, and Thunder Valley Casino Resort at the city's edge is one of the area's largest employers. Sun City Lincoln Hills adds something distinctive: a large active-adult community with clubhouses, fitness facilities, and amenity buildings that need consistent professional care. KCS serves Lincoln's offices, medical suites, HOAs, churches, and retail centers with dependable scheduled janitorial service.",
    businessLandscape:
      "Lincoln's commercial inventory is largely new: retail and medical development along Highway 65 and in Twelve Bridges, small professional offices downtown near Fifth Street, and the industrial legacy of Gladding McBean. Sun City Lincoln Hills' amenity centers and the area's growing roster of HOA-managed facilities create steady demand for common-area and clubhouse cleaning, alongside churches and neighborhood retail.",
    districts: [
      "Downtown Lincoln (Fifth Street area)",
      "Twelve Bridges",
      "Highway 65 / Lincoln Boulevard corridor",
    ],
    landmarks: [
      "Thunder Valley Casino Resort",
      "Gladding McBean terra cotta factory",
      "Sun City Lincoln Hills",
    ],
    clientTypes: ["HOAs", "offices", "medical facilities", "churches", "retail"],
    nearby: ["rocklin", "roseville", "citrus-heights"],
    lat: 38.8916,
    lng: -121.293,
  },

  // ─────────────────────────────────────────────
  // CENTRAL VALLEY
  // ─────────────────────────────────────────────
  {
    name: "Stockton",
    slug: "stockton",
    county: "San Joaquin County",
    region: "central-valley",
    zip: "95202",
    intro:
      "From the deep-water Port of Stockton to the storefronts of the Miracle Mile, Stockton's commercial landscape covers more ground than almost any city in the Central Valley. The downtown waterfront holds government buildings, banks, and the Stockton Arena; March Lane serves as the city's modern office corridor; and Pacific Avenue connects the Miracle Mile's independent businesses to the retail concentration around Weberstown and Sherwood malls. Healthcare is a major employer, led by St. Joseph's Medical Center, and University of the Pacific adds an academic anchor. KCS provides commercial janitorial service across all of it — offices, medical facilities, churches, schools, gyms, and the warehouses and distribution buildings that trade on Stockton's port and freeway access.",
    businessLandscape:
      "Stockton mixes a government-and-banking downtown, the March Lane office corridor, and heavy retail along Pacific Avenue with one of Northern California's most important industrial bases: the Port of Stockton and distribution parks feeding Interstate 5 and Highway 99. St. Joseph's Medical Center anchors a substantial healthcare sector, and University of the Pacific drives steady institutional and neighborhood commercial activity.",
    districts: [
      "Downtown / waterfront",
      "Miracle Mile (Pacific Avenue)",
      "March Lane office corridor",
      "Port of Stockton industrial area",
      "Weberstown / Sherwood Mall retail district",
    ],
    landmarks: [
      "Port of Stockton",
      "St. Joseph's Medical Center",
      "University of the Pacific",
      "Stockton Arena",
    ],
    clientTypes: ["offices", "medical facilities", "warehouses", "churches", "private schools", "property managers"],
    nearby: ["lodi", "manteca", "tracy", "modesto"],
    lat: 37.9577,
    lng: -121.2908,
  },
  {
    name: "Lodi",
    slug: "lodi",
    county: "San Joaquin County",
    region: "central-valley",
    zip: "95240",
    intro:
      "Wine country meets working city in Lodi. The surrounding appellation has made the town a tasting-room and hospitality destination, and downtown's School Street reflects it — restored storefronts, restaurants, and professional offices in a walkable historic core. But Lodi's commercial economy runs deeper: Kettleman Lane and Cherokee Lane carry the city's retail centers, auto dealers, and service businesses, food processors like Pacific Coast Producers are headquartered here, and Adventist Health Lodi Memorial anchors a growing medical sector. KCS gives Lodi businesses a janitorial partner that matches the town's standards — thorough, consistent cleaning for offices, medical and dental suites, churches, retail centers, and the production and warehouse facilities tied to the region's agricultural economy.",
    businessLandscape:
      "Lodi's commercial mix pairs a historic downtown of shops, tasting rooms, and small offices with practical corridors: Kettleman Lane's retail centers, Cherokee Lane's auto and service businesses, and an east-side industrial base built on wine and food processing. Adventist Health Lodi Memorial and its surrounding medical offices are a major presence, alongside churches and schools serving a close-knit community.",
    districts: [
      "Downtown Lodi (School Street)",
      "Kettleman Lane corridor",
      "Cherokee Lane corridor",
      "East side industrial area",
    ],
    landmarks: [
      "Adventist Health Lodi Memorial",
      "Pacific Coast Producers headquarters",
      "Downtown School Street district",
    ],
    clientTypes: ["offices", "medical facilities", "churches", "retail", "warehouses", "auto dealerships"],
    nearby: ["stockton", "elk-grove", "manteca", "sacramento"],
    lat: 38.1341,
    lng: -121.2722,
  },
  {
    name: "Tracy",
    slug: "tracy",
    county: "San Joaquin County",
    region: "central-valley",
    zip: "95376",
    intro:
      "Logistics put Tracy on the map. Positioned where Interstates 205, 580, and 5 converge, the city has become one of Northern California's premier distribution hubs — Amazon runs a massive fulfillment center here, Safeway operates a major Northern California distribution complex, and the International Park of Commerce continues to add millions of square feet of modern warehouse space. Those facilities employ thousands, and they need more than dock sweeping: offices, break rooms, restrooms, and locker areas inside distribution buildings take a beating every shift. KCS handles that work, along with janitorial service for Tracy's downtown offices, the West Valley Mall retail area, medical practices near Sutter Tracy Community Hospital, churches, and gyms across town.",
    businessLandscape:
      "Tracy is defined by industrial big-box: fulfillment and distribution centers in the Northeast Industrial Area and the International Park of Commerce, operated by national logistics, grocery, and e-commerce tenants. Supporting that base are downtown's small offices along Central Avenue, retail at West Valley Mall and Naglee Road, Sutter Tracy Community Hospital's medical cluster, and the churches and schools of a fast-growing commuter city.",
    districts: [
      "International Park of Commerce",
      "Northeast Industrial Area",
      "Downtown Tracy (Central Avenue / 10th Street)",
      "Naglee Road / West Valley Mall retail area",
    ],
    landmarks: [
      "Amazon fulfillment center",
      "Safeway distribution center",
      "West Valley Mall",
      "Sutter Tracy Community Hospital",
    ],
    clientTypes: ["warehouses", "offices", "medical facilities", "retail", "gyms", "churches"],
    nearby: ["manteca", "stockton", "livermore", "dublin"],
    lat: 37.7397,
    lng: -121.4252,
  },
  {
    name: "Manteca",
    slug: "manteca",
    county: "San Joaquin County",
    region: "central-valley",
    zip: "95336",
    intro:
      "Sitting at the crossroads of Highway 99 and the 120 Bypass, Manteca has turned freeway access into commercial momentum. The Promenade Shops at Orchard Valley — anchored by Bass Pro Shops — and Great Wolf Lodge draw visitors from across the Valley, while Kaiser Permanente's Manteca Medical Center makes the city a healthcare hub for southern San Joaquin County. Downtown along Main Street and Yosemite Avenue keeps a core of local offices and storefronts, and the Spreckels Park business area, built on the site of the old sugar plant, hosts distribution and commercial users. KCS supports Manteca's growth with dependable janitorial programs for medical facilities, offices, retail centers, churches, gyms, and warehouse operations throughout the city.",
    businessLandscape:
      "Manteca's commercial stock centers on regional draws — the Promenade Shops, Great Wolf Lodge, and the Highway 99 retail interchange — plus the Kaiser Permanente Manteca Medical Center campus and its surrounding medical offices. Spreckels Park and the airport-adjacent industrial areas hold distribution and light-industrial tenants, while downtown Main Street and Yosemite Avenue carry local offices, services, and churches.",
    districts: [
      "Downtown Manteca (Main Street / Yosemite Avenue)",
      "Spreckels Park business area",
      "Highway 99 / 120 Bypass retail corridor",
      "Promenade Shops area",
    ],
    landmarks: [
      "Kaiser Permanente Manteca Medical Center",
      "The Promenade Shops at Orchard Valley",
      "Great Wolf Lodge",
    ],
    clientTypes: ["medical facilities", "retail", "offices", "warehouses", "churches", "gyms"],
    nearby: ["stockton", "tracy", "modesto", "lodi"],
    lat: 37.7974,
    lng: -121.2161,
  },
  {
    name: "Modesto",
    slug: "modesto",
    county: "Stanislaus County",
    region: "central-valley",
    zip: "95354",
    intro:
      "Agriculture built Modesto's fortunes, but its commercial economy today is far broader than the orchards that surround it. E. & J. Gallo Winery — the world's largest winemaker — is headquartered here, as is the Save Mart supermarket company, and downtown's Tenth Street corridor around the Gallo Center for the Arts holds banks, law firms, county offices, and restaurants. North Modesto's McHenry Avenue corridor and the Vintage Faire Mall area along Sisk Road form the retail spine, while Doctors Medical Center and Memorial Medical Center make healthcare one of the county's largest employment sectors. KCS brings professional janitorial service to this full landscape: corporate and professional offices, medical facilities, churches, private schools, retail centers, and the food-processing and warehouse operations that power Stanislaus County.",
    businessLandscape:
      "Modesto combines a civic-and-professional downtown, the McHenry Avenue and Vintage Faire retail corridors, and two major hospital campuses with a deep agribusiness and food-processing base, including the Beard Industrial District. Corporate headquarters for Gallo and Save Mart lend the market unusual white-collar depth for the Valley, and churches, schools, and medical offices are spread throughout the city.",
    districts: [
      "Downtown Modesto (Tenth Street corridor)",
      "McHenry Avenue corridor",
      "Vintage Faire / Sisk Road retail area",
      "Beard Industrial District",
    ],
    landmarks: [
      "E. & J. Gallo Winery headquarters",
      "Gallo Center for the Arts",
      "Doctors Medical Center",
      "Memorial Medical Center",
      "Vintage Faire Mall",
    ],
    clientTypes: ["offices", "medical facilities", "churches", "private schools", "warehouses", "retail"],
    nearby: ["manteca", "stockton", "tracy", "lodi"],
    lat: 37.6391,
    lng: -120.9969,
  },
];
