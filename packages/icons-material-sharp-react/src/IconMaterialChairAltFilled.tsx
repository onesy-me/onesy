import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairAltFilled = (props: IIcon) => {

  return (
    <Icon
      name='ChairAltFilled'

      short_name='ChairAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-360h120v-80H200v-280h560v280H640v80h120v360h-80v-120H280v120h-80Zm200-360h160v-80H400v80Z"/>
    </Icon>
  );
};

IconMaterialChairAltFilled.displayName = 'OnesyIconMaterialChairAltFilled';

export default IconMaterialChairAltFilled;
