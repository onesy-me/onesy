import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFace6 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face6'

      short_name='Face6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-720q-111 0-196 66.5T171-564h46l79-156h369l79 156h45q-28-103-112.5-169.5T480-800Zm0 640q134 0 227.5-94T800-482v-2H695l-79-156H345l-79 156H160v3q0 134 93.5 227.5T480-160Zm0-560ZM360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390Z"/>
    </Icon>
  );
});

IconMaterialFace6.displayName = 'OnesyIconMaterialFace6';

export default IconMaterialFace6;
