export class LoadState extends Phaser.State {
  preload() {
    this.loadingText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Loading...");
    this.loadingText.anchor.setTo(0.5);
  }

  create () {
    this.game.state.start('start', true, false);
  }
}
