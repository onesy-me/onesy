import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveItemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveItemW100'

      short_name='MoveItem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M829-466H394q-6 0-10-4t-4-10q0-6 4-10t10-4h435l-80-80q-4-4-4.5-9.5T749-594q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T749-366q-5-5-5-10t5-10l80-80ZM621-628v-100q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9h357q14 0 23-9t9-23v-100q0-6 4-10t10-4q6 0 10 4t4 10v100q0 25-17.5 42.5T589-172H232q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h357q25 0 42.5 17.5T649-728v100q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialMoveItemW100.displayName = 'OnesyIconMaterialMoveItemW100';

export default IconMaterialMoveItemW100;
