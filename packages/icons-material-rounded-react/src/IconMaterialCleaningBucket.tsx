import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaningBucket = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningBucket'

      short_name='CleaningBucket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M350-40q-30 0-52.5-19.5T271-109l-65-486q-2-18 10-31.5t30-13.5h468q18 0 30 13.5t10 31.5l-65 486q-4 30-26.5 49.5T610-40H350Zm0-80h260l58-440H291l59 440Zm130-200q50 0 85-35t35-85v-40q0-17-11.5-28.5T560-520q-17 0-28.5 11.5T520-480v40q0 17-11.5 28.5T480-400q-17 0-28.5-11.5T440-440v-40q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480v40q0 50 35 85t85 35Zm120-360q-25 0-42.5-17.5T540-740q0-25 17.5-42.5T600-800q25 0 42.5 17.5T660-740q0 25-17.5 42.5T600-680Zm-200-40q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm210 600H350h260Z"/>
    </Icon>
  );
});

IconMaterialCleaningBucket.displayName = 'OnesyIconMaterialCleaningBucket';

export default IconMaterialCleaningBucket;
