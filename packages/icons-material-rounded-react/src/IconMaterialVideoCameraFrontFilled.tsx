import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontFilled'

      short_name='VideoCameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T480-560q0-33-23.5-56.5T400-640q-33 0-56.5 23.5T320-560q0 33 23.5 56.5T400-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontFilled.displayName = 'OnesyIconMaterialVideoCameraFrontFilled';

export default IconMaterialVideoCameraFrontFilled;
