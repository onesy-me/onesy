import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMultipleStopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultipleStopFilled'

      short_name='MultipleStop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m273-280 36 36q11 11 11 27.5T308-188q-11 11-28 11t-28-11L148-292q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T308-395l-35 35h127q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H273Zm287 0q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360q17 0 28.5 11.5T600-320q0 17-11.5 28.5T560-280Zm160 0q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280Zm-33-320H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L708-508q-11 11-27.5 11T652-508q-12-12-12-28.5t12-28.5l35-35Zm-447 0q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640q0 17-11.5 28.5T240-600Zm160 0q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600Z"/>
    </Icon>
  );
});

IconMaterialMultipleStopFilled.displayName = 'OnesyIconMaterialMultipleStopFilled';

export default IconMaterialMultipleStopFilled;
