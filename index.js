

const startit = () => {
          setTimeout(function () {
                    console.log("start");
                    confetti.start();
          }, 1500);
};

const stopit = () => {
          setTimeout(function () {
                    console.log("stop");
                    confetti.stop();
          }, 1000000);
};

startit();
stopit();
