import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideo'

      short_name='SwitchVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-440h176l-16 16q-11 11-11 28t11 28q11 11 28 11t28-11l84-84q6-6 8.5-13t2.5-15q0-8-2.5-15t-8.5-13l-84-84q-11-11-28-11t-28 11q-11 11-11 28t11 28l16 16H312l16-16q11-11 11-28t-11-28q-11-11-28-11t-28 11l-84 84q-6 6-8.5 13t-2.5 15q0 8 2.5 15t8.5 13l84 84q11 11 28 11t28-11q11-11 11-28t-11-28l-16-16ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideo.displayName = 'OnesyIconMaterialSwitchVideo';

export default IconMaterialSwitchVideo;
