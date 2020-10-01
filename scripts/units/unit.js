const unit = extendContent(UnitType,"unit",{});
unit.constructor = () => {
	const u = extend(CommanderUnitWaterMove, {});
	return u
}

unit.speed = 5;
unit.range = 3000;
unit.health = 900000000;
unit.flying = true;