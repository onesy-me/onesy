import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDictionaryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DictionaryFilled'

      short_name='Dictionary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m241-494 38-107h2l38 107h-78Zm279 216q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394ZM228-457h104l19 53q2 6 7 9.5t12 3.5q11 0 17.5-9t2.5-19l-82-216q-2-6-7.5-10t-12.5-4h-16q-7 0-12.5 4t-7.5 10l-82 216q-4 10 2.5 19t17.5 9q7 0 12.5-3.5T210-405l18-52Zm252 276q-14 0-26.5-3.5T430-194q-39-23-82-34.5T260-240q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-45 0-88 11.5T530-194q-11 6-23.5 9.5T480-181Zm80-428q0-9 6.5-18.5T581-640q29-10 58-15t61-5q20 0 39.5 2.5T778-651q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-600q-26 0-51 5t-48 13q-18 7-29.5-1T560-609Zm0 220q0-9 6.5-18.5T581-420q29-10 58-15t61-5q20 0 39.5 2.5T778-431q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-380q-26 0-51 4.5T601-363q-18 7-29.5-.5T560-389Zm0-110q0-9 6.5-18.5T581-530q29-10 58-15t61-5q20 0 39.5 2.5T778-541q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-490q-26 0-51 5t-48 13q-18 7-29.5-1T560-499Z"/>
    </Icon>
  );
});

IconMaterialDictionaryFilled.displayName = 'OnesyIconMaterialDictionaryFilled';

export default IconMaterialDictionaryFilled;
