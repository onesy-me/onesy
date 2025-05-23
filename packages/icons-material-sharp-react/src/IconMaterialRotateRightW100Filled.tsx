import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotateRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateRightW100Filled'

      short_name='RotateRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-132v-30q34-5 66.5-18t61.5-34l20 20q-32 24-69.5 39.5T522-132Zm-80 0q-115-15-191.5-102T174-438q0-64 24-120t66-98q42-42 98-66t120-24h38l-90-90 20-20 124 124-124 124-20-20 90-90h-38q-117 0-198.5 81.5T202-438q0 104 68 182.5T442-160v28Zm284-118-20-20q21-29 34.5-61t19.5-67h28q-5 40-21 77.5T726-250Zm62-228h-28q-6-35-19.5-67T706-606l20-20q24 30 40 67.5t22 80.5Z"/>
    </Icon>
  );
});

IconMaterialRotateRightW100Filled.displayName = 'OnesyIconMaterialRotateRightW100Filled';

export default IconMaterialRotateRightW100Filled;
