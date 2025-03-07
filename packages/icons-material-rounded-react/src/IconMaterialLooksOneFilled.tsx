import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksOneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneFilled'

      short_name='LooksOne'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-600v280q0 17 11.5 28.5T520-280q17 0 28.5-11.5T560-320v-320q0-17-11.5-28.5T520-680h-80q-17 0-28.5 11.5T400-640q0 17 11.5 28.5T440-600h40ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialLooksOneFilled.displayName = 'OnesyIconMaterialLooksOneFilled';

export default IconMaterialLooksOneFilled;
