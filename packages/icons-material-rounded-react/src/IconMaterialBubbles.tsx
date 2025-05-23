import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubbles = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bubbles'

      short_name='Bubbles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m464-480-90-90q-11-11-11.5-27.5T374-626q11-11 28-11t28 11l90 89v-49q0-17 11.5-28.5T560-626q17 0 28.5 11.5T600-586v146q0 17-11.5 28.5T560-400H414q-17 0-28.5-11.5T374-440q0-17 11.5-28.5T414-480h50Zm296 320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-600 0q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-200H160v480h360q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160H160Z"/>
    </Icon>
  );
});

IconMaterialBubbles.displayName = 'OnesyIconMaterialBubbles';

export default IconMaterialBubbles;
