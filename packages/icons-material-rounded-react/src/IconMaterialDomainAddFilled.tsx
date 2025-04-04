import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainAddFilled'

      short_name='DomainAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v80h320q33 0 56.5 23.5T880-600v200q0 17-11.5 28.5T840-360q-17 0-28.5-11.5T800-400v-200H480v80h80v80h-80v80h80v80h-80v80h120q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H160Zm0-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM840-40q-17 0-28.5-11.5T800-80v-40h-40q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200h40v-40q0-17 11.5-28.5T840-280q17 0 28.5 11.5T880-240v40h40q17 0 28.5 11.5T960-160q0 17-11.5 28.5T920-120h-40v40q0 17-11.5 28.5T840-40ZM640-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialDomainAddFilled.displayName = 'OnesyIconMaterialDomainAddFilled';

export default IconMaterialDomainAddFilled;
