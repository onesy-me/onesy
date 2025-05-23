import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabledW100Filled'

      short_name='DomainDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M842-642v372q0 7-4.32 10.5t-9.5 3.5q-5.18 0-9.68-3.59-4.5-3.58-4.5-10.41v-374H458q-13 0-21.5-8.5T428-674v-130H278q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T278-832h148q13 0 21.5 8.5T456-802v130h356q13 0 21.5 8.5T842-642Zm34 570-92-92H148q-13 0-21.5-8.5T118-194v-636l-56-56q-4-4-4.5-9.5T62-906q5-5 10-5t10 5L896-92q4 4 4.5 9.5t-4.72 10.72Q891-67 886-67q-5 0-10-5ZM146-192h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm160 320h132v-132H306v132Zm0-160h132v-132H306v132Zm160 160h290L624-324H466v132Zm228-292h-28v-28h28v28Z"/>
    </Icon>
  );
});

IconMaterialDomainDisabledW100Filled.displayName = 'OnesyIconMaterialDomainDisabledW100Filled';

export default IconMaterialDomainDisabledW100Filled;
