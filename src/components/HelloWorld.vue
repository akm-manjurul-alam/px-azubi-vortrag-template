<template>
  <div class="reveal">
    <div class="slides">
      <section class="bgimg" style="background: rgba(246, 246, 246, 0.9);">
        <h1 style="text-transform: capitalize; font-size: 72px;">Radio Frequency IDentification</h1>
        <p style="margin-top: 200px; margin-left: 410px; max-width: 530px;">AKM Manjurul Alam (Mischu) -
          ITB86_BK-Hilden <br> zu Herr
          Klimek
          (IT-System)
        </p>
      </section>
      <section>
        <h3>Was ist RFID?</h3>
        <ul>
          <li>TAGNOLOGY</li>
          <li>Radio Frequency Identifikation</li>
          <li>Lokalisierung</li>
          <li>Ein kleiner Chip oder Tag zum Lesen von Funkwellen, die zur Identifizierung verwendet werden.</li>
          <li>Muss nicht in Sichtweite sein</li>
          <li>Kann an Produkten, Tieren oder sogar Menschen befestigt / implantiert werden</li>
        </ul>
      </section>
      <section>
        <h3>Wie Funktioniert RFID brief</h3>
        <ul>
          <li>Tagging (oder Chips) bestehen aus zwei Teilen: i. Antenne II. Prozessor / Speicher</li>
          <li>Empfängt ein Signal vom Lesegerät und gibt ein Rückmeldesignal mit der ID-Nummer aus</li>
          <li>Der Leser sendet die Nummer an die Datenbank oder den Server</li>
        </ul>
      </section>
      <section class="bgimg-funktion">
        <img src="" alt="funktion">
      </section>
      <section>
        <h3>Was sind die Funktionen von RFID?</h3>
        <ul>
          <li> Inventar</li>
          <li> Interne Kontrolle von Aufwandsposten</li>
          <li> Diebstahlschutz</li>
          <li> RFID im Vergleich zum Barcode-Tagging</li>
        </ul>
      </section>
      <section class="arten">
        <h3>Arten von RFID-Tags</h3>
        <ul>
          <li><strong>Semi-Passive Transponder</strong></li>
          <li><strong>Passive Transponder</strong></li>
          <li><strong>Aktive Transponder</strong></li>
        </ul>
      </section>
      <section class="bgimg-human">
        <img src="" alt="history" width="50%">
      </section>
      <section>
        <h3>RFID Heute</h3>
        <p>Gestern</p>
        <p>Heute</p>
        <p>Zukunft</p>
      </section>
      <section class="vor-nach">
        <div class='left'>
          <h3>Vorteil</h3>
          <ul>
            <li> Sicherheit</li>
            <li> Einfacher Zugriff</li>
            <li> Medizinische Notfälle</li>
            <li> Erweiterte Produktverfolgung</li>
            <li> Schneller Komfort</li>
          </ul>
        </div>
        <div class="line"></div>
        <div class='right'>
          <h3>Nachteil</h3>
          <ul>
            <li> Teuer</li>
            <li> Leseprobleme (nass oder beschädigt)</li>
            <li> Radiowellen (Telefonturm oder Walkie - Talkie usw.)</li>
            <li> Unterschiedliches Nutzungsmuster (USA oder EU)</li>
            <li> Tracking Disorder (Angst vor Tracking beim Kauf von Gegenständen mit Tag)</li>
          </ul>
        </div>
      </section>
      <section>
        <h1>Vielen Dank<strong>!</strong></h1>
        <p>Fragen<strong>?</strong></p>
        <p>Habt Ihr bock auf eine test<strong>😏</strong></p>
        <p>Wenn nein ist auch egal müsst ihr aber<strong>😜</strong></p>
      </section>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/Main.vue'
  import Reveal from 'reveal.js/js/reveal'

  export default {
    name: 'main',
    components: {
      // HelloWorld
    },
    mounted() {
      Reveal.initialize()
    }
  }
</script>

<style lang="scss" scoped>
  @import url('~reveal.js/css/reveal.css');
  @import url('~reveal.js/css/theme/white.css');


</style>
