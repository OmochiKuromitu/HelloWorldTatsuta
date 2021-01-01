// phina.js をグローバル領域に展開
phina.globalize();

const ASSETS = {
  image: {
    player: './image/pipo-charachip022.png',
    mob1: './image/pipo-charachip001.png',
    mob2: './image/pipo-charachip011.png',
    mob3: './image/pipo-charachip030e.png',
    bg: './image/map.jpg',
  },
  // スプライトシート
  spritesheet: {
    "player_ss":
    {
      // フレーム情報
      "frame": {
        "width": 32, // 1フレームの画像サイズ（横）
        "height": 32, // 1フレームの画像サイズ（縦）
        "cols": 3, // フレーム数（横）
        "rows": 4, // フレーム数（縦）
      },
      // アニメーション情報
      "animations" : {
        "down": { // アニメーション名
          "frames": [0,1,2], // フレーム番号範囲
          "next": "down", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "up": { // アニメーション名
          "frames": [9,10,11], // フレーム番号範囲
          "next": "up", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "left": { // アニメーション名
          "frames": [3,4,5], // フレーム番号範囲
          "next": "left", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "right": { // アニメーション名
          "frames": [6,7,8], // フレーム番号範囲
          "next": "right", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
      }
    },
    "mob1_ss":
    {
      // フレーム情報
      "frame": {
        "width": 32, // 1フレームの画像サイズ（横）
        "height": 32, // 1フレームの画像サイズ（縦）
        "cols": 3, // フレーム数（横）
        "rows": 4, // フレーム数（縦）
      },
      // アニメーション情報
      "animations" : {
        "down": { // アニメーション名
          "frames": [0,1,2], // フレーム番号範囲
          "next": "down", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "up": { // アニメーション名
          "frames": [9,10,11], // フレーム番号範囲
          "next": "up", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "left": { // アニメーション名
          "frames": [3,4,5], // フレーム番号範囲
          "next": "left", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "right": { // アニメーション名
          "frames": [6,7,8], // フレーム番号範囲
          "next": "right", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
      }
    },
    "mob2_ss":
    {
      // フレーム情報
      "frame": {
        "width": 32, // 1フレームの画像サイズ（横）
        "height": 32, // 1フレームの画像サイズ（縦）
        "cols": 3, // フレーム数（横）
        "rows": 4, // フレーム数（縦）
      },
      // アニメーション情報
      "animations" : {
        "down": { // アニメーション名
          "frames": [0,1,2], // フレーム番号範囲
          "next": "down", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "up": { // アニメーション名
          "frames": [9,10,11], // フレーム番号範囲
          "next": "up", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "left": { // アニメーション名
          "frames": [3,4,5], // フレーム番号範囲
          "next": "left", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "right": { // アニメーション名
          "frames": [6,7,8], // フレーム番号範囲
          "next": "right", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
      }
    },
    "mob3_ss":
    {
      // フレーム情報
      "frame": {
        "width": 32, // 1フレームの画像サイズ（横）
        "height": 32, // 1フレームの画像サイズ（縦）
        "cols": 3, // フレーム数（横）
        "rows": 4, // フレーム数（縦）
      },
      // アニメーション情報
      "animations" : {
        "down": { // アニメーション名
          "frames": [0,1,2], // フレーム番号範囲
          "next": "down", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "up": { // アニメーション名
          "frames": [9,10,11], // フレーム番号範囲
          "next": "up", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "left": { // アニメーション名
          "frames": [3,4,5], // フレーム番号範囲
          "next": "left", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
        "right": { // アニメーション名
          "frames": [6,7,8], // フレーム番号範囲
          "next": "right", // 次のアニメーション
          "frequency": 6, // アニメーション間隔
        },
      }
    },
  },
  sound: {
    sound: './sound/bgm.mp3',
  },
};

// 定数
var SPEED = 4;

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    // // 背景色を指定
    // this.backgroundColor = '#444';
    // // ラベルを生成
    // this.label = Label('Hello, phina.js!').addChildTo(this);
    // this.label.x = this.gridX.center(); // x 座標
    // this.label.y = this.gridY.center(); // y 座標
    // this.label.fill = 'white'; // 塗りつぶし色

    // 背景
    Sprite('bg').addChildTo(this)
                .setPosition(this.gridX.center(), this.gridY.center());

    // ラベル表示
    Label({
      text: '電脳龍田オンリーイベント会場建設予定地\n段階アップデートしていきます(12/31-1/3)\nPCは↑↓←→でキャラが動くよ。\nスマホは未対応（そのうち）',
      fontSize: 24,
    }).addChildTo(this).setPosition(this.gridX.center(),this.gridY.center());

    // 手に入れた本の数
    Shape({
      backgroundColor: 'white',
      width: 240,
      height: 50,
      x: this.gridX.span(3),
      y: this.gridY.span(1),
      }).addChildTo(this);
    // ラベル表示
    Label({
      text: '買った本の数:10冊',
      fontSize: 20,
    }).addChildTo(this).setPosition(this.gridX.span(3),this.gridY.span(1));

    // 再生ボタン作成
    var playBtn = Shape({
    backgroundColor: 'red',
    x: this.gridX.span(10),
    y: this.gridY.span(15),
    }).addChildTo(this);
    // ラベル表示
    Label({
      text: 'BGM\nSTART',
      fontSize: 20,
    }).addChildTo(this).setPosition(this.gridX.span(10),this.gridY.span(15));

    // タッチを有効に
    playBtn.setInteractive(true);
    // タッチイベント
    playBtn.onpointend = function() {
    // 音再生
    SoundManager.playMusic('sound');
    };
    // 中断ボタン作成
    var pauseBtn = Shape({
    backgroundColor: 'blue',
    x: this.gridX.span(12),
    y: this.gridY.span(15),
    }).addChildTo(this);

    // ラベル表示
    Label({
      text: 'BGM\nSTOP',
      fill: 'white',
      fontSize: 20,
    }).addChildTo(this).setPosition(this.gridX.span(12),this.gridY.span(15));

    // タッチを有効に
    pauseBtn.setInteractive(true);
    // タッチイベント
    pauseBtn.onpointend = function() {
    // 一時停止
    SoundManager.pauseMusic();
    };
    // 再開ボタン作成
    var resumeBtn = Shape({
    backgroundColor: 'green',
    x: this.gridX.span(14),
    y: this.gridY.span(15),
    }).addChildTo(this);

    // ラベル表示
    Label({
      text: 'BGM\nRESUME',
      fill: 'white',
      fontSize: 20,
    }).addChildTo(this).setPosition(this.gridX.span(14),this.gridY.span(15));

    
    // タッチを有効に
    resumeBtn.setInteractive(true);
    // タッチイベント
    resumeBtn.onpointend = function() {
    // 再開
    SoundManager.resumeMusic();
    };

    // スプライト画像作成
    var sprite = Sprite('player', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var anim = FrameAnimation('player_ss').attachTo(sprite);
    // アニメーションを指定
    anim.gotoAndPlay('down');
    // 初期位置
    sprite.x = this.gridX.center();
    sprite.y = this.gridY.center() -2 ;
    // 初期速度
    sprite.vx = -2;
    // 更新イベント
    sprite.update = function(app) {
      var key = app.keyboard;
      // 上下左右移動
      if (key.getKey('left')) {
        anim.gotoAndPlay('left');
        sprite.x -= SPEED; 
      }
      if (key.getKey('right')) {
        // 向きを反転する
        anim.gotoAndPlay('right');
        sprite.x += SPEED; 
      }
      if (key.getKey('up')) {
        anim.gotoAndPlay('up');
        sprite.y -= SPEED; 
      }
      if (key.getKey('down')) {
        anim.gotoAndPlay('down');
        sprite.y += SPEED; 
      }
    };
    //移動(枠からはみ出さないように)
    sprite = checkMove(sprite);
    // 移動先を管理する変数
    var targetX = sprite.x;
    var targetY = sprite.y;
        // タッチ開始
    this.onpointstart = function(e) {
        // 移動先を設定
        targetX = e.pointer.x;
        targetY = e.pointer.y;
      };
    // タッチ保持イベント
    this.onpointmove = function(e) {
      // 移動先を設定
        targetX = e.pointer.x;
        targetY = e.pointer.y;
    };
    // 更新
    this.update = function(app) {
        // タッチ中のみスプライトを動かす
        if (app.pointer.getPointing()) {
            // 徐々にタッチした位置に近づける
            var moveX = (targetX - sprite.x) * 0.25;
            var moveY = (targetY - sprite.y) * 0.25;
            sprite.moveBy(moveX, moveY);
        }
      };
  

    // スプライト画像作成
    var mob1 = Sprite('mob1', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob1anim = FrameAnimation('mob1_ss').attachTo(mob1);
    // アニメーションを指定
    mob1anim.gotoAndPlay('down');
    // 初期位置
    mob1.x = this.gridX.span(5);
    mob1.y = this.gridY.span(10);

    // スプライト画像作成
    var mob2 = Sprite('mob2', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob2anim = FrameAnimation('mob2_ss').attachTo(mob2);
    // アニメーションを指定
    mob2anim.gotoAndPlay('left');
    // 初期位置
    mob2.x = this.gridX.span(14);
    mob2.y = this.gridY.span(2);
  },

});

//壁より外に行かないようにする
function checkMove(sprite){
  var SCREEN_WIDTH = window.innerWidth;
  var SCREEN_HEIGHT = window.innerHeight;

  if(sprite.x > SCREEN_WIDTH - 32){
    sprite.x = SCREEN_WIDTH - 32;
  }
  if(sprite.y > SCREEN_HEIGHT - 32){
    sprite.y = SCREEN_HEIGHT - 32;
  }
  if(sprite.x < 32){
    sprite.x = 32;
  }
  if(sprite.y < 32){
    sprite.y = 32;
  }
  return sprite;
}

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main', // メインシーンから開始する
    assets: ASSETS,
  });
  // アプリケーション実行
  app.run();
});
