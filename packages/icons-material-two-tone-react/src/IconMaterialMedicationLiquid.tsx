import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicationLiquid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquid'

      short_name='MedicationLiquid'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><g opacity=".3"><defs><rect height="11" id="SVGID_1_" opacity=".3" width="10" x="4" y="8"/></defs><use overflow="visible" xlinkHref="#SVGID_1_"/><clipPath id="SVGID_2_"><use overflow="visible" xlinkHref="#SVGID_1_"/></clipPath><path clipPath="url(#SVGID_2_)" d="M4,19h10V8H4V19z M5,12h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5V12z"/></g><rect height="2" width="12" x="3" y="3"/><path d="M14,6H4C2.9,6,2,6.9,2,8v11c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8C16,6.9,15.1,6,14,6 M14,19H4V8h10V19z"/><polygon points="7.5,17.5 10.5,17.5 10.5,15 13,15 13,12 10.5,12 10.5,9.5 7.5,9.5 7.5,12 5,12 5,15 7.5,15"/></g><ellipse cx="20" cy="10" opacity=".3" rx="1" ry="2"/><path d="M20,6c-1.68,0-3,1.76-3,4c0,1.77,0.83,3.22,2,3.76V20c0,0.55,0.45,1,1,1s1-0.45,1-1v-6.24c1.17-0.54,2-1.99,2-3.76 C23,7.76,21.68,6,20,6z M20,12c-0.41,0-1-0.78-1-2s0.59-2,1-2s1,0.78,1,2S20.41,12,20,12z"/></g></g>
    </Icon>
  );
});

IconMaterialMedicationLiquid.displayName = 'OnesyIconMaterialMedicationLiquid';

export default IconMaterialMedicationLiquid;
