import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRightAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltW100Filled'

      short_name='ArrowRightAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m544-276-20-20 170-170H212v-28h482L524-664l20-20 204 204-204 204Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltW100Filled.displayName = 'OnesyIconMaterialArrowRightAltW100Filled';

export default IconMaterialArrowRightAltW100Filled;
