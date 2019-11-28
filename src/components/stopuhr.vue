<template>
    <div class="container">
        <div class="stopwatch">
            <input type="checkbox" id="start">
            <label id="reset" class="reset">Reset</label>
            <div class="timer">
                <span class="hours"></span>
                <span>:</span>
                <span class="minutes"></span>
                <span>:</span>
                <span class="seconds"></span>
            </div>
            <label for="start" class="start"></label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "stopuhr",
    }
</script>

<style lang="scss" scoped>
    $charade: #282a37;
    $bluebell: #979fd0;
    $kimberley: #6870a4;
    $alabaster: #fdfdfd;
    $box-shadow: 0 0.25rem 0.375rem 0 hsla(0, 0%, 0%, 0.4);
    $text-shadow: 0 0.25rem 0.375rem hsla(0, 0%, 0%, 0.2);

    .container {
        z-index: 1;
        position: relative;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .stopwatch {
        position: absolute;
        bottom: 12px;
        left: 205px;
        width: 20rem;
        display: grid;
        grid:   "timer timer" 20px
                "start reset" 20px / 1fr 1fr;
        text-align: center;
    }

    input {
        display: none;
    }

    .start {
        grid-area: start;
        @include text($style: italic);
        font-size: rem(12) !important;
        margin-top: 0;
        font-weight: 400;
        color: $text-color!important;
        position: absolute;
        top: -32px;
        left: 90px;
    }

    .reset {
        grid-area: reset;
        order: 1;
        @include text($style: italic);
        font-size: rem(12) !important;
        margin-top: 0;
        font-weight: 400;
        color: $text-color!important;
        position: absolute;
        top: -32px;
        left: 40px;
    }

    label {
        line-height: 3rem;
        cursor: pointer;
    }

    .timer {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: timer;
        @include text();
        font-size: rem(14) !important;
        margin-top: 0;
        font-weight: 400;
    }

    .hours,
    .minutes,
    .seconds {
        &::before {
            content: "0";
        }

        &::after {
            content: "0";
        }
    }

    #start ~ label[for="start"]::after {
        content: "Start";
    }

    #start ~ .timer > .hours::before {
        animation: ones 360000s steps(1) infinite paused;
    }

    #start ~ .timer > .hours::after {
        animation: ones 36000s steps(1) infinite paused;
    }

    #start ~ .timer > .minutes::before {
        animation: tens 3600s steps(1) infinite paused;
    }

    #start ~ .timer > .minutes::after {
        animation: ones 600s steps(1) infinite paused;
    }

    #start ~ .timer > .seconds::before {
        animation: tens 60s steps(1) infinite paused;
    }

    #start ~ .timer > .seconds::after {
        animation: ones 10s steps(1) infinite paused;
    }

    #start:checked ~ label[for="start"]::after {
        content: "Pause";
    }

    #start:checked ~ .timer > .hours::before {
        animation: ones 360000s steps(1) infinite running;
    }

    #start:checked ~ .timer > .hours::after {
        animation: ones 36000s steps(1) infinite running;
    }

    #start:checked ~ .timer > .minutes::before {
        animation: tens 3600s steps(1) infinite running;
    }

    #start:checked ~ .timer > .minutes::after {
        animation: ones 600s steps(1) infinite running;
    }

    #start:checked ~ .timer > .seconds::before {
        animation: tens 60s steps(1) infinite running;
    }

    #start:checked ~ .timer > .seconds::after {
        animation: ones 10s steps(1) infinite running;
    }

    #reset:active ~ .timer > .hours::before,
    #reset:active ~ .timer > .hours::after,
    #reset:active ~ .timer > .minutes::before,
    #reset:active ~ .timer > .minutes::after,
    #reset:active ~ .timer > .seconds::before,
    #reset:active ~ .timer > .seconds::after {
        animation: none;
    }

    @keyframes tens {
        0% {
            content: "0";
        }
        16.66666666666667% {
            content: "1";
        }
        33.33333333333333% {
            content: "2";
        }
        50% {
            content: "3";
        }
        66.66666666666667% {
            content: "4";
        }
        83.33333333333333% {
            content: "5";
        }
    }

    @keyframes ones {
        0% {
            content: "0";
        }
        10% {
            content: "1";
        }
        20% {
            content: "2";
        }
        30% {
            content: "3";
        }
        40% {
            content: "4";
        }
        50% {
            content: "5";
        }
        60% {
            content: "6";
        }
        70% {
            content: "7";
        }
        80% {
            content: "8";
        }
        90% {
            content: "9";
        }
    }
</style>
