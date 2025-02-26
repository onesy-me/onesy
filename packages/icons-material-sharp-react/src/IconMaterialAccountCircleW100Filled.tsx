import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleW100Filled'

      short_name='AccountCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-256q51-36 106.5-57T480-334q66 0 121.5 21T708-256q41-41 66.5-98T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 69 25.5 126t66.5 98Zm228-210q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Zm0 334q-73 0-136.5-27T233-233q-47-47-74-110.5T132-480q0-73 27-136.5T233-727q47-47 110.5-74T480-828q73 0 136.5 27T727-727q47 47 74 110.5T828-480q0 73-27 136.5T727-233q-47 47-110.5 74T480-132Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleW100Filled.displayName = 'OnesyIconMaterialAccountCircleW100Filled';

export default IconMaterialAccountCircleW100Filled;
