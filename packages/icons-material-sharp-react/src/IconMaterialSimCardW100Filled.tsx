import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardW100Filled'

      short_name='SimCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-220h28v-50h-28v50Zm0-150h28v-130h-28v130Zm160 150h28v-130h-28v130Zm0-230h28v-50h-28v50Zm160 230h28v-50h-28v50Zm0-150h28v-130h-28v130ZM212-132v-486l210-210h326v696H212Z"/>
    </Icon>
  );
});

IconMaterialSimCardW100Filled.displayName = 'OnesyIconMaterialSimCardW100Filled';

export default IconMaterialSimCardW100Filled;
