import { useState, useEffect } from "react";

const posiciones = {
  portero: ["/img/mark.png", "/img/king.png", "/img/darren.png", "/img/mask.png", "/img/feldt.png", "/img/idol.png", "/img/poseidon.png", "/img/hillman.png", "/img/ropes.png", "/img/daisy.png", "/img/galileo.png", "/img/dvalin.png", "/img/zell.png", "/img/grent.png",  "/img/nero.png", "/img/blasi.png",  "/img/dasilva.png",  "/img/fox.png",  "/img/helio.png", "/img/iñigo.png",  "/img/luceafar.png",  "/img/astaroth.png"],
  defensa1: ["/img/nathan.png","/img/tod.png", "/img/scotty.png", "/img/aitor.png", "/img/archer.png", "/img/martin.png", "/img/master.png", "/img/monkey.png", "/img/malcolm.png", "/img/apollo.png", "/img/hephestus.png", "/img/sweet.png", "/img/smith.png", "/img/shawn.png", "/img/hurley.png", "/img/bomber.png",  "/img/icer.png",  "/img/arkew.png",  "/img/gocker.png",  "/img/zohen.png",  "/img/hauser.png",  "/img/lagarto.png",  "/img/vitesse.png",  "/img/ferrum.png",  "/img/mangrove.png", "/img/ischer.png",  "/img/jenkins.png",  "/img/lephiel.png",  "/img/hebimos.png"],
  defensa2: ["/img/jack.png", "/img/sor.png", "/img/thiago.png", "/img/gabi.png", "/img/aitor.png", "/img/bobby.png", "/img/jim.png", "/img/sam.png", "/img/drent.png", "/img/lion.png", "/img/simmons.png", "/img/hillvalley.png", "/img/sherman.png", "/img/ares.png", "/img/dionysus.png", "/img/island.png", "/img/downtown.png", "/img/shawn.png", "/img/ganymede.png", "/img/baller.png", "/img/clear.png",  "/img/gele.png",  "/img/kiburn.png",  "/img/thor.png", "/img/kalil.png",  "/img/minion.png",  "/img/mountain.png",  "/img/gaines.png", "/img/garcia.png",  "/img/bump.png",  "/img/lump.png",  "/img/rubu.png", "/img/nenel.png"],
  defensa3: ["/img/jack.png", "/img/sor.png", "/img/thiago.png", "/img/gabi.png", "/img/aitor.png", "/img/bobby.png", "/img/jim.png", "/img/sam.png", "/img/drent.png", "/img/lion.png", "/img/simmons.png", "/img/hillvalley.png", "/img/sherman.png", "/img/ares.png", "/img/dionysus.png", "/img/island.png", "/img/downtown.png", "/img/shawn.png", "/img/ganymede.png", "/img/baller.png", "/img/clear.png",  "/img/gele.png",  "/img/kiburn.png",  "/img/thor.png", "/img/kalil.png",  "/img/minion.png",  "/img/mountain.png",  "/img/gaines.png", "/img/garcia.png",  "/img/bump.png",  "/img/lump.png",  "/img/rubu.png", "/img/nenel.png"],
  defensa4: ["/img/nathan.png", "/img/tod.png", "/img/scotty.png", "/img/aitor.png", "/img/archer.png", "/img/martin.png", "/img/master.png", "/img/monkey.png", "/img/malcolm.png", "/img/apollo.png", "/img/hephestus.png", "/img/sweet.png", "/img/smith.png", "/img/shawn.png", "/img/hurley.png", "/img/bomber.png",  "/img/icer.png",  "/img/arkew.png",  "/img/gocker.png",  "/img/zohen.png",  "/img/hauser.png",  "/img/lagarto.png",  "/img/vitesse.png",  "/img/ferrum.png",  "/img/mangrove.png", "/img/ischer.png",  "/img/jenkins.png",  "/img/lephiel.png",  "/img/hebimos.png"],
  medio1: ["/img/nathan.png", "/img/arion.png", "/img/jude.png", "/img/tori.png", "/img/caleb.png", "/img/riccardo.png", "/img/timmy.png", "/img/max.png", "/img/steve.png", "/img/erik.png", "/img/bloom.png", "/img/chicken.png", "/img/eagle.png", "/img/master.png", "/img/monkey.png", "/img/swing.png", "/img/artemis.png", "/img/hermes.png", "/img/hera.png", "/img/athena.png", "/img/byron.png", "/img/agentem.png", "/img/soundtown.png", "/img/pandora.png", "/img/jordan.png", "/img/dvalin.png", "/img/sparrow.png", "/img/bomber.png",  "/img/bellatrix.png",  "/img/heat.png",  "/img/lean.png",  "/img/droll.png",  "/img/rhine.png",  "/img/kiwill.png",  "/img/ark.png",  "/img/dolphin.png", "/img/choi.png", "/img/acuto.png", "/img/krueger.png", "/img/gabrini.png", "/img/nakata.png", "/img/diavolo.png", "/img/ryan.png", "/img/haddad.png", "/img/hampton.png", "/img/maximino.png", "/img/vitrum.png", "/img/leung.png", "/img/stark.png",  "/img/triumvir.png",  "/img/gunter.png",  "/img/lephiel.png",  "/img/wenel.png"],
  medio2: ["/img/arion.png", "/img/jude.png", "/img/tori.png", "/img/caleb.png", "/img/riccardo.png", "/img/timmy.png", "/img/steve.png", "/img/sam.png", "/img/erik.png", "/img/chicken.png", "/img/eagle.png", "/img/waldon.png", "/img/hermes.png", "/img/hera.png", "/img/byron.png", "/img/agentem.png", "/img/soundtown.png", "/img/jordan.png", "/img/pandora.png", "/img/dvalin.png", "/img/metron.png", "/img/sparrow.png", "/img/bomber.png",  "/img/heat.png",  "/img/lean.png",  "/img/neppten.png",  "/img/kormer.png",  "/img/bellatrix.png",  "/img/thor.png",  "/img/dolphin.png", "/img/choi.png", "/img/acuto.png", "/img/krueger.png", "/img/gabrini.png", "/img/nakata.png", "/img/diavolo.png", "/img/ryan.png", "/img/haddad.png", "/img/hampton.png", "/img/maximino.png", "/img/vitrum.png", "/img/leung.png", "/img/stark.png",  "/img/triumvir.png",  "/img/gunter.png",  "/img/lephiel.png",  "/img/wenel.png",  "/img/zanos.png",  "/img/gaiel.png"],
  medio3: ["/img/nathan.png", "/img/arion.png", "/img/jude.png", "/img/tori.png", "/img/caleb.png", "/img/riccardo.png", "/img/timmy.png", "/img/max.png", "/img/steve.png", "/img/erik.png", "/img/bloom.png", "/img/chicken.png", "/img/eagle.png", "/img/master.png", "/img/monkey.png", "/img/swing.png", "/img/artemis.png", "/img/hermes.png", "/img/hera.png", "/img/athena.png", "/img/byron.png", "/img/agentem.png", "/img/soundtown.png", "/img/pandora.png", "/img/jordan.png", "/img/dvalin.png", "/img/sparrow.png", "/img/bomber.png",  "/img/bellatrix.png", "/img/heat.png",  "/img/lean.png",  "/img/droll.png",  "/img/rhine.png",  "/img/kiwill.png",  "/img/ark.png",  "/img/dolphin.png", "/img/choi.png", "/img/acuto.png", "/img/krueger.png", "/img/gabrini.png", "/img/nakata.png", "/img/diavolo.png", "/img/ryan.png", "/img/haddad.png", "/img/hampton.png", "/img/maximino.png", "/img/vitrum.png", "/img/leung.png", "/img/stark.png",  "/img/triumvir.png",  "/img/gunter.png",  "/img/lephiel.png",  "/img/wenel.png"],
  delantero1: ["/img/axel.png", "/img/samford.png", "/img/bailong.png", "/img/fei.png", "/img/sol.png", "/img/zanark.png", "/img/victor.png", "/img/max.png", "/img/kevin.png", "/img/artist.png", "/img/cheetah.png", "/img/gamer.png", "/img/gorilla.png", "/img/hatch.png", "/img/swing.png", "/img/talisman.png", "/img/turner.png", "/img/cloak.png", "/img/tyler.png", "/img/marvin.png", "/img/thomas.png", "/img/byron.png", "/img/shawn.png", "/img/sue.png", "/img/diam.png", "/img/rihm.png",  "/img/neppten.png",  "/img/torch.png",  "/img/gazelle.png",  "/img/wittz.png",  "/img/shadow.png",  "/img/austin.png",  "/img/xavier.png", "/img/partinus.png", "/img/balone.png", "/img/keats.png", "/img/generani.png", "/img/paolo.png", "/img/robingo.png", "/img/coyote.png", "/img/flare.png", "/img/drago.png", "/img/hedgeer.png",  "/img/callous.png",  "/img/malice.png",  "/img/lancer.png",  "/img/sael.png",  "/img/destra.png"],
  delantero2: ["/img/axel.png", "/img/samford.png", "/img/bailong.png", "/img/fei.png", "/img/sol.png", "/img/zanark.png", "/img/victor.png", "/img/kevin.png", "/img/willy.png", "/img/artist.png", "/img/cheetah.png", "/img/gamer.png", "/img/gorilla.png", "/img/hatch.png", "/img/talisman.png", "/img/turner.png", "/img/cloak.png", "/img/tyler.png", "/img/marvin.png", "/img/thomas.png", "/img/byron.png", "/img/demeter.png", "/img/shawn.png", "/img/sue.png", "/img/diam.png", "/img/rihm.png", "/img/dvalin.png", "/img/metron.png", "/img/zell.png",  "/img/torch.png",  "/img/gazelle.png",  "/img/wittz.png",  "/img/shadow.png",  "/img/austin.png",  "/img/xavier.png", "/img/partinus.png", "/img/balone.png", "/img/keats.png", "/img/generani.png", "/img/paolo.png", "/img/robingo.png", "/img/coyote.png", "/img/flare.png", "/img/drago.png", "/img/hedgeer.png",  "/img/zanos.png",  "/img/gaiel.png"],
  delantero3: ["/img/axel.png", "/img/samford.png", "/img/bailong.png", "/img/fei.png", "/img/sol.png", "/img/zanark.png", "/img/victor.png", "/img/max.png", "/img/kevin.png", "/img/artist.png", "/img/cheetah.png", "/img/gamer.png", "/img/gorilla.png", "/img/hatch.png", "/img/swing.png", "/img/talisman.png", "/img/turner.png", "/img/cloak.png", "/img/tyler.png", "/img/marvin.png", "/img/thomas.png", "/img/byron.png", "/img/shawn.png", "/img/sue.png", "/img/diam.png", "/img/rihm.png",  "/img/neppten.png",  "/img/torch.png",  "/img/gazelle.png",  "/img/wittz.png",  "/img/shadow.png",  "/img/austin.png",  "/img/xavier.png", "/img/partinus.png", "/img/balone.png", "/img/keats.png", "/img/generani.png", "/img/paolo.png", "/img/robingo.png", "/img/coyote.png", "/img/flare.png", "/img/drago.png", "/img/hedgeer.png",  "/img/callous.png",  "/img/malice.png",  "/img/lancer.png",  "/img/sael.png",  "/img/destra.png"]
};

