/*   STEP 1   */
export const leagueID = "991790698611388416"; // your league ID
export const leagueName = "Buncha Monkeys"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Buncha Monkeys Fantasy Football League. Established in 2015, we have seen tremendous growth and interest within our league. Our league is filled with top competitors (excluding Sameer and Saketh).</p>
  <p>Originally deployed on Yahoo Fantasy, we have transitioned to Sleeper this year, and are excited for the future on this platform. What started out as just a meme fantasy league in 2015, with random members (e.g. kids from the North tennis team), we are now 12-managers strong with fierce competition.</p>
  <p>As commisioner of the league, I am proud to continually innovate ideas and strategies to make the league better each year. With the introduction of our podcast last year, (hosted by Gokul and Bittu), addition of new members, updating the scoring system, and the live in-person draft we are pushing innovation to its extreme.</p>
  <p>I welcome you to our beloved league, and hope you enjoy.</p>
  <p>Sincerely,</p>
  <p>Gokul Mahadevan Pharm.D.</p>
  <p>Commissioner & Former League Champion</p>
`;

export const managers = [
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    {
      "roster": 1,
      "managerID": "991794411807784960",  
      "name": "Saat Garhwal",
      "location": "Walpole, MA",
      "bio": "A new member to the league who's looking to build upon the recent success of past newcomers. He's a DJ on the weekends and likes to give Anish heart attacks with his car problems, we'll see how well he can manage in his first year.",
      "mode": "Rebuild",
      "philosophy": "Pull up to the Point Saturday night",
    },
    {
      "roster": 2,
      "managerID": "729428100005355520",
      "name": "Sameer Pasumarthy",
      "location": "Bumfuck, VA",
      "bio": "A seasoned vet who has had no success within the league. He knows everything about football, but can't translate it to wins. Truly astonishing, but we are rooting for the vengeance tour.",
      "mode": "Rebuild", 
      "philosophy": "Trust the process and get the 1st pick.",
    },
    {
      "roster": 3,
      "managerID": "992228618803712000",
      "name": "Vik Vakati",
      "location": "Canton, MA",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Rebuild", 
      "philosophy": "I'm down, but I'm broke.",
    },
    {
      "roster": 4,
      "managerID": "992127700795981824",
      "name": "Vikku Ponnaganti",
      "location": "Mansfield, MA (Parents house)",
      "bio": "A 2-time champion who has cemented himseld in the HOF. However, he's been heavily focused on the BLU240 and anything car-related, so maybe he won't go back 2 back.",
      "mode": "Dynasty", 
      "philosophy": "Imma win prolly.",
    },
    {
      "roster": 5,
      "managerID": "991843428793176064",
      "name": "Rithvik Pottepalem",
      "location": "Sharon, MA",
      "bio": "Always a solid manager who contends every year. However, his playoff history hasn't had much success as he has yet to reach the championship. Hopefully he can use his racist energy to turn it up in the playoffs.",
      "mode": "Win Now", 
      "philosophy": "******, IYKYK.",
    },
    {
      "roster": 6,
      "managerID": "991796029043396608",
      "name": "Bittu Macha",
      "location": "Mansfield, MA (Parents house for now)",
      "bio": "A one-and-done manager. Started off as a champion in the league's first season, and has done nothing since. The Aaron Rodgers of fantasy and a thief when it comes to the trade market. All he can do now is pray that Taylor gets traded.",
      "mode": "Rebuild", 
      "philosophy": "I'm horny.",
    },
    {
      "roster": 7,
      "managerID": "992139621481984000",
      "name": "Sai Kamsani",
      "location": "Boston, MA",
      "bio": "A smart manager who recently entered the league like a veteran. Has had success in his first 2 seasons, but is just 1 step away from the gold. He wants to be compared to Michael Phelps, but it's hard when you don't have any trophies.",
      "mode": "Win Now", 
      "philosophy": "I hope Mango fails her MCAT.",
    },
    {
      "roster": 8,
      "managerID": "860679694410952704",
      "name": "Gokul Mahadevan",
      "location": "Killadelphia, PA",
      "bio": "The Lebron of the league. Has 1 champion, yet has made the championship 3 times. IS considerably mid during the regular season, but works his locker room magic in the playoffs for a deep playoff run. Time will tell to see if he can return to the promiseland.",
      "mode": "Win Now", 
      "philosophy": "It's all about the locker room.",
    },
    {
      "roster": 9,
      "managerID": "992135278414344192",
      "name": "Saketh Uppuluri",
      "location": "North Attleboro, MA",
      "bio": "Making his return from his 8 year hiatus. One of the original members of when the league was first created. He has no football knowledge as he drafted Alex Armah in the 3rd round. After going on autopick this year, he finally has a decent team, and could makde some noise.",
      "mode": "Rebuild", 
      "philosophy": "Defense is key and Bill Russell was the QB before Brady.",
    },
    {
      "roster": 10,
      "managerID": "992128255719215104",
      "name": "Vishal Bhimarasetty",
      "location": "New Orleans, LA",
      "bio": "Has always had a good roster every year, however, pays no attention throughout the season. The lineup from the draft will be the lineup throughout the year. Who knows, maybe this is the year he tries?",
      "mode": "Rebuild", 
      "philosophy": "Oh shit, didn't realize the time zone difference.",
    },
    {
      "roster": 11,
      "managerID": "99226936195825664",
      "name": "Matt Ferrara",
      "location": "Somewhere in TX",
      "bio": "The one white guy in the league. Has had great successs ever since joining, and ultimately coming within decimal points of a championship, this team is poised to break into the history books.",
      "mode": "Win Now", 
      "philosophy": "*cracks the whip* Get back to work.",
    },
    {
      "roster": 12,
      "managerID": "871945812865916928",
      "name": "Krishna Vijayakumar",
      "location": "Attleboro, MA",
      "bio": "2-time champion coming off a terrible season. The lord is hungry for a 3rd title, and show everyone who still runs the league. Will he return to glory?",
      "mode": "Win Now", 
      "philosophy": "I'm so ripped that I beat my players if they don't perform",
    },
]
