import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatQuoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteW100Filled'

      short_name='FormatQuote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m274-276 97-169q-9 5-21 7t-24 2q-53 0-88.5-36.5T202-560q0-53 35.5-88.5T326-684q51 0 87.5 35.5T450-560q0 18-4.5 34T433-496L306-276h-32Zm348 0 97-169q-9 5-21 7t-24 2q-53 0-88.5-36.5T550-560q0-54 35.5-89t88.5-35q51 0 87.5 35.5T798-560q0 18-4.5 34T781-496L654-276h-32Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteW100Filled.displayName = 'OnesyIconMaterialFormatQuoteW100Filled';

export default IconMaterialFormatQuoteW100Filled;
