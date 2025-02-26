import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElderly = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Elderly'

      short_name='Elderly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m320-40-64-48 104-139v-213q0-31 5-67.5t15-67.5l-60 33v142h-80v-188l176-100q25-14 43.5-21.5T494-717q25 0 45.5 21.5T587-628q32 54 58 81t56 41q11-8 19-11t19-3q25 0 43 18t18 42v420h-40v-420q0-8-6-14t-14-6q-8 0-14 6t-6 14v50h-40v-19q-54-23-84-51.5T543-557q-11 28-17.5 68.5T521-412l79 112v260h-80v-200l-71-102-9 142L320-40Zm220-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/>
    </Icon>
  );
});

IconMaterialElderly.displayName = 'OnesyIconMaterialElderly';

export default IconMaterialElderly;
