const project2 = extend(OverdriveProjector, "boost2", {
update(){
this.entity.health = Number.MAX_VALUE
}
});
project2.update = true;
project2.health = 900000000;