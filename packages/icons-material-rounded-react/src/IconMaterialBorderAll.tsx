import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAll'

      short_name='BorderAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200Zm400-240v240h240v-240H520Zm0-80h240v-240H520v240Zm-80 0v-240H200v240h240Zm0 80H200v240h240v-240Z"/>
    </Icon>
  );
});

IconMaterialBorderAll.displayName = 'OnesyIconMaterialBorderAll';

export default IconMaterialBorderAll;
