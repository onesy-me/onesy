import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthW100'

      short_name='South'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-144q-6 0-11-2t-10-7L244-368q-4-4-4-9.5t4-9.5q4-4 9-4.5t9 3.5l204 204v-631q0-6 4-10t10-4q6 0 10 4t4 10v630l203-203q4-4 10-4.5t10 4.5q4 4 4 9.5t-4 9.5L501-153q-5 5-10 7t-11 2Z"/>
    </Icon>
  );
});

IconMaterialSouthW100.displayName = 'OnesyIconMaterialSouthW100';

export default IconMaterialSouthW100;
