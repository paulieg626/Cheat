const power=extend(PowerSource,"power", {
update(){
this.health = Number.MAX_VALUE
}
});
power.update = true;
power.health = 900000000;