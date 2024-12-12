import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoChatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatW100'

      short_name='VideoChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-426h268v-118l76 76v-184l-76 76v-118H306v268ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoChatW100.displayName = 'OnesyIconMaterialVideoChatW100';

export default IconMaterialVideoChatW100;
