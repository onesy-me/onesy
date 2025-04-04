import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5kFilled'

      short_name='5k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m580-450 62 79q2 3 22 11 17 0 25-15.5t-3-29.5l-56-75 57-76q11-14 3-29t-26-15q-7 0-12.5 3t-9.5 8l-62 79v-60q0-13-8.5-21.5T550-600q-13 0-21.5 8.5T520-570v180q0 13 8.5 21.5T550-360q13 0 21.5-8.5T580-390v-60Zm-200 30h-90q-13 0-21.5 8.5T260-390q0 13 8.5 21.5T290-360h110q17 0 28.5-11.5T440-400v-60q0-17-11.5-28.5T400-500h-80v-40h90q13 0 21.5-8.5T440-570q0-13-8.5-21.5T410-600H290q-13 0-21.5 8.5T260-570v80q0 13 8.5 21.5T290-460h90v40ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterial5kFilled.displayName = 'OnesyIconMaterial5kFilled';

export default IconMaterial5kFilled;
