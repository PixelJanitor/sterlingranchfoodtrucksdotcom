const fs = require('fs')
const { format, parse } = require('date-fns')

const URL_MAP = {
  'Arepas Caribbean': 'https://gotruckster.com/food-truck/arepas-caribbean-food#menu',
  "Big Belly Bro's BBQ": 'https://www.bigbellybrothersbbq.com/menu',
  'Deja Roux': 'https://order.toasttab.com/online/deja-roux',
  'Gyro Kings': 'https://www.thegyrosking.com/edgewater-public-market-menu',
  'High Society Pizza': 'https://www.highsocietypizza.com/menu',
  'Krazy Thai': 'https://www.krazythaifood.com/menu/menu',
  'Los Chamacos': 'https://www.facebook.com/people/El-chamacos-taco-dealer-my-legacy/100057675699460/',
  'Los Dos': 'http://www.los2potrillos.com/',
  'Lucky Bird': 'https://luckybirdco.com/food-truck',
  'Market 86': 'https://www.facebook.com/franktownmarket86/',
  'Meyer’s Munchies': 'https://www.facebook.com/MeyersMunchies/',
  "Pepe's Tortas": 'https://www.pepestortasandburgers.org/_files/ugd/92bced_54dd38fc6e4a40a0ac2327d2dd27aca1.pdf',
  'Pink Tank': 'https://www.eatpinkgettanked.com/',
  'Rag Bag Bistro': 'https://roaminghunger.com/ragbag-mobile/',
  Revolver: 'https://www.revolverfoodtruck.com/menus',
  'Rolling Italian': 'https://rollingitalianonline.square.site/',
  'Samos Grill': 'https://roaminghunger.com/samos-grill/',
  'Seasoned Swine': 'https://www.seasonedswine.com/food-truck',
  Sizzle: 'https://www.sizzlefoodtruck.com/menu.html',
  "Tula's Tapas": 'https://www.tulastapas.com',
  'Turkish Chef': 'https://www.turkishchefonwheels.com/#8',
  'Woodhill Small Batch BBQ': 'http://woodhillsmallbatchbbq.com/'
}

function formatInput(rawInput, dateFormat) {
  return rawInput.split('\n').reduce((acc, row) => {
    // Skip blank rows
    if (!row.trim()) {
      return acc
    }

    const [rawDate, rawTruck] = row.split(/-(.*)/s)
    const date = parse(rawDate, dateFormat, new Date())

    return [
      ...acc,
      {
        date: format(date, 'MMM do'), // May 5th, Dec 23rd, ...
        name: rawTruck.trim(),
        day: format(date, 'EEEE'), // Monday, Tuesday, ...
        url: URL_MAP[rawTruck.trim()] ?? ''
      }
    ]
  }, [])
}

;(function importData() {
  const rawData = fs.readFileSync('data/raw.txt', { encoding: 'utf8', flag: 'r' })

  const data = `import { CalendarItem } from '@/utils/types'

  export const data: CalendarItem[] = 
    ${JSON.stringify(formatInput(rawData, 'M/d'), null, 2)};`

  fs.writeFile(`data/index.ts`, data, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('Data updated')
  })
})()
