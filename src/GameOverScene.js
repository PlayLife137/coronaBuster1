import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("over-scene");
  }

  init(data) {
    this.score = data.score;
  }

  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("gameover", "images/gameover.png");
    this.load.image("replay-button", "images/replay.png");
  }

  create() {
    // Tampilkan background
    this.add.image(200, 320, "background");

    // Tampilkan gambar game over
    this.add.image(200, 200, "gameover");

    // Tampilkan teks skor
    this.add.text(100, 300, "Score: " + this.score, {
      fontSize: "32px",
      color: "#ffffff",
    });

    // Tambahkan tombol replay
    const replayButton = this.add.image(200, 400, "replay-button")
      .setInteractive()
      .setScale(0.5);

    // Handler untuk klik tombol replay
    replayButton.on("pointerup", () => {
      this.scene.start("corona-buster-scene");
    });
  }
}