import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolylineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineW100Filled'

      short_name='Polyline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M626-136v-60L326-346H176q-13 0-21.5-8.5T146-376v-128q0-13 8.5-21.5T176-534h128l122-140v-150q0-13 8.5-21.5T456-854h128q13 0 21.5 8.5T614-824v128q0 13-8.5 21.5T584-666H456L334-526v152l292 146v-36q0-13 8.5-21.5T656-294h128q13 0 21.5 8.5T814-264v128q0 13-8.5 21.5T784-106H656q-13 0-21.5-8.5T626-136Z"/>
    </Icon>
  );
});

IconMaterialPolylineW100Filled.displayName = 'OnesyIconMaterialPolylineW100Filled';

export default IconMaterialPolylineW100Filled;
