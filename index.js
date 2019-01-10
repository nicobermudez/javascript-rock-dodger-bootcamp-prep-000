/**
 * Don't change these constants!
 */
const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null

/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
 */

function checkCollision(rock) {
  // implement me!
  // use the comments below to guide you!
  const top = positionToInteger(rock.style.top)

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)

    // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
<<<<<<< HEAD
    const dodgerRightEdge = positionToInteger(DODGER.style.left) + 40;
=======
    const dodgerRightEdge = positionToInteger(DODGER.style.right);
>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814

    const rockLeftEdge = positionToInteger(rock.style.left)

    // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
<<<<<<< HEAD
    const rockRightEdge = positionToInteger(rock.style.left) + 20;

    if ((rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) || 
       (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) || (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)) {
=======
    const rockRightEdge = positionToInteger(DODGER.style.right);

    if ((rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) || 
       (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge)) {
>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814
               /**
               * Think about it -- what's happening here?
               * There's been a collision if one of three things is true:
               * 1. The rock's left edge is < the DODGER's left edge,
               *    and the rock's right edge is > the DODGER's left edge;
               * 2. The rock's left edge is > the DODGER's left edge,
               *    and the rock's right edge is < the DODGER's right edge;
               * 3. The rock's left edge is < the DODGER's right edge,
               *    and the rock's right edge is > the DODGER's right edge
               */ 
      return true
    }
  } return false;
}

function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `${x}px`

  // Hmmm, why would we have used `var` here?
  var top = 0

<<<<<<< HEAD
  rock.style.top = `${top}px`
  GAME.appendChild(rock);

=======
  rock.style.top = top

  /**
   * Now that we have a rock, we'll need to append
   * it to GAME and move it downwards.
   */
   GAME.appendChild(rock);
   rock.moveRock();

}
>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814
  /**
   * This function moves the rock. (2 pixels at a time
   * seems like a good pace.)
   */
  function moveRock() {
    if(!rock.parentNode) return;
    // implement me!
    // (use the comments below to guide you!)
    /**
     * If a rock collides with the DODGER,
     * we should call endGame()
     */
     if(checkCollision(rock)) {
<<<<<<< HEAD
       endGame();
=======
       return endGame();
>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814
     }
       
    /**
     * Otherwise, if the rock hasn't reached the bottom of
     * the GAME, we want to move it again.
     */
<<<<<<< HEAD
     if(positionToInteger(rock.style.top) < 400) {
       top += 2;
       rock.style.top = `${top}px`;
       window.requestAnimationFrame(moveRock);
     } else {
       if (rock.parentNode)
       rock.remove();
     }
}
=======
     if(rock.style.top > 0) {
       window.requestAnimationFrame(`${top += 2}"px"`);
     }

>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814
    /**
     * But if the rock *has* reached the bottom of the GAME,
     * we should remove the rock from the DOM
     */
     
  

  // We should kick of the animation of the rock around here
<<<<<<< HEAD
  window.requestAnimationFrame(moveRock);
=======
  
>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814
  // Add the rock to ROCKS so that we can remove all rocks
  // when there's a collision
  ROCKS.push(rock)

  // Finally, return the rock element you've created
  return rock
<<<<<<< HEAD
  
}
=======
  }
>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814

/**
 * End the game by clearing `gameInterval`,
 * removing all ROCKS from the DOM,
 * and removing the `moveDodger` event listener.
 * Finally, alert "YOU LOSE!" to the player.
 */
function endGame() {
<<<<<<< HEAD
  ROCKS.forEach(function(rock){
      if (rock.parentNode)
        rock.remove();
    });
  clearInterval(gameInterval);
  window.removeEventListener('keydown', moveDodger);
  alert("YOU LOSE!")
  return alert;
}

function moveDodger(e) {
  
    // implement me!
=======
  delete gameInterval
  document.getElementById("ROCKS").remove();
  moveDodger.removeEventListener();
  alert("YOU LOSE!")
  return alert;
}
  // implement me!
>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814
  /**
   * This function should call `moveDodgerLeft()`
   * if the left arrow is pressed and `moveDodgerRight()`
   * if the right arrow is pressed. (Check the constants
   * we've declared for you above.)
   * And be sure to use the functions declared below!
   */
<<<<<<< HEAD
   
    if (e.which === LEFT_ARROW) {
      moveDodgerLeft();
      e.preventDefault()
      e.stopPropagation()
    }
    if (e.which === RIGHT_ARROW) {
      moveDodgerRight();
      e.preventDefault()
      e.stopPropagation()
    }
=======
function moveDodger(e) {

  
    if (e.which === LEFT_ARROW) {moveDodgerLeft()}
    if (e.which === RIGHT_ARROW) {moveDodgerRight()}
>>>>>>> 3c1bed728f2907d317a1fe4b6e8fc07615bfb814
}

function moveDodgerLeft() {
  // implement me!
  /**
   * This function should move DODGER to the left
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
   var left = positionToInteger(DODGER.style.left);
   
   function stepLeft() {
     if(left > 0) {
      DODGER.style.left = `${left - 4}px`
     }
   }
   window.requestAnimationFrame(stepLeft);
}


function moveDodgerRight() {
   var left = positionToInteger(DODGER.style.left);
   
   function stepRight() {
     if(left < 360) {
      DODGER.style.left = `${left + 4}px`
     }
   }
   window.requestAnimationFrame(stepRight);
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
