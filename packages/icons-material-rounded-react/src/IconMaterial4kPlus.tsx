import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlus'

      short_name='4kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-460v40q0 8 6 14t14 6q8 0 14-6t6-14v-40h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40v-40q0-8-6-14t-14-6q-8 0-14 6t-6 14v40h-40q-8 0-14 6t-6 14q0 8 6 14t14 6h40Zm-140 10 61 79q2 3 23 11 18 0 26-16.5t-3-30.5l-57-73 57-74q11-14 3-30t-26-16q-7 0-13 3t-10 8l-61 79v-60q0-13-8.5-21.5T490-600q-13 0-21.5 8.5T460-570v180q0 13 8.5 21.5T490-360q13 0 21.5-8.5T520-390v-60Zm-180 30v30q0 13 8.5 21.5T370-360q13 0 21.5-8.5T400-390v-30h10q13 0 21.5-8.5T440-450q0-13-8.5-21.5T410-480h-10v-90q0-13-8.5-21.5T370-600q-13 0-21.5 8.5T340-570v90h-60v-90q0-13-8.5-21.5T250-600q-13 0-21.5 8.5T220-570v120q0 13 8.5 21.5T250-420h90ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterial4kPlus.displayName = 'OnesyIconMaterial4kPlus';

export default IconMaterial4kPlus;
