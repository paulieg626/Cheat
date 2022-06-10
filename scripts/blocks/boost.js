const project = extend(OverdriveProjector, "boost", {
update(){
this.entity.health = Number.MAX_VALUE
}
});
project.update = true;
project.health = 900000000;