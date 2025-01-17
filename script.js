var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Sports/FIFA%20Men's%20World%20Cup%20Results.csv"
var numberWorldCup = getColumn(url,1)
var worldCupYear = getColumn(url,2)
var worldCupHosts = getColumn(url,3)
var worldCupChampions = getColumn(url,4)
var finalScore = getColumn(url,5)
var worldCupVenue = getColumn(url,6)
var runnerUp = getColumn(url,7)
var thirdPlace = getColumn(url,8)
var fourthPlace = getColumn(url,9)
var numberOfTeams = getColumn(url,10)

function getFinalScore(year){
    for(var i=0; i <numberWorldCup.length; i++ ){
        if(worldCupYear[i].includes(year)){
            return finalScore[i];
        }
    } 
    return "Year not found";
    
  

} console.log(getFinalScore("208.0"))


function getWorldCupYear(venue){
    var getWorldCupYearList = "";
    for(var i=0; i <numberWorldCup.length; i++ ){
        if(worldCupVenue[i].includes(venue)){
            return parseInt(worldCupYear[i])
        }
    } 
    
    return "Venue not found";

} console.log(getWorldCupYear("Estadio Centenario, Montevideo"))

function getworldCupChampions(hosts){
    var matchingChampions = []
    for(var i=0; i <numberWorldCup.length; i++ ){
        if(worldCupHosts[i].includes(hosts)){
            matchingChampions.push(worldCupChampions[i]);
        }return "No champions Found"

    }


    return matchingChampions;
    
  

} console.log(getworldCupChampions("Italy")) 

function getRunnerUp(champions){
    var matchingRunnerUps = []
    for(var i=0; i <numberWorldCup.length; i++ ){
        if(worldCupChampions[i].includes(champions)){
            matchingRunnerUps.push(runnerUp[i]);
        } return "No runner up found"
    } 



    return matchingRunnerUps;
    
  

} console.log(getRunnerUp("Italy")) 


function getNumberOfTeams(years){
    var getNumberOfTeamsList = "";
    for(var i=0; i <numberWorldCup.length; i++ ){
        if(worldCupYear[i].includes(years)){
            return parseInt(numberOfTeams[i])
        }
    } 
    
    return "Number of teams not found";

} console.log(getNumberOfTeams("1930"))



