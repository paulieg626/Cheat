const shield = extend(ForceProjector,"shield", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
shield.phaseRadiusBoost = 200;
shield.phaseUseTime = 100;
shield.radius = 200;
shield.size = 1;
shield.health = 900000000;
shield.itemCapacity = 100;