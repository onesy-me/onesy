import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoneyRangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyRangeW100Filled'

      short_name='MoneyRange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-92 132-216l124-123 19 20-88 89h586l-88-89 20-20 123 123L704-92l-19-20 89-90H186l89 90-19 20Zm-83-340v-396h615v396H173Zm307-130q29 0 48.5-19.5T548-630q0-29-19.5-48.5T480-698q-29 0-48.5 19.5T412-630q0 29 19.5 48.5T480-562ZM201-460h60q0-25-17.5-42.5T201-520v60Zm499 0h60v-60q-25 0-42.5 17.5T700-460Zm60-280v-60h-60q0 25 17.5 42.5T760-740Zm-559 0q25 0 42.5-17.5T261-800h-60v60Z"/>
    </Icon>
  );
});

IconMaterialMoneyRangeW100Filled.displayName = 'OnesyIconMaterialMoneyRangeW100Filled';

export default IconMaterialMoneyRangeW100Filled;
