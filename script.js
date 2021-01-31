//Selecting canvas element
const canvas = document.querySelector("canvas");
if (canvas.getContext) {
  //make canvas to accept 2D
  const ctx = canvas.getContext("2d");

  let x = 100;
  let y = 100;

  /**
   *Creates a 2D ball
   * @author AmalZorba
   * @param {number} center_x - x coordinate of center of 2D sphere
   * @param {number} center_y - y coordinate of center of 2D sphere
   * @param {number} radius - radius of the circle
   * @return {circle}
   */
  const drawBall = (center_x, center_y, radius) => {
    ctx.beginPath();

    const startingAngle = 0;
    const endingAngle = 2 * Math.PI;
    ctx.arc(center_x, center_y, radius, startingAngle, endingAngle);
    ctx.fillStyle = "red";
    ctx.fill();
  };

  canvas.addEventListener("keydown", function (e) {
    //37,38,39,40 are the ASCII codes to arrow keys on clockwise from left arrow key
    //left arrow
    if (e.keyCode === 37) {
      x--;
    }
    //up arrow
    if (e.keyCode === 38) {
      y++;
    }
    //right arrow
    if (e.keyCode === 39) {
      x++;
    }
    //down arrow
    if (e.keyCode === 40) {
      y--;
    }
  });
  drawBall(x, y, 20);
}
