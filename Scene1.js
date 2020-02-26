class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background", "images/background.png");

        this.load.spritesheet("ship", "spritesheets/ship.png",{
            frameWidth: 16, frameHeight:16
        });
        
        this.load.spritesheet("ship2", "spritesheets/ship2.png",{
            frameWidth: 32, frameHeight: 16
        });

        this.load.spritesheet("ship3", "spritesheets/ship3.png",{
            frameWidth: 32, frameHeight: 32
        });

        this.load.spritesheet("explosion", "spritesheets/explosion.png",{
            frameWidth:16, frameHeight: 16
        });

        this.load.spritesheet("power-up", "spritesheets/power-up.png",{
            frameWidth:16, frameHeight: 16  
        });
        
        this.load.spritesheet("player", "spritesheets/player.png",{
            frameWidth: 16, frameHeight: 24
        });

        this.load.spritesheet("beam", "spritesheets/beam.png",{
            frameWidth: 16, frameHeight: 16
        });

        this.load.bitmapFont("pixelFont", "font/font.png", "font/font.xml");

        this.load.audio("audio_beam", ["audio/beam.ogg","audio/beam.mp3"]);
        this.load.audio("audio_explosion", ["audio/explosion.ogg","audio/explosion.mp3"]);
        this.load.audio("audio_pickup", ["audio/pickup.ogg","audio/pickup.mp3"]);
        this.load.audio("music", ["audio/sci-fi_platformer12.ogg","audio/sci-fi_platformer12.mp3"]);

    }

    create(){
        this.add.text(20,20, "Loading game...");
        this.scene.start("playGame");

        this.anims.create({
            key: "ship1_anim", 
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship2_anim", 
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship3_anim", 
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "explode", 
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key:"red",
            frames: this.anims.generateFrameNumbers("power-up",{start:0, end:1}),
            frameRate: 20,
            repeat:-1        
        });
        
        this.anims.create({
            key:"gray",
            frames: this.anims.generateFrameNumbers("power-up",{start:2, end:3}),
            frameRate: 20,
            repeat:-1        
        });

        this.anims.create({
            key:"thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat:-1        
        });

        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        })

    }
}