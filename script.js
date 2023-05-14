let elevatorA = {
  id: "a",
  currentFloor: 0,
  state: "idle",
  isOpen: false,
};

let elevatorB = {
  id: "b",
  currentFloor: 6,
  state: "idle",
  isOpen: false,
};
const floors = [0, 1, 2, 3, 4, 5, 6];

let currentFloor = 0;

let currentElevator;

chooseFloor = (floor) => {
  currentFloor = floor;
  //   console.log(floor);
};

callElevator = () => {
  let closestElevator = getClosestElevator(currentFloor);
  if (currentElevator && currentElevator.id == closestElevator.id) {
    closeDoor(currentElevator);
  }
  moveElevator(closestElevator, currentFloor);

  closeDoor = (elevator) => {
    elevator.isOpen = false;
    let elevatorDiv = document.getElementById("lift-" + elevator.id);
    // console.log(elevatorDiv);
    elevatorDiv.style.background = "red";
  };
};

moveElevator = (elevator, toFloor) => {
  let elevatorDiv = document.getElementById("lift-" + elevator.id);
  elevatorDiv.style.backgroundColor = "red";
  if (elevator.isOpen) {
    closeDoor(elevator);
  }
  if (elevator.currentFloor == toFloor) {
    openDoor(elevator);
  } else if (elevator.currentFloor < toFloor) {
    goUp(elevator, toFloor);
  } else {
    goDown(elevator, toFloor);
  }
};
goUp = (elevator, toFloor) => {
  let elevatorDiv = document.getElementById("lift-" + elevator.id);
  setTimeout(() => {
    elevator.currentFloor++;
    elevatorDiv.querySelector(".lift-current-floor").innerHTML =
      elevator.currentFloor;
    if (elevator.currentFloor < toFloor) {
      goUp(elevator, toFloor);
    } else {
      openDoor(elevator);
    }
  }, 1500);
};

goDown = (elevator, toFloor) => {
  let elevatorDiv = document.getElementById("lift-" + elevator.id);
  setTimeout(() => {
    elevator.currentFloor--;
    elevatorDiv.querySelector(".lift-current-floor").innerHTML = currentFloor;
    if (elevator.currentFloor > toFloor) {
      goDown(elevator, toFloor);
    } else {
      openDoor(elevator);
    }
  }, 1500);
};

getClosestElevator = (floor) => {
  return Math.abs(elevatorA.currentFloor - floor) <=
    Math.abs(elevatorB.currentFloor - floor)
    ? elevatorA
    : elevatorB;
};
openDoor = (elevator) => {
  let elevatorDiv = document.getElementById("lift-" + elevator.id);
  elevatorDiv.style.backgroundColor = "green";
  elevator.isOpen = true;
  currentElevator = elevator;
  console.log(elevator);
};
