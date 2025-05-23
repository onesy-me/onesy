import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChartView = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartView'

      short_name='TableChartView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-108q-11-11-11-28t11-28l191-192q23-23 57-23t57 23l83 83 179-179q12-12 28-12t28 12q12 12 12 28.5T891-395L713-216q-23 23-56.5 23T600-216l-84-84-192 192q-11 11-27.5 11.5T268-108Zm-108-12q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v160q0 17-11.5 28.5T760-560H160v440Zm0-520h560v-120H160v120Zm0 0v-120 120Z"/>
    </Icon>
  );
});

IconMaterialTableChartView.displayName = 'OnesyIconMaterialTableChartView';

export default IconMaterialTableChartView;
