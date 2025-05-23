import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDownwardAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardAltW100'

      short_name='ArrowDownwardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-276 276-480l20-20 170 170v-404h28v404l170-170 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardAltW100.displayName = 'OnesyIconMaterialArrowDownwardAltW100';

export default IconMaterialArrowDownwardAltW100;
