import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSummarizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SummarizeFilled'

      short_name='Summarize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0 160q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h407q16 0 30.5 6t25.5 17l154 154q11 11 17 25.5t6 30.5v407q0 33-23.5 56.5T760-120H200Zm400-640v120q0 17 11.5 28.5T640-600h120L600-760Z"/>
    </Icon>
  );
});

IconMaterialSummarizeFilled.displayName = 'OnesyIconMaterialSummarizeFilled';

export default IconMaterialSummarizeFilled;
