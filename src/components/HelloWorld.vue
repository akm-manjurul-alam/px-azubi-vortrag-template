<template>
    <div id="app">
        <div class="reveal">
            <div class="slides">
                <section class="bgimg">
                    <h1 style="text-transform: capitalize; font-size: 72px;">Modellgetriebene Softwareentwicklung?</h1>
                    <p style="font-weight: 700; margin-top: 160px; margin-left: 490px; max-width: 530px;">Firas Mousa &
                        AKM Manjurul Alam
                        <br>
                        zu Herr
                        Hardy
                    </p>
                </section>
                <section>
                    <h3>Was ist RFID?</h3>
                    <ul>
                        <li>TAGNOLOGY</li>
                        <li>Radio Frequency Identifikation</li>
                        <li>Lokalisierung</li>
                        <li>Ein kleiner Chip oder Tag zum Lesen von Funkwellen, die zur Identifizierung verwendet
                            werden.
                        </li>
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
                    <img src="assets/rfid-funktion.png" alt="funktion">
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
                    <img src="assets/evolution-of-rfid-.jpg" alt="history" width="50%">
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

            <div class="reveal-footer-text">
                <p class="reveal-footer-text-title">Modellgetriebene Entwicklung - Firas & Alam</p>
            </div>
        </div>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Reveal from 'reveal.js/js/reveal'

    export default {
        name: 'app',
        components: {
            // HelloWorld
        },
        mounted() {
            Reveal.initialize()
        }
    }
</script>

<style lang="scss">
    @import url('~reveal.js/css/reveal.css');
    @import url('~reveal.js/css/theme/white.css');

    //common things starts
    .reveal .controls .controls-arrow {
        background: $primary-color!important;
        border-radius: rem(20)!important;
    }

    .reveal .controls .controls-arrow:before {
        background: $secondary-color !important;
    }

    .reveal .controls .controls-arrow:before, .reveal .controls .controls-arrow:after {
        background: $secondary-color !important;
    }

    .reveal .controls .controls-arrow:before, .reveal .controls .controls-arrow:after{
        height: rem(8) !important;
        top: -1px !important;
        left: 3px !important;
    }

    .reveal .progress span {
        background: $primary-color !important;
    }

    //common things ends


    .reveal {
        position: relative;
        width: 100%;
        height: 100%;
    }

    section {
        background: $primary-color !important;
        color: $secondary-color !important;
        border-radius: 8px;
        padding: 30px !important;
    }

    .reveal h1, .reveal h2 {
        font-weight: 900 !important;
        color: $text-color!important;
    }

    .reveal h3, .reveal h4 {
        font-weight: 900 !important;
        color: $text-color !important;
        font-size: 34px !important;
        text-align: left !important;
    }

    .reveal h5, .reveal h6 {
        font-weight: 900 !important;
        text-align: left !important;
        font-size: 24px;
        color: $text-color !important;
    }

    p, ul, li {
        font-size: 24px !important;
        line-height: 40px !important;
        width: 80% !important;
        color: $secondary-color!important;
    }

    .reveal p {
        text-align: left;
    }

    .bgimg {
        position: relative;
        height: 60%;

        h1 {
            color: $text-color;
            text-align: left;
        }

        p {
            color: $secondary-color;
        }
    }

    .bgimg-human, .bgimg-funktion {
        padding: 0 !important;
        background: transparent;
    }

    .vor-nach {
        width: 100% !important;
        display: flex !important;
        justify-content: space-around !important;
    }

    .left {
        position: relative;
        max-width: 40% !important;
    }

    .line:before {
        content: '\A';
        position: absolute;
        display: block;
        width: 4%;
        height: 90%;
        margin-left: -60px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .right {
        max-width: 40% !important;
    }

    .reveal-footer-text {
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 0;
        padding: 0 rem(20);

        &-title {
            @include text($style: italic);
            font-size: rem(12) !important;
            font-weight: 400;
            color: $text-color!important;
            width: 50%;
        }
    }
</style>
