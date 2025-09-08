import { useState, useEffect } from "react";
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
const posiciones = {
  portero: ["/img/mark.webp", "/img/king.webp", "/img/darren.webp", "/img/mask.webp", "/img/feldt.webp", "/img/idol.webp", "/img/poseidon.webp", "/img/hillman.webp", "/img/ropes.webp", "/img/daisy.webp", "/img/galileo.webp", "/img/dvalin.webp", "/img/zell.webp", "/img/grent.webp",  "/img/nero.webp", "/img/blasi.webp",  "/img/dasilva.webp",  "/img/fox.webp",  "/img/helio.webp", "/img/iñigo.webp",  "/img/luceafar.webp",  "/img/astaroth.webp",  "/img/jp.webp"],
  defensa1: ["/img/nathan.webp","/img/tod.webp", "/img/scotty.webp", "/img/aitor.webp", "/img/archer.webp", "/img/martin.webp", "/img/master.webp", "/img/monkey.webp", "/img/malcolm.webp", "/img/apollo.webp", "/img/hephestus.webp", "/img/sweet.webp", "/img/smith.webp", "/img/shawn.webp", "/img/hurley.webp", "/img/bomber.webp",  "/img/icer.webp",  "/img/arkew.webp",  "/img/gocker.webp",  "/img/zohen.webp",  "/img/hauser.webp",  "/img/lagarto.webp",  "/img/vitesse.webp",  "/img/ferrum.webp",  "/img/mangrove.webp", "/img/ischer.webp",  "/img/jenkins.webp",  "/img/lephiel.webp",  "/img/hebimos.webp",  "/img/jp.webp"],
  defensa2: ["/img/jack.webp", "/img/sor.webp", "/img/thiago.webp", "/img/bargie.webp", "/img/gabi.webp", "/img/aitor.webp", "/img/bobby.webp", "/img/jim.webp", "/img/sam.webp", "/img/drent.webp", "/img/lion.webp", "/img/simmons.webp", "/img/hillvalley.webp", "/img/sherman.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/island.webp", "/img/downtown.webp", "/img/shawn.webp", "/img/ganymede.webp", "/img/baller.webp", "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/thor.webp", "/img/kalil.webp",  "/img/minion.webp",  "/img/mountain.webp",  "/img/gaines.webp", "/img/garcia.webp",  "/img/bump.webp",  "/img/lump.webp",  "/img/rubu.webp", "/img/nenel.webp"],
  defensa3: ["/img/jack.webp", "/img/sor.webp", "/img/thiago.webp", "/img/bargie.webp", "/img/gabi.webp", "/img/aitor.webp", "/img/bobby.webp", "/img/jim.webp", "/img/sam.webp", "/img/drent.webp", "/img/lion.webp", "/img/simmons.webp", "/img/hillvalley.webp", "/img/sherman.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/island.webp", "/img/downtown.webp", "/img/shawn.webp", "/img/ganymede.webp", "/img/baller.webp", "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/thor.webp", "/img/kalil.webp",  "/img/minion.webp",  "/img/mountain.webp",  "/img/gaines.webp", "/img/garcia.webp",  "/img/bump.webp",  "/img/lump.webp",  "/img/rubu.webp", "/img/nenel.webp"],
  defensa4: ["/img/nathan.webp", "/img/tod.webp", "/img/scotty.webp", "/img/aitor.webp", "/img/archer.webp", "/img/martin.webp", "/img/master.webp", "/img/monkey.webp", "/img/malcolm.webp", "/img/apollo.webp", "/img/hephestus.webp", "/img/sweet.webp", "/img/smith.webp", "/img/shawn.webp", "/img/hurley.webp", "/img/bomber.webp",  "/img/icer.webp",  "/img/arkew.webp",  "/img/gocker.webp",  "/img/zohen.webp",  "/img/hauser.webp",  "/img/lagarto.webp",  "/img/vitesse.webp",  "/img/ferrum.webp",  "/img/mangrove.webp", "/img/ischer.webp",  "/img/jenkins.webp",  "/img/lephiel.webp",  "/img/hebimos.webp",  "/img/jp.webp"],
  medio1: ["/img/nathan.webp", "/img/arion.webp", "/img/jude.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/max.webp", "/img/steve.webp", "/img/erik.webp", "/img/bloom.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/master.webp", "/img/monkey.webp", "/img/swing.webp", "/img/artemis.webp", "/img/hermes.webp", "/img/hera.webp", "/img/athena.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/pandora.webp", "/img/jordan.webp", "/img/dvalin.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/bellatrix.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp"],
  medio2: ["/img/arion.webp", "/img/jude.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/steve.webp", "/img/sam.webp", "/img/erik.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/waldon.webp", "/img/hermes.webp", "/img/hera.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/jordan.webp", "/img/pandora.webp", "/img/dvalin.webp", "/img/metron.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/neppten.webp",  "/img/kormer.webp",  "/img/bellatrix.webp",  "/img/thor.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp",  "/img/zanos.webp",  "/img/gaiel.webp"],
  medio3: ["/img/nathan.webp", "/img/arion.webp", "/img/jude.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/max.webp", "/img/steve.webp", "/img/erik.webp", "/img/bloom.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/master.webp", "/img/monkey.webp", "/img/swing.webp", "/img/artemis.webp", "/img/hermes.webp", "/img/hera.webp", "/img/athena.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/pandora.webp", "/img/jordan.webp", "/img/dvalin.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/bellatrix.webp", "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp"],
  delantero1: ["/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/max.webp", "/img/kevin.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/swing.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/neppten.webp",  "/img/torch.webp",  "/img/gazelle.webp", "/img/mercury.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp"],
  delantero2: ["/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/kevin.webp", "/img/willy.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/demeter.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp", "/img/dvalin.webp", "/img/metron.webp", "/img/zell.webp", "/img/mercury.webp",  "/img/torch.webp",  "/img/gazelle.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp",  "/img/zanos.webp",  "/img/gaiel.webp"],
  delantero3: ["/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/max.webp", "/img/kevin.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/swing.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/neppten.webp",  "/img/torch.webp",  "/img/gazelle.webp","/img/mercury.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp"]
};

const ESCUDOS = {
  Raimon: "/img/raimon.webp",
  Occult: "/img/occult.webp",
  Wild: "/img/wild.webp",
  Brain: "/img/brain.webp",
  Otaku: "/img/otaku.webp",
  Royal: "/img/royal.webp",
  Shuriken: "/img/shuriken.webp",
  Farm: "/img/farm.webp",
  Kirkwood: "/img/kirkwood.webp",
  Zeus: "/img/zeus.webp",
  Veteranos: "/img/veteranos.webp",
  Servicio: "/img/servicio.webp",
  Alpino: "/img/alpino.webp",
  Claustro: "/img/claustro.webp",
  TripleC: "/img/triplec.webp",
  Fauxshore: "/img/fauxshore.webp",
  MaryTimes: "/img/marytimes.webp",
  TormentadeGéminis: "/img/tormentadegeminis.webp",
  Epsilon: "/img/Epsilon.webp",
  Royalredux: "/img/Royalredux.webp",
  Prominence: "/img/prominence.webp",
  Diamond: "/img/diamond.webp",
  Caos: "/img/caos.webp",
  Génesis: "/img/genesis.webp",
  Emperadoresoscuros: "/img/emperadoresoscuros.webp",
  Alius: "/img/alius.webp",
  NeoJapon: "/img/neojapon.webp",
  BigWaves: "/img/bigwaves.webp",
  Leonesdeldesierto: "/img/leonesdeldesierto.webp",
  Dragonesdefuego: "/img/dragonesdefuego.webp",
  KnightsofQueen: "/img/knightsofqueen.webp",
  EquipoD: "/img/equipod.webp",
  LosRojos: "/img/losrojos.webp",
  Emperadores: "/img/emperadores.webp",
  Unicorn: "/img/unicorn.webp",
  Orfeo: "/img/orfeo.webp",
  OsReis: "/img/osreis.webp",
  ZoolanTeam: "/img/zoolanteam.webp",
  LittleGiants: "/img/littlegiants.webp",
  Ogro: "/img/ogro.webp",
  AngelOscuro: "/img/angeloscuro.webp",
  SeleccionMundial: "/img/seleccionmundial.webp",
  InazumaJapon: "/img/inazumajapon.webp",
  RaimonB: "/img/raimonb.webp",
  Empollones: "/img/empollones.webp",
  ViaLactea: "/img/vialactea.webp",
  PoderosaFe: "/img/poderosafe.webp",
  RoyalGo: "/img/royalgo.webp",
  CalaPirata: "/img/calapirata.webp",
  MardeLuna: "/img/mardeluna.webp",
  AlpinoGo: "/img/alpinogo.webp",
  KirkwoodGo: "/img/kirkwoodgo.webp",
  Espejismo: "/img/espejismo.webp",
  Universal: "/img/universal.webp",
  MonteOlimpo: "/img/monteolimpo.webp",
  DragonLink: "/img/dragonlink.webp",
  Caseta: "/img/caseta.webp",
  Caravana: "/img/caravana.webp",
  Peabody: "/img/peabody.webp",
  Marvin: "/img/neogod.webp"
  // Añade más escudos aquí
};


