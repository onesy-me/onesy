import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationAlt'

      short_name='ScreenRotationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M487-104 219-371q-6-6-9-13t-3-15q0-16 11-28.5t29-12.5q8 0 15.5 3t13.5 9l268 268 200-200h-64q-17 0-28.5-11.5T640-400q0-17 11.5-28.5T680-440h160q17 0 28.5 11.5T880-400v160q0 17-11.5 28.5T840-200q-17 0-28.5-11.5T800-240v-64L600-104q-11 11-25.5 17T544-81q-15 0-30-6t-27-17ZM120-520q-17 0-28.5-11.5T80-560v-160q0-17 11.5-28.5T120-760q17 0 28.5 11.5T160-720v64l200-200q12-12 27-17.5t30-5.5q16 0 30.5 5.5T473-856l268 267q6 6 9 13t3 15q0 16-11 28.5T713-520q-8 0-15.5-3t-13.5-9L416-800 216-600h64q17 0 28.5 11.5T320-560q0 17-11.5 28.5T280-520H120Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationAlt.displayName = 'OnesyIconMaterialScreenRotationAlt';

export default IconMaterialScreenRotationAlt;
