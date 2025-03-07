import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpokeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpokeW100Filled'

      short_name='Spoke'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-572q-44.55 0-76.27-31.72Q372-635.45 372-680t31.73-76.28Q435.45-788 480-788t76.28 31.72Q588-724.55 588-680t-31.72 76.28Q524.55-572 480-572ZM280-172q-44.55 0-76.27-31.73Q172-235.45 172-280t31.73-76.27Q235.45-388 280-388t76.27 31.73Q388-324.55 388-280t-31.73 76.27Q324.55-172 280-172Zm400 0q-44.55 0-76.28-31.73Q572-235.45 572-280t31.72-76.27Q635.45-388 680-388t76.28 31.73Q788-324.55 788-280t-31.72 76.27Q724.55-172 680-172Z"/>
    </Icon>
  );
});

IconMaterialSpokeW100Filled.displayName = 'OnesyIconMaterialSpokeW100Filled';

export default IconMaterialSpokeW100Filled;
