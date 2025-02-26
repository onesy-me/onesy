import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIos'

      short_name='ArrowBackIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIos.displayName = 'OnesyIconMaterialArrowBackIos';

export default IconMaterialArrowBackIos;
