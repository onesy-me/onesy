import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrawCollageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawCollageFilled'

      short_name='DrawCollage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M523-80v-128l-57-8q-55-8-89.5-39.5T342-329q0-48 39.5-80.5T476-439q5 0 8.5.5t7.5 1.5q-8-8-15-14.5T464-465q-20-22-29-40.5t-9-37.5q0-38 21.5-62.5T504-630q7 0 19 .5t26 2.5q2-20 0-41t-2-41q0-63 34-97t97-34q56 0 93.5 32t36.5 78q0 23-8 45t-18 43q5-1 10.5-1.5t10.5-.5q48 0 82.5 34.5T920-525q0 43-30.5 77.5T818-402q7 2 13 4t12 5q29 14 47 39.5t18 55.5q0 38-33.5 66.5T779-188l-40 10v98H523Zm-370-40-73-33 200-440 73 33-200 440Zm-15-417q-29-29-43.5-65.5T80-679q0-84 58-142.5T280-880q40 0 76.5 15t65.5 44l-56 56q-17-17-39.5-26t-46.5-9q-50 0-85 35t-35 85q0 24 9 46.5t26 39.5l-57 57Z"/>
    </Icon>
  );
});

IconMaterialDrawCollageFilled.displayName = 'OnesyIconMaterialDrawCollageFilled';

export default IconMaterialDrawCollageFilled;
