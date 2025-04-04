import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTraffic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Traffic'

      short_name='Traffic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-180q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-180q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM280-360v-46q-41-11-72-40.5T166-517q-2-17 9-30t28-13h77v-46q-41-11-72-40.5T166-717q-2-17 9-30t28-13h77q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760h77q17 0 28 13t9 30q-11 41-42 70.5T680-606v46h77q17 0 28 13t9 30q-11 41-42 70.5T680-406v46h77q17 0 28 13t9 30q-11 41-42 70.5T680-206v6q0 33-23.5 56.5T600-120H360q-33 0-56.5-23.5T280-200v-6q-41-11-72-40.5T166-317q-2-17 9-30t28-13h77Zm80 160h240v-560H360v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialTraffic.displayName = 'OnesyIconMaterialTraffic';

export default IconMaterialTraffic;