const LOGROS = [

  {
  id: "bienvenida",
  nombre: "¡Bienvenido!",
  descripcion: "Gracias por jugar.",
  jugadores: [], // no necesita jugadores
  recompensa: { tipo: "escudo", valor: "Caseta" }
},
{
  id: "caravana",
  nombre: "¡Súbete a la Caravana!",
  descripcion: "Sígueme en Youtube.",
  jugadores: [],
  tipo: "manual", // 👈 puede ser "equipo", "automatico" o "manual"
  recompensa: { tipo: "escudo", valor: "Caravana" }
},


  {
    id: "occult",
    nombre: "El aterrador Instituto Occult",
    descripcion: "Escoge a Mask y Talisman entre tus 11 jugadores.",
    jugadores: [
      "/img/mask.webp", "/img/talisman.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Occult" },
    drops: ["/img/mask.webp", "/img/talisman.webp"] 
  },
    {
    id: "wild",
    nombre: "El salvaje Instituto Wild",
    descripcion: "Escoge a Chicken, Cheetah y Gorilla entre tus 11 jugadores.",
    jugadores: [
      "/img/chicken.webp", "/img/cheetah.webp", "/img/gorilla.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Wild" },
    drops: ["/img/lion.webp", "/img/chicken.webp", "/img/cheetah.webp", 
      "/img/gorilla.webp", "/img/eagle.webp", "/img/monkey.webp"]
  },
      {
    id: "brain",
    nombre: "El extraño Instituto Brain",
    descripcion: "Escoge a Thomas Feldt y Neil Turner entre tus 11 jugadores.",
    jugadores: [
      "/img/feldt.webp", "/img/turner.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Brain" },
    drops: ["/img/feldt.webp", "/img/turner.webp"]
  },
        {
    id: "otaku",
    nombre: "El curioso Instituto Otaku",
    descripcion: "Escoge a Idol, Gamer y Artist  entre tus 11 jugadores.",
    jugadores: [
      "/img/idol.webp", "/img/gamer.webp",  "/img/artist.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Otaku" },
    drops: ["/img/idol.webp", "/img/gamer.webp",  "/img/artist.webp"]
  },
          {
    id: "royal",
    nombre: "La vieja guarda de la Royal",
    descripcion: "Escoge a King, Jude y Samford  entre tus 11 jugadores.",
    jugadores: [
      "/img/king.webp", "/img/jude.webp",  "/img/samford.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Royal" },
    drops: ["/img/king.webp", "/img/jude.webp",  "/img/samford.webp",
       "/img/hatch.webp", "/img/simmons.webp", "/img/martin.webp",
       "/img/drent.webp", "/img/swing.webp", "/img/waldon.webp",
       "/img/master.webp", "/img/bloom.webp"]
  },
                  {
    id: "veteranos",
    nombre: "Leyendas del mítico Inazuma Eleven",
    descripcion: "Escoge a Seymour Hillman, Charles Island y Arthur Sweet entre tus 11 jugadores.",
    jugadores: [
      "/img/hillman.webp", "/img/island.webp", "/img/sweet.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Veteranos" },
    drops: ["/img/hillman.webp", "/img/island.webp", "/img/sweet.webp"]
  },
            {
    id: "shuriken",
    nombre: "El Shuriken y una vieja rivalidad",
    descripcion: "Escoge a Sail Bluesea y Seymour Hillman, viejo rival del entrenador Igajima, entre tus 11 jugadores.",
    jugadores: [
      "/img/cloak.webp", "/img/hillman.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Shuriken" },
    drops: ["/img/cloak.webp"]
  },
              {
    id: "farm",
    nombre: "La defensa impenetrable del Instituto Farm",
    descripcion: "Escoge a Herb Sherman y Mark Hillvalley entre tus 11 jugadores.",
    jugadores: [
      "/img/sherman.webp", "/img/hillvalley.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Farm" },
    drops: ["/img/sherman.webp", "/img/hillvalley.webp"]
  },
              {
    id: "kirkwood",
    nombre: "El viejo Instituto Kirkwood",
    descripcion: "Escoge a Malcolm Night, Axel Blaze y Marvin Murdock entre tus 11 jugadores.",
    jugadores: [
      "/img/malcolm.webp", "/img/axel.webp", "/img/marvin.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Kirkwood" },
    drops: ["/img/malcolm.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp"]
  },
  {
    id: "inazumaeleven1",
    nombre: "Un 11 de Inazuma Eleven 1",
    descripcion: "Escoge 11 jugadores originales de Inazuma Eleven 1.",
    jugadores: [
      "/img/mark.webp", "/img/king.webp", "/img/mask.webp", "/img/feldt.webp", 
      "/img/idol.webp", "/img/poseidon.webp", "/img/hillman.webp", "/img/jack.webp",
      "/img/nathan.webp","/img/tod.webp", "/img/martin.webp", "/img/bobby.webp",
      "/img/steve.webp", "/img/erik.webp", "/img/byron.webp", "/img/sam.webp", 
      "/img/master.webp", "/img/monkey.webp", "/img/malcolm.webp", "/img/apollo.webp",
      "/img/hephestus.webp", "/img/sweet.webp", "/img/jim.webp","/img/drent.webp", 
      "/img/lion.webp", "/img/simmons.webp", "/img/hillvalley.webp", "/img/sherman.webp", 
      "/img/ares.webp", "/img/dionysus.webp", "/img/island.webp", "/img/jude.webp", "/img/timmy.webp", 
      "/img/max.webp", "/img/bloom.webp", "/img/chicken.webp", "/img/eagle.webp",  "/img/swing.webp", 
      "/img/artemis.webp", "/img/hermes.webp", "/img/hera.webp", "/img/athena.webp", "/img/waldon.webp",
      "/img/axel.webp", , "/img/kevin.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", 
      "/img/gorilla.webp", "/img/hatch.webp", "/img/talisman.webp", "/img/turner.webp", 
      "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/samford.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Zeus" },
    drops: ["/img/apollo.webp", "/img/hephestus.webp", "/img/athena.webp", "/img/ares.webp", 
      "/img/dionysus.webp", "/img/poseidon.webp", "/img/byron.webp", "/img/hera.webp", "/img/demeter.webp",
      "/img/hermes.webp", "/img/artemis.webp",]
  },
    {
    id: "raimon11",
    nombre: "El mítico Raimon de Mark Evans",
    descripcion: "Escoge 11 jugadores del Raimon de la saga de Mark Evans.",
    jugadores: [
      "/img/mark.webp", "/img/jude.webp", "/img/axel.webp", "/img/nathan.webp",
      "/img/shawn.webp", "/img/tod.webp", "/img/max.webp", "/img/jack.webp",
      "/img/kevin.webp", "/img/timmy.webp", "/img/willy.webp", "/img/bobby.webp",
      "/img/steve.webp", "/img/erik.webp", "/img/byron.webp", "/img/sam.webp", 
      "/img/scotty.webp", "/img/hurley.webp", "/img/tori.webp", "/img/jim.webp",
      "/img/darren.webp", "/img/sue.webp", "/img/shadow.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Raimon" },
    drops: ["/img/mark.webp", "/img/jude.webp", "/img/axel.webp", "/img/nathan.webp",
      "/img/shawn.webp", "/img/tod.webp", "/img/max.webp", "/img/jack.webp",
      "/img/kevin.webp", "/img/timmy.webp", "/img/willy.webp", "/img/bobby.webp",
      "/img/steve.webp", "/img/erik.webp", "/img/sam.webp", 
      "/img/scotty.webp", "/img/hurley.webp", "/img/tori.webp", "/img/jim.webp",
      "/img/darren.webp", "/img/sue.webp", "/img/shadow.webp"]
  },
                {
    id: "servicio",
    nombre: "El Servicio Secreto, al servicio del presidente",
    descripcion: "Escoge a Ian Smith, la Agente M y a Tori Vanguard entre tus 11 jugadores.",
    jugadores: [
      "/img/smith.webp", "/img/agentem.webp", "/img/tori.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Servicio" },
    drops: ["/img/smith.webp", "/img/agentem.webp", "/img/tori.webp"]
  },
                  {
    id: "alpino",
    nombre: "El gélido Instituto Alpino",
    descripcion: "Escoge a Adam Ropes, Joaquine Downtown y Shawn Froste entre tus 11 jugadores.",
    jugadores: [
      "/img/ropes.webp", "/img/downtown.webp", "/img/shawn.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Alpino" },
    drops: ["/img/ropes.webp", "/img/downtown.webp", "/img/shawn.webp"]
  },
                    {
    id: "claustro",
    nombre: "El admirado Claustro Sagrado",
    descripcion: "Escoge a Scotty Banyan y Tim Saunders entre tus 11 jugadores.",
    jugadores: [
      "/img/scotty.webp", "/img/timmy.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Claustro" },
    drops: ["/img/scotty.webp"]
  },
                     {
    id: "triplec",
    nombre: "Las compañeras del Triple C de Osaka",
    descripcion: "Escoge a Daisy Ropes y Sue Hartland entre tus 11 jugadores.",
    jugadores: [
      "/img/daisy.webp", "/img/sue.webp",
    ],
    recompensa: { tipo: "escudo", valor: "TripleC" },
    drops: ["/img/daisy.webp", "/img/sue.webp"]
  },
                       {
    id: "fauxshore",
    nombre: "El prodigio del Fauxshore",
    descripcion: "Escoge a Darren LaChance entre tus 11 jugadores.",
    jugadores: [
      "/img/darren.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Fauxshore" },
  },
                  {
    id: "marytimes",
    nombre: "El Mary Times, un equipo marítimo",
    descripcion: "Escoge a Hurley Kane y Cadence Soundtown entre tus 11 jugadores.",
    jugadores: [
      "/img/hurley.webp", "/img/soundtown.webp",
    ],
    recompensa: { tipo: "escudo", valor: "MaryTimes" },
    drops: ["/img/hurley.webp", "/img/soundtown.webp"]
  },
                {
    id: "tormentadegeminis",
    nombre: "Los destructores, el Tormenta de Géminis",
    descripcion: "Escoge a Galileo, Ganymede, Janus y Diam entre tus 11 jugadores.",
    jugadores: [
      "/img/galileo.webp", "/img/ganymede.webp","/img/jordan.webp", "/img/diam.webp",
    ],
    recompensa: { tipo: "escudo", valor: "TormentadeGéminis" },
    drops: ["/img/galileo.webp", "/img/ganymede.webp","/img/jordan.webp", 
      "/img/pandora.webp", "/img/diam.webp", "/img/rihm.webp"]
  },
                  {
    id: "epsilon",
    nombre: "Los 4 delanteros del Épsilon",
    descripcion: "Escoge a Dvalin, Mercury, Metron y Zell entre tus 11 jugadores.",
    jugadores: [
      "/img/dvalin.webp", "/img/mercury.webp","/img/metron.webp", "/img/zell.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Epsilon" },
    drops: ["/img/dvalin.webp", "/img/mercury.webp","/img/metron.webp", "/img/zell.webp"]
  },
                    {
    id: "royalredux",
    nombre: "La oscura Royal Academy Redux",
    descripcion: "Escoge a Joe King, Caleb Stonewall y David Samford entre tus 11 jugadores.",
    jugadores: [
      "/img/king.webp", "/img/caleb.webp","/img/samford.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Royalredux" },
    drops: ["/img/king.webp", "/img/caleb.webp","/img/samford.webp", "/img/sparrow.webp",
      "/img/bargie.webp"]
  },
                      {
    id: "prominence",
    nombre: "Las estrellas del Prominence",
    descripcion: "Escoge a Grent, Bomber y Torch entre tus 11 jugadores.",
    jugadores: [
      "/img/grent.webp", "/img/bomber.webp","/img/torch.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Prominence" },
    drops: ["/img/grent.webp", "/img/bomber.webp", "/img/baller.webp", 
      "/img/torch.webp", "/img/lean.webp", "/img/neppten.webp", "/img/heat.webp"]
  },                    {
    id: "diamond",
    nombre: "Las estrellas del Polvo de Diamantes",
    descripcion: "Escoge a Clear, Gocker y Gazelle entre tus 11 jugadores.",
    jugadores: [
      "/img/clear.webp", "/img/gocker.webp","/img/gazelle.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Diamond" },
    drops: ["/img/clear.webp", "/img/gocker.webp","/img/gazelle.webp", 
      "/img/arkew.webp", "/img/icer.webp", "/img/rhine.webp", "/img/droll.webp"]
  },                    {
    id: "caos",
    nombre: "El Caos, la fusión de Prominence y Diamond",
    descripcion: "Escoge a Grent, Bomber, Clear, Torch y Gazelle entre tus 11 jugadores.",
    jugadores: [
      "/img/grent.webp", "/img/bomber.webp","/img/clear.webp","/img/torch.webp","/img/gazelle.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Caos" },
    drops: ["/img/clear.webp", "/img/gocker.webp","/img/gazelle.webp", 
      "/img/rhine.webp", "/img/droll.webp", "/img/grent.webp", "/img/bomber.webp", 
      "/img/baller.webp", "/img/torch.webp", "/img/neppten.webp", "/img/heat.webp"]
  },                    {
    id: "Emperadoresoscuros",
    nombre: "Los Emperadores Oscuros",
    descripcion: "Escoge a Thomas Feldt, Nathan Swift, Shadow Cimmerian y Kevin Dragonfly entre tus 11 jugadores.",
    jugadores: [
      "/img/feldt.webp", "/img/nathan.webp","/img/shadow.webp","/img/kevin.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Emperadoresoscuros" },
    drops: ["/img/feldt.webp", "/img/nathan.webp","/img/shadow.webp","/img/kevin.webp", 
      "/img/jim.webp", "/img/sam.webp","/img/malcolm.webp","/img/steve.webp", 
      "/img/timmy.webp","/img/tod.webp","/img/max.webp",]
  },
    {
   id: "alius11",
   nombre: "La malvada Academia Alius",
   descripcion: "Escoge 11 jugadores de la Academia Alius de Inazuma Eleven 2.",
   jugadores: [
     "/img/galileo.webp", "/img/dvalin.webp", "/img/zell.webp", "/img/grent.webp",
     "/img/nero.webp", "/img/icer.webp", "/img/arkew.webp", "/img/gocker.webp",
     "/img/zohen.webp", "/img/hauser.webp", "/img/ganymede.webp", "/img/baller.webp",
     "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/bomber.webp", 
     "/img/jordan.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  
     "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp", "/img/pandora.webp", 
     "/img/metron.webp",  "/img/neppten.webp",  "/img/kormer.webp",  "/img/bellatrix.webp",
     "/img/xavier.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/torch.webp",  
     "/img/gazelle.webp",  "/img/wittz.webp", "/img/mercury.webp"
   ],
   recompensa: { tipo: "escudo", valor: "Alius" },
    drops: [     "/img/galileo.webp", "/img/dvalin.webp", "/img/zell.webp", "/img/grent.webp",
     "/img/nero.webp", "/img/icer.webp", "/img/arkew.webp", "/img/gocker.webp",
     "/img/zohen.webp", "/img/hauser.webp", "/img/ganymede.webp", "/img/baller.webp",
     "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/bomber.webp", 
     "/img/jordan.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  
     "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp", "/img/pandora.webp", 
     "/img/metron.webp",  "/img/neppten.webp",  "/img/kormer.webp",  "/img/bellatrix.webp",
     "/img/xavier.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/torch.webp",  
     "/img/gazelle.webp",  "/img/wittz.webp", "/img/mercury.webp"]
},
  {
      id: "inazumaeleven2",
    nombre: "Un 11 de Inazuma Eleven 2",
    descripcion: "Escoge 11 jugadores originales de Inazuma Eleven 2.",
    jugadores: [
      "/img/darren.webp", "/img/ropes.webp", "/img/daisy.webp", "/img/galileo.webp", "/img/dvalin.webp", 
      "/img/zell.webp", "/img/grent.webp",  "/img/nero.webp", "/img/scotty.webp", "/img/smith.webp",
      "/img/shawn.webp", "/img/hurley.webp", "/img/bomber.webp",  "/img/icer.webp",  "/img/arkew.webp",  
      "/img/gocker.webp",  "/img/zohen.webp",  "/img/hauser.webp", "/img/ganymede.webp", "/img/baller.webp", 
      "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/thor.webp", "/img/tori.webp", 
      "/img/caleb.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/jordan.webp", 
      "/img/sparrow.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  
      "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp", "/img/pandora.webp",  "/img/bellatrix.webp",
      "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/neppten.webp",  "/img/torch.webp",  
      "/img/gazelle.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/xavier.webp", "/img/bargie.webp"
      , "/img/mercury.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Génesis" },
    drops: ["/img/ark.webp", "/img/xavier.webp", "/img/bellatrix.webp", "/img/hauser.webp", "/img/zohen.webp",
      "/img/gele.webp", "/img/kiburn.webp", "/img/kiwill.webp", "/img/nero.webp", "/img/wittz.webp", 
      "/img/kormer.webp"]
  },

  {
      id: "neojapon",
    nombre: "El todopoderoso Neo Japón",
    descripcion: "Escoge a Joseph King, Zohen, Dave Quagmire y Wilbur Watkins entre tus 11 jugadores.",
    jugadores: [
      "/img/king.webp", "/img/zohen.webp","/img/dvalin.webp","/img/wittz.webp",
    ],
    recompensa: { tipo: "escudo", valor: "NeoJapon" },
    drops: ["/img/king.webp", "/img/zohen.webp","/img/master.webp","/img/hatch.webp", 
      "/img/turner.webp", "/img/cloak.webp","/img/tassman.webp","/img/wittz.webp", 
      "/img/dvalin.webp","/img/zell.webp","/img/heat.webp","/img/hera.webp","/img/tyler.webp",
      "/img/demeter.webp", "/img/hillvalley.webp", "/img/bargie.webp", ]
  },

      {
      id: "bigwaves",
    nombre: "Estrellas de la Fase Asiática del FFI",
    descripcion: "Escoge a Dolph Hensen y Bilal Kalil entre tus 11 jugadores.",
    jugadores: [
      "/img/dolphin.webp", "/img/kalil.webp"
    ],
    recompensa: { tipo: "escudo", valor: "BigWaves" },
    drops: ["/img/dolphin.webp" ]
  },
  
      {
      id: "leonesdeldesierto",
    nombre: "Estrellas de la Fase Asiática del FFI",
    descripcion: "Escoge a Dolph Hensen y Bilal Kalil entre tus 11 jugadores.",
    jugadores: [
      "/img/dolphin.webp", "/img/kalil.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Leonesdeldesierto" },
    drops: ["/img/kalil.webp" ]
  },

        {
      id: "dragonesdefuego",
    nombre: "Los Dragones de Corea",
    descripcion: "Escoge a Changsu Choi, Byron Love, Bryce Withingale y Claude Beacons entre tus 11 jugadores.",
    jugadores: [
      "/img/choi.webp", "/img/byron.webp", "/img/torch.webp", "/img/gazelle.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Dragonesdefuego" },
    drops: ["/img/choi.webp", "/img/byron.webp", "/img/torch.webp", "/img/gazelle.webp" ]
  },

          {
      id: "knightsofqueen",
    nombre: "Los delanteros más temibles del FFI",
    descripcion: "Escoge a Edgar Partinus, Paolo Bianchi y Mac Robingo entre tus 11 jugadores.",
    jugadores: [
      "/img/partinus.webp", "/img/paolo.webp", "/img/robingo.webp"
    ],
    recompensa: { tipo: "escudo", valor: "KnightsofQueen" },
    drops: ["/img/partinus.webp"]
  },

            {
      id: "equipod",
    nombre: "Acuto y su gemelo",
    descripcion: "Escoge a Julio Acuto y Jude Sharp entre tus 11 jugadores.",
    jugadores: [
      "/img/acuto.webp", "/img/jude.webp"
    ],
    recompensa: { tipo: "escudo", valor: "EquipoD" },
    drops: ["/img/acuto.webp"]
  },

              {
      id: "emperadores",
    nombre: "Garra argentina",
    descripcion: "Escoge a Thiago Torres y Leone Balone entre tus 11 jugadores.",
    jugadores: [
      "/img/thiago.webp", "/img/balone.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Emperadores" },
    drops: ["/img/thiago.webp", "/img/balone.webp"]
  },

                {
      id: "losrojos",
    nombre: "¡Arriba España!",
    descripcion: "Escoge a Víctor García y Alfonso Íñigo entre tus 11 jugadores.",
    jugadores: [
      "/img/garcia.webp", "/img/iñigo.webp"
    ],
    recompensa: { tipo: "escudo", valor: "LosRojos" },
    drops: ["/img/garcia.webp", "/img/iñigo.webp"]
  },

                  {
      id: "unicorn",
    nombre: "Los 3 pistoleros del Unicorn",
    descripcion: "Escoge a Mark Krueger, Erik Eagle y Dylan Keats entre tus 11 jugadores.",
    jugadores: [
      "/img/krueger.webp", "/img/erik.webp", "/img/keats.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Unicorn" },
    drops: ["/img/krueger.webp", "/img/erik.webp", "/img/keats.webp"]
  },

    {
      id: "inazumaeleven3",
    nombre: "Reúne un 11 de Inazuma Eleven 3",
    descripcion: "Escoge 11 jugadores originales de Inazuma Eleven 3.",
    jugadores: [
      "/img/blasi.webp",  "/img/dasilva.webp",  "/img/fox.webp",  "/img/helio.webp", "/img/iñigo.webp",
      "/img/luceafar.webp",  "/img/astaroth.webp", "/img/archer.webp", "/img/lagarto.webp",  "/img/vitesse.webp",  
      "/img/ferrum.webp",  "/img/mangrove.webp", "/img/ischer.webp",  "/img/jenkins.webp",  "/img/lephiel.webp",  
      "/img/hebimos.webp",  "/img/thiago.webp", "/img/thor.webp", "/img/kalil.webp",  "/img/minion.webp",  "/img/mountain.webp",  
      "/img/gaines.webp", "/img/garcia.webp",  "/img/bump.webp",  "/img/lump.webp",  "/img/rubu.webp", "/img/nenel.webp", 
      "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", 
      "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", 
      "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp",  
      "/img/zanos.webp",  "/img/gaiel.webp",  "/img/austin.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", 
      "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", 
      "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Orfeo" },
    drops: ["/img/blasi.webp",  "/img/nakata.webp",  "/img/generani.webp",  "/img/paolo.webp", "/img/gabrini.webp"]
  },

                    {
      id: "osreis",
    nombre: "Samba do Brasil",
    descripcion: "Escoge a Mac Robingo, Falcao da Silva y Carlos Lagarto entre tus 11 jugadores.",
    jugadores: [
      "/img/robingo.webp", "/img/dasilva.webp", "/img/lagarto.webp"
    ],
    recompensa: { tipo: "escudo", valor: "OsReis" },
    drops: ["/img/robingo.webp", "/img/dasilva.webp", "/img/lagarto.webp"]
  },

                      {
      id: "zoolanteam",
    nombre: "Los secuaces de Zoolan Rice",
    descripcion: "Escoge a Minion, Zorro y Coyote entre tus 11 jugadores.",
    jugadores: [
      "/img/minion.webp", "/img/fox.webp", "/img/coyote.webp"
    ],
    recompensa: { tipo: "escudo", valor: "ZoolanTeam" },
    drops: ["/img/minion.webp", "/img/fox.webp", "/img/coyote.webp"]
  },

                            {
      id: "angeloscuro",
    nombre: "Ángeles Oscuros  ",
    descripcion: "Escoge a Astaroth, Zanos, Gaiel, Destra y Sael entre tus 11 jugadores.",
    jugadores: [
      "/img/astaroth.webp", "/img/zanos.webp", "/img/gaiel.webp", "/img/sael.webp", "/img/destra.webp", 
    ],
    recompensa: { tipo: "escudo", valor: "AngelOscuro" },
    drops: ["/img/astaroth.webp", "/img/rubu.webp", "/img/hebimos.webp", "/img/nenel.webp", "/img/lephiel.webp", 
       "/img/wenel.webp", "/img/malphas.webp", "/img/zanos.webp", "/img/gaiel.webp", "/img/sael.webp", "/img/destra.webp", ]
  },
  
  {
   id: "littlegiants11",
   nombre: "El Raimon de África",
   descripcion: "Escoge 11 jugadores de entre jugadores del Raimon que tengan su contraparte en Costail con estos mismos.",
   jugadores: [
     "/img/helio.webp", "/img/mark.webp", "/img/vitesse.webp", "/img/nathan.webp",
     "/img/mountain.webp", "/img/jack.webp", "/img/gaines.webp", "/img/jim.webp",
     "/img/ferrum.webp", "/img/tod.webp", "/img/hampton.webp", "/img/steve.webp",
     "/img/haddad.webp",  "/img/timmy.webp",  "/img/ryan.webp",  "/img/sam.webp", 
     "/img/maximino.webp",  "/img/max.webp",  "/img/flare.webp",  "/img/axel.webp",  
     "/img/kevin.webp",  "/img/drago.webp",  "/img/difortune.webp", "/img/darren.webp", 
     "/img/mangrove.webp",  "/img/scotty.webp",  "/img/willy.webp",  "/img/vitrum.webp",
     "/img/leung.webp", "/img/shawn.webp", "/img/hedgeer.webp",  "/img/hurley.webp"
   ],
   recompensa: { tipo: "escudo", valor: "LittleGiants" },
    drops: ["/img/helio.webp", "/img/vitesse.webp", "/img/mountain.webp", "/img/gaines.webp", 
      "/img/ferrum.webp", "/img/hampton.webp", "/img/haddad.webp", "/img/ryan.webp",  
      "/img/maximino.webp",  "/img/flare.webp", "/img/drago.webp",  "/img/difortune.webp", 
      "/img/mangrove.webp",  "/img/scotty.webp",  "/img/vitrum.webp","/img/leung.webp", "/img/hedgeer.webp",]
},

                      {
      id: "seleccionmundial",
    nombre: "Las estrellas del Mundial",
    descripcion: "Escoge a integrantes de la Selección Mundial entre tus 11 jugadores.",
    jugadores: [
      "/img/helio.webp", "/img/bobby.webp", "/img/kalil.webp", "/img/thiago.webp", "/img/byron.webp", 
      "/img/krueger.webp", "/img/erik.webp", "/img/keats.webp", "/img/paolo.webp", "/img/robingo.webp", 
      "/img/partinus.webp", "/img/blasi.webp", "/img/mountain.webp", "/img/lagarto.webp", "/img/dolphin.webp"
      , "/img/choi.webp"
    ],
    recompensa: { tipo: "escudo", valor: "SeleccionMundial" },
    drops: ["/img/helio.webp", "/img/bobby.webp", "/img/kalil.webp", "/img/thiago.webp", "/img/byron.webp", 
      "/img/krueger.webp", "/img/erik.webp", "/img/keats.webp", "/img/paolo.webp", "/img/robingo.webp", 
      "/img/partinus.webp", "/img/blasi.webp", "/img/mountain.webp", "/img/lagarto.webp", "/img/dolphin.webp"
      , "/img/choi.webp"]
  },

                        {
      id: "inazumajapon",
    nombre: "¡Campeones del Mundo!",
    descripcion: "Escoge a integrantes del Inazuma Japón entre tus 11 jugadores.",
    jugadores: [
      "/img/mark.webp", "/img/nathan.webp", "/img/hurley.webp", "/img/jack.webp", "/img/tod.webp", 
      "/img/scotty.webp", "/img/shawn.webp", "/img/jude.webp", "/img/caleb.webp", "/img/thor.webp", 
      "/img/xavier.webp", "/img/jordan.webp", "/img/samford.webp", "/img/kevin.webp", "/img/axel.webp"
      , "/img/austin.webp", "/img/darren.webp", "/img/archer.webp"
    ],
    recompensa: { tipo: "escudo", valor: "InazumaJapon" },
    drops: ["/img/mark.webp", "/img/nathan.webp", "/img/hurley.webp", "/img/jack.webp", "/img/tod.webp", 
      "/img/scotty.webp", "/img/shawn.webp", "/img/jude.webp", "/img/caleb.webp", "/img/thor.webp", 
      "/img/xavier.webp", "/img/jordan.webp", "/img/samford.webp", "/img/kevin.webp", "/img/axel.webp"
      , "/img/austin.webp", "/img/darren.webp", "/img/archer.webp"]
  },

                        {
      id: "ogro",
    nombre: "La Amenaza del Ogro",
    descripcion: "Escoge a Lars Luceafar, los gemelos Trungus, Lancer, Callous y Malice entre tus 11 jugadores.",
    jugadores: [
      "/img/luceafar.webp", "/img/bump.webp", "/img/lump.webp", "/img/lancer.webp", "/img/callous.webp", 
      "/img/malice.webp", 
    ],
    recompensa: { tipo: "escudo", valor: "Ogro" },
    drops: ["/img/luceafar.webp", "/img/bump.webp", "/img/lump.webp", "/img/ischer.webp", "/img/jenkins.webp", 
       "/img/triumvir.webp", "/img/stark.webp", "/img/gunter.webp", "/img/lancer.webp", "/img/callous.webp", "/img/malice.webp", ]
  },

                          {
      id: "Raimonreservas",
    nombre: "La unidad B del Raimon",
    descripcion: "Escoge a Hugh Baudet y Shun Aoyama entre tus 11 jugadores.",
    jugadores: [
      "/img/hugh.webp", "/img/shun.webp"
    ],
    recompensa: { tipo: "escudo", valor: "RaimonB" },
    drops: [ "/img/hugh.webp", "/img/shun.webp" ]
  },

                            {
      id: "Empollones",
    nombre: "Los empollones",
    descripcion: "Escoge a Dave Inchy entre tus 11 jugadores.",
    jugadores: [
      "/img/inchy.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Empollones" },
    drops: [ "/img/inchy.webp" ]
  },
                            {
      id: "Vialactea",
    nombre: "El equipo del capitán Kyrk",
    descripcion: "Escoge a Jimmy Kirk y Riker Zaphod entre tus 11 jugadores.",
    jugadores: [
      "/img/kyrk.webp", "/img/zaphod.webp"
    ],
    recompensa: { tipo: "escudo", valor: "ViaLactea" },
    drops: [ "/img/kyrk.webp", "/img/zaphod.webp" ]
  },
                            {
      id: "Poderosafe",
    nombre: "Hasta el infinito y más allá",
    descripcion: "Escoge a Infinity Beyond, Aum Nirvana y Maxim Millennium entre tus 11 jugadores.",
    jugadores: ["/img/infinity.webp", "/img/nirvana.webp", "/img/maxim.webp"],
    recompensa: { tipo: "escudo", valor: "PoderosaFe" },
    drops: [ "/img/infinity.webp", "/img/nirvana.webp", "/img/maxim.webp" ]
  },
                             {
      id: "Royalgo",
    nombre: "La nueva Royal Academy",
    descripcion: "Escoge a Preston Princeton, Dracon Yale y Rex Remington entre tus 11 jugadores.",
    jugadores: ["/img/preston.webp", "/img/yale.webp", "/img/remington.webp"
    ],
    recompensa: { tipo: "escudo", valor: "RoyalGo" },
    drops: [ "/img/preston.webp", "/img/yale.webp", "/img/remington.webp" ]
  },
                             {
      id: "Calapirata",
    nombre: "La nueva Royal Academy",
    descripcion: "Escoge a Preston Princeton, Dracon Yale y Rex Remington entre tus 11 jugadores.",
    jugadores: ["/img/preston.webp", "/img/yale.webp", "/img/remington.webp"
    ],
    recompensa: { tipo: "escudo", valor: "CalaPirata" },
    drops: [ "/img/preston.webp", "/img/yale.webp", "/img/remington.webp" ]
  },


{
  id: "peabody",
  nombre: "Persigue a Peabody",
  descripcion: "Escoge a Mark Evans y JP Lapin en tu equipo.",
  jugadores: [
    "/img/mark.webp", "/img/jp.webp"
  ],
  recompensa: { tipo: "escudo", valor: "Peabody", soloVisual: true },
  drops: ["/img/peabody.webp" ],
},

  {
   id: "marvin",
   nombre: "Los trillizos Murdock",
   descripcion: "Escoge a Marvin, Tyler y Thomas Murdock en tu equipo.",
   jugadores: [
     "/img/tyler.webp", "/img/thomas.webp", "/img/marvin.webp"
   ],
   recompensa: { tipo: "escudo", valor: "Marvin" }
},
];

