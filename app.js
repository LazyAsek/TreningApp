
const dayArray = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const WednesdayWorkout = ["pompka","dimond push ups","wybuchowa","wolna pompka","pompka","diamentowo->normalna" ,"pompka z podnoszeniem ronk","smocza pompka","archer pushups","pompka incline","pompka"]

const TuesdayWorkout = ["podciaganie recznik","buterfly","2kg hantel","podciagani normalne bez nog","podciaganie daleko","3kg hantel","podciaganie blisko","podciaganie neutralny bez nog pol","podchwyt klata do drazka","3kg hantel","ironmen","pompki opadajace","angel z butlami","4kg","wiszenie"]

const MondayWorkout = [ "brzuszki",  "wolne brzuszki", "siedzace brzuszki", "side boxing brzuszki", "podnoszenie kolan","podnoszenie nog", "rowerek", "norzyce","v hold","brzuszki kolanowe renka do kolana na bok","deska na boku na bok", "norzyce z podnoszeniem nog","pompka podnoszenie nog","wiszenie podnoszenie nog" ,"wiszenie podnoszenie nog"]

const ThursdayWorkout = ["przysiady","przysiady z wyskokiem","przysiad  czekaniem 5s","podnoszenie 1 nogi(lezenie)","przysiad 1 noga","bulgarian squad skok","opieranie sie o sciane  plecy do sciany","stawanie na palcach ","podwyzszenie hary pota","stawwanie na palcah z hantlem 5 kg"]

const FridayWorkout = ["rowerowa pompka","rowerowa pompka z czekanie","rowerowa pompka z poruszniem","pompka wysuwanie do przodu","side shoulder rises(podnosznie dupy na boku deski","bombowapompka ","wolna rowerowa pompka","pompka z podnoszeniem butealki na bok (raz na ramie)","dotykanie ramion z podwyzszenia","stanie na podwyzszeniu 60","hantel na bok 3kg"]

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
        workoutDay.innerHTML += " 20 "
            checkbox(1)
        }
        
    if(a == 1){
        workoutDay.innerHTML += " 2x20 "
            checkbox(2)
        }
        
    if(a == 2){
        workoutDay.innerHTML += " 20 "
            checkbox(1)
            }
    if(a == 3){
        workoutDay.innerHTML += " 20 "
            checkbox(1)
        }
    if(a == 4){
        workoutDay.innerHTML += " 20 "
            checkbox(1)
            }
    if(a == 5){
        workoutDay.innerHTML += " 2x20 "
            checkbox(2)
            }
    if(a == 6){
        workoutDay.innerHTML += " 60s "
            checkbox(1)
            }
    if(a == 7){
        workoutDay.innerHTML += " 60s "
            checkbox(1)
            }
    if(a == 8){
        workoutDay.innerHTML += " 60s "
            checkbox(1)
            }
    if(a == 9){
        workoutDay.innerHTML += " 2x20 "
            checkbox(2)
        }
    if(a == 10){
        workoutDay.innerHTML += " 20 "
            checkbox(1)
            }
    if(a == 11){
            workoutDay.innerHTML += " 20 "
             checkbox(1)
             }
    if(a == 12){
            workoutDay.innerHTML += " 20 "
              checkbox(1)
              }
    if(a == 13){
        workoutDay.innerHTML += " 2x20 "
             checkbox(2)
             }
     if(a == 14){
        workoutDay.innerHTML += " 2x20s "
         checkbox(2)
         }
}


function setsTuesday(a){

    if(a == 0){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
    }
    
    if(a == 1){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
    }
    
    if(a == 2){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 3){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
    }
    if(a == 4){
        workoutDay.innerHTML += " 1x10 "
        checkbox(1)
        }
    if(a == 5){
         workoutDay.innerHTML += " 2x10 "
        checkbox(2)
          }
    if(a == 6){
        workoutDay.innerHTML += " 1x10 "
        checkbox(1)
        }
    if(a == 7){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 8){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 9){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 10){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
    }
    if(a == 11){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 12){
         workoutDay.innerHTML += " 2x10 "
         checkbox(2)
         }
    if(a == 13){
         workoutDay.innerHTML += " 2x10 "
          checkbox(2)
          }
    if(a == 14){
        workoutDay.innerHTML += " 2x30s "
         checkbox(2)
         }
    }
    
function setsWednesday(a){
    if(a == 0){
        workoutDay.innerHTML += " 40 "
        checkbox(1)
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
        workoutDay.innerHTML += " 1x10 "
        checkbox(1)
    }
    if(a == 4){
        workoutDay.innerHTML += " 30s "
        checkbox(1)
        }
    if(a == 5){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 6){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 7){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 8){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
     if(a == 9){
        workoutDay.innerHTML += " 1x10 "
        checkbox(1)
        }
        if(a == 10){
            workoutDay.innerHTML += " 5x10 "
            checkbox(5)
            }
    }
    
    
function setsThursday(a){

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
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
    }
    if(a == 4){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 5){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 6){
        workoutDay.innerHTML += " 60s "
        checkbox(1)
        }
    if(a == 7){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 8){
        workoutDay.innerHTML += " 2x10 "
        checkbox(2)
        }
    if(a == 9){
         workoutDay.innerHTML += " 4x10 "
         checkbox(4)
         }
    }

function setsFriday(a){

    if(a == 0){
            workoutDay.innerHTML += " 3x10 "
            checkbox(3)
        }
        
    if(a == 1){
            workoutDay.innerHTML += " 2x10 "
            checkbox(2)
        }
        
    if(a == 2){
            workoutDay.innerHTML += " 2x10 "
            checkbox(2)
            }
    if(a == 3){
            workoutDay.innerHTML += " 2x10 "
            checkbox(2)
        }
    if(a == 4){
            workoutDay.innerHTML += " 2x10 "
            checkbox(2)
            }
    if(a == 5){
            workoutDay.innerHTML += " 1x10 "
            checkbox(1)
            }
    if(a == 6){
            workoutDay.innerHTML += " 30s "
            checkbox(1)
            }
    if(a == 7){
            workoutDay.innerHTML += " 2x10 "
            checkbox(2)
            }
    if(a == 8){
            workoutDay.innerHTML += " 40 "
            checkbox(1)
            }
    if(a == 9){
             workoutDay.innerHTML += "s "
             checkbox(1)
             }
             if(a == 10){
                workoutDay.innerHTML += " 2 x 10 na ramie "
                checkbox(1)
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

