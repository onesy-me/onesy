import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMissedVideoCallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallFilled'

      short_name='MissedVideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M428-337q8 0 15-3t13-9l124-125q11-11 11.5-27.5T580-530q-11-11-28-11t-28 11l-96 96-88-86h20q17 0 28.5-11.5T400-560q0-17-11.5-28.5T360-600H240q-17 0-28.5 11.5T200-560v120q0 17 11.5 28.5T240-400q17 0 28.5-11.5T280-440v-28l120 120q6 6 13 8.5t15 2.5ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallFilled.displayName = 'OnesyIconMaterialMissedVideoCallFilled';

export default IconMaterialMissedVideoCallFilled;
