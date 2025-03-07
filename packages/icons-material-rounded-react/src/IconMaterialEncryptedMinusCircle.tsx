import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEncryptedMinusCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedMinusCircle'

      short_name='EncryptedMinusCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v105q0 17-11.5 28.5T760-560q-17 0-28.5-11.5T720-600v-104l-240-90-240 90v188q0 45 11.5 90t32.5 86.5q21 41.5 50.5 76.5t65.5 61q14 10 17 25.5t-7 29.5q-10 14-25.5 16.5T355-137q-91-63-143-165.5T160-516Zm320 22Zm100 234h200q8 0 14-6t6-14q0-8-6-14t-14-6H580q-8 0-14 6t-6 14q0 8 6 14t14 6ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialEncryptedMinusCircle.displayName = 'OnesyIconMaterialEncryptedMinusCircle';

export default IconMaterialEncryptedMinusCircle;
