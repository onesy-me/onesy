import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRowingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RowingW100'

      short_name='Rowing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m724-40-94-94v-60L330-494q-9 2-15 3t-17 3v-28q47-6 109-39.5t89-62.5l52-54q8-11 20-16.5t26-5.5q23 0 39.5 16.5T650-638v238q0 29-13 50.5T605-316l-75-75v-221q-41 41-84.5 67.5T360-504l290 290h60l94 94-80 80ZM218-174l-24-24 187-187 79 79H350L218-174Zm382-572q-23 0-38.5-15.5T546-800q0-23 15.5-38.5T600-854q23 0 38.5 15.5T654-800q0 23-15.5 38.5T600-746Z"/>
    </Icon>
  );
});

IconMaterialRowingW100.displayName = 'OnesyIconMaterialRowingW100';

export default IconMaterialRowingW100;
