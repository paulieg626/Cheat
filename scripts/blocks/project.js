const project = extendContent(OverdriveProjector, "project", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
project.health = 900000000;
project.requirements(Category.effect,ItemStack.with(Items.copper,0),true);