function TutorialModal({ onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.7)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 2000
    }}>
      <div style={{
        background: "#fff",
        padding: "30px 40px",
        borderRadius: "20px",
        minWidth: "350px",
        maxWidth: "90vw",
        boxShadow: "0 0 50px #333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{ marginBottom: "16px", fontWeight: "bold" }}>¿CÓMO JUGAR?</h2>
        <ol style={{ textAlign: "left", marginBottom: "18px", fontSize: "1.1em" }}>
          <li>➛ Haz clic en las cartas para elegir jugadores en la alineación.</li>
          <li></li>
          <li>➛ Cuando bloqueas los 11, ¡puedes conseguir logros y desbloquear escudos y cartas!</li>
          <li></li>
          <li>➛ Haz clic en <b>PERFIL</b> arriba a la derecha para personalizar tu nombre y escudo.</li>
          <li></li>
          <li>➛ Pulsa el botón <b>ALINEACIÓN</b> en tu perfil para crear tu propio 11 con las cartas conseguidas.</li>
          <li></li>
          <li>➛ ¡Dale al botón <b>REINICIAR</b> para empezar una nueva alineación y poder conseguir más logros!</li>
        </ol>
        <button
          onClick={onClose}
          style={{
            padding: "8px 22px",
            borderRadius: "8px",
            background: "#00bfff",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1em",
            cursor: "pointer"
          }}
        >
          ¡Entendido!
        </button>
      </div>
    </div>
  );
}

