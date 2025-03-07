import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainW100'

      short_name='Domain'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-194v-608q0-13 8.5-21.5T148-832h288q13 0 21.5 8.5T466-802v130h346q13 0 21.5 8.5T842-642v448q0 13-8.5 21.5T812-164H148q-13 0-21.5-8.5T118-194Zm28 2h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm160 480h132v-132H306v132Zm0-160h132v-132H306v132Zm0-160h132v-132H306v132Zm0-160h132v-132H306v132Zm160 480h348v-452H466v132h100v28H466v132h100v28H466v132Zm200-292v-28h28v28h-28Zm0 160v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialDomainW100.displayName = 'OnesyIconMaterialDomainW100';

export default IconMaterialDomainW100;
