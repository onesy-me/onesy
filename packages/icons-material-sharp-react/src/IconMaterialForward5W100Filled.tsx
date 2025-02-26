import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward5W100Filled'

      short_name='Forward5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24h18l-68-68 20-20 102 101-100 101-20-20 66-66h-18q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440h28q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm-84-204v-28h120v-62H396v-118h148v28H424v62h120v118H396Z"/>
    </Icon>
  );
});

IconMaterialForward5W100Filled.displayName = 'OnesyIconMaterialForward5W100Filled';

export default IconMaterialForward5W100Filled;
