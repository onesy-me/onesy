import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicNoiseCancelOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicNoiseCancelOffFilled'

      short_name='MicNoiseCancelOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m253 831-56-56q40-40 61.5-91T280 576q0-57-21.5-108T197 377l42-42 84 84q17 36 26.5 75t9.5 81q0 72-27.5 138.5T253 831ZM141 718l-57-57q17-17 26.5-39.5T120 575q0-24-9.5-46T84 490l57-57q29 28 44.5 65t15.5 77q0 40-15.5 77.5T141 718Zm493-102-34-34v-46h80v80h-46Zm126 0v-80h80v80h-80ZM520 502l-80-80V216h80v286Zm271 499L520 730v206h-80V650L55 265l57-57 736 736-57 57Z"/>
    </Icon>
  );
});

IconMaterialMicNoiseCancelOffFilled.displayName = 'OnesyIconMaterialMicNoiseCancelOffFilled';

export default IconMaterialMicNoiseCancelOffFilled;
