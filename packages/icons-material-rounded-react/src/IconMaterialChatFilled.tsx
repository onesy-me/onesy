import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatFilled'

      short_name='Chat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm40-160h240q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Z"/>
    </Icon>
  );
});

IconMaterialChatFilled.displayName = 'OnesyIconMaterialChatFilled';

export default IconMaterialChatFilled;
