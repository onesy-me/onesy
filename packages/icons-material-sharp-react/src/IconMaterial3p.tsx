import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3p = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3p'

      short_name='3p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-400h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterial3p.displayName = 'OnesyIconMaterial3p';

export default IconMaterial3p;
