import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMeasuringTapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeasuringTapeFilled'

      short_name='MeasuringTape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-160H280q-33 0-56.5-23.5T200-240v-260q0-142 99-241t241-99q142 0 241 99t99 241q0 142-99 241t-241 99Zm0-200q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T480-500q0-25 17.5-42.5T540-560q25 0 42.5 17.5T600-500q0 25-17.5 42.5T540-440ZM120-160q-17 0-28.5-11.5T80-200v-120q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v120q0 17-11.5 28.5T120-160Z"/>
    </Icon>
  );
});

IconMaterialMeasuringTapeFilled.displayName = 'OnesyIconMaterialMeasuringTapeFilled';

export default IconMaterialMeasuringTapeFilled;
