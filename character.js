
const characters = [
    {
        id: 1,
        nameJa: "主人公男子",
        nameEn: "HERO TARO",
        group: "境界の鍵",
        cv: "声優 A",
        color: "#3244cc",
        image: "./img/主人公.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
        },
        description: "テキスト説明"
    },
    {
        id: 2,
        nameJa: "ツバキ",
        nameEn: "Tsubaki",
        group: "主人公",
        cv: "声優 B",
        color: "rgb(204, 46, 46)",
        image: "./img/ツバキ.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "杖"
        },
        description: "テキスト説明"
    },
    {
        id: 3,
        nameJa: "案内人",
        nameEn: "GUIDE",
        group: "魔族連邦",
        cv: "声優 C",
        color: "#2e82ccff",
        image: "./img/案内人.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
        },
        description: "テキスト説明"
    },
    {
        id: 4,
        nameJa: "オッドアイ",
        nameEn: "BEAST LEO",
        group: "獣人街",
        cv: "声優 D",
        color: "#3b12f3",
        image: "./img/オッドアイ.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
        },
        description: "テキスト説明"
    },
    {
        id: 5,
        nameJa: "ツインテ魔法使い",
        nameEn: "GHOST YU",
        group: "黄泉の国",
        cv: "声優 E",
        color: "#db1e92",
        image: "./img/魔法使い.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
        },
        description: "テキスト説明"
    },
    {
        id: 6,
        nameJa: "フィオナ・ヴェール",
        nameEn: "MACHINE GEAR",
        group: "古代遺跡",
        cv: "声優 F",
        color: "#37db1e",
        image: "./img/エルフ 1.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
        },
        description: "テキスト説明"
    },
    {
        id: 7,
        nameJa: "金髪ヒロイン",
        nameEn: "FAIRY PIXIE",
        group: "迷いの森",
        cv: "声優 G",
        color: "#aab123",
        image: "./img/金髪キャラ.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
        },
        description: "テキスト説明"
    },
    {
        id: 8,
        nameJa: "ニコニコキャラ",
        nameEn: "MYSTERY GIRL",
        group: "不明",
        cv: "声優 H",
        color: "#0ead3e",
        image: "./img/ニコニコキャラ.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
         },
        description: "テキスト説明"
    },
    {
        id: 9,
        nameJa: "ロザリア・ヴァルケン",
        nameEn: "MYSTERY GIRL",
        group: "不明",
        cv: "声優 I",
        color: "#5e3434",
        image: "./img/強い女 1.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
         },
        description: "テキスト説明"
    },
      {
        id: 10,
        nameJa: "ライラ・ベルベット",
        nameEn: "Lila Velvet",
        group: "お姉さん",
        cv: "声優 I",
        color: "#950303",
        image: "./img/ライラ・ベルベット.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
         },
        description: "テキスト説明"
    },
    {
        id: 11,
        nameJa: "中性キャラ",
        nameEn: "MYSTERY GIRL",
        group: "不明",
        cv: "声優 I",
        color: "#111597",
        image: "./img/中性キャラ.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
         },
        description: "テキスト説明"
    },
    {
        id: 12,
        nameJa: "クロウ・シルヴァート",
        nameEn: "MYSTERY GIRL",
        group: "不明",
        cv: "声優 I",
        color: "#38345e",
        image: "./img/クソでかい男 1.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
         },
        description: "テキスト説明"
    },
    {
        id: 13,
        nameJa: "人外",
        nameEn: "MYSTERY GIRL",
        group: "不明",
        cv: "声優 I",
        color: "#676262",
        image: "./img/人外.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
         },
        description: "テキスト説明"
    },
    {
        id: 14,
        nameJa: "アリスター・ヴォス",
        nameEn: "SUSPICIOUS MERCHANT",
        group: "不明",
        cv: "声優 I",
        color: "#a69d9d",
        image: "./img/怪しい商人.png",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
         },
        description: "テキスト説明"
    },
     {
        id: 15,
        nameJa: "アリスター・ヴォス",
        nameEn: "SUSPICIOUS MERCHANT",
        group: "不明",
        cv: "声優 I",
        color: "#a69d9d",
        image: "./img/画像.jpg",
        specs: {
            "年齢": "年齢",
            "誕生日": "誕生日",
            "身長": "身長",
            "武器": "武器"
         },
        description: "テキスト説明"
    }
];

// 2. HTMLの場所（要素）を取得する
const dom = {
    list: document.getElementById('char-list'),
    img: document.getElementById('char-img'),
    info: document.querySelector('.char-info'),
    group: document.getElementById('char-group'),
    nameJa: document.getElementById('char-name-ja'),
    nameEn: document.getElementById('char-name-en'),
    cv: document.getElementById('char-cv'),
    specs: document.getElementById('char-specs-list'),
    desc: document.getElementById('char-desc-text'),
    bg: document.getElementById('char-bg')
};

