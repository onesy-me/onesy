import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanW100Filled'

      short_name='Scan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M876-386H84q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h792q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM601.6-652H720L572-800v118.4q0 12.58 8.51 21.09T601.6-652ZM272-132q-24.75 0-42.37-17.63Q212-167.25 212-192v-84q0-12.75 8.63-21.38Q229.25-306 242-306h476q12.75 0 21.38 8.62Q748-288.75 748-276v84q0 24.75-17.62 42.37Q712.75-132 688-132H272Zm-30-362q-12.75 0-21.37-8.63Q212-511.25 212-524v-244q0-24.75 17.63-42.38Q247.25-828 272-828h289q12.44 0 23.72 5T604-810l126 126q8 8 13 19.28 5 11.28 5 23.72v117q0 12.75-8.62 21.37Q730.75-494 718-494H242Z"/>
    </Icon>
  );
});

IconMaterialScanW100Filled.displayName = 'OnesyIconMaterialScanW100Filled';

export default IconMaterialScanW100Filled;
