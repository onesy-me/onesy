import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMe'

      short_name='NearMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-402 143-507q-13-5-19-15.5t-6-21.5q0-11 6.5-21.5T144-581l614-228q12-5 23-2t19 11q8 8 11 19t-2 23L581-144q-5 13-15.5 19.5T544-118q-11 0-21.5-6T507-143L402-402Zm140 134 162-436-436 162 196 78 78 196Zm-78-196Z"/>
    </Icon>
  );
});

IconMaterialNearMe.displayName = 'OnesyIconMaterialNearMe';

export default IconMaterialNearMe;
