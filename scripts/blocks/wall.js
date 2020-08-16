const wall = extendContent(Wall, "wall", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
wall.health = 999999999
wall.requirements(Category.defense,ItemStack.with(Items.copper,0),true);