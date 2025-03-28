import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shower'

      short_name='Shower'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,7c-2.76,0-5,2.24-5,5h10C17,9.24,14.76,7,12,7z" opacity=".3"/><circle cx="8" cy="20" r="1"/><circle cx="16" cy="17" r="1"/><path d="M13,5.08V3h-2v2.08C7.61,5.57,5,8.47,5,12v2h14v-2C19,8.47,16.39,5.57,13,5.08z M7,12c0-2.76,2.24-5,5-5s5,2.24,5,5H7z"/><circle cx="16" cy="20" r="1"/><circle cx="12" cy="17" r="1"/><circle cx="8" cy="17" r="1"/><circle cx="12" cy="20" r="1"/></g></g>
    </Icon>
  );
});

IconMaterialShower.displayName = 'OnesyIconMaterialShower';

export default IconMaterialShower;
