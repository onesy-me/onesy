import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberPinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinW100Filled'

      short_name='FiberPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-376h28v-84h140v-124H220v208Zm236 0h28v-208h-28v208Zm116 0h28v-162l110 162h30v-208h-28v162L604-584h-32v208ZM248-488v-68h112v68H248ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialFiberPinW100Filled.displayName = 'OnesyIconMaterialFiberPinW100Filled';

export default IconMaterialFiberPinW100Filled;
