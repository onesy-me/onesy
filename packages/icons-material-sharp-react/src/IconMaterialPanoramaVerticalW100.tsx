import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalW100'

      short_name='PanoramaVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M255-160h450q-23-78-34.47-158.5Q659.06-399 659.06-480t11.47-161.5Q682-722 705-800H255q23 78 33.5 158.5T299-480q0 81-10.5 161.5T255-160Zm-36 28q23-81 38.5-161.5T273-480q0-106-15.5-186.5T219-828h522q-23 81-37.5 161.5T689-480q0 106 14.5 186.5T741-132H219Zm261-348Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalW100.displayName = 'OnesyIconMaterialPanoramaVerticalW100';

export default IconMaterialPanoramaVerticalW100;
