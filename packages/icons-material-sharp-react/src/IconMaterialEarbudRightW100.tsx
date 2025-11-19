import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudRightW100'

      short_name='EarbudRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M503-132v-365H384v-28h147v365h120v-365h109v-195H384v-28h404v251H679v365H503ZM358-417q-80 0-133-61.5T172-623q0-83 53-144t133-61h26v411h-26Zm-2-26v-359q-69 0-112.5 54T200-622q0 72 43.5 125T356-443Zm235-180Zm-235 0Z"/>
    </Icon>
  );
});

IconMaterialEarbudRightW100.displayName = 'OnesyIconMaterialEarbudRightW100';

export default IconMaterialEarbudRightW100;
