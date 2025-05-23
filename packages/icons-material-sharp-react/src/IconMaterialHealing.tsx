import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Healing'

      short_name='Healing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-254 274-48 48-274l206-206L48-686l226-226 206 206 206-206 226 226-206 206 206 206L686-48 480-254Zm0-266q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm-170-16 114-114-150-150-114 114 150 150Zm90 96q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Zm80 80q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm80-80q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520q-17 0-28.5 11.5T520-480q0 17 11.5 28.5T560-440Zm-24 130 150 150 114-114-150-150-114 114ZM339-621Zm282 282Z"/>
    </Icon>
  );
});

IconMaterialHealing.displayName = 'OnesyIconMaterialHealing';

export default IconMaterialHealing;
