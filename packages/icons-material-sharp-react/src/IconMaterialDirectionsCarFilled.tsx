import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsCarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCarFilled'

      short_name='DirectionsCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200v80H120v-360l98-280h524l98 280v360H720v-80H240Zm-8-360h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Z"/>
    </Icon>
  );
});

IconMaterialDirectionsCarFilled.displayName = 'OnesyIconMaterialDirectionsCarFilled';

export default IconMaterialDirectionsCarFilled;
