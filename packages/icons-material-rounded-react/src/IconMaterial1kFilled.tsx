import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kFilled'

      short_name='1k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m540-450 62 79q2 3 22 11 17 0 25-15.5t-3-29.5l-56-75 57-76q11-14 3-29t-26-15q-7 0-12.5 3t-9.5 8l-62 79v-60q0-13-8.5-21.5T510-600q-13 0-21.5 8.5T480-570v180q0 13 8.5 21.5T510-360q13 0 21.5-8.5T540-390v-60Zm-200-90v150q0 13 8.5 21.5T370-360q13 0 21.5-8.5T400-390v-180q0-13-8.5-21.5T370-600h-60q-13 0-21.5 8.5T280-570q0 13 8.5 21.5T310-540h30ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterial1kFilled.displayName = 'OnesyIconMaterial1kFilled';

export default IconMaterial1kFilled;
