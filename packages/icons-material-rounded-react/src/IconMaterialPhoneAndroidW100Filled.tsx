import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneAndroidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidW100Filled'

      short_name='PhoneAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-178h108q6 0 10-4t4-10q0-6-4-10t-10-4H426q-6 0-10 4t-4 10q0 6 4 10t10 4ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-200h400v-454H280v454Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidW100Filled.displayName = 'OnesyIconMaterialPhoneAndroidW100Filled';

export default IconMaterialPhoneAndroidW100Filled;
