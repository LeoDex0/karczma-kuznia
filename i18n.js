(function () {
  "use strict";

  var NBSP = " ";

  var WHATSAPP_MESSAGE = {
    pl: "Dzień dobry, chciałbym zarezerwować stolik w Karczmie Kuźnia.",
    en: "Hello, I'd like to reserve a table at Karczma Kuźnia.",
    cs: "Dobrý den, rád bych si rezervoval stůl v Karczma Kuźnia.",
    de: "Guten Tag, ich möchte gerne einen Tisch in der Karczma Kuźnia reservieren.",
  };

  var dict = {
    en: {
      "nav.karczma": "The Inn",
      "nav.karta": "Menu",
      "nav.wnetrze": "Interior",
      "nav.dojazd": "Getting here",
      "nav.rezerwuj": "Reserve",

      "hero.kicker": "Silesian Beskids · since 1987 · by the stream",
      "hero.h1.1": "Cuisine",
      "hero.h1.2": "of the Beskids,",
      "hero.h1.3": "no shortcuts",
      "hero.sub": "Kwaśnica sour cabbage soup with smoked ribs, Silesian beef roulade with dumplings, robber's potato pancake. We cook what grandmothers here fed their families — in an old village forge, two steps from the trail.",
      "hero.cta1": "Call to reserve",
      "hero.cta2": "View the menu",
      "hero.meta.reviews": "Google reviews",
      "hero.meta.everyday": "Every day",

      "historia.eyebrow": "Our inn",
      "historia.title": "Kuźnia — for luck and a full stomach",
      "historia.p1": "We stand in an old forge at the edge of the village, right where the valley ends and the trail starts to climb. We've stayed loyal to big pots and slow cooking for years — no frozen shortcuts, no powders, no rush.",
      "historia.p2": "We cook our kwaśnica with our own smoked meats. Silesian dumplings are shaped fresh every morning. Potato pancakes only hit the pan once you've sat down at the table.",
      "historia.creed1": "Regional cuisine — Silesian and highland, exactly as it should be.",
      "historia.creed2": "Portions after which you won't order dessert out of habit.",
      "historia.creed3": "A place for christenings, birthdays, and a Sunday family lunch.",
      "historia.figcaption": "Pierogi — hand-shaped every morning",

      "karta.eyebrow": "From the oven, the pan, the pot",
      "karta.title": "Menu",
      "karta.note": "A sample of the menu. We'll finalise the full menu and current prices together with you.",

      "cat.zupy": "Soups",
      "cat.zupy.sub": "/ to warm you up",
      "cat.dania": "Main dishes",
      "cat.dania.sub": "/ straight from the fire",
      "cat.placki": "Potato pancakes",
      "cat.placki.sub": "/ from the pan",
      "cat.slodko": "Something sweet",
      "cat.slodko.sub": "/ if there's room left",

      "dish.kwasnica.name": "Kwaśnica — sour cabbage soup with smoked ribs",
      "dish.kwasnica.desc": "Sour cabbage, smoked pork rib, potato",
      "dish.zurek.name": "Żurek — sour rye soup in a bread bowl",
      "dish.zurek.desc": "Rye sourdough base, white sausage, egg",
      "dish.rosol.name": "Chicken broth with homemade noodles",
      "dish.rosol.desc": "Simmered with three kinds of meat",
      "dish.flaczki.name": "Beskid-style tripe soup",
      "dish.flaczki.desc": "With marjoram and pepper, spicy",
      "dish.rolada.name": "Silesian beef roulade with dumplings and red cabbage",
      "dish.rolada.desc": "Beef, bacon, pickle, dark gravy",
      "dish.zbojnicki.name": "Robber's-style potato pancake",
      "dish.zbojnicki.desc": "Pork goulash on a potato pancake, sour cream",
      "dish.golonka.name": "Pork knuckle roasted in beer",
      "dish.golonka.desc": "Braised cabbage, horseradish, mustard",
      "dish.pstrag.name": "Oven-baked trout",
      "dish.pstrag.desc": "Butter, potatoes, sauerkraut salad",
      "dish.pierogi.name": "Pierogi — potato & cheese, meat, or cabbage & mushroom",
      "dish.pierogi.desc": "8 pieces, topped with crispy pork fat",
      "dish.wegierski.name": "Hungarian-style potato pancake",
      "dish.wegierski.desc": "Beef goulash, peppers, sour cream",
      "dish.jelen.name": "Potato pancake with venison goulash",
      "dish.jelen.desc": "Seasonal, from the forest",
      "dish.smietana.name": "Potato pancake with sour cream and sugar",
      "dish.smietana.desc": "Just like grandma made it",
      "dish.szarlotka.name": "Warm apple pie",
      "dish.szarlotka.desc": "With a scoop of vanilla ice cream",
      "dish.sernik.name": "Country-style cheesecake",
      "dish.sernik.desc": "Baked, on a shortcrust base",
      "dish.dnia.name": "Cake of the day",
      "dish.dnia.desc": "Ask your server what we baked today",
      "karta.legend": "— Kuźnia's signature dish",

      "gallery.eyebrow": "From our table",
      "gallery.title": "What's cooking in the kitchen today",
      "gallery.cap.rolada": "Silesian roulade",
      "gallery.cap.golonka": "Pork knuckle in beer",
      "gallery.cap.bigos": "Hunter's bigos",
      "gallery.cap.pierogi": "Hand-shaped pierogi",

      "atmosfera.eyebrow": "Interior",
      "atmosfera.title": "Wood, stone, and fire",
      "atmosfera.p1": "The hall smells of resin and fireplace smoke. Heavy tables, benches by the window, a hallway with hooks for your coats. A riverside garden in summer, the seat closest to the fire in winter.",
      "atmosfera.p2": "We have a room for larger gatherings — communions, christenings, birthdays, wakes. We'll arrange the menu, decorations, and hours around your event.",
      "atmosfera.cta": "Ask about our event room",

      "opinie.eyebrow": "What guests say",
      "opinie.title.suffix": "from 740 Google reviews",
      "opinie.cta": "See all reviews",

      "dojazd.eyebrow": "Getting here & hours",
      "dojazd.title": "Find us",
      "dojazd.parking": "Free parking for guests right by the entrance (about 15 spaces).",
      "dojazd.cta": "Get directions",

      "day.mon": "Monday", "day.tue": "Tuesday", "day.wed": "Wednesday", "day.thu": "Thursday",
      "day.fri": "Friday", "day.sat": "Saturday", "day.sun": "Sunday",

      "rezerwacja.eyebrow": "Reservation",
      "rezerwacja.title": "Reserve a table",
      "rezerwacja.lead": "Fastest by phone. For groups over 8 and private events, please get in touch in advance.",

      "form.name": "Full name",
      "form.phone": "Phone",
      "form.date": "Date and time",
      "form.date.placeholder": "e.g. Saturday 6 PM",
      "form.people": "Number of guests",
      "form.note": "Notes (optional)",
      "form.submit": "Send reservation request",
      "form.error": "Please fill in your name, phone, and date.",
      "form.success": "We're opening an email with your reservation request. We'll confirm by phone.",
      "form.mailSubject": "Table reservation",
      "form.mailName": "Name",
      "form.mailPhone": "Phone",
      "form.mailDate": "Date",
      "form.mailPeople": "Guests",
      "form.mailNote": "Notes",

      "whatsapp.cta": "Message on WhatsApp",

      "footer.tagline": "Regional cuisine of the Silesian Beskids. At the foot of the mountains, by the stream.",
      "footer.contact.h4": "Contact",
      "footer.hours.h4": "Hours",
      "footer.bottom.version": "Demo version — photos, menu, and reviews are placeholders pending final content.",
    },

    cs: {
      "nav.karczma": "Krčma",
      "nav.karta": "Jídelní lístek",
      "nav.wnetrze": "Interiér",
      "nav.dojazd": "Jak k nám",
      "nav.rezerwuj": "Rezervovat",

      "hero.kicker": "Slezské Beskydy · od roku 1987 · u potoka",
      "hero.h1.1": "Kuchyně",
      "hero.h1.2": "po beskydsku,",
      "hero.h1.3": "bez zkratek",
      "hero.sub": "Kysané zelí na uzeném, slezská roláda s knedlíky, bramborák po zbojnicku. Vaříme to, čím tu odjakživa krmily babičky — ve staré vesnické kovárně, kousek od turistické stezky.",
      "hero.cta1": "Zavolejte a rezervujte",
      "hero.cta2": "Zobrazit jídelní lístek",
      "hero.meta.reviews": "hodnocení na Google",
      "hero.meta.everyday": "Denně",

      "historia.eyebrow": "Naše krčma",
      "historia.title": "Kuźnia — pro štěstí a pro sytost",
      "historia.p1": "Stojíme ve staré kovárně na kraji vesnice, tam, kde končí údolí a stezka začíná stoupat. Velkým hrncům a pomalému vaření jsme věrní už léta — žádné mražené polotovary, žádné prášky, žádný spěch.",
      "historia.p2": "Kysané zelí vaříme na vlastní uzenině. Slezské knedlíky točíme každé ráno. Bramboráky jdou na pánev, až když usednete ke stolu.",
      "historia.creed1": "Regionální kuchyně — slezská a horalská, přesně taková, jaká má být.",
      "historia.creed2": "Porce, po kterých si ze setrvačnosti neobjednáte dezert.",
      "historia.creed3": "Místo pro křtiny, narozeniny a nedělní oběd s celou rodinou.",
      "historia.figcaption": "Pirohy — ručně tvarované každé ráno",

      "karta.eyebrow": "Z pece, z pánve, z hrnce",
      "karta.title": "Jídelní lístek",
      "karta.note": "Ukázka jídelního lístku. Kompletní menu a aktuální ceny doladíme společně s vámi.",

      "cat.zupy": "Polévky",
      "cat.zupy.sub": "/ na zahřátí",
      "cat.dania": "Hlavní jídla",
      "cat.dania.sub": "/ přímo z ohně",
      "cat.placki": "Bramboráky",
      "cat.placki.sub": "/ z pánve",
      "cat.slodko": "Na sladko",
      "cat.slodko.sub": "/ pokud zbylo místo",

      "dish.kwasnica.name": "Kysané zelí na uzeném",
      "dish.kwasnica.desc": "Kysané zelí, uzené žebro, brambor",
      "dish.zurek.name": "Žurek v chlebu",
      "dish.zurek.desc": "Na žitném kvasu, bílá klobása, vejce",
      "dish.rosol.name": "Vývar s domácími nudlemi",
      "dish.rosol.desc": "Vařený na třech druzích masa",
      "dish.flaczki.name": "Drštková polévka po beskydsku",
      "dish.flaczki.desc": "S majoránkou a pepřem, pikantní",
      "dish.rolada.name": "Slezská roláda s knedlíky a červeným zelím",
      "dish.rolada.desc": "Hovězí, slanina, okurka, tmavá omáčka",
      "dish.zbojnicki.name": "Bramborák po zbojnicku",
      "dish.zbojnicki.desc": "Vepřový guláš na bramboráku, zakysaná smetana",
      "dish.golonka.name": "Pečené koleno v pivu",
      "dish.golonka.desc": "Zadělávané zelí, křen, hořčice",
      "dish.pstrag.name": "Pstruh z trouby",
      "dish.pstrag.desc": "Máslo, brambory, salát z kysaného zelí",
      "dish.pierogi.name": "Pirohy — bramborovo-tvarohové, masové nebo se zelím a houbami",
      "dish.pierogi.desc": "8 kusů, se škvarky",
      "dish.wegierski.name": "Bramborák po maďarsku",
      "dish.wegierski.desc": "Hovězí guláš, paprika, smetana",
      "dish.jelen.name": "Bramborák se srnčím gulášem",
      "dish.jelen.desc": "Sezónně, z lesních hlubin",
      "dish.smietana.name": "Bramborák se zakysanou smetanou a cukrem",
      "dish.smietana.desc": "Přesně jako u babičky",
      "dish.szarlotka.name": "Teplý jablečný závin",
      "dish.szarlotka.desc": "S kopečkem smetanové zmrzliny",
      "dish.sernik.name": "Vesnický tvarohový koláč",
      "dish.sernik.desc": "Pečený, na křehkém těstě",
      "dish.dnia.name": "Dnešní dort",
      "dish.dnia.desc": "Zeptejte se číšníka, co jsme dnes upekli",
      "karta.legend": "— specialita podniku Kuźnia",

      "gallery.eyebrow": "Z našeho stolu",
      "gallery.title": "Co dnes voní z kuchyně",
      "gallery.cap.rolada": "Slezská roláda",
      "gallery.cap.golonka": "Koleno v pivu",
      "gallery.cap.bigos": "Myslivecký bigos",
      "gallery.cap.pierogi": "Ručně tvarované pirohy",

      "atmosfera.eyebrow": "Interiér",
      "atmosfera.title": "Dřevo, kámen a oheň",
      "atmosfera.p1": "V sále voní pryskyřice a kouř z krbu. Těžké stoly, lavice pod oknem, síň s věšáky na kabáty. V létě zahrada u řeky, v zimě místo nejblíž k ohni.",
      "atmosfera.p2": "Máme sál pro větší setkání — první svaté přijímání, křtiny, narozeniny, smuteční hostiny. Menu, výzdobu i časy přizpůsobíme vaší oslavě.",
      "atmosfera.cta": "Zeptejte se na sál pro oslavy",

      "opinie.eyebrow": "Co říkají hosté",
      "opinie.title.suffix": "ze 740 hodnocení na Google",
      "opinie.cta": "Zobrazit všechny recenze",

      "dojazd.eyebrow": "Jak k nám a otevírací doba",
      "dojazd.title": "Najděte nás",
      "dojazd.parking": "Bezplatné parkování pro hosty přímo u vchodu (asi 15 míst).",
      "dojazd.cta": "Naplánovat trasu",

      "day.mon": "Pondělí", "day.tue": "Úterý", "day.wed": "Středa", "day.thu": "Čtvrtek",
      "day.fri": "Pátek", "day.sat": "Sobota", "day.sun": "Neděle",

      "rezerwacja.eyebrow": "Rezervace",
      "rezerwacja.title": "Rezervujte stůl",
      "rezerwacja.lead": "Nejrychleji telefonicky. Skupiny nad 8 osob a oslavy hlaste prosím s předstihem.",

      "form.name": "Jméno a příjmení",
      "form.phone": "Telefon",
      "form.date": "Datum a čas",
      "form.date.placeholder": "např. sobota 18:00",
      "form.people": "Počet osob",
      "form.note": "Poznámka (nepovinné)",
      "form.submit": "Odeslat žádost o rezervaci",
      "form.error": "Vyplňte prosím jméno, telefon a termín.",
      "form.success": "Otevíráme e-mail se žádostí o rezervaci. Potvrdíme telefonicky.",
      "form.mailSubject": "Rezervace stolu",
      "form.mailName": "Jméno",
      "form.mailPhone": "Telefon",
      "form.mailDate": "Termín",
      "form.mailPeople": "Počet osob",
      "form.mailNote": "Poznámka",

      "whatsapp.cta": "Napsat na WhatsApp",

      "footer.tagline": "Regionální kuchyně Slezských Beskyd. U paty hor, u potoka.",
      "footer.contact.h4": "Kontakt",
      "footer.hours.h4": "Otevírací doba",
      "footer.bottom.version": "Demoverze — fotografie, jídelní lístek a recenze jsou zástupné, do finálního doplnění.",
    },

    de: {
      "nav.karczma": "Gasthaus",
      "nav.karta": "Speisekarte",
      "nav.wnetrze": "Ambiente",
      "nav.dojazd": "Anfahrt",
      "nav.rezerwuj": "Reservieren",

      "hero.kicker": "Schlesische Beskiden · seit 1987 · am Bach",
      "hero.h1.1": "Küche",
      "hero.h1.2": "der Beskiden,",
      "hero.h1.3": "ohne Abkürzungen",
      "hero.sub": "Sauerkrautsuppe mit geräuchertem Fleisch, schlesische Rouladen mit Kloß, Kartoffelpuffer nach Räuberart. Wir kochen, womit hier schon die Großmütter ihre Familien verwöhnten — in einer alten Dorfschmiede, zwei Schritte vom Wanderweg entfernt.",
      "hero.cta1": "Anrufen & reservieren",
      "hero.cta2": "Speisekarte ansehen",
      "hero.meta.reviews": "Google-Bewertungen",
      "hero.meta.everyday": "Täglich",

      "historia.eyebrow": "Unser Gasthaus",
      "historia.title": "Kuźnia — für Glück und einen vollen Magen",
      "historia.p1": "Wir stehen in einer alten Schmiede am Dorfrand, dort, wo das Tal endet und der Wanderweg ansteigt. Großen Töpfen und langsamem Kochen sind wir seit Jahren treu — keine Tiefkühlware, keine Pulver, keine Hast.",
      "historia.p2": "Unsere Sauerkrautsuppe kochen wir mit eigenem Räucherfleisch. Schlesische Klöße formen wir jeden Morgen frisch. Die Kartoffelpuffer kommen erst in die Pfanne, wenn Sie am Tisch Platz genommen haben.",
      "historia.creed1": "Regionale Küche — schlesisch und aus dem Bergland, so wie es sich gehört.",
      "historia.creed2": "Portionen, nach denen man aus Gewohnheit keinen Nachtisch mehr bestellt.",
      "historia.creed3": "Ein Ort für Taufen, Geburtstage und das sonntägliche Familienessen.",
      "historia.figcaption": "Piroggen — jeden Morgen von Hand geformt",

      "karta.eyebrow": "Aus dem Ofen, der Pfanne, dem Topf",
      "karta.title": "Speisekarte",
      "karta.note": "Ein Ausschnitt der Speisekarte. Die vollständige Karte und aktuelle Preise stimmen wir gemeinsam mit Ihnen ab.",

      "cat.zupy": "Suppen",
      "cat.zupy.sub": "/ zum Aufwärmen",
      "cat.dania": "Hauptgerichte",
      "cat.dania.sub": "/ direkt vom Feuer",
      "cat.placki": "Kartoffelpuffer",
      "cat.placki.sub": "/ aus der Pfanne",
      "cat.slodko": "Süßes",
      "cat.slodko.sub": "/ falls noch Platz ist",

      "dish.kwasnica.name": "Sauerkrautsuppe mit Räucherfleisch (Kwaśnica)",
      "dish.kwasnica.desc": "Sauerkraut, geräuchertes Rippchen, Kartoffel",
      "dish.zurek.name": "Żurek — saure Roggensuppe im Brotlaib",
      "dish.zurek.desc": "Auf Roggensauerteig, weiße Wurst, Ei",
      "dish.rosol.name": "Hühnerbrühe mit hausgemachten Nudeln",
      "dish.rosol.desc": "Gekocht mit drei Fleischsorten",
      "dish.flaczki.name": "Kuttelsuppe nach Beskiden-Art",
      "dish.flaczki.desc": "Mit Majoran und Pfeffer, scharf",
      "dish.rolada.name": "Schlesische Rouladen mit Kloß und Rotkohl",
      "dish.rolada.desc": "Rindfleisch, Speck, Gurke, dunkle Soße",
      "dish.zbojnicki.name": "Kartoffelpuffer nach Räuberart",
      "dish.zbojnicki.desc": "Schweinegulasch auf Kartoffelpuffer, saure Sahne",
      "dish.golonka.name": "In Bier gebratene Schweinshaxe",
      "dish.golonka.desc": "Angeschmortes Kraut, Meerrettich, Senf",
      "dish.pstrag.name": "Forelle aus dem Ofen",
      "dish.pstrag.desc": "Butter, Kartoffeln, Sauerkrautsalat",
      "dish.pierogi.name": "Piroggen — mit Kartoffel-Quark, Fleisch oder Kraut und Pilzen",
      "dish.pierogi.desc": "8 Stück, mit Grieben",
      "dish.wegierski.name": "Kartoffelpuffer nach ungarischer Art",
      "dish.wegierski.desc": "Rindergulasch, Paprika, saure Sahne",
      "dish.jelen.name": "Kartoffelpuffer mit Hirschgulasch",
      "dish.jelen.desc": "Saisonal, aus dem Wald",
      "dish.smietana.name": "Kartoffelpuffer mit saurer Sahne und Zucker",
      "dish.smietana.desc": "Genau wie bei Oma",
      "dish.szarlotka.name": "Warmer Apfelkuchen",
      "dish.szarlotka.desc": "Mit einer Kugel Sahneeis",
      "dish.sernik.name": "Ländlicher Käsekuchen",
      "dish.sernik.desc": "Gebacken, auf Mürbeteigboden",
      "dish.dnia.name": "Kuchen des Tages",
      "dish.dnia.desc": "Fragen Sie den Kellner, was wir heute gebacken haben",
      "karta.legend": "— Spezialität des Hauses Kuźnia",

      "gallery.eyebrow": "Von unserem Tisch",
      "gallery.title": "Was heute aus der Küche duftet",
      "gallery.cap.rolada": "Schlesische Rouladen",
      "gallery.cap.golonka": "Haxe in Bier",
      "gallery.cap.bigos": "Jäger-Bigos",
      "gallery.cap.pierogi": "Von Hand geformte Piroggen",

      "atmosfera.eyebrow": "Ambiente",
      "atmosfera.title": "Holz, Stein und Feuer",
      "atmosfera.p1": "Der Saal duftet nach Harz und Kaminrauch. Schwere Tische, Bänke am Fenster, ein Flur mit Garderobenhaken. Im Sommer der Garten am Fluss, im Winter der Platz dem Feuer am nächsten.",
      "atmosfera.p2": "Wir haben einen Saal für größere Feiern — Kommunion, Taufe, Geburtstag, Trauerfeier. Menü, Dekoration und Zeiten stimmen wir auf Ihre Feier ab.",
      "atmosfera.cta": "Fragen Sie nach dem Festsaal",

      "opinie.eyebrow": "Was Gäste sagen",
      "opinie.title.suffix": "aus 740 Google-Bewertungen",
      "opinie.cta": "Alle Bewertungen ansehen",

      "dojazd.eyebrow": "Anfahrt & Öffnungszeiten",
      "dojazd.title": "Finden Sie uns",
      "dojazd.parking": "Kostenlose Parkplätze für Gäste direkt am Eingang (ca. 15 Plätze).",
      "dojazd.cta": "Route berechnen",

      "day.mon": "Montag", "day.tue": "Dienstag", "day.wed": "Mittwoch", "day.thu": "Donnerstag",
      "day.fri": "Freitag", "day.sat": "Samstag", "day.sun": "Sonntag",

      "rezerwacja.eyebrow": "Reservierung",
      "rezerwacja.title": "Tisch reservieren",
      "rezerwacja.lead": "Am schnellsten telefonisch. Gruppen ab 8 Personen und Feiern bitte im Voraus anmelden.",

      "form.name": "Vor- und Nachname",
      "form.phone": "Telefon",
      "form.date": "Datum und Uhrzeit",
      "form.date.placeholder": "z. B. Samstag 18:00",
      "form.people": "Anzahl der Gäste",
      "form.note": "Anmerkungen (optional)",
      "form.submit": "Reservierungsanfrage senden",
      "form.error": "Bitte Name, Telefon und Termin angeben.",
      "form.success": "Wir öffnen eine E-Mail mit Ihrer Reservierungsanfrage. Wir bestätigen telefonisch.",
      "form.mailSubject": "Tischreservierung",
      "form.mailName": "Name",
      "form.mailPhone": "Telefon",
      "form.mailDate": "Termin",
      "form.mailPeople": "Personen",
      "form.mailNote": "Anmerkungen",

      "whatsapp.cta": "Auf WhatsApp schreiben",

      "footer.tagline": "Regionale Küche der Schlesischen Beskiden. Am Fuße der Berge, am Bach.",
      "footer.contact.h4": "Kontakt",
      "footer.hours.h4": "Öffnungszeiten",
      "footer.bottom.version": "Demoversion — Fotos, Speisekarte und Bewertungen sind Platzhalter, endgültiger Inhalt folgt.",
    },
  };

  var originals = {}; // key -> { attr: text } captured on first load, used to restore Polish
  var originalPlaceholders = {};
  var currentLang = "pl";

  function captureOriginals() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in originals)) originals[key] = el.textContent;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (!(key in originalPlaceholders)) originalPlaceholders[key] = el.getAttribute("placeholder");
    });
  }

  function t(key, fallback) {
    var def = fallback !== undefined ? fallback : key;
    if (currentLang === "pl") return originals[key] !== undefined ? originals[key] : def;
    var table = dict[currentLang] || {};
    if (table[key] !== undefined) return table[key];
    return originals[key] !== undefined ? originals[key] : def;
  }

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var table = dict[lang] || {};
      el.setAttribute("placeholder", lang === "pl" ? originalPlaceholders[key] : (table[key] || originalPlaceholders[key]));
    });

    var waMsg = WHATSAPP_MESSAGE[lang] || WHATSAPP_MESSAGE.pl;
    document.querySelectorAll(".js-whatsapp").forEach(function (a) {
      var base = a.getAttribute("href").split("?")[0];
      a.setAttribute("href", base + "?text=" + encodeURIComponent(waMsg));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("kuznia-lang", lang); } catch (e) {}

    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  document.addEventListener("DOMContentLoaded", function () {
    captureOriginals();

    var saved = null;
    try { saved = localStorage.getItem("kuznia-lang"); } catch (e) {}
    var initial = (saved && dict[saved]) ? saved : "pl";

    applyLang(initial);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  });

  window.i18n = {
    t: t,
    getLang: function () { return currentLang; },
  };
})();