const ESCUDOS = {
  Raimon: "/img/raimon.png",
  Occult: "/img/occult.png",
  Wild: "/img/wild.png",
  Brain: "/img/brain.png",
  Otaku: "/img/otaku.png",
  Royal: "/img/royal.png",
  Shuriken: "/img/shuriken.png",
  Farm: "/img/farm.png",
  Kirkwood: "/img/kirkwood.png",
  Zeus: "/img/zeus.png",
  Veteranos: "/img/veteranos.png",
  Servicio: "/img/servicio.png",
  Alpino: "/img/alpino.png",
  Claustro: "/img/claustro.png",
  TripleC: "/img/triplec.png",
  Fauxshore: "/img/fauxshore.png",
  MaryTimes: "/img/marytimes.png",
  TormentadeGéminis: "/img/tormentadegeminis.png",
  Épsilon: "/img/epsilon.png",
  Royalredux: "/img/royalredux.png",
  Prominence: "/img/prominence.png",
  Diamond: "/img/diamond.png",
  Caos: "/img/caos.png",
  Emperadoresoscuros: "/img/emperadoresoscuros.png",
  Alius: "/img/alius.png",
  Caseta: "/img/caseta.png",
  Caravana: "/img/caravana.png",
  Génesis: "/img/genesis.png",
  Marvin: "/img/neogod.png",
  LittleGiants: "/img/littlegiants.png",
  Orfeo: "/img/orfeo.png"
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
      "/img/mask.png", "/img/talisman.png"
    ],
    recompensa: { tipo: "escudo", valor: "Occult" }
  },
    {
    id: "wild",
    nombre: "Reúne al Instituto Wild",
    descripcion: "Escoge a Chicken, Cheetah y Gorilla entre tus 11 jugadores.",
    jugadores: [
      "/img/chicken.png", "/img/cheetah.png", "/img/gorilla.png"
    ],
    recompensa: { tipo: "escudo", valor: "Wild" }
  },
      {
    id: "brain",
    nombre: "Reúne al Instituto Brain",
    descripcion: "Escoge a Thomas Feldt y Neil Turner entre tus 11 jugadores.",
    jugadores: [
      "/img/feldt.png", "/img/turner.png",
    ],
    recompensa: { tipo: "escudo", valor: "Brain" }
  },
        {
    id: "otaku",
    nombre: "Reúne al Instituto Otaku",
    descripcion: "Escoge a Idol, Gamer y Artist  entre tus 11 jugadores.",
    jugadores: [
      "/img/idol.png", "/img/gamer.png",  "/img/artist.png",
    ],
    recompensa: { tipo: "escudo", valor: "Otaku" }
  },
          {
    id: "royal",
    nombre: "Reúne a la vieja guarda de la Royal",
    descripcion: "Escoge a King, Jude y Samford  entre tus 11 jugadores.",
    jugadores: [
      "/img/king.png", "/img/jude.png",  "/img/samford.png",
    ],
    recompensa: { tipo: "escudo", valor: "Royal" }
  },
                  {
    id: "veteranos",
    nombre: "Junta a 3 leyendas del mítico Inazuma Eleven",
    descripcion: "Escoge a Seymour Hillman, Charles Island y Arthur Sweet entre tus 11 jugadores.",
    jugadores: [
      "/img/hillman.png", "/img/island.png", "/img/sweet.png"
    ],
    recompensa: { tipo: "escudo", valor: "Veteranos" }
  },
            {
    id: "shuriken",
    nombre: "Junta al capitán del Shuriken con un viejo rival",
    descripcion: "Escoge a Sail Bluesea y Seymour Hillman, viejo rival del entrenador Igajima, entre tus 11 jugadores.",
    jugadores: [
      "/img/cloak.png", "/img/hillman.png",
    ],
    recompensa: { tipo: "escudo", valor: "Shuriken" }
  },
              {
    id: "farm",
    nombre: "Junta a la defensa del Instituto Farm",
    descripcion: "Escoge a Herb Sherman y Mark Hillvalley entre tus 11 jugadores.",
    jugadores: [
      "/img/sherman.png", "/img/hillvalley.png",
    ],
    recompensa: { tipo: "escudo", valor: "Farm" }
  },
              {
    id: "kirkwood",
    nombre: "Junta a 3 antiguos compañeros del Instituto Kirkwood",
    descripcion: "Escoge a Malcolm Night, Axel Blaze y Marvin Murdock entre tus 11 jugadores.",
    jugadores: [
      "/img/malcolm.png", "/img/axel.png", "/img/marvin.png"
    ],
    recompensa: { tipo: "escudo", valor: "Kirkwood" }
  },
  {
    id: "inazumaeleven1",
    nombre: "Reúne un 11 de Inazuma Eleven 1",
    descripcion: "Escoge 11 jugadores originales de Inazuma Eleven 1.",
    jugadores: [
      "/img/mark.png", "/img/king.png", "/img/mask.png", "/img/feldt.png", 
      "/img/idol.png", "/img/poseidon.png", "/img/hillman.png", "/img/jack.png",
      "/img/nathan.png","/img/tod.png", "/img/martin.png", "/img/bobby.png",
      "/img/steve.png", "/img/erik.png", "/img/byron.png", "/img/sam.png", 
      "/img/master.png", "/img/monkey.png", "/img/malcolm.png", "/img/apollo.png",
      "/img/hephestus.png", "/img/sweet.png", "/img/jim.png","/img/drent.png", 
      "/img/lion.png", "/img/simmons.png", "/img/hillvalley.png", "/img/sherman.png", 
      "/img/ares.png", "/img/dionysus.png", "/img/island.png", "/img/jude.png", "/img/timmy.png", 
      "/img/max.png", "/img/bloom.png", "/img/chicken.png", "/img/eagle.png",  "/img/swing.png", 
      "/img/artemis.png", "/img/hermes.png", "/img/hera.png", "/img/athena.png", "/img/waldon.png",
      "/img/axel.png", , "/img/kevin.png", "/img/artist.png", "/img/cheetah.png", "/img/gamer.png", 
      "/img/gorilla.png", "/img/hatch.png", "/img/talisman.png", "/img/turner.png", 
      "/img/cloak.png", "/img/tyler.png", "/img/marvin.png", "/img/thomas.png", "/img/samford.png",
    ],
    recompensa: { tipo: "escudo", valor: "Zeus" }
  },
    {
    id: "raimon11",
    nombre: "Reúne el 11 del Raimon de Mark",
    descripcion: "Escoge 11 jugadores del Raimon de la saga de Mark Evans.",
    jugadores: [
      "/img/mark.png", "/img/jude.png", "/img/axel.png", "/img/nathan.png",
      "/img/shawn.png", "/img/tod.png", "/img/max.png", "/img/jack.png",
      "/img/kevin.png", "/img/timmy.png", "/img/willy.png", "/img/bobby.png",
      "/img/steve.png", "/img/erik.png", "/img/byron.png", "/img/sam.png", 
      "/img/scotty.png", "/img/hurley.png", "/img/tori.png", "/img/jim.png",
      "/img/darren.png", "/img/sue.png", "/img/shadow.png"
    ],
    recompensa: { tipo: "escudo", valor: "Raimon" }
  },
                {
    id: "servicio",
    nombre: "Junta a 3 jugadores del Servicio Secreto",
    descripcion: "Escoge a Ian Smith, la Agente M y a Tori Vanguard entre tus 11 jugadores.",
    jugadores: [
      "/img/smith.png", "/img/agentem.png", "/img/tori.png"
    ],
    recompensa: { tipo: "escudo", valor: "Servicio" }
  },
                  {
    id: "alpino",
    nombre: "Junta a 3 jugadores del Instituto Alpino",
    descripcion: "Escoge a Adam Ropes, Joaquine Downtown y Shawn Froste entre tus 11 jugadores.",
    jugadores: [
      "/img/ropes.png", "/img/downtown.png", "/img/shawn.png"
    ],
    recompensa: { tipo: "escudo", valor: "Alpino" }
  },
                    {
    id: "claustro",
    nombre: "Junta a un antiguo estudiante del Claustro con un fan",
    descripcion: "Escoge a Scotty Banyan y Tim Saunders entre tus 11 jugadores.",
    jugadores: [
      "/img/scotty.png", "/img/timmy.png",
    ],
    recompensa: { tipo: "escudo", valor: "Claustro" }
  },
                     {
    id: "triplec",
    nombre: "Junta a dos compañeras del Triple C de Osaka",
    descripcion: "Escoge a Daisy Ropes y Sue Hartland entre tus 11 jugadores.",
    jugadores: [
      "/img/daisy.png", "/img/sue.png",
    ],
    recompensa: { tipo: "escudo", valor: "TripleC" }
  },
                       {
    id: "fauxshore",
    nombre: "Escoge al prodigio del Fauxshore",
    descripcion: "Escoge a Darren LaChance entre tus 11 jugadores.",
    jugadores: [
      "/img/darren.png",
    ],
    recompensa: { tipo: "escudo", valor: "Fauxshore" }
  },
                  {
    id: "marytimes",
    nombre: "Junta a la estrella y el capitán del Mary Times",
    descripcion: "Escoge a Hurley Kane y Cadence Soundtown entre tus 11 jugadores.",
    jugadores: [
      "/img/hurley.png", "/img/soundtown.png",
    ],
    recompensa: { tipo: "escudo", valor: "Kirkwood" }
  },
                {
    id: "tormentadegeminis",
    nombre: "Reúne a un jugador por línea del Tormenta de Géminis",
    descripcion: "Escoge a Galileo, Ganymede, Janus y Diam entre tus 11 jugadores.",
    jugadores: [
      "/img/galileo.png", "/img/ganymede.png","/img/jordan.png", "/img/diam.png",
    ],
    recompensa: { tipo: "escudo", valor: "TormentadeGéminis" }
  },
                  {
    id: "epsilon",
    nombre: "Reúne a los 4 delanteros del Épsilon",
    descripcion: "Escoge a Dvalin, Mercury, Metron y Zell entre tus 11 jugadores.",
    jugadores: [
      "/img/dvalin.png", "/img/mercury.png","/img/metron.png", "/img/zell.png",
    ],
    recompensa: { tipo: "escudo", valor: "Épsilon" }
  },
                    {
    id: "royalredux",
    nombre: "Reúne a las estrellas de la Royal Academy Redux",
    descripcion: "Escoge a Joe King, Caleb Stonewall y David Samford entre tus 11 jugadores.",
    jugadores: [
      "/img/king.png", "/img/caleb.png","/img/samford.png",
    ],
    recompensa: { tipo: "escudo", valor: "Royalredux" }
  },
                      {
    id: "prominence",
    nombre: "Reúne a las estrellas del Prominence",
    descripcion: "Escoge a Grent, Bomber y Torch entre tus 11 jugadores.",
    jugadores: [
      "/img/grent.png", "/img/bomber.png","/img/torch.png",
    ],
    recompensa: { tipo: "escudo", valor: "Prominence" }
  },                    {
    id: "diamond",
    nombre: "Reúne a las estrellas del Polvo de Diamantes",
    descripcion: "Escoge a Clear, Gocker y Gazelle entre tus 11 jugadores.",
    jugadores: [
      "/img/clear.png", "/img/gocker.png","/img/gazelle.png",
    ],
    recompensa: { tipo: "escudo", valor: "Royalredux" }
  },                    {
    id: "caos",
    nombre: "Reúne a las estrellas del Caos",
    descripcion: "Escoge a Grent, Bomber, Clear, Torch y Gazelle entre tus 11 jugadores.",
    jugadores: [
      "/img/grent.png", "/img/bomber.png","/img/clear.png","/img/torch.png","/img/gazelle.png",
    ],
    recompensa: { tipo: "escudo", valor: "Caos" }
  },                    {
    id: "Emperadoresoscuros",
    nombre: "Reúne a las estrellas de los Emperadores Oscuros",
    descripcion: "Escoge a Thomas Feldt, Nathan Swift, Shadow Cimmerian y Kevin Dragonfly entre tus 11 jugadores.",
    jugadores: [
      "/img/feldt.png", "/img/nathan.png","/img/shadow.png","/img/kevin.png",
    ],
    recompensa: { tipo: "escudo", valor: "Emperadoresoscuros" }
  },
    {
   id: "alius11",
   nombre: "Reúne el 11 de la Academia Alius",
   descripcion: "Escoge 11 jugadores de la Academia Alius de Inazuma Eleven 2.",
   jugadores: [
     "/img/galileo.png", "/img/dvalin.png", "/img/zell.png", "/img/grent.png",
     "/img/nero.png", "/img/icer.png", "/img/arkew.png", "/img/gocker.png",
     "/img/zohen.png", "/img/hauser.png", "/img/ganymede.png", "/img/baller.png",
     "/img/clear.png",  "/img/gele.png",  "/img/kiburn.png",  "/img/bomber.png", 
     "/img/jordan.png",  "/img/heat.png",  "/img/lean.png",  "/img/droll.png",  
     "/img/rhine.png",  "/img/kiwill.png",  "/img/ark.png", "/img/pandora.png", 
     "/img/metron.png",  "/img/neppten.png",  "/img/kormer.png",  "/img/bellatrix.png",
     "/img/xavier.png", "/img/diam.png", "/img/rihm.png",  "/img/torch.png",  
     "/img/gazelle.png",  "/img/wittz.png"
   ],
   recompensa: { tipo: "escudo", valor: "Alius" }
},
  {
      id: "inazumaeleven2",
    nombre: "Reúne un 11 de Inazuma Eleven 2",
    descripcion: "Escoge 11 jugadores originales de Inazuma Eleven 2.",
    jugadores: [
      "/img/darren.png", "/img/ropes.png", "/img/daisy.png", "/img/galileo.png", "/img/dvalin.png", 
      "/img/zell.png", "/img/grent.png",  "/img/nero.png", "/img/scotty.png", "/img/smith.png",
      "/img/shawn.png", "/img/hurley.png", "/img/bomber.png",  "/img/icer.png",  "/img/arkew.png",  
      "/img/gocker.png",  "/img/zohen.png",  "/img/hauser.png", "/img/ganymede.png", "/img/baller.png", 
      "/img/clear.png",  "/img/gele.png",  "/img/kiburn.png",  "/img/thor.png", "/img/tori.png", 
      "/img/caleb.png", "/img/agentem.png", "/img/soundtown.png", "/img/jordan.png", 
      "/img/sparrow.png",  "/img/heat.png",  "/img/lean.png",  "/img/droll.png",  
      "/img/rhine.png",  "/img/kiwill.png",  "/img/ark.png", "/img/pandora.png",  "/img/bellatrix.png",
      "/img/sue.png", "/img/diam.png", "/img/rihm.png",  "/img/neppten.png",  "/img/torch.png",  
      "/img/gazelle.png",  "/img/wittz.png",  "/img/shadow.png",  "/img/xavier.png"

    ],
    recompensa: { tipo: "escudo", valor: "Génesis" }
  },
    {
      id: "inazumaeleven3",
    nombre: "Reúne un 11 de Inazuma Eleven 3",
    descripcion: "Escoge 11 jugadores originales de Inazuma Eleven 3.",
    jugadores: [
      "/img/blasi.png",  "/img/dasilva.png",  "/img/fox.png",  "/img/helio.png", "/img/iñigo.png",
      "/img/luceafar.png",  "/img/astaroth.png", "/img/archer.png", "/img/lagarto.png",  "/img/vitesse.png",  
      "/img/ferrum.png",  "/img/mangrove.png", "/img/ischer.png",  "/img/jenkins.png",  "/img/lephiel.png",  
      "/img/hebimos.png",  "/img/thiago.png", "/img/thor.png", "/img/kalil.png",  "/img/minion.png",  "/img/mountain.png",  
      "/img/gaines.png", "/img/garcia.png",  "/img/bump.png",  "/img/lump.png",  "/img/rubu.png", "/img/nenel.png", 
      "/img/dolphin.png", "/img/choi.png", "/img/acuto.png", "/img/krueger.png", "/img/gabrini.png", "/img/nakata.png", 
      "/img/diavolo.png", "/img/ryan.png", "/img/haddad.png", "/img/hampton.png", "/img/maximino.png", "/img/vitrum.png", 
      "/img/leung.png", "/img/stark.png",  "/img/triumvir.png",  "/img/gunter.png",  "/img/lephiel.png",  "/img/wenel.png",  
      "/img/zanos.png",  "/img/gaiel.png", ,  "/img/austin.png", "/img/partinus.png", "/img/balone.png", "/img/keats.png", 
      "/img/generani.png", "/img/paolo.png", "/img/robingo.png", "/img/coyote.png", "/img/flare.png", "/img/drago.png", 
      "/img/hedgeer.png",  "/img/callous.png",  "/img/malice.png",  "/img/lancer.png",  "/img/sael.png",  "/img/destra.png"
    ],
    recompensa: { tipo: "escudo", valor: "Orfeo" }
  },
  {
   id: "littlegiants11",
   nombre: "Reúne un 11 entre los Little Giants y el Raimon",
   descripcion: "Escoge 11 jugadores de entre jugadores del Raimon que tengan su contraparte en Costail con estos mismos.",
   jugadores: [
     "/img/helio.png", "/img/mark.png", "/img/vitesse.png", "/img/nathan.png",
     "/img/mountain.png", "/img/jack.png", "/img/gaines.png", "/img/jim.png",
     "/img/ferrum.png", "/img/tod.png", "/img/hampton.png", "/img/steve.png",
     "/img/haddad.png",  "/img/timmy.png",  "/img/ryan.png",  "/img/sam.png", 
     "/img/maximino.png",  "/img/max.png",  "/img/flare.png",  "/img/axel.png",  
     "/img/kevin.png",  "/img/drago.png",  "/img/difortune.png", "/img/darren.png", 
     "/img/mangrove.png",  "/img/scotty.png",  "/img/willy.png",  "/img/vitrum.png",
     "/img/leung.png", "/img/shawn.png", "/img/hedgeer.png",  "/img/hurley.png"
   ],
   recompensa: { tipo: "escudo", valor: "LittleGiants" }
},
  {
   id: "marvin",
   nombre: "Reúne a los trillizos Murdock",
   descripcion: "Escoge a Marvin, Tyler y Thomas Murdock en tu equipo.",
   jugadores: [
     "/img/tyler.png", "/img/thomas.png", "/img/marvin.png"
   ],
   recompensa: { tipo: "escudo", valor: "Marvin" }
},
];

