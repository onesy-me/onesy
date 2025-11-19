import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileChatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileChatFilled'

      short_name='MobileChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v280H440v520h113l80-80h127v160H200Zm320-160v-360h360v280H600l-80 80Zm-40-520q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialMobileChatFilled.displayName = 'OnesyIconMaterialMobileChatFilled';

export default IconMaterialMobileChatFilled;
