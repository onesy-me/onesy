import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkspacePremiumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremiumW100'

      short_name='WorkspacePremium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-434 30-100-79-56h99l30-102 30 102h99l-79 56 30 100-80-62-80 62ZM292-120v-250q-38-36-59-85t-21-105q0-112 78-190t190-78q112 0 190 78t78 190q0 56-21 105t-59 85v250l-188-54-188 54Zm188-200q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-158l160-46 160 46v-188q-33 26-74 40t-86 14q-45 0-86-14t-74-40v188Zm160-94Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumW100.displayName = 'OnesyIconMaterialWorkspacePremiumW100';

export default IconMaterialWorkspacePremiumW100;
