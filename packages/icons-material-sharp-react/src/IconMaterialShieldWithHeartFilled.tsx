import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHeartFilled = (props: IIcon) => {

  return (
    <Icon
      name='ShieldWithHeartFilled'

      short_name='ShieldWithHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q102-92 131-129.5t29-74.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-580q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5 35t22 37.5q17 21.5 48.5 52.5t84.5 79Zm0 240q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Z"/>
    </Icon>
  );
};

IconMaterialShieldWithHeartFilled.displayName = 'OnesyIconMaterialShieldWithHeartFilled';

export default IconMaterialShieldWithHeartFilled;
