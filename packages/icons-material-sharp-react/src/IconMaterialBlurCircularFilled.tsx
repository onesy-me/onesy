import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlurCircularFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurCircularFilled'

      short_name='BlurCircular'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-520q17 0 28.5-11.5T440-560q0-17-11.5-28.5T400-600q-17 0-28.5 11.5T360-560q0 17 11.5 28.5T400-520Zm0 160q17 0 28.5-11.5T440-400q0-17-11.5-28.5T400-440q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360ZM280-540q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm120 280q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM280-380q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm120-280q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm160 140q17 0 28.5-11.5T600-560q0-17-11.5-28.5T560-600q-17 0-28.5 11.5T520-560q0 17 11.5 28.5T560-520Zm0-140q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm120 280q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-160q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm80-180q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-100q17 0 28.5-11.5T600-400q0-17-11.5-28.5T560-440q-17 0-28.5 11.5T520-400q0 17 11.5 28.5T560-360Z"/>
    </Icon>
  );
});

IconMaterialBlurCircularFilled.displayName = 'OnesyIconMaterialBlurCircularFilled';

export default IconMaterialBlurCircularFilled;
