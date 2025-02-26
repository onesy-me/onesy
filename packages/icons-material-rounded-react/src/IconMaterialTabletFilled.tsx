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
      <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm120-80h480v-480H240v480Z"/>
    </Icon>
  );
});

IconMaterialTabletFilled.displayName = 'OnesyIconMaterialTabletFilled';

export default IconMaterialTabletFilled;
