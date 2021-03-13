//Global variables start here
//pokemon moves
var PetalDance=["Petal Dance","S",120];var RazorLeaf=["Razor Leaf","P",55];var DoubleEdge=["Double-Edge","P",120];var PetalBlizzard=["Petal Blizzard","P",90];
var DragonClaw=["Dragon Claw","P",80];var FlareBlitz=["Flare Blitz","P",120];var Slash=["Slash","P",70];var Flamethrower=["Flamethrower","S",90];
var AquaTail=["Aqua Tail","P",90];var HydroPump=["Hydro Pump","S",110];var Bite=["Bite","P",60];var WaterPulse=["Water Pulse","S",60];
var WingAttack=["Wing Attaack","P",60];var Hurricane=["Hurricane","S",110];var Twister=["Twister","S",40];var Gust=["Gust","S",40];
var Thunderbolt=["Thunderbolt","S",90];var WildCharge=["Wild Charge","P",90];var ChargeBeam=["Charge Beam","S",50];var VoltCharge=["Volt Charge","S",70];
var CrossChop=["Cross Chop","P",100];var FocusBlast=["Focus Blast","S",120];var Submission=["Submission","P",80];var VitalThrow=["Vital Throw","P",70];
var FeintAttack=["Feint Attack","P",60];var DarkPulse=["Dark Pulse","S",80];var DreamEater=["Dream Eater","S",100];var ShadowClaw=["Shadow Claw","P",70];
//Pokemon data starts here
var Venusaur=["Venusaur","gra","poi",80,82,83,100,100,80,"venusaurfront.png","venusaurback.png",PetalDance,RazorLeaf,DoubleEdge,PetalBlizzard];
var Charizard=["Charizard","fir","fly",78,84,78,109,85,100,"charizardfront.png","charizardback.png",DragonClaw,FlareBlitz,Slash,Flamethrower];
var Blastoise=["Blastoise","wat","-",79,83,100,85,105,78,"blastoisefront.png","blastoiseback.png",AquaTail,HydroPump,Bite,WaterPulse];
var Pidgeot=["Pidgeot","nor","fly",83,80,75,70,70,101,"pidgeotfront.png","pidgeotback.png",WingAttack,Hurricane,Twister,Gust];
var Raichu=["Raichu","ele","-",60,90,55,90,80,110,"raichufront.png","raichuback.png",Thunderbolt,WildCharge,ChargeBeam,VoltCharge];
var Machamp=["Machamp","fig","-",90,130,80,65,85,55,"machamp.png","machampback.png",CrossChop,FocusBlast,Submission,VitalThrow];
var Primeape=["Primeape","fig","-",65,105,60,60,70,95,"primeape.png","primeapeback.png"];
var Arcanine=["Arcanine","fir","-",90,110,80,100,80,95,"arcanine.png","arcanineback.png"];
var Alakazam=["Alakazam","psy","-",55,50,45,135,95,120,"alakazam.png","alakazamback.png"];
var Tentacruel=["Tentacruel","wat","poi",80,70,65,80,120,100,"tentacruel.png","tentacruelback.png"];
var Cloyster=["Cloyster","wat","ice",50,95,180,85,45,70,"cloyster.png","cloysterback.png"];
var Gengar=["Gengar","gho","poi",60,65,60,130,75,110,"gengar.png","gengarback.png"];
var Onix=["Onix","roc","gro",35,45,160,30,45,70,"onixfront.png","onixback.png"];
var Hitmonlee=["Hitmonlee","fig","-",50,120,53,35,110,87,"hitmonlee.png","hitmonleeback.png"];
var Hitmonchan=["Hitmonchan","fig","-",50,105,79,35,110,76,"hitmonchan.png","hitmonchanback.png"];
var Gyarados=["Gyarados","wat","fly",95,125,79,60,100,81,"gyarados.png","gyaradosback.png"];
var Lapras=["Lapras","wat","ice",130,85,80,85,95,60,"lapras.png","laprasback.png"];
var Aerodactyl=["Aerodactyl","roc","fly",80,105,65,60,75,130,"aerodactyl.png","aerodactylback.png"];
var Snorlax=["Snorlax","nor","-",160,110,65,65,110,30,"snorlax.png","snorlaxback.png"];
var Dragonite=["Dragonite","dra","fly",91,134,95,100,100,80,"dragonite.png","dragoniteback.png"];
var Darkrai=["Darkrai","dar","-",70,90,90,135,90,125,"darkrai.png","darkraiback.png",FeintAttack,DarkPulse,DreamEater,ShadowClaw];
var Pokemon=[Venusaur,Charizard,Blastoise,Pidgeot,Raichu,Primeape,Arcanine,Alakazam,Machamp,Tentacruel,Cloyster,Gengar,Onix,Hitmonlee,Hitmonchan,Gyarados,Lapras,Aerodactyl,Snorlax,Dragonite];
//selecting pokemon
onEvent("Charizard", "click", function() {
selectpokemon(Charizard);
pokemoncount+=1;
});

