import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamond'

      short_name='LineStartDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-313 167-167-167-167-167 167 167 167Zm-28 85L108-452q-12-12-12-28t12-28l224-224q12-12 28-12t28 12l212 212h240q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H600L388-228q-12 12-28 12t-28-12Zm28-252Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamond.displayName = 'OnesyIconMaterialLineStartDiamond';

export default IconMaterialLineStartDiamond;
