const cc = extendContent(Block, "cc", {});
cc.update = true;
cc.entityType = prov(()=>extend(Building,{
  updateTile(){
    print("1")
    this.health = Number.MAX_VALUE;
    print("2")
    c = Vars.state.teams.closestCore(this.getX(), thus.getY(), t.team);
    print("3")
    for(y = 0; y < Vars.content.items().size; y++){
      print("4")
      i = Vars.content.items().get(y);
      print("5")
      if(this.items.get(i) < 900000000){
        print("6")
        this.items.add(i, 10000000)
        print("7")
      }
    }
  }
}))