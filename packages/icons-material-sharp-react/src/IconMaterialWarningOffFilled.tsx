import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarningOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffFilled'

      short_name='WarningOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm395 42L375-698l105-182 395 682ZM819-28l-92-92H40l252-435L27-820l57-57L876-85l-57 57ZM440-360h47l-47-47v47Z"/>
    </Icon>
  );
});

IconMaterialWarningOffFilled.displayName = 'OnesyIconMaterialWarningOffFilled';

export default IconMaterialWarningOffFilled;
