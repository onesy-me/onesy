import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInteractiveSpaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InteractiveSpaceFilled'

      short_name='InteractiveSpace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-634q6 6 14 6t14-6l52-52q6-6 6-14t-6-14l-52-52q-6-6-14-6t-14 6l-52 52q-6 6-6 14t6 14l52 52Zm394-46q25 0 42.5-17.5T720-740q0-25-17.5-42.5T660-800q-25 0-42.5 17.5T600-740q0 25 17.5 42.5T660-680ZM240-40q-17 0-28.5-11.5T200-80v-44q0-35 19.5-65t51.5-45q49-23 102-34.5T480-280q54 0 107 11.5T689-234q32 15 51.5 45t19.5 65v44q0 17-11.5 28.5T720-40H240Zm240-280q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41ZM80-840q0-33 23.5-56.5T160-920h640q33 0 56.5 23.5T880-840v360q0 33-23.5 56.5T800-400h-85q-17 0-27.5-13t-8.5-30q1-9 1-18.5t-1-18.5q-8-76-64.5-128T480-660q-78 0-134.5 52T281-480q-1 9-1 18.5t1 18.5q2 17-8.5 30T245-400h-85q-33 0-56.5-23.5T80-480v-360Z"/>
    </Icon>
  );
});

IconMaterialInteractiveSpaceFilled.displayName = 'OnesyIconMaterialInteractiveSpaceFilled';

export default IconMaterialInteractiveSpaceFilled;
