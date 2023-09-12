/*   STEP 1   */
export const leagueID = "991790698611388416"; // your league ID
export const leagueName = "Buncha Monkeys"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Buncha Monkeys Fantasy Football League. Established in 2015, we have seen tremendous growth and interest within our league. Our league is filled with top competitors (excluding Sameer and Saketh).</p>
  <p>Originally deployed on Yahoo Fantasy, we have transitioned to Sleeper this, and are excited for the future on this platform. What started out as just a meme fantasy league in 2015, with random members (e.g. kids from the North tennis team), we are now 12-managers strong with fierce competition.</p>
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
      "roster": 1
      "managerID": "991794411807784960",  
      "name": "Saat Garhwal",
      "location": "Walpole, MA",
      "bio": "A new member to the league who's looking to build upon the recent success of past newcomers. He's a DJ on the weekends and likes to give Anish heart attacks with his car problems, we'll see how well he can manage in his first year.",
      "mode": "Rebuild",
      "philosophy": "Pull up to the Point Saturday night",
    },
    {
      "roster": 2
      "managerID": "729428100005355520",
      "name": "Sameer Pasumarthy",
      "location": "Bumfuck, VA",
      "bio": "A seasoned vet who has had no success within the league. He knows everything about football, but can't translate it to wins. Truly astonishing, but we are rooting for the vengeance tour.",
      "mode": "Rebuild", 
      "philosophy": "Trust the process and get the 1st pick.",
    },
    {
      "roster": 3
      "managerID": "992228618803712000",
      "name": "Vik Vakati",
      "location": "Canton, MA",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Rebuild", 
      "philosophy": "I'm down, but I'm broke.",
    },
    {
      "roster": 4
      "managerID": "992127700795981824",
      "name": "Vikku Ponnaganti",
      "location": "Mansfield, MA (Parents house)",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Dynasty", 
      "philosophy": "Imma win prolly.",
    },
    {
      "roster": 5
      "managerID": "991843428793176064",
      "name": "Rithvik Pottepalem",
      "location": "Sharon, MA",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Win Now", 
      "philosophy": "******, IYKYK.",
    },
    {
      "roster": 6
      "managerID": "991796029043396608",
      "name": "Bittu Macha",
      "location": "Mansfield, MA (Parents house for now)",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Rebuild", 
      "philosophy": "I'm horny.",
    },
    {
      "roster": 7
      "managerID": "992139621481984000",
      "name": "Sai Kamsani",
      "location": "Boston, MA",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Win Now", 
      "philosophy": "I hope Mango fails her MCAT.",
    },
    {
      "roster": 8
      "managerID": "860679694410952704",
      "name": "Gokul Mahadevan",
      "location": "Killadelphia, PA",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Win Now", 
      "philosophy": "It's all about the locker room.",
    },
    {
      "roster": 9
      "managerID": "992135278414344192",
      "name": "Saketh Uppuluri",
      "location": "North Attleboro, MA",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Rebuild", 
      "philosophy": "Defense is key.",
    },
    {
      "roster": 10
      "managerID": "992128255719215104",
      "name": "Vishal Bhimarasetty",
      "location": "New Orleans, LA",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Rebuild", 
      "philosophy": "I'm down, but I'm broke.",
    },
    {
      "roster": 11
      "managerID": "99226936195825664",
      "name": "Matt Ferrara",
      "location": "Somewhere in TX",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Win Now", 
      "philosophy": "I'm down, but I'm broke.",
    },
    {
      "roster": 12
      "managerID": "871945812865916928",
      "name": "Krishna Vijayakumar",
      "location": "Attleboro, MA",
      "bio": "A sly team manager who makes lowkey moves. Will either explode or put up a stinker on any given week. He'll pay attention for the first 6-8 rounds of the draft, and then let autopick do the work. Could this be his year?",
      "mode": "Win Now", 
      "philosophy": "I'm down, but I'm broke.",
    },
]
