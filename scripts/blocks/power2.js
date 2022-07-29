const power=extend(PowerSource,"power2", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});

power.health = 900000000;