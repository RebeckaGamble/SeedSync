export default {
  // Navbar
  nav: {
    logo: "SeedSync",
    tips: "Tips",
    about: "Om oss",
    contact: "Kontakta oss",
    admin: "Admin",
    profile: "Profil",
    calendar: "Kalender",
    languageBtnAriaLabel: "Ändra språk rullgardinsmeny",
    themeBtnAriaLabel: "Växla mellan mörkt/ljust tema",
    loginBtnAriaLabel: "Logga in",
    logout: "Logga ut",
    login: "Logga in"

  },
  // Hero
  hero: {
    title: "Odla smartare med ",
    titleSpan: "SeedSync",
    text: "Få koll på vad som behöver göras i din odlingslott, följ din utveckling och ta del av säsongens bästa odlingstips – allt på ett ställe.",
    cta: "Kom igång",
    dashboard: "Gå till min profil",
    imageAlt: "Fröplanta i äggskal",
  },
  // Login
  login: {
    title: "Logga in på SeedSync",
    subtitle: "Välkommen tillbaka! Logga in för att hålla koll på din odling.",
    googleLogin: "Logga in med Google",
    or: "Eller",
    email: "Epost",
    password: "Lösenord",
    loginBtn: "Logga in",
    account: "Har du inget konto? Gå till ",
    link: "Skapa Konto",
  },
  // Skapa konto
  createAccount: {
    title: "Skapa ett konto",
    subtitle: "Kom igång med din odlingsplanering. Det tar bara ett ögonblick!",
    googleSignin: "Registrera dig med Google",
    email: "Epost",
    password: "Lösenord",
    confirmPassword: "Bekräfta lösenord",
    submitBtn: "Skicka",
    account: "Har du redan ett konto? Gå till ",
    link: "Logga in",
    errors: {
      emailRequired: "Ange giltig Epost ",
      passwordRequired: "Ange giltigt lösenord",
      confirmPasswordRequired: "Bekräfta lösenord",
      passwordMismatch: "Lösenorden måste matcha",
    },
  },
  // Carousel - home
  carousel: {
    spring: {
      title: "Vårens såguide",
      text: "Förbered dina frön för den främsta växtsäsongen",
      fullContent:
        "Våren är den perfekta tiden att börja med det mesta av din trädgård. Börja med att förbereda din jord, ta bort ogräs och lägga till kompost. För grönsaker, börja med grödor från kalla säsonger som sallad, ärtor och spenat. För blommor, överväg penséer och lejongap som klarar kallare nätter.",
      tags: ["Sådd", "Nybörjartips"],
    },
    summer: {
      title: "Sommarbevattning tips",
      text: "Håll din trädgård blomstrande i värmen",
      fullContent:
        "Under sommaren, fokusera på konsekvent vattning, särskilt under torrperioder. Vattna djupt på morgonen för att minska avdunstning. Täck jorden runt växterna för att bevara fukten och hämma ogräs. Kontrollera regelbundet efter skadedjur eftersom de tenderar att föröka sig snabbt i varmt väder.",
      tags: ["Vattning", "Skörd"],
    },
    fall: {
      title: "Höstskördens planering",
      text: "Få ut det mesta av dina sensäsongsgrödor",
      fullContent:
        "När hösten närmar sig, skörda mogna grönsaker omedelbart för att uppmuntra slutproduktion. Plantera grödor under höstens skörd som grönkål, broccoli och rotfrukter. Börja förbereda sängar för vintern genom att ta bort ettåriga växter och lägga till kompost för att fylla på jordens näringsämnen.",
      tags: ["Skörd", "Sådd"],
    },
    winter: {
      title: "Vinter förberedelser",
      text: "Skydda din jord och planera för nästa år",
      fullContent:
        "Innan vintern sätter in, applicera ett tjockt lager kompost för att skydda fleråriga växter. Töm och förvara slangar och bevattningsutrustning för att förhindra frysning. Rengör och förvara trädgårdsredskap ordentligt för att förlänga deras livslängd. Överväg att applicera vintergödsel på gräsmattor för att främja stark rottillväxt.",
      tags: ["Nybörjartips", "Vinter"],
    },
    learnMore: "Läs mer",
    readMoreAriaLabel: "Läs mer på tipssidan",
    indicatorAriaLabel: "Gå till slide ",
  },
  // Tip Cards
  tipsCards: {
    title: "Denna månad i din odling",
    content: [
      {
        id: "pre-seed",
        cardTitle: "Förså Tomater",
        cardDescription:
          "Starta förså dina tomatfrön inomhus 6-8 veckor före sista frostdatumet för ett försprång.",
        tags: ["Vinter", "Nybörjartips"],
        cardIcon: "sprout",
        fullContent:
          "Tomater behöver en lång växtsäsong, så att börja med dem inomhus ger dem ett försprång. Använd en fröstartblandning och håll jorden genomgående fuktig men inte blöt. Placera på en varm plats tills grodd, flytta sedan till ett ljust fönster eller under odlingsljus. Härda av plantor gradvis innan de planteras ut efter att risken för frost har passerat.",
      },
      {
        id: "prune-fruit",
        cardTitle: "Beskär fruktträd",
        cardDescription:
          "Senvintern är den idealiska tiden att beskära de flesta fruktträd innan ny tillväxt börjar.",
        tags: ["Nybörjartips"],
        cardIcon: "leaf",
        fullContent:
          "Att beskära fruktträd på senvintern medan de fortfarande är vilande hjälper till att förbereda dem för vårens tillväxt. Ta bort alla döda, skadade eller sjuka grenar först. Fokusera sedan på att forma trädet och förbättra luftcirkulationen. Gör rena snitt precis utanför grenkragen för korrekt läkning. Olika fruktträd kräver olika beskärningstekniker, så undersök dina specifika sorter.",
      },
      {
        id: "watering-scedule",
        cardTitle: "Vattningsplan",
        cardDescription:
          "Sätt upp ett konsekvent bevattningsschema för dina trädgårdsbäddar under växtsäsongen",
        tags: ["Vattning"],
        cardIcon: "droplet",
        fullContent:
          "Olika växter har olika vattningsbehov. I allmänhet behöver de flesta trädgårdsväxter cirka 1-1,5 tum vatten per vecka från antingen nederbörd eller bevattning. Vattna djupt och mindre ofta för att uppmuntra djup rottillväxt. Morgonvattning är bäst eftersom det minskar avdunstning och låter bladen torka innan kvällen, vilket minskar risken för sjukdomar.",
      },
    ],
  },
  // All tips cards
  tipCardContent: {
    content: [
      {
        id: "organic-fertilizers",
        cardTitle: "Använda organiska gödselmedel",
        cardDescription:
          "Förbättra din trädgårdsjord med organiska gödningsmedel.",
        tags: ["Jordhälsa", "Gödsling"],
        cardIcon: "heart",
        fullContent:
          "Organiska gödselmedel kommer från naturliga källor och förbättrar markens struktur och bördighet. Vanliga typer inkluderar kompost, gödsel och benmjöl. De släpper ut näringsämnen långsamt, vilket minskar risken för övergödsling och främjar ett sunt markekosystem.",
      },
      {
        id: "companion-planting",
        cardTitle: "Fördelarna med samplantering",
        cardDescription:
          "Förbättra tillväxten och avskräck skadedjur genom att plantera kompatibla arter tillsammans.",
        tags: ["Samplantering", "Skadedjur", "Bekämpning"],
        cardIcon: "bug",
        fullContent:
          "Samlantering innebär att man odlar olika växter i närheten för att gynna varandra. Till exempel kan plantering av basilika nära tomater avskräcka skadedjur och förbättra tomatsmaken. Ringblommor är också effektiva för att stöta bort nematoder och andra skadliga insekter.",
      },
      {
        id: "natural-pest-control",
        cardTitle: "Naturliga skadedjursbekämpningsmetoder",
        cardDescription:
          "Skydda din trädgård från skadedjur utan skadliga kemikalier.",
        tags: ["Skadedjur", "Bekämpning", "Organisk"],
        cardIcon: "bug",
        fullContent:
          "Naturliga skadedjursbekämpningsmetoder inkluderar användning av nyttiga insekter som nyckelpigor och spetsvingar för att förgripa sig på skadedjur. Insektsdödande tvål och neemolja är också effektiva mot många vanliga skadedjur i trädgården. Inspektera regelbundet växter för tecken på angrepp och vidta åtgärder snabbt för att förhindra omfattande skador.",
      },
      {
        id: "seed-saving",
        cardTitle: "Spara frön från din odling",
        cardDescription:
          "Bevara dina favoritväxtsorter genom att spara deras frön.",
        tags: ["Frön", "Hållbarhet"],
        cardIcon: "sprout",
        fullContent:
          "Genom att spara frön kan du bevara önskvärda egenskaper från dina bästa växter och minska beroendet av kommersiella frökällor. Välj friska, sjukdomsfria växter för att spara frön. Låt fröskidor torka helt på plantan innan du skördar. Förvara fröna på en sval, torr plats fram till planteringstiden.",
      },
      {
        id: "watering-techniques",
        cardTitle: "Effektiva bevattningsmetoder",
        cardDescription:
          "Optimera dina vattningsmetoder för friskare växter och vattenbesparing.",
        tags: ["Vattning", "Bevarande"],
        cardIcon: "droplet",
        fullContent:
          "Vattna djupt och mindre ofta för att uppmuntra djup rottillväxt. Vattna på morgonen för att minska avdunstning och låt bladen torka innan kvällen, vilket minskar risken för sjukdomar. Använd blötläggningsslangar eller droppbevattning för att leverera vatten direkt till rötterna, vilket minimerar vattenspill.",
      },
      {
        id: "soil-amendments",
        cardTitle: "Förbättra jorden",
        cardDescription: "Förbättra din trädgårdsjord med rätt tillägg.",
        tags: ["Jordförbättring", "Gödsling"],
        cardIcon: "sprout",
        fullContent:
          "Jordändringar förbättrar markens struktur, dränering och fertilitet. Kompost, väl ruttnat gödsel och torvmossa är vanliga tillägg. Testa din jord för att bestämma dess pH och näringsnivåer innan du lägger till ändringar. Justera jordens pH efter behov för att passa de växter du tänker odla.",
      },
    ],
  },
  // Tips page
  tips: {
    title: "Odlings tips och råd",
    text: "Få säsongsbetonade insikter och praktiska tips för varje steg i din odling.",
    filterTitle: "Filtrera efter kategori",
    allTitle: "Alla trädgårdstips",
    showAllBtn: "Visa alla",
    showAllAriaLabel: "Visa alla tips",
    readMoreBtnAriaLabel: "Klicka för att läsa hela beskrivningen",
    scrollToTopAriaLabel: "Gå till toppen av tipssektionen",
  },
   // Step by Step section
  steps: {
    title: "Hur det fungerar",
    content: [
      {
        id: 1,
        cardTitle: "Bli inspirerad",
        cardDescription:
          "Upptäck trädgårdsidéer och planera din perfekta trädgårdsplanering",
        cardIcon: "lightbulb",
      },
      {
        id: 2,
        cardTitle: "Skapa ett konto",
        cardDescription:
          "Registrera dig för att börja följa din trädgårdsresa",
        cardIcon: "userplus",
      },
      {
        id: 3,
        cardTitle: "Börja planera",
        cardDescription:
          "Använd vår uppgiftstabell och kalender för att organisera dina trädgårdsaktiviteter",
        cardIcon: "calendar",
      },
      {
        id: 4,
        cardTitle: "Följ framsteg",
        cardDescription:
          "Övervaka dina växter från planta till skörd och fira framgångar",
        cardIcon: "sprout",
      },
    ],
  },
  // FAQ Section
  faq: {
    title: "Vanliga Frågor (FAQ)",
    faqContent: [
      {
        id: 1,
        question: "Är det gratis att använda den här tjänsten?",
        answer:
          "Ja! Plattformen är helt gratis att använda. Oavsett om du odlar blommor, bär eller grönsaker kostar det ingenting att utforska tips eller komma igång.",
      },
      {
        id: 2,
        question: "Hur kommer jag igång?",
        answer:
          "Skapa bara ett konto. När du har registrerat dig är du redo att börja utforska säsongsbetonade tips, filtrera efter kategorier och spara dina favoriter.",
      },
      {
        id: 3,
        question: "Vilken typ av odlingshjälp kan jag hitta här?",
        answer:
          "Allt från sådd till skörd. Du hittar praktiska råd om blommor, frukt, grönsaker och säsongsberedning – perfekt för både nybörjare och erfarna odlare.",
      },
    ],
  },
  // Testimonials
  testimonials: {
    title: "Vad Våra Användare Tycker",
    content: [
      {
        id: 1,
        text: "Innan använde jag anteckningsblock och lappar överallt för att planera odlingen. Med Seed Sync kan jag enkelt se när det är dags att så, plantera ut och skörda. Det har gjort min planering mycket mer effektiv – i år har jag fått dubbelt så mycket skörd av mina bönor och zucchini. Rekommenderas till alla odlare, nya som erfarna!",
        name: "Sarah P.",
        location: "Brunnsviks koloniförening",
      },
      {
        id: 2,
        text: "Jag har haft kolonilott i över 10 år, men det var först med Seed Sync som jag kände att allt verkligen föll på plats. Jag förodlar mer strukturerat nu och slipper glömma viktiga moment.",
        name: "Conny Andersson",
        location: "Östgöta kolonilottsförening",
      },
      {
        id: 3,
        text: "Jag har alltid gillat att odla på min balkong, men det blev ofta stressigt med förodling och svårt att hålla koll på när jag skulle så vad. Seed Sync har verkligen förenklat allt! Nu får jag påminnelser i rätt tid, och min chili och tomater har aldrig sett bättre ut. Det är som att ha en personlig odlingscoach i fickan.",
        name: "Melinda Johansson",
        location: "Hemmaodlare",
      },
    ],
  },
  //About
  about: {
    title: "Om SeedSync – Skapa, Följ och Odla Med Glädje",
    text: "SeedSync är din ultimata trädgårdskompanjon, skapad för att hjälpa dig planera, följa upp och vårda din trädgård genom alla säsonger. Oavsett om du är nybörjare eller en erfaren odlare, ger våra verktyg dig kraften att odla friska växter, hålla ordning och njuta av rikliga skördar året runt.",
    subtitle: "Från Idé Till Verklighet – Möt Teamet Bakom SeedSync",
    team: [
      {
        id: 1,
        image: "team1",
        name: "Theo",
        does: "Teknisk odlare & kodkonstnär",
        text: "Theo gillar att gro både idéer och tomater. Han utvecklar funktionaliteten bakom SeedSync och ser till att tekniken växer i takt med användarnas behov.",
      },
      {
        id: 2,
        image: "team4",
        name: "Sara",
        does: "Året-runt-odlare & innehållsskapare",
        text: "Sara drivs av en nyfikenhet på allt som gror – även när frosten biter. Hon delar med sig av sin gedigna kunskap om året-runt-odling och skapar innehåll som väcker odlingslust, bygger självförtroende och guidar användarna genom hela säsongen.",
      },
      {
        id: 3,
        image: "team3",
        name: "Johanna",
        does: "Hobbyodlare & UX-designer",
        text: "Johanna brinner för att göra odling tillgängligt och inspirerande genom smart design. Hon kombinerar sin passion för växter med sin bakgrund inom användarupplevelse för att skapa verktyg som känns både enkla och vackra.",
      },
    ],
    quote:
      "Vi skapade SeedSync av ren kärlek till odling – och för att hjälpa fler att njuta av resan från jord till bord.",
    quoteAuthor: "— SeedSync Teamet",
  },
  // Footer
  footer: {
    logo: "SeedSync",
    logoText:
      "Gör din odling lite enklare – SeedSync visar vägen från frö till skörd.",
    tips: "Tips",
    about: "Om oss",
    contactTitle: "Kontakta oss",
    copy: "SeedSync. Alla rättigheter förbehållna.",
  },
  // Error
  error: {
    title: "Ett fel uppstod",
    goHome: "Gå till startsidan",
    notFoundText: "Hoppsan! Sidan hittades inte",
  },
};
