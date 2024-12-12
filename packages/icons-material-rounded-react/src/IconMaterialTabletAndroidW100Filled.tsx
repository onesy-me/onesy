import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletAndroidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidW100Filled'

      short_name='TabletAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-92q-24.75 0-42.37-17.63Q172-127.25 172-152v-656q0-24.75 17.63-42.38Q207.25-868 232-868h496q24.75 0 42.38 17.62Q788-832.75 788-808v656q0 24.75-17.62 42.37Q752.75-92 728-92H232Zm-32-200h560v-454H200v454Zm226 114h108q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2H426q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidW100Filled.displayName = 'OnesyIconMaterialTabletAndroidW100Filled';

export default IconMaterialTabletAndroidW100Filled;
