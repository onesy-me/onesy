import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluorescent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fluorescent'

      short_name='Fluorescent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-358v-240h560v240H200Zm240-402v-120h80v120h-80Zm308 112-56-56 72-72 56 56-72 72ZM440-80v-120h80v120h-80Zm324-100-72-72 56-56 72 72-56 56ZM212-648l-72-72 56-56 72 72-56 56Zm-16 468-56-56 72-72 56 56-72 72Zm84-258h400v-80H280v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialFluorescent.displayName = 'OnesyIconMaterialFluorescent';

export default IconMaterialFluorescent;
