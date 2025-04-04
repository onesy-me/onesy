import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person4W100'

      short_name='Person4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-472q-44.55 0-76.27-31.73Q372-535.45 372-580v-101q0-17.08 11.67-29.04Q395.33-722 412-722q11 0 19.5 5t14.5 13q6-8 14.5-13t19.5-5q11 0 19.5 5t14.5 13q6-8 14.5-13t19-5q17.5 0 29 11.96T588-681v101q0 44.55-31.72 76.27Q524.55-472 480-472Zm0-28q33 0 56.5-23.5T560-580v-100H400v100q0 33 23.5 56.5T480-500ZM212-192v-52q0-22 13.5-41.5T262-316q55-26 109.5-39T480-368q54 0 108.5 13T698-316q23 11 36.5 30.5T748-244v52H212Zm28-28h480v-24q0-14-9.5-26.5T684-292q-48-23-99.69-35.5Q532.63-340 480-340t-104.31 12.5Q324-315 276-292q-17 9-26.5 21.5T240-244v24Zm240 0Zm0-460Z"/>
    </Icon>
  );
});

IconMaterialPerson4W100.displayName = 'OnesyIconMaterialPerson4W100';

export default IconMaterialPerson4W100;