const CARTAS_DESBLOQUEABLES = [
  { carta: "/img/mark.png", veces: 10 },
  { carta: "/img/king.png", veces: 10 },
  { carta: "/img/darren.png", veces: 10 },
  { carta: "/img/mask.png", veces: 2 },
  { carta: "/img/feldt.png", veces: 10 },
  { carta: "/img/idol.png", veces: 10 },
  { carta: "/img/poseidon.png", veces: 10 },
  { carta: "/img/hillman.png", veces: 10 },
  { carta: "/img/ropes.png", veces: 10 },
  { carta: "/img/daisy.png", veces: 10 },
  { carta: "/img/galileo.png", veces: 10 },
  { carta: "/img/dvalin.png", veces: 10 },
  { carta: "/img/zell.png", veces: 10 },
  { carta: "/img/grent.png", veces: 10 },
  { carta: "/img/nero.png", veces: 10 },
  { carta: "/img/blasi.png", veces: 10 },
  { carta: "/img/dasilva.png", veces: 10 },
  { carta: "/img/fox.png", veces: 10 },
  { carta: "/img/helio.png", veces: 10 },
  { carta: "/img/iñigo.png", veces: 10 },
  { carta: "/img/luceafar.png", veces: 10 },
  { carta: "/img/astaroth.png", veces: 10 }
];

