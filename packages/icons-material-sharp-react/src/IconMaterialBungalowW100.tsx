import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBungalowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowW100'

      short_name='Bungalow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-172v-279l-49 78-24-14 221-355 220 355-24 14-48-77v278H332Zm28-28h92v-108h56v108h92v-295L480-688 360-496v296Zm92-200v-56h56v56h-56Zm-92 200h240-240Z"/>
    </Icon>
  );
});

IconMaterialBungalowW100.displayName = 'OnesyIconMaterialBungalowW100';

export default IconMaterialBungalowW100;
