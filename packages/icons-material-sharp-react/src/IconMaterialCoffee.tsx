import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoffee = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Coffee'

      short_name='Coffee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240q-117 0-198.5-81.5T160-520v-320h580q58 0 99 41t41 99q0 58-41 99t-99 41h-20v40q0 117-81.5 198.5T440-240ZM240-640h400v-120H240v120Zm200 320q83 0 141.5-58.5T640-520v-40H240v40q0 83 58.5 141.5T440-320Zm280-320h20q25 0 42.5-17.5T800-700q0-25-17.5-42.5T740-760h-20v120ZM160-120v-80h640v80H160Zm280-440Z"/>
    </Icon>
  );
});

IconMaterialCoffee.displayName = 'OnesyIconMaterialCoffee';

export default IconMaterialCoffee;
