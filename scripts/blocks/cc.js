const cc = extendContent(Wall, "cc", {
update(){
    this.entity.health = Number.MAX_VALUE
    c = Vars.state.teams.closestCore(this.getX(), this.getY(), this.team);
    for(y = 0; y < Vars.content.items().size; y++){
      i = Vars.content.items().get(y);
      if(this.items.get(i) < 900000000){
        this.items.add(i, 10000000)
      }
     }
}
});
cc.update = true;