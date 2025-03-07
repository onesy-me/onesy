import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPenSize2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize2Filled'

      short_name='PenSize2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212q-11-11-11-28t11-28l480-480q11-12 27.5-12t28.5 12q11 11 11 28t-11 28L268-212q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialPenSize2Filled.displayName = 'OnesyIconMaterialPenSize2Filled';

export default IconMaterialPenSize2Filled;
