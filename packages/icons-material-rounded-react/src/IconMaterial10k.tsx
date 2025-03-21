import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial10k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10k'

      short_name='10k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-540v150q0 13 8.5 21.5T270-360q13 0 21.5-8.5T300-390v-180q0-13-8.5-21.5T270-600h-40q-13 0-21.5 8.5T200-570q0 13 8.5 21.5T230-540h10Zm140 180h100q17 0 28.5-11.5T520-400v-160q0-17-11.5-28.5T480-600H380q-17 0-28.5 11.5T340-560v160q0 17 11.5 28.5T380-360Zm20-60v-120h60v120h-60Zm217-30 61 79q2 3 23 11 18 0 26-16.5t-3-30.5l-57-73 57-74q11-14 3-30t-26-16q-7 0-13 3t-10 8l-61 79v-60q0-13-8.5-21.5T587-600q-13 0-21.5 8.5T557-570v180q0 13 8.5 21.5T587-360q13 0 21.5-8.5T617-390v-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterial10k.displayName = 'OnesyIconMaterial10k';

export default IconMaterial10k;
