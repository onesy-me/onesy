import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCognitionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CognitionFilled'

      short_name='Cognition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 6.5 37.5T451-455q16 14 32 11.5t26-13.5q10-11 11.5-26.5T508-512q-2-2-4-5t-2-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-19 4.5-37t13.5-34q8-15 8-31.5T394-680q-12-12-29-11.5T339-677q-20 28-30 60t-10 67q0 88 56 149.5T491-339ZM280-80q-17 0-28.5-11.5T240-120v-132q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v40q0 17-11.5 28.5T560-80H280Z"/>
    </Icon>
  );
});

IconMaterialCognitionFilled.displayName = 'OnesyIconMaterialCognitionFilled';

export default IconMaterialCognitionFilled;
