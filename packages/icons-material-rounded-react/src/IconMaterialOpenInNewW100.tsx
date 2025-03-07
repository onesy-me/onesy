import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewW100'

      short_name='OpenInNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h194q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h496q12 0 22-10t10-22v-194q0-6 4-10t10-4q6 0 10 4t4 10v194q0 26-17 43t-43 17H232Zm528-568L400-380q-4 4-9.5 4.5T380-380q-5-5-5-10t5-10l360-360H574q-6 0-10-4t-4-10q0-6 4-10t10-4h184q13 0 21.5 8.5T788-758v184q0 6-4 10t-10 4q-6 0-10-4t-4-10v-166Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewW100.displayName = 'OnesyIconMaterialOpenInNewW100';

export default IconMaterialOpenInNewW100;
