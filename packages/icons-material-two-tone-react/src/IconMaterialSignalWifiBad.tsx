import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBad'

      short_name='SignalWifiBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98L12,21v-9h8.99L24,8.98z M19.59,14l-2.09,2.09l-0.3-0.3L15.41,14 L14,15.41l1.79,1.79l0.3,0.3L14,19.59L15.41,21l2.09-2.08L19.59,21L21,19.59l-2.08-2.09L21,15.41L19.59,14z"/></g>
    </Icon>
  );
});

IconMaterialSignalWifiBad.displayName = 'OnesyIconMaterialSignalWifiBad';

export default IconMaterialSignalWifiBad;
