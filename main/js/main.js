// phina.js をグローバル領域に展開
phina.globalize();

const ASSETS = {
  image: {
    player: './image/pipo-charachip022.png',
    mob1: './image/pipo-charachip001.png',
    mob2: './image/pipo-charachip011.png',
    mob3: './image/pipo-charachip030e.png',
    mob4: './image/pipo-charachip028d.png',
    mob5: './image/pipo-charachip015.png',
    mob6: './image/pipo-charachip008.png',
    mob7: './image/pipo-charachip012a.png',
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
    get1: './sound/get.mp3',
    get2: './sound/get2.mp3',
  },
};

// 定数
var SPEED = 4;
var MESSAGE_SPEED = 4; //1<n 低いほど早い
var FONT_SIZE = 20;
var RANDOM_GETSOUND = ['get1','get2'];
var RANDOM_ITEMNAME = ['えっちな','健全な','ドスケベな','ほっこりする','シリアスな','感動巨編な'];
var RANDOM_LINES = [
  'ようこそ！龍田オンリーイベント会場へ\nここには龍田好きしかいないよ\n君も龍田好きならゆっくりしていきなよ',
  'あら？あなたも同人誌を売りに？\nそれとも買いに？\ここはどちらも出来るわよ\n楽しんでいってね',
  'ずっとこの時を待っていた…\n必ず全部買う！！！',
  'わーい！龍田ちゃんの本がいっぱいある！',
  'もう500冊くらい買ったよ！',
  '君の描いた本もおくれよ。いくらでも出すよ',
  '察してよ、\n俺の龍田本が欲しいって気持ち',
  'だってうれしいんだもん\n君の初同人龍田本が\n俺の描いたのだってわかったから…',
  'これ以上騒ぐと龍田本を作るよ',
  'じゃあ龍田本出していい？',
  'これは俺が見つけた龍田本だから…なんてねっ',
  '今度は逃げないでね、脱稿してね…',
  'ねぇ、脱稿して',
  '龍田のことが好きなんだ',
  '龍田のこと好きだって\nすがりつかせてあげる…',
  '龍田と本が読めること…\nうれしいくせに…',
  '龍田のおっぱい…見る？',
  'ああ!!\n龍田の１８禁本買ったよ！\nエッチだよっ！だって…男だもん…',
  'これ以上、エロい龍田の本を見せて\n俺を欲情させるなって\n言ってるの！',
  '脱稿しようとしたのに\n俺…\nかっこわるいじゃん',
  '龍田が綺麗すぎるからいけない…\n好きだよ…\n龍田を知るたびに俺…\nどんどん好きになっていくんだ…',
  'もう…\n手ぬるいエロは描かないよ…',
  '龍田のこと…\n好きにしていいのか…？',
  '誰よりもかっこいい？\n龍田の本が一番頼りになる…？',
  'だけど忘れないで\n俺が龍田ハンターだってこと…',
  '俺…龍田本で抜いてるときが\n一番かっこいいんだよ',
  'ねぇ…新刊交換しようよ\n僕脱稿したし…\nそれに…\n龍田の本がほしいし…',
  'だから…\n俺だけの龍田作家でいろ…',
  '何って、\n俺の龍田本だって印だけど？',
  '俺の描く提督は\nこんなもんじゃないのに…',
  '欲しいのは…\n龍田のエロ本だけだよ…',
  '健全な龍田本ください',
  'ただ一人…龍田が俺を…\n男として見てくれてたら―…',
  'わぁっ…\nそんなハードNTR龍田本だなんて\n思ってなかったよぉ',
  '龍田本…\nフーフーして読まさせて…',
  '行かないで…龍田…\n俺のそばにいて…\n行かないで…',
  '良龍田本を出す君の事、\n独り占めしたいんだ…',
  'でも…龍田のこと大好きでしょ？',  
  'わたしのこと、愛してる～？\nふふっ、龍田ちゃんぽいかな？',
];




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
    this.messagewindow = false; // メッセージウィンドウ表示

    // 背景
    Sprite('bg').addChildTo(this)
                .setPosition(this.gridX.center(), this.gridY.center());

    // // ラベル表示
    // Label({
    //   text: '電脳龍田オンリーイベント会場建設予定地\n段階アップデートしていきます(12/31-1/3)\nPCは↑↓←→でキャラが動くよ。\nスマホは未対応（そのうち）',
    //   fontSize: 24,
    // }).addChildTo(this).setPosition(this.gridX.center(),this.gridY.center());

    this.count = 0
    // 手に入れた本の数
    var titleLabelBack = Shape({
      backgroundColor: 'white',
      width: 280,
      height: 50,
      x: this.gridX.span(3),
      y: this.gridY.span(1),
      }).addChildTo(this);
    // ラベル表示
    Label({
      text: '買った本の数:',
      fontSize: 20,
    }).addChildTo(this).setPosition(this.gridX.span(3),this.gridY.span(1));
    this.countLabel = Label({
      text: this.count,
      fontSize: 20,
    }).addChildTo(this).setPosition(this.gridX.span(5),this.gridY.span(1));
    Label({
      text: '冊',
      fontSize: 20,
    }).addChildTo(this).setPosition(this.gridX.span(6),this.gridY.span(1));

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

    // 音再生
    SoundManager.playMusic('sound');

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


    // 棘付きフキダシ
    var tb = phina.ui.ThornedTalkBubbleLabel({
      text: '電脳龍田オンリーイベント会場建設予定地\n段階アップデートしていきます(12/31-1/3)\nPCは↑↓←→でキャラが動くよ。',
    });
    var x = Math.randint(window.innerHeight *0.2, window.innerWidth*0.8);
    var y = Math.randint(window.innerHeight *0.2, window.innerWidth*0.9);
    tb.setPosition(x, y)
    .adjustToLabelSize()
    .addChildTo(this).setPosition(this.gridX.center(),this.gridY.center());
    
    tb.tweener.clear()
    .set({alpha: 0, scaleX:0.8, scaleY:0.1})
    .by({y: -100, alpha: 1, scaleX:0.2, scaleY:0.9}, 800, 'easeOutElastic')
    .wait(4000)
    .by({y:-40, alpha: -1}, 500, 'easeOutCubic')
    .call(function() {
      tb.remove();
    })

    // スプライト画像作成
    this.sprite = Sprite('player', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    this.anim = FrameAnimation('player_ss').attachTo(this.sprite);
    // アニメーションを指定
    this.anim.gotoAndPlay('down');
    // 初期位置
    this.sprite.x = this.gridX.center();
    this.sprite.y = this.gridY.center() -2 ;
    // 初期速度
    this.sprite.vx = -2;

    //移動(枠からはみ出さないように)
    // checkMove();
    // 移動先を管理する変数
    this.targetX = this.sprite.x;
    this.targetY = this.sprite.y;
        // タッチ開始
    this.onpointstart = function(e) {
        // 移動先を設定
        this.targetX = e.pointer.x;
        this.targetY = e.pointer.y;
      };
    // タッチ保持イベント
    this.onpointmove = function(e) {
      // 移動先を設定
      this.targetX = e.pointer.x;
      this.targetY = e.pointer.y;
    };

  

    // スプライト画像作成
    this.mob1 = Sprite('mob1', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob1anim = FrameAnimation('mob1_ss').attachTo(this.mob1);
    // アニメーションを指定
    mob1anim.gotoAndPlay('down');
    // 初期位置
    this.mob1.x = this.gridX.span(5);
    this.mob1.y = this.gridY.span(10);

    // スプライト画像作成
    this.mob2 = Sprite('mob2', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob2anim = FrameAnimation('mob2_ss').attachTo(this.mob2);
    // アニメーションを指定
    mob2anim.gotoAndPlay('left');
    // 初期位置
    this.mob2.x = this.gridX.span(14);
    this.mob2.y = this.gridY.span(5);

    // スプライト画像作成
    this.mob3 = Sprite('mob3', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob3anim = FrameAnimation('mob3_ss').attachTo(this.mob3);
    // アニメーションを指定
    mob3anim.gotoAndPlay('right');
    // 初期位置
    this.mob3.x = this.gridX.span(11);
    this.mob3.y = this.gridY.span(8);

    // スプライト画像作成
    this.mob4 = Sprite('mob4', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob4anim = FrameAnimation('mob3_ss').attachTo(this.mob4);
    // アニメーションを指定
    mob4anim.gotoAndPlay('up');
    // 初期位置
    this.mob4.x = this.gridX.span(4);
    this.mob4.y = this.gridY.span(8);

            // スプライト画像作成
    this.mob5 = Sprite('mob5', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob5anim = FrameAnimation('mob3_ss').attachTo(this.mob5);
    // アニメーションを指定
    mob5anim.gotoAndPlay('right');
    // 初期位置
    this.mob5.x = this.gridX.span(14);
    this.mob5.y = this.gridY.span(3);

    // スプライト画像作成
    this.mob6 = Sprite('mob6', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob6anim = FrameAnimation('mob3_ss').attachTo(this.mob6);
    // アニメーションを指定
    mob6anim.gotoAndPlay('left');
    // 初期位置
    this.mob6.x = this.gridX.span(4);
    this.mob6.y = this.gridY.span(8);

    // スプライト画像作成
    this.mob7 = Sprite('mob7', 64, 64).addChildTo(this);
    // スプライトにフレームアニメーションをアタッチ
    var mob7anim = FrameAnimation('mob3_ss').attachTo(this.mob7);
    // アニメーションを指定
    mob7anim.gotoAndPlay('down');
    // 初期位置
    this.mob7.x = this.gridX.span(10);
    this.mob7.y = this.gridY.span(5);


    // 手に入れた本の数
    this.messageLabelBack = RectangleShape({
      width: window.innerWidth * 0.8,
      height: 200,
      x: this.gridX.span(8),
      y: this.gridY.span(13),
      backgroundColor:"transparent",
      fill:"white",
      stroke:"black",
      strokeWidth:5,
      cornerRadius:25
    }).addChildTo(this);
    this.messageLabelBack.setInteractive(true);

    this.labelArea = LabelArea({
      text:'',
      width: window.innerWidth * 0.8,
      height: 180,
      fontSize:FONT_SIZE,
    }).addChildTo(this)
    .setPosition(this.gridX.span(8) + 20,this.gridY.span(13) + 20);
    
    this.nextTriangle = TriangleShape({
      fill:'black',
      stroke:'transparent',
      radius:FONT_SIZE/2,
    }).addChildTo(this)
    .setPosition(this.labelArea.right - 70, this.labelArea.bottom - 25);
    this.nextTriangle.rotation = 180;

    this.textIndex = 0;
    this.charIndex = 0;
    this.textAll = true;
    
    this.messageSpeed = MESSAGE_SPEED;
  
    
  },

  // 更新
  update:function(app){
    var key = app.keyboard;
    // 上下左右移動
    if (key.getKey('left')) {
      this.anim.gotoAndPlay('left');
      this.sprite.x -= SPEED; 
    }
    if (key.getKey('right')) {
      // 向きを反転する
      this.anim.gotoAndPlay('right');
      this.sprite.x += SPEED; 
    }
    if (key.getKey('up')) {
      this.anim.gotoAndPlay('up');
      this.sprite.y -= SPEED; 
    }
    if (key.getKey('down')) {
      this.anim.gotoAndPlay('down');
      this.sprite.y += SPEED; 
    }

    // タッチ中のみスプライトを動かす
    if (app.pointer.getPointing()) {
        // 徐々にタッチした位置に近づける
        var moveX = (this.targetX - this.sprite.x) * 0.25;
        var moveY = (this.targetY - this.sprite.y) * 0.25;
        this.sprite.moveBy(moveX, moveY);
    }

    // 矩形判定
    if (this.sprite.hitTestElement(this.mob1) || this.sprite.hitTestElement(this.mob2) || this.sprite.hitTestElement(this.mob3) ||
         this.sprite.hitTestElement(this.mob4) ||this.sprite.hitTestElement(this.mob5) ||this.sprite.hitTestElement(this.mob6) ||
         this.sprite.hitTestElement(this.mob7)) {
      // 拡大量を指定
      if(!this.messageLabelBack.visible){
        console.log("show!!!")
        this.messagewindow = true;
        this.messageLabelBack.alpha = 0;
        this.messageLabelBack.tweener.clear()
        .set({alpha: 0, scaleX:0.8, scaleY:0.1})
        .by({y: 0, alpha: 1, scaleX:0.2, scaleY:0.9}, 800, 'easeOutElastic')
        .wait(2000)
        // 透明化
        this.labelArea.alpha = 0;
        // フェードイン
        this.labelArea.tweener.fadeIn(500).play();
        this.messageLabelBack.show();
        this.labelArea.show();
        // this.nextTriangle.show();

        this.labelArea.text = RANDOM_LINES.pickup();
        
        if(this.textAll){
          this.nextTriangle.show();
        }else{
          this.nextTriangle.hide();
        }
        this.count += 1;
        this.countLabel.text = this.count

        // 棘付きフキダシ
        var tb = phina.ui.ThornedTalkBubbleLabel({
          bubbleFill: "#EDA9B6",
          fontSize:50,
          text: RANDOM_ITEMNAME.pickup() + '\n龍田本1冊GET！',
        });
        var x = Math.randint(window.innerHeight *0.2, window.innerWidth*0.8);
        var y = Math.randint(window.innerHeight *0.2, window.innerWidth*0.9);
        tb.setPosition(x, y)
        .adjustToLabelSize()
        .addChildTo(this).setPosition(this.gridX.center(),this.gridY.center());
        
        tb.tweener.clear()
        .set({alpha: 0, scaleX:0.8, scaleY:0.1})
        .by({y: -100, alpha: 1, scaleX:0.2, scaleY:0.9}, 800, 'easeOutElastic')
        .wait(500)
        .by({y:-40, alpha: -1}, 500, 'easeOutCubic')
        .call(function() {
          tb.remove();
        })
        SoundManager.play(RANDOM_GETSOUND.pickup());
      }
    }else{
      // 拡大量を指定
      this.messageLabelBack.hide();
      this.labelArea.hide();
      this.nextTriangle.hide();
    }

},

  showAllText: function(){
    this.labelArea.text = RANDOM_LINES.pickup();
    this.textAll = true;
    this.charIndex = text.length;
  },
  
  clearText:function(){
    this.labelArea.text='';
  },
  
  nextText : function(){
    this.clearText();
    if(this.texts.length <= ++this.textIndex){
      this.textIndex = 0;
    }
    this.charIndex = 0;
    this.addChar();
  },
  
  addChar:function(){
    this.labelArea.text += this.getChar();
  },
  
  getChar:function(){
    var text = this.texts[this.textIndex];
    if(text.length <= this.charIndex){
      this.textAll = true;
      return '';
    }else{
      this.textAll = false;
      return text[this.charIndex++];
    }
  },

    //壁より外に行かないようにする
  checkMove : function(){
    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;

    if(this.sprite.x > SCREEN_WIDTH - 32){
      this.sprite.x = SCREEN_WIDTH - 32;
    }
    if(this.sprite.y > SCREEN_HEIGHT - 32){
      this.sprite.y = SCREEN_HEIGHT - 32;
    }
    if(this.sprite.x < 32){
      this.sprite.x = 32;
    }
    if(this.sprite.y < 32){
      this.sprite.y = 32;
    }
    return this.sprite;
  }
});



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
