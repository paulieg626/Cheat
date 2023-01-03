var unitsGroup = [];
var teamsGroup = [];

const m = extend(Block, "magic",{
    init(){
        this.super$init();
        unitsGroup = Vars.content.units()
        teamsGroup = Team.baseTeams
    }
})

m.buildType = prov(() => extend(Building,{
    pint: 0,
    rX: 0,
    rY: 0,
    spawnX: 0,
    spawnY: 0,
    unitAll: [],
    addButtonTeam(i, table){
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" + i)), Styles.clearNonei, 30, run(() => {
        this.team = teamsGroup[i]
        Vars.player.team(teamsGroup[i])
    })).size(40);
    },
    addButtonUnit(b, table){
        table.button(new TextureRegionDrawable(unitsGroup.get(b)./*create(teamsGroup[0]).*/fullIcon), Styles.clearNonei, 30, run(() => {
          this.unitAll.push(b);
        })).size(40);
    },
    buildConfiguration(table) {
      let t = new Table(Styles.grayPanel);
      table.add(t).size(0,400);
      let ti = new Table();
      let units = new Table();
      let ti1 = new Table();
      let ti2 = new Table();
      let ti3 = new Table();
      t.add(ti).size(0,40);
      t.add(units);
      for(var i = 0; i < teamsGroup.length; i++){
          this.addButtonTeam(i, ti)
      };
      t.row();
      let pane = new ScrollPane(units, Styles.smallPane);
      t.add(pane).size(240);
      pane.setScrollingDisabled(true, false);
      pane.setOverscroll(false, false);
      t.row();
      t.add(ti1).size(0,40);
      t.row();
      t.add(ti2).size(0,40);
      t.row();
      t.add(ti3).size(0,40);
      for(var b = 0; b < unitsGroup.size; b++){
        this.addButtonUnit(b, units);
        if(b % 6 == 5){
            units.row()
        }
      };
      ti1.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" +"kill")), Styles.clearNonei, 30, run(() => {
        Groups.unit.each(cons(unit => {if(unit!=null&&unit!=undefined){unit.kill()}}))
      })).size(40);
      //Верх
      ti1.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-up")), Styles.clearNonei, 30, run(() => {
        if(this.rY<39){this.spawnY=this.spawnY+8;this.rY=this.rY+8}
      })).size(40);
      ti1.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" +"clear")), Styles.clearNonei, 30, run(() => {
        this.unitAll = [];
      })).size(40);
       //Лево
      ti2.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-left")), Styles.clearNonei, 30, run(() => {
        if(this.rX>-39){this.spawnX=this.spawnX-8;this.rX=this.rX-8}
      })).size(40);
      ti2.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" +"play")), Styles.clearNonei, 30, run(() => {
        for(var b = 0; b < this.unitAll.length; b++){
          unitsGroup.get(this.unitAll[b]).spawn(this.team, this.spawnX, this.spawnY);
        }
        this.unitAll = [];
      })).size(40);
      //Право
      ti2.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-right")), Styles.clearNonei, 30, run(() => {
        if(this.rX<39){this.spawnX=this.spawnX+8;this.rX=this.rX+8}
      })).size(40);
      ti3.button("", Styles.cleart, run(() => {})).size(40);
      //Низ
      ti3.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-down")), Styles.clearNonei, 30, run(() => {
        if(this.rY>-39){this.spawnY=this.spawnY-8;this.rY=this.rY-8}
      })).size(40);
      ti3.button("", Styles.cleart, run(() =>{})).size(40);
    },
    update(tile){
        if(this.pint <= 0){
        this.pint++
        this.loadS();
        }
    },
    draw(){
      Draw.rect(this.block.name,this.x,this.y);
      Draw.rect(this.block.name+"-g",this.spawnX,this.spawnY);
    },
    loadS(){
      this.spawnX = this.x;
      this.spawnY = this.y;
    }
}));
m.floating = true;
m.update = true;
m.configurable = true;