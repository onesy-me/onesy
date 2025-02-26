import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkeletonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkeletonFilled'

      short_name='Skeleton'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-45 0-78.5-9.5T326-125l-109-70q-29-18-43-46.5T160-301q0-69 48-104t104-35q29 0 56.5 9.5T418-402q5 5 10.5 8t11.5 6v-72q-51-3-95-12t-76-24q-32-15-50.5-35.5T200-579q0-20 14-37.5t39-32.5q-6-9-9.5-19.5T240-691q0-21 16.5-40.5T302-766q-2-5-2-9v-9q0-26 27.5-45.5T400-860v61q-14 5-23.5 9.5T362-780q5 5 22.5 11.5T440-759v-121h80v121q38-3 55.5-9.5T598-780q-5-4-14-8.5t-23-9.5v-62q45 11 72 31t27 45l-2 18q29 15 45.5 34t16.5 41q0 12-3.5 22.5T707-649q25 15 39 32.5t14 37.5q0 27-18.5 47.5T691-496q-32 15-76 24t-95 12v72q6-3 11.5-6t10.5-8q22-19 49.5-28.5T648-440q56 0 104 35.5T800-300q0 31-14 59.5T743-194l-109 69q-42 26-75.5 35.5T480-80Zm-40-440v-60q-39-2-73.5-9T306-608q-23 10-33.5 18.5T260-577q2 11 43.5 31.5T440-520ZM330-260q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm110-380v-59q-27-2-51-7.5T347-720q-23 9-34 17.5T300-690q1 14 36 29.5T440-640Zm80 120q95-5 136.5-25.5T700-577q-2-4-12-12.5T655-608q-26 12-60.5 19t-74.5 9v60Zm0-120q69-5 104-20.5t36-29.5q-2-3-11.5-11.5T614-720q-18 9-42 14t-52 7v59Zm110 380q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Z"/>
    </Icon>
  );
});

IconMaterialSkeletonFilled.displayName = 'OnesyIconMaterialSkeletonFilled';

export default IconMaterialSkeletonFilled;
