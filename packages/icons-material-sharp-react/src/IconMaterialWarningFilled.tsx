import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningFilled'

      short_name='Warning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m40-120 440-760 440 760H40Zm440-120q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Z"/>
    </Icon>
  );
});

IconMaterialWarningFilled.displayName = 'OnesyIconMaterialWarningFilled';

export default IconMaterialWarningFilled;
