import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDifferenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceFilled'

      short_name='Difference'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-600v40q0 17 11.5 28.5T540-520q17 0 28.5-11.5T580-560v-40h40q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680h-40v-40q0-17-11.5-28.5T540-760q-17 0-28.5 11.5T500-720v40h-40q-17 0-28.5 11.5T420-640q0 17 11.5 28.5T460-600h40Zm-40 240h160q17 0 28.5-11.5T660-400q0-17-11.5-28.5T620-440H460q-17 0-28.5 11.5T420-400q0 17 11.5 28.5T460-360ZM320-200q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h247q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v367q0 33-23.5 56.5T760-200H320ZM160-40q-33 0-56.5-23.5T80-120v-520q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v520h400q17 0 28.5 11.5T600-80q0 17-11.5 28.5T560-40H160Z"/>
    </Icon>
  );
});

IconMaterialDifferenceFilled.displayName = 'OnesyIconMaterialDifferenceFilled';

export default IconMaterialDifferenceFilled;