function darDrop(logro, cartasDesbloqueadas, setCartasDesbloqueadas) {
  if (!logro.drops || !Array.isArray(logro.drops)) return null;
  const posibles = logro.drops.filter(c => !cartasDesbloqueadas.includes(c));
  if (posibles.length === 0) return null;
  const carta = posibles[Math.floor(Math.random() * posibles.length)];
  setCartasDesbloqueadas(prev => [...prev, carta]);
  return carta;
}


function comprobarLogrosAutomaticos(logrosCompletados, setLogrosCompletados, setPerfil) {
  LOGROS.forEach(logro => {
    if (
      logro.jugadores.length === 0 &&
      (!logro.tipo || logro.tipo !== "manual") &&
      !logrosCompletados.includes(logro.id)
    ) {
      setLogrosCompletados(prev => {
        if (prev.includes(logro.id)) return prev;
        return [...prev, logro.id];
      });
// ...existing code...
if (
  logro.recompensa.tipo === "escudo" &&
  !logro.recompensa.soloVisual // <-- solo añade si NO es soloVisual
) {
  setPerfil(p => ({
    ...p,
    escudosDisponibles: [...p.escudosDisponibles, logro.recompensa.valor]
  }));
  alert(`¡Logro completado: ${logro.nombre}! Has conseguido el escudo de ${logro.recompensa.valor}`);
}
// ...existing code...
    }
  });
}


