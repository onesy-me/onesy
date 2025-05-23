import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksTwo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwo'

      short_name='LooksTwo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360v-80h80q33 0 56.5-23.5T600-520v-80q0-33-23.5-56.5T520-680H400q-17 0-28.5 11.5T360-640q0 17 11.5 28.5T400-600h120v80h-80q-33 0-56.5 23.5T360-440v120q0 17 11.5 28.5T400-280h160q17 0 28.5-11.5T600-320q0-17-11.5-28.5T560-360H440ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialLooksTwo.displayName = 'OnesyIconMaterialLooksTwo';

export default IconMaterialLooksTwo;
