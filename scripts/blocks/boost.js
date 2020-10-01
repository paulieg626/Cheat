const project = extendContent(OverdriveProjector, "boost", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
project.health = 900000000;