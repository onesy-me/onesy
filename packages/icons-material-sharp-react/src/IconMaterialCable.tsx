import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cable'

      short_name='Cable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-200h80v-280q0-66 47-113t113-47q66 0 113 47t47 113v400q0 33 23.5 56.5T600-200q33 0 56.5-23.5T680-280v-280h-80v-200h40v-80h160v80h40v200h-80v280q0 66-47 113t-113 47q-66 0-113-47t-47-113v-400q0-33-23.5-56.5T360-760q-33 0-56.5 23.5T280-680v280h80v200h-40v80H160v-80h-40Z"/>
    </Icon>
  );
});

IconMaterialCable.displayName = 'OnesyIconMaterialCable';

export default IconMaterialCable;
