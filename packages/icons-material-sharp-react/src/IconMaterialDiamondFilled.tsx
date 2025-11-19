import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondFilled = (props: IIcon) => {

  return (
    <Icon
      name='DiamondFilled'

      short_name='Diamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m368-630 106-210h12l106 210H368Zm82 474L105-570h345v414Zm60 0v-414h345L510-156Zm148-474L554-840h206l105 210H658Zm-563 0 105-210h206L302-630H95Z"/>
    </Icon>
  );
};

IconMaterialDiamondFilled.displayName = 'OnesyIconMaterialDiamondFilled';

export default IconMaterialDiamondFilled;
