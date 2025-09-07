import { useState, useEffect } from "react";

const posiciones = {
  portero: ["/img/mark.webp", "/img/king.webp", "/img/darren.webp", "/img/mask.webp", "/img/feldt.webp", "/img/idol.webp", "/img/poseidon.webp", "/img/hillman.webp", "/img/ropes.webp", "/img/daisy.webp", "/img/galileo.webp", "/img/dvalin.webp", "/img/zell.webp", "/img/grent.webp",  "/img/nero.webp", "/img/blasi.webp",  "/img/dasilva.webp",  "/img/fox.webp",  "/img/helio.webp", "/img/iñigo.webp",  "/img/luceafar.webp",  "https://i.postimg.cc/SNT4PWyr/astaroth.webp"],
  defensa1: ["/img/nathan.webp","/img/tod.webp", "/img/scotty.webp", "/img/aitor.webp", "/img/archer.webp", "/img/martin.webp", "/img/master.webp", "/img/monkey.webp", "/img/malcolm.webp", "/img/apollo.webp", "/img/hephestus.webp", "/img/sweet.webp", "/img/smith.webp", "/img/shawn.webp", "/img/hurley.webp", "/img/bomber.webp",  "/img/icer.webp",  "/img/arkew.webp",  "/img/gocker.webp",  "/img/zohen.webp",  "/img/hauser.webp",  "/img/lagarto.webp",  "/img/vitesse.webp",  "/img/ferrum.webp",  "/img/mangrove.webp", "/img/ischer.webp",  "/img/jenkins.webp",  "/img/lephiel.webp",  "/img/hebimos.webp"],
  defensa2: ["/img/jack.webp", "/img/sor.webp", "/img/thiago.webp", "/img/gabi.webp", "/img/aitor.webp", "/img/bobby.webp", "/img/jim.webp", "/img/sam.webp", "/img/drent.webp", "/img/lion.webp", "/img/simmons.webp", "/img/hillvalley.webp", "/img/sherman.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/island.webp", "/img/downtown.webp", "/img/shawn.webp", "/img/ganymede.webp", "/img/baller.webp", "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/thor.webp", "/img/kalil.webp",  "/img/minion.webp",  "/img/mountain.webp",  "/img/gaines.webp", "/img/garcia.webp",  "/img/bump.webp",  "/img/lump.webp",  "/img/rubu.webp", "/img/nenel.webp"],
  defensa3: ["/img/jack.webp", "/img/sor.webp", "/img/thiago.webp", "/img/gabi.webp", "/img/aitor.webp", "/img/bobby.webp", "/img/jim.webp", "/img/sam.webp", "/img/drent.webp", "/img/lion.webp", "/img/simmons.webp", "/img/hillvalley.webp", "/img/sherman.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/island.webp", "/img/downtown.webp", "/img/shawn.webp", "/img/ganymede.webp", "/img/baller.webp", "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/thor.webp", "/img/kalil.webp",  "/img/minion.webp",  "/img/mountain.webp",  "/img/gaines.webp", "/img/garcia.webp",  "/img/bump.webp",  "/img/lump.webp",  "/img/rubu.webp", "/img/nenel.webp"],
  defensa4: ["/img/nathan.webp", "/img/tod.webp", "/img/scotty.webp", "/img/aitor.webp", "/img/archer.webp", "/img/martin.webp", "/img/master.webp", "/img/monkey.webp", "/img/malcolm.webp", "/img/apollo.webp", "/img/hephestus.webp", "/img/sweet.webp", "/img/smith.webp", "/img/shawn.webp", "/img/hurley.webp", "/img/bomber.webp",  "/img/icer.webp",  "/img/arkew.webp",  "/img/gocker.webp",  "/img/zohen.webp",  "/img/hauser.webp",  "/img/lagarto.webp",  "/img/vitesse.webp",  "/img/ferrum.webp",  "/img/mangrove.webp", "/img/ischer.webp",  "/img/jenkins.webp",  "/img/lephiel.webp",  "/img/hebimos.webp"],
  medio1: ["/img/nathan.webp", "/img/arion.webp", "/img/jude.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/max.webp", "/img/steve.webp", "/img/erik.webp", "/img/bloom.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/master.webp", "/img/monkey.webp", "/img/swing.webp", "/img/artemis.webp", "/img/hermes.webp", "/img/hera.webp", "/img/athena.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/pandora.webp", "/img/jordan.webp", "/img/dvalin.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/bellatrix.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp"],
  medio2: ["/img/arion.webp", "/img/jude.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/steve.webp", "/img/sam.webp", "/img/erik.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/waldon.webp", "/img/hermes.webp", "/img/hera.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/jordan.webp", "/img/pandora.webp", "/img/dvalin.webp", "/img/metron.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/neppten.webp",  "/img/kormer.webp",  "/img/bellatrix.webp",  "/img/thor.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp",  "/img/zanos.webp",  "/img/gaiel.webp"],
  medio3: ["/img/nathan.webp", "/img/arion.webp", "/img/jude.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/max.webp", "/img/steve.webp", "/img/erik.webp", "/img/bloom.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/master.webp", "/img/monkey.webp", "/img/swing.webp", "/img/artemis.webp", "/img/hermes.webp", "/img/hera.webp", "/img/athena.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/pandora.webp", "/img/jordan.webp", "/img/dvalin.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/bellatrix.webp", "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp"],
  delantero1: ["/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/max.webp", "/img/kevin.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/swing.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/neppten.webp",  "/img/torch.webp",  "/img/gazelle.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp"],
  delantero2: ["/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/kevin.webp", "/img/willy.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/demeter.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp", "/img/dvalin.webp", "/img/metron.webp", "/img/zell.webp",  "/img/torch.webp",  "/img/gazelle.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp",  "/img/zanos.webp",  "/img/gaiel.webp"],
  delantero3: ["/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/max.webp", "/img/kevin.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/swing.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/neppten.webp",  "/img/torch.webp",  "/img/gazelle.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp"]
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
  Épsilon: "/img/epsilon.webp",
  Royalredux: "/img/royalredux.webp",
  Prominence: "/img/prominence.webp",
  Diamond: "/img/diamond.webp",
  Caos: "/img/caos.webp",
  Emperadoresoscuros: "/img/emperadoresoscuros.webp",
  Alius: "/img/alius.webp",
  Caseta: "/img/caseta.webp",
  Caravana: "/img/caravana.webp",
  Génesis: "/img/genesis.webp",
  Marvin: "/img/neogod.webp",
  LittleGiants: "/img/littlegiants.webp",
  Orfeo: "/img/orfeo.webp"
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
    nombre: "Reúne al Instituto Occult",
    descripcion: "Escoge a Mask y Talisman entre tus 11 jugadores.",
    jugadores: [
      "/img/mask.webp", "/img/talisman.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Occult" }
  },
    {
    id: "wild",
    nombre: "Reúne al Instituto Wild",
    descripcion: "Escoge a Chicken, Cheetah y Gorilla entre tus 11 jugadores.",
    jugadores: [
      "/img/chicken.webp", "/img/cheetah.webp", "/img/gorilla.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Wild" }
  },
      {
    id: "brain",
    nombre: "Reúne al Instituto Brain",
    descripcion: "Escoge a Thomas Feldt y Neil Turner entre tus 11 jugadores.",
    jugadores: [
      "/img/feldt.webp", "/img/turner.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Brain" }
  },
        {
    id: "otaku",
    nombre: "Reúne al Instituto Otaku",
    descripcion: "Escoge a Idol, Gamer y Artist  entre tus 11 jugadores.",
    jugadores: [
      "/img/idol.webp", "/img/gamer.webp",  "/img/artist.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Otaku" }
  },
          {
    id: "royal",
    nombre: "Reúne a la vieja guarda de la Royal",
    descripcion: "Escoge a King, Jude y Samford  entre tus 11 jugadores.",
    jugadores: [
      "/img/king.webp", "/img/jude.webp",  "/img/samford.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Royal" }
  },
                  {
    id: "veteranos",
    nombre: "Junta a 3 leyendas del mítico Inazuma Eleven",
    descripcion: "Escoge a Seymour Hillman, Charles Island y Arthur Sweet entre tus 11 jugadores.",
    jugadores: [
      "/img/hillman.webp", "/img/island.webp", "/img/sweet.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Veteranos" }
  },
            {
    id: "shuriken",
    nombre: "Junta al capitán del Shuriken con un viejo rival",
    descripcion: "Escoge a Sail Bluesea y Seymour Hillman, viejo rival del entrenador Igajima, entre tus 11 jugadores.",
    jugadores: [
      "/img/cloak.webp", "/img/hillman.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Shuriken" }
  },
              {
    id: "farm",
    nombre: "Junta a la defensa del Instituto Farm",
    descripcion: "Escoge a Herb Sherman y Mark Hillvalley entre tus 11 jugadores.",
    jugadores: [
      "/img/sherman.webp", "/img/hillvalley.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Farm" }
  },
              {
    id: "kirkwood",
    nombre: "Junta a 3 antiguos compañeros del Instituto Kirkwood",
    descripcion: "Escoge a Malcolm Night, Axel Blaze y Marvin Murdock entre tus 11 jugadores.",
    jugadores: [
      "/img/malcolm.webp", "/img/axel.webp", "/img/marvin.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Kirkwood" }
  },
  {
    id: "inazumaeleven1",
    nombre: "Reúne un 11 de Inazuma Eleven 1",
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
    recompensa: { tipo: "escudo", valor: "Zeus" }
  },
    {
    id: "raimon11",
    nombre: "Reúne el 11 del Raimon de Mark",
    descripcion: "Escoge 11 jugadores del Raimon de la saga de Mark Evans.",
    jugadores: [
      "/img/mark.webp", "/img/jude.webp", "/img/axel.webp", "/img/nathan.webp",
      "/img/shawn.webp", "/img/tod.webp", "/img/max.webp", "/img/jack.webp",
      "/img/kevin.webp", "/img/timmy.webp", "/img/willy.webp", "/img/bobby.webp",
      "/img/steve.webp", "/img/erik.webp", "/img/byron.webp", "/img/sam.webp", 
      "/img/scotty.webp", "/img/hurley.webp", "/img/tori.webp", "/img/jim.webp",
      "/img/darren.webp", "/img/sue.webp", "/img/shadow.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Raimon" }
  },
                {
    id: "servicio",
    nombre: "Junta a 3 jugadores del Servicio Secreto",
    descripcion: "Escoge a Ian Smith, la Agente M y a Tori Vanguard entre tus 11 jugadores.",
    jugadores: [
      "/img/smith.webp", "/img/agentem.webp", "/img/tori.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Servicio" }
  },
                  {
    id: "alpino",
    nombre: "Junta a 3 jugadores del Instituto Alpino",
    descripcion: "Escoge a Adam Ropes, Joaquine Downtown y Shawn Froste entre tus 11 jugadores.",
    jugadores: [
      "/img/ropes.webp", "/img/downtown.webp", "/img/shawn.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Alpino" }
  },
                    {
    id: "claustro",
    nombre: "Junta a un antiguo estudiante del Claustro con un fan",
    descripcion: "Escoge a Scotty Banyan y Tim Saunders entre tus 11 jugadores.",
    jugadores: [
      "/img/scotty.webp", "/img/timmy.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Claustro" }
  },
                     {
    id: "triplec",
    nombre: "Junta a dos compañeras del Triple C de Osaka",
    descripcion: "Escoge a Daisy Ropes y Sue Hartland entre tus 11 jugadores.",
    jugadores: [
      "/img/daisy.webp", "/img/sue.webp",
    ],
    recompensa: { tipo: "escudo", valor: "TripleC" }
  },
                       {
    id: "fauxshore",
    nombre: "Escoge al prodigio del Fauxshore",
    descripcion: "Escoge a Darren LaChance entre tus 11 jugadores.",
    jugadores: [
      "/img/darren.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Fauxshore" }
  },
                  {
    id: "marytimes",
    nombre: "Junta a la estrella y el capitán del Mary Times",
    descripcion: "Escoge a Hurley Kane y Cadence Soundtown entre tus 11 jugadores.",
    jugadores: [
      "/img/hurley.webp", "/img/soundtown.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Kirkwood" }
  },
                {
    id: "tormentadegeminis",
    nombre: "Reúne a un jugador por línea del Tormenta de Géminis",
    descripcion: "Escoge a Galileo, Ganymede, Janus y Diam entre tus 11 jugadores.",
    jugadores: [
      "/img/galileo.webp", "/img/ganymede.webp","/img/jordan.webp", "/img/diam.webp",
    ],
    recompensa: { tipo: "escudo", valor: "TormentadeGéminis" }
  },
                  {
    id: "epsilon",
    nombre: "Reúne a los 4 delanteros del Épsilon",
    descripcion: "Escoge a Dvalin, Mercury, Metron y Zell entre tus 11 jugadores.",
    jugadores: [
      "/img/dvalin.webp", "/img/mercury.webp","/img/metron.webp", "/img/zell.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Épsilon" }
  },
                    {
    id: "royalredux",
    nombre: "Reúne a las estrellas de la Royal Academy Redux",
    descripcion: "Escoge a Joe King, Caleb Stonewall y David Samford entre tus 11 jugadores.",
    jugadores: [
      "/img/king.webp", "/img/caleb.webp","/img/samford.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Royalredux" }
  },
                      {
    id: "prominence",
    nombre: "Reúne a las estrellas del Prominence",
    descripcion: "Escoge a Grent, Bomber y Torch entre tus 11 jugadores.",
    jugadores: [
      "/img/grent.webp", "/img/bomber.webp","/img/torch.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Prominence" }
  },                    {
    id: "diamond",
    nombre: "Reúne a las estrellas del Polvo de Diamantes",
    descripcion: "Escoge a Clear, Gocker y Gazelle entre tus 11 jugadores.",
    jugadores: [
      "/img/clear.webp", "/img/gocker.webp","/img/gazelle.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Royalredux" }
  },                    {
    id: "caos",
    nombre: "Reúne a las estrellas del Caos",
    descripcion: "Escoge a Grent, Bomber, Clear, Torch y Gazelle entre tus 11 jugadores.",
    jugadores: [
      "/img/grent.webp", "/img/bomber.webp","/img/clear.webp","/img/torch.webp","/img/gazelle.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Caos" }
  },                    {
    id: "Emperadoresoscuros",
    nombre: "Reúne a las estrellas de los Emperadores Oscuros",
    descripcion: "Escoge a Thomas Feldt, Nathan Swift, Shadow Cimmerian y Kevin Dragonfly entre tus 11 jugadores.",
    jugadores: [
      "/img/feldt.webp", "/img/nathan.webp","/img/shadow.webp","/img/kevin.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Emperadoresoscuros" }
  },
    {
   id: "alius11",
   nombre: "Reúne el 11 de la Academia Alius",
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
     "/img/gazelle.webp",  "/img/wittz.webp"
   ],
   recompensa: { tipo: "escudo", valor: "Alius" }
},
  {
      id: "inazumaeleven2",
    nombre: "Reúne un 11 de Inazuma Eleven 2",
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
      "/img/gazelle.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/xavier.webp"

    ],
    recompensa: { tipo: "escudo", valor: "Génesis" }
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
      "/img/zanos.webp",  "/img/gaiel.webp", ,  "/img/austin.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", 
      "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", 
      "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Orfeo" }
  },
  {
   id: "littlegiants11",
   nombre: "Reúne un 11 entre los Little Giants y el Raimon",
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
   recompensa: { tipo: "escudo", valor: "LittleGiants" }
},
  {
   id: "marvin",
   nombre: "Reúne a los trillizos Murdock",
   descripcion: "Escoge a Marvin, Tyler y Thomas Murdock en tu equipo.",
   jugadores: [
     "/img/tyler.webp", "/img/thomas.webp", "/img/marvin.webp"
   ],
   recompensa: { tipo: "escudo", valor: "Marvin" }
},
];

