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