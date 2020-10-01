const liquid=extendContent(LiquidSource,"liquid", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
liquid.liquidCapacity = 100;
liquid.health = 900000000;