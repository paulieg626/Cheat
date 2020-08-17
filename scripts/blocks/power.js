const power=extendContent(PowerSource,"power", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
power.health = 900000000;
power.requirements(Category.power,ItemStack.with(Items.copper,0),true);