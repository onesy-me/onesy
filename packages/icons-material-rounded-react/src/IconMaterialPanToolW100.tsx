import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolW100'

      short_name='PanTool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M447-118q-23.41 0-43.71-10.5Q383-139 369-159L130-509q-2-2-1.5-4.5t2.5-4.5q11-11 26-11.5t28 8.5l147 102v-326q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v323q0 17.87-16 26.44-16 8.56-31-2.44l-138-96 217 319q9 14 23.5 21.5T447-146h207q45 0 75.5-30.5T760-252v-482q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v482q0 56-39 95t-95 39H447Zm42.04-721q5.96 0 9.96 4.03 4 4.02 4 9.97v305q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-305q0-5.95 4.04-9.97 4.03-4.03 10-4.03Zm143 40q5.96 0 9.96 4.03 4 4.02 4 9.97v265q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-265q0-5.95 4.04-9.97 4.03-4.03 10-4.03ZM468-326Z"/>
    </Icon>
  );
});

IconMaterialPanToolW100.displayName = 'OnesyIconMaterialPanToolW100';

export default IconMaterialPanToolW100;
