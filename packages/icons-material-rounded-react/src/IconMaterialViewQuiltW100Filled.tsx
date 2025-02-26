import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewQuiltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltW100Filled'

      short_name='ViewQuilt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M447-494q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h281q26 0 43 17t17 43v94q0 26-17 43t-43 17H447Zm214 242q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h67q26 0 43 17t17 43v94q0 26-17 43t-43 17h-67Zm-214 0q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h66q26 0 43 17t17 43v94q0 26-17 43t-43 17h-66Zm-215 0q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h67q26 0 43 17t17 43v336q0 26-17 43t-43 17h-67Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltW100Filled.displayName = 'OnesyIconMaterialViewQuiltW100Filled';

export default IconMaterialViewQuiltW100Filled;
