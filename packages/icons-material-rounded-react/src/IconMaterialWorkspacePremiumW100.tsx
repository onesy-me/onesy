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
      <path d="m480-496-61 48q-5 3-9.5 0t-2.5-8l23-78-60-42q-5-3-2.5-8.5t7.5-5.5h75l23-78q2-5 7-5t7 5l23 78h75q5 0 7.5 5.5T590-576l-60 42 23 78q2 5-2.5 8t-9.5 0l-61-48Zm0 322-150 43q-14 5-26-4.5T292-160v-210q-38-36-59-85t-21-105q0-112 78-190t190-78q112 0 190 78t78 190q0 56-21 105t-59 85v210q0 15-12 24.5t-26 4.5l-150-43Zm0-146q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-158l160-46 160 46v-188q-33 26-74 40t-86 14q-45 0-86-14t-74-40v188Zm160-94Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumW100.displayName = 'OnesyIconMaterialWorkspacePremiumW100';

export default IconMaterialWorkspacePremiumW100;
