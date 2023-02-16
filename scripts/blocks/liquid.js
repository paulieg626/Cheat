const liquid=extend(LiquidSource,"liquid", {
update(){
this.health = Number.MAX_VALUE
}
});
liquid.update = true;
liquid.liquidCapacity = 10000000;
liquid.health = 900000000;