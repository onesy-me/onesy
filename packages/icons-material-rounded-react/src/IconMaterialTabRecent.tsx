import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabRecent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecent'

      short_name='TabRecent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-40q83 0 141.5-58.5T920-240q0-83-58.5-141.5T720-440q-83 0-141.5 58.5T520-240q0 83 58.5 141.5T720-40Zm20-208 60 60q6 6 6 14t-6 14q-6 6-14 6t-14-6l-60-60q-6-6-9-13.5t-3-15.5v-91q0-8 6-14t14-6q8 0 14 6t6 14v92Zm-580 88q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480q-17 0-28.5-11T800-519v-41H560q-17 0-28.5-11.5T520-600v-120H160v480h240q17 0 28.5 11.5T440-200q0 17-11.5 28.5T400-160H160Zm0-80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTabRecent.displayName = 'OnesyIconMaterialTabRecent';

export default IconMaterialTabRecent;
