// 花のイメージ用変数
let blueFlowerImage, yellowFlowerImage, orangeFlowerImage;
let flowerImage;

// ３つの花の画像ファイルを読み込む
function preload() {
    blueFlowerImage = loadImage('blue.png');
    yellowFlowerImage = loadImage('yellow.png');
    orangeFlowerImage = loadImage('orange.png');
}

function setup() {
    createCanvas(400, 300);
    background(230);
    // 6行3列
    for (let x = 0; x < 6; x++) {
        // %演算子と3を使って、0,1,2,0,1,2という循環を得る
        // 0と3列めは青い花
        if (x % 3 === 0) {
            flowerImage = blueFlowerImage;
            // 1と4列めは黄色い花
        }
        else if (x % 3 === 1) {
            flowerImage = yellowFlowerImage;
            // 2と5列めはオレンジの花
        }
        else if (x % 3 === 2) {
            flowerImage = orangeFlowerImage;
        }

        // xとyを使ってイメージを描く位置を決める
        // 30はイメージの幅とイメージ間の空きを考慮した決め打ちの数値
        for (let y = 0; y < 3; y++) {
            image(flowerImage, x * 30, y * 30);
        }
    }
}