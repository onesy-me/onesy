import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCakeAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeAdd'

      short_name='CakeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-720h-40q-17 0-28.5-11.5T680-760q0-17 11.5-28.5T720-800h40v-40q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840v40h40q17 0 28.5 11.5T920-760q0 17-11.5 28.5T880-720h-40v40q0 17-11.5 28.5T800-640q-17 0-28.5-11.5T760-680v-40ZM120-80q-17 0-28.5-11.5T80-120v-200q0-33 23.5-56.5T160-400v-160q0-33 23.5-56.5T240-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l42-42q2-2 14-6 2 0 14 6l42 42q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T720-560v160q33 0 56.5 23.5T800-320v200q0 17-11.5 28.5T760-80H120Zm120-320h400v-160H240v160Zm-80 240h560v-160H160v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H160h560Z"/>
    </Icon>
  );
});

IconMaterialCakeAdd.displayName = 'OnesyIconMaterialCakeAdd';

export default IconMaterialCakeAdd;
