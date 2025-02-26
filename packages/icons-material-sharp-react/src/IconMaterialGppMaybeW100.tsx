import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGppMaybeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeW100'

      short_name='GppMaybe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q8.5 0 14.25-5.75T500-380q0-8.5-5.75-14.25T480-400q-8.5 0-14.25 5.75T460-380q0 8.5 5.75 14.25T480-360Zm-14-98h28v-182h-28v182Zm14 324q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeW100.displayName = 'OnesyIconMaterialGppMaybeW100';

export default IconMaterialGppMaybeW100;
