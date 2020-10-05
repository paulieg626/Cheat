const wall = extendContent(Wall, "wall", {
update(){
this.entity.health = Number.MAX_VALUE
}
});
wall.update = true;
wall.health = 900000000;