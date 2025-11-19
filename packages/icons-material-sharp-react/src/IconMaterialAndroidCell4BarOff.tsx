import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCell4BarOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCell4BarOff'

      short_name='AndroidCell4BarOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M816-123 660-232v72H540v-156l-120-84v240H300v-324L30-674l57-81 786 550-57 82Zm84-185-120-84v-408h120v492ZM60-160v-320h120v320H60Zm600-316-120-84v-120h120v204Z"/>
    </Icon>
  );
});

IconMaterialAndroidCell4BarOff.displayName = 'OnesyIconMaterialAndroidCell4BarOff';

export default IconMaterialAndroidCell4BarOff;
