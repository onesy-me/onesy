import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyRestroomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyRestroomW100'

      short_name='FamilyRestroom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-730q-26.4 0-45.2-18.8Q656-767.6 656-794q0-26.4 18.8-45.2Q693.6-858 720-858q26.4 0 45.2 18.8Q784-820.4 784-794q0 26.4-18.8 45.2Q746.4-730 720-730Zm-54 624v-411h-60l61-159h107l126 324H792v246H666ZM499.88-504q-20.88 0-35.38-14.62-14.5-14.62-14.5-35.5 0-20.88 14.62-35.38 14.62-14.5 35.5-14.5 20.88 0 35.38 14.62 14.5 14.62 14.5 35.5 0 20.88-14.62 35.38-14.62 14.5-35.5 14.5ZM220-730q-26.4 0-45.2-18.8Q156-767.6 156-794q0-26.4 18.8-45.2Q193.6-858 220-858q26.4 0 45.2 18.8Q284-820.4 284-794q0 26.4-18.8 45.2Q246.4-730 220-730Zm-68 624v-258H84v-294h272v294h-68v258H152Zm302 0v-134h-40v-220h172v220h-40v134h-92Z"/>
    </Icon>
  );
});

IconMaterialFamilyRestroomW100.displayName = 'OnesyIconMaterialFamilyRestroomW100';

export default IconMaterialFamilyRestroomW100;