// 今選ばれている番号（最初は0番目＝主人公）
let currentIndex = 0;

// 3. 画面を初期化する関数
function init() {
    // データがない場合はエラー回避
    if (!dom.list) {
        console.error("エラー: HTML内に id='char-list' が見つかりません。");
        return;
    }
    createNavList();     // 左側のリストを作る
    showCharacter(0);    // 最初のキャラを表示する
}

// 4. 左側のリストボタンを作る関数
function createNavList() {
    dom.list.innerHTML = ''; // 一度空にする

    characters.forEach((char, index) => {
        const li = document.createElement('li');

        const btn = document.createElement('button');
        btn.className = 'char-btn';

        // ボタンの中身
        btn.innerHTML = `
            <span class="btn-name">${char.nameJa}</span>
            <span class="btn-en">${char.nameEn}</span>
        `;

        // クリックしたときの動作
        btn.addEventListener('click', () => {
            if (currentIndex !== index) {
                currentIndex = index;
                updateActiveBtn(); // ボタンの色を変える
                showCharacter(index); // 右側の表示を変える
            }
        });

        li.appendChild(btn);
        dom.list.appendChild(li);
    });

    updateActiveBtn(); // 最初のボタンに色をつける
}

// 5. ボタンの選択状態（色）を更新する関数
function updateActiveBtn() {
    const buttons = document.querySelectorAll('.char-btn');
    buttons.forEach((btn, index) => {
        if (index === currentIndex) {
            btn.classList.add('active');
            // 選択中のボタン背景色をキャラの色にする
            btn.style.backgroundColor = characters[currentIndex].color;
            btn.style.borderColor = characters[currentIndex].color;
        } else {
            btn.classList.remove('active');
            btn.style.backgroundColor = '#fff';
            btn.style.borderColor = 'transparent';
        }
    });
}

// 6. 右側のキャラ情報を表示する関数
function showCharacter(index) {
    const char = characters[index];

    // ① 一旦フワッと消す（クラスを外す）
    dom.img.classList.remove('show');
    dom.info.classList.remove('show');

    // ② 0.3秒待ってから内容を書き換えて、フワッと出す
    setTimeout(() => {
        // 画像とテキストの書き換え
        dom.img.src = char.image;
        dom.group.textContent = char.group;
        dom.nameJa.textContent = char.nameJa;
        dom.nameEn.textContent = char.nameEn;
        dom.cv.textContent = char.cv;
        dom.desc.textContent = char.description;

        // スペック表（年齢など）の書き換え
        dom.specs.innerHTML = '';
        for (const [key, value] of Object.entries(char.specs)) {
            const dt = document.createElement('dt');
            dt.textContent = key;
            const dd = document.createElement('dd');
            dd.textContent = value;
            dom.specs.appendChild(dt);
            dom.specs.appendChild(dd);
        }

        // テーマカラー（背景の斜め線など）を変更
        document.documentElement.style.setProperty('--theme-color', char.color);

        // 画像と情報を表示（クラスをつける）
        dom.img.classList.add('show');
        dom.info.classList.add('show');

    }, 300);
}

// ページが読み込まれたら init を実行
document.addEventListener('DOMContentLoaded', init);



// // BGMコントロールの共通実装// BGMコントロールの共通実装
// const bgm = document.querySelector('#bgm');
// const btn = document.querySelector('#music-btn');
// const statusText = document.querySelector('#music-status');

// // --- 1. ページ読み込み時の処理 ---
// window.addEventListener('load', () => {
//     // すべて sessionStorage に統一
//     const isPlaying = sessionStorage.getItem('bgm_playing') === 'true';
//     const savedTime = sessionStorage.getItem('bgm_time');

//     if (savedTime) {
//         bgm.currentTime = parseFloat(savedTime);
//     }

//     if (isPlaying) {
//         bgm.volume = 0;
//         bgm.play().then(() => {
//             btn.classList.add('is-playing');
//             statusText.textContent = 'BGM: ON';
//             fadeAudio(bgm, 1);
//         }).catch(() => {
//             console.log("ユーザー操作待ち");
//         });
//     }
// });

// // --- 2. リンクをクリックした時の処理 ---
// document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', (e) => {
//         const href = link.getAttribute('href');

//         if (href && !href.startsWith('http') && !href.startsWith('#')) {
//             e.preventDefault();
//             // 保存先も sessionStorage に修正
//             sessionStorage.setItem('bgm_time', bgm.currentTime); 

//             if (!bgm.paused) {
//                 fadeAudio(bgm, 0, () => {
//                     window.location.href = href;
//                 });
//             } else {
//                 window.location.href = href;
//             }
//         }
//     });
// });

