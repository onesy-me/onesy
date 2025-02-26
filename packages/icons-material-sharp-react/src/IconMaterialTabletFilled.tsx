import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletFilled'

      short_name='Tablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h880v640H40Zm200-80h480v-480H240v480Z"/>
    </Icon>
  );
});

IconMaterialTabletFilled.displayName = 'OnesyIconMaterialTabletFilled';

export default IconMaterialTabletFilled;
