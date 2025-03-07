import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeatureSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeatureSearch'

      short_name='FeatureSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-430 80 80v270H80v-720h300q-8 18-12 38.5t-6 41.5H160v560h560v-270Zm52-174 128 128-56 56-128-128q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-700q0-75 52.5-127.5T620-880q75 0 127.5 52.5T800-700q0 27-8 51t-20 45Zm-152 4q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-430v270-560 280-12 22Z"/>
    </Icon>
  );
});

IconMaterialFeatureSearch.displayName = 'OnesyIconMaterialFeatureSearch';

export default IconMaterialFeatureSearch;