const CARTAS_DESBLOQUEABLES = [
  { carta: "/img/mark.webp", veces: 10 },
  { carta: "/img/king.webp", veces: 10 },
  { carta: "/img/darren.webp", veces: 10 },
  { carta: "/img/mask.webp", veces: 2 },
  { carta: "/img/feldt.webp", veces: 10 },
  { carta: "/img/idol.webp", veces: 10 },
  { carta: "/img/poseidon.webp", veces: 10 },
  { carta: "/img/hillman.webp", veces: 10 },
  { carta: "/img/ropes.webp", veces: 10 },
  { carta: "/img/daisy.webp", veces: 10 },
  { carta: "/img/galileo.webp", veces: 10 },
  { carta: "/img/dvalin.webp", veces: 10 },
  { carta: "/img/zell.webp", veces: 10 },
  { carta: "/img/grent.webp", veces: 10 },
  { carta: "/img/nero.webp", veces: 10 },
  { carta: "/img/blasi.webp", veces: 10 },
  { carta: "/img/dasilva.webp", veces: 10 },
  { carta: "/img/fox.webp", veces: 10 },
  { carta: "/img/helio.webp", veces: 10 },
  { carta: "/img/iñigo.webp", veces: 10 },
  { carta: "/img/luceafar.webp", veces: 10 },
  { carta: "/img/astaroth.webp", veces: 10 }
];

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
      if (logro.recompensa.tipo === "escudo") {
        setPerfil(p => ({
          ...p,
          escudosDisponibles: [...p.escudosDisponibles, logro.recompensa.valor]
        }));
        alert(`¡Logro conseguido: ${logro.nombre}! Escudo desbloqueado: ${logro.recompensa.valor}`);
      }
    }
  });
}


