const item=extendContent(ItemSource,"item", {
update(tile){
tile.entity.health = Number.MAX_VALUE
}
});
item.update = true;
item.health = 999999999
item.itemCapacity=100;