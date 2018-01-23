//funciones auxiliares para que los tiempos sean más llevaderos:
function seconds(n) {
  return n*1000;
}
function minutes(n){
  return n * 60 * 1000;
}

//time is in ms by default you can use the auxiliar functions above to make ir more easy to read an write
module.exports = [

{
    time:2000,
    enemies:
      [
      //enemigo 1
        {
          posX:300,
          posY:-60,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
            }
          },
          //enemigo 1
          {
          posX:600,
          posY:-60,
          velX:10,
          velY:0,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
            }
          }          
        ]//enemies
    },//instante1
  	{
    time: 5000,
    enemies:[
     //enemigo 1
     {
          posX:200,
          posY:-60,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      },
      //enemigo 1
      {
          posX:400,
          posY:-60,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      },
      //enemigo 2
      {
          posX:500,
          posY:-60,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      },
      //enemigo 3
      {
          posX:300,
          posY:-100,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      },
      //enemigo 3
      {
          posX:600,
          posY:-100,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      }
     ]//enemies
    },
 	{
    time: 4000,
    enemies:[
     //enemigo 1
     {
          posX:300,
          posY:-60,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          bulletVelocity:50//Por ejemplo
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      },
      //enemigo 1
     {
          posX:300,
          posY:-100,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      },
      //enemigo 1
     {
          posX:600,
          posY:-60,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      },
      //enemigo 1
     {
          posX:600,
          posY:-100,
          velX:0,
          velY:10,
          life:60,
          sprite:'enemy1',
          damage:100,
          coolDown:1000,
          bulletSprite:'enemy_shoot',
          pattern:
          {
            type:'wave',
            scope:90.0,
            nProj:1
          }
      }
      ]//enemies
    },//time
  	{
    time: 7000,
    i:[
     //Boss 1
     {
          posX:400,
          posY:-10,
          velX:0,
          velY:5,
          life:500,
          sprite:'Boss1',
          damage:250,
          coolDown:500,
          bulletSprite:'Boss1_shoot',
          pattern:
          {
            type:'wave',
            scope:120.0,
            nProj:3
          }
      }
      ]//enemies
    }
]
