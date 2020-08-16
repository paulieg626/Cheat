const item=extendContent(ItemSource,"item", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
item.health = 999999999
item.itemCapacity=100;
item.requirements(Category.distribution,ItemStack.with(Items.copper,0),true);