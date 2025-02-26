import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebAssetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOff'

      short_name='WebAssetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M818-28 686-160H80v-640h80v114L26-820l57-57L875-85l-57 57ZM160-240h446L206-640h-46v400Zm720 46-80-80v-366H434L274-800h606v606Z"/>
    </Icon>
  );
});

IconMaterialWebAssetOff.displayName = 'OnesyIconMaterialWebAssetOff';

export default IconMaterialWebAssetOff;
