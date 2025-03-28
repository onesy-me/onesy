import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeedback = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Feedback'

      short_name='Feedback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm0-160q17 0 28.5-11.5T520-560v-160q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v160q0 17 11.5 28.5T480-520ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFeedback.displayName = 'OnesyIconMaterialFeedback';

export default IconMaterialFeedback;
