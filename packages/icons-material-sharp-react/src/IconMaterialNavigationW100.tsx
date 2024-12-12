import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationW100'

      short_name='Navigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m250-198-12-10 242-544 242 544-12 10-230-98-230 98Zm34-46 196-84 196 84-196-440-196 440Zm196-84Z"/>
    </Icon>
  );
});

IconMaterialNavigationW100.displayName = 'OnesyIconMaterialNavigationW100';

export default IconMaterialNavigationW100;
