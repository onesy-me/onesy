import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUserAttributesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UserAttributesW100'

      short_name='UserAttributes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M579-694v-28h268v28H579Zm0 148v-28h268v28H579Zm0 148v-28h268v28H579Zm-265.76-22q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5ZM113-220v-36q0-10.68 5.5-20.34T133-292q41-23 85.71-35.5Q263.42-340 313-340q49.58 0 94.29 12.5Q452-315 493-292q9 6 14.5 15.66T513-256v36H113Zm28-44v16h344v-16q-41-23-84.5-35.5T313-312q-44 0-87.5 12.5T141-264Zm172-184q21 0 36.5-15.5T365-500q0-21-15.5-36.5T313-552q-21 0-36.5 15.5T261-500q0 21 15.5 36.5T313-448Zm0-52Zm0 252Z"/>
    </Icon>
  );
});

IconMaterialUserAttributesW100.displayName = 'OnesyIconMaterialUserAttributesW100';

export default IconMaterialUserAttributesW100;
