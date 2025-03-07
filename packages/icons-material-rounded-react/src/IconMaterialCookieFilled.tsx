import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookieFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieFilled'

      short_name='Cookie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-81 33.5-157.5t93-134.5Q266-830 348-860t180-18q15 2 23 12.5t9 28.5q2 64 47.5 109.5T716-680q21 1 32 12t12 34q2 42 25.5 69t65.5 41q14 5 21.5 14.5T880-486q2 83-29 157t-85 129.5Q712-144 638-112T480-80Zm-60-480q25 0 42.5-17.5T480-620q0-25-17.5-42.5T420-680q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Zm-80 200q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360Zm260 40q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320Z"/>
    </Icon>
  );
});

IconMaterialCookieFilled.displayName = 'OnesyIconMaterialCookieFilled';

export default IconMaterialCookieFilled;
