import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlus'

      short_name='1kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-460v40q0 8 6 14t14 6q8 0 14-6t6-14v-40h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40v-40q0-8-6-14t-14-6q-8 0-14 6t-6 14v40h-40q-8 0-14 6t-6 14q0 8 6 14t14 6h40Zm-180 10 61 79q2 3 23 11 18 0 26-16.5t-3-30.5l-57-73 57-74q11-14 3-30t-26-16q-7 0-13 3t-10 8l-61 79v-60q0-13-8.5-21.5T450-600q-13 0-21.5 8.5T420-570v180q0 13 8.5 21.5T450-360q13 0 21.5-8.5T480-390v-60Zm-180-90v150q0 13 8.5 21.5T330-360q13 0 21.5-8.5T360-390v-180q0-13-8.5-21.5T330-600h-60q-13 0-21.5 8.5T240-570q0 13 8.5 21.5T270-540h30ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterial1kPlus.displayName = 'OnesyIconMaterial1kPlus';

export default IconMaterial1kPlus;
