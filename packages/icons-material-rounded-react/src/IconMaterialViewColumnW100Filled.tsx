import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewColumnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnW100Filled'

      short_name='ViewColumn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h67q26 0 43 17t17 43v336q0 26-17 43t-43 17h-67Zm215 0q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h66q26 0 43 17t17 43v336q0 26-17 43t-43 17h-66Zm214 0q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h67q26 0 43 17t17 43v336q0 26-17 43t-43 17h-67Z"/>
    </Icon>
  );
});

IconMaterialViewColumnW100Filled.displayName = 'OnesyIconMaterialViewColumnW100Filled';

export default IconMaterialViewColumnW100Filled;
