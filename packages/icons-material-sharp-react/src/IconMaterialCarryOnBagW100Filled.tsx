import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarryOnBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagW100Filled'

      short_name='CarryOnBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M587.88-124Q562-124 544-142.12q-18-18.12-18-44T544.12-230q18.12-18 44-18T632-229.88q18 18.12 18 44T631.88-142q-18.12 18-44 18ZM292-172v-456h94v456h-94Zm122 0v-456h146v-172h-60v-28h88v552q-37.5 0-63.75 26.25T498-186v6.83q0 3.17 1 7.17h-85Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagW100Filled.displayName = 'OnesyIconMaterialCarryOnBagW100Filled';

export default IconMaterialCarryOnBagW100Filled;
