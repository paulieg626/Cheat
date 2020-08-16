const liquid=extendContent(LiquidSource,"liquid", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
liquid.liquidCapacity = 100;
liquid.health = 999999999
liquid.requirements(Category.liquid,ItemStack.with(Items.copper,0),true);