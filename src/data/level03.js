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