// ...existing code...

function completarLogroManual(logroId, logrosCompletados, setLogrosCompletados, setPerfil, cartasDesbloqueadas, setCartasDesbloqueadas) {
  const logro = LOGROS.find(l => l.id === logroId);
  if (!logro) return;

  if (!logrosCompletados.includes(logro.id)) {
    setLogrosCompletados([...logrosCompletados, logro.id]);
    if (
      logro.recompensa.tipo === "escudo" &&
      !logro.recompensa.soloVisual // <-- solo añade si NO es soloVisual
    ) {
      setPerfil(p => ({
        ...p,
        escudosDisponibles: [...p.escudosDisponibles, logro.recompensa.valor]
      }));
      alert(`¡Logro completado: ${logro.nombre}! Has conseguido el escudo de ${logro.recompensa.valor}`);
    }
    const carta = darDrop(logro, cartasDesbloqueadas, setCartasDesbloqueadas);
    if (carta) {
      alert(`¡Has conseguido la carta: ${carta.replace("/img/", "").replace(".webp", "")}!`);
    }
  } else if (logro.drops) {
    const posibles = logro.drops.filter(c => !cartasDesbloqueadas.includes(c));
    if (posibles.length > 0) {
      const carta = darDrop(logro, cartasDesbloqueadas, setCartasDesbloqueadas);
      if (carta) {
        alert(`¡Has conseguido la carta: ${carta.replace("/img/", "").replace(".webp", "")}!`);
      }
    }
  }
}

