import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddRowBelowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowBelowFilled'

      short_name='AddRowBelow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-17 0-28.5-11.5T440-120v-40h-40q-17 0-28.5-11.5T360-200q0-17 11.5-28.5T400-240h40v-40q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v40h40q17 0 28.5 11.5T600-200q0 17-11.5 28.5T560-160h-40v40q0 17-11.5 28.5T480-80ZM120-560v-240q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v240H120Zm80 400q-33 0-56.5-23.5T120-240v-240h720v240q0 33-23.5 56.5T760-160h-44q-16 0-26.5-12t-9.5-28q0-83-58-141.5T480-400q-84 0-142 58.5T280-200q0 16-10 28t-26 12h-44Z"/>
    </Icon>
  );
});

IconMaterialAddRowBelowFilled.displayName = 'OnesyIconMaterialAddRowBelowFilled';

export default IconMaterialAddRowBelowFilled;
