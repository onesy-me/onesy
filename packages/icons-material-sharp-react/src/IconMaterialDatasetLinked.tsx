import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatasetLinked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetLinked'

      short_name='DatasetLinked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-720h720v364q-10-2-19.5-3t-20.5-1h-40v-280H200v560h124q4 22 10.5 42t17.5 38H120Zm80-120v40-560 520Zm80-40h44q8-49 35-90.5t69-69.5H280v160Zm0-240h160v-160H280v160Zm280 440q-66 0-113-47t-47-113q0-66 47-113t113-47h80v80h-80q-33 0-56.5 23.5T480-280q0 33 23.5 56.5T560-200h80v80h-80Zm-40-440h160v-160H520v160Zm40 320v-80h240v80H560Zm160 120v-80h80q33 0 56.5-23.5T880-280q0-33-23.5-56.5T800-360h-80v-80h80q66 0 113 46.5T960-280q0 66-47 113t-113 47h-80Z"/>
    </Icon>
  );
});

IconMaterialDatasetLinked.displayName = 'OnesyIconMaterialDatasetLinked';

export default IconMaterialDatasetLinked;
