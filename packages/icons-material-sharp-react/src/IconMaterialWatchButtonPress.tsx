import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchButtonPress = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchButtonPress'

      short_name='WatchButtonPress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-480v-360h80v360h-80ZM280-80l-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95L520-80H280Zm120-200q83 0 141.5-58.5T600-480q0-83-58.5-141.5T400-680q-83 0-141.5 58.5T200-480q0 83 58.5 141.5T400-280Zm-76-470q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H340l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T400-200q-19 0-37.5-2.5T324-210l16 50Zm-16-640h152-152Zm16 640h-16 152-136Z"/>
    </Icon>
  );
});

IconMaterialWatchButtonPress.displayName = 'OnesyIconMaterialWatchButtonPress';

export default IconMaterialWatchButtonPress;
