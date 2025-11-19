import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoStoriesOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesOffW100Filled'

      short_name='AutoStoriesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M808-112 631-289q-40 7-80 23t-73 40q-49-32-104-49t-114-17q-44 0-86 10t-82 28v-454q21-11 43.5-18.5T181-739l-69-69 20-20 696 695-20 21Zm60-126-67-66q15 0 24 4t15 7v-429l28 11v473Zm-388-22q29-18 62-32t65-21L480-440v180Zm160-172-80-80v-176l200-200v348L640-432ZM480-592 332-740q39 8 76 23.5t72 36.5v88Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesOffW100Filled.displayName = 'OnesyIconMaterialAutoStoriesOffW100Filled';

export default IconMaterialAutoStoriesOffW100Filled;
