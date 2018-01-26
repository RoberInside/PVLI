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