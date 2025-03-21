import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOff'

      short_name='AlarmOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M770-299q-16-5-23-19.5t-2-29.5q8-23 11.5-44.5T760-436q0-118-81.5-201T480-720q-26 0-47.5 3T392-707q-14 5-27.5-2.5T346-733q-5-16 3-31t25-20q25-8 51.5-12t54.5-4q76 0 141.5 28.5t114 78Q784-644 812-577.5T840-436q0 26-4.5 53T822-328q-5 17-20.5 25.5T770-299Zm-62-483q-11-11-11-28t11-28q11-11 28-11t28 11l114 114q11 11 11 28t-11 28q-11 11-28 11t-28-11L708-782ZM480-80q-74 0-139.5-28T226-184q-49-48-77.5-113T120-436q0-62 18.5-116.5T192-652l-34-34-20 20q-11 11-28 11t-28-11q-11-11-11-28t11-28l20-20-46-46q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-98-98q-45 33-99.5 51.5T480-80Zm0-79q42 0 82-13t74-36L248-594q-23 35-35.5 75.5T200-436q0 116 82 196.5T480-159Zm-38-242Zm114-114Z"/>
    </Icon>
  );
});

IconMaterialAlarmOff.displayName = 'OnesyIconMaterialAlarmOff';

export default IconMaterialAlarmOff;
