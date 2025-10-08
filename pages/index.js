import { useState, useEffect } from "react";
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>

const CARTAS_POR_RISTRA = [
  [ // Inazuma Eleven
    "/img/mark.webp", "/img/nathan.webp", "/img/jack.webp","/img/jim.webp", "/img/bobby.webp", "/img/peabody.webp", "/img/tod.webp",
    "/img/sam.webp", "/img/steve.webp" ,"/img/timmy.webp", "/img/erik.webp","/img/max.webp","/img/kevin.webp","/img/axel.webp",
    "/img/willy.webp", "/img/maddie.webp", "/img/mask.webp", "/img/talisman.webp", "/img/lion.webp", "/img/chicken.webp", "/img/monkey.webp", "/img/eagle.webp", 
    "/img/cheetah.webp", "/img/gorilla.webp", "/img/feldt.webp","/img/turner.webp", "/img/idol.webp","/img/gamer.webp", "/img/artist.webp", 
    "/img/king.webp", "/img/martin.webp", "/img/drent.webp",  "/img/simmons.webp", "/img/master.webp","/img/waldon.webp", "/img/jude.webp",  
    "/img/bloom.webp", "/img/swing.webp", "/img/samford.webp", "/img/hatch.webp", "/img/hillman.webp", "/img/island.webp", "/img/sweet.webp", 
    "/img/cloak.webp", "/img/hillvalley.webp", "/img/sherman.webp", "/img/malcolm.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", 
    "/img/poseidon.webp", "/img/apollo.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/hephestus.webp", "/img/hermes.webp", "/img/artemis.webp", 
    "/img/athena.webp", "/img/hera.webp", "/img/byron.webp", "/img/demeter.webp", "/img/smith.webp", "/img/tori.webp", "/img/agentem.webp",
    "/img/galileo.webp", "/img/ganymede.webp",  "/img/janus.webp", "/img/pandora.webp", "/img/diam.webp", "/img/rihm.webp", "/img/ropes.webp", 
    "/img/downtown.webp", "/img/shawn.webp", "/img/shawnaiden.webp", "/img/scotty.webp", "/img/bargie.webp", "/img/kingredux.webp","/img/caleb.webp", "/img/sparrow.webp", 
    "/img/samfordredux.webp", "/img/daisy.webp", 
    "/img/sue.webp", "/img/dvalin.webp", "/img/metron.webp", "/img/mercury.webp", "/img/zell.webp", "/img/darren.webp",  "/img/hurley.webp", 
    "/img/soundtown.webp", "/img/grent.webp", "/img/bomber.webp", "/img/baller.webp", "/img/heat.webp", "/img/lean.webp", "/img/torch.webp", 
    "/img/icer.webp",  "/img/arkew.webp",  "/img/gocker.webp", "/img/clear.webp", "/img/droll.webp",  "/img/rhine.webp",  "/img/gazelle.webp", 
    "/img/nero.webp", "/img/zohen.webp",  "/img/hauser.webp", "/img/gele.webp",  "/img/kiburn.webp", "/img/kormer.webp", "/img/bellatrix.webp", "/img/kiwill.webp", 
    "/img/ark.webp", "/img/wittz.webp", "/img/xene.webp", "/img/jimoscuro.webp", "/img/samoscuro.webp", "/img/todoscuro.webp", "/img/steveoscuro.webp", 
    "/img/maxoscuro.webp", "/img/timoscuro.webp","/img/nathanoscuro.webp","/img/kevinoscuro.webp", "/img/shadow.webp", "/img/archer.webp", "/img/thor.webp", 
    "/img/jordan.webp", "/img/xavier.webp", "/img/austin.webp", "/img/dolphin.webp", "/img/kalil.webp", "/img/choi.webp", "/img/partinus.webp", 
    "/img/acuto.webp", "/img/thiago.webp",  "/img/balone.webp",
    "/img/krueger.webp", "/img/keats.webp", "/img/blasi.webp",  "/img/gabrini.webp", "/img/diavolo.webp", "/img/nakata.webp", "/img/generani.webp", 
    "/img/paolo.webp", "/img/iñigo.webp", "/img/garcia.webp", "/img/dasilva.webp", "/img/lagarto.webp", "/img/robingo.webp", "/img/fox.webp", 
    "/img/minion.webp", "/img/coyote.webp", "/img/helio.webp", "/img/difortune.webp", "/img/vitesse.webp", "/img/mountain.webp",  "/img/gaines.webp", "/img/ferrum.webp", 
    "/img/mangrove.webp","/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", 
    "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp", "/img/astaroth.webp", "/img/lephiel.webp",  "/img/hebimos.webp", "/img/rubu.webp", 
    "/img/nenel.webp", "/img/lephiel.webp",  "/img/wenel.webp","/img/malphas.webp", "/img/zanos.webp",  "/img/gaiel.webp", "/img/sael.webp",  "/img/destra.webp",
    "/img/luceafar.webp", "/img/ischer.webp", "/img/bump.webp", "/img/lump.webp", "/img/jenkins.webp", "/img/stark.webp", "/img/triumvir.webp",  
    "/img/gunter.webp", "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/canon.webp", 
  ],
  [ // Inazuma Eleven GO
    "/img/samguk.webp", "/img/jp.webp", "/img/aitor.webp", "/img/gabi.webp",  "/img/subaru.webp", "/img/wanchang.webp", "/img/arion.webp",
    "/img/riccardo.webp", "/img/eugene.webp", "/img/ade.webp", "/img/roma.webp", "/img/michael.webp", "/img/lucian.webp", "/img/victor.webp",
    "/img/shun.webp", "/img/hugh.webp",  "/img/inchy.webp", "/img/zaphod.webp", "/img/kyrk.webp", "/img/nirvana.webp", "/img/maxim.webp", 
    "/img/infinity.webp", "/img/princeton.webp", "/img/yale.webp", "/img/remington.webp", "/img/kraken.webp", "/img/nemo.webp", "/img/davy.webp", 
    "/img/ilgrande.webp","/img/doug.webp", "/img/whyte.webp", "/img/loo.webp", "/img/njord.webp", "/img/laurel.webp", "/img/langford.webp", 
    "/img/bradford.webp","/img/houdini.webp", "/img/saturn.webp", "/img/mars.webp", "/img/sol.webp", "/img/cronus.webp", "/img/cinquedea.webp", 
    "/img/quintet.webp","/img/pentona.webp", "/img/lumina.webp",  "/img/beamer.webp", "/img/whittaker.webp", "/img/bailong.webp",
    "/img/obscura.webp", "/img/spectrum.webp", "/img/crowe.webp", "/img/yang.webp", "/img/tezcat.webp", "/img/biggsy.webp", "/img/smiley.webp", 
    "/img/skinny.webp", "/img/smarty.webp", "/img/chunky.webp", "/img/tiny.webp", "/img/hairy.webp", "/img/spikey.webp", "/img/fei.webp", 
    "/img/feitirano.webp", "/img/creepy.webp","/img/ariontezcat.webp", "/img/vladimir.webp", "/img/vladimirvictor.webp", "/img/tasuke.webp",  "/img/hotel.webp", 
    "/img/oscar.webp", "/img/golf.webp", "/img/lima.webp","/img/india.webp", "/img/julieta.webp", "/img/mike.webp", "/img/alfa.webp", 
    "/img/kilo.webp", "/img/foxtrot.webp", "/img/noviembre.webp", "/img/beta.webp", "/img/inaba.webp","/img/romeo.webp", "/img/papa.webp", 
    "/img/quebec.webp","/img/sierra.webp", "/img/gamma.webp",  "/img/eka.webp", "/img/dva.webp", "/img/catvari.webp","/img/tyrah.webp","/img/panca.webp", 
    "/img/sas.webp","/img/sapta.webp", "/img/asta.webp", "/img/navan.webp", "/img/dasan.webp", "/img/zanark.webp", "/img/zanarkmm.webp",
    "/img/goldie.webp","/img/sor.webp","/img/ayt.webp","/img/arecks.webp","/img/cee.webp", "/img/djibz.webp","/img/garreau.webp","/img/mohrir.webp",
    "/img/mehr.webp","/img/ghiris.webp","/img/zetoh.webp","/img/chitoh.webp","/img/yurkeh.webp","/img/dekih.webp","/img/yuh.webp","/img/kohlt.webp",
    "/img/hamstah.webp","/img/felis.webp","/img/simeon.webp","/img/saru.webp","/img/jpmm.webp","/img/goldiemm.webp","/img/sormm.webp","/img/gabimm.webp",
    "/img/arionmm.webp","/img/riccardomm.webp","/img/romamm.webp","/img/solmm.webp","/img/feimm.webp","/img/victormm.webp","/img/zanarkultra.webp",
    "/img/markadulto.webp","/img/nathanadulto.webp","/img/jackadulto.webp","/img/hurleyadulto.webp","/img/samfordadulto.webp","/img/judeadulto.webp",
    "/img/calebadulto.webp","/img/xavieradulto.webp","/img/shawnadulto.webp","/img/kevinadulto.webp","/img/axeladulto.webp","/img/lotus.webp","/img/tulip.webp",
    "/img/sterne.webp","/img/aster.webp","/img/flora.webp","/img/floramm.webp","/img/vulpeen.webp","/img/drakul.webp","/img/ogar.webp", "/img/karan.webp",
    "/img/rondula.webp", "/img/plink.webp","/img/aoba.webp","/img/bala.webp", "/img/banda.webp", "/img/ruger.webp", "/img/gandares.webp","/img/phobos.webp",
    "/img/meteo.webp","/img/ozrock.webp","/img/terry.webp", "/img/foreman.webp", "/img/keenan.webp", "/img/trina.webp","/img/zippy.webp","/img/buddy.webp", 
    "/img/cerise.webp",  "/img/zack.webp", "/img/falco.webp", "/img/circulus.webp", "/img/arculus.webp",

  
  ],
  [ // Inazuma Eleven Ares
    "/img/mark.webp", "/img/king.webp", "/img/ropes.webp", "/img/dvalin.webp", "/img/zell.webp", "/img/nathan.webp","/img/tod.webp", "/img/martin.webp", 
    "/img/master.webp", "/img/malcolm.webp", "/img/apollo.webp", "/img/shawn.webp", "/img/bomber.webp", "/img/jack.webp",
    "/img/bobby.webp", "/img/jim.webp", "/img/sam.webp", "/img/drent.webp", "/img/simmons.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/downtown.webp",
    "/img/shawn.webp", "/img/ganymede.webp", "/img/baller.webp", "/img/clear.webp",  "/img/caleb.webp","/img/timmy.webp", "/img/max.webp", "/img/waldon.webp",
    "/img/steve.webp", "/img/erik.webp", "/img/bloom.webp", "/img/swing.webp", "/img/artemis.webp", "/img/hermes.webp", "/img/athena.webp", 
    "/img/byron.webp",  "/img/jordan.webp", "/img/bellatrix.webp",  "/img/krueger.webp", "/img/axel.webp", "/img/samford.webp", "/img/kevin.webp", "/img/willy.webp",
    , "/img/turner.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/hatch.webp", "/img/demeter.webp", "/img/metron.webp", "/img/torch.webp",  
    "/img/gazelle.webp", "/img/xavier.webp", "/img/keats.webp", "/img/jude.webp","/img/sandra.webp", "/img/kiko.webp", "/img/trevor.webp", "/img/golem.webp",
    "/img/nino.webp", "/img/maxime.webp", "/img/valentin.webp", "/img/cesar.webp", "/img/sonny.webp", "/img/adriano.webp", "/img/basile.webp", "/img/way.webp",
    "/img/acker.webp", "/img/eddy.webp", "/img/elliot.webp", "/img/perseus.webp","/img/aiden.webp", "/img/bunny.webp", "/img/schiller.webp", "/img/billy.webp",
    "/img/kia.webp", "/img/duske.webp", "/img/heath.webp", "/img/hikaru.webp","/img/baek.webp", "/img/satan.webp", "/img/onaxon.webp","/img/andreas.webp","/img/zhou.webp",
    "/img/lihao.webp", "/img/alonso.webp","/img/baraja.webp", "/img/emerico.webp","/img/clario.webp","/img/bergamo.webp","/img/bigman.webp", "/img/cobra.webp", "/img/malik.webp", "/img/lus.webp",
    "/img/froy.webp","/img/arthur.webp","/img/petronio.webp","/img/yurika.webp",
  ]
];

