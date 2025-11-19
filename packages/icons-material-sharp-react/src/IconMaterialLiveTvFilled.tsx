import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveTvFilled = (props: IIcon) => {

  return (
    <Icon
      name='LiveTvFilled'

      short_name='LiveTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m380-340 280-180-280-180v360Zm-60 220v-80H80v-640h800v640H640v80H320Z"/>
    </Icon>
  );
};

IconMaterialLiveTvFilled.displayName = 'OnesyIconMaterialLiveTvFilled';

export default IconMaterialLiveTvFilled;
