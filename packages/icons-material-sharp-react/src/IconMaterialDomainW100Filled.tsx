import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainW100Filled'

      short_name='Domain'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-164v-668h348v160h376v508H118Zm28-28h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm160 480h132v-132H306v132Zm0-160h132v-132H306v132Zm0-160h132v-132H306v132Zm0-160h132v-132H306v132Zm160 480h348v-452H466v132h100v28H466v132h100v28H466v132Zm200-292v-28h28v28h-28Zm0 160v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialDomainW100Filled.displayName = 'OnesyIconMaterialDomainW100Filled';

export default IconMaterialDomainW100Filled;