const posiciones = {
  portero:    ["/img/difortune.webp","/img/bigman.webp", "/img/alonso.webp","/img/duske.webp","/img/way.webp","/img/sandra.webp","/img/terry.webp","/img/phobos.webp","/img/aoba.webp","/img/lotus.webp","/img/kohlt.webp","/img/chitoh.webp", "/img/eka.webp","/img/romeo.webp","/img/hotel.webp", "/img/biggsy.webp", "/img/mark.webp", "/img/king.webp", "/img/samguk.webp", "/img/darren.webp", "/img/mask.webp", "/img/feldt.webp", "/img/idol.webp", "/img/poseidon.webp", "/img/hillman.webp", "/img/ropes.webp", "/img/daisy.webp", "/img/galileo.webp", "/img/dvalin.webp", "/img/zell.webp", "/img/grent.webp",  "/img/nero.webp", "/img/blasi.webp",  "/img/dasilva.webp",  "/img/fox.webp",  "/img/helio.webp", "/img/iñigo.webp",  "/img/luceafar.webp",  "/img/astaroth.webp",  "/img/jp.webp", "/img/nirvana.webp", "/img/princeton.webp", "/img/ilgrande.webp", "/img/whyte.webp", "/img/cinquedea.webp", "/img/lumina.webp", "/img/saturn.webp"],
  defensa1:   ["/img/nino.webp","/img/malik.webp", "/img/lus.webp","/img/baraja.webp","/img/kiko.webp","/img/trina.webp", "/img/foreman.webp","/img/smarty.webp", "/img/chunky.webp","/img/nathan.webp","/img/tod.webp","/img/tulip.webp", "/img/scotty.webp","/img/mohrir.webp", "/img/aitor.webp", "/img/archer.webp", "/img/martin.webp", "/img/sor.webp", "/img/master.webp", "/img/monkey.webp", "/img/malcolm.webp",,"/img/oscar.webp", "/img/apollo.webp","/img/hamstah.webp", "/img/hephestus.webp", "/img/sweet.webp", "/img/smith.webp", "/img/shawn.webp", "/img/hurley.webp", "/img/bomber.webp",  "/img/icer.webp",  "/img/arkew.webp",  "/img/gocker.webp",  "/img/zohen.webp",  "/img/hauser.webp",  "/img/lagarto.webp",  "/img/vitesse.webp",  "/img/ferrum.webp",  "/img/mangrove.webp", "/img/ischer.webp",  "/img/jenkins.webp",  "/img/lephiel.webp",  "/img/hebimos.webp",  "/img/jp.webp", "/img/beamer.webp", "/img/obscura.webp", "/img/subaru.webp"],
  defensa2:   ["/img/lihao.webp","/img/malik.webp","/img/petronio.webp","/img/yale.webp","/img/cobra.webp","/img/billy.webp","/img/acker.webp","/img/trevor.webp", "/img/golem.webp", "/img/zippy.webp","/img/keenan.webp","/img/meteo.webp","/img/ogar.webp","/img/tulip.webp","/img/hamstah.webp","/img/mohrir.webp","/img/goldie.webp","/img/sor.webp","/img/ayt.webp","/img/dva.webp", "/img/catvari.webp", "/img/tyrah.webp","/img/papa.webp","/img/kilo.webp","/img/oscar.webp", "/img/golf.webp", "/img/skinny.webp","/img/smiley.webp","/img/jack.webp","/img/peabody.webp", "/img/sor.webp", "/img/thiago.webp", "/img/bargie.webp", "/img/gabi.webp", "/img/aitor.webp", "/img/bobby.webp", "/img/jim.webp", "/img/sam.webp", "/img/drent.webp", "/img/lion.webp", "/img/simmons.webp", "/img/hillvalley.webp", "/img/sherman.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/island.webp", "/img/downtown.webp", "/img/shawn.webp", "/img/ganymede.webp", "/img/baller.webp", "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/thor.webp", "/img/kalil.webp",  "/img/minion.webp",  "/img/mountain.webp",  "/img/gaines.webp", "/img/garcia.webp",  "/img/bump.webp",  "/img/lump.webp",  "/img/rubu.webp", "/img/nenel.webp", "/img/kraken.webp", "/img/loo.webp", "/img/quintet.webp", "/img/whittaker.webp", "/img/wanchang.webp"],
  defensa3:   ["/img/lihao.webp","/img/malik.webp","/img/petronio.webp","/img/yale.webp","/img/cobra.webp","/img/billy.webp","/img/acker.webp","/img/trevor.webp", "/img/golem.webp", "/img/zippy.webp", "/img/keenan.webp","/img/meteo.webp","/img/ogar.webp","/img/tulip.webp","/img/hamstah.webp","/img/mohrir.webp","/img/goldie.webp","/img/sor.webp","/img/ayt.webp","/img/dva.webp", "/img/catvari.webp", "/img/tyrah.webp","/img/papa.webp","/img/kilo.webp","/img/oscar.webp", "/img/golf.webp", "/img/skinny.webp","/img/smiley.webp","/img/jack.webp","/img/peabody.webp", "/img/sor.webp", "/img/thiago.webp", "/img/bargie.webp", "/img/gabi.webp", "/img/aitor.webp", "/img/bobby.webp", "/img/jim.webp", "/img/sam.webp", "/img/drent.webp", "/img/lion.webp", "/img/simmons.webp", "/img/hillvalley.webp", "/img/sherman.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/island.webp", "/img/downtown.webp", "/img/shawn.webp", "/img/ganymede.webp", "/img/baller.webp", "/img/clear.webp",  "/img/gele.webp",  "/img/kiburn.webp",  "/img/thor.webp", "/img/kalil.webp",  "/img/minion.webp",  "/img/mountain.webp",  "/img/gaines.webp", "/img/garcia.webp",  "/img/bump.webp",  "/img/lump.webp",  "/img/rubu.webp", "/img/nenel.webp", "/img/kraken.webp", "/img/loo.webp", "/img/quintet.webp", "/img/whittaker.webp", "/img/wanchang.webp"],
  defensa4:   ["/img/nino.webp","/img/malik.webp", "/img/lus.webp","/img/baraja.webp","/img/kiko.webp","/img/trina.webp", "/img/foreman.webp","/img/smarty.webp", "/img/chunky.webp","/img/nathan.webp", "/img/tod.webp","/img/tulip.webp", "/img/scotty.webp", "/img/mohrir.webp","/img/aitor.webp", "/img/archer.webp", "/img/martin.webp", "/img/sor.webp", "/img/master.webp", "/img/monkey.webp", "/img/malcolm.webp",,"/img/oscar.webp", "/img/apollo.webp","/img/hamstah.webp", "/img/hephestus.webp", "/img/sweet.webp", "/img/smith.webp", "/img/shawn.webp", "/img/hurley.webp", "/img/bomber.webp",  "/img/icer.webp",  "/img/arkew.webp",  "/img/gocker.webp",  "/img/zohen.webp",  "/img/hauser.webp",  "/img/lagarto.webp",  "/img/vitesse.webp",  "/img/ferrum.webp",  "/img/mangrove.webp", "/img/ischer.webp",  "/img/jenkins.webp",  "/img/lephiel.webp",  "/img/hebimos.webp",  "/img/jp.webp", "/img/beamer.webp", "/img/obscura.webp", "/img/subaru.webp","/img/roma.webp",],
  medio1:     ["/img/malphas.webp","/img/froy.webp","/img/emerico.webp","/img/clario.webp","/img/lihao.webp", "/img/zhou.webp","/img/satan.webp", "/img/onaxon.webp","/img/hikaru.webp","/img/kia.webp","/img/sonny.webp","/img/nino.webp", "/img/maxime.webp", "/img/valentin.webp", "/img/cesar.webp","/img/malik.webp", "/img/lus.webp","/img/banda.webp","/img/cerise.webp", "/img/buddy.webp","/img/plink.webp","/img/rondula.webp","/img/karan.webp","/img/felis.webp","/img/yurkeh.webp","/img/mehr.webp","/img/ghiris.webp","/img/djibz.webp","/img/garreau.webp","/img/arecks.webp","/img/sapta.webp", "/img/asta.webp","/img/panca.webp", "/img/sas.webp","/img/sierra.webp","/img/quebec.webp","/img/foxtrot.webp","/img/india.webp", "/img/lima.webp","/img/tiny.webp", "/img/hairy.webp", "/img/spikey.webp","/img/nathan.webp", "/img/fei.webp", "/img/arion.webp", "/img/jude.webp","/img/sol.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/max.webp", "/img/steve.webp", "/img/erik.webp", "/img/bloom.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/master.webp", "/img/monkey.webp", "/img/swing.webp", "/img/artemis.webp", "/img/hermes.webp", "/img/hera.webp", "/img/athena.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/pandora.webp", "/img/jordan.webp", "/img/dvalin.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/bellatrix.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp", "/img/maxim.webp", "/img/shun.webp", "/img/hugh.webp", "/img/inchy.webp", "/img/zaphod.webp", "/img/nemo.webp", "/img/laurel.webp", "/img/houdini.webp", "/img/spectrum.webp", "/img/crowe.webp", "/img/yang.webp", "/img/eugene.webp", "/img/ade.webp", "/img/roma.webp", "/img/mars.webp"],
  medio2:     ["/img/malphas.webp","/img/petronio.webp","/img/froy.webp","/img/emerico.webp","/img/clario.webp","/img/lihao.webp", "/img/zhou.webp","/img/satan.webp", "/img/onaxon.webp","/img/hikaru.webp","/img/kia.webp","/img/sonny.webp","/img/nino.webp", "/img/maxime.webp", "/img/valentin.webp", "/img/cesar.webp","/img/malik.webp", "/img/lus.webp","/img/banda.webp","/img/cerise.webp", "/img/buddy.webp","/img/plink.webp","/img/rondula.webp","/img/karan.webp","/img/felis.webp","/img/yurkeh.webp","/img/mehr.webp","/img/ghiris.webp","/img/arecks.webp","/img/djibz.webp","/img/garreau.webp","/img/sapta.webp", "/img/asta.webp","/img/panca.webp", "/img/sas.webp","/img/sierra.webp","/img/quebec.webp","/img/foxtrot.webp","/img/india.webp", "/img/lima.webp","/img/tiny.webp", "/img/hairy.webp", "/img/spikey.webp","/img/arion.webp", "/img/jude.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/steve.webp", "/img/sam.webp", "/img/erik.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/waldon.webp", "/img/hermes.webp", "/img/hera.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/jordan.webp", "/img/pandora.webp", "/img/dvalin.webp", "/img/metron.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/heat.webp",  "/img/lean.webp",  "/img/neppten.webp",  "/img/kormer.webp",  "/img/bellatrix.webp",  "/img/thor.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp",  "/img/zanos.webp",  "/img/gaiel.webp", "/img/shun.webp", "/img/hugh.webp", "/img/inchy.webp", "/img/zaphod.webp", "/img/nemo.webp", "/img/laurel.webp", "/img/houdini.webp", "/img/spectrum.webp", "/img/crowe.webp", "/img/yang.webp", "/img/eugene.webp", "/img/ade.webp", "/img/roma.webp", "/img/mars.webp"],
  medio3:     ["/img/malphas.webp","/img/froy.webp","/img/emerico.webp","/img/clario.webp","/img/lihao.webp", "/img/zhou.webp","/img/satan.webp", "/img/onaxon.webp","/img/hikaru.webp","/img/kia.webp","/img/sonny.webp","/img/nino.webp", "/img/maxime.webp", "/img/valentin.webp", "/img/cesar.webp","/img/malik.webp", "/img/lus.webp","/img/banda.webp","/img/cerise.webp", "/img/buddy.webp","/img/plink.webp","/img/rondula.webp","/img/karan.webp","/img/felis.webp","/img/yurkeh.webp","/img/mehr.webp","/img/ghiris.webp","/img/arecks.webp","/img/djibz.webp","/img/garreau.webp","/img/sapta.webp", "/img/asta.webp","/img/panca.webp", "/img/sas.webp","/img/sierra.webp","/img/quebec.webp","/img/foxtrot.webp","/img/india.webp", "/img/lima.webp","/img/tiny.webp", "/img/hairy.webp", "/img/spikey.webp","/img/nathan.webp", "/img/fei.webp", "/img/arion.webp", "/img/jude.webp","/img/sol.webp", "/img/tori.webp", "/img/caleb.webp", "/img/riccardo.webp", "/img/timmy.webp", "/img/max.webp", "/img/steve.webp", "/img/erik.webp", "/img/bloom.webp", "/img/chicken.webp", "/img/eagle.webp", "/img/master.webp", "/img/monkey.webp", "/img/swing.webp", "/img/artemis.webp", "/img/hermes.webp", "/img/hera.webp", "/img/athena.webp", "/img/byron.webp", "/img/agentem.webp", "/img/soundtown.webp", "/img/pandora.webp", "/img/jordan.webp", "/img/dvalin.webp", "/img/sparrow.webp", "/img/bomber.webp",  "/img/bellatrix.webp", "/img/heat.webp",  "/img/lean.webp",  "/img/droll.webp",  "/img/rhine.webp",  "/img/kiwill.webp",  "/img/ark.webp",  "/img/dolphin.webp", "/img/choi.webp", "/img/acuto.webp", "/img/krueger.webp", "/img/gabrini.webp", "/img/nakata.webp", "/img/diavolo.webp", "/img/ryan.webp", "/img/haddad.webp", "/img/hampton.webp", "/img/maximino.webp", "/img/vitrum.webp", "/img/leung.webp", "/img/stark.webp",  "/img/triumvir.webp",  "/img/gunter.webp",  "/img/lephiel.webp",  "/img/wenel.webp", "/img/maxim.webp", "/img/shun.webp", "/img/hugh.webp", "/img/inchy.webp", "/img/zaphod.webp", "/img/nemo.webp", "/img/laurel.webp", "/img/houdini.webp", "/img/spectrum.webp", "/img/crowe.webp", "/img/yang.webp", "/img/eugene.webp", "/img/ade.webp", "/img/roma.webp", "/img/mars.webp"],
  delantero1: ["/img/maddie.webp","/img/yurika.webp", "/img/canon.webp", "/img/arthur.webp","/img/froy.webp","/img/bergamo.webp","/img/andreas.webp","/img/baek.webp","/img/heath.webp","/img/perseus.webp","/img/aiden.webp", "/img/bunny.webp", "/img/schiller.webp","/img/eddy.webp", "/img/elliot.webp","/img/adriano.webp", "/img/basile.webp","/img/sonny.webp","/img/falco.webp", "/img/zack.webp","/img/ozrock.webp","/img/ruger.webp", "/img/gandares.webp","/img/bala.webp","/img/aster.webp", "/img/inaba.webp","/img/flora.webp","/img/simeon.webp","/img/dekih.webp","/img/yuh.webp","/img/zetoh.webp","/img/cee.webp","/img/navan.webp", "/img/dasan.webp","/img/gamma.webp","/img/noviembre.webp", "/img/beta.webp","/img/julieta.webp", "/img/mike.webp", "/img/alfa.webp","/img/creepy.webp","/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/max.webp", "/img/kevin.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/swing.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/neppten.webp",  "/img/torch.webp",  "/img/gazelle.webp", "/img/mercury.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp", "/img/maxim.webp", "/img/michael.webp", "/img/lucian.webp", "/img/kyrk.webp", "/img/infinity.webp", "/img/remington.webp", "/img/davy.webp", "/img/doug.webp", "/img/njord.webp", "/img/langford.webp", "/img/bradford.webp", "/img/pentona.webp", "/img/tezcat.webp", "/img/cronus.webp"],
  delantero2: ["/img/maddie.webp","/img/yurika.webp", "/img/canon.webp", "/img/petronio.webp","/img/arthur.webp","/img/froy.webp","/img/bergamo.webp","/img/andreas.webp","/img/baek.webp","/img/heath.webp","/img/perseus.webp","/img/aiden.webp", "/img/bunny.webp", "/img/schiller.webp","/img/eddy.webp", "/img/elliot.webp","/img/adriano.webp", "/img/basile.webp","/img/sonny.webp", "/img/zack.webp","/img/falco.webp","/img/ozrock.webp","/img/ruger.webp", "/img/gandares.webp","/img/bala.webp","/img/aster.webp", "/img/inaba.webp","/img/flora.webp","/img/simeon.webp","/img/dekih.webp","/img/yuh.webp","/img/zetoh.webp","/img/cee.webp","/img/navan.webp", "/img/dasan.webp","/img/gamma.webp","/img/noviembre.webp", "/img/beta.webp","/img/julieta.webp", "/img/mike.webp", "/img/alfa.webp","/img/creepy.webp","/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/kevin.webp", "/img/willy.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/demeter.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp", "/img/dvalin.webp", "/img/metron.webp", "/img/zell.webp", "/img/mercury.webp",  "/img/torch.webp",  "/img/gazelle.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp","/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp",  "/img/drago.webp", "/img/hedgeer.webp",  "/img/zanos.webp",  "/img/gaiel.webp", "/img/michael.webp", "/img/lucian.webp", "/img/kyrk.webp", "/img/infinity.webp", "/img/remington.webp", "/img/davy.webp", "/img/doug.webp", "/img/njord.webp", "/img/langford.webp", "/img/bradford.webp", "/img/pentona.webp", "/img/tezcat.webp", "/img/cronus.webp"],
  delantero3: ["/img/maddie.webp","/img/yurika.webp", "/img/canon.webp", "/img/arthur.webp","/img/froy.webp","/img/bergamo.webp","/img/andreas.webp","/img/baek.webp","/img/heath.webp","/img/perseus.webp","/img/aiden.webp", "/img/bunny.webp", "/img/schiller.webp","/img/eddy.webp", "/img/elliot.webp","/img/adriano.webp", "/img/basile.webp","/img/sonny.webp","/img/falco.webp", "/img/zack.webp","/img/ozrock.webp","/img/ruger.webp", "/img/gandares.webp","/img/bala.webp","/img/aster.webp", "/img/inaba.webp","/img/flora.webp","/img/simeon.webp","/img/dekih.webp","/img/yuh.webp","/img/zetoh.webp","/img/cee.webp","/img/navan.webp", "/img/dasan.webp","/img/gamma.webp","/img/noviembre.webp", "/img/beta.webp","/img/julieta.webp", "/img/mike.webp", "/img/alfa.webp","/img/creepy.webp","/img/axel.webp", "/img/samford.webp", "/img/bailong.webp", "/img/fei.webp", "/img/sol.webp", "/img/zanark.webp", "/img/victor.webp", "/img/max.webp", "/img/kevin.webp", "/img/artist.webp", "/img/cheetah.webp", "/img/gamer.webp", "/img/gorilla.webp", "/img/hatch.webp", "/img/swing.webp", "/img/talisman.webp", "/img/turner.webp", "/img/cloak.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", "/img/byron.webp", "/img/shawn.webp", "/img/sue.webp", "/img/diam.webp", "/img/rihm.webp",  "/img/neppten.webp",  "/img/torch.webp",  "/img/gazelle.webp","/img/mercury.webp",  "/img/wittz.webp",  "/img/shadow.webp",  "/img/austin.webp",  "/img/xavier.webp", "/img/partinus.webp", "/img/balone.webp", "/img/keats.webp", "/img/generani.webp", "/img/paolo.webp", "/img/robingo.webp", "/img/coyote.webp", "/img/flare.webp", "/img/drago.webp", "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp", "/img/maxim.webp", "/img/michael.webp", "/img/lucian.webp", "/img/kyrk.webp", "/img/infinity.webp", "/img/remington.webp", "/img/davy.webp", "/img/doug.webp", "/img/njord.webp", "/img/langford.webp", "/img/bradford.webp", "/img/pentona.webp", "/img/tezcat.webp", "/img/cronus.webp"]
};

