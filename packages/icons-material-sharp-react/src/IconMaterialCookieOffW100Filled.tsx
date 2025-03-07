import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookieOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOffW100Filled'

      short_name='CookieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-370q21 0 35.5-15t14.5-35q0-21-14.5-35.5T340-470q-20 0-35 14.5T290-420q0 20 15 35t35 15ZM852-68 705-215q-46 39-103 61t-122 22q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103L90-830l20-20L872-88l-20 20Zm-76-229L297-776q50-32 114-45t128-2q-1 40 11 72.5t35.5 55.5q23.5 23 57.5 35.5t77 14.5q-8 54 27 94t81 48q0 54-12.5 109T776-297Z"/>
    </Icon>
  );
});

IconMaterialCookieOffW100Filled.displayName = 'OnesyIconMaterialCookieOffW100Filled';

export default IconMaterialCookieOffW100Filled;
