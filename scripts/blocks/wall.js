const wall = extendContent(Wall, "wall", {
update(t){
t.entity.health = Number.MAX_VALUE
}
});
wall.update = true;
wall.health = 900000000;