import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullHdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullHdFilled'

      short_name='FullHd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm320-280h60v50q0 13 8.5 21.5T530-360q13 0 21.5-8.5T560-390v-180q0-13-8.5-21.5T530-600q-13 0-21.5 8.5T500-570v70h-60v-70q0-13-8.5-21.5T410-600q-13 0-21.5 8.5T380-570v180q0 13 8.5 21.5T410-360q13 0 21.5-8.5T440-390v-50Zm190 80h90q25 0 42.5-17.5T780-420v-120q0-25-17.5-42.5T720-600h-90q-13 0-21.5 8.5T600-570v180q0 13 8.5 21.5T630-360Zm30-60v-120h60v120h-60Zm-420-20h50q13 0 21.5-8.5T320-470q0-13-8.5-21.5T290-500h-50v-40h70q13 0 21.5-8.5T340-570q0-13-8.5-21.5T310-600H210q-13 0-21.5 8.5T180-570v180q0 13 8.5 21.5T210-360q13 0 21.5-8.5T240-390v-50Z"/>
    </Icon>
  );
});

IconMaterialFullHdFilled.displayName = 'OnesyIconMaterialFullHdFilled';

export default IconMaterialFullHdFilled;