// // --- 3. 音量調節（フェード）用関数 ---
// function fadeAudio(audio, targetVolume, callback) {
//     const duration = 300; 
//     const step = 0.05;
//     const intervalTime = duration * step;

//     const timer = setInterval(() => {
//         if (audio.volume < targetVolume) {
//             audio.volume = Math.min(audio.volume + step, 1);
//         } else if (audio.volume > targetVolume) {
//             audio.volume = Math.max(audio.volume - step, 0);
//         } else {
//             clearInterval(timer);
//             if (callback) callback();
//         }
//     }, intervalTime);
// }

// // --- 4. ボタン操作 ---
// btn.addEventListener('click', () => {
//     if (bgm.paused) {
//         bgm.play();
//         // 保存先も sessionStorage に修正
//         sessionStorage.setItem('bgm_playing', 'true');
//         btn.classList.add('is-playing');
//         statusText.textContent = 'BGM: ON';
//         fadeAudio(bgm, 1);
//     } else {
//         fadeAudio(bgm, 0, () => {
//             bgm.pause();
//             // 保存先も sessionStorage に修正
//             sessionStorage.setItem('bgm_playing', 'false');
//             btn.classList.remove('is-playing');
//             statusText.textContent = 'BGM: OFF';
//         });
//     }
// });


// BGMコントロールの共通実装
const bgm = document.querySelector('#bgm');
const btn = document.querySelector('#music-btn');
const statusText = document.querySelector('#music-status');

// --- 1. ページ読み込み時の処理 ---
window.addEventListener('load', () => {
    // すべて sessionStorage に統一
    const isPlaying = sessionStorage.getItem('bgm_playing') === 'true';
    const savedTime = sessionStorage.getItem('bgm_time');

    if (savedTime) {
        bgm.currentTime = parseFloat(savedTime);
    }

    if (isPlaying) {
        bgm.volume = 0;
        bgm.play().then(() => {
            btn.classList.add('is-playing');
            statusText.textContent = 'BGM: ON';
            fadeAudio(bgm, 1);
        }).catch(() => {
            console.log("ユーザー操作待ち");
        });
    }
});

// --- 2. リンクをクリックした時の処理 ---
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        if (href && !href.startsWith('http') && !href.startsWith('#')) {
            e.preventDefault();
            // 保存先も sessionStorage に修正
            sessionStorage.setItem('bgm_time', bgm.currentTime); 

            if (!bgm.paused) {
                // ここで新しい fadeAudio が呼ばれる
                fadeAudio(bgm, 0, () => {
                    window.location.href = href;
                });
            } else {
                window.location.href = href;
            }
        }
    });
});

// --- 3. 音量調節（フェード）用関数（スマホ対応版） ---
function fadeAudio(audio, targetVolume, callback) {
    // スマホ（720px以下）または音量操作ができない環境対策
    const isMobile = window.innerWidth <= 720; 

    if (isMobile) {
        // スマホならフェードなしで即音量を設定＆停止/再生
        if (targetVolume === 0) {
            audio.pause();
        } else {
            audio.play().catch(e => console.log(e));
        }
        // 音量は変えられないので無視してコールバック実行
        if (callback) callback();
        return; // ここで終了
    }

    // --- PCなら今まで通りフェード処理 ---
    const duration = 300; 
    const step = 0.05;
    const intervalTime = duration * step;
    
    // 既存のタイマーがあればクリア（連打対策）
    if (audio.fadeTimer) clearInterval(audio.fadeTimer);

    audio.fadeTimer = setInterval(() => {
        // 目標との差が小さい場合は完了とする
        if (Math.abs(audio.volume - targetVolume) < step) {
            audio.volume = targetVolume;
            clearInterval(audio.fadeTimer);
            if (targetVolume === 0) audio.pause();
            if (callback) callback();
            return;
        }

        if (audio.volume < targetVolume) {
            audio.volume = Math.min(audio.volume + step, 1);
        } else if (audio.volume > targetVolume) {
            audio.volume = Math.max(audio.volume - step, 0);
        }
    }, intervalTime);
}

// --- 4. ボタン操作 ---
btn.addEventListener('click', () => {
    if (bgm.paused) {
        bgm.play();
        sessionStorage.setItem('bgm_playing', 'true');
        btn.classList.add('is-playing');
        statusText.textContent = 'BGM: ON';
        fadeAudio(bgm, 1);
    } else {
        fadeAudio(bgm, 0, () => {
            bgm.pause();
            sessionStorage.setItem('bgm_playing', 'false');
            btn.classList.remove('is-playing');
            statusText.textContent = 'BGM: OFF';
        });
    }
});

// ハンバーガーメニューの実装
const hamburger = document.getElementById("hamburger");
const overlayNav = document.getElementById("overlayNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-open");
  overlayNav.classList.toggle("is-open");
});

document.querySelectorAll("#overlayNav a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-open");
    overlayNav.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
  });
});