onEvent("Blastoise", "click", function() {
  selectpokemon(Blastoise);
  pokemoncount+=1;
});
onEvent("Venusaur", "click", function() {
  selectpokemon(Venusaur);
  pokemoncount+=1;
});
onEvent("Pidgeot", "click", function() {
  selectpokemon(Pidgeot);
  pokemoncount+=1;
});
onEvent("Raichu", "click", function() {
  selectpokemon(Raichu);
  pokemoncount+=1;
});
onEvent("Primeape", "click", function() {
  selectpokemon(Primeape);
  pokemoncount+=1;
});
onEvent("Arcanine", "click", function() {
  selectpokemon(Arcanine);
  pokemoncount+=1;
});
onEvent("Alakazam", "click", function() {
  selectpokemon(Alakazam);
  pokemoncount+=1;
});
onEvent("Machamp", "click", function() {
  selectpokemon(Machamp);
  pokemoncount+=1;
});
onEvent("Tentacruel", "click", function() {
  selectpokemon(Tentacruel);
  pokemoncount+=1;
});
onEvent("Cloyster", "click", function() {
  selectpokemon(Cloyster);
  pokemoncount+=1;
});
onEvent("Gengar", "click", function() {
  selectpokemon(Gengar);
  pokemoncount+=1;
});
onEvent("Onix", "click", function(){
  selectpokemon(Onix);
  pokemoncount+=1;
});
onEvent("Hitmonlee", "click", function(){
  selectpokemon(Hitmonlee);
  pokemoncount+=1;
});
onEvent("Hitmonchan", "click", function(){
  selectpokemon(Hitmonchan);
  pokemoncount+=1;
});
onEvent("Gyarados", "click", function(){
  selectpokemon(Gyarados);
  pokemoncount+=1;
});
onEvent("Lapras", "click", function(){
  selectpokemon(Lapras);
  pokemoncount+=1;
});
onEvent("Aerodactyl", "click", function(){
  selectpokemon(Aerodactyl);
  pokemoncount+=1;
});
onEvent("Snorlax", "click", function(){
  selectpokemon(Snorlax);
  pokemoncount+=1;
});
onEvent("Dragonite", "click", function(){
  selectpokemon(Dragonite);
  pokemoncount+=1;
});

