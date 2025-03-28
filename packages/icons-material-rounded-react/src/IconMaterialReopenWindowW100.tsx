import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReopenWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReopenWindowW100'

      short_name='ReopenWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v162q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-114H160v368q0 12 10 22t22 10h230q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H192ZM719.68-84q-53.11 0-96.89-27.5Q579-139 556-185q-3-6-1.09-12.2 1.91-6.21 7.42-8.5 4.67-2.3 10.17.08T581-198q20.14 38.88 57.07 62.44Q675-112 720-112q64.63 0 110.31-45.69Q876-203.37 876-268t-45.69-110.31Q784.63-424 720-424q-41 0-76 20t-61 52h67q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4h-84q-12.75 0-21.37-8.63Q536-341.25 536-354v-84q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v65q29-35 69.5-57t86.5-22q77 0 130.5 53.5T904-268q0 77-53.5 130.5T719.68-84Z"/>
    </Icon>
  );
});

IconMaterialReopenWindowW100.displayName = 'OnesyIconMaterialReopenWindowW100';

export default IconMaterialReopenWindowW100;
