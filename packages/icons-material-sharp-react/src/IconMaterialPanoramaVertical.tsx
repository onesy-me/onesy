import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVertical'

      short_name='PanoramaVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M255-159h451q-23-78-34.5-158.5T660-479q0-81 11.5-161.5T706-799H255q23 78 34 158.5T300-479q0 81-11 161.5T255-159ZM139-80q35-75 58-180t23-220q0-115-23-220t-58-180h681q-35 75-57.5 180T740-480q0 115 22.5 220T820-80H139Zm342-399Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVertical.displayName = 'OnesyIconMaterialPanoramaVertical';

export default IconMaterialPanoramaVertical;
