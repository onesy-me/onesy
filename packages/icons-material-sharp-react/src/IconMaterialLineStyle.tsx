import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStyle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStyle'

      short_name='LineStyle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-80h80v80h-80Zm0-160v-80h200v80H120Zm0-160v-80h320v80H120Zm0-160v-160h720v160H120Zm160 480v-80h80v80h-80Zm100-160v-80h200v80H380Zm60 160v-80h80v80h-80Zm80-320v-80h320v80H520Zm80 320v-80h80v80h-80Zm40-160v-80h200v80H640Zm120 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialLineStyle.displayName = 'OnesyIconMaterialLineStyle';

export default IconMaterialLineStyle;
