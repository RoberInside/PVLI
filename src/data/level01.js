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