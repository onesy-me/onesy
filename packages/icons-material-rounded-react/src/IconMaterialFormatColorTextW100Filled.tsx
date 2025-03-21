import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorTextW100Filled'

      short_name='FormatColorText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M162 0q-13 0-21.5-8.5T132-30v-72q0-13 8.5-21.5T162-132h636q13 0 21.5 8.5T828-102v72q0 13-8.5 21.5T798 0H162Zm117-280q-8 0-12-6t-1-13l202-483q1-2 3-4t5-2h8q3 0 5 2t3 4l201 480q3 8-1.5 15t-12.5 7q-5 0-9-2.5t-6-7.5l-56-136H348l-56 137q-2 4-5 6.5t-8 2.5Zm79-172h240L482-736h-6L358-452Z"/>
    </Icon>
  );
});

IconMaterialFormatColorTextW100Filled.displayName = 'OnesyIconMaterialFormatColorTextW100Filled';

export default IconMaterialFormatColorTextW100Filled;
