import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletMacW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacW100Filled'

      short_name='TabletMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-164q11 0 19.5-8.5T508-192q0-11-8.5-19.5T480-220q-11 0-19.5 8.5T452-192q0 11 8.5 19.5T480-164ZM232-92q-24.75 0-42.37-17.63Q172-127.25 172-152v-656q0-24.75 17.63-42.38Q207.25-868 232-868h496q24.75 0 42.38 17.62Q788-832.75 788-808v656q0 24.75-17.62 42.37Q752.75-92 728-92H232Zm-32-200h560v-454H200v454Z"/>
    </Icon>
  );
});

IconMaterialTabletMacW100Filled.displayName = 'OnesyIconMaterialTabletMacW100Filled';

export default IconMaterialTabletMacW100Filled;
