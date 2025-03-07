import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBikeDock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeDock'

      short_name='BikeDock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M158-120q-17 0-27.5-13T120-163q0-17 10-29.5t26-17.5l134-38 61-521q4-30 26.5-50.5T431-840h97q31 0 53.5 20.5T608-769l61 521 133 38q17 5 27.5 17t10.5 29q0 18-11.5 31T800-120H158Zm282-120h80v-480q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v480Z"/>
    </Icon>
  );
});

IconMaterialBikeDock.displayName = 'OnesyIconMaterialBikeDock';

export default IconMaterialBikeDock;
