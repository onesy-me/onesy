import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsBusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBusFilled'

      short_name='DirectionsBus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120H200v-122q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v122H640v-80H320v80Zm-80-440h480v-120H240v120Zm100 240q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320Zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBusFilled.displayName = 'OnesyIconMaterialDirectionsBusFilled';

export default IconMaterialDirectionsBusFilled;
