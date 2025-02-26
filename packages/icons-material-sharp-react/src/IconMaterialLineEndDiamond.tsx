import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamond'

      short_name='LineEndDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-313 167-167-167-167-167 167 167 167Zm0 113L360-440H80v-80h280l240-240 280 280-280 280Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamond.displayName = 'OnesyIconMaterialLineEndDiamond';

export default IconMaterialLineEndDiamond;
