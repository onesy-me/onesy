import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZonePersonUrgent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonUrgent'

      short_name='ZonePersonUrgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-760v-80q0-33 23.5-56.5T160-920h80q17 0 28.5 11.5T280-880q0 17-11.5 28.5T240-840h-80v80q0 17-11.5 28.5T120-720q-17 0-28.5-11.5T80-760Zm80 640q-33 0-56.5-23.5T80-200v-80q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280v80h80q17 0 28.5 11.5T280-160q0 17-11.5 28.5T240-120h-80Zm640-640v-80h-80q-17 0-28.5-11.5T680-880q0-17 11.5-28.5T720-920h80q33 0 56.5 23.5T880-840v80q0 17-11.5 28.5T840-720q-17 0-28.5-11.5T800-760ZM540-620q-33 0-56.5-23.5T460-700q0-33 23.5-56.5T540-780q33 0 56.5 23.5T620-700q0 33-23.5 56.5T540-620ZM352-280l40-204-72 28v96q0 17-11.5 28.5T280-320q-17 0-28.5-11.5T240-360v-122q0-12 6.5-21.5T264-518l134-58q35-15 51.5-19.5T480-600q21 0 39 11t29 29l40 64q11 17 24 31.5t30 26.5l-41 71q-17-11-32.5-24.5T540-420l-28 140H352ZM600-80q-23 0-34.5-20t-.5-40l160-280q13-19 36-21t34 21l160 280q13 20 0 40t-35 20H600Zm160-40q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialZonePersonUrgent.displayName = 'OnesyIconMaterialZonePersonUrgent';

export default IconMaterialZonePersonUrgent;
