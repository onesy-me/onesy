import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataExplorationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExplorationW100Filled'

      short_name='DataExploration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M768-164q11 0 19.5-8.5T796-192q0-11-8.5-19.5T768-220q-11 0-19.5 8.5T740-192q0 11 8.5 19.5T768-164Zm-288 32q-95.27 0-177.14-47.5Q221-227 173-316l151-151 110 94q9.21 8 21.1 7 11.9-1 19.9-9l191-190v85q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-104q0-12.75-8.62-21.38Q676.75-614 664-614H560q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4h86L454-394l-112-93q-8.93-8-20.47-7.5Q310-494 302-486L160-344q-14-29-21-66.63-7-37.63-7-69.37 0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480v288q0 24.75-17.62 42.37Q792.75-132 768-132H480Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationW100Filled.displayName = 'OnesyIconMaterialDataExplorationW100Filled';

export default IconMaterialDataExplorationW100Filled;
