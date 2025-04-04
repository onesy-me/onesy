import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZonePersonIdle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonIdle'

      short_name='ZonePersonIdle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-107 528-370l-16 78H352l40-204-72 28v96q0 17-11.5 28.5T280-332q-17 0-28.5-11.5T240-372v-122q0-12 6.5-21.5T264-530l72-31L55-842q-12-12-11.5-28.5T56-899q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-107Zm-631-25q-33 0-56.5-23.5T80-212v-80q0-17 11.5-28.5T120-332q17 0 28.5 11.5T160-292v80h80q17 0 28.5 11.5T280-172q0 17-11.5 28.5T240-132h-80Zm640-640v-80h-80q-17 0-28.5-11.5T680-892q0-17 11.5-28.5T720-932h80q33 0 56.5 23.5T880-852v80q0 17-11.5 28.5T840-732q-17 0-28.5-11.5T800-772ZM80-732v-100q0-17 6.5-31.5T103-889l57 58v99H80Zm640 600q-17 0-28.5-11.5T680-172q0-17 11.5-28.5T720-212h69l57 56q-10 11-24.5 17.5T790-132h-70ZM273-852l-80-80h87q17 0 28.5 11.5T320-892q0 17-11.5 28.5T280-852h-7Zm607 607-80-80v-7q0-17 11.5-28.5T840-372q17 0 28.5 11.5T880-332v87ZM540-632q-33 0-56.5-23.5T460-712q0-33 23.5-56.5T540-792q33 0 56.5 23.5T620-712q0 33-23.5 56.5T540-632Z"/>
    </Icon>
  );
});

IconMaterialZonePersonIdle.displayName = 'OnesyIconMaterialZonePersonIdle';

export default IconMaterialZonePersonIdle;
