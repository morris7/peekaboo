class EndScene extends Phaser.Scene {

  constructor() {
		super({key : 'endScene'});
    this.finalScore= 0;
	}

  preload(){
    this.load.image('background', 'assets/hapebeastBg.png');
  }
  endScene () {

  };

  init(data){
    console.log('init', data);
    this.finalScore = Math.round(data.scoreText * 10) / 10;
  };

  create() {
    this.add.image(400, 300, 'background');
    this.cameras.main.fadeIn(2000, 0, 0, 0)
    
    this.add.text(250,250, 'GAME OVER!',  { fontSize: '26px', fill: '#898B97' });

    this.add.text(250,280, `FINAL SCORE: ${this.finalScore} ETH 🚀`,  { fontSize: '22px', fill: '#898B97' });
    
    var retry = this.add.text(250, 350, 'Play Again',  { fontSize: '22px', fill: '#898B97' })
    retry.setInteractive({ useHandCursor: true });
    retry.on('pointerdown', () => this.clickButton());

    // this.scene.input.keyboard.on('keydown-' + 'ENTER', () => {this.clickButton()})
  };

  clickButton() {
   this.scene.start('gameScene');
  }
}

export default EndScene;