// ...existing code...

function comprobarLogros(nuevaSeleccion, logrosCompletados, setLogrosCompletados, setPerfil, bloqueadas, cartasDesbloqueadas, setCartasDesbloqueadas) {
  LOGROS.forEach(logro => {
    const jugadoresBloqueados = bloqueadas.map(pos => nuevaSeleccion[pos]);
    const jugadoresUnicos = [...new Set(jugadoresBloqueados)];

    let completado = false;

    if (logro.jugadores.length > 0 && logro.jugadores.length <= 11) {
      completado = logro.jugadores.every(j => jugadoresUnicos.includes(j));
    } else {
      const enComun = jugadoresUnicos.filter(j => logro.jugadores.includes(j));
      completado = enComun.length >= 11;
    }

    completado = completado && bloqueadas.length === 11;

    // Si el logro se completa...
    if (completado) {
      // Si no se ha completado nunca, añade escudo y drop
      if (!logrosCompletados.includes(logro.id)) {
        setLogrosCompletados([...logrosCompletados, logro.id]);
        if (
          logro.recompensa.tipo === "escudo" &&
          !logro.recompensa.soloVisual // <-- solo añade si NO es soloVisual
        ) {
          setPerfil(p => ({
            ...p,
            escudosDisponibles: [...p.escudosDisponibles, logro.recompensa.valor]
          }));
          alert(`¡Logro completado: ${logro.nombre}! Has conseguido el escudo de ${logro.recompensa.valor}`);
        }
        // Da drop si hay
        const carta = darDrop(logro, cartasDesbloqueadas, setCartasDesbloqueadas);
        if (carta) {
          alert(`¡Has conseguido la carta: ${carta.replace("/img/", "").replace(".webp", "")}!`);
        }
      } else if (logro.drops) {
        // Si ya tienes el escudo pero quedan drops, sigue dando carta
        const posibles = logro.drops.filter(c => !cartasDesbloqueadas.includes(c));
        if (posibles.length > 0) {
          const carta = darDrop(logro, cartasDesbloqueadas, setCartasDesbloqueadas);
          if (carta) {
            alert(`¡Has conseguido la carta: ${carta.replace("/img/", "").replace(".webp", "")}!`);
          }
        }
      }
    }
  });
}

// ...existing code...

