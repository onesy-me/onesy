import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookieOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOffW100'

      short_name='CookieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m776-297-21-21q21-34 31-76.5t13-86.5q-48-19-76.5-53T690-619q-75-5-125-53t-53-126q-53-5-102.5 6T318-755l-21-21q50-32 114-45t128-2q-1 40 11 72.5t35.5 55.5q23.5 23 57.5 35.5t77 14.5q-8 54 27 94t81 48q0 54-12.5 109T776-297Zm-436-73q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T390-420q0 20-14.5 35T340-370ZM852-68 705-215q-46 39-103 61t-122 22q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103L90-830l20-20L872-88l-20 20Zm-372-92q59 0 111-20t94-55L235-685q-35 42-55 94t-20 111q0 133 93.5 226.5T480-160Zm-20-300Zm99-101Z"/>
    </Icon>
  );
});

IconMaterialCookieOffW100.displayName = 'OnesyIconMaterialCookieOffW100';

export default IconMaterialCookieOffW100;
