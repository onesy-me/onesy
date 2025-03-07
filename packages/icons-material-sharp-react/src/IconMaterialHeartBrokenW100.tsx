import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartBrokenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBrokenW100'

      short_name='HeartBroken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-148Q381-248 314-319T206.5-443.5Q166-497 149-538.5T132-620q0-81.13 56.44-137.56Q244.87-814 326-814q36.28 0 70.14 12T458-767l-67 233h123l-29 319 125-411H488l56-168q20.18-10 42.39-15 22.2-5 45.61-5 81.13 0 137.56 56.44Q826-701.13 826-620q0 41-18.5 84t-60 98q-41.5 55-107 125T481-148Zm-22-62 27-296H354l72-251q-23-12-48.42-20.5Q352.15-786 326-786q-68.77 0-117.39 48.61Q160-688.77 160-620q0 33 14.5 69t49.5 83.5Q259-420 316.5-358T459-210Zm53-9q159-164 222.5-250.5T798-620q0-68.77-48.61-117.39Q700.77-786 632-786q-17 0-33 4t-32 9l-39 119h117L512-219Zm133-435ZM354-506Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenW100.displayName = 'OnesyIconMaterialHeartBrokenW100';

export default IconMaterialHeartBrokenW100;
