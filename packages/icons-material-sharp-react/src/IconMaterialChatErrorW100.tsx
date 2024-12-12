import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatErrorW100'

      short_name='ChatError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-437 104-103 104 103 19-19-103-104 103-104-19-19-104 103-104-103-19 19 103 104-103 104 19 19ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialChatErrorW100.displayName = 'OnesyIconMaterialChatErrorW100';

export default IconMaterialChatErrorW100;
