import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationSearchingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingFilled'

      short_name='LocationSearching'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-40q-125-14-214.5-103.5T122-438H82q-17 0-28.5-11.5T42-478q0-17 11.5-28.5T82-518h40q14-125 103.5-214.5T440-836v-40q0-17 11.5-28.5T480-916q17 0 28.5 11.5T520-876v40q125 14 214.5 103.5T838-518h40q17 0 28.5 11.5T918-478q0 17-11.5 28.5T878-438h-40q-14 125-103.5 214.5T520-120v40q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80Zm40-118q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingFilled.displayName = 'OnesyIconMaterialLocationSearchingFilled';

export default IconMaterialLocationSearchingFilled;
