import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneIphoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneW100'

      short_name='PhoneIphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-172v112q0 12 10 22t22 10h336q12 0 22-10t10-22v-112H280Zm200 100q11 0 19.5-8.5T508-192q0-11-8.5-19.5T480-220q-11 0-19.5 8.5T452-192q0 11 8.5 19.5T480-164ZM280-292h400v-454H280v454Zm0-482h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 510v144-144Zm0-510v-66 66Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneW100.displayName = 'OnesyIconMaterialPhoneIphoneW100';

export default IconMaterialPhoneIphoneW100;
