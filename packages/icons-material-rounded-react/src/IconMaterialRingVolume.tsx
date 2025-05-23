import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRingVolume = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolume'

      short_name='RingVolume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-17 0-28.5-11.5T440-720v-120q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v120q0 17-11.5 28.5T480-680Zm196 84q-11-12-11.5-28t11.5-28l85-85q12-12 28.5-11.5T818-736q11 12 11.5 28T818-680l-85 85q-12 12-28.5 11.5T676-596Zm-392 0q-12 12-28.5 12.5T227-595l-85-85q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T199-737l85 85q12 12 11.5 28T284-596ZM136-144l-92-90q-12-12-12-28t12-28q88-95 203-142.5T480-480q118 0 232.5 47.5T916-290q12 12 12 28t-12 28l-92 90q-11 11-25.5 12t-26.5-8l-116-88q-8-6-12-14t-4-18v-114q-38-12-78-19t-82-7q-42 0-82 7t-78 19v114q0 10-4 18t-12 14l-116 88q-12 9-26.5 8T136-144Zm104-202q-29 15-56 34.5T128-268l40 40 72-56v-62Zm480 2v60l72 56 40-38q-29-26-56-45t-56-33Zm-480-2Zm480 2Z"/>
    </Icon>
  );
});

IconMaterialRingVolume.displayName = 'OnesyIconMaterialRingVolume';

export default IconMaterialRingVolume;
