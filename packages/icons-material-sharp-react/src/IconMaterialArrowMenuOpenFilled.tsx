import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowMenuOpenFilled = (props: IIcon) => {

  return (
    <Icon
      name='ArrowMenuOpenFilled'

      short_name='ArrowMenuOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialArrowMenuOpenFilled.displayName = 'OnesyIconMaterialArrowMenuOpenFilled';

export default IconMaterialArrowMenuOpenFilled;