const CARTAS_SECRETAS = [
  "/img/ariontezcat.webp", "/img/vladimir.webp", "/img/vladimirvictor.webp"
]

const ESCUDOS = {
  Raimon: "/img/raimon.webp",
  InazumaKFC: "/img/inazumakfc.webp",
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
  Caballerostemplarios: "/img/caballerostemplarios.webp",
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
  RaimonGo: "/img/raimongo.webp",
  LuzEterna: "/img/luzeterna.webp",
  OscuridadAncestral: "/img/oscuridadancestral.webp",
  Zero: "/img/zero.webp",
  Arions: "/img/arions.webp",
  ProtocoloOmega: "/img/protocoloomega.webp",
  ProtocoloOmega2: "/img/protocoloomega2.webp",
  ProtocoloOmega3: "/img/protocoloomega3.webp",
  CiervoBlanco: "/img/ciervoblanco.webp",
  ZanarkDomain: "/img/zanarkdomain.webp",
  CascadaPerfecta: "/img/cascadaperfecta.webp",
  Zan: "/img/zan.webp",
  Gir: "/img/gir.webp",
  Gar: "/img/gar.webp",
  Ragnah: "/img/ragnah.webp",
  ChronoStorm: "/img/chronostorm.webp",
  InazumaJaponLegendario: "/img/inazumajaponlegendario.webp",
  NuevoInazumaJapon: "/img/nuevoinazumajapon.webp",
  Desesperdidos: "/img/desesperdidos.webp",
  Criaturasdelanoche: "/img/criaturasdelanoche.webp",
  Silice: "/img/silice.webp",
  Naiadi: "/img/naiadi.webp",
  Magmavis: "/img/magmavis.webp",
  Fertilia: "/img/fertilia.webp",
  FalamMedius: "/img/falammedius.webp",
  FlotaIxar: "/img/flotaixar.webp",
  EarthEleven: "/img/eartheleven.webp",
  GalaxyEleven: "/img/galaxyeleven.webp",
  BigBang: "/img/bigbang.webp",
  Supernova: "/img/supernova.webp",
  RaimonInakuni: "/img/RaimonInakuni.webp",
  Bastion: "/img/Bastion.webp",
  Polaris: "/img/Polaris.webp",
  ZeusAres: "/img/ZeusAres.webp",
  AlpinoAres: "/img/AlpinoAres.webp",
  Alia: "/img/Alia.webp",
  Ribera: "/img/Ribera.webp",
  Plenilunio: "/img/Plenilunio.webp",
  TropaAcrobatica: "/img/TropaAcrobatica.webp",
  LosInvencibles: "/img/LosInvencibles.webp",
  AceInvaders: "/img/AceInvaders.webp",
  ChispasPerfectas: "/img/ChispasPerfectas.webp",
  InazumaJaponOrion: "/img/InazumaJaponOrion.webp",
  SombradeOrion: "/img/SombradeOrion.webp",
  FlechadeArtemisa: "/img/FlechadeArtemisa.webp",
  RaimonVR: "/img/raimonvr.webp",
  Caseta: "/img/caseta.webp",
  Caravana: "/img/caravana.webp",
  Marvin: "/img/neogod.webp",
  Chemaxel: "/img/chemaxel.webp",
  // Añade más escudos aquí
};


