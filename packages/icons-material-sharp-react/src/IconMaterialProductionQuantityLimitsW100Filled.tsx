import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProductionQuantityLimitsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductionQuantityLimitsW100Filled'

      short_name='ProductionQuantityLimits'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-126q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm368 0q-23 0-38.5-15.5T610-180q0-23 15.5-38.5T664-234q23 0 38.5 15.5T718-180q0 23-15.5 38.5T664-126ZM92-826v-28h88l162 340h280l144-260h32L638-486H324l-72 132h466v28H203l107-190-148-310H92Zm374 132v-200h28v200h-28Zm-6 114v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialProductionQuantityLimitsW100Filled.displayName = 'OnesyIconMaterialProductionQuantityLimitsW100Filled';

export default IconMaterialProductionQuantityLimitsW100Filled;
