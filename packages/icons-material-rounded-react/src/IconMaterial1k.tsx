import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1k'

      short_name='1k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m540-450 61 79q2 3 23 11 18 0 26-16.5t-3-30.5l-57-73 57-74q11-14 3-30t-26-16q-7 0-13 3t-10 8l-61 79v-60q0-13-8.5-21.5T510-600q-13 0-21.5 8.5T480-570v180q0 13 8.5 21.5T510-360q13 0 21.5-8.5T540-390v-60Zm-200-90v150q0 13 8.5 21.5T370-360q13 0 21.5-8.5T400-390v-180q0-13-8.5-21.5T370-600h-60q-13 0-21.5 8.5T280-570q0 13 8.5 21.5T310-540h30ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
    </Icon>
  );
});

IconMaterial1k.displayName = 'OnesyIconMaterial1k';

export default IconMaterial1k;
