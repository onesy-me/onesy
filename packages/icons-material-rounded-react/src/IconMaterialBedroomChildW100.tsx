import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedroomChildW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChildW100'

      short_name='BedroomChild'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-372h360v46q0 6 4 10t10 4q6 0 10-4t4-10v-122q0-26-17-43t-43-17v-48q0-26-17-43t-43-17H392q-26 0-43 17t-17 43v48q-26 0-43 17t-17 43v122q0 6 4 10t10 4q6 0 10-4t4-10v-46Zm0-28v-48q0-14 9-23t23-9h296q14 0 23 9t9 23v48H300Zm60-108v-48q0-14 9-23t23-9h176q14 0 23 9t9 23v48H360ZM192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-576q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v576q0 12 10 22t22 10Zm-32 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialBedroomChildW100.displayName = 'OnesyIconMaterialBedroomChildW100';

export default IconMaterialBedroomChildW100;
