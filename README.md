



// returns the final score of world cup
// param url (year)
//
//retun column list (finalScore)


// returns the world cup year
// param url(venue)
//
//return column list parseInt(worldCupYearList)

// returns the world cup champnpions
//param url (hosts)
//
//returns list (matchingChampions)

// this returns the runner up of the world cup
// param url (champions)
//
//returns list wmatching (runnerUps.push)




// returns the number of teams in world cup
// param url (years)
//
// returns list parseInt(numberOfTeams)



##### Returns a column from a csv file at the given url as a list.
###### @param url {string} - the url to the raw csv contents
###### @param columnNumber {number} - the column you'd like as a list (the first column is 0)
###### @return column {list} - the list containing the specified column contents
**`function getColumn(url, columnNumber)`**
#

##### A helper function that returns the specified column from a 2D Array.
###### @param matrix {2D array} - the 2D array
###### @param col {number} - the desired column (the first column is 0)
###### @return column {lsit} - the desired column as a list
**`function getCol(matrix, col)`**
