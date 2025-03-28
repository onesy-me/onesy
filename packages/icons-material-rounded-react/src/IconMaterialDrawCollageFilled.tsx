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
      <path d="M117-136q-15-7-21-23t1-31l167-367q7-15 22-21t30 1q15 7 21 23t-1 31L169-156q-7 15-22 21t-30-1Zm446 56q-17 0-28.5-11.5T523-120v-88l-57-8q-55-8-89.5-39.5T342-329q0-48 39.5-80.5T476-439q5 0 8.5.5t7.5 1.5q-8-8-15-14.5T464-465q-20-22-29-40.5t-9-37.5q0-38 21.5-62.5T504-630q7 0 19 .5t26 2.5q2-20 0-41t-2-41q0-63 34-97t97-34q56 0 93.5 32t36.5 78q0 23-8 45t-18 43q5-1 10.5-1.5t10.5-.5q48 0 82.5 34.5T920-525q0 43-30.5 77.5T818-402q7 2 13 4t12 5q29 14 47 39.5t18 55.5q0 38-33.5 66.5T779-188l-40 10v58q0 17-11.5 28.5T699-80H563ZM167-566q-12 12-29.5 11T111-570q-16-24-23.5-52T80-679q0-84 58-142.5T280-880q29 0 57 8.5t53 24.5q14 9 15 25.5T394-793q-12 12-29 12.5t-33-7.5q-12-6-25-9t-27-3q-50 0-85 35t-35 85q0 14 3 27t8 25q8 16 8 33t-12 29Z"/>
    </Icon>
  );
});

IconMaterialDrawCollageFilled.displayName = 'OnesyIconMaterialDrawCollageFilled';

export default IconMaterialDrawCollageFilled;
