import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPediatricsFilled = (props: IIcon) => {

  return (
    <Icon
      name='PediatricsFilled'

      short_name='Pediatrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-680v-80h160v-120h80v120h160v80H280Zm80 600q-33 0-56.5-23.5T280-160v-80h200v-80H280v-80h200v-80H280v-40q0-50 35-85t85-35h160q50 0 85 35t35 85v360q0 33-23.5 56.5T600-80H360Z"/>
    </Icon>
  );
};

IconMaterialPediatricsFilled.displayName = 'OnesyIconMaterialPediatricsFilled';

export default IconMaterialPediatricsFilled;
