import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidW100'

      short_name='PhoneAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-178h108q6 0 10-4t4-10q0-6-4-10t-10-4H426q-6 0-10 4t-4 10q0 6 4 10t10 4ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-172v112q0 12 10 22t22 10h336q12 0 22-10t10-22v-112H280Zm0-28h400v-454H280v454Zm0-482h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 510v144-144Zm0-510v-66 66Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidW100.displayName = 'OnesyIconMaterialPhoneAndroidW100';

export default IconMaterialPhoneAndroidW100;
