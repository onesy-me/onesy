import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCellTowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellTowerW100'

      short_name='CellTower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-306q-55-55-80.5-120T120-560q0-69 25.5-134T226-814l20 20q-50 51-74 111t-24 123q0 63 24 123t74 111l-20 20Zm92-92q-33-35-49.5-77T252-560q0-43 16.5-85t49.5-77l20 20q-29 29-43.5 66.5T280-560q0 38 14 75t44 67l-20 20Zm18 232 111-333q-18-9-27.5-26.5T410-560q0-29 20.5-49.5T480-630q29 0 49.5 20.5T550-560q0 17-8.5 33.5T513-499l111 333h-30l-26-80H392l-25 80h-31Zm66-108h156l-78-236-78 236Zm240-124-20-20q29-29 43.5-66.5T680-560q0-35-14.5-73T622-702l20-20q33 35 49.5 78t16.5 85q0 43-16 84.5T642-398Zm92 92-20-20q50-51 74-111t24-123q0-63-24-123t-74-111l20-20q54 55 80 120t26 134q0 69-25 134t-81 120Z"/>
    </Icon>
  );
});

IconMaterialCellTowerW100.displayName = 'OnesyIconMaterialCellTowerW100';

export default IconMaterialCellTowerW100;
