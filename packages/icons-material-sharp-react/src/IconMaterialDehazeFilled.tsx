import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDehazeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeFilled'

      short_name='Dehaze'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialDehazeFilled.displayName = 'OnesyIconMaterialDehazeFilled';

export default IconMaterialDehazeFilled;
