import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFace3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face3W100Filled'

      short_name='Face3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q134 0 227-93.5T800-560q0-41-9.5-78T764-707q-23 15-49.5 23t-54.5 8q-58 0-106-30.5T480-789q-25 52-73.5 82.5T300-676q-28 0-54-8t-49-22q-17 33-27 70t-10 76q0 133 93.5 226.5T480-240ZM360-470q21 0 35.5-14.5T410-520q0-21-14.5-35.5T360-570q-21 0-35.5 14.5T310-520q0 21 14.5 35.5T360-470Zm240 0q21 0 35.5-14.5T650-520q0-21-14.5-35.5T600-570q-21 0-35.5 14.5T550-520q0 21 14.5 35.5T600-470ZM77-132l39-425q7-73 37.5-137t79-111.5q48.5-47.5 112-75T480-908q72 0 135.5 27.5t112 75Q776-758 806.5-694T844-557l39 425H77Z"/>
    </Icon>
  );
});

IconMaterialFace3W100Filled.displayName = 'OnesyIconMaterialFace3W100Filled';

export default IconMaterialFace3W100Filled;
