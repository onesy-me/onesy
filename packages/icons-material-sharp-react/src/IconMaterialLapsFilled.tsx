import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLapsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LapsFilled'

      short_name='Laps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-120-57-56 64-64h-7q-117 0-198.5-81.5T80-520q0-117 81.5-198.5T360-800h240q117 0 198.5 81.5T880-520q0 117-81.5 198.5T600-240v-80q83 0 141.5-58.5T800-520q0-83-58.5-141.5T600-720H360q-83 0-141.5 58.5T160-520q0 83 58.5 142.5T360-312h16l-72-72 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialLapsFilled.displayName = 'OnesyIconMaterialLapsFilled';

export default IconMaterialLapsFilled;
