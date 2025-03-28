import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApparelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApparelW100Filled'

      short_name='Apparel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m292-609-81 45q-11 6-21 3.5T174-574l-40-70q-6-11-3.5-21.5T144-682l178-106h42q12 0 19 7t7 19v4q0 36 27 63t63 27q36 0 63-27t27-63v-4q0-12 7-19t19-7h42l178 106q11 6 13.5 16.5T826-644l-40 70q-6 11-16 13.5t-21-3.5l-81-45v409q0 12-8 20t-20 8H320q-12 0-20-8t-8-20v-409Z"/>
    </Icon>
  );
});

IconMaterialApparelW100Filled.displayName = 'OnesyIconMaterialApparelW100Filled';

export default IconMaterialApparelW100Filled;
