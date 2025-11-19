import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchArrowFilled'

      short_name='WatchArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-340-56-56 42-44H340v-80h126l-42-44 56-56 140 140-140 140ZM360-80l-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95L600-80H360Zm120-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWatchArrowFilled.displayName = 'OnesyIconMaterialWatchArrowFilled';

export default IconMaterialWatchArrowFilled;