function PerfilModal({ perfil, setPerfil, onClose, onAlineacion, exportarProgreso, importarProgreso }) {
  // ...resto igual...
  // Divide los escudos en filas de 20
  const filasEscudos = [];
  for (let i = 0; i < perfil.escudosDisponibles.length; i += 20) {
    filasEscudos.push(perfil.escudosDisponibles.slice(i, i + 20));
  }

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        padding: "30px 40px",
        borderRadius: "20px",
        minWidth: "350px",
        boxShadow: "0 0 50px #333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{ marginBottom: "20px" }}></h2>
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
          {perfil.escudo && (
            <img src={ESCUDOS[perfil.escudo]} alt="escudo" style={{ width: "60px", marginRight: "16px" }} />
          )}
          {/* Input para nombre */}
          <input
            type="text"
            value={perfil.nombre}
            onChange={e => setPerfil(p => ({ ...p, nombre: e.target.value }))}
            placeholder="Escribe tu nombre"
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "6px 12px"
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <strong>Escudos desbloqueados:</strong>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
            {filasEscudos.map((fila, idx) => (
              <div key={idx} style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {fila.map(e => (
                  <img
                    key={e}
                    src={ESCUDOS[e]}
                    alt={e}
                    style={{
                      width: "36px",
                      border: perfil.escudo === e ? "2px solid #00bfff" : "2px solid transparent",
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                    onClick={() => setPerfil(p => ({ ...p, escudo: e }))}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "8px 18px",
            borderRadius: "6px",
            cursor: "pointer",
            background: "#00bfff",
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          Guardar
        </button>
<button
  onClick={exportarProgreso}
  style={{
    marginTop: "10px",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#ffb300",
    color: "#222",
    fontWeight: "bold",
    marginRight: "8px"
  }}
>
  Exportar progreso
</button>
<button
  onClick={importarProgreso}
  style={{
    marginTop: "10px",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#00bfff",
    color: "#fff",
    fontWeight: "bold"
  }}
>
  Importar progreso
</button>
        <button
          onClick={onAlineacion}
          style={{
            marginTop: "10px",
            padding: "8px 18px",
            borderRadius: "6px",
            cursor: "pointer",
            background: "#00bfff",
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          ALINEACION
        </button>
      </div>
    </div>
  );
}

// ...existing code..

function AlineacionModal({ perfil, onClose, jugadoresDesbloqueados }) {
  const [alineacion, setAlineacion] = useState(() => {
    const saved = localStorage.getItem("alineacion");
    return saved ? JSON.parse(saved) : {};
  });
  const cartasDisponibles = jugadoresDesbloqueados;

  const imageStyle = {
    width: "110px",
    aspectRatio: "1080 / 1280",
    objectFit: "cover",
    borderRadius: 8,
    margin: "0 10px",
    cursor: "pointer",
    boxShadow: "0 4px 16px #0002"
  };

  // No permitir cartas repetidas en varias posiciones
  const cartasUsadas = Object.values(alineacion);

  const handleSelect = (pos, carta) => {
    setAlineacion(a => {
      const copia = { ...a };
      if (carta === "") {
        delete copia[pos];
      } else {
        copia[pos] = carta;
      }
      return copia;
    });
  };

  // Quitar carta con clic derecho
  const handleRightClick = (e, pos) => {
    e.preventDefault();
    setAlineacion(a => {
      const copia = { ...a };
      delete copia[pos];
      return copia;
    });
  };

  const handleGuardar = () => {
    localStorage.setItem("alineacion", JSON.stringify(alineacion));
    onClose();
  };



  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.7)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000,
      fontFamily: "'Bebas Neue', Arial, sans-serif"
    }}>
      <div style={{
        padding: "20px 20px",
        borderRadius: "24px",
        minWidth: "600px",
        boxShadow: "0 0 50px #333",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Fondo decorativo */}
        <img
          src="https://img.freepik.com/vector-gratis/campo-futbol-verde_225004-1137.jpg?semt=ais_hybrid&w=740&q=80"
          alt="fondo"
          style={{
            position: "absolute",
            left: 0, top: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: 0.9,
            zIndex: 0,
            borderRadius: "24px"
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            marginBottom: "20px",
            marginTop: "-22px",
            marginLeft: "13px",
            fontFamily: "'Bebas Neue', Arial, sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#1a2a3a",
            letterSpacing: "1px"
          }}>
            <b>ALINEACIÓN</b>
          </h2>
          {/* Portero */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>
            <div style={{ textAlign: "center" }}>
              <span style={{
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "1px",
                color: "#2a3a4a"
              }}>PORTERO:</span><br />
              {alineacion.portero ? (
                <img
                  src={alineacion.portero}
                  alt="portero"
                  style={imageStyle}
                  onContextMenu={e => handleRightClick(e, "portero")}
                  title="Clic derecho para quitar"
                />
              ) : (
                <select
                  onChange={e => handleSelect("portero", e.target.value)}
                  value={alineacion.portero || ""}
                  style={{
                    padding: "6px",
                    borderRadius: "6px",
                    width: "120px",
                    fontFamily: "'Montserrat', Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem"
                  }}
                >
                  <option value="">Selecciona carta</option>
                  {cartasDisponibles
                    .filter(carta => !cartasUsadas.includes(carta))
                    .map(carta => (
                      <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".webp", "")}</option>
                    ))}
                </select>
              )}
            </div>
          </div>
          {/* Defensas */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "25px" }}>
            {["defensa1", "defensa2", "defensa3", "defensa4"].map(pos => (
              <div key={pos} style={{ textAlign: "center" }}>
                <span style={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#2a3a4a"
                }}>DEFENSA:</span><br />
                {alineacion[pos] ? (
                  <img
                    src={alineacion[pos]}
                    alt={pos}
                    style={imageStyle}
                    onContextMenu={e => handleRightClick(e, pos)}
                    title="Clic derecho para quitar"
                  />
                ) : (
                  <select
                    onChange={e => handleSelect(pos, e.target.value)}
                    value={alineacion[pos] || ""}
                    style={{
                      padding: "6px",
                      borderRadius: "6px",
                      width: "120px",
                      fontFamily: "'Montserrat', Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem"
                    }}
                  >
                    <option value="">Selecciona carta</option>
                    {cartasDisponibles
                      .filter(carta => !cartasUsadas.includes(carta))
                      .map(carta => (
                        <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".webp", "")}</option>
                      ))}
                  </select>
                )}
              </div>
            ))}
          </div>
          {/* Medios */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "25px" }}>
            {["medio1", "medio2", "medio3"].map(pos => (
              <div key={pos} style={{ textAlign: "center" }}>
                <span style={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#2a3a4a"
                }}>MEDIO:</span><br />
                {alineacion[pos] ? (
                  <img
                    src={alineacion[pos]}
                    alt={pos}
                    style={imageStyle}
                    onContextMenu={e => handleRightClick(e, pos)}
                    title="Clic derecho para quitar"
                  />
                ) : (
                  <select
                    onChange={e => handleSelect(pos, e.target.value)}
                    value={alineacion[pos] || ""}
                    style={{
                      padding: "6px",
                      borderRadius: "6px",
                      width: "120px",
                      fontFamily: "'Montserrat', Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem"
                    }}
                  >
                    <option value="">Selecciona carta</option>
                    {cartasDisponibles
                      .filter(carta => !cartasUsadas.includes(carta))
                      .map(carta => (
                        <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".webp", "")}</option>
                      ))}
                  </select>
                )}
              </div>
            ))}
          </div>
          {/* Delanteros */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
            {["delantero1", "delantero2", "delantero3"].map(pos => (
              <div key={pos} style={{ textAlign: "center" }}>
                <span style={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#2a3a4a"
                }}>DELANTERO:</span><br />
                {alineacion[pos] ? (
                  <img
                    src={alineacion[pos]}
                    alt={pos}
                    style={imageStyle}
                    onContextMenu={e => handleRightClick(e, pos)}
                    title="Clic derecho para quitar"
                  />
                ) : (
                  <select
                    onChange={e => handleSelect(pos, e.target.value)}
                    value={alineacion[pos] || ""}
                    style={{
                      padding: "6px",
                      borderRadius: "6px",
                      width: "120px",
                      fontFamily: "'Montserrat', Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem"
                    }}
                  >
                    <option value="">Selecciona carta</option>
                    {cartasDisponibles
                      .filter(carta => !cartasUsadas.includes(carta))
                      .map(carta => (
                        <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".webp", "")}</option>
                      ))}
                  </select>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={handleGuardar}
            style={{
              marginTop: "20px",
              padding: "10px 28px",
              borderRadius: "8px",
              cursor: "pointer",
              background: "linear-gradient(90deg, #1fa800 60%, #0e6b00 100%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              letterSpacing: "1px",
              border: "none",
              boxShadow: "0 2px 8px #0002"
            }}
          >
            GUARDAR
          </button>
        </div>
      </div>
    </div>
  );
}
// ...existing code...


function Logros({ logrosCompletados, visible, onToggle }) {
  if (!visible) {
    // Botón flotante para mostrar el menú
    return (
      <button
        onClick={onToggle}
        style={{
          position: "fixed",
          top: "150px",
          left: "10px",
          zIndex: 20,
          background: "#fff",
          border: "2px solid #00bfff",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          boxShadow: "2px 0 10px #333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5em",
          cursor: "pointer"
        }}
        title="Mostrar logros"
      >
        🏆
      </button>
    );
  }

  return (
    <div style={{
      position: "fixed",
      top: "150px",
      left: "0px",
      background: "rgba(255,255,255,0.85)",
      padding: "20px 10px 20px 20px",
      borderRadius: "0 20px 10px 0",
      height: "calc(100vh - 130px)",
      overflowY: "auto",
      width: "400px",
      boxShadow: "2px 0 10px #333",
      zIndex: 20
    }}>
      {/* Botón para ocultar */}
      <button
        onClick={onToggle}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "#00bfff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          fontSize: "1.2em",
          cursor: "pointer",
          zIndex: 21
        }}
        title="Ocultar logros"
      >
        ✕
      </button>
      <h2 style={{ marginTop: 0, marginBottom: "15px" }}><b><i>🏆 LOGROS 🏆</i></b></h2>
      {LOGROS.map(logro => (
        <div key={logro.id} style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
          <img src={ESCUDOS[logro.recompensa.valor]} alt="escudo" style={{ width: "35px", marginRight: "12px" }} />
          <div>
            <strong>{logro.nombre}</strong>
            <span> - {logro.descripcion}</span>
            {logrosCompletados.includes(logro.id) && (
              <span style={{ color: "green", marginLeft: "10px" }}>✔ Completado</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


const getRandomCard = (available, used) => {
  const choices = available.filter(img => !used.includes(img));
  return choices[Math.floor(Math.random() * choices.length)];
};


export default function Home() {
const [seleccionadas, setSeleccionadas] = useState({});
const [bloqueadas, setBloqueadas] = useState([]);
const [perfil, setPerfil] = useState({ nombre: "", escudo: "", escudosDisponibles: [] });
const [logrosCompletados, setLogrosCompletados] = useState([]);
const [cartasDesbloqueadas, setCartasDesbloqueadas] = useState([]);
const [contadorCartas, setContadorCartas] = useState({});
const [showPerfil, setShowPerfil] = useState(false);
const [showAlineacion, setShowAlineacion] = useState(false);
const [datosCargados, setDatosCargados] = useState(false);
const [showTutorial, setShowTutorial] = useState(false);
const [logrosVisibles, setLogrosVisibles] = useState(true);
const [showSecretBar, setShowSecretBar] = useState(false);
const [secretCode, setSecretCode] = useState("");
const [keySequence, setKeySequence] = useState([]);


useEffect(() => {
  const SECRET = "akihirocabron";
  const handleKeyDown = (e) => {
    const key = e.key.toLowerCase();
    // Solo letras
    if (!/^[a-z]$/.test(key)) return;
    setKeySequence(seq => {
      const newSeq = [...seq, key].slice(-SECRET.length); // Solo guarda las últimas N teclas
      if (newSeq.join("") === SECRET) {
        setShowSecretBar(true);
        return [];
      }
      return newSeq;
    });
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);


useEffect(() => {
  if (typeof window !== "undefined") {
    const savedSeleccionadas = localStorage.getItem("seleccionadas");
    if (savedSeleccionadas) setSeleccionadas(JSON.parse(savedSeleccionadas));

    const savedBloqueadas = localStorage.getItem("bloqueadas");
    if (savedBloqueadas) setBloqueadas(JSON.parse(savedBloqueadas));

    const savedPerfil = localStorage.getItem("perfil");
    if (savedPerfil) setPerfil(JSON.parse(savedPerfil));

    const savedLogros = localStorage.getItem("logrosCompletados");
    if (savedLogros) setLogrosCompletados(JSON.parse(savedLogros));

    const savedCartasDesbloqueadas = localStorage.getItem("cartasDesbloqueadas");
    if (savedCartasDesbloqueadas) setCartasDesbloqueadas(JSON.parse(savedCartasDesbloqueadas));

    const savedContadorCartas = localStorage.getItem("contadorCartas");
    if (savedContadorCartas) setContadorCartas(JSON.parse(savedContadorCartas));

    setDatosCargados(true);
  }
}, []);
useEffect(() => {
  if (!datosCargados) return;
  localStorage.setItem("perfil", JSON.stringify(perfil));
}, [perfil, datosCargados]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const yaVioTutorial = localStorage.getItem("tutorialVisto");
      if (!yaVioTutorial) setShowTutorial(true);
    }
  }, []);

    function cerrarTutorial() {
    setShowTutorial(false);
    localStorage.setItem("tutorialVisto", "1");
  }

  
useEffect(() => {
  if (!datosCargados) return;
  localStorage.setItem("logrosCompletados", JSON.stringify(logrosCompletados));
}, [logrosCompletados, datosCargados]);

// Guardar selección de cartas
useEffect(() => {
  if (!datosCargados) return;
  localStorage.setItem("seleccionadas", JSON.stringify(seleccionadas));
}, [seleccionadas, datosCargados]);

// Guardar bloqueadas
useEffect(() => {
  if (!datosCargados) return;
  localStorage.setItem("bloqueadas", JSON.stringify(bloqueadas));
}, [bloqueadas, datosCargados]);

// Guardar cartas desbloqueadas
useEffect(() => {
  if (!datosCargados) return;
  localStorage.setItem("cartasDesbloqueadas", JSON.stringify(cartasDesbloqueadas));
}, [cartasDesbloqueadas, datosCargados]);

// Guardar contador de cartas
useEffect(() => {
  if (!datosCargados) return;
  localStorage.setItem("contadorCartas", JSON.stringify(contadorCartas));
}, [contadorCartas, datosCargados]);

useEffect(() => {
  if (!datosCargados) return;
  localStorage.setItem("perfil", JSON.stringify(perfil));
}, [perfil, datosCargados]);


useEffect(() => {
  if (!datosCargados) return;
  comprobarLogrosAutomaticos(logrosCompletados, setLogrosCompletados, setPerfil);
}, [datosCargados]);


  useEffect(() => {
    inicializarCartas();
  }, []);

  useEffect(() => {
    comprobarLogros(seleccionadas, logrosCompletados, setLogrosCompletados, setPerfil,  bloqueadas, cartasDesbloqueadas, setCartasDesbloqueadas);
  }, [seleccionadas, bloqueadas]);

  function inicializarCartas() {
    const usadas = [];
    const nuevas = {};
    Object.keys(posiciones).forEach(pos => {
      nuevas[pos] = getRandomCard(posiciones[pos], usadas);
      usadas.push(nuevas[pos]);
    });
    setSeleccionadas(nuevas);
    setBloqueadas([]);
  };

// ...existing code...
function exportarProgreso() {
  const data = {
    perfil,
    logrosCompletados,
    cartasDesbloqueadas,
    contadorCartas,
  };
  const code = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
  prompt("Copia este código y guárdalo para importar tu progreso en otro dispositivo:", code);
}

function importarProgreso() {
  const code = prompt("Pega aquí tu código de progreso:");
  if (!code) return;
  try {
    const data = JSON.parse(decodeURIComponent(escape(atob(code))));
    if (data.perfil) setPerfil(data.perfil);
    if (data.logrosCompletados) setLogrosCompletados(data.logrosCompletados);
    if (data.cartasDesbloqueadas) setCartasDesbloqueadas(data.cartasDesbloqueadas);
    if (data.contadorCartas) setContadorCartas(data.contadorCartas);
    alert("¡Progreso importado correctamente!");
  } catch (e) {
    alert("Código no válido.");
  }
}

function canjearCodigo() {
  try {
    // Recupera los códigos ya canjeados del localStorage
    const codigosUsados = JSON.parse(localStorage.getItem("codigosUsados") || "[]");

    // Normaliza el código introducido
    const code = secretCode.trim().toLowerCase();

    // Si ya se ha usado, no dejar canjear
    if (codigosUsados.includes(code)) {
      alert("¡Este código ya ha sido canjeado!");
      setSecretCode("");
      setShowSecretBar(false);
      return;
    }

    // Código especial Alius
    if (code === "alius") {
      completarLogroManual(
        "alius11",
        logrosCompletados,
        setLogrosCompletados,
        setPerfil,
        cartasDesbloqueadas,
        setCartasDesbloqueadas
      );
      alert("¡Código Alius canjeado!");
      codigosUsados.push(code);
      localStorage.setItem("codigosUsados", JSON.stringify(codigosUsados));
    }
    // Códigos tipo logro:xxxx
    else if (code.startsWith("logro:")) {
      const logroId = code.replace("logro:", "");
      completarLogroManual(
        logroId,
        logrosCompletados,
        setLogrosCompletados,
        setPerfil,
        cartasDesbloqueadas,
        setCartasDesbloqueadas
      );
      alert("¡Logro canjeado!");
      codigosUsados.push(code);
      localStorage.setItem("codigosUsados", JSON.stringify(codigosUsados));
    } else {
      alert("Código no válido.");
    }
  } catch (e) {
    alert("Error al canjear el código.");
  }
  setSecretCode("");
  setShowSecretBar(false);
}
// ...existing code...


  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("perfil");
      if (saved) setPerfil(JSON.parse(saved));
    }
  }, []);


  function handleClick(pos) {
    if (bloqueadas.includes(pos)) return;

    setBloqueadas([...bloqueadas, pos]);

    const usadas = Object.keys(seleccionadas)
      .filter(k => k === pos || bloqueadas.includes(k))
      .map(k => seleccionadas[k]);

    const nuevas = {};
    Object.keys(posiciones).forEach(p => {
      if (p === pos || bloqueadas.includes(p)) {
        nuevas[p] = seleccionadas[p];
      } else {
        nuevas[p] = getRandomCard(posiciones[p], usadas);
        usadas.push(nuevas[p]);
      }
    });
    setSeleccionadas(nuevas);
  }
// ...existing code...

  // Estilo de imagen manteniendo proporción 1080x1280
  const imageStyle = (pos) => ({
    width: "150px",
    aspectRatio: "1080 / 1280",
    objectFit: "cover",
    cursor: bloqueadas.includes(pos) ? "default" : "pointer",
    borderRadius: 5,
    boxShadow: bloqueadas.includes(pos) ? "0 0 5px 5px yellow" : "none"
  });

  return (
    <div style={{
      backgroundImage: "url(https://i.postimg.cc/qRZj8Mcp/campo.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      width: "100vw",
      padding: 0,
      margin: 0,
      position: "relative",
      overflow: "hidden"
    }}>
{showSecretBar && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    background: "#222",
    color: "#fff",
    zIndex: 3000,
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <input
      autoFocus
      type="text"
      value={secretCode}
      onChange={e => setSecretCode(e.target.value)}
      onKeyDown={e => {
        if (e.key === "Enter") canjearCodigo();
        if (e.key === "Escape") setShowSecretBar(false);
      }}
      placeholder="Introduce tu código regalo y pulsa Enter"
      style={{
        fontSize: "1.2em",
        padding: "8px 16px",
        borderRadius: "8px",
        border: "2px solid #00bfff",
        width: "350px",
        marginRight: "12px",
        color: "#000" // <-- Añade esta línea
      }}
    />
    <button
      onClick={canjearCodigo}
      style={{
        padding: "8px 18px",
        borderRadius: "8px",
        background: "#00bfff",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1.1em",
        cursor: "pointer"
      }}
    >
      Canjear
    </button>
  </div>
)}

      {/* Barra superior */}
      {showTutorial && <TutorialModal onClose={cerrarTutorial} />}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "10px 30px",
        zIndex: 10
      }}>
        {perfil.nombre && perfil.escudo && (
          <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
            <img src={ESCUDOS[perfil.escudo]} alt="escudo" style={{ width: "50px", marginRight: "10px" }} />
            <span style={{ color: "#ffffffff", fontWeight: "bold", fontSize: "25px", textShadow: "0 0 6px #000000ff" }}>{perfil.nombre}</span>
          </div>
        )}
        <button
          onClick={() => setShowPerfil(true)}
          style={{
            padding: "8px 20px",
            fontSize: "18px",
            borderRadius: "8px",
            background: "#d0ff00ff",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 0 8px #000000ff"
          }}
        >
          PERFIL
        </button>
      </div>
{/* Logro manual: Caravana */}
<div style={{ marginTop: "45px", textAlign: "right" }}>
  <a
    href="https://www.youtube.com/@lacaravanainazuma"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      marginTop: "10px",
      marginRight: "30px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      background: "#FF0000",
      borderRadius: "10px",
      boxShadow: "0 0 8px #00000055",
      cursor: "pointer"
    }}
    onClick={() => completarLogroManual("caravana", logrosCompletados, setLogrosCompletados, setPerfil, cartasDesbloqueadas, setCartasDesbloqueadas)}
  >
        <svg width="32" height="32" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="none"/>
      <polygon points="12,10 24,16 12,22" fill="#fff"/>
    </svg>
  </a>
