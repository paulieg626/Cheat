const conveyor=extend(Conveyor,"conv2", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
conveyor.speed = 0.64;
conveyor.displayedSpeed = 88;
conveyor.health = 900000000;