import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFmdBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBad'

      short_name='FmdBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M11,15h2v-2h-2V15z M11,11h2V6h-2V11z M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8 C20,5.22,16.2,2,12,2z M12,19.33c-4.05-3.7-6-6.79-6-9.14C6,6.57,8.65,4,12,4s6,2.57,6,6.2C18,12.54,16.05,15.64,12,19.33z"/><path d="M12,19.33c4.05-3.7,6-6.79,6-9.14C18,6.57,15.35,4,12,4s-6,2.57-6,6.2C6,12.54,7.95,15.64,12,19.33z M11,6 h2v5h-2V6z M11,13h2v2h-2V13z" opacity=".3"/></g></g>
    </Icon>
  );
});

IconMaterialFmdBad.displayName = 'OnesyIconMaterialFmdBad';

export default IconMaterialFmdBad;
