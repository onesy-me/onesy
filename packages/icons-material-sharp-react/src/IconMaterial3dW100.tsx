import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3dW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3dW100'

      short_name='3d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-584v208h138l30-20v-168l-30-20H520Zm28 180v-152h112v152H548Zm-276 28h134l14-14v-81l-9-9 9-9v-81l-14-14H272v28h120v62h-80v28h80v62H272v28ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterial3dW100.displayName = 'OnesyIconMaterial3dW100';

export default IconMaterial3dW100;
