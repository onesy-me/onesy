import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNature = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nature'

      short_name='Nature'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-80h240v-160h-80q-83 0-141.5-58.5T160-520q0-60 33-110.5t89-73.5q9-75 65.5-125.5T480-880q76 0 132.5 50.5T678-704q56 23 89 73.5T800-520q0 83-58.5 141.5T600-320h-80v160h240v80H200Zm160-320h240q50 0 85-35t35-85q0-36-20.5-66T646-630l-42-18-6-46q-6-45-39.5-75.5T480-800q-45 0-78.5 30.5T362-694l-6 46-42 18q-33 14-53.5 44T240-520q0 50 35 85t85 35Zm120-200Z"/>
    </Icon>
  );
});

IconMaterialNature.displayName = 'OnesyIconMaterialNature';

export default IconMaterialNature;
