import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallFilled'

      short_name='VideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-440v80q0 17 11.5 28.5T400-320q17 0 28.5-11.5T440-360v-80h80q17 0 28.5-11.5T560-480q0-17-11.5-28.5T520-520h-80v-80q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v80h-80q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440h80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Z"/>
    </Icon>
  );
});

IconMaterialVideoCallFilled.displayName = 'OnesyIconMaterialVideoCallFilled';

export default IconMaterialVideoCallFilled;
