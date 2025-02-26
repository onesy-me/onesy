import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatQuoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteW100'

      short_name='FormatQuote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m274-276 97-169q-9 5-21 7t-24 2q-53 0-88.5-36.42Q202-508.85 202-560q0-53 35.5-88.5T326-684q51.15 0 87.58 35.5Q450-613 450-560.35q0 18.35-4.5 34.35T433-496L306-276h-32Zm348 0 97-169q-9 5-21 7t-24 2q-53 0-88.5-36.42Q550-508.85 550-560q0-54 35.5-89t88.5-35q51.15 0 87.58 35.5Q798-613 798-560.35q0 18.35-4.5 34.35T781-496L654-276h-32ZM326-464q40 0 68-28t28-68q0-40-28-68t-68-28q-40 0-68 28t-28 68q0 40 28 68t68 28Zm348 0q40 0 68-28t28-68q0-40-28-68t-68-28q-40 0-68 28t-28 68q0 40 28 68t68 28Zm0-96Zm-348 0Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteW100.displayName = 'OnesyIconMaterialFormatQuoteW100';

export default IconMaterialFormatQuoteW100;
