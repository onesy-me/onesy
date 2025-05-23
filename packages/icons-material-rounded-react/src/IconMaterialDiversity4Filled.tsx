import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiversity4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diversity4Filled'

      short_name='Diversity4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m496-80 87-80q107-100 142-152.5T760-425q0-26-7-49t-21-46h68q33 0 56.5 23.5T880-440v320q0 17-11.5 28.5T840-80H496ZM80-120v-320q0-33 23-56.5t57-23.5h67q-13 21-20 45.5t-7 49.5q0 60 33.5 112.5T376-160l88 80H120q-17 0-28.5-11.5T80-120Zm680-440q-51 0-85.5-34.5T640-680q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T760-560Zm-280-40q-59 0-99.5-40.5T340-740q0-58 40.5-99t99.5-41q58 0 99 41t41 99q0 59-41 99.5T480-600ZM280-425q0 41 40 92t159 159q118-106 159.5-157.5T680-425q0-40-27-67.5T588-520q-23 0-43 11t-35 27l-31 32-30-31q-14-15-32-27t-45-12q-41 0-66.5 27.5T280-425Zm-80-135q-51 0-85.5-34.5T80-680q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T200-560Z"/>
    </Icon>
  );
});

IconMaterialDiversity4Filled.displayName = 'OnesyIconMaterialDiversity4Filled';

export default IconMaterialDiversity4Filled;
