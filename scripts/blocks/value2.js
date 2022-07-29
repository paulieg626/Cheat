const container = extend(StorageBlock,"value2", {
update(tile){
tile.entity.health = Number.MAX_VALUE
}
});
container.update = true;
container.health = 900000000
container.itemCapacity=100000000;