function completarLogroManual(logroId, logrosCompletados, setLogrosCompletados, setPerfil) {
  const logro = LOGROS.find(l => l.id === logroId);

  if (!logro) return;

  if (!logrosCompletados.includes(logro.id)) {
    setLogrosCompletados([...logrosCompletados, logro.id]);

    if (logro.recompensa.tipo === "escudo") {
      setPerfil(p => ({
        ...p,
        escudosDisponibles: [...p.escudosDisponibles, logro.recompensa.valor]
      }));

      alert(`¡Logro completado: ${logro.nombre}! Has conseguido el escudo de ${logro.recompensa.valor}`);
    }
  }
}


function comprobarLogros(nuevaSeleccion, logrosCompletados, setLogrosCompletados, setPerfil, bloqueadas) {
  LOGROS.forEach(logro => {
    // Obtén los jugadores que están en posiciones bloqueadas
    const jugadoresBloqueados = bloqueadas.map(pos => nuevaSeleccion[pos]);
    const jugadoresUnicos = [...new Set(jugadoresBloqueados)];

    let completado = false;

    if (logro.jugadores.length > 0 && logro.jugadores.length <= 11) {
      // Caso: el logro pide un grupo específico (ej. trillizos)
      completado = logro.jugadores.every(j => jugadoresUnicos.includes(j));
    } else {
      // Caso: el logro pide un mínimo de 11 de una lista grande (ej. Inazuma Eleven 1)
      const enComun = jugadoresUnicos.filter(j => logro.jugadores.includes(j));
      completado = enComun.length >= 11;
    }

    // Solo si están bloqueados los 11 jugadores
    completado = completado && bloqueadas.length === 11;

    if (completado && !logrosCompletados.includes(logro.id)) {
      setLogrosCompletados([...logrosCompletados, logro.id]);

      if (logro.recompensa.tipo === "escudo") {
        setPerfil(p => ({
          ...p,
          escudosDisponibles: [...p.escudosDisponibles, logro.recompensa.valor]
        }));

        alert(`¡Logro completado: ${logro.nombre}! Has conseguido el escudo de ${logro.recompensa.valor}`);
      }
    }
  });
}

