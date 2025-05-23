import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBikeScooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooterW100Filled'

      short_name='BikeScooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M12-226v-28h186q6-72 57-125t119-59l-67-308H158v-28h172l78 362h-8q-72 0-123 51t-51 123v12H12Zm388 82q-39 0-66.5-27.5T306-238q0-39 27.5-66.5T400-332q39 0 66.5 27.5T494-238q0 39-27.5 66.5T400-144Zm372-124q-69 0-117.5-43.5T598-426H486l-6-28h118q3-29 22.5-71.5T678-588H452l-6-28h246l-77-210h-97v-28h117l87 238h50q74 0 124 50t50 124q0 71-52.5 122.5T772-268Zm-24-192 26-10-42-112-24 10 40 112Z"/>
    </Icon>
  );
});

IconMaterialBikeScooterW100Filled.displayName = 'OnesyIconMaterialBikeScooterW100Filled';

export default IconMaterialBikeScooterW100Filled;
