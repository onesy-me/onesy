import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabCloseRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRightFilled'

      short_name='TabCloseRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-40-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40Zm-640-80v-720h720v414q-19-7-39.5-10.5T759-440q-39 0-74 12t-64 33l-85-85 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56 114-114 85 85q-21 29-33 64.5T520-200q0 21 3.5 41t10.5 39H120Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRightFilled.displayName = 'OnesyIconMaterialTabCloseRightFilled';

export default IconMaterialTabCloseRightFilled;
