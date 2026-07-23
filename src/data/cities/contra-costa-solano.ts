import type { City } from "../types";

export const cities: City[] = [
  // ── Contra Costa County ──────────────────────────────────────────────
  {
    name: "Pleasant Hill",
    slug: "pleasant-hill",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94523",
    intro:
      "Pleasant Hill is home base for KCS, and we know its commercial corridors block by block. From the shops and offices around Downtown Pleasant Hill on Crescent Drive to the medical suites, banks, and fitness studios lining Contra Costa Boulevard, this is a city of tenant-facing businesses where appearances drive foot traffic. Diablo Valley College anchors a steady daytime population, and the professional offices along Gregory Lane and Monument Boulevard serve clients who notice details. When a dental office, boutique gym, or property-managed retail center in Pleasant Hill needs nightly janitorial service, we can be on site in minutes — no long drives, no missed windows, just consistent local crews.",
    businessLandscape:
      "Pleasant Hill's commercial stock is dominated by retail centers, low-rise professional office buildings, medical and dental suites, and service businesses strung along Contra Costa Boulevard and Monument Boulevard. Downtown Pleasant Hill adds restaurants, a cinema, and specialty retail, while smaller office parks near Gregory Lane and Taylor Boulevard house accountants, therapists, and insurance agencies that rely on recurring janitorial care.",
    districts: [
      "Downtown Pleasant Hill (Crescent Drive)",
      "Contra Costa Boulevard corridor",
      "Monument Boulevard corridor",
      "Gregory Lane professional offices",
    ],
    landmarks: [
      "Diablo Valley College",
      "Downtown Pleasant Hill shopping district",
      "Crossroads Shopping Center",
    ],
    clientTypes: ["offices", "medical facilities", "retail", "gyms", "property managers", "churches"],
    nearby: ["concord", "walnut-creek", "martinez", "lafayette"],
    lat: 37.948,
    lng: -122.0608,
  },
  {
    name: "Concord",
    slug: "concord",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94520",
    intro:
      "As the largest city in Contra Costa County, Concord carries a serious commercial load — and a serious cleaning load to match. The Sunvalley Shopping Center area draws thousands of daily visitors, Todos Santos Plaza anchors a downtown of restaurants and offices, and the Clayton Road and Monument corridors are packed with auto shops, medical clinics, and neighborhood retail. Add John Muir Health's Concord Medical Center, office buildings near the Concord BART stations, and light industrial space around Buchanan Field, and you have facility managers juggling everything from lobby floors to exam rooms. KCS provides dependable nightly and day-porter janitorial service across Concord, scaled to buildings large and small.",
    businessLandscape:
      "Concord mixes regional retail around Sunvalley Shopping Center and The Willows, mid-rise office buildings near downtown and the BART corridor, major medical campuses led by John Muir Health, and light industrial and flex space near Buchanan Field Airport. The Monument and Clayton Road corridors add hundreds of storefronts, clinics, gyms, and service businesses that need recurring commercial cleaning.",
    districts: [
      "Todos Santos Plaza / downtown Concord",
      "Sunvalley Shopping Center area",
      "Clayton Road corridor",
      "Monument Boulevard corridor",
      "Buchanan Field industrial area",
    ],
    landmarks: [
      "Sunvalley Shopping Center",
      "John Muir Health Concord Medical Center",
      "Concord Pavilion",
      "Buchanan Field Airport",
    ],
    clientTypes: ["offices", "medical facilities", "retail", "gyms", "auto dealerships", "property managers"],
    nearby: ["pleasant-hill", "walnut-creek", "martinez", "pittsburg"],
    lat: 37.9779,
    lng: -122.0311,
  },
  {
    name: "Walnut Creek",
    slug: "walnut-creek",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94596",
    intro:
      "Few East Bay cities set a higher bar for presentation than Walnut Creek. Broadway Plaza's flagship retailers, the restaurants and boutiques of the downtown core, and the Class A office buildings along North Main Street and Ygnacio Valley Road all compete on polish — smudged glass and dull lobby floors simply do not fly here. East of downtown, the Shadelands business park houses medical, professional, and educational tenants, while John Muir Medical Center runs one of the region's busiest hospital campuses. KCS delivers janitorial programs tuned to this market: meticulous detail work, reliable after-hours crews, and day porters who keep high-traffic common areas presentable from open to close.",
    businessLandscape:
      "Walnut Creek's commercial mix skews upscale: premium retail at Broadway Plaza and throughout downtown, multi-story professional and financial office buildings near the BART station, extensive medical office space surrounding John Muir Medical Center, and the Shadelands office park on the east side. Fitness studios, private schools, and professionally managed mixed-use buildings round out a market that expects white-glove janitorial standards.",
    districts: [
      "Broadway Plaza",
      "Downtown Walnut Creek (North Main Street)",
      "Shadelands business park",
      "Ygnacio Valley Road corridor",
    ],
    landmarks: [
      "Broadway Plaza",
      "John Muir Medical Center, Walnut Creek",
      "Lesher Center for the Arts",
    ],
    clientTypes: ["offices", "retail", "medical facilities", "gyms", "private schools", "property managers"],
    nearby: ["pleasant-hill", "concord", "lafayette", "danville"],
    lat: 37.9101,
    lng: -122.0652,
  },
  {
    name: "Martinez",
    slug: "martinez",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94553",
    intro:
      "Martinez wears two hats: county seat and working waterfront town. Government offices and courts tied to Contra Costa County's administration cluster downtown, filling Main Street's cafes and professional suites with steady weekday traffic. Contra Costa Regional Medical Center serves patients around the clock on Alhambra Avenue, and the refinery on the city's edge supports contractors and industrial services throughout the area. That blend — public buildings, healthcare, legal offices, and hardworking industrial space — demands a janitorial partner comfortable with everything from courthouse-adjacent professional offices to high-traffic clinic floors. KCS crews serve Martinez nightly from our Pleasant Hill base, just a short drive down Highway 4.",
    businessLandscape:
      "As the county seat, Martinez concentrates government buildings, courts, and law offices downtown, alongside Main Street restaurants and retail. Alhambra Avenue carries medical offices anchored by Contra Costa Regional Medical Center, while Pacheco Boulevard and the waterfront support industrial yards, contractors, and refinery-related services. Churches, small professional suites, and civic facilities fill out a practical, service-oriented commercial base.",
    districts: [
      "Downtown Martinez (Main Street)",
      "Alhambra Avenue corridor",
      "Pacheco Boulevard corridor",
      "Martinez waterfront / industrial area",
    ],
    landmarks: [
      "Contra Costa County administration and courts",
      "Contra Costa Regional Medical Center",
      "John Muir National Historic Site",
      "Martinez Amtrak Station",
    ],
    clientTypes: ["offices", "medical facilities", "churches", "warehouses", "property managers"],
    nearby: ["pleasant-hill", "concord", "benicia", "hercules"],
    lat: 38.0194,
    lng: -122.1341,
  },
  {
    name: "Lafayette",
    slug: "lafayette",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94549",
    intro:
      "Along Mt. Diablo Boulevard, Lafayette packs an outsized concentration of boutique commerce into a small, affluent downtown. Wealth managers, law practices, dental and dermatology offices, fitness studios, and destination restaurants occupy low-rise buildings and centers like La Fiesta Square, serving a clientele that expects the same polish inside a lobby as on a storefront window. Private schools and well-kept churches add to the roster of facilities that cannot afford a sloppy first impression. KCS gives Lafayette businesses discreet, consistent janitorial service — evening crews that work around late closings, careful treatment of quality finishes, and the attention to detail this downtown quietly demands.",
    businessLandscape:
      "Lafayette's commercial property is concentrated along the Mt. Diablo Boulevard corridor: boutique retail and restaurant space, small professional office buildings filled with financial, legal, and medical practices, and neighborhood centers such as La Fiesta Square. There are no big industrial parks here — the market is upscale, low-rise, and owner-conscious, with private schools, churches, and fitness studios completing the mix.",
    districts: [
      "Downtown Lafayette (Mt. Diablo Boulevard)",
      "La Fiesta Square",
      "Lafayette BART station area",
    ],
    landmarks: [
      "La Fiesta Square",
      "Lafayette Reservoir",
      "Lafayette BART Station",
    ],
    clientTypes: ["offices", "medical facilities", "retail", "private schools", "churches", "gyms"],
    nearby: ["walnut-creek", "pleasant-hill", "martinez", "danville"],
    lat: 37.8858,
    lng: -122.118,
  },
  {
    name: "Pittsburg",
    slug: "pittsburg",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94565",
    intro:
      "Industry built Pittsburg, and industry still shapes its commercial cleaning needs. Manufacturing and processing facilities along the waterfront and the Pittsburg-Antioch Highway — including Dow's longtime chemical plant — sit alongside contractor yards, warehouses, and distribution space where break rooms, offices, and restrooms take a beating every shift. Meanwhile, Old Town's Railroad Avenue is seeing steady reinvestment in restaurants and storefronts, Los Medanos College serves thousands of students, and retail centers along Century Boulevard and Loveridge Road keep East County shoppers close to home. KCS handles both sides of Pittsburg: durable, no-nonsense janitorial for industrial offices and reliable nightly service for retail, medical, and civic facilities.",
    businessLandscape:
      "Pittsburg pairs heavy industrial and manufacturing property along the waterfront and Loveridge Road corridor with community-serving commercial space: retail centers, medical and dental clinics, churches, and the revitalizing Old Town district on Railroad Avenue. Warehouses, contractor facilities, and flex space dominate square footage, while Los Medanos College and civic buildings add institutional facilities to the mix.",
    districts: [
      "Old Town Pittsburg (Railroad Avenue)",
      "Loveridge Road industrial corridor",
      "Pittsburg-Antioch Highway corridor",
      "Century Boulevard retail area",
    ],
    landmarks: [
      "Dow Chemical Pittsburg plant",
      "Los Medanos College",
      "California Theatre",
      "Pittsburg Marina",
    ],
    clientTypes: ["warehouses", "offices", "retail", "churches", "medical facilities"],
    nearby: ["antioch", "concord", "oakley", "brentwood"],
    lat: 38.028,
    lng: -121.8847,
  },
  {
    name: "Antioch",
    slug: "antioch",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94509",
    intro:
      "East Contra Costa's population center, Antioch supports a broad commercial base stretched between two anchors: the historic Rivertown district on the San Joaquin waterfront and the newer retail spine along Lone Tree Way. Kaiser Permanente's Antioch Medical Center and Sutter Delta Medical Center make healthcare one of the city's biggest employers, filling surrounding blocks with clinics and medical offices that require disinfection-grade cleaning. Shopping centers like Slatten Ranch and Somersville Towne Center see heavy daily traffic, and the Antioch BART station has pulled more commuters — and commuter-serving businesses — eastward. KCS supports Antioch facility managers with dependable janitorial crews sized for everything from single suites to multi-tenant centers.",
    businessLandscape:
      "Antioch's commercial inventory spans big-box and strip retail along Lone Tree Way and Somersville Road, two full hospital campuses with satellite medical offices, churches and private schools serving a growing population, and older storefront and office stock in the Rivertown district. Light industrial and warehouse space sits along Wilbur Avenue and the waterfront, rounding out a diverse East County market.",
    districts: [
      "Rivertown / historic downtown",
      "Lone Tree Way retail corridor",
      "Somersville Road corridor",
      "Slatten Ranch area",
      "Wilbur Avenue industrial corridor",
    ],
    landmarks: [
      "Kaiser Permanente Antioch Medical Center",
      "Sutter Delta Medical Center",
      "Somersville Towne Center",
      "Antioch BART Station",
    ],
    clientTypes: ["medical facilities", "retail", "churches", "offices", "warehouses", "property managers"],
    nearby: ["pittsburg", "oakley", "brentwood", "concord"],
    lat: 38.0049,
    lng: -121.8058,
  },
  {
    name: "Brentwood",
    slug: "brentwood",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94513",
    intro:
      "Brentwood has grown from farm town to one of the East Bay's fastest-rising suburbs, and its commercial real estate has grown with it. The Streets of Brentwood lifestyle center brings national retailers and restaurants to Sand Creek Road, downtown Brentwood mixes local shops with professional offices around City Park, and new medical space — including John Muir Health's outpatient campus — keeps pace with thousands of new rooftops. HOA-managed communities, private schools, churches, and fitness clubs all add to the demand for dependable facility care. KCS brings big-market janitorial standards to Brentwood businesses: trained crews, consistent scheduling, and quality checks that keep growing facilities looking their best.",
    businessLandscape:
      "Brentwood's commercial mix is retail-forward and residential-adjacent: The Streets of Brentwood and Sand Creek Road centers, a walkable downtown of shops and offices, expanding medical and dental space led by John Muir Health's outpatient center, and a large base of HOA-managed communities. Churches, private schools, gyms, and small professional suites serve one of Contra Costa's youngest, fastest-growing populations.",
    districts: [
      "Downtown Brentwood",
      "The Streets of Brentwood / Sand Creek Road",
      "Brentwood Boulevard corridor",
      "Balfour Road corridor",
    ],
    landmarks: [
      "The Streets of Brentwood",
      "John Muir Health Outpatient Center, Brentwood",
      "Los Medanos College Brentwood Center",
    ],
    clientTypes: ["retail", "medical facilities", "HOAs", "churches", "private schools", "gyms"],
    nearby: ["oakley", "antioch", "pittsburg"],
    lat: 37.9319,
    lng: -121.6958,
  },
  {
    name: "Oakley",
    slug: "oakley",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94561",
    intro:
      "Sitting along Highway 4 between Antioch and the Delta, Oakley is a young city where commercial services are catching up to a decade of residential growth. Main Street carries the city's retail centers, restaurants, banks, and medical suites, while the Laurel Road interchange has become the hub for newer shopping development. The civic center anchors downtown, churches and dental offices serve expanding neighborhoods, and HOA-managed communities keep multiplying east toward Big Break Regional Shoreline. For these facilities, big-company janitorial service rarely reaches this far east with any consistency — KCS does. Our crews cover Oakley on regular nightly routes, giving local businesses the reliability their growth deserves.",
    businessLandscape:
      "Oakley's commercial property is concentrated along Main Street (Highway 4) and the Laurel Road interchange: neighborhood shopping centers, restaurants, banks, medical and dental suites, and the downtown civic center area. HOA-managed communities make up a substantial share of managed property, and churches, childcare facilities, and small professional offices serve a fast-growing residential base with limited local supply of commercial services.",
    districts: [
      "Main Street corridor (Highway 4)",
      "Laurel Road retail area",
      "Downtown Oakley civic center area",
    ],
    landmarks: [
      "Oakley Civic Center",
      "Big Break Regional Shoreline",
      "Oakley Recreation Center",
    ],
    clientTypes: ["retail", "HOAs", "churches", "medical facilities", "offices"],
    nearby: ["antioch", "brentwood", "pittsburg"],
    lat: 38.0075,
    lng: -121.7124,
  },
  {
    name: "Richmond",
    slug: "richmond",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94804",
    intro:
      "Richmond runs on logistics, industry, and healthcare — sectors where cleaning is about function as much as looks. The Port of Richmond and the Richmond Parkway corridor move goods through warehouses and distribution facilities whose offices and break areas need tough, scheduled janitorial care. Kaiser Permanente's Richmond Medical Center anchors the healthcare footprint, Marina Bay hosts modern office and R&D space on the waterfront, and Point Richmond's historic core supports professional offices and restaurants with real character. From Macdonald Avenue storefronts downtown to the Hilltop district's commercial centers, KCS serves Richmond facilities with crews experienced across industrial, medical, and office environments alike.",
    businessLandscape:
      "Richmond's commercial base is among the most industrial in the East Bay: port terminals, warehouses, and distribution space along Richmond Parkway and the waterfront, plus the Chevron refinery's contractor ecosystem. Marina Bay adds waterfront office and lab space, Kaiser Permanente anchors medical facilities, and the Hilltop district, downtown Macdonald Avenue, and Point Richmond carry retail, civic, and professional office stock.",
    districts: [
      "Marina Bay",
      "Point Richmond",
      "Downtown Richmond (Macdonald Avenue)",
      "Hilltop district",
      "Richmond Parkway industrial corridor",
    ],
    landmarks: [
      "Port of Richmond",
      "Kaiser Permanente Richmond Medical Center",
      "Chevron Richmond Refinery",
      "Rosie the Riveter WWII Home Front National Historical Park",
    ],
    clientTypes: ["warehouses", "offices", "medical facilities", "churches", "retail", "property managers"],
    nearby: ["el-cerrito", "pinole", "hercules", "berkeley"],
    lat: 37.9358,
    lng: -122.3477,
  },
  {
    name: "El Cerrito",
    slug: "el-cerrito",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94530",
    intro:
      "Nearly every commercial address in El Cerrito touches San Pablo Avenue, the spine that runs the full length of this compact West County city. Two BART stations — El Cerrito Plaza and El Cerrito del Norte — bookend the corridor, feeding daily traffic into El Cerrito Plaza's shops, neighborhood restaurants, medical and dental offices, and the small professional buildings in between. Mixed-use development around both stations keeps adding ground-floor retail under managed residential floors, a property type where common-area cleanliness is written into every lease. KCS provides El Cerrito businesses and property managers with steady, detail-focused janitorial service that fits the corridor's mix of storefronts, clinics, and offices.",
    businessLandscape:
      "El Cerrito is a corridor city: retail, restaurants, banks, medical and dental suites, and small offices line San Pablo Avenue, anchored by the El Cerrito Plaza shopping center and two BART stations. Newer transit-oriented mixed-use buildings pair ground-floor commercial with managed residential above, and churches, fitness studios, and the historic Cerrito Theater complete a compact, walkable commercial mix.",
    districts: [
      "San Pablo Avenue corridor",
      "El Cerrito Plaza area",
      "El Cerrito del Norte station area",
    ],
    landmarks: [
      "El Cerrito Plaza",
      "El Cerrito del Norte BART Station",
      "Cerrito Theater",
    ],
    clientTypes: ["retail", "offices", "medical facilities", "property managers", "churches"],
    nearby: ["richmond", "berkeley", "pinole", "emeryville"],
    lat: 37.9161,
    lng: -122.3108,
  },
  {
    name: "Hercules",
    slug: "hercules",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94547",
    intro:
      "Best known as the headquarters city of Bio-Rad Laboratories, Hercules combines life-science pedigree with a fast-changing retail landscape on the San Pablo Bay shoreline. The Sycamore Crossing development has brought new shopping and dining to the center of town, the waterfront district continues to add mixed-use projects near the planned transit hub, and San Pablo Avenue links neighborhood centers serving both Hercules and neighboring Pinole. Professional offices, medical suites, HOA-managed communities, and churches fill out the commercial roster. KCS serves Hercules with janitorial programs that range from standard office care to the tighter protocols lab-adjacent and medical tenants expect.",
    businessLandscape:
      "Hercules centers on the Bio-Rad Laboratories campus, its largest employer, surrounded by newer retail at Sycamore Crossing, neighborhood centers along San Pablo Avenue, and mixed-use development in the Bayfront district. Medical and dental offices, HOA-managed communities, and churches make up much of the remaining commercial base in this compact, well-kept bayside city.",
    districts: [
      "Sycamore Crossing",
      "Hercules Bayfront / waterfront district",
      "San Pablo Avenue corridor",
    ],
    landmarks: [
      "Bio-Rad Laboratories headquarters",
      "Sycamore Crossing shopping center",
      "Hercules Transit Center",
    ],
    clientTypes: ["offices", "retail", "medical facilities", "HOAs", "churches"],
    nearby: ["pinole", "richmond", "martinez", "vallejo"],
    lat: 38.0172,
    lng: -122.2886,
  },
  {
    name: "Pinole",
    slug: "pinole",
    county: "Contra Costa County",
    region: "contra-costa",
    zip: "94564",
    intro:
      "Pinole punches above its size in retail, thanks to the Pinole Vista shopping area off Fitzgerald Drive and Interstate 80 — a regional draw of big-box stores, restaurants, and service businesses that stay busy seven days a week. Old Town Pinole on San Pablo Avenue offers the opposite charm: historic storefronts, local eateries, and small offices near Fernandez Park. Between the two, Appian Way carries medical and dental suites, banks, and neighborhood centers serving West County families. High-traffic retail is unforgiving on floors, restrooms, and entries, and that is exactly where KCS earns its keep — scheduled janitorial service that keeps Pinole's busiest commercial spaces genuinely clean, not just tidied.",
    businessLandscape:
      "Retail leads in Pinole: the Pinole Vista centers along Fitzgerald Drive capture I-80 shoppers with big-box anchors and restaurant pads, while Old Town's San Pablo Avenue supports smaller storefronts and offices. Appian Way adds medical and dental suites, banks, and neighborhood retail. Churches and HOA-managed properties complete a compact commercial base oriented around daily consumer traffic.",
    districts: [
      "Pinole Vista / Fitzgerald Drive retail area",
      "Old Town Pinole (San Pablo Avenue)",
      "Appian Way corridor",
    ],
    landmarks: [
      "Pinole Vista Crossing",
      "Old Town Pinole",
      "Fernandez Park",
    ],
    clientTypes: ["retail", "medical facilities", "offices", "churches", "HOAs"],
    nearby: ["hercules", "richmond", "el-cerrito", "vallejo"],
    lat: 38.0044,
    lng: -122.2989,
  },

  // ── Tri-Valley ───────────────────────────────────────────────────────
  {
    name: "Danville",
    slug: "danville",
    county: "Contra Costa County",
    region: "tri-valley",
    zip: "94526",
    intro:
      "Downtown Danville's Hartz Avenue is one of the East Bay's most polished main streets — boutiques, salons, restaurants, and professional suites where owners sweat every detail of presentation. East of town, Blackhawk Plaza serves an upscale clientele beside the Blackhawk Museum, and the Sycamore Valley and Camino Ramon corridors house financial advisors, medical and dental practices, and real estate offices serving the San Ramon Valley. Private schools such as The Athenian School and well-attended churches add institutional facilities to the mix. KCS gives Danville businesses janitorial service that matches the setting: careful crews, spotless glass and floors, and standards high enough for the valley's most image-conscious addresses.",
    businessLandscape:
      "Danville's commercial property is boutique in scale and premium in finish: downtown retail and restaurant space along Hartz Avenue, the Blackhawk Plaza lifestyle center, and low-rise professional buildings housing wealth management, legal, medical, and real estate practices. Private schools, churches, fitness studios, and HOA-managed communities round out a market defined by high expectations rather than high square footage.",
    districts: [
      "Downtown Danville (Hartz Avenue)",
      "Blackhawk Plaza",
      "Sycamore Valley Road corridor",
      "The Livery & Mercantile area",
    ],
    landmarks: [
      "Blackhawk Plaza",
      "Blackhawk Museum",
      "Village Theatre & Art Gallery",
      "The Athenian School",
    ],
    clientTypes: ["offices", "retail", "private schools", "churches", "medical facilities", "HOAs"],
    nearby: ["san-ramon", "walnut-creek", "lafayette", "dublin"],
    lat: 37.8216,
    lng: -121.9999,
  },
  {
    name: "San Ramon",
    slug: "san-ramon",
    county: "Contra Costa County",
    region: "tri-valley",
    zip: "94583",
    intro:
      "Bishop Ranch makes San Ramon one of Northern California's premier suburban office markets — a business park of several hundred companies, from Fortune 500 tenants to fast-growing professional firms, wrapped around the shops and restaurants of City Center Bishop Ranch. Corporate campuses of this caliber run on facilities standards: gleaming lobbies, spotless conference rooms, restrooms serviced on schedule. Beyond the Ranch, the Crow Canyon corridor carries medical offices and neighborhood retail, San Ramon Regional Medical Center anchors healthcare, and Dougherty Valley's growth keeps adding schools, churches, and HOA-managed amenities. KCS delivers the consistent, professional janitorial service San Ramon's corporate tenants and property managers require, night after night.",
    businessLandscape:
      "San Ramon is defined by Class A office space: Bishop Ranch's vast business park and the retail-dining core of City Center Bishop Ranch, alongside Chevron's longtime San Ramon campus. The Crow Canyon Road corridor adds medical suites, fitness clubs, and neighborhood retail; San Ramon Regional Medical Center anchors healthcare; and Dougherty Valley contributes schools, churches, and extensive HOA-managed community facilities.",
    districts: [
      "Bishop Ranch business park",
      "City Center Bishop Ranch",
      "Crow Canyon Road corridor",
      "Dougherty Valley",
    ],
    landmarks: [
      "Bishop Ranch",
      "City Center Bishop Ranch",
      "San Ramon Regional Medical Center",
      "Chevron San Ramon campus",
    ],
    clientTypes: ["offices", "medical facilities", "retail", "gyms", "HOAs", "property managers"],
    nearby: ["danville", "dublin", "pleasanton", "walnut-creek"],
    lat: 37.7799,
    lng: -121.978,
  },
  {
    name: "Dublin",
    slug: "dublin",
    county: "Alameda County",
    region: "tri-valley",
    zip: "94568",
    intro:
      "Positioned at the crossroads of I-580 and I-680, Dublin has become one of the Bay Area's fastest-growing cities — and its commercial development shows it. Hacienda Crossings and Fallon Gateway pull regional shoppers off the freeway, the Dublin Boulevard corridor mixes offices, auto dealerships, and services, and transit-oriented projects around the Dublin/Pleasanton BART station stack ground-floor retail beneath managed residential. Zeiss chose Dublin for its gleaming innovation center, a signal of the city's corporate trajectory. Growth this rapid puts pressure on facility upkeep, and KCS helps Dublin businesses keep pace — scheduled janitorial programs for retail centers, offices, medical suites, and the community facilities of new neighborhoods.",
    businessLandscape:
      "Dublin's commercial inventory is young and freeway-oriented: major retail at Hacienda Crossings, Fallon Gateway, and Persimmon Place, auto dealerships and services along Dublin Boulevard, and modern office and R&D space highlighted by the Zeiss Innovation Center. Transit-oriented mixed-use surrounds the two BART stations, while new schools, churches, gyms, and HOA facilities track the city's rapid residential expansion.",
    districts: [
      "Hacienda Crossings",
      "Fallon Gateway",
      "Dublin Boulevard corridor",
      "Dublin/Pleasanton BART station area",
      "Persimmon Place",
    ],
    landmarks: [
      "Zeiss Innovation Center",
      "Hacienda Crossings",
      "Dublin/Pleasanton BART Station",
    ],
    clientTypes: ["retail", "offices", "auto dealerships", "gyms", "HOAs", "medical facilities"],
    nearby: ["pleasanton", "san-ramon", "livermore", "danville"],
    lat: 37.7022,
    lng: -121.9358,
  },
  {
    name: "Pleasanton",
    slug: "pleasanton",
    county: "Alameda County",
    region: "tri-valley",
    zip: "94588",
    intro:
      "Hacienda Business Park put Pleasanton on the corporate map decades ago, and it remains one of Northern California's largest developments of its kind — hundreds of companies, including Workday's headquarters, spread across a campus-style district near the I-580/680 interchange. Stoneridge Shopping Center anchors regional retail, Stanford Health Care's ValleyCare Medical Center leads a substantial healthcare cluster, and downtown Main Street offers one of the Tri-Valley's most charming storefront districts. The Alameda County Fairgrounds rounds out a commercial landscape of unusual breadth. KCS serves Pleasanton with janitorial programs built for that range — corporate suites, medical offices, retail floors, and everything between, cleaned on schedule by trained, consistent crews.",
    businessLandscape:
      "Pleasanton offers the Tri-Valley's deepest commercial mix: large-scale corporate office space in Hacienda Business Park and Bernal Corporate Park, regional retail at Stoneridge Shopping Center, a strong medical cluster around Stanford Health Care ValleyCare, and a historic Main Street retail district downtown. Private schools, churches, fitness clubs, and the Alameda County Fairgrounds add further institutional and event-driven facilities.",
    districts: [
      "Hacienda Business Park",
      "Downtown Pleasanton (Main Street)",
      "Stoneridge Shopping Center area",
      "Bernal Corporate Park",
    ],
    landmarks: [
      "Hacienda Business Park",
      "Workday headquarters",
      "Stoneridge Shopping Center",
      "Stanford Health Care ValleyCare Medical Center",
      "Alameda County Fairgrounds",
    ],
    clientTypes: ["offices", "retail", "medical facilities", "private schools", "gyms", "property managers"],
    nearby: ["dublin", "livermore", "san-ramon", "danville"],
    lat: 37.6624,
    lng: -121.8747,
  },
  {
    name: "Livermore",
    slug: "livermore",
    county: "Alameda County",
    region: "tri-valley",
    zip: "94550",
    intro:
      "Science, wine, and commerce share billing in Livermore. Lawrence Livermore National Laboratory and Sandia's California campus employ thousands of researchers and support a constellation of engineering firms and suppliers along the Vasco Road corridor. Downtown First Street has transformed into a lively district of restaurants, tasting rooms, and boutiques anchored by the Bankhead Theater, while the San Francisco Premium Outlets draw shoppers from across the region to the west side. Add wineries hosting daily visitors, Las Positas College, and industrial parks near the airport, and Livermore's facility managers oversee remarkably varied spaces. KCS covers that variety with janitorial service adapted to each environment — from office suites to high-traffic retail.",
    businessLandscape:
      "Livermore blends R&D and industrial space along the Vasco Road and airport corridors — fed by Lawrence Livermore and Sandia national laboratories — with destination retail at the San Francisco Premium Outlets and a thriving downtown restaurant and boutique district on First Street. Wineries, Las Positas College, medical offices, churches, and neighborhood centers complete a commercial base that spans lab-adjacent tech to tourism.",
    districts: [
      "Downtown Livermore (First Street)",
      "Vasco Road tech corridor",
      "San Francisco Premium Outlets area",
      "Livermore Municipal Airport industrial area",
    ],
    landmarks: [
      "Lawrence Livermore National Laboratory",
      "Sandia National Laboratories, California",
      "San Francisco Premium Outlets",
      "Bankhead Theater",
      "Las Positas College",
    ],
    clientTypes: ["offices", "retail", "warehouses", "medical facilities", "gyms", "churches"],
    nearby: ["pleasanton", "dublin", "tracy", "san-ramon"],
    lat: 37.6819,
    lng: -121.768,
  },

  // ── Solano County ────────────────────────────────────────────────────
  {
    name: "Vallejo",
    slug: "vallejo",
    county: "Solano County",
    region: "solano-county",
    zip: "94590",
    intro:
      "Vallejo's commercial story runs from a historic naval shipyard to a modern visitor economy. Mare Island, once the Navy's Pacific yard, now hosts manufacturers, breweries, film production, and industrial tenants reoccupying its massive brick buildings. Across the strait, downtown Georgia Street is rebuilding its storefront economy near the ferry terminal, while the Gateway Plaza area off Admiral Callaghan Lane concentrates big-box retail near Six Flags Discovery Kingdom. Kaiser Permanente's Vallejo Medical Center and Cal Maritime add major institutional facilities. That spread — industrial, retail, medical, academic — is exactly the range KCS is built for, with janitorial crews serving Vallejo on consistent nightly schedules.",
    businessLandscape:
      "Vallejo's commercial base is unusually diverse: reactivated industrial and maker space on Mare Island, big-box and strip retail around Gateway Plaza and Sonoma Boulevard, a recovering downtown storefront district near the ferry, and major institutions in Kaiser Permanente Vallejo Medical Center and California State University Maritime Academy. Six Flags Discovery Kingdom drives seasonal visitor traffic, and churches and medical offices serve the county's largest city.",
    districts: [
      "Mare Island",
      "Downtown Vallejo (Georgia Street)",
      "Gateway Plaza / Admiral Callaghan Lane",
      "Sonoma Boulevard corridor",
    ],
    landmarks: [
      "Mare Island",
      "Six Flags Discovery Kingdom",
      "Kaiser Permanente Vallejo Medical Center",
      "California State University Maritime Academy",
      "Vallejo Ferry Terminal",
    ],
    clientTypes: ["warehouses", "retail", "medical facilities", "offices", "churches", "property managers"],
    nearby: ["benicia", "fairfield", "hercules", "pinole"],
    lat: 38.1041,
    lng: -122.2566,
  },
  {
    name: "Benicia",
    slug: "benicia",
    county: "Solano County",
    region: "solano-county",
    zip: "94510",
    intro:
      "Two very different Benicias share one small city. Along the Carquinez Strait, First Street's galleries, antique shops, restaurants, and offices occupy lovingly kept historic buildings in one of the Bay Area's most walkable downtowns. East of town, the Benicia Industrial Park — among the largest in Solano County — houses manufacturers, distributors, and logistics operators alongside the Valero refinery and the Port of Benicia's automotive import operations. Each side has distinct cleaning demands: delicate care for historic storefronts and professional suites, durable scheduled service for industrial offices, break rooms, and warehouse restrooms. KCS serves both, bringing the same reliability to a First Street boutique as to a Park Road distribution office.",
    businessLandscape:
      "Benicia splits between a historic downtown of boutique retail, restaurants, galleries, and small offices on First Street, and the sprawling Benicia Industrial Park east of I-680, home to manufacturing, warehousing, and logistics firms serving the refinery and the Port of Benicia. Churches, medical and dental suites, and civic buildings tied to the city's state-capital history complete the mix.",
    districts: [
      "First Street / downtown Benicia",
      "Benicia Industrial Park",
      "Benicia Arsenal district",
    ],
    landmarks: [
      "Benicia Industrial Park",
      "Port of Benicia",
      "Valero Benicia Refinery",
      "Benicia Capitol State Historic Park",
    ],
    clientTypes: ["warehouses", "offices", "retail", "churches", "medical facilities"],
    nearby: ["vallejo", "martinez", "fairfield"],
    lat: 38.0494,
    lng: -122.1586,
  },
  {
    name: "Fairfield",
    slug: "fairfield",
    county: "Solano County",
    region: "solano-county",
    zip: "94533",
    intro:
      "Fairfield anchors Solano County's economy as its county seat and largest employment center. Travis Air Force Base drives thousands of jobs and a deep bench of contractors, while name-brand manufacturers — the Jelly Belly candy factory and Anheuser-Busch's brewery among them — give the city genuine industrial weight. Solano Town Center and the surrounding retail district serve shoppers from across the county, government and professional offices cluster near downtown Texas Street, and NorthBay Medical Center leads a growing healthcare sector. The Green Valley and Cordelia corporate parks add modern office space near I-680. KCS supports Fairfield's facility managers with janitorial programs scaled from single medical suites to full office buildings.",
    businessLandscape:
      "Fairfield combines county government offices downtown, regional retail centered on Solano Town Center and the Gateway corridor, heavyweight manufacturing from Jelly Belly and Anheuser-Busch, and healthcare anchored by NorthBay Medical Center. The Green Valley and Cordelia business parks supply modern corporate office space, while Travis Air Force Base sustains a wide ecosystem of contractors, logistics firms, and service businesses.",
    districts: [
      "Downtown Fairfield (Texas Street)",
      "Solano Town Center area",
      "Green Valley / Cordelia business parks",
      "North Texas Street corridor",
    ],
    landmarks: [
      "Travis Air Force Base",
      "Jelly Belly Candy Company factory",
      "Anheuser-Busch Fairfield brewery",
      "Solano Town Center",
      "NorthBay Medical Center",
    ],
    clientTypes: ["offices", "retail", "medical facilities", "warehouses", "churches", "property managers"],
    nearby: ["suisun-city", "vacaville", "vallejo", "benicia"],
    lat: 38.2494,
    lng: -122.0399,
  },
  {
    name: "Vacaville",
    slug: "vacaville",
    county: "Solano County",
    region: "solano-county",
    zip: "95687",
    intro:
      "Biotech gave Vacaville a second identity to go with its retail fame. Genentech operates one of the world's largest biotech manufacturing facilities here in the Vaca Valley business corridor, joined by Kaiser Permanente's Vacaville Medical Center — together making north Vacaville a hub of highly regulated, meticulously maintained facilities. On the retail side, the Vacaville Premium Outlets and the Nut Tree development pull I-80 travelers off the freeway by the thousands, and downtown's Main Street keeps local storefronts and offices busy. Supporting businesses — labs, logistics, medical suites, restaurants, gyms — fill the space between. KCS provides Vacaville's offices, clinics, and retail centers with dependable scheduled janitorial service and exacting quality control.",
    businessLandscape:
      "Vacaville's commercial base pairs destination retail — the Vacaville Premium Outlets and Nut Tree Plaza along I-80 — with a serious biotech and healthcare corridor in the Vaca Valley business park, led by Genentech's manufacturing campus and Kaiser Permanente's medical center. Downtown Main Street carries local shops and offices, while distribution facilities, churches, gyms, and medical suites serve a steadily growing city.",
    districts: [
      "Downtown Vacaville (Main Street)",
      "Vacaville Premium Outlets area",
      "Nut Tree Plaza",
      "Vaca Valley business corridor",
    ],
    landmarks: [
      "Genentech Vacaville manufacturing campus",
      "Kaiser Permanente Vacaville Medical Center",
      "Vacaville Premium Outlets",
      "Nut Tree Plaza",
    ],
    clientTypes: ["retail", "medical facilities", "offices", "warehouses", "gyms", "churches"],
    nearby: ["fairfield", "suisun-city", "davis"],
    lat: 38.3566,
    lng: -121.9877,
  },
  {
    name: "Suisun City",
    slug: "suisun-city",
    county: "Solano County",
    region: "solano-county",
    zip: "94585",
    intro:
      "Suisun City built its comeback around water. The Waterfront District — with its marina, promenade, and restored Main Street — is a model of small-city revitalization, lined with restaurants, event venues, and small businesses that trade on charm and cleanliness in equal measure. The Suisun-Fairfield Amtrak station connects the waterfront to the Capitol Corridor, and Highway 12 carries the city's retail centers, medical offices, and services toward Rio Vista. Sharing a border with Fairfield means many operators here run facilities in both cities, and they want one janitorial partner covering both. KCS fits that role, serving Suisun City's storefronts, offices, churches, and HOA facilities on reliable combined routes.",
    businessLandscape:
      "Suisun City's commercial activity centers on the revitalized Waterfront District — marina-front restaurants, event spaces, and Main Street storefronts — with neighborhood retail, medical and dental suites, and service businesses along the Highway 12 and Sunset Avenue corridors. Churches and HOA-managed communities serve the residential base, and the Amtrak station area links the city into the broader Fairfield-Suisun employment market.",
    districts: [
      "Waterfront District / Main Street",
      "Highway 12 corridor",
      "Sunset Avenue corridor",
    ],
    landmarks: [
      "Suisun City Marina and waterfront promenade",
      "Suisun-Fairfield Amtrak Station",
      "Historic Main Street",
    ],
    clientTypes: ["retail", "restaurants", "offices", "churches", "HOAs"],
    nearby: ["fairfield", "vacaville", "benicia", "vallejo"],
    lat: 38.2382,
    lng: -122.0402,
  },
];
