
const dayArray = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const  MondayWorkout = ["pushup","explosive pushup","diamond pushup","inclicne pushup","knee archer","incline 3 book","band","dumbell drop set 7(5)kg","triceps drop set 5(3)","dip","(0)super set incline3book->incline->explosive->noraml->knee","band streach","1:15;15"]

const TuesdayWorkout = ["pullups","narrow grip","wide grip","band","biceps drop set 6kg(5)","hang 60s","forearmsdown 6kg dropset(5)","forearms up 6kg(4)","1h"]

const WednesdayWorkout= ["crunches","2leg rises","sited crunches","grinder","rusian twist","bicycle","side crunches","walking plank","hang crunch straigt leg"]

const ThursdayWorkout = []

const FridayWorkout = []

let currentDay =0
let currentDayName = document.querySelector(".day")
let workoutDay = document.querySelector(".workout")

function changeDayRight(){
currentDay +=1
if(currentDay>6){currentDay=0}
currentDayName.innerHTML = dayArray[currentDay]
Workouts()
}

function changeDayLeft(){
    currentDay -=1
    if(currentDay<0){currentDay=6}
    currentDayName.innerHTML = dayArray[currentDay]
    Workouts()
    }

function setsMonday(a){

    if(a == 0){
        workoutDay.innerHTML += " 4x10 "
            checkbox(4)
        }
    if(a == 1){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
        }
    if(a == 2){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
        }   
    if(a == 3){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
        }    
    if(a == 4){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }   
    if(a == 5){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
        }  
    if(a == 6){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }  
    if(a == 7){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
        }
    if(a == 8){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
        } 
    if(a == 9){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
        } 
    if(a == 10){
        workoutDay.innerHTML += " to fail "
        checkbox(10)
        }
    if(a == 11){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    }
    


function setsTuesday(a){

    if(a == 0){
        workoutDay.innerHTML += " 5x10 "
        checkbox(5)
    }
    if(a == 1){
        workoutDay.innerHTML += " 1x10 "
        checkbox(1)
    }
    if(a == 2){
        workoutDay.innerHTML += " 1x10 "
        checkbox(1)
    }
    if(a == 3){
        workoutDay.innerHTML += " to fail "
        checkbox(2)
    }
    if(a == 4){
        workoutDay.innerHTML += " 4x10 "
        checkbox(4)
    }
    if(a == 5){
        workoutDay.innerHTML += " 1 "
        checkbox(1)
    }
    if(a == 6){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
    }
    if(a == 7){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
    }
    
    
    }
    
function setsWednesday(a){
    if(a == 0){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
    }
    if(a == 1){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
    }   
    if(a == 2){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
    }
    if(a == 3){
        workoutDay.innerHTML += " 60s "
        checkbox(3)
    }   
    if(a == 4){
        workoutDay.innerHTML += " 60s "
               
    }
    if(a == 5){
        workoutDay.innerHTML += " 60s "
    }
    if(a == 6){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
    }
    if(a == 7){
        workoutDay.innerHTML += " 60s "
        checkbox(3)
    }
    if(a == 8){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
    }
}    
    
    
function setsThursday(a){

    if(a == 0){
        workoutDay.innerHTML += " 3x10 "
        checkbox(3)
    }
    
   
    }

function setsFriday(a){

    if(a == 0){
            workoutDay.innerHTML += " 3x10 "
            checkbox(3)
        }
        
    

        }


function checkbox(number){
    for(b=0; b<number ; b++){
       const box = document.createElement("input")
    workoutDay.innerHTML +="<input type ='checkbox' id='box'>"
    }
}



Workouts()

function Workouts(){

    const margin = document.createElement("div")
    margin.setAttribute("class","margin")

    //monday
    if(currentDay == 0){
        workoutDay.innerHTML = ""
       for(i = 0 ; i<MondayWorkout.length;i++){
           
           workoutDay.innerHTML += MondayWorkout[i]
           setsMonday(i)
           workoutDay.innerHTML += "<br>"
       }
    }
    //Tuesday
    if(currentDay == 1){
        workoutDay.innerHTML = ""
        for(i = 0 ; i<TuesdayWorkout.length;i++){
            workoutDay.innerHTML += TuesdayWorkout[i]
            setsTuesday(i)
            workoutDay.innerHTML += "<br>"
        }
     }

    //Wednesday
    if(currentDay == 2){
        workoutDay.innerHTML = ""
        for(i = 0 ; i<WednesdayWorkout.length;i++){
            workoutDay.innerHTML += WednesdayWorkout[i]
            setsWednesday(i)
            workoutDay.innerHTML += "<br>"
        }
     }
     //Thursday
     if(currentDay == 3){
        workoutDay.innerHTML = ""
        for(i = 0 ; i<ThursdayWorkout.length;i++){
            workoutDay.innerHTML += ThursdayWorkout[i]
            setsThursday(i)
            workoutDay.innerHTML += "<br>"
        }
     }
     //Friday
     if(currentDay == 4){
        workoutDay.innerHTML = ""
        for(i = 0 ; i<FridayWorkout.length;i++){
            workoutDay.innerHTML += FridayWorkout[i]
            setsFriday(i)
            workoutDay.innerHTML += "<br>"
        }
     }
     //else
     if(currentDay == 5 || currentDay == 6){
        workoutDay.innerHTML = "Free Time"
     }
}

