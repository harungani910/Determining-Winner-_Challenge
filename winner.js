
//declaring mike and john average score for the 3 games played 
var johnTeamScore = (89 + 120 + 103) / 3;
var mikeTeamScore = (116 + 94 + 123) / 3;
var marryTeamScore = (97 + 134 + 105) / 3
//printing john and mike average  score
console.log(mikeTeamScore);
console.log(johnTeamScore);
console.log(marryTeamScore);

//deciding which team won
if (mikeTeamScore > johnTeamScore) {
    console.log('mike\'s team wins  with ' + mikeTeamScore + 'points');
}
else {
    console.log('mike\'s team lost');
}

if (marryTeamScore > mikeTeamScore) {
    console.log('marry\'s team wins with ' + marryTeamScore + 'points');
}
else {
    console('marry\'s team lost');
}


