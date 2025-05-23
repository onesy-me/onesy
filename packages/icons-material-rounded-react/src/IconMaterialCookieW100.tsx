import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookieW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieW100'

      short_name='Cookie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-106q-78 0-146-29.5t-118.5-80Q165-266 135.5-334T106-480q0-82 33.5-153.5t90-123Q286-808 360-834.5T515-853q8 1 13 7t6 14q5 77 52.5 122.5T716-656q8 1 13 6.5t5 13.5q1 47 30.5 83.5T835-502q8 3 13.5 9.5T854-478q-4 76-35 144t-81.5 118.5Q687-165 621-135.5T480-106Zm0-28q132 0 233.5-96.5T825-475q-54-21-84-60t-34-96q-84-6-139.5-57T509-826q-75-6-143 19t-119.5 72.5Q195-687 164.5-621T134-480q0 143 101.5 244.5T480-134Zm0-355Zm-60-81q21 0 35.5-15t14.5-35q0-21-14.5-35.5T420-670q-20 0-35 14.5T370-620q0 20 15 35t35 15Zm-80 200q21 0 35.5-15t14.5-35q0-21-14.5-35.5T340-470q-20 0-35 14.5T290-420q0 20 15 35t35 15Zm260 40q13 0 21.5-9t8.5-21q0-13-8.5-21.5T600-390q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Z"/>
    </Icon>
  );
});

IconMaterialCookieW100.displayName = 'OnesyIconMaterialCookieW100';

export default IconMaterialCookieW100;
