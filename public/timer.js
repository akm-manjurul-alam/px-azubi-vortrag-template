function Main() {
    this.initialize();
}

Main.prototype.initialize = function () {
    this.time = document.getElementById("time");
    this.start = document.getElementById("start");
    this.stop = document.getElementById("stop");
    this.reset = document.getElementById("reset");
    this.timerId = null;
    this.startTime = 0;
    this.progress = 0;
    this.playingFlg = false;
    this.milliseconds = 0;
    this.handleEvents();
};

Main.prototype.handleEvents = function () {
    let self = this;

    this.start.addEventListener("click", function (e) {
        e.preventDefault();
        if (!self.playingFlg) {
            self.timerStart();
            self.playingFlg = true;
        }
    });

    this.stop.addEventListener("click", function (e) {
        e.preventDefault();
        if (self.playingFlg) {
            clearInterval(self.timerId);
            self.playingFlg = false;
        }
    });

    this.reset.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(self.timerId);
        self.timerId = null;
        self.startTime = 0;
        self.progress = 0;
        self.playingFlg = false;
        self.milliseconds = 0;
        self.time.innerHTML = "00:00:00";
    });
};

Main.prototype.timerStart = function () {
    let self = this;
    self.timerId = setInterval(function () {
        self.milliseconds += 1;
        self.time.innerHTML = self.timeDisplay();
    }, 10);
};

Main.prototype.timeDisplay = function () {
    let self = this;
    let ms,
        s,
        m = 0;
    let currentMilliseconds = self.milliseconds;

    ms = Math.floor((currentMilliseconds / 1) % 100);
    s = Math.floor((currentMilliseconds / 100) % 60);
    m = Math.floor((currentMilliseconds / (100 * 60)) % 60);

    ms = ms < 10 ? "0" + ms : ms;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    return m + ":" + s + ":" + ms;
};
