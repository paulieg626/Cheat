const wall = extendContent(Wall, "wall", {
update(t){
t.entity.health = Number.MAX_VALUE
}
});
wall.update = true;
wall.health = 900000000;
wall.requirements(Category.defense,ItemStack.with(Items.copper,0),true);