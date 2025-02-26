import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabledFilled'

      short_name='LocationDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m784-286-58-58q17-30 25.5-64t8.5-70q0-116-82-198t-198-82q-36 0-70 8.5T346-724l-58-58q35-21 72.5-35t79.5-19v-80h80v80q125 14 214.5 103.5T838-518h80v80h-80q-5 42-19 79.5T784-286ZM440-40v-80q-125-14-214.5-103.5T122-438H42v-80h80q5-42 19-79.5t35-72.5L56-790l56-56 736 736-58 56-118-120q-35 21-72.5 35T520-120v80h-80Zm40-158q36 0 70-8.5t64-25.5L234-612q-17 30-25.5 64t-8.5 70q0 116 82 198t198 82Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabledFilled.displayName = 'OnesyIconMaterialLocationDisabledFilled';

export default IconMaterialLocationDisabledFilled;
