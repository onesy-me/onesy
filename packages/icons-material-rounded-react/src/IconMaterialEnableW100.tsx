import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnableW100'

      short_name='Enable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-110 62.5-198.5T359-806q7-2 13.5 0t8.5 8q2 6-1.5 11t-9.5 7q-94 35-152 117t-58 183q0 134 93 227t227 93q134 0 227-93t93-227q0-101-58-183T590-780q-6-2-9.5-7t-1.5-11q2-6 8.5-8t13.5 0q102 39 164.5 127.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Zm-14-279v-402q0-6 4-10t10-4q6 0 10 4t4 10v402l120-120q4-4 9.5-4.5T634-531q5 5 5 10t-5 10L501-378q-9 9-21 9t-21-9L326-511q-4-4-4.5-9.5T326-531q5-5 10-5t10 5l120 120Z"/>
    </Icon>
  );
});

IconMaterialEnableW100.displayName = 'OnesyIconMaterialEnableW100';

export default IconMaterialEnableW100;
