import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmbientScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbientScreenFilled'

      short_name='AmbientScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 736 50-110 110-50-110-50-50-110-50 110-110 50 110 50 50 110Zm300 200-44-96-96-44 96-44 44-96 44 96 96 44-96 44-44 96ZM80 896V256h800v367q-23-14-48.5-20.5T780 596q-83 0-141.5 58.5T580 796q0 26 6.5 51.5T607 896H80Z"/>
    </Icon>
  );
});

IconMaterialAmbientScreenFilled.displayName = 'OnesyIconMaterialAmbientScreenFilled';

export default IconMaterialAmbientScreenFilled;
