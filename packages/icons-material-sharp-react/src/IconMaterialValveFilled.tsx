import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialValveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ValveFilled'

      short_name='Valve'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-640v-120H280v-80h400v80H520v120h-80ZM160-120v-320h80v40h120v-120h-40v-80h320v80h-40v120h120v-40h80v320h-80v-40H240v40h-80Z"/>
    </Icon>
  );
});

IconMaterialValveFilled.displayName = 'OnesyIconMaterialValveFilled';

export default IconMaterialValveFilled;
