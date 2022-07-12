// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");

    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

    takeoff.addEventListener("click", function(){
        const response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
            let movement = parseInt(rocket.style.bottom) + 10 + "px";
            rocket.style.bottom = movement;
        }
    });

    landing.addEventListener("click", function(){
        window.alert("The shuttle has landed");
        flightStatus.innerHTML = "Mission aborted."
        shuttleBackground.style.backgroundColor = "";
        spaceShuttleHeight.innerHTML = 0;
    });

    up.addEventListener("click", function(){
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        let movement = parseInt(rocket.style.bottom) + 10 + "px";
        rocket.style.bottom = movement;
    });

    down.addEventListener("click", function(){
        spaceShuttleHeight.innerHTML -= 10000;
        let movement = parseInt(rocket.style.bottom) - 10 + "px";
        rocket.style.bottom = movement;
    });

    left.addEventListener("click", function(){
        let movement = parseInt(rocket.style.left) - 10 + "px";
        rocket.style.left = movement;
    });

    right.addEventListener("click", function(){
        let movement = parseInt(rocket.style.left) + 10 + "px";
        rocket.style.left = movement;
    });

});