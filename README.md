# Landing Page Project
## The Process

I used the starter code and changed the styling a bit. The original HTML only had 3 sections, so I used javascript to add a 4th before creating the navbar dynamically. I added functionality for scrolling to anchors and event listeners for active states. I then checked the styling and functionality on different sized screens.

## Challenges
I mainly struggled with getting the active states to work. I was able to use getBoundingClientRect() pretty easily for large sized screens, but ran into issues with mobile sized screens. My active state wouldn't show up in the middle of a long text, only on the top or bottom, so I had to adjust my boundary in my if statement to solve the problem.
