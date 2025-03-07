import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaningBucketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningBucketW100Filled'

      short_name='CleaningBucket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m326-92-66-496h441L635-92H326Zm153.88-254q39.12 0 66.62-27.42Q574-400.83 574-440v-54h-28v54q0 27-19.5 46.5T480-374q-27 0-46.5-19.5T414-440v-54h-28v54q0 39.17 27.38 66.58Q440.76-346 479.88-346Zm120.24-335Q586-681 576-690.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T624.12-691q-9.88 10-24 10ZM400-721q-30 0-52-22t-22-52.5q0-30.5 22-52t52.5-21.5q30.5 0 52 21.46T474-795q0 30-21.46 52T400-721Z"/>
    </Icon>
  );
});

IconMaterialCleaningBucketW100Filled.displayName = 'OnesyIconMaterialCleaningBucketW100Filled';

export default IconMaterialCleaningBucketW100Filled;
