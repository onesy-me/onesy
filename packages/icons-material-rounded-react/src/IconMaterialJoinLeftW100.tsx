import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinLeftW100'

      short_name='JoinLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-480q0-95 66.5-161.5T320-708q30 0 58.5 7.5T432-679q11 6 12.5 18.5T438-637q-26 34-40 74t-14 83q0 43 14 83t40 74q8 11 6.5 23T432-281q-25 14-53.5 21.5T320-252q-95 0-161.5-66.5T92-480Zm388 146q-6 0-12-3t-11-8q-21-29-33-63.5T412-480q0-37 12-71.5t33-63.5q5-5 11-8t12-3q6 0 12 3t11 8q21 29 33 63.5t12 71.5q0 37-12 71.5T503-345q-5 5-11 8t-12 3Zm388-146q0 45-17.5 87T801-319q-54 54-129 65.5T531-279q-5-3-7-9t1-11q3-5 9-6.5t11 1.5q58 32 123 22.5T781-339q28-28 43.5-64.5T840-480q0-40-15.5-76.5T781-621q-48-48-113-57.5T545-656q-5 3-11 1.5t-9-6.5q-3-5-1-11t7-9q66-37 141-25.5T801-641q32 32 49.5 74t17.5 87Z"/>
    </Icon>
  );
});

IconMaterialJoinLeftW100.displayName = 'OnesyIconMaterialJoinLeftW100';

export default IconMaterialJoinLeftW100;
