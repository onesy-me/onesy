import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkUnreadChatAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAlt'

      short_name='MarkUnreadChatAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400h240q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h320q17 0 28.5-11.5T640-680q0-17-11.5-28.5T600-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Zm-40 400-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h360q17 0 28.5 11.5T560-840q0 17-11.5 28.5T520-800H160v525l46-45h594v-280q0-17 11.5-28.5T840-640q17 0 28.5 11.5T880-600v280q0 33-23.5 56.5T800-240H240Zm520-480q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-600-80v480-480Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAlt.displayName = 'OnesyIconMaterialMarkUnreadChatAlt';

export default IconMaterialMarkUnreadChatAlt;
