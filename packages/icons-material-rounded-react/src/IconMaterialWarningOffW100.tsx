import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarningOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffW100'

      short_name='WarningOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-260q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-14-94v-140l28 28v112q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm14-392q8 0 14.5 3.5T506-731l174 300q3 6 1 11t-7 7q-5 2-10 1t-9-7L480-720l-38 65q-4 6-9 6.5t-10-1.5q-5-2-7-7.5t2-11.5l36-62q5-8 11.5-11.5T480-746ZM178-200h542L377-543 178-200Zm621 79-51-51H182q-17 0-26-15t0-30l201-346-237-237q-4-4-4.5-9.5T120-820q5-5 10-5t10 5l679 679q4 4 4.5 9.5T819-121q-5 5-10 5t-10-5ZM549-371Zm-4-157Z"/>
    </Icon>
  );
});

IconMaterialWarningOffW100.displayName = 'OnesyIconMaterialWarningOffW100';

export default IconMaterialWarningOffW100;
