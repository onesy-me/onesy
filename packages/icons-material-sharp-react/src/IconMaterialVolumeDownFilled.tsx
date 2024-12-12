import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownFilled'

      short_name='VolumeDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-360v-240h160l200-200v640L360-360H200Zm440 40v-322q45 21 72.5 65t27.5 97q0 53-27.5 96T640-320Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownFilled.displayName = 'OnesyIconMaterialVolumeDownFilled';

export default IconMaterialVolumeDownFilled;
