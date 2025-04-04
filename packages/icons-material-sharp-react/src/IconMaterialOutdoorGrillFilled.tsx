import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutdoorGrillFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGrillFilled'

      short_name='OutdoorGrill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-320q50 0 85 35t35 85q0 50-35 85t-85 35q-38 0-68.5-22T528-160H274l-61 96-69-43 180-277q-72-33-118-101.5T160-640h560q0 86-46 154.5T556-384l23 36q-21 10-34.5 20T515-300l-40-62q-8 2-17 2h-36q-9 0-17-2l-79 122h202q13-36 43.5-58t68.5-22Zm0 160q17 0 28.5-11.5T680-200q0-17-11.5-28.5T640-240q-17 0-28.5 11.5T600-200q0 17 11.5 28.5T640-160ZM336-680q5-29-1.5-49T307-775q-20-26-26.5-49.5T279-880h40q-5 29 1.5 48.5T348-786q21 26 27 49.5t1 56.5h-40Zm100 0q5-29-1-49t-27-46q-21-25-27.5-48.5T379-880h40q-5 29 1.5 48.5T448-786q20 25 26.5 48.5T476-680h-40Zm100 0q5-29-1-49t-27-46q-21-25-27.5-48.5T479-880h40q-5 29 1.5 48.5T548-786q20 25 26.5 48.5T576-680h-40Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGrillFilled.displayName = 'OnesyIconMaterialOutdoorGrillFilled';

export default IconMaterialOutdoorGrillFilled;
