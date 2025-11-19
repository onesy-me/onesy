import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowOutward = (props: IIcon) => {

  return (
    <Icon
      name='ArrowOutward'

      short_name='ArrowOutward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
    </Icon>
  );
};

IconMaterialArrowOutward.displayName = 'OnesyIconMaterialArrowOutward';

export default IconMaterialArrowOutward;
