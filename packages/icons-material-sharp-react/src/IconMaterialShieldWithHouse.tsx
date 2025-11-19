import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHouse = (props: IIcon) => {

  return (
    <Icon
      name='ShieldWithHouse'

      short_name='ShieldWithHouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-499L256-405q19 63 56 114.5t88 86.5v-156h160v156q51-35 88-86.5T704-405L480-579Zm0-216-240 90v189q0 5 .5 11t.5 11l239-186 239 186q0-5 .5-11t.5-11v-189l-240-90Z"/>
    </Icon>
  );
};

IconMaterialShieldWithHouse.displayName = 'OnesyIconMaterialShieldWithHouse';

export default IconMaterialShieldWithHouse;
