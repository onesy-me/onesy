import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanW100'

      short_name='Lan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-136v-168q0-13 8.5-21.5T176-334h90v-100q0-25 17.5-42.5T326-494h140v-132h-90q-13 0-21.5-8.5T346-656v-168q0-13 8.5-21.5T376-854h208q13 0 21.5 8.5T614-824v168q0 13-8.5 21.5T584-626h-90v132h140q25 0 42.5 17.5T694-434v100h90q13 0 21.5 8.5T814-304v168q0 13-8.5 21.5T784-106H576q-13 0-21.5-8.5T546-136v-168q0-13 8.5-21.5T576-334h90v-100q0-14-9-23t-23-9H326q-14 0-23 9t-9 23v100h90q13 0 21.5 8.5T414-304v168q0 13-8.5 21.5T384-106H176q-13 0-21.5-8.5T146-136Zm228-518h212v-172H374v172ZM174-134h212v-172H174v172Zm400 0h212v-172H574v172Zm-94-520Zm-94 348Zm188 0Z"/>
    </Icon>
  );
});

IconMaterialLanW100.displayName = 'OnesyIconMaterialLanW100';

export default IconMaterialLanW100;