// ...existing code...
function PerfilModal({ perfil, setPerfil, onClose, onAlineacion }) {
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px" }}>
            {perfil.escudosDisponibles.map(e => (
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
// ...existing code...

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
    borderRadius: 5,
    margin: "0 10px"
  };

  const handleSelect = (pos, carta) => {
    setAlineacion(a => {
      const copia = { ...a };
      if (carta === "") {
        delete copia[pos]; // Quita la carta si se selecciona vacío
      } else {
        copia[pos] = carta;
      }
      return copia;
    });
  };
  const handleGuardar = () => {
    localStorage.setItem("alineacion", JSON.stringify(alineacion));
    onClose();
  };

  // ...existing code...
<style jsx global>{`
  @media (max-width: 1200px) {
    img {
      width: 90px !important;
      max-width: 100%;
    }
    .logros-container {
      width: 90vw !important;
      min-width: 0 !important;
    }
    .alineacion-modal {
      min-width: 320px !important;
      padding: 10px !important;
    }
  }
  @media (max-width: 800px) {
    img {
      width: 60px !important;
    }
    .logros-container {
      width: 100vw !important;
      padding: 5px !important;
    }
    .alineacion-modal {
      min-width: 200px !important;
      padding: 5px !important;
    }
  }
`}</style>
// ...existing code...

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
        minWidth: "600px",
        boxShadow: "0 0 50px #333"
      }}>
        <h2 style={{ marginBottom: "20px" }}>Tu Alineación (4-3-3)</h2>
        {/* Portero */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>
          <div style={{ textAlign: "center" }}>
            <span>PORTERO:</span><br />
            {alineacion.portero ? (
              <img src={alineacion.portero} alt="portero" style={imageStyle} />
            ) : (
              <select
                onChange={e => handleSelect("portero", e.target.value)}
                value={alineacion.portero || ""}
                style={{ padding: "4px", borderRadius: "4px", width: "110px" }}
              >
                <option value="">Quitar carta</option>
                {cartasDisponibles.map(carta => (
                  <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".webp", "")}</option>
                ))}
              </select>
            )}
          </div>
        </div>
        {/* Defensas */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "25px" }}>
          {["defensa1","defensa2","defensa3","defensa4"].map(pos => (
            <div key={pos} style={{ textAlign: "center" }}>
              <span>{pos.toUpperCase()}:</span><br />
              {alineacion[pos] ? (
                <img src={alineacion[pos]} alt={pos} style={imageStyle} />
              ) : (
                <select
                  onChange={e => handleSelect(pos, e.target.value)}
                  value={alineacion[pos] || ""}
                  style={{ padding: "4px", borderRadius: "4px", width: "110px" }}
                >
                  <option value="">Selecciona carta</option>
                  {cartasDisponibles.map(carta => (
                    <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".webp", "")}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
        {/* Medios */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "25px" }}>
          {["medio1","medio2","medio3"].map(pos => (
            <div key={pos} style={{ textAlign: "center" }}>
              <span>{pos.toUpperCase()}:</span><br />
              {alineacion[pos] ? (
                <img src={alineacion[pos]} alt={pos} style={imageStyle} />
              ) : (
                <select
                  onChange={e => handleSelect(pos, e.target.value)}
                  value={alineacion[pos] || ""}
                  style={{ padding: "4px", borderRadius: "4px", width: "110px" }}
                >
                  <option value="">Selecciona carta</option>
                  {cartasDisponibles.map(carta => (
                    <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".webp", "")}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
        {/* Delanteros */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
          {["delantero1","delantero2","delantero3"].map(pos => (
            <div key={pos} style={{ textAlign: "center" }}>
              <span>{pos.toUpperCase()}:</span><br />
              {alineacion[pos] ? (
                <img src={alineacion[pos]} alt={pos} style={imageStyle} />
              ) : (
                <select
                  onChange={e => handleSelect(pos, e.target.value)}
                  value={alineacion[pos] || ""}
                  style={{ padding: "4px", borderRadius: "4px", width: "110px" }}
                >
                  <option value="">Selecciona carta</option>
                  {cartasDisponibles.map(carta => (
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
            padding: "8px 18px",
            borderRadius: "6px",
            cursor: "pointer",
            background: "green",
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          GUARDAR
        </button>
      </div>
    </div>
  );
}

function getJugadoresDesbloqueados(logrosCompletados) {
  const jugadores = [];
  LOGROS.forEach(logro => {
    if (logrosCompletados.includes(logro.id)) {
      // Si el logro desbloquea jugadores
      if (logro.jugadores && logro.jugadores.length > 0) {
        logro.jugadores.forEach(j => {
          if (!jugadores.includes(j)) jugadores.push(j);
        });
      }
      // Si el logro desbloquea una carta específica
      if (logro.recompensa.tipo === "carta" && logro.recompensa.valor) {
        if (!jugadores.includes(logro.recompensa.valor)) jugadores.push(logro.recompensa.valor);
      }
    }
  });
  return jugadores;
}

function Logros({ logrosCompletados }) {
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
      zIndex: 5
    }}>
      <h2></h2>
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

// ...existing code...

export default function Home() {
const [seleccionadas, setSeleccionadas] = useState({});
const [bloqueadas, setBloqueadas] = useState([]);
const [perfil, setPerfil] = useState({ nombre: "", escudo: "", escudosDisponibles: [] });
const [logrosCompletados, setLogrosCompletados] = useState([]);
const [markCount, setMarkCount] = useState(0);
const [cartasDesbloqueadas, setCartasDesbloqueadas] = useState([]);
const [contadorCartas, setContadorCartas] = useState({});
const [showPerfil, setShowPerfil] = useState(false);
const [showAlineacion, setShowAlineacion] = useState(false);
const [datosCargados, setDatosCargados] = useState(false);

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

    const savedMarkCount = localStorage.getItem("markCount");
    if (savedMarkCount) setMarkCount(JSON.parse(savedMarkCount));

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

// Guardar markCount
useEffect(() => {
  if (!datosCargados) return;
  localStorage.setItem("markCount", JSON.stringify(markCount));
}, [markCount, datosCargados]);

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
  if (markCount === 10 && !cartasDesbloqueadas.includes("/img/mark.webp")) {
    setCartasDesbloqueadas(arr => [...arr, "/img/mark.webp"]);
    alert("¡Has desbloqueado la carta de Mark Evans para tu alineación!");
  }
}, [markCount, cartasDesbloqueadas]);

useEffect(() => {
  if (!datosCargados) return;
  comprobarLogrosAutomaticos(logrosCompletados, setLogrosCompletados, setPerfil);
}, [datosCargados]);

  useEffect(() => {
  if (
    bloqueadas.length === 11 &&
    seleccionadas &&
    Object.values(seleccionadas).length === 11
  ) {
    // Para cada carta desbloqueable, si está en la alineación, suma 1
    CARTAS_DESBLOQUEABLES.forEach(({ carta }) => {
      if (bloqueadas.some(pos => seleccionadas[pos] === carta)) {
        setContadorCartas(prev => ({
          ...prev,
          [carta]: (prev[carta] || 0) + 1
        }));
      }
    });
  }
}, [bloqueadas]);

useEffect(() => {
  CARTAS_DESBLOQUEABLES.forEach(({ carta, veces }) => {
    if (
      (contadorCartas[carta] || 0) >= veces &&
      !cartasDesbloqueadas.includes(carta)
    ) {
      setCartasDesbloqueadas(arr => [...arr, carta]);
      alert(`¡Has desbloqueado la carta de ${carta.replace("/img/", "").replace(".webp", "")} para tu alineación!`);
    }
  });
}, [contadorCartas, cartasDesbloqueadas]);

  useEffect(() => {
    inicializarCartas();
  }, []);

  useEffect(() => {
    comprobarLogros(seleccionadas, logrosCompletados, setLogrosCompletados, setPerfil, bloqueadas);
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

  useEffect(() => {
  // Solo sumar si la alineación está completa y Mark está entre los bloqueados
  if (
    bloqueadas.length === 11 &&
    seleccionadas &&
    Object.values(seleccionadas).length === 11 &&
    bloqueadas.some(pos => seleccionadas[pos] === "/img/mark.webp")
  ) {
    setMarkCount(count => count + 1);
  }
  // eslint-disable-next-line
}, [bloqueadas]);

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
      {/* Barra superior */}
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
    onClick={() => completarLogroManual("caravana", logrosCompletados, setLogrosCompletados, setPerfil)}
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
      />
    )}
    {showAlineacion && (
      <AlineacionModal
      perfil={perfil}
      onClose={() => setShowAlineacion(false)}
      jugadoresDesbloqueados={cartasDesbloqueadas}
    />
    )}
    {!showAlineacion && <Logros logrosCompletados={logrosCompletados} />}

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
      

