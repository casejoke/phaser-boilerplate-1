import { BG_COLOR } from './constants';

export class PreloadState extends Phaser.State {
  init () {
    this.game.stage.backgroundColor = BG_COLOR;
  }

  preload() {
  }

  create () {
    this.game.state.start('load');
  }
}
