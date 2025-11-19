import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRightFilled = (props: IIcon) => {

  return (
    <Icon
      name='ArrowRightFilled'

      short_name='ArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-280v-400l200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialArrowRightFilled.displayName = 'OnesyIconMaterialArrowRightFilled';

export default IconMaterialArrowRightFilled;
