import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatPaintW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintW100Filled'

      short_name='FormatPaint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M410-132v-251H212v-318q0-35.89 26.14-61.44Q264.29-788 301-788h447v405H549v251H410ZM240-536h480v-224h-73v145h-28v-145h-84v78h-28v-78H301q-26 0-43.5 16.5T240-701v165Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintW100Filled.displayName = 'OnesyIconMaterialFormatPaintW100Filled';

export default IconMaterialFormatPaintW100Filled;
