import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricMeterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeterW100'

      short_name='ElectricMeter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-148v-80q-94-30-154-110t-60-184q0-64 24-120t66-98q42-42 98-66t119-24q64 0 120 24t98 66q42 42 66.5 98T788-522q0 103-60 183T574-229v81h-28v-73q-17 4-33.5 5.5T479-214q-17 0-33-1.5t-32-5.5v73h-28Zm94-92q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82ZM346-626h268v-28H346v28Zm104 309 78-78-50-50 55-55-23-23-78 78 50 50-55 55 23 23Zm30-203Z"/>
    </Icon>
  );
});

IconMaterialElectricMeterW100.displayName = 'OnesyIconMaterialElectricMeterW100';

export default IconMaterialElectricMeterW100;
