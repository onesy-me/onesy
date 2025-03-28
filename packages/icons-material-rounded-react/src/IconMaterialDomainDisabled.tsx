import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabled'

      short_name='DomainDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-600v320q0 20-12.5 30T840-240q-15 0-27.5-10.5T800-281v-319H500q-33 0-56.5-23.5T420-680v-80h-99q-20 0-30-12.5T281-800q0-15 10-27.5t30-12.5h99q33 0 56.5 23.5T500-760v80h300q33 0 56.5 23.5T880-600ZM792-55l-66-65H160q-33 0-56.5-23.5T80-200v-568l-24-24q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11.5 27.5T848-56q-11 11-27.5 11.5T792-55ZM160-200h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h166l-80-80h-86v80Zm240-240h-80v-80h80v80Z"/>
    </Icon>
  );
});

IconMaterialDomainDisabled.displayName = 'OnesyIconMaterialDomainDisabled';

export default IconMaterialDomainDisabled;
