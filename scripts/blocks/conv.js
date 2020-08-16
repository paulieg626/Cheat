const conveyor=extendContent(Conveyor,"conv", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
conveyor.speed = 0.64;
conveyor.displayedSpeed = 88;
conveyor.health = 999999999;
conveyor.requirements(Category.distribution,ItemStack.with(Items.copper,0),true);