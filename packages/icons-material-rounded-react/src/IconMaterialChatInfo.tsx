import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatInfo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatInfo'

      short_name='ChatInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm0 320q17 0 28.5-11.5T520-400v-160q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v160q0 17 11.5 28.5T480-360ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialChatInfo.displayName = 'OnesyIconMaterialChatInfo';

export default IconMaterialChatInfo;
