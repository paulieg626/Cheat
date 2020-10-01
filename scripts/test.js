const test = extendContent(Block,"test",{
update(tile){
     entity = tile.ent();
       if(entity.getSignal() == NaN){
    		entity.setSignal(0);
    	}
},
setBars(){
this.super$setBars();
this.bars.add("signal", new Func({
 get: function(entity){
  return new Bar(prov(() => (
    Core.bundle.get("bar.items").replace ("{0}",entity.getSignal()))),
    prov(() => Pal.ammo), new Floatp({get: function(){
     return entity.getSignal();
    }
   }));
  }
}));
}
});

test.entityType = prov(() => {
 const entity = extend(TileEntity, {
  getSignal: function(){
   return this._signal;
  },	
  setSignal: function(val){	
   this._signal = val;
  },	
  asignal: function(){
   return false;	
  }
 });
entity.setSignal(0);
return entity;
});

test.localizedName = "TEST";
test.update = true;
test.itemCapacity = 100;
test.hasItems = true;
test.solid = true;
test.destructible = true;

test.requirements(Category.effect,ItemStack.with(Items.copper,0),true);