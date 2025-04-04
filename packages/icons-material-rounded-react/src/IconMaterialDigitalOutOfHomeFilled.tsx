import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDigitalOutOfHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalOutOfHomeFilled'

      short_name='DigitalOutOfHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v40q0 17-11.5 28.5T40-40q-17 0-28.5-11.5T0-80v-760q0-33 23.5-56.5T80-920h280q33 0 56.5 23.5T440-840v760q0 17-11.5 28.5T400-40q-17 0-28.5-11.5T360-80v-40H80Zm697-206-77 72v174q0 17-11.5 28.5T660-40q-17 0-28.5-11.5T620-80v-224l86-82-21-104q-32 38-76 59.5T518-403q-16 2-27-9t-11-28q0-17 10.5-29t27.5-15q38-8 72-29.5t57-59.5l30-49q15-25 44-34t55 2l160 68q11 5 17.5 14.5T960-550v130q0 17-11.5 28.5T920-380q-17 0-28.5-11.5T880-420v-103l-57-24 88 459q4 19-8.5 33.5T870-40q-14 0-25-9t-14-23l-54-254ZM190-457l80-46q10-6 10-17t-10-17l-80-46q-10-6-20 0t-10 17v92q0 11 10 17t20 0Zm490-223q-33 0-56.5-23.5T600-760q0-33 23.5-56.5T680-840q33 0 56.5 23.5T760-760q0 33-23.5 56.5T680-680Z"/>
    </Icon>
  );
});

IconMaterialDigitalOutOfHomeFilled.displayName = 'OnesyIconMaterialDigitalOutOfHomeFilled';

export default IconMaterialDigitalOutOfHomeFilled;
