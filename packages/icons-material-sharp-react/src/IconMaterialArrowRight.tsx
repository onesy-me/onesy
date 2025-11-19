import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRight = (props: IIcon) => {

  return (
    <Icon
      name='ArrowRight'

      short_name='ArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-280v-400l200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialArrowRight.displayName = 'OnesyIconMaterialArrowRight';

export default IconMaterialArrowRight;
