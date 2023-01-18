var voornaam = "Stef"; // wijzig dit in jouw eigen voornaam
var tussenvoegsel = "van de"; // wijzig dit in jouw eigen eventuele tussenvoegsel
var achternaam = "Brug"; // wijzig dit in jouw eigen achternaam
var volledigeNaam = "Stef van de Brug"; // plak hier de 3 bovenstaande variabelen aan elkaar, met spaties
var geboortedag = "28"; // je geboortedag
var geboortemaand = "09"; // je geboortemaand
var geboortejaar = "2005"; // je geboortejaar
var huidig_jaartal = "2023"// het huidige jaar;
var leeftijd = huidig_jaartal - geboortejaar; // bereken hier jouw leeftijd op basis van de eerder ingevulde geboortegegevens.
var dag_van_het_jaar = 18; // bereken hier hoeveelste dag van dit kalenderjaar het is
var straat = "bruggensingel-zuid"; // je straat;
var huisnummer = "2"; // je huisnummer;
var woonplaats = "amersfoort"; // je woonplaats;
var woonachtig_in_utrecht = "ja"; // check hier dmv een boolean of jouw woonplaats gelijk is aan "Utrecht"
var aantal_studenten_in_deze_klas = 44;
var kosten_van_frikandelbroodje = 1.76;
var totale_lunchkosten = kosten_van_frikandelbroodje * (aantal_studenten_in_deze_klas * 2) ; // bereken hier het totaalbedrag als iedere student 2 frikandelbroodjes zou kopen


  document.write("Voornaam: " + voornaam);
  document.write("<br>");
  document.write("Achternaam: " + achternaam);
  document.write("<br>");
  document.write("volledigenaam: " + volledigeNaam);
  document.write("<br>");
  document.write("geboortedatum: " + geboortedag + geboortedag + geboortejaar);
  document.write("<br>");
  document.write("jaartal: " + huidig_jaartal);
  document.write("<br>");
  document.write("leeftijd: " + leeftijd);
  document.write("<br>");
  document.write("dag van het jaar: " + dag_van_het_jaar);
  document.write("<br>");
  document.write("waar ik woon: " + straat + huisnummer + woonplaats);
  document.write("<br>");
  document.write("als iedereen in de klas broodje koopt kost het: " + totale_lunchkosten);