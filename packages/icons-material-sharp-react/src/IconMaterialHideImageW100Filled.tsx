import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHideImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageW100Filled'

      short_name='HideImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-286 286-788h502v502Zm40 194-80-80H172v-576l-80-80 20-20 736 736-20 20ZM318-306h296l-97-97-69 85-64-74-66 86Z"/>
    </Icon>
  );
});

IconMaterialHideImageW100Filled.displayName = 'OnesyIconMaterialHideImageW100Filled';

export default IconMaterialHideImageW100Filled;