//Pokemon data ends here
var asheY;
var asheX;
var ashe1Y = getYPosition("ashe");
var ashe1X = getXPosition("ashe");
var screens="palletTown";
var canMove=true;
var enter=false;
var pokemoncount=0;
var p1;
var p1hp;
var p1maxhp;
var p1hppercent;
var p1lvl=50;
var p2;
var p2hp;
var p2maxhp;
var p2hppercent;
var p2lvl=50;
var p3;
var p3hp;
var p3maxhp;
var p3hppercent;
var p3lvl=50;
var p4;
var p4hp;
var p4maxhp;
var p4hppercent;
var p4lvl=50;
var p5;
var p5hp;
var p5maxhp;
var p5hppercent;
var p5lvl=50;
var p6;
var p6hp;
var p6maxhp;
var p6hppercent;
var p6lvl=50;
var wildPokemon;
//Global variable ends here
//Intro starts here
playSound("03 Title Screen.mp3", true);
onEvent("newGame", "click", function() {
  setScreen("intro");
});
//Intro sequence begins
onEvent("speech1", "click", function() {
  showElement("speech2");
});
//Onto play screen
onEvent("speech2", "click", function() {
  showElement("pokedexscreen");
});
onEvent("pokedexscreen", "click", function() {
  setScreen("Pokedex");
});
onEvent("go", "click", function() {
  if (pokemoncount>5) {
    stopSound("03 Title Screen.mp3");
    setScreen("palletTown");
    ashe1Y=205;
    ashe1X=150;
    asheY=ashe1Y;
    asheX=ashe1X;
    objects=objects1;
    playSound("102-palette-town-theme.mp3", true);
  }
});
//Intro ends here
//Movement starts here
//setting up on events in pallettown
var grass=[270,345,195,270];
var darkrai=[0,60,125,190];
onEvent("palletTown", "keydown", function(event) {
  //checks if its possible to move in a certain direction
  var num1 = checkCollisionUp();
  var num2 = checkCollisionDown();
  var num3 = checkCollisionLeft();
  var num4 = checkCollisionRight();
  //checks position for entering buildings
  if((ashe1X>=75&&ashe1X<=85)&&(ashe1Y>=155&&ashe1Y<=165)){
  showElement("Enter");
  enter=true;
  } else{
  hideElement("Enter");
  enter=false;
  } 
  if (event.key=="Up"&&ashe1Y>=5) {
    if (num1===false&&canMove===true) {
      //checks if character is already moving
      canMove=false;
      //checks if player is in grass
      wild();
      darkpok();
      setTimeout(function(){
        setImageURL("ashe", "ashe up 1.png");
        setPosition("ashe", ashe1X, ashe1Y-4, 15, 20);
        ashe1Y-=4;
        asheY=ashe1Y;
        asheX=ashe1X;
      }, 100);
      setTimeout(function() {
        setImageURL("ashe", "ashe up 2.png");
        setPosition("ashe", ashe1X, ashe1Y-4, 15, 20);
        ashe1Y-=4;
        asheY=ashe1Y;
        asheX=ashe1X;
      }, 200);
      setTimeout(function() {
        setImageURL("ashe", "ashe back.png");
        setPosition("ashe", ashe1X, ashe1Y-2, 15, 20);
        ashe1Y-=2;
        asheY=ashe1Y;
        asheX=ashe1X;
        canMove=true;
      }, 201);
      //console.log(asheX+","+asheY);
    }
  } else if (event.key=="Down"&&ashe1Y<=415) {
    if (num2===false&&canMove===true) {
      canMove=false;
      wild();
      darkpok();
      setTimeout(function() {
        setImageURL("ashe", "ashe down 1.png");
        setPosition("ashe", ashe1X, ashe1Y+4, 15, 20);
        ashe1Y +=4;
        asheY=ashe1Y;
        asheX=ashe1X;
      }, 100);setTimeout(function() {
        setImageURL("ashe", "ashe down 2.png");
        setPosition("ashe", ashe1X, ashe1Y+4, 15, 20);
        ashe1Y +=4;
        asheY=ashe1Y;
        asheX=ashe1X;
      }, 200);
      setTimeout(function() {
        setImageURL("ashe", "ashe front.png");
        setPosition("ashe", ashe1X, ashe1Y+2, 15, 20);
        ashe1Y +=2;
        asheY=ashe1Y;
        asheX=ashe1X;
        canMove=true;
      }, 201);
      //console.log(asheX+","+asheY);
    }
  } else if (event.key=="Left"&&ashe1X>=10) {
    if (num3===false&&canMove===true) {
      canMove=false;
      wild();
      darkpok();
      setTimeout(function() {
        setImageURL("ashe", "ashe left 1.png");
        setPosition("ashe", ashe1X-4, ashe1Y, 15, 20);
        ashe1X-=4;
        asheY=ashe1Y;
        asheX=ashe1X;
      }, 100);
      setTimeout(function() {
        setImageURL("ashe", "ashe left 2.png");
        setPosition("ashe", ashe1X-4, ashe1Y, 15, 20);
        ashe1X-=4;
        asheY=ashe1Y;
        asheX=ashe1X;
      }, 200);
      setTimeout(function() {
        setImageURL("ashe", "ashe left.png");
        setPosition("ashe", ashe1X-2, ashe1Y, 15, 20);
        ashe1X-=2;
        asheY=ashe1Y;
        asheX=ashe1X;
        canMove=true;
      }, 201);
      //console.log(asheX+","+asheY);
    }
  } else if (event.key=="Right"&&ashe1X<=290){
    if (num4===false&&canMove===true) {
      canMove=false;
      wild();
      darkpok();
      setTimeout(function() {
        setImageURL("ashe", "ashe right 1.png");
        setPosition("ashe",ashe1X+4, ashe1Y, 15, 20);
        ashe1X+=4;
        asheY=ashe1Y;
        asheX=ashe1X;
      }, 100);
      setTimeout(function() {
        setImageURL("ashe", "ashe right 2.png");
        setPosition("ashe",ashe1X+4, ashe1Y, 15, 20);
        ashe1X+=4;
        asheY=ashe1Y;
        asheX=ashe1X;
      }, 200);
      setTimeout(function() {
        setImageURL("ashe", "ashe right.png");
        setPosition("ashe",ashe1X+2, ashe1Y, 15, 20);
        ashe1X+=2;
        asheY=ashe1Y;
        asheX=ashe1X;
        canMove=true;
      }, 201);
      //console.log(asheX+","+asheY);
    }
  } else if(event.key=="Enter"&&enter===true){
      setScreen("PCinside");
      setPosition("ashe1",150,310);
      ashe2X=150;
      ashe2Y=310;
      asheY=ashe2Y;
      asheX=ashe2X;
      objects=objects2;
  } else if(event.key=="Esc"){
    screens = "palletTown";
    setScreen("pause");
  }
});
//Setting up wild pokemon
function wild() {
  if ((asheY>grass[0]&&grass[1]>asheY)&&(grass[2]<asheX&&asheX<grass[3])){
    var chance=randomNumber(1,10);
    if(chance==1){
      var wildPok=randomNumber(1,100);
      if (wildPok<33) {
        wildPokemon=Raichu;
        showElement("enemypokemon");
        setText("battletext","A wild "+wildPokemon[0]+" appeared!");
      }
      if(wildPok<66&&wildPok>32){
        wildPokemon=Pidgeot;
        showElement("enemypokemon");
        setText("battletext","A wild "+wildPokemon[0]+" appeared!");
      }
      if(wildPok<99&&wildPok>65){
        wildPokemon=Dragonite;
        showElement("enemypokemon");
        setText("battletext","A wild "+wildPokemon[0]+" appeared!");
      }
      if(wildPok>=100){
        wildPokemon=Gengar;
        showElement("enemypokemon");
        setText("battletext","A wild "+wildPokemon[0]+" appeared!");
      }
      var wildPlvl=randomNumber(40,45);
      battle(wildPokemon,wildPlvl);
    }
  }
}
function darkpok(){
  if((asheY>darkrai[0]&&darkrai[1]>asheY)&&(darkrai[2]<asheX&&asheX<darkrai[3])){
    battle(Darkrai,80);
  }
}
//done with battlescreen for now
//starting pc screen
setPosition("ashe1",150,310);
var ashe2Y = getYPosition("ashe1");
var ashe2X = getXPosition("ashe1");
onEvent("PCinside", "keydown", function(event) {
  var num1 = checkCollisionUp();
  var num2 = checkCollisionDown();
  var num3 = checkCollisionLeft();
  var num4 = checkCollisionRight();
  if((ashe2X>=145&&ashe2X<=155)&&(ashe2Y>=305&&ashe2Y<=315)){
  showElement("Enter1");
  enter=true;
  } else{
  hideElement("Enter1");
  enter=false;
  } 
  if (event.key=="Up"&&ashe2Y>=180) {
      if (num1===false) {
        setImageURL("ashe1", "ashe back.png");
        setPosition("ashe1", ashe2X, ashe2Y-10, 15, 20);
        ashe2Y-=10;
      }
  } else if (event.key=="Down"&&ashe2Y<=300) {
      if (num2===false) {
        setImageURL("ashe1", "ashe front.png");
        setPosition("ashe1", ashe2X, ashe2Y+10, 15, 20);
        ashe2Y +=10;
      }
  } else if (event.key=="Left"&&ashe2X>=30) {
      if (num3===false) {
        setImageURL("ashe1", "ashe left.png");
        setPosition("ashe1", ashe2X-10, ashe2Y, 15, 20);
        ashe2X-=10;
      }
  } else if (event.key=="Right"&&ashe2X<=270){
      if (num4===false) {
        setImageURL("ashe1", "ashe right.png");
        setPosition("ashe1",ashe2X+10, ashe2Y, 15, 20);
        ashe2X+=10;
      }
  } else if(event.key=="Enter"&&enter===true){
    setScreen("palletTown");
    objects=objects1;
  }
});
//Movement ends here

