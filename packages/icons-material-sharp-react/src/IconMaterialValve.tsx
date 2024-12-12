import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialValve = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Valve'

      short_name='Valve'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-640v-120H280v-80h400v80H520v120h-80ZM160-120v-320h80v40h120v-120h-40v-80h320v80h-40v120h120v-40h80v320h-80v-40H240v40h-80Zm80-120h480v-80H520v-200h-80v200H240v80Zm240 0Z"/>
    </Icon>
  );
});

IconMaterialValve.displayName = 'OnesyIconMaterialValve';

export default IconMaterialValve;
