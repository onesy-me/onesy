import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewDayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayFilled'

      short_name='ViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-80h720v80H120Zm0-160v-320h720v320H120Zm0-400v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialViewDayFilled.displayName = 'OnesyIconMaterialViewDayFilled';

export default IconMaterialViewDayFilled;
