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
      <path d="M626-106v-90L326-346H146v-188h158l122-140v-180h188v188H456L334-526v152l292 146v-66h188v188H626Z"/>
    </Icon>
  );
});

IconMaterialPolylineW100Filled.displayName = 'OnesyIconMaterialPolylineW100Filled';

export default IconMaterialPolylineW100Filled;