//Pause screen starts here
onEvent("resume", "click", function() {
  setScreen(screens);
});
onEvent("bag","click",function(){
  setScreen("Bag1");
});
onEvent("Bag1exit","click",function(){
  setScreen("pause");
});
onEvent("exit","click",function(){
  setScreen("start");
});
onEvent("pokemon", "click", function() {
  setScreen("Pokemon");
});
onEvent("back", "click", function() {
  setScreen("pause");
});
//Pause screen ends here
//Collisions start here
//format is up down left right
var darkai=[0,55,135,180];
var heal=[150,215,95,225];
var objects1=[darkai];
var objects2=[heal];
var objects;
function checkCollisionUp() {
  var collisionUp = false;
  for (var i = 0; i < objects.length; i++) {
    if ((asheY<=objects[i][1])&&(asheY>objects[i][1]-10)&&(asheX+25>objects[i][2])&&(asheX<objects[i][3])) {
      collisionUp=true;
    }
  }
  return collisionUp;
}
function checkCollisionDown(){
  var collisionDown = false;
  for (var i = 0; i < objects.length; i++) {
    if((asheY+32>=objects[i][0])&&(asheY+32<objects[i][0]+10)&&(asheX+25>objects[i][2])&&(asheX<objects[i][3])){
      collisionDown=true;
    }
  }
  return collisionDown;
}
function checkCollisionLeft(){
  var collisionLeft = false;
  for (var i = 0; i < objects.length; i++) {
    if((asheX>=objects[i][3])&&(asheX<objects[i][3]+10)&&(asheY<objects[i][1])&&(asheY+32>objects[i][0])){
      collisionLeft=true;
    }
  }
  return collisionLeft;
}
function checkCollisionRight(){
  var collisionRight = false;
  for (var i = 0; i < objects.length; i++) {
    if((asheX+25>=objects[i][2])&&(asheX+25<objects[i][2]+10)&&(asheY<objects[i][1])&&(asheY+32>objects[i][0])){
    collisionRight=true;
  }
  }
  return collisionRight;
}
function battle(enemypokemon,enemylvl){
  var currentP=p1;
  var currentPmaxhp=p1maxhp;
  var currentPhp=p1hp;
  var currentPhppercent=p1hppercent;
  onEvent("Fight", "click", function() {
    hideElement("battletext");
    setText("move1",currentP[11][0]);
    setText("move2",currentP[12][0]);
    setText("move3",currentP[13][0]);
    setText("move4",currentP[14][0]);
  });
  onEvent("battleover", "click", function() {
    showElement("battletext");
    setText("battletext","Got away safely!");
    setTimeout(function() {
      stopSound("18 Battle! (Wild Pokémon) (1).mp3");
      setScreen(screens);
      playSound("102-palette-town-theme.mp3", false);
    }, 1000);
  });
  onEvent("Switch", "click", function() {
    setScreen("Pokemon");
    onEvent("p1", "click", function() {
      currentP=p1;
      currentPmaxhp=p1maxhp;
      currentPhp=p1hp;
      currentPhppercent=p1hppercent;
      setImageURL("allypokemon",currentP[10]);
      setText("allypokemonname",currentP[0]);
      setText("allypokemonlvl",50);
      setText("allypokemonhealth",p1hp+"/"+p1maxhp);
      setScreen("Battle");
      showElement("battletext");
      setText("battletext","Get in there, "+currentP[0]);
      setProperty("allyhealthbar","width",p1hppercent);
    });
    onEvent("p2", "click", function() {
      currentP=p2;
      currentPmaxhp=p2maxhp;
      currentPhp=p2hp;
      currentPhppercent=p2hppercent;
      setImageURL("allypokemon",currentP[10]);
      setText("allypokemonname",currentP[0]);
      setText("allypokemonlvl",50);
      setText("allypokemonhealth",p2hp+"/"+p2maxhp);
      setScreen("Battle");
      showElement("battletext");
      setText("battletext","Get in there, "+currentP[0]);
      setProperty("allyhealthbar","width",p2hppercent);
    });
    onEvent("p3", "click", function() {
      currentP=p3;
      currentPmaxhp=p3maxhp;
      currentPhp=p3hp;
      currentPhppercent=p3hppercent;
      setImageURL("allypokemon",currentP[10]);
      setText("allypokemonname",currentP[0]);
      setText("allypokemonlvl",50);
      setText("allypokemonhealth",p3hp+"/"+p3maxhp);
      setScreen("Battle");
      showElement("battletext");
      setText("battletext","Get in there, "+currentP[0]);
      setProperty("allyhealthbar","width",p3hppercent);
    });
    onEvent("p4", "click", function() {
      currentP=p4;
      currentPmaxhp=p4maxhp;
      currentPhp=p4hp;
      currentPhppercent=p4hppercent;
      setImageURL("allypokemon",currentP[10]);
      setText("allypokemonname",currentP[0]);
      setText("allypokemonlvl",50);
      setText("allypokemonhealth",p4hp+"/"+p4maxhp);
      setScreen("Battle");
      showElement("battletext");
      setText("battletext","Get in there, "+currentP[0]);
      setProperty("allyhealthbar","width",p4hppercent);
    });
    onEvent("p5", "click", function() {
      currentP=p5;
      currentPmaxhp=p5maxhp;
      currentPhp=p5hp;
      currentPhppercent=p5hppercent;
      setImageURL("allypokemon",currentP[10]);
      setText("allypokemonname",currentP[0]);
      setText("allypokemonlvl",50);
      setText("allypokemonhealth",p5hp+"/"+p5maxhp);
      setScreen("Battle");
      showElement("battletext");
      setText("battletext","Get in there, "+currentP[0]);
      setProperty("allyhealthbar","width",p5hppercent);
    });
    onEvent("p6", "click", function() {
      currentP=p6;
      currentPmaxhp=p6maxhp;
      currentPhp=p6hp;
      currentPhppercent=p6hppercent;
      setImageURL("allypokemon",currentP[10]);
      setText("allypokemonname",currentP[0]);
      setText("allypokemonlvl",50);
      setText("allypokemonhealth",p6hp+"/"+p6maxhp);
      setScreen("Battle");
      showElement("battletext");
      setText("battletext","Get in there, "+currentP[0]);
      setProperty("allyhealthbar","width",p6hppercent);
    });
  });
  stopSound("102-palette-town-theme.mp3");
  playSound("18 Battle! (Wild Pokémon) (1).mp3", false);
  showElement("enemypokemon");
  setText("battletext","A wild "+enemypokemon[0]+" appeared!");
  //wildPokemon=wildPok;
  setImageURL("allypokemon",currentP[10]);
  setText("allypokemonname",currentP[0]);
  setText("allypokemonlvl",50);
  setText("allypokemonhealth",currentPhp+"/"+currentPmaxhp);
  var enemymaxhp=getHealth(enemypokemon[3],enemylvl);
  var enemyhp=enemymaxhp;
  var enemyhppercent=(Math.round((enemyhp/enemymaxhp)*100));
  setProperty("enemyhealthbar", "width", enemyhppercent);
  setImageURL("enemypokemon",enemypokemon[9]);
  setText("enemypokemonname",enemypokemon[0]);
  setText("enemypokemonlvl",enemylvl);
  setScreen("Battle");
  setTimeout(function() {
    setText("battletext","What will "+currentP[0]+" do?");
  }, 2000);
  onEvent("move1","click",function(){
    var m1damage=damage(50,currentP[11][1],currentP[11][2],currentP[4],enemypokemon[5],currentP[6],enemypokemon[7]);
    enemyhp=enemyhp-m1damage;
    enemyhppercent=(Math.round((enemyhp/enemymaxhp)*100));
    setProperty("enemyhealthbar", "width", enemyhppercent);
    healthresult(enemypokemon,enemyhppercent,"enemyhealthbar");
    currentPhp=currentPhp-enemyMove(enemypokemon,enemylvl,currentP);
    currentPhppercent=(Math.round((currentPhp/currentPmaxhp)*100));
    setProperty("allyhealthbar","width",currentPhppercent);
    if(currentPhppercent<1){
      showElement("battletext");
      setText("battletext","Your "+currentP[0]+" fainted.");
      setTimeout(function(){
        setScreen("Pokemon");
      },2000);
    }
  });
  onEvent("move2","click",function(){
    var m2damage=damage(p1lvl,currentP[12][1],currentP[12][2],currentP[4],enemypokemon[5],currentP[6],enemypokemon[7]);
    enemyhp=enemyhp-m2damage;
    enemyhppercent=(Math.round((enemyhp/enemymaxhp)*100));
    setProperty("enemyhealthbar", "width", enemyhppercent);
    healthresult(enemypokemon,enemyhppercent,"enemyhealthbar");
    currentPhp=currentPhp-enemyMove(enemypokemon,enemylvl,currentP);
    currentPhppercent=(Math.round((currentPhp/currentPmaxhp)*100));
    setProperty("allyhealthbar","width",currentPhppercent);
    if(currentPhppercent<1){
      showElement("battletext");
      setText("battletext","Your "+currentP[0]+" fainted.");
      setTimeout(function(){
        setScreen("Pokemon");
      },2000);
    }
  });
  onEvent("move3","click",function(){
    var m3damage=damage(p1lvl,currentP[13][1],currentP[13][2],currentP[4],enemypokemon[5],currentP[6],enemypokemon[7]);
    enemyhp=enemyhp-m3damage;
    enemyhppercent=(Math.round((enemyhp/enemymaxhp)*100));
    setProperty("enemyhealthbar", "width", enemyhppercent);
    healthresult(enemypokemon,enemyhppercent,"enemyhealthbar");
    currentPhp=currentPhp-enemyMove(enemypokemon,enemylvl,currentP);
    currentPhppercent=(Math.round((currentPhp/currentPmaxhp)*100));
    setProperty("allyhealthbar","width",currentPhppercent);
    if(currentPhppercent<1){
      showElement("battletext");
      setText("battletext","Your "+currentP[0]+" fainted.");
      setTimeout(function(){
        setScreen("Pokemon");
      },2000);
    }
  });
  onEvent("move4","click",function(){
    var m4damage=damage(p1lvl,currentP[14][1],currentP[14][2],currentP[4],enemypokemon[5],currentP[6],enemypokemon[7]);
    enemyhp=enemyhp-m4damage;
    enemyhppercent=(Math.round((enemyhp/enemymaxhp)*100));
    setProperty("enemyhealthbar", "width", enemyhppercent);
    healthresult(enemypokemon,enemyhppercent,"enemyhealthbar");
    currentPhp=currentPhp-enemyMove(enemypokemon,enemylvl,currentP);
    currentPhppercent=(Math.round((currentPhp/currentPmaxhp)*100));
    setProperty("allyhealthbar","width",currentPhppercent);
    if(currentPhppercent<1){
      showElement("battletext");
      setText("battletext","Your "+currentP[0]+" fainted.");
      setTimeout(function(){
        setScreen("Pokemon");
      },2000);
    }
  });
}
function enemyMove(enemyP,enemyLvl,allyP){
  var move=randomNumber(1,4);
  if(move==1){
    var m1damage=damage(enemyLvl,enemyP[11][1],enemyP[11][2],enemyP[4],allyP[5],enemyP[6],allyP[7]);
    showElement("battletext");
    setText("battletext", "Enemy "+enemyP[0]+" used "+enemyP[11][0]);
    setTimeout(function() {
      hideElement("battletext");
    }, 1000);
    return m1damage,enemyP;
  }if(move==2){
    var m2damage=damage(enemyLvl,enemyP[12][1],enemyP[12][2],enemyP[4],allyP[5],enemyP[6],allyP[7]);
    showElement("battletext");
    setText("battletext", "Enemy "+enemyP[0]+" used "+enemyP[12][0]);
    setTimeout(function() {
      hideElement("battletext");
    }, 1000);
    return m2damage;
  }if(move==3){
    var m3damage=damage(enemyLvl,enemyP[13][1],enemyP[13][2],enemyP[4],allyP[5],enemyP[6],allyP[7]);
    showElement("battletext");
    setText("battletext", "Enemy "+enemyP[0]+" used "+enemyP[13][0]);
    setTimeout(function() {
      hideElement("battletext");
    }, 1000);
    return m3damage;
  }if(move==4){
    var m4damage=damage(enemyLvl,enemyP[14][1],enemyP[14][2],enemyP[4],allyP[5],enemyP[6],allyP[7]);
    showElement("battletext");
    setText("battletext", "Enemy "+enemyP[0]+" used "+enemyP[14][0]);
    setTimeout(function() {
      hideElement("battletext");
    }, 1000);
    return m4damage;
  }
}
function getHealth(a,b){
  var health=(Math.round((a*2*b)/100)+b+10);
  return health;
}
function damage(L,M,P,a,d,sa,sd){
  if(M=="P"){
    var pDamage=(((((2*L)/5)+2)*P*(a/d))/50)+2;
    return pDamage;
  }
  if(M=="S"){
    var sDamage=(((((2*L)/5)+2)*P*(sa/sd))/50)+2;
    return sDamage;
  }
}
function healthresult(Epokemon,Ehppercent,healthbar){
  if(Ehppercent<50){
    setProperty(healthbar,"background-color","yellow");
  }
  if(Ehppercent<15){
    setProperty(healthbar,"background-color","red");
  }
  if(Ehppercent<1){
    hideElement("enemypokemon");
    showElement("battletext");
    setText("battletext","The wild "+Epokemon[0]+" fainted.");
    setTimeout(function(){
      setScreen(screens);
      deleteElement("image9");
    },2000);
  }
}
function selectpokemon(name){
  if (pokemoncount===0) {
    p1 = name;
    p1lvl=50;
    setText("p1lvl",p1lvl);
    setText("p1name", p1[0]);
    setImageURL("p1image",p1[9]);
    p1maxhp=(Math.round((p1[3]*2*p1lvl)/100)+p1lvl+10);
    p1hp=p1maxhp;
    p1hppercent = (Math.round((p1hp/p1maxhp)*100));
    setProperty("p1hpbar", "width", p1hppercent);
    setKeyValue("p1", "3", function () {
    });
    setText("p1hp", p1hp+"/"+p1maxhp);
    hideElement(name[0]);
  }else if (pokemoncount===1) {
    p2 = name;
    p2lvl=50;
    setText("p2lvl",p2lvl);
    setText("p2name", p2[0]);
    setImageURL("p2image",p2[9]);
    p2maxhp=(Math.round((p2[3]*2*p2lvl)/100)+p2lvl+10);
    p2hp=p2maxhp;
    p2hppercent = (Math.round((p2hp/p2maxhp)*100));
    setProperty("p2hpbar", "width", p2hppercent);
    setKeyValue("p2", "3", function () {
    });
    setText("p2hp", p2hp+"/"+p2maxhp);
    hideElement(name[0]);
  }else if (pokemoncount===2) {
    p3 = name;
    p3lvl=50;
    setText("p3lvl",p3lvl);
    setText("p3name", p3[0]);
    setImageURL("p3image",p3[9]);
    p3maxhp=(Math.round((p3[3]*2*p3lvl)/100)+p3lvl+10);
    p3hp=p3maxhp;
    p3hppercent = (Math.round((p3hp/p3maxhp)*100));
    setProperty("p3hpbar", "width", p3hppercent);
    setKeyValue("p3", "3", function () {
    });
    setText("p3hp", p3hp+"/"+p3maxhp);
    hideElement(name[0]);
  }else if (pokemoncount===3) {
    p4 = name;
    p4lvl=50;
    setText("p4lvl",p4lvl);
    setText("p4name", p4[0]);
    setImageURL("p4image",p4[9]);
    p4maxhp=(Math.round((p4[3]*2*p4lvl)/100)+p4lvl+10);
    p4hp=p4maxhp;
    p4hppercent = (Math.round((p4hp/p4maxhp)*100));
    setProperty("p4hpbar", "width", p4hppercent);
    setKeyValue("p4", "3", function () {
    });
    setText("p4hp", p4hp+"/"+p4maxhp);
    hideElement(name[0]);
  }else if (pokemoncount===4) {
    p5 = name;
    p5lvl=50;
    setText("p5lvl",p5lvl);
    setText("p5name", p5[0]);
    setImageURL("p5image",p5[9]);
    p5maxhp=(Math.round((p5[3]*2*p5lvl)/100)+p5lvl+10);
    p5hp=p5maxhp;
    p5hppercent = (Math.round((p5hp/p5maxhp)*100));
    setProperty("p5hpbar", "width", p5hppercent);
    setKeyValue("p5", "3", function () {
    });
    setText("p5hp", p5hp+"/"+p5maxhp);
    hideElement(name[0]);
  }else if (pokemoncount===5) {
    p6 = name;
    p6lvl=50;
    setText("p6lvl",p6lvl);
    setText("p6name", p6[0]);
    setImageURL("p6image",p6[9]);
    p6maxhp=(Math.round((p6[3]*2*p6lvl)/100)+p6lvl+10);
    p6hp=p6maxhp;
    p6hppercent = (Math.round((p6hp/p6maxhp)*100));
    setProperty("p6hpbar", "width", p6hppercent);
    setKeyValue("p6", "3", function () {
    });
    setText("p6hp", p6hp+"/"+p6maxhp);
    hideElement(name[0]);
  }
}
//Collisions end here
