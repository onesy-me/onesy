import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneW100Filled'

      short_name='Done'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m382-316 356-356q4-4 9.5-4.5T758-672q5 5 5 10t-5 10L403-297q-9 9-21 9t-21-9L202-456q-4-4-4.5-9.5T202-476q5-5 10-5t10 5l160 160Z"/>
    </Icon>
  );
});

IconMaterialDoneW100Filled.displayName = 'OnesyIconMaterialDoneW100Filled';

export default IconMaterialDoneW100Filled;
