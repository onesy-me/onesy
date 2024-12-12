import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatListNumberedRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedRtlFilled'

      short_name='FormatListNumberedRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80v-60h100v-30h-60v-60h60v-30H680v-60h160v90l-40 30 40 30v90H680Zm0-280v-150h100v-30H680v-60h160v150H740v30h100v60H680Zm60-280v-180h-60v-60h120v240h-60ZM120-200v-80h480v80H120Zm0-240v-80h480v80H120Zm0-240v-80h480v80H120Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedRtlFilled.displayName = 'OnesyIconMaterialFormatListNumberedRtlFilled';

export default IconMaterialFormatListNumberedRtlFilled;
