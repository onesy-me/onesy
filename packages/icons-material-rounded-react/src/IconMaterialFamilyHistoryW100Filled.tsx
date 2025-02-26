import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHistoryW100Filled'

      short_name='FamilyHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.99-121q-49.99 0-84.49-34.51Q361-190.02 361-240q0-46 30-79.5t75-38.5v-108H312q-24.75 0-42.37-17.63Q252-501.25 252-526v-79h-65q-12.75 0-21.37-8.63Q157-622.25 157-635v-157.6q0-13.4 8.63-21.9 8.62-8.5 21.37-8.5h157.6q13.4 0 21.9 8.62 8.5 8.63 8.5 21.38v157.6q0 13.4-8.62 21.9-8.63 8.5-21.38 8.5h-65v79q0 14 9 23t23 9h336q14 0 23-9t9-23v-80q-45-5-75-38.5T575-724q0-49.98 34.51-84.49Q644.03-843 694.01-843q49.99 0 84.49 34.51Q813-773.98 813-724q0 46-30 79.5T708-606v80q0 24.75-17.62 42.37Q672.75-466 648-466H494v108q45 5 75 38.5t30 79.5q0 49.98-34.51 84.49Q529.97-121 479.99-121Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistoryW100Filled.displayName = 'OnesyIconMaterialFamilyHistoryW100Filled';

export default IconMaterialFamilyHistoryW100Filled;
