import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainAdd'

      short_name='DomainAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h400v160h400v320h-80v-240H480v80h80v80h-80v80h80v80h-80v80h160v80H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM800-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM640-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialDomainAdd.displayName = 'OnesyIconMaterialDomainAdd';

export default IconMaterialDomainAdd;
