# Oh-No-Dino
Be a starving dino in the forest. Avoid trees while eating unicorns.

## MVP (DOM - CANVAS)

- game has one dinosaure that moves horizontally
- trees appear randomly from the top of the screen
- GAME OVER :collision between the dino and a tree will end the game with error message 'oh no. dino...'
- unicorns appear randomly rom the top of the screen
- collision between the dino and a unicorn will increase scoreboard by 1 point
- scoreboard increasing for each unicorns eaten
- WIN : 20 unicorns eaten



## Backlog
- add sound to the error message
- Increasing dificulty by adding more trees
- create different level with different background and dinos :
example : level 2 "snowy forest" dino on skis
- adding 3 lives for the dino
- chose your dino : choice between different dino ,
depending on size they need more or less feeding but they speed vary (small dino would need less unicorns so it'll be easier BUT would go faster so the difficulty increase. Big dino would need a lot to be full but would go a bit slower)
- background music

## Data structure
Classes and methods definition.


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
- build Dom
- build Canvas
- draw Canvas

- draw character (blue square -> later dino)
- addeventlistener left and right arrow
- draw obstacles (green squares -> later trees)
- create loop y++
- collision -> end game

- create score board
- draw reward objects (pink squares -> later unicorns)
- collision -> earn 1 point
- end game after 20 points

- create win screen
- create game over screen
- create start screen

- implement images



## Links


### Trello
https://trello.com/b/eD3wi0eb/oh-no-dino


### Git
URls for the project repo and deploy
https://github.com/justinebenevent/Oh-No-Dino.git
https://justinebenevent.github.io/Oh-No-Dino/


### Slides
URls for the project presentation (slides)
https://docs.google.com/presentation/d/1h16HRktyWsO0-ZPVKi4xwzmLXu3FJWJxLp6Wwthp7SU/edit#slide=id.g4c68a97855_0_83
