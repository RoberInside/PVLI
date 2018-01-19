#Descripción de API
 ## Cada nivel quedará descrito por un JSON con el siguiente formato descrito a continuación


 ###	Cada nivel se define como un array de de objetosJS(Instante)
 ### 	formados por un tiempo (ms que debe transcurrir desde el instante anterior a este)
 ### 	y un array de enemigos(objetosJS) que deben ser instanciados en ese instante

```JSON
NivelXX{[
	instant = {
		time	(uInt),
		enemys	=
		[
			{
				posX,
				posY,
				velX,
				velY,
				life,
				sprite,
				damage,
				coolDown,
				bulletSprite,
				patron =
				{
					tipo,
					scope,
					nProjectiles
				}
			},
			{
				posX,
				posY,
				velX,
				velY,
				life,
				sprite,
				damage,
				coolDown,
				bulletSprite,
				patron =
				{
					tipo,
					scope,
					nProjectiles
				}
			},
			]
	},
	instant = {
		time	(uInt),
		enemys	=
		[
			{
				posX,
				posY,
				velX,
				velY,
				life,
				sprite,
				damage,
				coolDown,
				bulletSprite,
				patron =
				{
					tipo,
					scope,
					nProjectiles
				}
			},
			{
				posX,
				posY,
				velX,
				velY,
				life,
				sprite,
				damage,
				coolDown,
				bulletSprite,
				patron =
				{
					tipo,
					scope,
					nProjectiles
				}
			},
		]
	}
]}
```
## Descripción de la API del objeto Enemy
Enemy {
####Atributos Propios
	+ Posición 		(x, y, ints)
	+ Velocidad 	(x, y, ints)
	+ Sprite		(string)
	+ Life			(int)

####Atributos del Disparo
	+ Daño			(uInt)
	+ CoolDown		(uInt)
	+ Sprite		(string)
	+ Patron {
		..+ tipo			(string)
		..+ nProyectiles	(uInt)
		..+ scope			(float)
	+ }

####Métodos
	+ 'shoot()'				* Es llamado cada CoolDown ms. LLama al tick del patron con atributo patron.tipo. 				 *
	+ 'createProjectile()'	* Es llamado por el patron y crea un nuevo proyectil con los atributos que le
							  proporciona el patrón(velocidad) y los atributos locales del enemigo				 			 *
	+ 'move()'				* En funcion de la definición que se haga del mismo dedidira el cambio de velocidad del enemigo *

}
