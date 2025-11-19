import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusPenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusPenFilled'

      short_name='StylusPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-320 100-360h60v-60l60-140h40l60 140v60h60l100 360H240Zm-80 200 40-120h560l40 120H160Z"/>
    </Icon>
  );
});

IconMaterialStylusPenFilled.displayName = 'OnesyIconMaterialStylusPenFilled';

export default IconMaterialStylusPenFilled;
