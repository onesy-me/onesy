import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeightFilled = (props: IIcon) => {

  return (
    <Icon
      name='HeightFilled'

      short_name='Height'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z"/>
    </Icon>
  );
};

IconMaterialHeightFilled.displayName = 'OnesyIconMaterialHeightFilled';

export default IconMaterialHeightFilled;
