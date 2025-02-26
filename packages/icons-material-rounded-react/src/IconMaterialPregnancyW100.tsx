import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPregnancyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnancyW100'

      short_name='Pregnancy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-118v-214h-36q-12.75 0-21.37-8.63Q372-349.25 372-362v-228q0-29 19.5-48.5T440-658q29 0 48.5 19.5T508-590q36 8 58 38t22 68v122q0 12.75-8.62 21.37Q570.75-332 558-332h-78v196q0 12.75-8.62 21.37Q462.75-106 450-106q-5.1 0-8.55-3.45Q438-112.9 438-118Zm2-614q-27 0-45.5-18.5T376-796q0-27 18.5-45.5T440-860q27 0 45.5 18.5T504-796q0 27-18.5 45.5T440-732Z"/>
    </Icon>
  );
});

IconMaterialPregnancyW100.displayName = 'OnesyIconMaterialPregnancyW100';

export default IconMaterialPregnancyW100;
