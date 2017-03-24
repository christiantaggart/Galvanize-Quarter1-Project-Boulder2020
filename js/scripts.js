document.addEventListener("DOMContentLoaded", function() {





    //Grab player verticies
    //   $.get('objects/player.obj').then(function(response) {
    //       window.player = response;
    //       // turning text to arrays
    //       let lines = response.split("\n");
    //
    //       let keyz = ['x', 'y', 'z']
    //       let hash = {};
    //       let pArr = []
    //       let pCheck = []
    //       let pCoords;
    //
    //       //Grabbing just verticies by filtering text that has v followed by a space
    //       let lines_starting_with_v_space = lines.filter(function(line) {
    //
    //           //checks if string starts with 'v '
    //           let correctString = line.indexOf('v ') === 0
    //           //push into empty array
    //           if (correctString) {
    //               pCoords = line.replace('v ', '').split(' ')
    //               pArr.push(pCoords)
    //
    //           }
    //       });
    //
    // console.log(pArr);


    //Grab Campus verticies
    // $.get('objects/smallerCampus75.obj').then(function(response) {
    //     window.campus = response;
    //     // turning text to arrays
    //     let lines = response.split("\n");
    //
    //     let keyz = ['x', 'y', 'z']
    //     let hash = {};
    //     let vArr = []
    //     let check = []
    //     let coords;

    // //Grabbing just verticies by filtering text that has v followed by a space
    // let lines_starting_with_v_space = lines.filter(function(line) {
    //
    //     //checks if string starts with 'v '
    //     let correctString = line.indexOf('v ') === 0
    //     //push into empty array
    //     if (correctString) {
    //         coords = line.replace('v ', '').split(' ')
    //         vArr.push(coords)
    //
    //     }
    // });

    // let newObj = {};
    // for (let coords of vArr) {
    //   if(newObj.hasOwnProperty(coords[0])){}
    //   else{
    //     newObj[coords[0]] = {};
    //   }
    //   if(newObj[coords[0]].hasOwnProperty(coords[1])){}
    //   else{
    //     newObj[coords[0]][coords[1]] = {}
    //   }
    //   if(newObj[coords[0]][coords[1]].hasOwnProperty(coords[2])){}
    //   else{
    //     newObj[coords[0]][coords[1]][coords[2]] = "exists"
    //   }
    // }
    // console.log(newObj);

    // console.log(check);
    // let newObj = {};
    // for(let object of check){
    //   if(newObj.hasOwnProperty(object.x)){}
    //   else {
    //     newObj[object.x] = {}
    //   }
    //   if()
    // }




    //Grabbing camera

    // Changed from hacker to player
    let cameraEl = document.querySelector('#hacker');

    //Grabbing Current Player position
    cameraEl.addEventListener('componentchanged', function(evt) {
        if (evt.detail.name !== 'position') {
            return;
        }
        //current Player Position
        let pos = evt.detail.newData

        let roundedPos = {
          x: Math.floor(pos.x),
          y: Math.floor(pos.y),
          z: Math.floor(pos.z)
        }
        // console.log("current pos rounded", roundedPos);


        // if(newObj.hasOwnProperty(roundedPos.x)){
        //   if(newObj[roundedPos.x].hasOwnProperty(roundedPos.y)){
        //
        //     //console.log(roundedPos.y, newObj[roundedPos.x][roundedPos.y]);
        //     if(newObj[roundedPos.x][roundedPos.y].hasOwnProperty(roundedPos.z)){
        //       console.log(roundedPos.z);
        //       console.log("collision");
        //     }
        //   }
        // }





    var playerEl = document.querySelector('#hacker');

    let movePlayer = (roundedPos1) => {
        playerEl.setAttribute('position', {
                x:roundedPos1.x,
                y: 50,
                z: roundedPos1.z
            });

    }

    document.body.onkeyup = function(e) {

        if (e.keyCode == 32) {
          console.log("hi");
            movePlayer(roundedPos)
        }
        if (e.keyCode == 88) {
            //your code
            back(roundedPos)
        }
    }

    let back = (roundedPos) => {
        playerEl.setAttribute('position',
            {
                x: roundedPos.x,
                y: 15,
                z: roundedPos.z
              })
    }




    // document.body.onkeyup = function(e) {
    //
    // }

  });


  // const typing = (event) => {
  //     // HAND MOVEMENT(Typing)
  //     console.log("typing");
  //     // $('#rH').append('<a-animation attribute="rotation" from="-90 0 30" to="0 0 30" direction="normal" dur="100" repeat="1" easing="ease"></a-animation>')
  //     // // console.log("CLICK");
  //     // $('#lH').append('<a-animation attribute="rotation" from="90 90 -60" to="90 60 -60" direction="normal" dur="100" repeat="1" easing="ease" ></a-animation>')
  // }

  const typer = (event) => {
      //HAND MOVEMENT RETURN TO ORIG POS
      // console.log('click');
      $('#rH').append('<a-animation attribute="rotation" from="0 0 30" to="-90 0 30" direction="alternate" dur="20" repeat="20" easing="ease"></a-animation>')

      $('#lH').append('<a-animation attribute="rotation" from="90 60 -60" to="90 90 -60" direction="alternate" dur="20" repeat="20" easing="ease" ></a-animation>')
  }

// const follow = (event) =>{
//   $('#enemy').attr(`position=${(roundedPos.x + -10),(rounded)}`)
//
// }


    document.querySelector('body').addEventListener("mousedown", function() {
        // typing()
        typer()

    })

    //Move eventListener
    //     });
    // var campusEl = document.querySelector('#campus')
    // console.log(campusEl);
    // // var playerEl = document.querySelector('#player');
    // // playerEl.body.applyImpulse(
    // //   new CANNON.Vec3(0, 50, 0),
    // //   new CANNON.Vec3().copy(playerEl.getComputedAttribute('position'))
    // // )
    //
    // playerEl.addEventListener('collide', function(e) {
    //     console.log("collsiions");
    //     console.log('Player has collided with body #' + e.detail.body.id);
    //     console.log(e.detail.contact);
    //     e.detail.target.playerEl; // Original entity (playerEl).
    //     e.detail.body.el; // Other entity, which playerEl touched.
    //     e.detail.contact; // Stats about the collision (CANNON.ContactEquation).
    //     e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
    // });








    //     //END
})
