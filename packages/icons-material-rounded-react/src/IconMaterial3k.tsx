import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3k'

      short_name='3k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m580-450 61 79q2 3 23 11 18 0 26-16.5t-3-30.5l-57-73 57-74q11-14 3-30t-26-16q-7 0-13 3t-10 8l-61 79v-60q0-13-8.5-21.5T550-600q-13 0-21.5 8.5T520-570v180q0 13 8.5 21.5T550-360q13 0 21.5-8.5T580-390v-60Zm-200 30h-90q-13 0-21.5 8.5T260-390q0 13 8.5 21.5T290-360h110q17 0 28.5-11.5T440-400v-160q0-17-11.5-28.5T400-600H290q-13 0-21.5 8.5T260-570q0 13 8.5 21.5T290-540h90v40h-60q-8 0-14 6t-6 14q0 8 6 14t14 6h60v40ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterial3k.displayName = 'OnesyIconMaterial3k';

export default IconMaterial3k;
