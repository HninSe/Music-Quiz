//Question BANK

var questionBank = [
    {
        question : 'この歌のタイトルはなんでしょう?',
        option : ['今夜はこのまま','愛を知るまでは','裸の心','君はロック何か聴かない'],
        answer : '愛を知るまでは'
    },
    {
        question : 'この歌の歌手は誰でしょう？',
        option : ['あいみょん','うる','Yoasobi','リサ'],
        answer : 'あいみょん'
    },
    {
        question : 'この歌の作家は誰でしょう?',
        option : ['うる','Yoasobi','リサ','あいみょん'],
        answer : 'あいみょん'
    },
    {
        question : 'あいみょんの出身地は何処でしょう',
        option : ['東京都','大阪','兵庫県','埼玉県'],
        answer : '兵庫県'
    },
    {
        question : 'あいみょんは何歳に歌手になったのでしょう？',
        option : ['16','17','18','19'],
        answer : '19'
    },
    {
        question : 'あいみょんさんの『愛を知るまでは』はいつ発売されたのでしょう？',
        option : ['2021年5月26日','2020年5月26日','2019年5月26日','2018年5月26日'],
        answer : '2021年５月２６日'
    },
    {
        question : '『愛を知るまでは』と一緒に発売された曲は?',
        option : ['裸の心','桜が降る前は','マリーゴールド','今夜はこのまま'],
        answer : '桜が降る前は'
    }
    
]

var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scoreMusic = document.getElementById("score-music");
var option0 =document.getElementById("option0");
var option1 =document.getElementById("option1");
var option2 =document.getElementById("option2");
var option3 =document.getElementById("option3");
var next =document.querySelectorAll(".next");
var points = document.getElementById("score");
var span =document.querySelectorAll("span");
var i = 0;
var score = 0;

//Function to display
function displayQuestion (){
    for(var a=0; a<span.length;a++){
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.'+ (i+1)+' '+questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    start.innerHTML = "Question" + ' ' +(i+1) + ' of' +' ' + questionBank.length; 
}

//function to calculate scores

function calScore(element){
    if(element.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score = score+1;
        document.getElementById(element.id).style.background= "pink";
    }
    else{
        document.getElementById(element.id).style.background= "lightgreen";
    }
    setTimeout(nextQuestion,300);
}


//function to display next question

function nextQuestion(){
    if(i<questionBank.length-1){
        i = i+1;
        displayQuestion();
    }
    else{
        points.innerHTML = score+'/'+questionBank.length;
        quizContainer.style.display= "none";
        scoreMusic.style.display='block';
    }
}

//click events to next button
next[0].addEventListener('click', nextQuestion);

//back to quiz button event
function backToQuiz(){
    location.reload();
}

//function to check answer
function checkAnswer(){
    var answerBank = document.getElementById("answer-bank");
    var answers = document.getElementById('answers')
    answerBank.style.display = "block";
    scoreMusic.style.display = "none";
    for (var a=0; a<questionBank.length; a++)
    {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
