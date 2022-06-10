const wall = extend(Wall, "wall", {
update(){
this.entity.health = Number.MAX_VALUE
}
});
wall.update = true;
wall.health = 900000000;