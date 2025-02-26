import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextIncreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncreaseFilled'

      short_name='TextIncrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m187-343-41 114q-5 14-16 21.5t-25 7.5q-23 0-36.5-19.5T63-261l176-469q5-14 17-22t26-8h36q15 0 26.5 8t16.5 22l177 470q8 22-5.5 41T496-200q-14 0-26-8t-17-22l-40-113H187Zm29-81h168l-82-232h-4l-82 232Zm504-16h-80q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520h80v-80q0-17 11.5-28.5T760-640q17 0 28.5 11.5T800-600v80h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80v80q0 17-11.5 28.5T760-320q-17 0-28.5-11.5T720-360v-80Z"/>
    </Icon>
  );
});

IconMaterialTextIncreaseFilled.displayName = 'OnesyIconMaterialTextIncreaseFilled';

export default IconMaterialTextIncreaseFilled;
