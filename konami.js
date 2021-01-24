document.addEventListener("DOMContentLoaded", function (event) {
  new CheatCodeListener();
});
/** Class that introduces a listener for a special cheat code input **/
class CheatCodeListener {
  /**
   * @desc Set up game
   */
  constructor() {
    this.validInputs = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "KeyA",
      "KeyB",
    ];
    this.cheatCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];
    this.playerInput = [];
    this.isActive = false;
    // this.particleSystem = new ParticleSystem();
    document.addEventListener("keydown", this.onKeydown.bind(this));
  }

  /**
   * @desc Listen for key presses
   * @param {KeyboardEvent} e
   *
   * Relevant keycodes:
   * Up: ArrowUp
   * Down: ArrowDown
   * Left: ArrowLeft
   * Right: ArrowRight
   * A: KeyA
   * B: KeyB
   * Enter: Enter
   */
  onKeydown(e) {
    const keyCode = e.code;
    if (this.validInputs.includes(keyCode)) {
      this.playerInput.push(keyCode);
      this.checkInput();
    } else {
      this.resetInput();
    }
  }

  /**
   * @desc Reset player input to an empty array
   */
  resetInput() {
    this.playerInput = [];
  }

  /**
   * @desc Check current input against previous inputs. If it doesn't match the code sequence, reset.
   */
  checkInput() {
    for (let i = 0; i < this.playerInput.length; i++) {
      if (this.playerInput[i] !== this.cheatCode[i]) {
        this.resetInput();
        return;
      }
    }

    // If player input is as long as the cheat code and all keycodes match at each position, toggle isActive
    if (this.playerInput.length === this.cheatCode.length) {
      const canvasCheck = document.getElementById("canvas");
      if (canvasCheck === null) {
        this.isActive = !this.isActive;
        this.resetInput();
        // this.particleSystem.init();
        // eslint-disable-next-line no-console
        console.log("You did it! Cheat code activated.");
      }
    }
  }

  tearDown() {
    document.removeEventListener("keydown", this.onKeydown.bind(this));
  }
}
