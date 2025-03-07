import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShapesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapesW100'

      short_name='Shapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-372ZM360-240h28v68h400v-400h-68v-28h96v456H360v-96Zm12.19-120Q277-360 210.5-426.31T144-587.81q0-95.19 66.31-161.69t161.5-66.5q95.19 0 161.69 66.31t66.5 161.5q0 95.19-66.31 161.69T372.19-360Zm-.19-28q83 0 141.5-58.5T572-588q0-83-58.5-141.5T372-788q-83 0-141.5 58.5T172-588q0 83 58.5 141.5T372-388Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialShapesW100.displayName = 'OnesyIconMaterialShapesW100';

export default IconMaterialShapesW100;
