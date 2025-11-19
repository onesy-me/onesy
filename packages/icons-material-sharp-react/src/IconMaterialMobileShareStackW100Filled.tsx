import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileShareStackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileShareStackW100Filled'

      short_name='MobileShareStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M238-124v-608h28v580h360v28H238Zm128-128v-616h396v145h26v104h-26v367H366Zm97-230h28v-70h120l-44 44 20 20 78-78-78-78-20 20 44 44H463v98Z"/>
    </Icon>
  );
});

IconMaterialMobileShareStackW100Filled.displayName = 'OnesyIconMaterialMobileShareStackW100Filled';

export default IconMaterialMobileShareStackW100Filled;
