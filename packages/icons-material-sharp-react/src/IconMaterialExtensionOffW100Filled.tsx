import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffW100Filled'

      short_name='ExtensionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-188q30-13 49-40t19-60q0-33-19-60t-49-40v-198l586 586H560q-13-30-40-49t-60-19q-33 0-60 19t-40 49H172Zm576-152L324-748h36q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h188v188q32 14 50 40.5t18 59.5q0 33-18 59.5T748-360v36Zm46 198L126-794l20-20 668 668-20 20Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffW100Filled.displayName = 'OnesyIconMaterialExtensionOffW100Filled';

export default IconMaterialExtensionOffW100Filled;
