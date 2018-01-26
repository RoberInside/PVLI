(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],2:[function(require,module,exports){
//funciones auxiliares para que los tiempos sean más llevaderos:
function seconds(n) {
  return n*1000;
}
function minutes(n){
  return n * 60 * 1000;
}

//time is in ms by default you can use the auxiliar functions above to make ir more easy to read an write
module.exports = [//LEVEL01

  {
     time :2000,
     enemies :
      [
      //enemigo 1
        {
           posX :300,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },
          //enemigo 1
          {
           posX :600,
           posY :-60,
           VelX :10,
           VelY :0,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          }          
        ]//enemies
    },//instant

    {
     time : 5000,
     enemies :[
     //enemigo 1
     {
           posX :200,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
          }
      },
      //enemigo 1
      {
           posX :400,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
      //enemigo 1
      {
           posX :500,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
      //enemigo 1
      {
           posX :300,
           posY :-100,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
      //enemigo 1
      {
           posX :600,
           posY :-100,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      }
     ]//enemies
    },//instant
    
  {
     time : 4000,
     enemies :[
     //enemigo 1
     {
           posX :300,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
      //enemigo 1
     {
           posX :300,
           posY :-100,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
      //enemigo 1
     {
           posX :600,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
      //enemigo 1
     {
           posX :600,
           posY :-100,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      }
      ]//enemies
    },//instant  
   
  {
     time : 7000,
     enemies :[
     //Boss 1
     {
           posX :400,
           posY :-10,
           VelX :0,
           VelY :3,
           life :500,
           sprite : 'Boss1' ,
           damage :250,
           coolDown :500,
           bulletSprite : 'Boss1_shoot' ,
           bulletVelocity: 70,
           pattern :
          {
             type : 'Wave' ,
             scope :120.0,
             nProj :3
          }
      }
      ]//enemies
    }//instant
  
]//fin nivel
},{}],3:[function(require,module,exports){
//funciones auxiliares para que los tiempos sean más llevaderos:
function seconds(n) {
  return n*1000;
}
function minutes(n){
  return n * 60 * 1000;
}

//time is in ms by default you can use the auxiliar functions above to make ir more easy to read an write
module.exports = [//LEVEL02
  {
     time :3000,
     enemies :
      [
      //enemigo 2
        {
           posX :300,
           posY :-60,
           VelX :0,
           VelY :10,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
          //enemigo 2
          {
           posX :400,
           posY :-60,
           VelX :0,
           VelY :10,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
          //enemigo 2
          {
           posX :500,
           posY :-60,
           VelX :0,
           VelY :10,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
          //enemigo 2
          {
           posX :600,
           posY :-60,
           VelX :0,
           VelY :10,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          }
        ]//enemies
    },//instant
      
    {
     time :2000,
     enemies :
      [
      //enemigo 1
        {
           posX :830,
           posY :60,
           VelX :-40,
           VelY :0,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },
          //enemigo 1
        {
           posX :-60,
           posY :60,
           VelX :40,
           VelY :0,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          }        
        ]//enemies
      },//instant 

 
    {
     time :1000,
     enemies :
      [
      //enemigo 2
        {
           posX :-40,
           posY :-40,
           VelX :20,
           VelY :20,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
        ]//enemies
      },//instant
 
    {
     time :2000,
     enemies :
      [
      //enemigo 2
        {
           posX :860,
           posY :-60,
           VelX :-20,
           VelY :20,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
          //enemigo 2
        {
           posX :400,
           posY :-60,
           VelX :0,
           VelY :30,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
          //enemigo 1
        {
           posX :890,
           posY :80,
           VelX :-20,
           VelY :0,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },
          //enemigo 1
        {
           posX :60,
           posY :60,
           VelX :20,
           VelY :0,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },
        ]//enemies
      },//instant
 
    {
     time :5000,
     enemies :
      [
      //Boss 2
        {
           posX :400,
           posY :10,
           VelX :0,
           VelY :0,
           life :1250,
           sprite : 'Boss2' ,
           damage :350,
           coolDown :1500,
           bulletSprite : 'Boss2_shoot',
           bulletVelocity:40,
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :5
            }
          }
        ]//enemies
    }//instant
  
]//fin nivel
},{}],4:[function(require,module,exports){
//funciones auxiliares para que los tiempos sean más llevaderos:
function seconds(n) {
  return n*1000;
}
function minutes(n){
  return n * 60 * 1000;
}

//time is in ms by default you can use the auxiliar functions above to make ir more easy to read an write
module.exports = [//LEVEL03
  {
     time :5000,
     enemies :
      [
      //enemigo 3
        {
           posX :-60,
           posY :-60,
           VelX :20,
           VelY :20,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          },
          //enemigo 3
        {
           posX :860,
           posY :-60,
           VelX :-20,
           VelY :20,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          }
        ]//enemies
    },//instant

    {
     time :3500,
     enemies :
      [
        {
          //enemigo 3
           posX :400,
           posY :-50,
           VelX :0,
           VelY :-10,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          },
          //enemigo 2
        {
           posX :300,
           posY :-100,
           VelX :0,
           VelY :-20,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
            //enemigo 2
        {
           posX :500,
           posY :-100,
           VelX :0,
           VelY :-20,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
           //enemigo 1
        {
           posX :400,
           posY :-200,
           VelX :0,
           VelY :-30,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          }
       ]//enemies
    },//instant

    {
     time :1000,
     enemies :
      [
           //enemigo 1
        {
           posX :400,
           posY :-60,
           VelX :0,
           VelY :-30,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },
          //enemigo 1
        {
           posX :860,
           posY :-60,
           VelX :-30,
           VelY :30,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },
          //enemigo 1
        {
           posX :-60,
           posY :-60,
           VelX :30,
           VelY :30,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
            }
          }      
       ]//enemies
    },//instant
  
    {
     time :2000,
     enemies :
      [
        {
          //enemigo 3
           posX :200,
           posY :-60,
           VelX :0,
           VelY :20,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          },
          {
          //enemigo 3
           posX :600,
           posY :-60,
           VelX :0,
           VelY :20,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          },
          //enemigo 2
        {
           posX :-60,
           posY :60,
           VelX :5,
           VelY :0,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:50,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
              //enemigo 2
        {
           posX :860,
           posY :60,
           VelX :-15,
           VelY :0,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:50,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
            //enemigo 1
        {
           posX :460,
           posY :-100,
           VelX :0,
           VelY :50,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },      
          //enemigo 3
        {
           posX :-60,
           posY :60,
           VelX :15,
           VelY :0,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          },      
            //enemigo 1
        {
           posX :860,
           posY :60,
           VelX :-15,
           VelY :0,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          }      
       ]//enemies
    },//instant

    {
     time :5000,
     enemies :
      [
      //Boss 3
        {
           posX :400,
           posY :-20,
           VelX :0,
           VelY :-50,
           life :1750,
           sprite : 'Boss3' ,
           damage :150,
           coolDown :1000,
           bulletSprite : 'Boss3_shoot' ,
           bulletVelocity:50,
           pattern :
          {
             type : 'Wave' ,
             scope :100.0,
             nProj :4
            }
          },
            //enemigo 1
        {
           posX :470,
           posY :-100,
           VelX :0,
           VelY :5,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },      
            //enemigo 1
        {
           posX :330,
           posY :-100,
           VelX :0,
           VelY :5,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },           
            //enemigo 1
        {
           posX :-60,
           posY :60,
           VelX :10,
           VelY :0,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
          },      
            //enemigo 1
        {
           posX :860,
           posY :60,
           VelX :-10,
           VelY :0,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave',
             scope :90.0,
             nProj :1
           }
          }      
       ]//enemies
    }//time  
]//fin NIvel
},{}],5:[function(require,module,exports){
//funciones auxiliares para que los tiempos sean más llevaderos:
function seconds(n) {
  return n*1000;
}
function minutes(n){
  return n * 60 * 1000;
}

//time is in ms by default you can use the auxiliar functions above to make ir more easy to read an write
module.exports = [//LEVEL04
  {
     time :2000,
     enemies :
      [
      //BossFinal1
        {
           posX :300,
           posY :40,
           VelX :0,
           VelY :0,
           life :2000,
           sprite : 'Boss4_1' ,
           damage :250,
           coolDown :1000,
           bulletSprite : 'Boss4_1_shoot' ,
           bulletVelocity: 100,
           pattern :
          {
             type : 'Wave' ,
             scope :120.0,
             nProj :4
            }
          },
          //BossFinal2
          {
           posX :500,
           posY :40,
           VelX :0,
           VelY :0,
           life :2000,
           sprite : 'Boss4_2' ,
           damage :500,
           coolDown :2000,
           bulletSprite : 'Boss4_2_shoot' ,
           bulletVelocity: 60,
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :5
            }
          }
       ]//enemies
    },//instant
  
   //Garrison bosses
  {
     time :4000,
     enemies :
      [
        //enemigo 1
        {
           posX :660,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
       //enemigo 1
      {
           posX :240,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
       //enemigo 1
      {
           posX :400,
           posY :-60,
           VelX :0,
           VelY :10,
           life :60,
           sprite : 'enemy1' ,
           damage :100,
           coolDown :1000,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:30, 
           pattern :
          {
             type : 'Wave' ,
             scope :90.0,
             nProj :1
           }
      },
        //enemigo 2
        {
           posX :100,
           posY :-100,
           VelX :0,
           VelY :30,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
            //enemigo 2
        {
           posX :440,
           posY :-100,
           VelX :0,
           VelY :30,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
            //enemigo 2
        {
           posX :600,
           posY :-100,
           VelX :0,
           VelY :30,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
            //enemigo 2
        {
           posX :680,
           posY :-100,
           VelX :0,
           VelY :30,
           life :20,
           sprite : 'enemy2' ,
           damage :50,
           coolDown :750,
           bulletSprite : 'enemy_shoot' ,
           bulletVelocity:70,
           pattern :
          {
             type : 'Wave' ,
             scope :110.0,
             nProj : 3
            }
          },
          {
          //enemigo 3
           posX :100,
           posY :-150,
           VelX :0,
           VelY :20,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          },
          {
          //enemigo 3
           posX :400,
           posY :-150,
           VelX :0,
           VelY :20,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          },
          {
          //enemigo 3
           posX :600,
           posY :-150,
           VelX :0,
           VelY :20,
           life :200,
           sprite : 'enemy3' ,
           damage :150,
           coolDown :1250,
           bulletSprite : 'enemy_shoot',
           bulletVelocity: 50,
           pattern :
          {
             type : 'Wave' ,
             scope :45.0,
             nProj :2
            }
          },
        ]//enemies
    }//instant  
]
},{}],6:[function(require,module,exports){
var Projectile = require('./Projectile.js')
var Pattern = require('./Pattern.js')

var Enemy = function(state, enemyData)
{

	Phaser.Sprite.call(this, state.game, enemyData.posX, enemyData.posY, enemyData.sprite);
	this.state = state;
	this.game = state.game;
	this.game.physics.enable(this);

	this.body.velocity.x = enemyData.velX;
	this.body.velocity.y = enemyData.velY;
	this.life = enemyData.life;
	this.bulletVelocity = enemyData.bulletVelocity;
	this.bSprite = enemyData.bulletSprite;
	this.shootColdDown = enemyData.coolDown;
	this.damage = enemyData.damage;

	this.pattern = new Pattern(
		this, enemyData.pattern.type, 
		this.shootColdDown, enemyData.pattern.nProj, 
		enemyData.pattern.scope
	);
	this.shootSound = this.game.add.audio('shootSound');

};
Enemy.prototype = Object.create (Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;


Enemy.prototype.hurt = function (dmg) {
	this.life -= dmg;
	if (this.life <= 0)
			this.kill();
};

Enemy.prototype.createBullet = function (dirX ,dirY) {
	this.shootSound.play();
	let bullet = new Projectile(
		this.state, this.game, 
		this.x, this.y, 
		dirX*this.bulletVelocity, dirY*this.bulletVelocity,
		this.damage, true, this.bSprite
		);
	this.game.add.existing(bullet);
	this.state.enemyBullets.push(bullet);
	//debug(bullet, this)
}

module.exports = Enemy;
function debug(bullet, e){
	console.log('Created bullet  from enemy ', +  e.id + ' with ( ' + bullet.body.velocity.x +', ' + bullet.body.velocity.y + ' ) velocity');
}
},{"./Pattern.js":8,"./Projectile.js":10}],7:[function(require,module,exports){
/*Ir descomentando conforme se vayan implementando*/
const Enemy = require('./Enemy.js');

const level01 = require('../data/level01.js');
const level02 = require('../data/level02.js');
const level03 = require('../data/level03.js');
const level04 = require('../data/level04.js');

const LEVELS = [level01, level02, level03, level04];

function LevelManager(ps/*stands for playScene*/) {
	this.level = [];
	this.levelIndex = 0;
	this.currentInstant = 0;
	this.instanciateEnemys = function(){
		var currentInstant = this.currentInstant;//save the current instant
		this.addNextInstant();//add the next callback

		for(e of this.level[currentInstant].enemies){
			ps.enemies.add(new Enemy (ps, e));
		}
	}
	this.addNextInstant = function () {
		if (this.currentInstant < this.level.length -1){
			ps.game.time.events.add(this.level[this.currentInstant].time + ps.timer.ms, this.instanciateEnemys, this);
			this.currentInstant++;	
		}
	};
	this.init = function(){
		this.level = level01;
		this.addNextInstant();
	}
	this.nextLevel = function(){
		if (this.levelIndex + 1  < LEVELS.length)
		{
			this.levelIndex+=1;
			level = LEVELS[this.levelIndex];
			this.addNextInstant();
		}else return false;
	}






}
module.exports = LevelManager;
},{"../data/level01.js":2,"../data/level02.js":3,"../data/level03.js":4,"../data/level04.js":5,"./Enemy.js":6}],8:[function(require,module,exports){
function inRadians(degrees) {
  return (degrees*Math.PI/180);
}

var Pattern = function (enemy, type, cadency, nProjectiles, scope) {
  this.enemy = enemy;
  this.nProjectiles = nProjectiles;
  this.scope = inRadians(scope);
  this.type = type;
  this.sentido = true;
  this.patterns = {};
  this.tick = function(){
  	this.patterns[this.type](this);
  };
  enemy.game.time.events.loop(cadency, this.tick, this);

  //WAVE PATTERN
  this.patterns.Wave = function(self) {
    var initialAngle = Math.PI - self.scope;
    for (var i = 0; i < self.nProjectiles; i++)
    {
      let theta = initialAngle + (self.scope/(nProjectiles+1))*i;
      let dx = Math.cos(theta);
      let dy = Math.sin(theta);
      self.enemy.createBullet(dx, dy);
    }

  };
  //SPRING PATTERN
  this.patterns.Spring = function (self) {
    self.initialAngle = Math.PI - self.scope;
    self.finalAngle = initialAngle + scope;
    self.incr = scope/self.nProjectiles;
    if (self.theta > self.finalAngle || self.theta < initialAngle) self.sentido = !self.sentido;
    self.sentido ? self.theta -= self.incr : self.theta += self.incr; 
    let dx = Math.cos(self.theta);
    let dy = Math.sin(self.theta);

    enemy.createBullet(dx, dy);

  };

  //64245395
  this.changePatternTo = function (newType) {
    /*
     * TODO: this function has to:
     * - Set last pattern attributes to null
     * - Initialize the new pattern attributes
     */
     // set last pattern attrs to null
     switch (this.type) {
       case "Wave": break;
       case "Spring":

        this.initialAngle = undefined;
        this.finalAngle = undefined;
        this.theta = undefined;
        break;
       default:

     }
     //Initialize new attrs.
     switch (newType) {

       case "Wave": break;
      case "Spring":
        self.sentido = true;
        this.initialAngle = 0;
        this.finalAngle = 0;
        this.theta = 0;
      break;
      default:


     }
     this.type = newType;
  }

};


module.exports = Pattern;

},{}],9:[function(require,module,exports){
const Projectile = require('./Projectile.js');


var Player = function (state, game, x, y, health, coolDown, bulletSprite) {
	Phaser.Sprite.call(this, game, x, y, 'player');
	this.health = health || 1000;
	this.anchor.set( 0.5, 0.5);
	this.coolDown = coolDown;
	this.bulletSpeed = 60;
	this.game = game;
	this.bulletSprite = bulletSprite;
	this.state = state;	
	this.game.physics.enable(this);
	this.canShoot = true;
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.setCanShoot = function(value){
	this.canShoot = value;
}
Player.prototype.damage = function(dmg) {
	if (this.alive && this.health > 0){
		this.health -= dmg;
		console.log(this.health)
		if (this.health <= 0)
			this.kill();
	}
	
};
Player.prototype.move = function (x, y) {
	this.x = x;
	this.y = y;
};
Player.prototype.kill = function() {
	// TODO
	console.log("Muerto")
};
Player.prototype.shoot = function() {
	if (this.canShoot){
		this.canShoot = false;
		this.game.time.events.add(this.coolDown, this.setCanShoot, this, true);
		this.createBullet();
	}
};
Player.prototype.createBullet = function() {
	let bullet = new Projectile(
		this.state, this.game, this.x, this.y - this.height/2,
		 0, -this.bulletSpeed,
		  this.damage, false, this.shootSprite
		  );
	this.game.add.existing(bullet);
	this.state.playerBullets.push(bullet);

};

module.exports = Player;

},{"./Projectile.js":10}],10:[function(require,module,exports){
var Projectile = function (state, game, posX, posY, velX, velY, damage, enemybullet, sprite) {
	Phaser.Sprite.call(this, game, posX, posY, sprite);

	this.game = game;
	this.state = state;
	this.enemybullet = enemybullet;
	this.game.physics.enable(this);
	this.body.velocity.setTo(velX, velY);
	this.anchor.setTo(0.5, 0.5);

	this.damage = damage;
	this.checkWorldBounds = true;
	//this.outOfBoundsKill  = true; don't know if we should use it as we have to pop out this from the bullet array
	this.onOffWorld = function(){
		this.enemybullet ?
			this.state.enemyBullets.splice(this.state.enemyBullets.indexOf(this), 1):
			this.state.playerBullets.splice(this.state.playerBullets.indexOf(this), 1);
		this.kill();
	}
	this.events.onOutOfBounds.add(this.onOffWorld, this);
}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;


module.exports = Projectile;	


},{}],11:[function(require,module,exports){
'use strict';

var PlayScene = require('./play_scene.js');

/////////////////
var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
/////////////////

var BootScene = {
  preload: function () {

    //Web page
    this.game.load.baseURL = 'https://roberinside.github.io/SeriousWagon/src/';
    this.game.load.crossOrigin = 'anonymous';

    // load here assets required for the loading screen
     this.game.load.image('button', 'images/button.png');
     this.game.load.image('menuBg', 'images/menuBg.jpg');
  },

  create: function () {
    this.game.state.start('menu');
  }
};


var PreloaderScene = {
  preload: function () {
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    this.game.load.image('bg', 'images/background.png');

    this.game.load.image('player', 'images/player.png');
    this.game.load.image('enemy', 'images/enemy.png');
    this.game.load.image('enemy1', 'images/enemy1.png');
    this.game.load.image('enemy2', 'images/enemy2.png');
    this.game.load.image('enemy3', 'images/enemy3.png');
    this.game.load.image('enemy4', 'images/enemy4.png');
    this.game.load.image('boss1', 'images/Boss1.png');
    this.game.load.image('boss2', 'images/Boss2.png');
    this.game.load.image('boss3', 'images/Boss3.png');
    this.game.load.image('boss4_1', 'images/Boss4_1.png');
    this.game.load.image('boss4_2', 'images/Boss4_2.png');
    this.game.load.image('player_shoot', 'images/player_shoot.png');
    this.game.load.image('enemy_shoot', 'images/enemy_shoot.png');
    this.game.load.image('boss1_shoot', 'images/Boss1_shoot.png');
    this.game.load.image('boss2_shoot', 'images/Boss2_shoot.png');
    this.game.load.image('boss3_shoot', 'images/Boss3_shoot.png');
    this.game.load.image('boss4_1_shoot', 'images/Boss4_1_shoot.png');
    this.game.load.image('boss4_2_shoot', 'images/Boss4_2_shoot.png');

  },

  create: function () {
    this.game.state.start('play');
  }
};

/*var PauseScene = {
  preload: function(){
    this.game.load.image('button', 'images/button.png');

  },

  create: function(){

//this.game.state.start('pause');
    var key = game.input.keyboard.addKey(Phaser.keyboard.ESC);
    key.onDown.add(pauseMenu, this);

  },

  pauseMenu: function() {

     var button = game.add.button(game.world.centerX, game.world.centerY, 'button',
     actionOnClick, this, 2, 1, 0);
  },
  actionOnClick: function() {

    button != button;

  },
};*/
var MenuScene = {
preload: function(){

  this.game.load.image('preloader_bar', 'images/preloader_bar.png');


 this.menuBg = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'menuBg'
    );
  this.menuBg.anchor.setTo(0.5, 0.5);

},
start: function(){

      this.game.state.start('preloader');
},

create: function(){

    var button = this.game.add.button(this.game.world.centerX - 150,
      this.game.world.centerY, 'button',this.start, this, 0, 0, 0);

},


};

window.onload = function () {

  var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('play', PlayScene);
  game.state.add('menu', MenuScene);
  //game.state.add('pause', PauseScene);

  game.state.start('boot');
};

},{"./play_scene.js":12,"uniq":1}],12:[function(require,module,exports){
'use strict';
var Player = require('./Player.js');
var LevelManager = require('./LevelManager.js')
var bg;

var PlayScene = {

create: function () {
   //Provisional Background. TODO: make the BG an animation
  this.enemyBullets = [];
  this.playerBullets = []

  bg = this.game.add.tileSprite(0, 0, 800, 600,'bg');
   //Enable Physics engine
  this.timer = new Phaser.Timer(this.game, false);
  this.game.physics.startSystem(Phaser.Physics.ARCADE);

  this.LevelManager = new LevelManager(this);
  this.game.physics.setBoundsToWorld();
  initObjects(this);
  this.timer = new Phaser.Timer(this.game, false);
},

update: function () {
    //background scroll speed every 4s

   bg.tilePosition.y += window.innerHeight * this.game.time.elapsedMS / 1000 * 0.25;
   //Move the player to de cursor position
   this.player.move(this.input.mousePointer.x, this.input.mousePointer.y);
   //check if player have to shoot
   if (this.game.input.mousePointer.isDown) this.player.shoot();
   
   //Check playerBullets-enemies collisons
   /*No acaba de funcionar per no me da tiempo a más,
    en cuanto se crea la bala del player el collison devuelve true, lo cual tiene poco sentido porque
    en todo caso el overlap debería ser con el player pero el player no aparece para nada en esta funcion*/
   /*
    
   this.enemies.forEach(function(enemy){
    for(var pb of enemy.state.playerBullets){
        if (collides(enemy, pb)){
            console.log("Se supone que has acertado a un enemigo")
            enemy.hurt(pb.damage);
            if (pb.alive) pb.kill();
            enemy.state.playerBullets.splice(enemy.state.playerBullets.indexOf(pb), 1);
        }
    }
   });*/

   //Check enemyBullets-player collisons
   for(var b of this.enemyBullets)
   {
    if (collides(b, this.player)){
        this.player.damage(b.damage);
        if (b.alive) b.kill();
        this.enemyBullets.splice(this.enemyBullets.indexOf(b), 1);
    }
   }
}
  
};


module.exports = PlayScene;
function initObjects(playScene){

    playScene.player = new Player(playScene, playScene.game, playScene.game.world.centerX, playScene.game.world.centerY, 100, 300, 'player_shoot');
    playScene.player.anchor.setTo(0.5, 0.5);
    playScene.game.add.existing(playScene.player)
    playScene.enemies = playScene.game.add.group();

   playScene.LevelManager.init();
}
function collides(A, B){
  return Phaser.Rectangle.intersects(A.getBounds(), B.getBounds());
}

},{"./LevelManager.js":7,"./Player.js":9}]},{},[11]);
