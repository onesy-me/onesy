import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidW100'

      short_name='TabletAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-92q-25 0-42.5-17.5T172-152v-656q0-25 17.5-42.5T232-868h496q25 0 42.5 17.5T788-808v656q0 25-17.5 42.5T728-92H232Zm-32-172v112q0 14 9 23t23 9h496q14 0 23-9t9-23v-112H200Zm226 86h108q6 0 10-4t4-10q0-6-4-10t-10-4H426q-6 0-10 4t-4 10q0 6 4 10t10 4ZM200-292h560v-454H200v454Zm0-482h560v-34q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v34Zm0 0v-66 66Zm0 510v144-144Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidW100.displayName = 'OnesyIconMaterialTabletAndroidW100';

export default IconMaterialTabletAndroidW100;
