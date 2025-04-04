import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricRickshawFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricRickshawFilled'

      short_name='ElectricRickshaw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280q-39 0-69.5-22.5T128-360H40v-480h601l199 240v86q35 12 57.5 43.5T920-400q0 50-35 85t-85 35q-39 0-70.5-22.5T686-360H354q-14 35-44.5 57.5T240-280ZM120-640h160v-120H120v120Zm240 200h200v-320H360v120h120v80H360v120Zm280-160h96l-96-116v116ZM240-360q17 0 28.5-11.5T280-400q0-17-11.5-28.5T240-440q-17 0-28.5 11.5T200-400q0 17 11.5 28.5T240-360Zm560 0q17 0 28.5-11.5T840-400q0-17-11.5-28.5T800-440q-17 0-28.5 11.5T760-400q0 17 11.5 28.5T800-360ZM520-40 280-160h160v-80l240 120H520v80Z"/>
    </Icon>
  );
});

IconMaterialElectricRickshawFilled.displayName = 'OnesyIconMaterialElectricRickshawFilled';

export default IconMaterialElectricRickshawFilled;
