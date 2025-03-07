import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFace4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face4Filled'

      short_name='Face4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-310q-21 0-35.5-14.5T310-360q0-21 14.5-35.5T360-410q21 0 35.5 14.5T410-360q0 21-14.5 35.5T360-310Zm240 0q-21 0-35.5-14.5T550-360q0-21 14.5-35.5T600-410q21 0 35.5 14.5T650-360q0 21-14.5 35.5T600-310ZM480-80q134 0 227-93t93-227q0-24-3-46.5T786-490q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-628q-32 78-91.5 135.5T160-406v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-117q-54-54-85.5-127T80-400q0-29 4-57.5T96-512q-43-26-69.5-70.5T0-681q0-83 58-141t141-58q53 0 97.5 25.5T368-784q26-8 54.5-12t57.5-4q83 0 156 31.5T763-683q54 54 85.5 127T880-400q0 83-31.5 156T763-117q-54 54-127 85.5T480 0Z"/>
    </Icon>
  );
});

IconMaterialFace4Filled.displayName = 'OnesyIconMaterialFace4Filled';

export default IconMaterialFace4Filled;
