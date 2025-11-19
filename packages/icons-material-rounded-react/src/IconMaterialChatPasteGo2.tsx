import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatPasteGo2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGo2'

      short_name='ChatPasteGo2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M727-240H600q-17 0-28.5-11.5T560-280q0-17 11.5-28.5T600-320h127l-35-35q-11-12-11.5-28.5T692-412q12-12 28-12t28 12l104 104q12 12 12 28t-12 28L748-148q-12 12-28 12t-28-12q-12-12-11.5-28.5T692-205l35-35Zm-487 0-86 86q-10 10-22 5t-12-19v-552q0-33 23.5-56.5T200-800h480q33 0 56.5 23.5T760-720v160q0 17-11.5 28.5T720-520q-17 0-28.5-11.5T680-560v-160H200v400h240q17 0 28.5 11.5T480-280q0 17-11.5 28.5T440-240H240Zm-40-80v-400 400Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGo2.displayName = 'OnesyIconMaterialChatPasteGo2';

export default IconMaterialChatPasteGo2;
