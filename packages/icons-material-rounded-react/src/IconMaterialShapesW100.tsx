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
      <path d="M588-372ZM420-144q-24.75 0-42.37-17.63Q360-179.25 360-204v-22q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v22q0 14 9 23t23 9h336q14 0 23-9t9-23v-336q0-14-9-23t-23-9h-22q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h22q24.75 0 42.38 17.62Q816-564.75 816-540v336q0 24.75-17.62 42.37Q780.75-144 756-144H420Zm-47.81-216Q277-360 210.5-426.31T144-587.81q0-95.19 66.31-161.69t161.5-66.5q95.19 0 161.69 66.31t66.5 161.5q0 95.19-66.31 161.69T372.19-360Zm-.19-28q83 0 141.5-58.5T572-588q0-83-58.5-141.5T372-788q-83 0-141.5 58.5T172-588q0 83 58.5 141.5T372-388Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialShapesW100.displayName = 'OnesyIconMaterialShapesW100';

export default IconMaterialShapesW100;
