var string = "There once was a speedy Hare who bragged about how fast he could run. Tired of hearing him boast, the Tortoise challenged him to a race. All the animals in the forest gathered to watch." +

"The Hare ran down the road for a while and then paused to rest. He looked back at the tortoise and cried out, \"How do you expect to win this race when you are walking along at your slow, slow pace?\"" +
"The Hare stretched himself out alongside the road and fell asleep, thinking, \"There is plenty of time to relax.\"" +
"The Hare and the Tortoise StoryThe Tortoise walked and walked; never ever stopping until he came to the finish line." +
"The animals who were watching cheered so loudly for Tortoise that they woke up Hare. The Hare stretched, yawned and began to run again, but it was too late. Tortoise had already crossed the finish line." +
"\n MORAL: SLOW AND STEADY WINS THE RACE";

   function add(i) {
       console.log(i);
       if(i >= string.length) {
           return true;
       }
       document.getElementById("story").innerHTML += string.substr(i, 4);
       i += 4;
       setTimeout(add(i), 4000);
   }