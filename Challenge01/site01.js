const marvelHeroes = [
    "Ant-Man",
    "Black Panther",
    "Black Widow",
    "Captian America",
    "Doctor Strange",
    "Hawkeye",
    "Hulk",
    "Iron Man",
    "Luke Cage",
    "Moon Knight",
    "Ms. Marvel",
    "Scarlet Witch",
    "Spider-Man",
    "Thor",
    "Wasp"
]
//driver function used for display and passing values.
function findHero()
{
    //implement funtion findLongestString that returns the longest word.
    let lowrd = findLongestString(marvelHeros);

    //used for display. no need to change
    document.getElementById("result").innerHTML = lword;

    //extra creidt display all of the heroes to the page
    document.getElementById("namelist").innerHTML = marvelHeros.join(" | ");
}

//takes an array of string and returns the longest one.
function findLongestString(namesArray)
{
    //declare a variable
    let lstring = "";

    for (let index = 0; index < namesArray.length; index++) {
        if (namesArray[index].length > lstring.length) {
            lstring = namesArray[index];
        }
        
    }
    return "";
}