const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    }, {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [
            'フルオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }, 
];

const quizLength = quiz.length;
let quizIndex = 0;
let scoer = 0;

// const correct = 'ニンテンドーDS';
const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        scoer++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
    } else {
        // 問題数がもうなもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + scoer + '/' + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}