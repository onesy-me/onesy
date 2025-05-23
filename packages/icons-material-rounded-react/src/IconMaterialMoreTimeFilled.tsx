import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreTimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreTimeFilled'

      short_name='MoreTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-496 100 100q11 11 11 28t-11 28q-11 11-28 11t-28-11L412-452q-6-6-9-13.5t-3-15.5v-159q0-17 11.5-28.5T440-680q17 0 28.5 11.5T480-640v144Zm240-224h-80q-17 0-28.5-11.5T600-760q0-17 11.5-28.5T640-800h80v-80q0-17 11.5-28.5T760-920q17 0 28.5 11.5T800-880v80h80q17 0 28.5 11.5T920-760q0 17-11.5 28.5T880-720h-80v80q0 17-11.5 28.5T760-600q-17 0-28.5-11.5T720-640v-80ZM440-120q-75 0-140.5-28T185-225q-49-49-77-114.5T80-480q0-75 28-140.5T185-735q49-49 114.5-77T440-840q11 0 20.5.5T481-837q17 0 28.5 11.5T521-797q0 17-11.5 28.5T481-757q-11 0-20.5-1.5T440-760q-118 0-199 81t-81 199q0 118 81 199t199 81q118 0 199-81t81-199q0-17 11.5-28.5T760-520q17 0 28.5 11.5T800-480q0 75-28 140.5T695-225q-49 49-114.5 77T440-120Z"/>
    </Icon>
  );
});

IconMaterialMoreTimeFilled.displayName = 'OnesyIconMaterialMoreTimeFilled';

export default IconMaterialMoreTimeFilled;
