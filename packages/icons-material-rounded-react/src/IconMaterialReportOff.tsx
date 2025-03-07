import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReportOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOff'

      short_name='ReportOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M597-840q16 0 30.5 6t25.5 17l164 164q11 11 17 25.5t6 30.5v237q0 17-11.5 28.5T800-320q-17 0-28.5-11.5T760-360v-236L596-760H360q-17 0-28.5-11.5T320-800q0-17 11.5-28.5T360-840h237Zm-77 288v-88q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v8l80 80ZM363-120q-16 0-30.5-6.5T307-144L143-309q-11-11-17-25.5t-6-30.5v-232q0-16 6-30.5t17-25.5l25-25-84-86q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-86-86-24 25q-11 12-26 18.5t-32 6.5H363Zm173-416ZM364-200h232l26-26-396-396-26 26v232l164 164Zm116-80q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm-56-144Z"/>
    </Icon>
  );
});

IconMaterialReportOff.displayName = 'OnesyIconMaterialReportOff';

export default IconMaterialReportOff;
