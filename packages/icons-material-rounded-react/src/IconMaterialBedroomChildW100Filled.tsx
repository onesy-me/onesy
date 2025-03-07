import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedroomChildW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChildW100Filled'

      short_name='BedroomChild'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-372h360v46q0 6 4 10t10 4q6 0 10-4t4-10v-122q0-26-17-43t-43-17v-48q0-26-17-43t-43-17H392q-26 0-43 17t-17 43v48q-26 0-43 17t-17 43v122q0 6 4 10t10 4q6 0 10-4t4-10v-46Zm0-28v-48q0-14 9-23t23-9h296q14 0 23 9t9 23v48H300Zm60-108v-48q0-14 9-23t23-9h176q14 0 23 9t9 23v48H360ZM192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialBedroomChildW100Filled.displayName = 'OnesyIconMaterialBedroomChildW100Filled';

export default IconMaterialBedroomChildW100Filled;
