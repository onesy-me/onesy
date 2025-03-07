import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomPreferences = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferences'

      short_name='RoomPreferences'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m677-96-9-44q-12-5-22.5-11T625-165l-42 15q-7 2-13.5-.5T559-159l-24-41q-4-6-2.5-13t6.5-12l33-29q-2-15-2-25.5t2-25.5l-33-29q-5-5-6.5-12t2.5-13l24-41q4-6 10.5-8.5t13.5-.5l42 15q10-8 20.5-14.5T668-420l9-44q2-7 6.5-11.5T696-480h48q8 0 12.5 4.5T763-464l9 44q12 5 22.5 11t20.5 14l42-15q7-2 13.5.5T881-401l24 41q4 6 2.5 13t-6.5 12l-33 29q2 15 2 25.5t-2 25.5l33 29q5 5 6.5 12t-2.5 13l-24 41q-4 6-10 8.5t-13 .5l-43-14q-10 8-20.5 14T772-140l-9 44q-2 7-6.5 11.5T744-80h-48q-8 0-12.5-4.5T677-96Zm43-104q33 0 56.5-23.5T800-280q0-33-23.5-56.5T720-360q-33 0-56.5 23.5T640-280q0 33 23.5 56.5T720-200ZM440-440q-17 0-28.5-11.5T400-480q0-17 11.5-28.5T440-520q17 0 28.5 11.5T480-480q0 17-11.5 28.5T440-440ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-560q0-33 23.5-56.5T280-840h240q23 0 40.5 11t28.5 29h91q33 0 56.5 23.5T760-720v120q0 17-11.5 28.5T720-560q-17 0-28.5-11.5T680-600v-120h-80v166q0 20-12.5 30T560-514q-15 0-27.5-10T520-554v-206H280v560h147q20 0 29.5 12.5T466-160q0 15-9.5 27.5T427-120H160Zm120-80v-560 560Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferences.displayName = 'OnesyIconMaterialRoomPreferences';

export default IconMaterialRoomPreferences;
