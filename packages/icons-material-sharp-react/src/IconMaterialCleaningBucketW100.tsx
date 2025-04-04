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
      <path d="m326-92-66-496h441L635-92H326Zm52-28h204q12 0 21-8t11-20l54-412H291l55 412q2 12 11 20t21 8Zm102-226q39 0 66.5-27.5T574-440v-54h-28v54q0 27-19.5 46.5T480-374q-27 0-46.5-19.5T414-440v-54h-28v54q0 39 27.5 66.5T480-346Zm120-335q-14 0-24-10t-10-24q0-14 10-24t24-10q14 0 24 10t10 24q0 14-10 24t-24 10Zm-200-40q-30 0-52-22t-22-52q0-31 22-52.5t52-21.5q31 0 52.5 21.5T474-795q0 30-21.5 52T400-721Zm182 601H348h264-30Z"/>
    </Icon>
  );
});

IconMaterialCleaningBucketW100.displayName = 'OnesyIconMaterialCleaningBucketW100';

export default IconMaterialCleaningBucketW100;
