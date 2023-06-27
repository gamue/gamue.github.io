module.exports = () => {
  const countries = [
    {
      name: "Ägypten",
      code: "EG",
    },
    {
      name: "Albanien",
      code: "AL",
      link: "/albanien/",
    },
    {
      name: "Belize",
      code: "BZ",
      link: "/belize/",
    },
    {
      name: "Belgien",
      code: "BE",
      link: "/photography/benelux-2010/",
    },
    {
      name: "Dänemark",
      code: "DK",
    },
    {
      name: "Deutschland",
      code: "DE",
      link: "/deutschland/",
    },
    {
      name: "Großbritannien",
      code: "GB",
      link: "/schottland/",
    },
    {
      name: "Finnland",
      code: "FI",
    },
    {
      name: "Frankreich",
      code: "FR",
      link: "/photography/paris-2019/",
    },
    {
      name: "Georgien",
      code: "GE",
      link: "/georgien/",
    },
    {
      name: "Griechenland",
      code: "GR",
      link: "/photography/kreta-2016/",
    },
    {
      name: "Niederlande",
      code: "NL",
      link: "/photography/benelux-2010/",
    },
    {
      name: "Indien",
      code: "IN",
      link: "/indien/",
    },
    {
      name: "Irland",
      code: "IE",
      link: "/irland/",
    },
    {
      name: "Island",
      code: "IS",
      link: "/island/",
    },
    {
      name: "Israel",
      code: "IL",
      link: "/israel/",
    },
    {
      name: "Italien",
      code: "IT",
      link: "/photography/rom-2016/",
    },
    {
      name: "Japan",
      code: "JP",
      link: "/japan/",
    },
    {
      name: "Jordanien",
      code: "JO",
      link: "/jordanien/",
    },
    {
      name: "Kenia",
      code: "KE",
      link: "/kenia/",
    },
    {
      name: "Kosovo",
      code: "XK",
      link: "/photography/suedosteuropa-2013/",
    },
    {
      name: "Laos",
      code: "LA",
      link: "/laos/",
    },
    {
      name: "Lettland",
      code: "LV",
    },
    {
      name: "Luxemburg",
      code: "LU",
      link: "/photography/benelux-2010/",
    },
    {
      name: "Marokko",
      code: "MA",
      link: "/marokko/",
    },
    {
      name: "Nepal",
      code: "NP",
      link: "/nepal/",
    },
    {
      name: "Nordmazedonien",
      code: "MK",
      link: "/photography/suedosteuropa-2013/",
    },
    {
      name: "Norwegen",
      code: "NO",
      link: "/photography/suedosteuropa-2013/",
    },
    {
      name: "Palästina",
      code: "PS",
    },
    {
      name: "Polen",
      code: "PL",
    },
    {
      name: "Rumänien",
      code: "RO",
      link: "/rumaenien/",
    },
    {
      name: "Schweden",
      code: "SE",
      link: "/photography/schweden-2010/",
    },
    {
      name: "Schweiz",
      code: "CH",
    },
    {
      name: "Serbien",
      code: "RS",
      link: "/photography/suedosteuropa-2013/",
    },
    {
      name: "Spanien",
      code: "ES",
    },
    {
      name: "Sri Lanka",
      code: "LK",
      link: "/sri-lanka/",
    },
    {
      name: "Thailand",
      code: "TH",
      link: "/thailand/",
    },
    {
      name: "Türkei",
      code: "TR",
      link: "/photography/tuerkei-2014/",
    },
    {
      name: "Vatikan",
      code: "VA",
      link: "/photography/rom-2016/",
    },
    {
      name: "Vereinigte Arabische Emirate",
      code: "AE",
      link: "/photography/abu-dhabi-2014/",
    },
    {
      name: "Vietnam",
      code: "VN",
      link: "/vietnam/",
    },
    {
      name: "Zypern",
      code: "CY",
      link: "/photography/zypern-2015/",
    },
    {
      name: "Kirgistan",
      code: "KG",
      link: "/kirgistan/",
    },
    {
      name: "Oman",
      code: "OM",
      link: "/oman/",
    },
    {
      name: "Ungarn",
      code: "HU",
    },
    {
      name: "Slowenien",
      code: "SI",
      link: "/slowenien/",
    },
  ];

  countries.sort((a, b) => a.name.localeCompare(b.name));
  return countries;
};
