import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContextualToken = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualToken'

      short_name='ContextualToken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320h200q17 0 28.5-11.5T520-360v-40q0-17-11.5-28.5T480-440H280q-17 0-28.5 11.5T240-400v40q0 17 11.5 28.5T280-320Zm360 0h40q17 0 28.5-11.5T720-360v-240q0-17-11.5-28.5T680-640h-40q-17 0-28.5 11.5T600-600v240q0 17 11.5 28.5T640-320ZM280-520h200q17 0 28.5-11.5T520-560v-40q0-17-11.5-28.5T480-640H280q-17 0-28.5 11.5T240-600v40q0 17 11.5 28.5T280-520ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialContextualToken.displayName = 'OnesyIconMaterialContextualToken';

export default IconMaterialContextualToken;
