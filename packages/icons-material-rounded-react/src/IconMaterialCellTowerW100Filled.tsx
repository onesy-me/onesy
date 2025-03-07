import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCellTowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellTowerW100Filled'

      short_name='CellTower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M148-560q0 59 21 116t65 106q5 5 6 11t-4 11q-5 5-11.5 3.5T213-319q-48-53-70.5-114.5T120-560q0-65 22.5-126.5T213-801q5-5 11.5-6.5T236-804q5 5 4 11t-6 11q-44 49-65 106t-21 116Zm132 0q0 35 11.5 68.5T328-429q4 5 4.5 10.5T328-408q-5 5-10.5 4.5T308-409q-28-33-42-72.5T252-560q0-39 14-78.5t42-72.5q4-5 9.5-5.5T328-712q5 5 4.5 11t-5.5 11q-23 28-35 61.5T280-560Zm112 314-22 70q-2 5-5.5 7.5T356-166q-8 0-12-5.5t-2-13.5l105-314q-18-9-27.5-26.5T410-560q0-29 20.5-49.5T480-630q29 0 49.5 20.5T550-560q0 17-8.5 33.5T513-499l105 314q2 7-2 13t-12 6q-5 0-8-2.5t-5-7.5l-23-70H392Zm10-28h156l-78-236-78 236Zm278-286q0-32-12-67t-36-64q-4-5-4.5-10.5T632-712q5-5 10.5-4.5t9.5 5.5q28 33 42 73t14 79q0 39-13.5 78T652-409q-4 5-9.5 5.5T632-408q-5-5-4.5-11t5.5-11q23-28 35-61.5t12-68.5Zm132 0q0-59-21-116t-65-106q-5-5-6-11t4-11q5-5 11.5-3.5T747-801q48 53 70.5 114.5T840-560q0 65-22 126.5T747-319q-5 5-11.5 6.5T724-316q-5-5-4-11t6-11q44-49 65-106t21-116Z"/>
    </Icon>
  );
});

IconMaterialCellTowerW100Filled.displayName = 'OnesyIconMaterialCellTowerW100Filled';

export default IconMaterialCellTowerW100Filled;
