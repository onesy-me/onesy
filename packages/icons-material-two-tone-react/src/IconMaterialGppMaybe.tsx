import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGppMaybe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybe'

      short_name='GppMaybe'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M6,6.39v4.7c0,4,2.55,7.7,6,8.83c3.45-1.13,6-4.82,6-8.83v-4.7l-6-2.25L6,6.39z M13,16h-2v-2h2V16z M13,12 h-2V7h2V12z" opacity=".3"/><path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z M11,16h2v-2h-2V16z M11,12h2V7h-2V12z"/></g></g>
    </Icon>
  );
});

IconMaterialGppMaybe.displayName = 'OnesyIconMaterialGppMaybe';

export default IconMaterialGppMaybe;
