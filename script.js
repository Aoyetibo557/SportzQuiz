
// setTimeout(() => {
// //    removeAppName();
//    var playerInfo = document.getElementById("player_info");
//    playerInfo.classList.remove("hide");
// }, 4000);

// //submit name button
// document.getElementById("submitName").onclick = function () {_getPlayerName()};

// //View Mnu button
// document.getElementById("main_menu").onclick = function () {addHideClass("welcome_sign"), removeHideClass("menu_screen")};

//Menu Calls

menuCalls();
function removeAppName(){
    var logo = document.getElementById("appName");
    logo.classList.add("hide");
}

function _getPlayerName(){
    addHideClass("player_info");
    removeHideClass("welcome_sign");

    var playerName = document.getElementById("playerName").value;
    document.getElementById("welcomeText").innerHTML = "Welcome " + playerName;
}

function removeHideClass(id){
    var doc = document.getElementById(id);
    doc.classList.remove("hide");
}

function addHideClass(id){
    var doc = document.getElementById(id);
    doc.classList.add("hide");
}

// function get_id(clicked_id){
//     console.log(clicked_id);
// }

function replaceDiv(newDiv){
    var v= document.getElementById(newDiv).innerHTML;
    document.getElementById("selectedMenu").innerHTML = v;

}

function menuCalls(){
    document.getElementById("game_start").onclick = function () {replaceDiv("startGame")};
    document.getElementById("game_mode").onclick = function () {replaceDiv("gameModes")};
    document.getElementById("leader_board").onclick = function () {replaceDiv("leaderBoard"), createLeaderBoard()};
    document.getElementById("help_btn").onclick = function () {replaceDiv("help")};
    document.getElementById("exit_btn").onclick = function () {replaceDiv("exit")};
}

function createLeaderBoard(){

    var node1 =document.createElement("TD");
    var node2 =document.createElement("TD");
    var node3 =document.createElement("TD");

    var userName = document.createTextNode(document.getElementById("playerName").value);
    var date =document.createTextNode(new Date().getMonth() + "/" + new Date().getDay() + "/" + new Date().getFullYear());
    //Replace with actual score later on
    var score =document.createTextNode(50);

    node1.appendChild(userName);
    node2.appendChild(date);
    node3.appendChild(score);
   
    document.getElementById("myLeaderboard").appendChild(node1);
    document.getElementById("myLeaderboard").appendChild(node2);
    document.getElementById("myLeaderboard").appendChild(node3);

}