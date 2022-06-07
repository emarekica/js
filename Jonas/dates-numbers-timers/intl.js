'use strict';

// internationalization API

// --- DATES

//

const now = new Date();
console.log(now);

// object for time (hours, minutes... ) that is passed in DateTimeFormat()
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // "numeric", 2-digit
  year: 'numeric',
  weekday: 'short', // "short", "narrow"
};

// get locale from user's browser
const locale = navigator.language;
console.log(locale);

// date & time

// labelDate.textContent = new Intl.DateTimeFormat("en-GB").format(now);
// labelDate.textContent = new Intl.DateTimeFormat("en-US", options).format(now);
const currentDateTime = new Intl.DateTimeFormat(locale, options).format(now);
console.log(currentDateTime);

//

// --- NUMBERS

const num = 43534985.23;

const options2 = {
  style: 'unit', // percent, currency
  unit: 'celsius',
  useGrouping: false,
};

/* 

style: "unit"
unit: "miles-per-hour" / "kilometers-per-hour"

style: "percent"
unit: /     >> ignored, loggs "%"

style: "currency"
unit: /     >> ignored
currency: "EUR"

 */

console.log('US: ', new Intl.NumberFormat('en-US', options2).format(num)); // US:  43,534,985.23 °C
console.log('DE: ', new Intl.NumberFormat('de-DE', options2).format(num)); // DE:  43.534.985,23 °C
console.log('CRO: ', new Intl.NumberFormat('hr-HR', options2).format(num)); // CRO:  43.534.985,23 °C
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options2).format(num)); // Syria:  ٤٣٬٥٣٤٬٩٨٥٫٢٣

// from the browser
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);
// en-GB 43,534,985.23
