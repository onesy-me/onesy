import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvChargerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvChargerW100'

      short_name='EvCharger'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-534h240v-226H240v226Zm0 334h240v-306H240v306Zm-28 28v-616h296v288h96v300h122v-406h-45v-88h15v-40h28v40h32v-40h28v40h15v88h-45v434H576v-300h-68v300H212Zm268-28H240h240Zm-132-46 62-120h-37v-95l-63 120h38v95Z"/>
    </Icon>
  );
});

IconMaterialEvChargerW100.displayName = 'OnesyIconMaterialEvChargerW100';

export default IconMaterialEvChargerW100;
