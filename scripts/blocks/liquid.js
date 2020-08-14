const liquid=extendContent(LiquidSource,"liquid", {});
liquid.liquidCapacity = 100;
liquid.health = 99999
liquid.requirements(Category.liquid,ItemStack.with(Items.copper,0),true);