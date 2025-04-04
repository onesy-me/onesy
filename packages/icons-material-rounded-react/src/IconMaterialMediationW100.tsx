import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediationW100'

      short_name='Mediation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M795-466H499q-11 95-63 172.5T299-174q5 44-23.5 76T205-66q-39 0-66.5-27.5T111-160q0-39 27.5-66.5T205-254q29 0 51.5 15t34.5 41q74-42 121-112.5T471-466H299q-6 35-32.5 57.5T205-386q-39 0-66.5-27.5T111-480q0-39 27.5-66.5T205-574q35 0 61.5 22.5T299-494h172q-12-85-59-154.5T291-762q-12 26-34.5 41T205-706q-39 0-66.5-27.5T111-800q0-39 27.5-66.5T205-894q42 0 70.5 32t23.5 76q85 42 137 119.5T499-494h296l-80-80q-4-4-4.5-9.5T715-594q5-5 10-5t10 5l93 93q5 5 7 10t2 11q0 6-2 11t-7 10l-93 93q-4 4-9.5 4.5T715-366q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialMediationW100.displayName = 'OnesyIconMaterialMediationW100';

export default IconMaterialMediationW100;
