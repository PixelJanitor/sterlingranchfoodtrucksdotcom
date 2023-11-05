const fs = require('fs')
const { format, parse } = require('date-fns')

const URL_MAP = {
  'Rolling Italian & HipPOPs': 'https://rollingitalianonline.square.site',
  Revolver: 'https://www.revolverfoodtruck.com/menus',
  'Samos Grill': 'https://roaminghunger.com/samos-grill/',
  'Woodhill Small Batch BBQ': 'http://woodhillsmallbatchbbq.com/',
  'Los Dos': 'http://www.los2potrillos.com/',
  'Los Chamacos': 'https://www.facebook.com/people/El-chamacos-taco-dealer-my-legacy/100057675699460/',
  PinkTank: 'https://www.eatpinkgettanked.com/',
  Sizzle: 'https://www.sizzlefoodtruck.com/menu.html',
  'Rolling Italian': 'https://rollingitalianonline.square.site/',
  'Seasoned Swine': 'https://www.seasonedswine.com/food-truck',
  'Market 86': 'https://www.facebook.com/franktownmarket86/'
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
