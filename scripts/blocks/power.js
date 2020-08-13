const power=extendContent(PowerSource,"power", {});
power.health = 999999999;
power.requirements(Category.power,ItemStack.with(Items.copper,0),true);