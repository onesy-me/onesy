import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletMacW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacW100'

      short_name='TabletMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-164q11 0 19.5-8.5T508-192q0-11-8.5-19.5T480-220q-11 0-19.5 8.5T452-192q0 11 8.5 19.5T480-164ZM232-92q-25 0-42.5-17.5T172-152v-656q0-25 17.5-42.5T232-868h496q25 0 42.5 17.5T788-808v656q0 25-17.5 42.5T728-92H232Zm-32-172v112q0 14 9 23t23 9h496q14 0 23-9t9-23v-112H200Zm0-28h560v-454H200v454Zm0-482h560v-34q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v34Zm0 0v-66 66Zm0 510v144-144Z"/>
    </Icon>
  );
});

IconMaterialTabletMacW100.displayName = 'OnesyIconMaterialTabletMacW100';

export default IconMaterialTabletMacW100;
