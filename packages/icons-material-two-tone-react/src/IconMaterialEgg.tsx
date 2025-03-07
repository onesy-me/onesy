import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEgg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Egg'

      short_name='Egg'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,5c-1.93,0-5,4.91-5,9c0,2.76,2.24,5,5,5s5-2.24,5-5C17,9.91,13.93,5,12,5z M13,18c-3.01,0-5-2-5-5 c0-0.55,0.45-1,1-1s1,0.45,1,1c0,2.92,2.42,3,3,3c0.55,0,1,0.45,1,1S13.55,18,13,18z" opacity=".3"/><path d="M12,3C8.5,3,5,9.33,5,14c0,3.87,3.13,7,7,7c3.87,0,7-3.13,7-7C19,9.33,15.5,3,12,3z M12,19c-2.76,0-5-2.24-5-5 c0-4.09,3.07-9,5-9s5,4.91,5,9C17,16.76,14.76,19,12,19z"/><path d="M13,16c-0.58,0-3-0.08-3-3c0-0.55-0.45-1-1-1s-1,0.45-1,1c0,3,1.99,5,5,5c0.55,0,1-0.45,1-1S13.55,16,13,16z"/></g></g>
    </Icon>
  );
});

IconMaterialEgg.displayName = 'OnesyIconMaterialEgg';

export default IconMaterialEgg;
