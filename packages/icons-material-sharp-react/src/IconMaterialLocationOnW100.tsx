import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOnW100'

      short_name='LocationOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.18-494q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5ZM480-169q110-94 177.5-198.5T725-547q0-110-69.5-182T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169Zm0 38Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 85-69 190T480-131Zm0-423Z"/>
    </Icon>
  );
});

IconMaterialLocationOnW100.displayName = 'OnesyIconMaterialLocationOnW100';

export default IconMaterialLocationOnW100;
