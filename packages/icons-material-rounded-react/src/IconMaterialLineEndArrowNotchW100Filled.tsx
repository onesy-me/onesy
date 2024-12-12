import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowNotchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowNotchW100Filled'

      short_name='LineEndArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M551-344q-10 6-18-1.5t-3-18.5l56-102H120q-6 0-10-4t-4-10q0-6 4-10t10-4h466l-56-102q-5-11 3-18.5t18-1.5l174 111q14 9 14 25t-14 25L551-344Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowNotchW100Filled.displayName = 'OnesyIconMaterialLineEndArrowNotchW100Filled';

export default IconMaterialLineEndArrowNotchW100Filled;
