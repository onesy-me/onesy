import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddComment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddComment'

      short_name='AddComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-520v80q0 17 11.5 28.5T480-400q17 0 28.5-11.5T520-440v-80h80q17 0 28.5-11.5T640-560q0-17-11.5-28.5T600-600h-80v-80q0-17-11.5-28.5T480-720q-17 0-28.5 11.5T440-680v80h-80q-17 0-28.5 11.5T320-560q0 17 11.5 28.5T360-520h80ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAddComment.displayName = 'OnesyIconMaterialAddComment';

export default IconMaterialAddComment;
