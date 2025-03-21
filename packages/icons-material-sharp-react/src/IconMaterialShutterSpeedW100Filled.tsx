import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedW100Filled'

      short_name='ShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-840v-28h240v28H360Zm120 708q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q63 0 113 21t95 59l52-52 20 20-52 52q38 45 59 95t21 113q0 64-24.5 120T697-222q-42 42-98 66t-119 24Zm0-28q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Zm-8-348h251q-17-60-55.5-102.5T570-676l-98 168Zm-56 40 127-216q-64-16-121.5-1.5T320-635l96 167Zm-185 68h191L299-616q-39 42-58.5 99T231-400Zm159 195 96-167H237q14 55 55.5 100.5T390-205Zm28 9q76 19 133-2t89-47l-98-169-124 218Zm243-68q25-23 53.5-83T729-480H536l125 216Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedW100Filled.displayName = 'OnesyIconMaterialShutterSpeedW100Filled';

export default IconMaterialShutterSpeedW100Filled;
