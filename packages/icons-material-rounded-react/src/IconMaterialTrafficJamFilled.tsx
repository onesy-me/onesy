import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrafficJamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrafficJamFilled'

      short_name='TrafficJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v20q0 25-17.5 42.5T100-80q-25 0-42.5-17.5T40-140v-276q0-12 2-23.5t7-22.5l76-181q7-17 22-27t33-10h360q18 0 33 10t22 27l76 181q5 11 7 22.5t2 23.5v276q0 25-17.5 42.5T620-80q-25 0-42.5-17.5T560-140v-20H160Zm-8-360h415l-33-80H186l-34 80Zm68 240q25 0 42.5-17.5T280-340q0-25-17.5-42.5T220-400q-25 0-42.5 17.5T160-340q0 25 17.5 42.5T220-280Zm280 0q25 0 42.5-17.5T560-340q0-25-17.5-42.5T500-400q-25 0-42.5 17.5T440-340q0 25 17.5 42.5T500-280Zm147-440H287q-20 0-30-12.5T247-760q0-15 10-27.5t30-12.5h373q18 0 33 10t22 27l76 181q5 11 7 22.5t2 23.5v296q0 17-11.5 28.5T760-200q-17 0-28.5-11.5T720-240v-304l-73-176Zm120-120H407q-20 0-30-12.5T367-880q0-15 10-27.5t30-12.5h373q18 0 33 10t22 27l76 181q5 11 7 22.5t2 23.5v296q0 17-11.5 28.5T880-320q-17 0-28.5-11.5T840-360v-304l-73-176Z"/>
    </Icon>
  );
});

IconMaterialTrafficJamFilled.displayName = 'OnesyIconMaterialTrafficJamFilled';

export default IconMaterialTrafficJamFilled;