const LOGROS = [

  {
  id: "bienvenida",
  nombre: "¡Bienvenido!",
  descripcion: "Gracias por jugar.",
  jugadores: [], // no necesita jugadores
  recompensa: { tipo: "escudo", valor: "Caseta" },
  auto: true
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
    id: "kfc",
    nombre: "Las promesas del Inazuma KFC",
    descripcion: "Escoge a Maddie Moonlight entre tus 11 jugadores.",
    jugadores: [
      "/img/maddie.webp"
    ],
    recompensa: { tipo: "escudo", valor: "InazumaKFC" },
    drops: ["/img/maddie.webp"] 
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
    jugadores: ["/img/king.webp", "/img/jude.webp", "/img/samford.webp"],
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
    "/img/mark.webp", "/img/nathan.webp", "/img/jack.webp","/img/jim.webp", "/img/bobby.webp", "/img/peabody.webp", "/img/tod.webp",
    "/img/sam.webp", "/img/steve.webp" ,"/img/timmy.webp", "/img/erik.webp","/img/max.webp","/img/kevin.webp","/img/axel.webp",
    "/img/willy.webp", "/img/mask.webp", "/img/talisman.webp", "/img/lion.webp", "/img/chicken.webp", "/img/monkey.webp", "/img/eagle.webp", 
    "/img/cheetah.webp", "/img/gorilla.webp", "/img/feldt.webp","/img/turner.webp", "/img/idol.webp","/img/gamer.webp", "/img/artist.webp", 
    "/img/king.webp", "/img/martin.webp", "/img/drent.webp",  "/img/simmons.webp", "/img/master.webp","/img/waldon.webp", "/img/jude.webp",  
    "/img/bloom.webp", "/img/swing.webp", "/img/samford.webp", "/img/hatch.webp", "/img/hillman.webp", "/img/island.webp", "/img/sweet.webp", 
    "/img/cloak.webp", "/img/hillvalley.webp", "/img/sherman.webp", "/img/malcolm.webp", "/img/tyler.webp", "/img/marvin.webp", "/img/thomas.webp", 
    "/img/poseidon.webp", "/img/apollo.webp", "/img/ares.webp", "/img/dionysus.webp", "/img/hephestus.webp", "/img/hermes.webp", "/img/artemis.webp", 
    "/img/athena.webp", "/img/hera.webp", "/img/byron.webp", "/img/demeter.webp", "/img/maddie.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Zeus" },
    drops: ["/img/apollo.webp", "/img/hephestus.webp", "/img/athena.webp", "/img/ares.webp", 
      "/img/dionysus.webp", "/img/poseidon.webp", "/img/byron.webp", "/img/hera.webp", "/img/demeter.webp",
      "/img/hermes.webp", "/img/artemis.webp",]
  },
    {
    id: "raimon11",
    nombre: "¡Arriba, chuta, la victoria es tuya!",
    descripcion: "Escoge 11 jugadores del Raimon de la saga de Mark Evans.",
    jugadores: [
      "/img/mark.webp","/img/peabody.webp", "/img/jude.webp", "/img/axel.webp", "/img/nathan.webp",
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
      "/img/steve.webp", "/img/erik.webp","/img/peabody.webp", "/img/sam.webp", 
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
    drops: ["/img/galileo.webp", "/img/ganymede.webp","/img/janus.webp", 
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
    drops: ["/img/kingredux.webp", "/img/caleb.webp","/img/samfordredux.webp", "/img/sparrow.webp",
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
    drops: ["/img/feldt.webp", "/img/nathanoscuro.webp","/img/shadow.webp","/img/kevinoscuro.webp", 
      "/img/jimoscuro.webp", "/img/samoscuro.webp","/img/malcolm.webp","/img/steveoscuro.webp", 
      "/img/timoscuro.webp","/img/todoscuro.webp","/img/maxoscuro.webp",]
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
    "/img/smith.webp", "/img/tori.webp", "/img/agentem.webp", "/img/galileo.webp", "/img/ganymede.webp", 
    "/img/pandora.webp", "/img/diam.webp", "/img/rihm.webp", "/img/ropes.webp", "/img/daisy.webp", 
    "/img/downtown.webp", "/img/shawn.webp", "/img/scotty.webp", "/img/bargie.webp","/img/caleb.webp", "/img/sparrow.webp", 
    "/img/sue.webp", "/img/dvalin.webp", "/img/metron.webp", "/img/mercury.webp", "/img/zell.webp", "/img/darren.webp",  "/img/hurley.webp", 
    "/img/soundtown.webp", "/img/grent.webp", "/img/bomber.webp", "/img/baller.webp", "/img/heat.webp", "/img/lean.webp", "/img/torch.webp", 
    "/img/icer.webp", "/img/kormer.webp", "/img/arkew.webp",  "/img/gocker.webp", "/img/clear.webp", "/img/droll.webp",  "/img/rhine.webp",  "/img/gazelle.webp", 
    "/img/nero.webp", "/img/zohen.webp",  "/img/hauser.webp", "/img/gele.webp",  "/img/kiburn.webp", "/img/bellatrix.webp", "/img/kiwill.webp", 
    "/img/ark.webp","/img/wittz.webp","/img/shadow.webp","/img/thor.webp","/img/jordan.webp", "/img/xavier.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Génesis" },
    drops: ["/img/ark.webp", "/img/xene.webp", "/img/bellatrix.webp", "/img/hauser.webp", "/img/zohen.webp",
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
    nombre: "Estrellas de la Fase Asiática del FFI: Domadores de Olas",
    descripcion: "Escoge a Dolph Hensen y Bilal Kalil entre tus 11 jugadores.",
    jugadores: [
      "/img/dolphin.webp", "/img/kalil.webp"
    ],
    recompensa: { tipo: "escudo", valor: "BigWaves" },
    drops: ["/img/dolphin.webp" ]
  },
  
      {
      id: "leonesdeldesierto",
    nombre: "Estrellas de la Fase Asiática del FFI: Leones Catarís",
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
      "/img/hedgeer.webp",  "/img/callous.webp",  "/img/malice.webp",  "/img/lancer.webp",  "/img/sael.webp",  "/img/destra.webp", "/img/canon.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Orfeo" },
    drops: ["/img/blasi.webp",  "/img/nakata.webp",  "/img/generani.webp",  "/img/paolo.webp", "/img/gabrini.webp", "/img/diavolo.webp"]
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
      "/img/mangrove.webp",  "/img/vitrum.webp","/img/leung.webp", "/img/hedgeer.webp",]
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
      id: "Caballerostemplarios",
    nombre: "Llegan los Imperiales",
    descripcion: "Escoge a Victor Blade entre tus 11 jugadores.",
    jugadores: [
      "/img/victor.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Caballerostemplarios" }
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
    jugadores: ["/img/princeton.webp", "/img/yale.webp", "/img/remington.webp"
    ],
    recompensa: { tipo: "escudo", valor: "RoyalGo" },
    drops: [ "/img/princeton.webp", "/img/yale.webp", "/img/remington.webp" ]
  },
                             {
      id: "Calapirata",
    nombre: "¡Al abordaje!",
    descripcion: "Escoge a Octavus Kraken, Dakkar Nemo y Davy Jones entre tus 11 jugadores.",
    jugadores: ["/img/kraken.webp", "/img/nemo.webp", "/img/davy.webp"
    ],
    recompensa: { tipo: "escudo", valor: "CalaPirata" },
    drops: [ "/img/kraken.webp", "/img/nemo.webp", "/img/davy.webp" ]
  },
                               {
      id: "Mardeluna",
    nombre: "Listos para la guerra",
    descripcion: "Escoge a Alessandro ilGrande y Doug McArthur entre tus 11 jugadores.",
    jugadores: ["/img/ilgrande.webp", "/img/doug.webp"
    ],
    recompensa: { tipo: "escudo", valor: "MardeLuna" },
    drops: [ "/img/ilgrande.webp", "/img/doug.webp"]
  },
                               {
      id: "Alpinogo",
    nombre: "Ice, frío, hielo",
    descripcion: "Escoge a Wolfe Whyte, Iggie Loo y Njord Snio entre tus 11 jugadores.",
    jugadores: ["/img/whyte.webp", "/img/loo.webp", "/img/njord.webp"
    ],
    recompensa: { tipo: "escudo", valor: "AlpinoGo" },
    drops: [ "/img/whyte.webp", "/img/loo.webp", "/img/njord.webp"]
  },
                                 {
      id: "Kirkwoodgo",
    nombre: "Los chicos de Byron",
    descripcion: "Escoge a los hermanos Ash y Bay Laurel entre tus 11 jugadores.",
    jugadores: ["/img/bradford.webp", "/img/langford.webp", "/img/laurel.webp"
    ],
    recompensa: { tipo: "escudo", valor: "KirkwoodGo" },
    drops: [ "/img/bradford.webp", "/img/langford.webp", "/img/laurel.webp"]
  },
    {
      id: "Espejismo",
    nombre: "Estrellas del Camino Imperial: ¡Abracadabra!",
    descripcion: "Escoge a Harrold Houdini y Cronus Fourseasons entre tus 11 jugadores.",
    jugadores: ["/img/houdini.webp", "/img/cronus.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Espejismo" },
    drops: [ "/img/houdini.webp"]
  },
    {
      id: "Universal",
    nombre: "Estrellas del Camino Imperial: El astro del Universal",
    descripcion: "Escoge a Ringo Saturn, Sol Daystar y Deimos Mars entre tus 11 jugadores.",
    jugadores: ["/img/saturn.webp", "/img/sol.webp", "/img/mars.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Universal" },
    drops: [ "/img/sol.webp", , "/img/mars.webp", "/img/saturn.webp"]
  },
    {
      id: "MonteOlimpo",
    nombre: "Estrellas del Camino Imperial: Los nuevos Dioses del Olimpo",
    descripcion: "Escoge a Harrold Houdini y Cronus Fourseasons entre tus 11 jugadores.",
    jugadores: ["/img/houdini.webp", "/img/cronus.webp"
    ],
    recompensa: { tipo: "escudo", valor: "MonteOlimpo" },
    drops: [ "/img/cronus.webp"]
  },
    {
      id: "DragonLink",
    nombre: "El 11 del dragón",
    descripcion: "Escoge a Quentin Cinquedea, Aimé Quintet y Erik Pentona entre tus 11 jugadores.",
    jugadores: ["/img/cinquedea.webp", "/img/quintet.webp", "/img/pentona.webp"
    ],
    recompensa: { tipo: "escudo", valor: "DragonLink" },
    drops: [ "/img/cinquedea.webp", "/img/quintet.webp", "/img/pentona.webp"]
  },
    {
      id: "RaimonGo",
    nombre: "¡Entrena, juega, sal a ganar!",
    descripcion: "Escoge a 11 jugadores del Raimon campeón del Camino Imperial entre tus 11 jugadores.",
    jugadores: ["/img/samguk.webp", "/img/jp.webp", "/img/subaru.webp", "/img/aitor.webp", "/img/wanchang.webp", 
      "/img/gabi.webp", "/img/riccardo.webp", "/img/ade.webp", "/img/eugene.webp", "/img/arion.webp", "/img/lucian.webp", 
      "/img/michael.webp", "/img/victor.webp", "/img/roma.webp", "/img/shun.webp", "/img/hugh.webp", "/img/doug.webp",
    ],
    recompensa: { tipo: "escudo", valor: "RaimonGo" },
    drops: ["/img/samguk.webp", "/img/jp.webp", "/img/subaru.webp", "/img/aitor.webp", "/img/wanchang.webp", 
      "/img/gabi.webp", "/img/riccardo.webp", "/img/ade.webp", "/img/eugene.webp", "/img/arion.webp", "/img/lucian.webp", 
      "/img/michael.webp", "/img/victor.webp", "/img/roma.webp"]
  },
    {
      id: "LuzEterna",
    nombre: "Ciclón Blanco",
    descripcion: "Escoge a Albion Lumina, Dwight Whittaker, Beamer Daye y Bai Long entre tus 11 jugadores.",
    jugadores: ["/img/lumina.webp", "/img/whittaker.webp", "/img/beamer.webp", "/img/bailong.webp" 
    ],
    recompensa: { tipo: "escudo", valor: "LuzEterna" },
    drops: ["/img/lumina.webp", "/img/whittaker.webp", "/img/bailong.webp", "/img/beamer.webp", "/img/spectrum.webp",
    ]
  },
    {
      id: "OscuridadAncestral",
    nombre: "Ceniza Negra",
    descripcion: "Escoge a Blake Obscura, Tynan Crowe, Yang y Tezcat entre tus 11 jugadores.",
    jugadores: ["/img/obscura.webp", "/img/crowe.webp", "/img/yang.webp", "/img/tezcat.webp" 
    ],
    recompensa: { tipo: "escudo", valor: "OscuridadAncestral" },
    drops: ["/img/obscura.webp", "/img/crowe.webp", "/img/yang.webp", "/img/tezcat.webp"
    ]
  },
    {
      id: "Zero",
    nombre: "Zero Magnum",
    descripcion: "Escoge a Albion Lumina, Dwight Whittaker, Blake Obscura, Bai Long y Tezcat entre tus 11 jugadores.",
    jugadores: ["/img/lumina.webp", "/img/whittaker.webp", "/img/obscura.webp", "/img/bailong.webp", "/img/tezcat.webp", 
    ],
    recompensa: { tipo: "escudo", valor: "Zero" },
    drops: ["/img/lumina.webp", "/img/whittaker.webp", "/img/obscura.webp", "/img/bailong.webp", "/img/tezcat.webp",
      "/img/beamer.webp", "/img/crowe.webp", "/img/yang.webp", "/img/spectrum.webp"
    ]
  },
   {
      id: "Arions",
    nombre: "Los duplicados de Fei",
    descripcion: "Escoge a Fei Rune y Arion Sherwind entre tus 11 jugadores.",
    jugadores: ["/img/fei.webp", "/img/arion.webp"    ],
    recompensa: { tipo: "escudo", valor: "Arions" },
    drops: ["/img/biggsy.webp", "/img/smiley.webp", "/img/skinny.webp", "/img/smarty.webp", "/img/chunky.webp",
      "/img/tiny.webp", "/img/hairy.webp", "/img/spikey.webp", "/img/creepy.webp","/img/feitirano.webp"    ]
  },
   {
      id: "ProtocoloOmega",
    nombre: "La primera amenaza del Dorado",
    descripcion: "Escoge a Julieta, Mike y Alfa entre tus 11 jugadores.",
    jugadores: ["/img/julieta.webp", "/img/mike.webp", "/img/alfa.webp"],
    recompensa: { tipo: "escudo", valor: "ProtocoloOmega" },
    drops: ["/img/hotel.webp", "/img/oscar.webp", "/img/golf.webp", "/img/lima.webp","/img/india.webp", 
      "/img/julieta.webp", "/img/mike.webp", "/img/alfa.webp"   ]
  },
  {
      id: "ProtocoloOmega2",
    nombre: "La segunda amenaza del Dorado",
    descripcion: "Escoge a Kilo, Foxtrot, Noviembre y Beta entre tus 11 jugadores.",
    jugadores: ["/img/kilo.webp", "/img/foxtrot.webp","/img/noviembre.webp", "/img/beta.webp"],
    recompensa: { tipo: "escudo", valor: "ProtocoloOmega2" },
    drops: ["/img/hotel.webp", "/img/oscar.webp", "/img/golf.webp", "/img/lima.webp", "/img/julieta.webp",
      "/img/mike.webp", "/img/beta.webp", "/img/india.webp", "/img/kilo.webp", "/img/foxtrot.webp","/img/noviembre.webp" ]
  },
  {
      id: "ProtocoloOmega3",
    nombre: "La tercera amenaza del Dorado",
    descripcion: "Escoge a Romeo, Papa, Quebec, Sierra y Gamma entre tus 11 jugadores.",
    jugadores: ["/img/romeo.webp", "/img/papa.webp","/img/quebec.webp", "/img/sierra.webp", "/img/gamma.webp"],
    recompensa: { tipo: "escudo", valor: "ProtocoloOmega3" },
    drops: ["/img/romeo.webp", "/img/oscar.webp", "/img/kilo.webp", "/img/lima.webp", "/img/papa.webp",
      "/img/mike.webp", "/img/gamma.webp", "/img/quebec.webp", "/img/kilo.webp", "/img/sierra.webp"]
  },
    {
      id: "CiervoBlanco",
    nombre: "La banda del Ciervo Blanco",
    descripcion: "Escoge a Taian Inaba entre tus 11 jugadores.",
    jugadores: ["/img/inaba.webp"],
    recompensa: { tipo: "escudo", valor: "CiervoBlanco" },
    drops: ["/img/inaba.webp"]
  },
  {
      id: "ZanarkDomain",
    nombre: "A sus órdenes, señor Zanark",
    descripcion: "Escoge a Eka, Dva, Sapta, Dasan y Zanark entre tus 11 jugadores.",
    jugadores: ["/img/eka.webp", "/img/dva.webp","/img/sapta.webp", "/img/dasan.webp", "/img/zanark.webp"],
    recompensa: { tipo: "escudo", valor: "ZanarkDomain" },
    drops: ["/img/eka.webp", "/img/dva.webp", "/img/catvari.webp", "/img/panca.webp", "/img/sas.webp",
      "/img/sapta.webp", "/img/asta.webp", "/img/navan.webp", "/img/dasan.webp", "/img/zanark.webp","/img/tyrah.webp","/img/zanarkmm.webp" ]
  },
  {
      id: "CascadaPerfecta",
    nombre: "Analizando al rival",
    descripcion: "Escoge a Ayt, Cee y Ar Ecks entre tus 11 jugadores.",
    jugadores: ["/img/ayt.webp", "/img/cee.webp","/img/arecks.webp"],
    recompensa: { tipo: "escudo", valor: "CascadaPerfecta" },
    drops: ["/img/ayt.webp", "/img/cee.webp","/img/arecks.webp" ]
  },
    {
      id: "Zan",
    nombre: "Empieza el Ragnarok",
    descripcion: "Escoge a Djibz, Garreau y Zanark entre tus 11 jugadores.",
    jugadores: ["/img/djibz.webp", "/img/garreau.webp","/img/zanark.webp"],
    recompensa: { tipo: "escudo", valor: "Zan" },
    drops: ["/img/djibz.webp", "/img/garreau.webp"]
  },
    {
      id: "Gir",
    nombre: "Los Enamorados",
    descripcion: "Escoge a Mohrir, Mehr, Ghiris y Zetoh entre tus 11 jugadores.",
    jugadores: ["/img/mohrir.webp", "/img/ghiris.webp","/img/mehr.webp","/img/zetoh.webp"],
    recompensa: { tipo: "escudo", valor: "Gir" },
    drops: ["/img/mohrir.webp", "/img/ghiris.webp","/img/mehr.webp","/img/zetoh.webp" ]
  },
    {
      id: "Gar",
    nombre: "La traición de Fei",
    descripcion: "Escoge a Chitoh, Yurkeh, Dekih, Yuh y Fei entre tus 11 jugadores.",
    jugadores: ["/img/chitoh.webp", "/img/yurkeh.webp","/img/dekih.webp", "/img/yuh.webp","/img/fei.webp"],
    recompensa: { tipo: "escudo", valor: "Gar" },
    drops: ["/img/chitoh.webp", "/img/yurkeh.webp","/img/dekih.webp", "/img/yuh.webp", "/img/fei.webp" ]
  },
      {
      id: "Ragnah",
    nombre: "La batalla final del Ragnarok",
    descripcion: "Escoge a Kohlt, Hamstah, Felis, Mehr, Ghiris y Simeon entre tus 11 jugadores.",
    jugadores: ["/img/kohlt.webp", "/img/hamstah.webp","/img/felis.webp", "/img/mehr.webp", "/img/ghiris.webp","/img/simeon.webp"],
    recompensa: { tipo: "escudo", valor: "Ragnah" },
    drops: ["/img/kohlt.webp", "/img/hamstah.webp","/img/felis.webp", "/img/mehr.webp", "/img/ghiris.webp","/img/simeon.webp", "/img/saru.webp" ]
  },
        {
      id: "ChronoStorm",
    nombre: "El equipo definitivo",
    descripcion: "Escoge a los 11 elegidos del maestro ",
    jugadores: ["/img/jp.webp", "/img/sor.webp","/img/goldie.webp", "/img/gabi.webp", "/img/riccardo.webp","/img/sol.webp",
      "/img/fei.webp", "/img/victor.webp", "/img/zanark.webp", "/img/arion.webp", "/img/roma.webp", "/img/bailong.webp" ],
    recompensa: { tipo: "escudo", valor: "ChronoStorm" },
    drops: ["/img/jpmm.webp", "/img/sormm.webp","/img/goldiemm.webp", "/img/gabimm.webp", "/img/riccardomm.webp","/img/solmm.webp",
      "/img/feimm.webp", "/img/victormm.webp", "/img/zanarkultra.webp", "/img/arionmm.webp", "/img/romamm.webp"
     ]
  },
{
  id: "InazumaJaponLegendario",
  nombre: "Inazuma Japón Legendario",
  descripcion: "Consigue los logros de Nuevo Inazuma Japón e Inazuma Japón.",
  recompensa: { tipo: "escudo", valor: "InazumaJaponLegendario" },
  jugadores: []
},

  {
  id: "NuevoInazumaJapon",
  nombre: "El nuevo Inazuma Japón",
  descripcion: "Escoge a los 11 integrantes del Nuevo Inazuma Japón.",
  jugadores: ["/img/jp.webp", "/img/aitor.webp","/img/goldie.webp", "/img/gabi.webp", "/img/riccardo.webp","/img/sol.webp","/img/bailong.webp",
      "/img/fei.webp", "/img/victor.webp", "/img/njord.webp", "/img/arion.webp", "/img/roma.webp"],
  recompensa: { tipo: "escudo", valor: "NuevoInazumaJapon" }
},
        {
      id: "Desesperdidos",
    nombre: "El equipo de Flora",
    descripcion: "Escoge a Lotus, Tulip, Aster y Flora entre tus 11 jugadores.",
    jugadores: ["/img/aster.webp", "/img/tulip.webp","/img/lotus.webp", "/img/flora.webp"],
    recompensa: { tipo: "escudo", valor: "Desesperdidos" },
    drops: ["/img/aster.webp", "/img/tulip.webp","/img/lotus.webp", "/img/flora.webp", "/img/sterne.webp", ]
  },
          {
      id: "Criaturasdelanoche",
    nombre: "Lobos y Vampiros",
    descripcion: "Escoge a 6 portadores del Gen CSF entre tus 11 jugadores. (Simeon, Zanark, Fei, Garreau, Mehr y Ghiris).",
    jugadores: ["/img/simeon.webp", "/img/zanark.webp","/img/fei.webp", "/img/mehr.webp", "/img/ghiris.webp","/img/garreau.webp",
    ],
    recompensa: { tipo: "escudo", valor: "Criaturasdelanoche" },
    drops: ["/img/vulpeen.webp", "/img/drakul.webp"]
  },
            {
      id: "silice",
    nombre: "El planeta rocoso",
    descripcion: "Escoge a K'aran y Ogar entre tus 11 jugadores.",
    jugadores: ["/img/ogar.webp", "/img/karan.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Silice" },
    drops: ["/img/karan.webp"]
  },
              {
      id: "Naiadi",
    nombre: "El planeta de agua",
    descripcion: "Escoge a Rondula y Plink entre tus 11 jugadores.",
    jugadores: ["/img/rondula.webp", "/img/plink.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Naiadi" },
    drops: ["/img/plink.webp"]
  },
               {
      id: "Magmavis",
    nombre: "El planeta de las aves de fuego",
    descripcion: "Escoge a Aoba y Bala entre tus 11 jugadores.",
    jugadores: ["/img/aoba.webp", "/img/bala.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Magmavis" },
    drops: ["/img/aoba.webp"]
  },
                 {
      id: "Fertilia",
    nombre: "El planeta de los insectos",
    descripcion: "Escoge a Banda, Ruger y Gandares entre tus 11 jugadores.",
    jugadores: ["/img/banda.webp", "/img/ruger.webp", "/img/gandares.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Fertilia" },
    drops: ["/img/banda.webp"]
  },
                   {
      id: "falammedius",
    nombre: "Los Reyes Celestiales",
    descripcion: "Escoge a Ogar, Rondula, Bala, Ruger y Gandares entre tus 11 jugadores.",
    jugadores: ["/img/ogar.webp", "/img/ruger.webp", "/img/gandares.webp", "/img/bala.webp", "/img/rondula.webp"
    ],
    recompensa: { tipo: "escudo", valor: "FalamMedius" },
    drops: ["/img/ogar.webp", "/img/ruger.webp", "/img/gandares.webp", "/img/bala.webp", "/img/rondula.webp"]
  },
                     {
      id: "flotaixar",
    nombre: "La amenaza de la Galaxia",
    descripcion: "Escoge a Phobos, Meteo y Ozrock entre tus 11 jugadores.",
    jugadores: ["/img/phobos.webp", "/img/meteo.webp", "/img/ozrock.webp"
    ],
    recompensa: { tipo: "escudo", valor: "FlotaIxar" },
    drops: ["/img/phobos.webp", "/img/meteo.webp", "/img/ozrock.webp"]
  },
                       {
      id: "eartheleven",
    nombre: "Los salvadores de la Tierra",
    descripcion: "Escoge a 11 miembros del Earth Eleven.",
    jugadores: ["/img/jp.webp", "/img/terry.webp", "/img/foreman.webp", "/img/keenan.webp", "/img/trina.webp", "/img/zippy.webp",
      "/img/riccardo.webp", "/img/buddy.webp", "/img/arion.webp", "/img/cerise.webp", "/img/victor.webp", "/img/zack.webp", "/img/falco.webp"
    ],
    recompensa: { tipo: "escudo", valor: "EarthEleven" },
    drops: ["/img/jp.webp", "/img/terry.webp", "/img/foreman.webp", "/img/keenan.webp", "/img/trina.webp", "/img/zippy.webp",
      "/img/riccardo.webp", "/img/buddy.webp", "/img/arion.webp", "/img/cerise.webp", "/img/victor.webp", "/img/zack.webp", "/img/falco.webp"]
  },
  {
  id: "galaxyeleven",
  recompensa: { tipo: "escudo", valor: "GalaxyEleven" },
  jugadores: [],
  tipo: "secreto"
},
                       {
      id: "bigbang",
    nombre: "Big Bang",
    descripcion: "Forma un 11 con jugadores que hayan jugado un partido final como titulares en un equipo protagonista en Inazuma Eleven GO (ver partidos en el siguiente logro).",
    jugadores: ["/img/samguk.webp", "/img/subaru.webp", "/img/wanchang.webp", "/img/gabi.webp", "/img/aitor.webp", "/img/ade.webp",
      "/img/arion.webp", "/img/eugene.webp", "/img/roma.webp", "/img/michael.webp", "/img/victor.webp", "/img/jp.webp", "/img/riccardo.webp",
      "/img/lucian.webp", "/img/sor.webp", "/img/goldie.webp", "/img/sol.webp", "/img/fei.webp", "/img/zanark.webp", "/img/bailong.webp",
      "/img/terry.webp", "/img/trina.webp", "/img/keenan.webp", "/img/zippy.webp", "/img/foreman.webp", "/img/cerise.webp", "/img/buddy.webp","/img/falco.webp",
    ],
    recompensa: { tipo: "escudo", valor: "BigBang" },
    drops: ["/img/circulus.webp",]
  },
                         {
      id: "supernova",
    nombre: "Supernova",
    descripcion: "Forma un 11 con jugadores titulares de los equipos antagonistas finales de Inazuma Eleven GO (Dragon Link, Zero, Ragnah, Desesperdidos y Flota Ixar).",
    jugadores: ["/img/quentin.webp", "/img/quintet.webp", "/img/pentona.webp", "/img/tezcat.webp", "/img/bailong.webp", "/img/lumina.webp",
      "/img/obscura.webp", "/img/yang.webp", "/img/beamer.webp", "/img/whittaker.webp", "/img/crowe.webp", "/img/spectrum.webp", "/img/kohlt.webp",
      "/img/hamstah.webp", "/img/felis.webp", "/img/mehr.webp", "/img/ghiris.webp", "/img/simeon.webp", "/img/lotus.webp", "/img/tulip.webp",
      "/img/aster.webp", "/img/phobos.webp", "/img/meteo.webp", "/img/ozrock.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Supernova" },
    drops: ["/img/arculus.webp"]
  },
                           {
      id: "raimoninakuni",
    nombre: "El Raimon de Isla Remota",
    descripcion: "Forma un 11 con jugadores del Instituto Isla Remota.",
    jugadores: ["/img/sandra.webp", "/img/kiko.webp", "/img/trevor.webp", "/img/golem.webp", "/img/nino.webp", "/img/maxime.webp",
      "/img/valentin.webp", "/img/cesar.webp", "/img/sonny.webp", "/img/adriano.webp", "/img/basile.webp"
    ],
    recompensa: { tipo: "escudo", valor: "RaimonInakuni" },
    drops: ["/img/sandra.webp", "/img/kiko.webp", "/img/trevor.webp", "/img/golem.webp", "/img/nino.webp", "/img/maxime.webp",
      "/img/valentin.webp", "/img/cesar.webp", "/img/sonny.webp", "/img/adriano.webp", "/img/basile.webp"]
  },
                             {
      id: "bastion",
    nombre: "¡El Muro!",
    descripcion: "Escoge a Jack Wallside y Cliff Parker entre tus 11 jugadores.",
    jugadores: ["/img/jack.webp", "/img/golem.webp"    ],
    recompensa: { tipo: "escudo", valor: "Bastion" },
  },
                             {
      id: "polaris",
    nombre: "La Polaris de Elliot Ember",
    descripcion: "Escoge a Mickey Way, Acker Reese, Jude Sharp, Eddy O'Ryan y Elliot Ember entre tus 11 jugadores.",
    jugadores: ["/img/way.webp", "/img/acker.webp", "/img/jude.webp", "/img/elliot.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Polaris" },
    drops: ["/img/way.webp", "/img/acker.webp","/img/eddy.webp", "/img/elliot.webp", "/img/jude.webp"]
  },
                               {
      id: "zeusares",
    nombre: "Los Dioses del Olimpo",
    descripcion: "Escoge a Byron Love y Perseus entre tus 11 jugadores.",
    jugadores: ["/img/byron.webp", "/img/perseus.webp"
    ],
    recompensa: { tipo: "escudo", valor: "ZeusAres" },
    drops: ["/img/ares.webp","/img/apollo.webp","/img/dionysus.webp","/img/artemis.webp", "/img/hermes.webp",
      "/img/athena.webp","/img/byron.webp","/img/demeter.webp","/img/perseus.webp"]
  },
                                 {
      id: "alpinoares",
    nombre: "El Alpino de Kevin y los Froste",
    descripcion: "Escoge a Kevin Dragonfly, Aiden Froste y Bunny Cottontail entre tus 11 jugadores.",
    jugadores: ["/img/kevin.webp", "/img/aiden.webp", "/img/bunny.webp"
    ],
    recompensa: { tipo: "escudo", valor: "AlpinoAres" },
    drops: ["/img/aiden.webp", "/img/bunny.webp","/img/ropes.webp", "/img/downtown.webp","/img/shawn.webp", "/img/kevin.webp"]
  },
                                 {
      id: "academiaalia",
    nombre: "La Academia Alia de Xavier y Foster",
    descripcion: "Escoge a Dave Quagmire, Jordan Greenway, Xavier Foster y Xavier Schiller entre tus 11 jugadores.",
    jugadores: ["/img/dvalin.webp", "/img/jordan.webp", "/img/xavier.webp", "/img/schiller.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Alia" },
    drops: ["/img/dvalin.webp","/img/ganymede.webp","/img/baller.webp","/img/clear.webp","/img/jordan.webp",
      "/img/bomber.webp","/img/bellatrix.webp","/img/neppten.webp","/img/torch.webp","/img/gazelle.webp",
    "/img/xavier.webp","/img/schiller.webp","/img/metron.webp","/img/zell.webp",]
  
  },
    {
      id: "ribera",
    nombre: "El humilde Instituto Ribera",
    descripcion: "Escoge a Mark Evans, Billy Miller y Kia Tanner entre tus 11 jugadores.",
    jugadores: ["/img/mark.webp", "/img/billy.webp", "/img/kia.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Ribera" },
    drops: ["/img/billy.webp","/img/kia.webp"]
  },
    {
      id: "plenilunio",
    nombre: "Un 11 de Inazuma Eleven Ares",
    descripcion: "Escoge a 11 personajes originales de Inazuma Eleven Ares",
    jugadores: ["/img/sandra.webp", "/img/kiko.webp", "/img/trevor.webp", "/img/golem.webp", "/img/nino.webp", "/img/maxime.webp",
      "/img/valentin.webp", "/img/cesar.webp", "/img/sonny.webp","/img/eddy.webp",  "/img/adriano.webp", "/img/basile.webp", "/img/way.webp", "/img/acker.webp"
      , "/img/elliot.webp", "/img/perseus.webp", "/img/aiden.webp", "/img/bunny.webp", "/img/schiller.webp", "/img/billy.webp", "/img/kia.webp",
      "/img/duske.webp","/img/heath.webp"
    ],
    recompensa: { tipo: "escudo", valor: "Plenilunio" },
    drops: ["/img/duske.webp","/img/heath.webp"]
  },
      {
      id: "tropaacrobatica",
    nombre: "La Selección de China",
    descripcion: "Escoge a Ying Zhou y Li Hao entre tus 11 jugadores.",
    jugadores: ["/img/zhou.webp", "/img/lihao.webp"
    ],
    recompensa: { tipo: "escudo", valor: "TropaAcrobatica" },
    drops: ["/img/zhou.webp","/img/lihao.webp"]
  },
        {
      id: "invencibles",
    nombre: "Los Gigantes Invencibles",
    descripcion: "Escoge a Alonso Fibiano, Reinaldo Baraja, Emerico Lorca, Clario Orvan y Bergamo Regult entre tus 11 jugadores.",
    jugadores: ["/img/alonso.webp", "/img/bergamo.webp", "/img/clario.webp", "/img/baraja.webp", "/img/emerico.webp"
    ],
    recompensa: { tipo: "escudo", valor: "LosInvencibles" },
    drops: ["/img/alonso.webp", "/img/bergamo.webp", "/img/clario.webp","/img/baraja.webp", "/img/emerico.webp" ]
  },
          {
      id: "aceinvaders",
    nombre: "Los invasores de Estados Unidos",
    descripcion: "Escoge a Bigman y Cobra entre tus 11 jugadores.",
    jugadores: ["/img/bigman.webp", "/img/cobra.webp"
    ],
    recompensa: { tipo: "escudo", valor: "AceInvaders" },
    drops: ["/img/bigman.webp", "/img/cobra.webp"
    ]
  },
            {
      id: "chispasperfectas",
    nombre: "Las Chispas Perfectas",
    descripcion: "Escoge a Malik Kuabel, Lus Kasim y Froy Girikanan entre tus 11 jugadores.",
    jugadores: ["/img/malik.webp", "/img/lus.webp", "/img/froy.webp"
    ],
    recompensa: { tipo: "escudo", valor: "ChispasPerfectas" },
    drops: ["/img/malik.webp", "/img/lus.webp", "/img/froy.webp"]
  },
              {
      id: "inazumajaponorion",
    nombre: "El Inazuma Japón de Orion",
    descripcion: "Escoge a jugadores del Inazuma Japon de Orión entre tus 11 jugadores.",
    jugadores: ["/img/mark.webp", "/img/caleb.webp", "/img/billy.webp","/img/shawn.webp", "/img/jude.webp", "/img/nathan.webp",
      "/img/valentin.webp", "/img/sonny.webp", "/img/schiller.webp","/img/axel.webp", "/img/elliot.webp", "/img/adriano.webp",
      "/img/hikaru.webp", "/img/heath.webp", "/img/xavier.webp", "/img/byron.webp", "/img/golem.webp", "/img/trevor.webp",
      "/img/dvalin.webp", "/img/duske.webp", "/img/basile.webp","/img/aiden.webp", "/img/sandra.webp", "/img/acker.webp"
    ],
    recompensa: { tipo: "escudo", valor: "InazumaJaponOrion" },
    drops: ["/img/billy.webp","/img/valentin.webp", "/img/sonny.webp", "/img/schiller.webp","/img/elliot.webp", "/img/adriano.webp",
      "/img/hikaru.webp", "/img/heath.webp","/img/golem.webp", "/img/trevor.webp",
       "/img/duske.webp", "/img/basile.webp","/img/aiden.webp", "/img/sandra.webp", "/img/acker.webp"]
  },
                {
      id: "flechasdeartemisa",
    nombre: "El Equipo Yi",
    descripcion: "Escoge a integrantes de la Flecha de Artemisa tus 11 jugadores.",
    jugadores: ["/img/mark.webp", "/img/lus.webp", "/img/lihao.webp","/img/caleb.webp", "/img/jude.webp", "/img/nathan.webp",
      "/img/erik.webp", "/img/sonny.webp", "/img/froy.webp","/img/axel.webp", "/img/elliot.webp", "/img/petronio.webp",
      "/img/hikaru.webp", "/img/heath.webp", "/img/clario.webp", "/img/byron.webp", "/img/arthur.webp", ],
    recompensa: { tipo: "escudo", valor: "FlechadeArtemisa" },
    drops: ["/img/lus.webp", "/img/lihao.webp", "/img/sonny.webp", "/img/froy.webp","/img/elliot.webp", "/img/petronio.webp",
      "/img/hikaru.webp", "/img/heath.webp", "/img/clario.webp",  "/img/arthur.webp",]
  },
                  {
      id: "sombradeorion",
    nombre: "Los villanos de Orion",
    descripcion: "Escoge solo a personajes originales de Inazuma Eleven Orion que no jueguen en Inazuma Japón.",
    jugadores: ["/img/baek.webp", "/img/satan.webp", "/img/andreas.webp", "/img/zhou.webp","/img/onaxon.webp",
     "/img/alonso.webp", "/img/bergamo.webp", "/img/bigman.webp", "/img/cobra.webp", "/img/yurika.webp","/img/baraja.webp", "/img/emerico.webp",
    "/img/lihao.webp",  "/img/clario.webp", "/img/malik.webp","/img/lus.webp","/img/froy.webp","/img/arthur.webp","/img/petronio.webp"],
    recompensa: { tipo: "escudo", valor: "SombradeOrion" },
    drops: ["/img/yurika.webp",]
  },
                  {
      id: "raimonvr",
    nombre: "El Raimon de todos los tiempos",
    descripcion: "Escoge a personajes que hayan jugado en el Raimon en cualquier saga.",
    jugadores: ["/img/hillman.webp", "/img/island.webp", "/img/sweet.webp", "/img/mark.webp","/img/peabody.webp", "/img/jude.webp", "/img/axel.webp", "/img/nathan.webp",
      "/img/shawn.webp", "/img/tod.webp", "/img/max.webp", "/img/jack.webp","/img/kevin.webp", "/img/timmy.webp", "/img/willy.webp", "/img/bobby.webp",
      "/img/steve.webp", "/img/erik.webp", "/img/byron.webp", "/img/sam.webp", 
      "/img/scotty.webp", "/img/hurley.webp", "/img/tori.webp", "/img/jim.webp",
      "/img/darren.webp", "/img/sue.webp", "/img/shadow.webp", "/img/samguk.webp", "/img/jp.webp", "/img/subaru.webp", "/img/aitor.webp", "/img/wanchang.webp", 
      "/img/gabi.webp", "/img/riccardo.webp", "/img/ade.webp", "/img/eugene.webp", "/img/arion.webp", "/img/lucian.webp", 
      "/img/michael.webp", "/img/victor.webp", "/img/roma.webp", "/img/shun.webp", "/img/hugh.webp", "/img/doug.webp", "/img/sandra.webp", "/img/kiko.webp", "/img/trevor.webp", "/img/golem.webp", "/img/nino.webp", "/img/maxime.webp",
      "/img/valentin.webp", "/img/cesar.webp", "/img/sonny.webp", "/img/adriano.webp", "/img/basile.webp", "/img/austin.webp", 
    "/img/sor.webp", "/img/goldie.webp", "/img/sol.webp", "/img/fei.webp", "/img/elliot.webp"],
    recompensa: { tipo: "escudo", valor: "RaimonVR" },
    drops: ["/img/hillman.webp", "/img/island.webp", "/img/sweet.webp", "/img/mark.webp","/img/peabody.webp", "/img/jude.webp", "/img/axel.webp", "/img/nathan.webp",
      "/img/shawn.webp", "/img/tod.webp", "/img/max.webp", "/img/jack.webp","/img/kevin.webp", "/img/timmy.webp", "/img/willy.webp", "/img/bobby.webp",
      "/img/steve.webp", "/img/erik.webp", "/img/byron.webp", "/img/sam.webp", 
      "/img/scotty.webp", "/img/hurley.webp", "/img/tori.webp", "/img/jim.webp",
      "/img/darren.webp", "/img/sue.webp", "/img/shadow.webp", "/img/samguk.webp", "/img/jp.webp", "/img/subaru.webp", "/img/aitor.webp", "/img/wanchang.webp", 
      "/img/gabi.webp", "/img/riccardo.webp", "/img/ade.webp", "/img/eugene.webp", "/img/arion.webp", "/img/lucian.webp", 
      "/img/michael.webp", "/img/victor.webp", "/img/roma.webp", "/img/shun.webp", "/img/hugh.webp", "/img/doug.webp", "/img/sandra.webp", "/img/kiko.webp", "/img/trevor.webp", "/img/golem.webp", "/img/nino.webp", "/img/maxime.webp",
      "/img/valentin.webp", "/img/cesar.webp", "/img/sonny.webp", "/img/adriano.webp", "/img/basile.webp", "/img/austin.webp", "/img/elliot.webp"]
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
  {
   id: "chemaxel",
   nombre: "ChemAxel",
   descripcion: "Escoge a Axel Blaze y Xavier Foster en tu equipo.",
   jugadores: [
     "/img/axel.webp", "/img/xavier.webp"
   ],
   recompensa: { tipo: "escudo", valor: "Chemaxel" }
},
];

function comprobarCartasSecretas(logrosCompletados, cartasDesbloqueadas, setCartasDesbloqueadas) {
  // Ejemplo: si tienes los logros "bienvenida" y "wild" y la carta "/img/axel.webp", desbloquea secret1
  if (
    cartasDesbloqueadas.includes("/img/arion.webp") &&
    cartasDesbloqueadas.includes("/img/tezcat.webp") &&
    !cartasDesbloqueadas.includes("/img/ariontezcat.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/ariontezcat.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
  else if (
    logrosCompletados.includes("RaimonGo") &&
    logrosCompletados.includes("Arions") &&
    !cartasDesbloqueadas.includes("/img/vladimir.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/vladimir.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
  else if (
    cartasDesbloqueadas.includes("/img/victor.webp") &&
    cartasDesbloqueadas.includes("/img/vladimir.webp") &&
    !cartasDesbloqueadas.includes("/img/vladimirvictor.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/vladimirvictor.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
    else if (
    cartasDesbloqueadas.includes("/img/fei.webp") &&
    logrosCompletados.includes("Raimon") &&
    !cartasDesbloqueadas.includes("/img/goldie.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/goldie.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
    else if (
    logrosCompletados.includes("CascadaPerfecta") &&
    logrosCompletados.includes("Raimon") &&
    !cartasDesbloqueadas.includes("/img/sor.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/sor.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
      else if (
    logrosCompletados.includes("CiervoBlanco") &&
    logrosCompletados.includes("Raimon") &&
    !cartasDesbloqueadas.includes("/img/tasuke.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/tasuke.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
      else if (
    cartasDesbloqueadas.includes("/img/mark.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/markadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/markadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
      else if (
    cartasDesbloqueadas.includes("/img/nathan.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/nathanadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/nathanadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
      else if (
    cartasDesbloqueadas.includes("/img/jack.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/jackadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/jackadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
      else if (
    cartasDesbloqueadas.includes("/img/hurley.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/hurleyadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/hurleyadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }  
      else if (
    cartasDesbloqueadas.includes("/img/samford.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/samfordadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/samfordadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }  
      else if (
    cartasDesbloqueadas.includes("/img/shawn.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/shawnadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/shawnadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }  
      else if (
    cartasDesbloqueadas.includes("/img/kevin.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/kevinadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/kevinadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }  
      else if (
    cartasDesbloqueadas.includes("/img/axel.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/axeladulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/axeladulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }  
      else if (
    cartasDesbloqueadas.includes("/img/xavier.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/xavieradulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/xavieradulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }  
      else if (
    cartasDesbloqueadas.includes("/img/jude.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/judeadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/judeadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }  
      else if (
    cartasDesbloqueadas.includes("/img/caleb.webp") &&
    logrosCompletados.includes("InazumaJaponLegendario") &&
    !cartasDesbloqueadas.includes("/img/calebadulto.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/calebadulto.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
        else if (
    cartasDesbloqueadas.includes("/img/flora.webp") &&
    logrosCompletados.includes("Desesperdidos") &&
    !cartasDesbloqueadas.includes("/img/floramm.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/floramm.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
          else if (
    logrosCompletados.includes("raimon11") &&
    logrosCompletados.includes("ogro") &&
    !cartasDesbloqueadas.includes("/img/canon.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/canon.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }
            else if (
    cartasDesbloqueadas.includes("/img/shawn.webp") &&
    cartasDesbloqueadas.includes("/img/aiden.webp") &&
    !cartasDesbloqueadas.includes("/img/shawnaiden.webp")
  ) {
    setCartasDesbloqueadas(prev => [...prev, "/img/shawnaiden.webp"]);
    alert("¡Has desbloqueado una carta secreta!");
  }



  // Añade más condiciones para otras cartas secretas
}

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
      logro.auto === true && // <--- solo los auto
      !logrosCompletados.includes(logro.id)
    ) {
      setLogrosCompletados(prev => {
        if (prev.includes(logro.id)) return prev;
        return [...prev, logro.id];
      });
      if (
        logro.recompensa.tipo === "escudo" &&
        !logro.recompensa.soloVisual
      ) {
        setPerfil(p => ({
          ...p,
          escudosDisponibles: [...p.escudosDisponibles, logro.recompensa.valor]
        }));
        alert(`¡Logro completado: ${logro.nombre}! Has conseguido el escudo de ${logro.recompensa.valor}`);
      }
    }
  });
}

function comprobarLegendario(logrosCompletados, setLogrosCompletados, setPerfil) {
  if (
    logrosCompletados.includes("NuevoInazumaJapon") &&
    logrosCompletados.includes("inazumajapon") &&
    !logrosCompletados.includes("InazumaJaponLegendario")
  ) {
    setLogrosCompletados(prev => [...prev, "InazumaJaponLegendario"]);
    setPerfil(p => ({
      ...p,
      escudosDisponibles: [...new Set([...(p.escudosDisponibles || []), "InazumaJaponLegendario"])]
    }));
    alert("¡Has desbloqueado el escudo Inazuma Japón Legendario!");
  }
}


// ...existing code...

function completarLogroManual(logroId, logrosCompletados, setLogrosCompletados, setPerfil, cartasDesbloqueadas, setCartasDesbloqueadas) {
  // Busca el logro ignorando mayúsculas/minúsculas
  const logro = LOGROS.find(l => l.id.toLowerCase() === logroId.toLowerCase());
  if (!logro) return;

if (!logrosCompletados.includes(logro.id)) {
  setLogrosCompletados(prev => {
    const nuevos = [...prev, logro.id];
    comprobarLegendario(nuevos, setLogrosCompletados, setPerfil);
    return nuevos;
  });
    if (
      logro.recompensa.tipo === "escudo" &&
      !logro.recompensa.soloVisual
    ) {
      setPerfil(p => ({
        ...p,
        escudosDisponibles: [...p.escudosDisponibles, logro.recompensa.valor]
      }));
      alert(`¡Logro completado: ${logro.nombre}! Has conseguido el escudo de ${logro.recompensa.valor}`);
    }
    const carta = darDrop(logro, cartasDesbloqueadas, setCartasDesbloqueadas);
    if (carta) {
      alert(`¡Has conseguido la carta: ${carta.replace("/img/", "").replace(".webp", "").toUpperCase()}!`);;
    }
  } else if (logro.drops) {
    const posibles = logro.drops.filter(c => !cartasDesbloqueadas.includes(c));
    if (posibles.length > 0) {
      const carta = darDrop(logro, cartasDesbloqueadas, setCartasDesbloqueadas);
      if (carta) {
        alert(`¡Has conseguido la carta: ${carta.replace("/img/", "").replace(".webp", "").toUpperCase()}!`);;
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
  setLogrosCompletados(prev => {
    const nuevos = [...prev, logro.id];
    comprobarLegendario(nuevos, setLogrosCompletados, setPerfil);
    return nuevos;
  });
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
          alert(`¡Has conseguido la carta: ${carta.replace("/img/", "").replace(".webp", "").toUpperCase()}!`);;
        }
      } else if (logro.drops) {
        // Si ya tienes el escudo pero quedan drops, sigue dando carta
        const posibles = logro.drops.filter(c => !cartasDesbloqueadas.includes(c));
        if (posibles.length > 0) {
          const carta = darDrop(logro, cartasDesbloqueadas, setCartasDesbloqueadas);
          if (carta) {
            alert(`¡Has conseguido la carta: ${carta.replace("/img/", "").replace(".webp", "").toUpperCase()}!`);;
          }
        }
      }
    }
  });
}

function PerfilModal({ perfil, setPerfil, onClose, onAlineacion, exportarProgreso, importarProgreso, logrosCompletados }) {
  // Escudos en orden de LOGROS y sin duplicados
  const escudosOrdenados = LOGROS
    .map(l => l.recompensa && l.recompensa.tipo === "escudo" ? l.recompensa.valor : null)
    .filter(e => e && perfil.escudosDisponibles.includes(e));
  const escudosUnicos = [...new Set(escudosOrdenados)];

  // Divide en filas de 20
  const filasEscudos = [];
  for (let i = 0; i < escudosUnicos.length; i += 20) {
    filasEscudos.push(escudosUnicos.slice(i, i + 20));
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

        {/* Botones alineados horizontalmente */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            onClick={onClose}
            style={{
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
              padding: "8px 18px",
              borderRadius: "6px",
              cursor: "pointer",
              background: "#ffb300",
              color: "#222",
              fontWeight: "bold"
            }}
          >
            Exportar progreso
          </button>
          <button
            onClick={importarProgreso}
            style={{
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
    </div>
  );
}

function AlineacionModal({ perfil, onClose, jugadoresDesbloqueados }) {
  const FORMACIONES = {
    "4-3-3": {
      defensas: 4,
      medios: 3,
      delanteros: 3
    },
    "3-4-3": {
      defensas: 3,
      medios: 4,
      delanteros: 3
    },
    "4-4-2": {
      defensas: 4,
      medios: 4,
      delanteros: 2
    },
    "5-3-2": {
      defensas: 5,
      medios: 3,
      delanteros: 2
    }
  };

  const [formacion, setFormacion] = useState(() => {
  return localStorage.getItem("formacion") || "4-3-3";
});
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

const handleFormacionChange = (nuevaFormacion) => {
  // Calcula las nuevas posiciones
  const nuevaDef = Array.from({ length: FORMACIONES[nuevaFormacion].defensas }, (_, i) => `defensa${i + 1}`);
  const nuevaMed = Array.from({ length: FORMACIONES[nuevaFormacion].medios }, (_, i) => `medio${i + 1}`);
  const nuevaDel = Array.from({ length: FORMACIONES[nuevaFormacion].delanteros }, (_, i) => `delantero${i + 1}`);

  // Recoge las cartas antiguas por tipo, sin repetir
  const defensas = [];
  const usados = new Set();
  ["defensa1","defensa2","defensa3","defensa4","defensa5"].forEach(pos => {
    if (alineacion[pos] && !usados.has(alineacion[pos])) {
      defensas.push(alineacion[pos]);
      usados.add(alineacion[pos]);
    }
  });
  const medios = [];
  ["medio1","medio2","medio3","medio4"].forEach(pos => {
    if (alineacion[pos] && !usados.has(alineacion[pos])) {
      medios.push(alineacion[pos]);
      usados.add(alineacion[pos]);
    }
  });
  const delanteros = [];
  ["delantero1","delantero2","delantero3"].forEach(pos => {
    if (alineacion[pos] && !usados.has(alineacion[pos])) {
      delanteros.push(alineacion[pos]);
      usados.add(alineacion[pos]);
    }
  });

  // Recoloca solo en las nuevas posiciones, sin repetir
  const nuevoAlineacion = { portero: alineacion.portero };
  nuevaDef.forEach((pos, i) => { if (defensas[i]) nuevoAlineacion[pos] = defensas[i]; });
  nuevaMed.forEach((pos, i) => { if (medios[i]) nuevoAlineacion[pos] = medios[i]; });
  nuevaDel.forEach((pos, i) => { if (delanteros[i]) nuevoAlineacion[pos] = delanteros[i]; });

  setFormacion(nuevaFormacion);
  localStorage.setItem("formacion", nuevaFormacion);
  setAlineacion(nuevoAlineacion);
};

const handleGuardar = () => {
  localStorage.setItem("alineacion", JSON.stringify(alineacion));
  localStorage.setItem("formacion", formacion);
  onClose();
};

  // Genera los nombres de las posiciones según la formación
  const posicionesDef = Array.from({ length: FORMACIONES[formacion].defensas }, (_, i) => `defensa${i + 1}`);
  const posicionesMed = Array.from({ length: FORMACIONES[formacion].medios }, (_, i) => `medio${i + 1}`);
  const posicionesDel = Array.from({ length: FORMACIONES[formacion].delanteros }, (_, i) => `delantero${i + 1}`);

  // Dentro de AlineacionModal, antes del return:
const handleRightClick = (e, pos) => {
  e.preventDefault();
  setAlineacion(a => {
    const copia = { ...a };
    delete copia[pos];
    return copia;
  });
};

const todasDefensas = Array.from(new Set([
  ...(posiciones.defensa1 || []),
  ...(posiciones.defensa2 || []),
  ...(posiciones.defensa3 || []),
  ...(posiciones.defensa4 || []),
  ...(posiciones.defensa5 || [])
]));
const todasMedios = Array.from(new Set([
  ...(posiciones.medio1 || []),
  ...(posiciones.medio2 || []),
  ...(posiciones.medio3 || []),
  ...(posiciones.medio4 || [])
]));
const todasDelanteros = Array.from(new Set([
  ...(posiciones.delantero1 || []),
  ...(posiciones.delantero2 || []),
  ...(posiciones.delantero3 || [])
]));

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
          {/* Selector de formación */}
          <div style={{ marginBottom: "18px", textAlign: "center" }}>
            <label style={{ fontWeight: 600, fontSize: "1.1rem", marginRight: "10px" }}>Formación:</label>
            <select
              value={formacion}
              onChange={e => handleFormacionChange(e.target.value)}
              style={{
                padding: "6px",
                borderRadius: "6px",
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontWeight: 600,
                fontSize: "1rem"
              }}
            >
              {Object.keys(FORMACIONES).map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
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
  <optgroup label="PORTEROS">
    {cartasDisponibles
      .filter(carta => posiciones.portero.includes(carta) && (!cartasUsadas.includes(carta) || alineacion.portero === carta))
      .map(carta => (
        <option key={carta} value={carta}>
          {carta.replace("/img/", "").replace(".webp", "").toUpperCase()}
        </option>
      ))}
  </optgroup>
  <optgroup label="OTROS">
    {cartasDisponibles
      .filter(carta => !posiciones.portero.includes(carta) && (!cartasUsadas.includes(carta) || alineacion.portero === carta))
      .map(carta => (
        <option key={carta} value={carta}>
          {carta.replace("/img/", "").replace(".webp", "").toUpperCase()}
        </option>
      ))}
  </optgroup>
</select>
              )}
            </div>
          </div>
          {/* Defensas */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "25px" }}>
            {posicionesDef.map(pos => (
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
  <optgroup label="DEFENSAS">
    {cartasDisponibles
      .filter(carta => todasDefensas.includes(carta) && (!cartasUsadas.includes(carta) || alineacion[pos] === carta))
      .map(carta => (
        <option key={carta} value={carta}>
          {carta.replace("/img/", "").replace(".webp", "").toUpperCase()}
        </option>
      ))}
  </optgroup>
  <optgroup label="OTROS">
    {cartasDisponibles
      .filter(carta => !todasDefensas.includes(carta) && (!cartasUsadas.includes(carta) || alineacion[pos] === carta))
      .map(carta => (
        <option key={carta} value={carta}>
          {carta.replace("/img/", "").replace(".webp", "").toUpperCase()}
        </option>
      ))}
  </optgroup>
</select>
                )}
              </div>
            ))}
          </div>
          {/* Medios */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "25px" }}>
            {posicionesMed.map(pos => (
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
  <optgroup label="MEDIOS">
    {cartasDisponibles
      .filter(carta => todasMedios.includes(carta) && (!cartasUsadas.includes(carta) || alineacion[pos] === carta))
      .map(carta => (
        <option key={carta} value={carta}>
          {carta.replace("/img/", "").replace(".webp", "").toUpperCase()}
        </option>
      ))}
  </optgroup>
  <optgroup label="OTROS">
    {cartasDisponibles
      .filter(carta => !todasMedios.includes(carta) && (!cartasUsadas.includes(carta) || alineacion[pos] === carta))
      .map(carta => (
        <option key={carta} value={carta}>
          {carta.replace("/img/", "").replace(".webp", "").toUpperCase()}
        </option>
      ))}
  </optgroup>
</select>
                )}
              </div>
            ))}
          </div>
          {/* Delanteros */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
            {posicionesDel.map(pos => (
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
                  // ...dentro de AlineacionModal, en el render de DELANTEROS...
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
  <optgroup label="DELANTEROS">
    {cartasDisponibles
      .filter(carta => todasDelanteros.includes(carta) && (!cartasUsadas.includes(carta) || alineacion[pos] === carta))
      .map(carta => (
        <option key={carta} value={carta}>
          {carta.replace("/img/", "").replace(".webp", "").toUpperCase()}
        </option>
      ))}
  </optgroup>
  <optgroup label="OTROS">
    {cartasDisponibles
      .filter(carta => !todasDelanteros.includes(carta) && (!cartasUsadas.includes(carta) || alineacion[pos] === carta))
      .map(carta => (
        <option key={carta} value={carta}>
          {carta.replace("/img/", "").replace(".webp", "").toUpperCase()}
        </option>
      ))}
  </optgroup>
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
      {LOGROS
        .filter(logro => logro.tipo !== "secreto") // <-- OCULTA los secretos
        .map(logro => (
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


const getRandomCard = (available, used, ristras = [0]) => {
  // Asegura que ristras siempre es un array
  const ristrasArray = Array.isArray(ristras) ? ristras : [ristras];
  const permitidas = available.filter(img =>
    ristrasArray.some(idx => CARTAS_POR_RISTRA[idx].includes(img))
  );
  const choices = permitidas.filter(img => !used.includes(img));
  return choices[Math.floor(Math.random() * choices.length)];
};

const IMAGENES_RISTRAS = [
  "/img/ieog.webp",   // Imagen para la ristra 1
  "/img/iego.webp",  // Imagen para la ristra 2
  "/img/ieares.webp"      // Imagen para la ristra 3
];

export default function Home() {
const [seleccionadas, setSeleccionadas] = useState([{}, {}, {}]);
const [bloqueadas, setBloqueadas] = useState([[], [], []]);
const [ristraActiva, setRistraActiva] = useState(0);
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
const [showExport, setShowExport] = useState(false);
const [exportCode, setExportCode] = useState("");
const [showImport, setShowImport] = useState(false);
const [importCode, setImportCode] = useState("");
const [secretCode, setSecretCode] = useState("");
const [keySequence, setKeySequence] = useState([]);
const [showColeccion, setShowColeccion] = useState(false);
const [customBg, setCustomBg] = useState("");
const [ristrasSeleccionadas, setRistrasSeleccionadas] = useState([0]);
  typeof window !== "undefined"
    ? localStorage.getItem("customBg") || ""
    : ""



useEffect(() => {
  const SECRET = "akihirocabron";
  const handleKeyDown = (e) => {
    const key = e.key.toLowerCase();
    // Solo letras
    if (!/^[a-z]$/.test(key)) return;
    setKeySequence(seq => {
      const newSeq = [...seq, key].slice(-SECRET.length); // Solo guarda las últimas N teclas
      if (newSeq.join("") === SECRET) {
        e.preventDefault();
        e.stopPropagation();
        setShowSecretBar(true);
        return [];
      }
      return newSeq;
    });
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);

// Después de cargar perfil en useEffect:
useEffect(() => {
  if (typeof window !== "undefined") {
    const savedPerfil = localStorage.getItem("perfil");
    if (savedPerfil) {
      const perfilCargado = JSON.parse(savedPerfil);
      perfilCargado.escudosDisponibles = [...new Set(perfilCargado.escudosDisponibles)];
      setPerfil(perfilCargado);
    }
  }
}, []);

useEffect(() => {
  if (!datosCargados) return;
  comprobarCartasSecretas(logrosCompletados, cartasDesbloqueadas, setCartasDesbloqueadas);
}, [datosCargados, logrosCompletados, cartasDesbloqueadas]);

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
  // Elimina duplicados antes de guardar
  const perfilSinDuplicados = {
    ...perfil,
    escudosDisponibles: [...new Set(perfil.escudosDisponibles)]
  };
  localStorage.setItem("perfil", JSON.stringify(perfilSinDuplicados));
}, [perfil, datosCargados]);



useEffect(() => {
  const fondo = localStorage.getItem("customBg") || "";
  setCustomBg(fondo);
}, []);

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
}, [datosCargados, logrosCompletados]);


useEffect(() => {
  inicializarTodasLasRistras();
}, []);

useEffect(() => {
  if (datosCargados) {
    for (let i = 0; i < 3; i++) {
      comprobarLogros(
        seleccionadas[i],
        logrosCompletados,
        setLogrosCompletados,
        setPerfil,
        bloqueadas[i],
        cartasDesbloqueadas,
        setCartasDesbloqueadas
      );
    }
  }
}, [seleccionadas, bloqueadas, datosCargados]);

function inicializarTodasLasRistras() {
  const nuevasSeleccionadas = [];
  const nuevasBloqueadas = [];
  for (let i = 0; i < 3; i++) {
    const usadas = [];
    const nuevas = {};
    Object.keys(posiciones).forEach(pos => {
      nuevas[pos] = getRandomCard(posiciones[pos], usadas, i); // <--- usa "i" aquí
      usadas.push(nuevas[pos]);
    });
    nuevasSeleccionadas.push(nuevas);
    nuevasBloqueadas.push([]);
  }
  setSeleccionadas(nuevasSeleccionadas);
  setBloqueadas(nuevasBloqueadas);
}

function inicializarCartas() {
  const usadas = [];
  const nuevas = {};
  Object.keys(posiciones).forEach(pos => {
    nuevas[pos] = getRandomCard(posiciones[pos], usadas, ristrasSeleccionadas);
    usadas.push(nuevas[pos]);
  });
  const nuevasSeleccionadas = [...seleccionadas];
  nuevasSeleccionadas[ristraActiva] = nuevas;
  setSeleccionadas(nuevasSeleccionadas);

  const nuevasBloqueadas = [...bloqueadas];
  nuevasBloqueadas[ristraActiva] = [];
  setBloqueadas(nuevasBloqueadas);
}

function exportarProgreso() {
  const data = {
    perfil,
    logrosCompletados,
    cartasDesbloqueadas,
    contadorCartas,
  };
  const code = encodeURIComponent(JSON.stringify(data));
  setExportCode(code);
  setShowExport(true);
}

function importarProgreso() {
  setShowImport(true);
}

function confirmarImportacion() {
  try {
    const data = JSON.parse(decodeURIComponent(importCode));
    if (data.perfil) setPerfil(data.perfil);
    if (data.logrosCompletados) setLogrosCompletados(data.logrosCompletados);
    if (data.cartasDesbloqueadas) setCartasDesbloqueadas(data.cartasDesbloqueadas);
    if (data.contadorCartas) setContadorCartas(data.contadorCartas);
    setTimeout(() => {
      sincronizarLogrosYEscudos && sincronizarLogrosYEscudos();
    }, 100);
    alert("¡Progreso importado correctamente!");
    setShowImport(false);
    setImportCode("");
  } catch (e) {
    alert("Código no válido.");
  }
}

function canjearCodigo() {
  try {
    const codigosUsados = JSON.parse(localStorage.getItem("codigosUsados") || "[]");
    const code = secretCode.trim().toLowerCase();

    // Códigos de fondo especial: NO los bloquees nunca
    const fondosEspeciales = {
      kalise: "https://i.postimg.cc/TYVb8sQg/kalise.jpg",
      abgo: "https://i.postimg.cc/cLpgBNMn/abgo.jpg",
      ascero: "https://i.postimg.cc/RZBqWTM7/ascero.jpg",
      markismo: "https://i.postimg.cc/xTHcjZSj/markismo.jpg",
      ruper: "https://i.postimg.cc/Y93v7Lc6/ruper.jpg",
      sadiq: "https://i.postimg.cc/CxBn8KD0/sadiq.jpg",
      urko: "https://i.postimg.cc/D0w8wfFt/urko.jpg",
      beacon: "https://i.postimg.cc/Bn6kcrQ4/beacon.jpg",
      picsas: "https://i.postimg.cc/FRxMv3fS/picsas.jpg",
      foster: "https://i.postimg.cc/mk20gkM5/foster.jpg",
      canario:"https://i.postimg.cc/66Yk1VxJ/canario.jpg"
    };

    if (code === "borrartodo") {
      if (window.confirm("¿Seguro que quieres borrar TODO tu progreso? Esta acción no se puede deshacer.")) {
        localStorage.clear();
        window.location.reload();
      }
      setSecretCode("");
      setShowSecretBar(false);
      return;
    }

    else if (code in fondosEspeciales) {
      setCustomBg(fondosEspeciales[code]);
      localStorage.setItem("customBg", fondosEspeciales[code]);
      alert(`¡Fondo especial ${code.charAt(0).toUpperCase() + code.slice(1)} activado!`);
      // No añadas a codigosUsados
    }
    else if (code === "cancelarfondo") {
      setCustomBg("");
      localStorage.removeItem("customBg");
      alert("¡Fondo especial desactivado! Has vuelto al fondo por defecto.");
      // No añadas a codigosUsados
    }
    // Códigos de recompensa única: sí bloquea
    else if (codigosUsados.includes(code)) {
      alert("¡Este código ya ha sido canjeado!");
      setSecretCode("");
      setShowSecretBar(false);
      return;
    }
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
    } else {
      alert("Código no válido.");
    }
  } catch (e) {
    alert("Error al canjear el código.");
  }
  setSecretCode("");
  setShowSecretBar(false);
}


  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("perfil");
      if (saved) setPerfil(JSON.parse(saved));
    }
  }, []);

function handleRistraClick(i, e) {
  if (e.shiftKey) {
    setRistrasSeleccionadas(prev => {
      if (prev.includes(i)) {
        return prev.length > 1 ? prev.filter(x => x !== i) : prev;
      } else {
        return [...prev, i];
      }
    });
  } else {
    setRistrasSeleccionadas([i]);
    setRistraActiva(i); // <-- Añade esto para cambiar la ristra activa
    // Regenera la alineación SOLO con esa ristra
    const usadas = [];
    const nuevas = {};
    Object.keys(posiciones).forEach(pos => {
      nuevas[pos] = getRandomCard(posiciones[pos], usadas, i);
      usadas.push(nuevas[pos]);
    });
    const nuevasSeleccionadas = [...seleccionadas];
    nuevasSeleccionadas[i] = nuevas;
    setSeleccionadas(nuevasSeleccionadas);

    const nuevasBloqueadas = [...bloqueadas];
    nuevasBloqueadas[i] = [];
    setBloqueadas(nuevasBloqueadas);
  }
}

useEffect(() => {
  if (!datosCargados) return;
  if (ristrasSeleccionadas.length === 1) return; // Solo combina si hay varias
  const usadas = [];
  const nuevas = {};
  Object.keys(posiciones).forEach(pos => {
    nuevas[pos] = getRandomCard(posiciones[pos], usadas, ristrasSeleccionadas);
    usadas.push(nuevas[pos]);
  });
  const nuevasSeleccionadas = [...seleccionadas];
  nuevasSeleccionadas[ristraActiva] = nuevas;
  setSeleccionadas(nuevasSeleccionadas);

  const nuevasBloqueadas = [...bloqueadas];
  nuevasBloqueadas[ristraActiva] = [];
  setBloqueadas(nuevasBloqueadas);
  // eslint-disable-next-line
}, [ristrasSeleccionadas]);

function handleClick(pos) {
  if (bloqueadas[ristraActiva].includes(pos)) return;

  const nuevasBloqueadas = [...bloqueadas];
  nuevasBloqueadas[ristraActiva] = [...nuevasBloqueadas[ristraActiva], pos];
  setBloqueadas(nuevasBloqueadas);

  const usadas = Object.keys(seleccionadas[ristraActiva])
    .filter(k => k === pos || nuevasBloqueadas[ristraActiva].includes(k))
    .map(k => seleccionadas[ristraActiva][k]);

  const nuevas = {};
  Object.keys(posiciones).forEach(p => {
    if (p === pos || nuevasBloqueadas[ristraActiva].includes(p)) {
      nuevas[p] = seleccionadas[ristraActiva][p];
    } else {
      nuevas[p] = getRandomCard(posiciones[p], usadas, ristraActiva);
      usadas.push(nuevas[p]);
    }
  });

  const nuevasSeleccionadas = [...seleccionadas];
  nuevasSeleccionadas[ristraActiva] = nuevas;
  setSeleccionadas(nuevasSeleccionadas);
}

const cartasCombinadas = Array.from(
  new Set(
    ristrasSeleccionadas.flatMap(idx => CARTAS_POR_RISTRA[idx])
  )
);

  // Estilo de imagen manteniendo proporción 1080x1280
const imageStyle = (pos) => ({
  width: "150px",
  aspectRatio: "1080 / 1280",
  objectFit: "cover",
  cursor: bloqueadas[ristraActiva].includes(pos) ? "default" : "pointer",
  borderRadius: 5,
  boxShadow: bloqueadas[ristraActiva].includes(pos) ? "0 0 5px 5px yellow" : "none"
});

return (
  <div style={{
    backgroundImage: `url(${customBg || "https://i.postimg.cc/qRZj8Mcp/campo.jpg"})`,
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

{showColeccion && (
  <div style={{
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.8)",
    zIndex: 3000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "auto"
  }}>
    <div style={{
      background: "#fff",
      borderRadius: "18px",
      margin: "40px 0",
      padding: "30px 30px 20px 30px",
      minWidth: "320px",
      maxWidth: "900px",
      width: "90vw",
      boxShadow: "0 0 40px #0008",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        position: "relative",
        marginBottom: "18px"
      }}>
        <h2 style={{
          fontWeight: "bold",
          flex: 1,
          textAlign: "center",
          margin: 0
        }}>
          COLECCIÓN DE CARTAS
        </h2>
        <span style={{
          fontWeight: "bold",
          fontSize: "1.1em",
          color: "#00bfff",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)"
        }}>
          {cartasDesbloqueadas.length}/{Array.from(new Set([].concat(...CARTAS_POR_RISTRA))).filter(Boolean).length}
        </span>
      </div>

            <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "18px",
        justifyContent: "center",
        marginTop: "10px",
        maxHeight: "70vh",
        overflowY: "auto"
      }}>

{Array.from(new Set([].concat(...CARTAS_POR_RISTRA)))
  .filter(Boolean) // <-- filtra undefined, null y ""
  .map(carta => (
    <div key={carta} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        src={carta}
        alt={carta ? carta.replace("/img/", "").replace(".webp", "") : ""}
        style={{
          width: "90px",
          height: "106px",
          objectFit: "cover",
          borderRadius: "8px",
          filter: cartasDesbloqueadas.includes(carta) ? "none" : "grayscale(1) brightness(0.5)",
          boxShadow: cartasDesbloqueadas.includes(carta) ? "0 0 10px #00bfff" : "0 0 6px #888"
        }}
      />
    </div>
))}
      </div>
      <button
        onClick={() => setShowColeccion(false)}
        style={{
          marginTop: "24px",
          padding: "10px 28px",
          borderRadius: "8px",
          background: "#00bfff",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1.1em",
          cursor: "pointer"
        }}
      >
        CERRAR
      </button>
    </div>
        <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100vw",
      background: "rgba(0,0,0,0.65)",
      color: "#fff",
      textAlign: "center",
      padding: "8px 0",
      fontSize: "1.05em",
      letterSpacing: "0.5px",
      zIndex: 100
    }}>
      Agradecimientos a: <b>Ascero, Kalise, Mancha, Crvis, Markismo, Sergio Ortiz, Sadiq, Foster, Ruper, Abgo, Urko, Picsas, ZonX, Beacon, CanArio, SergioPlay, Neicho y Luxhard</b>.
    </div>
  </div>
)}

<div style={{
  position: "absolute",
  top: 0, left: 0, right: 0,
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 30px",
  zIndex: 10
}}>
  {/* Botones de ristras centrados */}
<div style={{
  display: "flex",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",
  flex: 1
}}>
  {[0, 1, 2].map(i => (
    <button
      key={i}
      onClick={e => handleRistraClick(i, e)}
      style={{
        padding: 0,
        borderRadius: "8px",
        background: ristrasSeleccionadas.includes(i) ? "#00bfff" : "#eee",
        border: ristrasSeleccionadas.includes(i) ? "2px solid #0077aa" : "1px solid #ccc",
        cursor: "pointer",
        width: "110px",
        height: "54px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: ristrasSeleccionadas.includes(i) ? "0 0 10px #00bfff88" : "none"
      }}
    >
      <img
        src={IMAGENES_RISTRAS[i]}
        alt={`Ristra ${i + 1}`}
        style={{
          width: "90px",
          height: "40px",
          borderRadius: "5px",
          border: ristrasSeleccionadas.includes(i) ? "2px solid #fff" : "2px solid transparent",
          boxShadow: ristrasSeleccionadas.includes(i) ? "0 0 8px #00bfff" : "none",
          objectFit: "cover"
        }}
      />
    </button>
  ))}
</div>
  {/* Perfil a la derecha */}
  <div style={{
    display: "flex",
    alignItems: "center",
    marginLeft: "auto"
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
<button
  onClick={() => setShowColeccion(true)}
  style={{
    padding: "8px 20px",
    fontSize: "18px",
    borderRadius: "8px",
    background: "#00bfff",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#fff",
    marginLeft: "20px",
    marginTop: "0px",
    boxShadow: "0 0 8px #00000055"
  }}
>
  COLECCIÓN
</button>
  </div>
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
  logrosCompletados={logrosCompletados}
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          margin: 0,
          padding: 0,
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
              src={seleccionadas[ristraActiva].portero}
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
                src={seleccionadas[ristraActiva][pos]}
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
                  src={seleccionadas[ristraActiva][pos]}
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
                  src={seleccionadas[ristraActiva][pos]}
                  alt={pos}
                  onClick={() => handleClick(pos)}
                  style={imageStyle(pos)}
                />
              ))}
            </div>

    {showExport && (
  <div style={{
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.7)", zIndex: 4000,
    display: "flex", alignItems: "center", justifyContent: "center"
  }}>
    <div style={{
      background: "#fff", padding: 30, borderRadius: 16, maxWidth: 600, width: "90vw"
    }}>
      <h3>Exporta tu progreso</h3>
      <textarea
        value={exportCode}
        readOnly
        style={{ width: "100%", height: 120, fontSize: 14, fontFamily: "monospace" }}
        onFocus={e => e.target.select()}
      />
      <div style={{ marginTop: 16, textAlign: "right" }}>
        <button onClick={() => setShowExport(false)} style={{ padding: "8px 18px", borderRadius: 8, background: "#00bfff", color: "#fff", fontWeight: "bold" }}>Cerrar</button>
      </div>
    </div>
  </div>
)}

{showImport && (
  <div style={{
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.7)", zIndex: 4000,
    display: "flex", alignItems: "center", justifyContent: "center"
  }}>
    <div style={{
      background: "#fff", padding: 30, borderRadius: 16, maxWidth: 600, width: "90vw"
    }}>
      <h3>Importa tu progreso</h3>
      <textarea
        value={importCode}
        onChange={e => setImportCode(e.target.value)}
        style={{ width: "100%", height: 120, fontSize: 14, fontFamily: "monospace" }}
        placeholder="Pega aquí tu código de progreso"
      />
      <div style={{ marginTop: 16, textAlign: "right" }}>
        <button onClick={confirmarImportacion} style={{ padding: "8px 18px", borderRadius: 8, background: "#00bfff", color: "#fff", fontWeight: "bold", marginRight: 10 }}>Importar</button>
        <button onClick={() => setShowImport(false)} style={{ padding: "8px 18px", borderRadius: 8, background: "#ccc", color: "#222", fontWeight: "bold" }}>Cancelar</button>
      </div>
    </div>
  </div>
)}

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
  

