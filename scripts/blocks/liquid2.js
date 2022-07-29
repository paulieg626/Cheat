const liquid=extend(LiquidSource,"liquid2", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
liquid.liquidCapacity = 100;
liquid.health = 900000000;