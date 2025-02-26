import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRainyHeavyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyHeavyFilled'

      short_name='RainyHeavy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M338-204q-15 8-30.5 2.5T284-222L44-702q-8-15-2.5-30.5T62-756q15-8 30.5-2.5T116-738l240 480q8 15 2.5 30.5T338-204Zm187 0q-15 8-30.5 2.5T471-222L231-702q-8-15-2.5-30.5T249-756q15-8 30-2.5t23 20.5l241 480q8 15 2.5 30.5T525-204Zm187-1q-15 8-30.5 3T658-222L418-702q-8-15-2.5-30.5T436-756q15-8 30-2.5t23 20.5l241 480q8 15 2.5 30T712-205Zm186 1q-15 8-30.5 2.5T844-222L604-702q-8-15-2.5-30.5T622-756q15-8 30.5-2.5T676-738l240 480q8 15 2.5 30.5T898-204Z"/>
    </Icon>
  );
});

IconMaterialRainyHeavyFilled.displayName = 'OnesyIconMaterialRainyHeavyFilled';

export default IconMaterialRainyHeavyFilled;
