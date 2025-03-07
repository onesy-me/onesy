import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchFilled'

      short_name='Watch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-80q-26 0-47.5-15.5T343-137l-37-125q-48-38-77-95t-29-123q0-66 29-123t77-95l37-125q8-26 29.5-41.5T420-880h135q20 0 36 11.5t22 31.5l41 139q48 38 77 95t29 123q0 66-29 123t-77 95l-37 125q-8 26-29.5 41.5T540-80H420Zm60-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWatchFilled.displayName = 'OnesyIconMaterialWatchFilled';

export default IconMaterialWatchFilled;
