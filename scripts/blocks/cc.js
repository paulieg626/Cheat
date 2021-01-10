const cc = extendContent(Wall, "cc", {});

cc.buildType = () => extend(Building, {
update(){
    var x = this.x;
    var y = this.y;
    var core = Vars.state.teams.closestCore(x, y, this.team)
    var coreBlock = Vars.world.tileWorld(core.x, core.y)
    for(y = 0; y < Vars.content.items().size; y++){
      var i = Vars.content.items().get(y);
      if(core.items.get(i) < 900000000){
        core.items.add(i, 10000000)
      }
     }
     for(y = 0; y < Vars.content.liquids().size; y++){
       var i = Vars.content.liquids().get(y);
       this.liquids.add(i,1)
     }
}
});
cc.update = true;