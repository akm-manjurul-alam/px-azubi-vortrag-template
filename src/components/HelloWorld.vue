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
                    <h3>Was ist MDSD?</h3>
                    <ul>
                        <li>Ein Oberbegriff für Techniken</li>
                        <li>Automatisiert aus formalen</li>
                        <li>Basiert auf Modellen</li>
                        <li>LauffähigeSoftwareerzeugen</li>
                    </ul>
                </section>

                <section>
                    <h3>
                        Was ist überhaupt ein Modell in diesem Kontext?
                    </h3>
                </section>

                <section>
                    <h3>Modell ist:</h3>
                    <ul>
                        <li>Original und Sein wichtige Eigenschaft</li>
                        <li>Abstraktion</li>
                    </ul>
                </section>

                <section>
                    <h3>MOdell</h3>
                    <ul>
                        <li>Original und Sein wichtige Eigenschaft</li>
                        <li>Abstraction</li>
                        <li>Zwick</li>
                    </ul>
                </section>

                <section>
                    <h3>Bei MDSD</h3>
                    <ul>
                        <li>Hauptartfackt = Modell</li>
                        <li>Codegenerierung</li>
                    </ul>
                </section>

                <section>
                    <h3>UML-MODELLE</h3>
                    <ul>
                        <li>Komponenten</li>
                        <li>Klassen</li>
                        <li>Sequenz</li>
                        <li>Objekt</li>
                    </ul>
                </section>

                <section>
                    <h3>Rollen der MDSD</h3>
                    <ul>
                        <li>Werkzeugentwickler</li>
                        <li>Anwendungsentwickler</li>
                    </ul>
                </section>
                <section class="bgimg-funktion">
                    <img src="../assets/mdsd.png" alt="funktion">
                </section>
                <section>
                    <h3>Wann sollten Anwendungsentwickler
                        eine MDD-Infrastruktur benutzen?</h3>
                    <ul>
                        <li>adäquate Modellierungssprache vorhanden</li>
                        <li>genügend Domänenwissen behandelt</li>
                        <li>ein genügend ausgereifter Codegenerator vorhanden</li>
                        <li>Referenzanwendungen zum Vergleich vorhanden</li>
                        <li>Entwicklungsumgebung zur modellgetriebenen
                            Softwareentwicklung vorhanden
                        </li>
                    </ul>
                </section>
                <section class="bgimg-human">
                    <img class="shake-img" src="../assets/data-eng-desktop.jpg" alt="iterative_softwareentwicklung"
                         width="50%">
                </section>
                <section class="bgimg-human">
                    <img class="shake-img" src="../assets/data-eng-desktop-modern.png"
                         alt="iterative_softwareentwicklung"
                         width="50%">
                </section>
                <section>
                    <div>
                        <h3>Vorteil</h3>
                        <ul>
                            <li> Weniger Aufwand</li>
                            <li> Konsistenz</li>
                            <li> Modell Aufbau genau plannen</li>
                            <li> Steigert die Effektivität und Qualität der Entwicklung</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>Nachteil</h3>
                        <ul>
                            <li> Manuelle Codeänderungen</li>
                            <li> Präzise Modell</li>
                            <li> Anfangskosten</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h1>Vielen Dank<strong>!</strong></h1>
                    <p>Fragen<strong>?</strong></p>
                    <div class="joke-wrapper">
                        <img src="../assets/joke.png" alt="" class="joke">
                    </div>
                </section>
            </div>

            <div class="reveal-footer-text">
                <p class="reveal-footer-text-title">Modellgetriebene Entwicklung - Firas & Alam |</p>
            </div>
            <stopuhr/>
        </div>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Reveal from 'reveal.js/js/reveal'
    import Stopuhr from "./stopuhr";

    export default {
        name: 'app',
        components: {
            Stopuhr
            // HelloWorld
        },
        mounted() {
            Reveal.initialize(
                {
                    navigationMode: 'default',
                }
            )
        }
    }
</script>

<style lang="scss">
    @import url('~reveal.js/css/reveal.css');
    @import url('~reveal.js/css/theme/white.css');

    //common things starts
    .reveal .controls .controls-arrow {
        background: $primary-color !important;
        border-radius: rem(20) !important;
    }

    .reveal .controls .controls-arrow:before {
        background: $secondary-color !important;
    }

    .reveal .controls .controls-arrow:before, .reveal .controls .controls-arrow:after {
        background: $secondary-color !important;
    }

    .reveal .controls .controls-arrow:before, .reveal .controls .controls-arrow:after {
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
        color: $text-color !important;
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
        color: $secondary-color !important;
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

    .shake-img {
        width: 100%;
    }

    .vor-nach {
        width: 100% !important;
        display: flex !important;
        justify-content: space-around !important;
    }

    .left {
        position: relative;
        width: 100%;
        max-width: 40% !important;
    }

    .right {
        position: relative;
        width: 100%;
        max-width: 50% !important;
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
            color: $text-color !important;
            width: 50%;
        }
    }

    .joke-wrapper {
        .joke {
        }

        .joke-text {

        }
    }
</style>
