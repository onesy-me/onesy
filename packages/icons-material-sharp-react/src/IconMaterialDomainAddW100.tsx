import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainAddW100'

      short_name='DomainAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-164v-668h348v160h376v336h-28v-308H466v132h100v28H466v132h100v28H466v132h200v28H118Zm28-28h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm160 480h132v-132H306v132Zm0-160h132v-132H306v132Zm0-160h132v-132H306v132Zm0-160h132v-132H306v132ZM814-84v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM666-484v-28h28v28h-28Zm0 160v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialDomainAddW100.displayName = 'OnesyIconMaterialDomainAddW100';

export default IconMaterialDomainAddW100;
