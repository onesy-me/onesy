import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCognition = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cognition'

      short_name='Cognition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l64 255H760v200H600v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"/>
    </Icon>
  );
});

IconMaterialCognition.displayName = 'OnesyIconMaterialCognition';

export default IconMaterialCognition;
