import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbIridescentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIridescentFilled'

      short_name='WbIridescent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-438v-80q0-33 23.5-56.5T280-598h400q33 0 56.5 23.5T760-518v80q0 33-23.5 56.5T680-358H280q-33 0-56.5-23.5T200-438Zm240-362v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40q0 17-11.5 28.5T480-760q-17 0-28.5-11.5T440-800Zm280 68 16-16q11-11 28-11t28 11q11 11 11 28t-11 28l-16 16q-11 11-28 11t-28-11q-11-11-11-28t11-28ZM440-120v-40q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v40q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Zm296-88-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l16 16q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM184-676l-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l16 16q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm-16 412 16-16q11-11 28-11t28 11q11 11 11 28t-11 28l-16 16q-11 11-28 11t-28-11q-11-11-11-28t11-28Z"/>
    </Icon>
  );
});

IconMaterialWbIridescentFilled.displayName = 'OnesyIconMaterialWbIridescentFilled';

export default IconMaterialWbIridescentFilled;