function comprobarLogrosAutomaticos(logrosCompletados, setLogrosCompletados, setPerfil) {
  LOGROS.forEach(logro => {
    // Solo logros automáticos: sin jugadores y sin tipo "manual"
    if (
      logro.jugadores.length === 0 &&
      (!logro.tipo || logro.tipo !== "manual") &&
      !logrosCompletados.includes(logro.id)
    ) {
      setLogrosCompletados([...logrosCompletados, logro.id]);
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
                  <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".png", "")}</option>
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
                    <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".png", "")}</option>
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
                    <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".png", "")}</option>
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
                    <option key={carta} value={carta}>{carta.replace("/img/", "").replace(".png", "")}</option>
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
  // Estados principales
  const [seleccionadas, setSeleccionadas] = useState({});
  const [bloqueadas, setBloqueadas] = useState([]);
  const [perfil, setPerfil] = useState({ nombre: "", escudo: "", escudosDisponibles: [] });
  const [logrosCompletados, setLogrosCompletados] = useState([]);
  const [showPerfil, setShowPerfil] = useState(false);
  const [showAlineacion, setShowAlineacion] = useState(false);
  const [markCount, setMarkCount] = useState(0);
  const [cartasDesbloqueadas, setCartasDesbloqueadas] = useState([]);
  const [contadorCartas, setContadorCartas] = useState({});

  useEffect(() => {
  if (markCount === 10 && !cartasDesbloqueadas.includes("/img/mark.png")) {
    setCartasDesbloqueadas(arr => [...arr, "/img/mark.png"]);
    alert("¡Has desbloqueado la carta de Mark Evans para tu alineación!");
  }
}, [markCount, cartasDesbloqueadas]);

  useEffect(() => {
  comprobarLogrosAutomaticos(logrosCompletados, setLogrosCompletados, setPerfil);
  }, []);

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
      alert(`¡Has desbloqueado la carta de ${carta.replace("/img/", "").replace(".png", "")} para tu alineación!`);
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
    bloqueadas.some(pos => seleccionadas[pos] === "/img/mark.png")
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
      backgroundImage: "url(/img/campo.jpg)",
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
      

