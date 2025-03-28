import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Heat'

      short_name='Heat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M476-321q0 38 19 75.5t65 89.5l-57 52q-58-61-83-111t-25-104q0-38 11.5-80T444-504q24-59 32.5-88.5T485-647q0-38-20.5-72T396-797l56-58q60 55 86.5 103T565-648q0 35-10 73.5T519-474q-25 60-34 92t-9 61Zm195 0q0 38 19.5 75.5T756-156l-57 51q-58-61-83.5-110.5T590-319q0-38 11.5-80T639-504q24-59 32.5-88.5T680-647q0-38-20-72t-68-78l55-58q60 55 86.5 103T760-648q0 35-10 73.5T714-474q-25 60-34 92t-9 61Zm-390 0q0 38 19.5 75.5T366-156l-57 52q-58-61-83.5-111T200-319q0-38 11.5-80T249-504q24-59 32.5-88.5T290-647q0-38-20-72t-68-78l55-58q60 55 86.5 103T370-648q0 35-10 73.5T324-474q-25 60-34 92t-9 61Z"/>
    </Icon>
  );
});

IconMaterialHeat.displayName = 'OnesyIconMaterialHeat';

export default IconMaterialHeat;
