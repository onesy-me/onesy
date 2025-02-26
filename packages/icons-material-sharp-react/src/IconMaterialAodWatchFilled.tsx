import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodWatchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodWatchFilled'

      short_name='AodWatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-500v-60h240v60H360Zm40 120v-60h160v60H400ZM360-80l-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95L600-80H360Zm120-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialAodWatchFilled.displayName = 'OnesyIconMaterialAodWatchFilled';

export default IconMaterialAodWatchFilled;
