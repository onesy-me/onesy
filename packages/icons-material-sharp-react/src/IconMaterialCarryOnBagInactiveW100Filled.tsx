import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarryOnBagInactiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagInactiveW100Filled'

      short_name='CarryOnBagInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M712-112 592-229q8 8 13 19t5 24q0 25.83-18.12 43.92-18.12 18.08-44 18.08T504-142.12q-18-18.12-18-44T504.08-230q18.09-18 43.92-18 11 0 22 4t19 12l-44-44q-37 1-62 27t-25 63v6.83q0 3.17 1 7.17h-85v-278l-28-28v306h-94v-400L84-740l20-20 628 628-20 20ZM548-430 349-628h171v-172h-60v-28h88v398Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactiveW100Filled.displayName = 'OnesyIconMaterialCarryOnBagInactiveW100Filled';

export default IconMaterialCarryOnBagInactiveW100Filled;
