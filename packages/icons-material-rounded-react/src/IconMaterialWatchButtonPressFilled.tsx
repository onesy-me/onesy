import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchButtonPressFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchButtonPressFilled'

      short_name='WatchButtonPress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-480q-17 0-28.5-11.5T760-520v-280q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800v280q0 17-11.5 28.5T800-480ZM340-80q-26 0-47.5-15.5T263-137l-37-125q-48-38-77-95t-29-123q0-66 29-123t77-95l37-125q8-26 29.5-41.5T340-880h120q26 0 47.5 15.5T537-823l37 125q48 38 77 95t29 123q0 66-29 123t-77 95l-37 125q-8 26-29.5 41.5T460-80H340Zm60-200q83 0 141.5-58.5T600-480q0-83-58.5-141.5T400-680q-83 0-141.5 58.5T200-480q0 83 58.5 141.5T400-280Z"/>
    </Icon>
  );
});

IconMaterialWatchButtonPressFilled.displayName = 'OnesyIconMaterialWatchButtonPressFilled';

export default IconMaterialWatchButtonPressFilled;