</div>


{showPerfil && !showAlineacion && (
  <PerfilModal
    perfil={perfil}
    setPerfil={setPerfil}
    onClose={() => setShowPerfil(false)}
    onAlineacion={() => setShowAlineacion(true)}
    exportarProgreso={exportarProgreso}
    importarProgreso={importarProgreso}
  />
)}
    {showAlineacion && (
      <AlineacionModal
      perfil={perfil}
      onClose={() => setShowAlineacion(false)}
      jugadoresDesbloqueados={cartasDesbloqueadas}
    />
    )}
     {!showAlineacion && (
    <Logros
      logrosCompletados={logrosCompletados}
      visible={logrosVisibles}
      onToggle={() => setLogrosVisibles(v => !v)}
    />
  )}

    {/* ⬇️ Elimina el fondo duplicado y el segundo Logros */}
    {!showAlineacion && (
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "0px",
        marginLeft: "300px",
        width: "calc(100vw - 360px)"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px"
        }}>
          <h1 style={{ color: "#fff", marginBottom: "0px", textShadow: "0 0 6px #000" }}>
  
          </h1>

            {/* Portero */}
            <div style={{ margin: "10px 0" }}>
              <img
                src={seleccionadas.portero}
                alt="portero"
                onClick={() => handleClick("portero")}
                style={imageStyle("portero")}
              />
            </div>

            {/* Defensas */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
              {["defensa1","defensa2","defensa3","defensa4"].map(pos => (
                <img
                  key={pos}
                  src={seleccionadas[pos]}
                  alt={pos}
                  onClick={() => handleClick(pos)}
                  style={imageStyle(pos)}
                />
              ))}
            </div>
            
            {/* Medios */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
              {["medio1","medio2","medio3"].map(pos => (
                <img
                  key={pos}
                  src={seleccionadas[pos]}
                  alt={pos}
                  onClick={() => handleClick(pos)}
                  style={imageStyle(pos)}
                />
              ))}
            </div>

            {/* Delanteros */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
              {["delantero1","delantero2","delantero3"].map(pos => (
                <img
                  key={pos}
                  src={seleccionadas[pos]}
                  alt={pos}
                  onClick={() => handleClick(pos)}
                  style={imageStyle(pos)}
                />
              ))}
            </div>

            <button
              onClick={inicializarCartas}
              style={{
              marginTop: "10px",
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: "green", // fondo verde
              color: "white",           // texto blanco para contraste
              fontWeight: "bold",       // negrita
              border: "none"            // opcional: quita borde por defecto
            }}
          >
            REINICIAR

          </button>
          </div>
        </div>
        ) }
      </div>
      );
    }
      

