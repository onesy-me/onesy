import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forum'

      short_name='Forum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v503q0 27-24.5 37.5T812-148l-92-92H280Zm-40-200-92 92q-19 19-43.5 8.5T80-377v-463q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240Zm360-80v-280H160v280h440Zm-440 0v-280 280Z"/>
    </Icon>
  );
});

IconMaterialForum.displayName = 'OnesyIconMaterialForum';

export default IconMaterialForum;
