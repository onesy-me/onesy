import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Balance'

      short_name='Balance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h320v-447q-26-9-45-28t-28-45H240l110 258q5 11 6 22.5t-1 23.5q-9 46-49.5 71T220-320q-45 0-85.5-25T85-416q-2-12-1-23.5t6-22.5l110-258h-40q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800h207q12-35 43-57.5t70-22.5q39 0 70 22.5t43 57.5h207q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720h-40l110 258q5 11 6 22.5t-1 23.5q-9 46-49.5 71T740-320q-45 0-85.5-25T605-416q-2-12-1-23.5t6-22.5l110-258H593q-9 26-28 45t-45 28v447h320q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm545-320h150l-75-174-75 174Zm-520 0h150l-75-174-75 174Zm335-280q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialBalance.displayName = 'OnesyIconMaterialBalance';

export default IconMaterialBalance;
