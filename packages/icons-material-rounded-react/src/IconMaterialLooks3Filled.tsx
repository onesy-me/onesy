import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3Filled'

      short_name='Looks3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-280q33 0 56.5-23.5T600-360v-60q0-26-17-43t-43-17q26 0 43-17t17-43v-60q0-33-23.5-56.5T520-680H400q-17 0-28.5 11.5T360-640q0 17 11.5 28.5T400-600h120v80h-40q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440h40v80H400q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280h120ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialLooks3Filled.displayName = 'OnesyIconMaterialLooks3Filled';

export default IconMaterialLooks3Filled;
