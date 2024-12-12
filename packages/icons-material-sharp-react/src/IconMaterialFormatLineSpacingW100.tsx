import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatLineSpacingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacingW100'

      short_name='FormatLineSpacing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-212 132-336l20-20 90 90v-428l-90 90-20-20 124-124 124 124-20 20-90-90v428l90-90 20 20-124 124Zm244-40v-28h328v40l-328-12Zm0-214v-28h328v28H500Zm0-214v-28l328-12v40H500Z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacingW100.displayName = 'OnesyIconMaterialFormatLineSpacingW100';

export default IconMaterialFormatLineSpacingW100;
