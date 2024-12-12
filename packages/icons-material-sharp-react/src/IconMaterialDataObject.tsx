import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataObject = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObject'

      short_name='DataObject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-160v-80h160v-227h80v-26h-80v-227H560v-80h240v234h80v172h-80v234H560Zm-400 0v-234H80v-172h80v-234h240v80H240v227h-80v26h80v227h160v80H160Z"/>
    </Icon>
  );
});

IconMaterialDataObject.displayName = 'OnesyIconMaterialDataObject';

export default IconMaterialDataObject;
