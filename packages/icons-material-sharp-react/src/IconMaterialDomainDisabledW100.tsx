import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabledW100'

      short_name='DomainDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m842-246-28-28v-370H444l-6-6v-154H282l-28-28h212v160h376v426Zm44 184L784-164H118v-666l-66-66 20-20L906-82l-20 20ZM146-192h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm160 320h132v-132H306v132Zm0-160h132v-132H306v132Zm160 160h290L624-324H466v132Zm228-292h-28v-28h28v28Z"/>
    </Icon>
  );
});

IconMaterialDomainDisabledW100.displayName = 'OnesyIconMaterialDomainDisabledW100';

export default IconMaterialDomainDisabledW100;
