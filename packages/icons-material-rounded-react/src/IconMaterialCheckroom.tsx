import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckroom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Checkroom'

      short_name='Checkroom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h480L480-420 240-240Zm185-444q-5 11-14.5 18t-22.5 7q-17 0-28.5-11.5T348-699q0-5 .5-8.5t2.5-7.5q17-38 52-61.5t77-23.5q58 0 99 40.5t41 98.5q0 47-27.5 84T520-526v36l344 258q8 5 12 13.5t4 18.5q0 17-11.5 28.5T840-160H120q-17 0-28.5-11.5T80-200q0-10 4-18.5T96-232l344-258v-70q0-17 12-28.5t29-11.5q25 0 42-18t17-43q0-25-17.5-42T480-720q-18 0-33 9.5T425-684Z"/>
    </Icon>
  );
});

IconMaterialCheckroom.displayName = 'OnesyIconMaterialCheckroom';

export default IconMaterialCheckroom;
