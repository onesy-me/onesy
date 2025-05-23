import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabProfileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileW100'

      short_name='LabProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-506q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H360Zm0-160q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H360ZM240-374h300q23 0 42 10t33 28l105 136v-568q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v394Zm32 214h443L593-319q-10-13-23.5-20t-29.5-7H240v154q0 14 9 23t23 9Zm416 28H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 26-17 43t-43 17Zm-448-28v-640 640Zm0-186v-28 28Z"/>
    </Icon>
  );
});

IconMaterialLabProfileW100.displayName = 'OnesyIconMaterialLabProfileW100';

export default IconMaterialLabProfileW100;
