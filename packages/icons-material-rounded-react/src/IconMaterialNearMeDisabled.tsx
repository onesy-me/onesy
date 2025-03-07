import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabled'

      short_name='NearMeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M507-143 402-402 143-507q-13-5-19-15.5t-6-21.5q0-11 6.5-21.5T144-581l171-64-175-175q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T820-141L645-315l-64 171q-5 13-15.5 19.5T544-118q-11 0-21.5-6T507-143Zm294-658q8 8 11 19.5t-2 23.5l-81 218q-8 21-29.5 25.5T662-526q-8-8-11-19.5t2-22.5l51-136-136 51q-11 5-22.5 2T526-662q-16-16-11.5-37.5T540-729l218-81q12-5 23.5-2t19.5 11ZM542-268l41-109-206-206-109 41 196 78 78 196Zm52-326ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabled.displayName = 'OnesyIconMaterialNearMeDisabled';

export default IconMaterialNearMeDisabled;
