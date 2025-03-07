import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContextualTokenAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenAdd'

      short_name='ContextualTokenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h360q17 0 28.5 11.5T560-760q0 17-11.5 28.5T520-720H160v480h640v-240q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480v240q0 33-23.5 56.5T800-160H160Zm120-160h200q17 0 28.5-11.5T520-360v-40q0-17-11.5-28.5T480-440H280q-17 0-28.5 11.5T240-400v40q0 17 11.5 28.5T280-320Zm0-200h200q17 0 28.5-11.5T520-560v-40q0-17-11.5-28.5T480-640H280q-17 0-28.5 11.5T240-600v40q0 17 11.5 28.5T280-520Zm360 200h40q17 0 28.5-11.5T720-360v-120q0-17-11.5-28.5T680-520h-40q-17 0-28.5 11.5T600-480v120q0 17 11.5 28.5T640-320Zm-480 80v-480 480Zm560-440h-40q-17 0-28.5-11.5T640-720q0-17 11.5-28.5T680-760h40v-40q0-17 11.5-28.5T760-840q17 0 28.5 11.5T800-800v40h40q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680h-40v40q0 17-11.5 28.5T760-600q-17 0-28.5-11.5T720-640v-40Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenAdd.displayName = 'OnesyIconMaterialContextualTokenAdd';

export default IconMaterialContextualTokenAdd;
