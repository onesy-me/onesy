import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplay5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay5W100Filled'

      short_name='Replay5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120h28q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-18l66 66-20 20-100-101 102-101 20 20-68 68h18q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm-84-204v-28h120v-62H396v-118h148v28H424v62h120v118H396Z"/>
    </Icon>
  );
});

IconMaterialReplay5W100Filled.displayName = 'OnesyIconMaterialReplay5W100Filled';

export default IconMaterialReplay5W100Filled;
