import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIceSkatingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingW100'

      short_name='IceSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-106q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h146v-132h-60q-24.75 0-42.37-17.63Q146-301.25 146-326v-428q0-24.75 17.63-42.38Q181.25-814 206-814h188q24.75 0 42.38 17.62Q454-778.75 454-754v94q0 35.37 21 64.18Q496-567 532-557l105 29q42.65 11.71 69.82 47.27Q734-445.18 734-400v74q0 24.75-17.62 42.37Q698.75-266 674-266h-60v132h106q60 0 99-30t47-90q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98-8 72-55 110t-119 38H120Zm86-188h468q14 0 23-9t9-23v-74q0-36.13-21.5-63.57Q663-491 628-501l-105-30q-30-9-52.5-27.5T437-606h-97q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8 0-5.6 4.2-9.8 4.2-4.2 9.8-4.2h89q-2-11-2.5-23.5T426-686h-86q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8 0-5.6 4.2-9.8 4.2-4.2 9.8-4.2h86v-40q0-14-9-23t-23-9H206q-14 0-23 9t-9 23v428q0 14 9 23t23 9Zm88 160h292v-132H294v132ZM174-294Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingW100.displayName = 'OnesyIconMaterialIceSkatingW100';

export default IconMaterialIceSkatingW100;
