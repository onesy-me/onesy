import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatListNumbered = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumbered'

      short_name='FormatListNumbered'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h160v90l-40 30 40 30v90H120Zm0-280v-150h100v-30H120v-60h160v150H180v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumbered.displayName = 'OnesyIconMaterialFormatListNumbered';

export default IconMaterialFormatListNumbered;
