import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUserAttributes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UserAttributes'

      short_name='UserAttributes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-680q-17 0-28.5-11.5T560-720q0-17 11.5-28.5T600-760h240q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680H600Zm0 160q-17 0-28.5-11.5T560-560q0-17 11.5-28.5T600-600h240q17 0 28.5 11.5T880-560q0 17-11.5 28.5T840-520H600Zm0 160q-17 0-28.5-11.5T560-400q0-17 11.5-28.5T600-440h240q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H600Zm-280-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-200v-36q0-21 10-40t28-30q45-27 95.5-40.5T320-360q56 0 106.5 13.5T522-306q18 11 28 30t10 40v36q0 17-11.5 28.5T520-160H120q-17 0-28.5-11.5T80-200Zm86-40h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-40Zm0 280Z"/>
    </Icon>
  );
});

IconMaterialUserAttributes.displayName = 'OnesyIconMaterialUserAttributes';

export default IconMaterialUserAttributes;
