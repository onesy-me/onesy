import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReviews = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reviews'

      short_name='Reviews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-461 76 46q11 7 22-.5t8-20.5l-20-87 68-59q10-9 6-21.5T622-617l-89-7-35-82q-5-12-18-12t-18 12l-35 82-89 7q-14 1-18 13.5t6 21.5l68 59-20 87q-3 13 8 20.5t22 .5l76-46ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialReviews.displayName = 'OnesyIconMaterialReviews';

export default IconMaterialReviews;
