const conveyor=extendContent(Conveyor,"conveyor", {});
conveyor.health = 99999
conveyor.itemCapacity=100;
conveyor.requirements(Category.distribution,ItemStack.with(Items.copper,0),true);