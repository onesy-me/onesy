import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsPhillipsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPhillipsW100'

      short_name='ToolsPhillips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h268q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H346Zm15.58-68q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37v-281q0-9.75 3-18.75t9-17.25l106-141q3-4 7-6t9-2h28.29q4.71 0 8.71 2 4 2 7 6l106 141q6 8.25 9 17.25t3 18.75v281q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63H361.58ZM360-268h240v-124L480-512 360-392v124Zm0-163 106-106v-166L360-561v130Zm240 0v-130L494-703v166l106 106Zm0 163H360h240Z"/>
    </Icon>
  );
});

IconMaterialToolsPhillipsW100.displayName = 'OnesyIconMaterialToolsPhillipsW100';

export default IconMaterialToolsPhillipsW100;
