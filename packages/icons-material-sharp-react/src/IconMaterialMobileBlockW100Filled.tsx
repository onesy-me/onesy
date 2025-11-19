import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileBlockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileBlockW100Filled'

      short_name='MobileBlock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-336q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102q0 60 42 102t102 42Zm0-28q-48 0-82-34t-34-82q0-20 6-37.5t18-34.5l164 164q-17 12-34.5 18t-37.5 6Zm92-44L410-572q17-12 34.5-18t37.5-6q48 0 82 34t34 82q0 20-5 37t-19 35ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobileBlockW100Filled.displayName = 'OnesyIconMaterialMobileBlockW100Filled';

export default IconMaterialMobileBlockW100Filled;
