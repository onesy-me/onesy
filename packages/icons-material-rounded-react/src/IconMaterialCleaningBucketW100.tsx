import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaningBucketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningBucketW100'

      short_name='CleaningBucket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M379.38-92q-23.38 0-40.37-14.7Q322.02-121.39 319-144l-54-410q-2-13.6 6.5-23.8Q280-588 294.32-588h372.36q14.32 0 22.82 10.2T696-554l-54 410q-3.04 22.61-20.13 37.3Q604.78-92 582-92H379.38ZM378-120h204q12 0 21-8t11-20l54-412H291l55 412q2 12 11 20t21 8Zm101.88-226q39.12 0 66.62-27.42Q574-400.83 574-440v-40q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v40q0 27-19.5 46.5T480-374q-27 0-46.5-19.5T414-440v-40q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v40q0 39.17 27.38 66.58Q440.76-346 479.88-346Zm120.24-335Q586-681 576-690.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T624.12-691q-9.88 10-24 10ZM400-721q-30 0-52-22t-22-52.5q0-30.5 22-52t52.5-21.5q30.5 0 52 21.46T474-795q0 30-21.46 52T400-721Zm182 601H348h264-30Z"/>
    </Icon>
  );
});

IconMaterialCleaningBucketW100.displayName = 'OnesyIconMaterialCleaningBucketW100';

export default IconMaterialCleaningBucketW100;
