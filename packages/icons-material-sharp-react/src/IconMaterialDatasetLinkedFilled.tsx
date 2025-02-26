import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatasetLinkedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetLinkedFilled'

      short_name='DatasetLinked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-720h720v363q-10-2-19.5-2.5T800-520H560q-37 0-70.5 10.5T427-480H280v160h43q-2 10-2.5 19.5T320-280q0 32 8 62.5t24 57.5H120Zm160-400h160v-160H280v160Zm280 440q-66 0-113-47t-47-113q0-66 47-113t113-47h80v80h-80q-33 0-56.5 23.5T480-280q0 33 23.5 56.5T560-200h80v80h-80Zm-40-440h160v-160H520v160Zm40 320v-80h240v80H560Zm160 120v-80h80q33 0 56.5-23.5T880-280q0-33-23.5-56.5T800-360h-80v-80h80q66 0 113 46.5T960-280q0 66-47 113t-113 47h-80Z"/>
    </Icon>
  );
});

IconMaterialDatasetLinkedFilled.displayName = 'OnesyIconMaterialDatasetLinkedFilled';

export default IconMaterialDatasetLinkedFilled;
