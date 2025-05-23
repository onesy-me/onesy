import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchWakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchWakeFilled'

      short_name='WatchWake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-280q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280Zm40-160h-40q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440Zm40-160h-80q-17 0-28.5-11.5T760-640q0-17 11.5-29t28.5-12h80q17 0 28.5 12t11.5 29q0 17-11.5 28.5T880-600ZM310-80q-14 0-24-8t-14-21l-46-153q-48-38-77-95t-29-123q0-66 29-123t77-95l46-153q4-13 14-21t24-8h180q14 0 24 8t14 21l46 153q48 38 77 95t29 123q0 66-29 123t-77 95l-46 153q-4 13-14 21t-24 8H310Zm90-200q83 0 141.5-58.5T600-480q0-83-58.5-141.5T400-680q-83 0-141.5 58.5T200-480q0 83 58.5 141.5T400-280Z"/>
    </Icon>
  );
});

IconMaterialWatchWakeFilled.displayName = 'OnesyIconMaterialWatchWakeFilled';

export default IconMaterialWatchWakeFilled;
