import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagW100'

      short_name='Tag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m299-208 40-160H199l7-28h140l42-168H248l7-28h140l40-160h26l-40 160h174l40-160h26l-40 160h140l-7 28H614l-42 168h140l-7 28H565l-40 160h-26l40-160H365l-40 160h-26Zm73-188h174l42-168H414l-42 168Z"/>
    </Icon>
  );
});

IconMaterialTagW100.displayName = 'OnesyIconMaterialTagW100';

export default IconMaterialTagW100;
