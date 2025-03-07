import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalculateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalculateW100'

      short_name='Calculate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-336v66q0 6 4 10t10 4q6 0 10-4t4-10v-66h66q6 0 10-4t4-10q0-6-4-10t-10-4h-66v-66q0-6-4-10t-10-4q-6 0-10 4t-4 10v66h-66q-6 0-10 4t-4 10q0 6 4 10t10 4h66Zm214 50h140q6 0 10-4t4-10q0-6-4-10t-10-4H550q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-100h140q6 0 10-4t4-10q0-6-4-10t-10-4H550q-6 0-10 4t-4 10q0 6 4 10t10 4Zm70-216 46 46q4 4 9.5 4.5T686-556q5-5 5-10t-5-10l-46-46 46-46q4-4 4.5-9.5T686-688q-5-5-10-5t-10 5l-46 46-46-46q-4-4-9.5-4.5T554-688q-5 5-5 10t5 10l46 46-46 46q-4 4-4.5 9.5T554-556q5 5 10 5t10-5l46-46Zm-340-6h140q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-48 436q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialCalculateW100.displayName = 'OnesyIconMaterialCalculateW100';

export default IconMaterialCalculateW100;
